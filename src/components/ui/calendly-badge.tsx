"use client";

import { useEffect } from "react";

// Declare Calendly type for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

export function CalendlyBadge() {
  useEffect(() => {
    // Function to initialize the badge widget
    const initBadgeWidget = () => {
      if (window.Calendly && window.Calendly.initBadgeWidget) {
        // Remove any existing badge widgets
        const existingBadges = document.querySelectorAll('.calendly-badge-widget, [data-calendly-badge]');
        existingBadges.forEach(badge => badge.remove());
        
        // Initialize badge widget with updated text
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/workdun/30min',
          text: 'Schedule Call with Us',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: false
        });
      }
    };
    
    // Check if script already exists
    let script = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]') as HTMLScriptElement;
    
    if (!script) {
      // Create and load script if it doesn't exist
      script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        // Wait a bit for Calendly to fully initialize
        setTimeout(initBadgeWidget, 200);
      };
      
      document.body.appendChild(script);
    } else {
      // Script already loaded, initialize immediately or wait for it
      if (window.Calendly) {
        initBadgeWidget();
      } else {
        // Wait for Calendly to be available
        const checkInterval = setInterval(() => {
          if (window.Calendly) {
            clearInterval(checkInterval);
            initBadgeWidget();
          }
        }, 100);
        
        // Clear interval after 5 seconds to prevent infinite loop
        setTimeout(() => clearInterval(checkInterval), 5000);
      }
    }
    
    return () => {
      // Cleanup: remove badge widget on unmount
      const existingBadges = document.querySelectorAll('.calendly-badge-widget, [data-calendly-badge]');
      existingBadges.forEach(badge => badge.remove());
    };
  }, []);

  return null; // This component doesn't render anything visible
}

