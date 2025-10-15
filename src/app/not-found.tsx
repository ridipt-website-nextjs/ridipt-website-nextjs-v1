// app/not-found.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Section from '@/components/section-structure';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  MessageCircle, 
  Compass,
  Sparkles,
  MapPin
} from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent-foreground/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating Orbs */}
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-accent-foreground/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent-foreground/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <Section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated 404 */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-accent-foreground/5 rounded-full blur-3xl animate-pulse" />
            </div>
            
            <div className="relative">
              {/* Large 404 Number */}
              <h1 className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-bold leading-none">
                <span className="inline-block animate-bounce [animation-delay:0s] bg-gradient-to-br from-accent-foreground via-accent-foreground to-accent-foreground/60 bg-clip-text text-transparent">
                  4
                </span>
                <span className="inline-block animate-bounce [animation-delay:0.1s] bg-gradient-to-br from-accent-foreground via-accent-foreground to-accent-foreground/60 bg-clip-text text-transparent">
                  0
                </span>
                <span className="inline-block animate-bounce [animation-delay:0.2s] bg-gradient-to-br from-accent-foreground via-accent-foreground to-accent-foreground/60 bg-clip-text text-transparent">
                  4
                </span>
              </h1>
              
              {/* Floating Icons */}
              <div className="absolute inset-0 pointer-events-none">
                <Compass className="absolute top-10 left-10 w-8 h-8 text-accent-foreground/40 animate-spin [animation-duration:8s]" />
                <MapPin className="absolute top-20 right-20 w-6 h-6 text-accent-foreground/40 animate-bounce [animation-delay:0.5s]" />
                <Sparkles className="absolute bottom-20 left-1/4 w-7 h-7 text-accent-foreground/40 animate-pulse [animation-delay:1s]" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Oops! Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the digital wilderness. 
              But don't worry, we'll help you find your way back!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 pt-8">
            <Button
              size="lg"
              onClick={() => router.back()}
              className="group relative overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-foreground/20 to-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="relative">Go Back</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="group w-full sm:w-auto border-accent-foreground/20 hover:border-accent-foreground/40 hover:bg-accent-foreground/5"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Home Page
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="group w-full sm:w-auto border-accent-foreground/20 hover:border-accent-foreground/40 hover:bg-accent-foreground/5"
            >
              <Link href="/get-in-touch">
                <MessageCircle className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-12 border-t border-border/50 mt-12">
            <p className="text-sm text-muted-foreground mb-4">Popular Pages</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                // { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about-us', label: 'About Us' },
                // { href: '/industries', label: 'Industries' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group text-sm font-medium text-muted-foreground hover:text-accent-foreground transition-colors relative"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-foreground group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
