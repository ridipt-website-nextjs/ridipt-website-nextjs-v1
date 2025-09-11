'use client'
import { useState, useEffect, useMemo } from 'react';

interface UseHostOptions {
  customUrl?: string;
  includePort?: boolean;
}

interface HostInfo {
  protocol: string;
  hostname: string;
  port?: string;
  host: string; // hostname + port
  origin: string;
  baseUrl: string;
}

const useHostWithProtocol = (options: UseHostOptions = {}): HostInfo => {
  const { customUrl, includePort = true } = options;
  
  const [hostInfo, setHostInfo] = useState<HostInfo>({
    protocol: '',
    hostname: '',
    port: '',
    host: '',
    origin: '',
    baseUrl: ''
  });

  useEffect(() => {
    let urlObj: URL;

    try {
      if (customUrl) {
        // Custom URL provided
        urlObj = new URL(customUrl);
      } else if (typeof window !== 'undefined') {
        // Browser environment
        urlObj = new URL(window.location.href);
      } else {
        // Server-side (Next.js)
        return;
      }

      const baseUrl = includePort && urlObj.port 
        ? `${urlObj.protocol}//${urlObj.hostname}:${urlObj.port}`
        : `${urlObj.protocol}//${urlObj.hostname}`;

      setHostInfo({
        protocol: urlObj.protocol.replace(':', ''), // Remove colon
        hostname: urlObj.hostname,
        port: urlObj.port,
        host: urlObj.host,
        origin: urlObj.origin,
        baseUrl
      });

    } catch (error) {
      console.error('Error parsing URL:', error);
    }
  }, [customUrl, includePort]);

  return hostInfo;
};

export default useHostWithProtocol;