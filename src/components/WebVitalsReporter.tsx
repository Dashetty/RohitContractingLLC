"use client";

import { useEffect } from "react";
import { onCLS, onLCP, onINP, onFCP, onTTFB } from "web-vitals";

export default function WebVitalsReporter() {
  useEffect(() => {
    onCLS((metric) => {
      console.log(
        `%c[Web Vitals] CLS: ${metric.value.toFixed(4)}`,
        "color: #D85A30; font-weight: bold;"
      );
    });
    onLCP((metric) => {
      console.log(
        `%c[Web Vitals] LCP: ${(metric.value / 1000).toFixed(2)}s`,
        "color: #D85A30; font-weight: bold;"
      );
    });
    onINP((metric) => {
      console.log(
        `%c[Web Vitals] INP: ${metric.value.toFixed(0)}ms`,
        "color: #D85A30; font-weight: bold;"
      );
    });
    onFCP((metric) => {
      console.log(
        `%c[Web Vitals] FCP: ${(metric.value / 1000).toFixed(2)}s`,
        "color: #D85A30; font-weight: bold;"
      );
    });
    onTTFB((metric) => {
      console.log(
        `%c[Web Vitals] TTFB: ${(metric.value / 1000).toFixed(2)}s`,
        "color: #D85A30; font-weight: bold;"
      );
    });
  }, []);

  return null;
}
