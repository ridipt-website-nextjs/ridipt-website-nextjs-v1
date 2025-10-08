'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { logEvent, Analytics } from 'firebase/analytics';
import { getFirebaseAnalytics } from '@/firebase.config';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const scrollTracked = useRef({ 25: false, 50: false, 75: false, 100: false });
  const startTimeRef = useRef(Date.now());

  // Initialize analytics
  useEffect(() => {
    getFirebaseAnalytics().then(setAnalytics);
  }, []);

  // Track page views
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href
      });
    }
    
    // Reset scroll tracking for new page
    scrollTracked.current = { 25: false, 50: false, 75: false, 100: false };
    startTimeRef.current = Date.now();
  }, [pathname, searchParams, analytics]);

  useEffect(() => {
    if (!analytics) return;

    // ===== ALL CLICK EVENTS TRACKING =====
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Track all buttons
      const button = target.closest('button');
      if (button) {
        const buttonText = button.innerText || button.getAttribute('aria-label') || 'unnamed_button';
        const buttonId = button.id || 'no_id';
        const buttonClass = button.className || 'no_class';
        
        logEvent(analytics, 'button_click', {
          button_text: buttonText,
          button_id: buttonId,
          button_class: buttonClass,
          page_path: pathname
        });
      }

      // Track all links
      const link = target.closest('a');
      if (link && link.href) {
        const isOutbound = !link.href.startsWith(window.location.origin);
        
        logEvent(analytics, 'link_click', {
          link_url: link.href,
          link_text: link.innerText || link.getAttribute('aria-label') || 'unnamed_link',
          outbound: isOutbound,
          page_path: pathname
        });
      }

      // Track clicks on images
      const img = target.closest('img');
      if (img) {
        logEvent(analytics, 'image_click', {
          image_src: img.src,
          image_alt: img.alt || 'no_alt',
          page_path: pathname
        });
      }

      // Track div/section clicks with data attributes
      const clickableDiv = target.closest('[data-track-click]');
      if (clickableDiv) {
        logEvent(analytics, 'section_click', {
          section_name: clickableDiv.getAttribute('data-track-click'),
          page_path: pathname
        });
      }
    };

    // ===== ALL FORM EVENTS TRACKING =====
    const handleFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      const formName = form.name || form.id || 'unnamed_form';
      const formAction = form.action || 'no_action';
      
      logEvent(analytics, 'form_submit', {
        form_name: formName,
        form_action: formAction,
        page_path: pathname
      });
    };

    const handleInputFocus = (e: Event) => {
      const input = e.target as HTMLInputElement;
      const inputName = input.name || input.id || 'unnamed_input';
      const inputType = input.type || 'text';
      
      logEvent(analytics, 'input_focus', {
        input_name: inputName,
        input_type: inputType,
        page_path: pathname
      });
    };

    // ===== SCROLL TRACKING =====
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercentage >= 25 && !scrollTracked.current[25]) {
        scrollTracked.current[25] = true;
        logEvent(analytics, 'scroll_depth', { 
          percent: 25,
          page_path: pathname 
        });
      }
      if (scrollPercentage >= 50 && !scrollTracked.current[50]) {
        scrollTracked.current[50] = true;
        logEvent(analytics, 'scroll_depth', { 
          percent: 50,
          page_path: pathname 
        });
      }
      if (scrollPercentage >= 75 && !scrollTracked.current[75]) {
        scrollTracked.current[75] = true;
        logEvent(analytics, 'scroll_depth', { 
          percent: 75,
          page_path: pathname 
        });
      }
      if (scrollPercentage >= 90 && !scrollTracked.current[100]) {
        scrollTracked.current[100] = true;
        logEvent(analytics, 'scroll_depth', { 
          percent: 100,
          page_path: pathname 
        });
      }
    };

    // ===== USER ENGAGEMENT =====
    const handleUserEngagement = () => {
      logEvent(analytics, 'user_engagement', {
        engagement_time_msec: 10000,
        page_path: pathname
      });
    };

    // ===== SESSION DURATION =====
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
        logEvent(analytics, 'page_time_spent', {
          duration_seconds: timeSpent,
          page_path: pathname
        });
      }
    };

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      logEvent(analytics, 'session_end', {
        duration_seconds: timeSpent,
        page_path: pathname
      });
    };

    // ===== VIDEO TRACKING (if you have videos) =====
    const handleVideoPlay = (e: Event) => {
      const video = e.target as HTMLVideoElement;
      logEvent(analytics, 'video_play', {
        video_src: video.src,
        page_path: pathname
      });
    };

    const handleVideoPause = (e: Event) => {
      const video = e.target as HTMLVideoElement;
      logEvent(analytics, 'video_pause', {
        video_src: video.src,
        current_time: Math.round(video.currentTime),
        page_path: pathname
      });
    };

    // ===== SEARCH TRACKING =====
    const handleSearch = (e: Event) => {
      const input = e.target as HTMLInputElement;
      if (input.type === 'search' || input.name.toLowerCase().includes('search')) {
        logEvent(analytics, 'search', {
          search_term: input.value,
          page_path: pathname
        });
      }
    };

    // Add all event listeners
    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleFormSubmit, true);
    document.addEventListener('focus', handleInputFocus, true);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Search tracking (on input with debounce)
    let searchTimeout: NodeJS.Timeout;
    const debouncedSearch = (e: Event) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => handleSearch(e), 1000);
    };
    document.addEventListener('input', debouncedSearch);

    // Video tracking
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('play', handleVideoPlay);
      video.addEventListener('pause', handleVideoPause);
    });

    // User engagement interval (every 10 seconds)
    const engagementInterval = setInterval(handleUserEngagement, 10000);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleFormSubmit, true);
      document.removeEventListener('focus', handleInputFocus, true);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('input', debouncedSearch);
      
      videos.forEach(video => {
        video.removeEventListener('play', handleVideoPlay);
        video.removeEventListener('pause', handleVideoPause);
      });
      
      clearInterval(engagementInterval);
      clearTimeout(searchTimeout);
    };
  }, [pathname, analytics]);

  return <>{children}</>;
}