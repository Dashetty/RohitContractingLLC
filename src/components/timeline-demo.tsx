"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

const data = [
  {
    title: "2014",
    content: (
      <div>
        <p className="mb-4 text-sm leading-7 text-[var(--text-body)] sm:text-base">
          Started with a vision to revolutionize UAE contracting from Dubai.
        </p>
        <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          Built the foundation for a company focused on quality, reliability,
          and long-term client trust.
        </p>
      </div>
    ),
  },
  {
    title: "2016",
    content: (
      <div>
        <p className="mb-4 text-sm leading-7 text-[var(--text-body)] sm:text-base">
          Completed our first major commercial tower project.
        </p>
        <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          This milestone expanded our reputation across Dubai&apos;s contracting
          sector.
        </p>
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div>
        <p className="mb-4 text-sm leading-7 text-[var(--text-body)] sm:text-base">
          Opened our material trading division to support project delivery.
        </p>
        <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          This strengthened procurement, speed, and control across active sites.
        </p>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <p className="mb-4 text-sm leading-7 text-[var(--text-body)] sm:text-base">
          Launched industrial procurement services for larger-scale needs.
        </p>
        <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          We broadened our service scope to support more complex builds and
          supply chains.
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-4 text-sm leading-7 text-[var(--text-body)] sm:text-base">
          Reached the milestone of 500 completed projects.
        </p>
        <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          A strong sign of consistent execution and repeat client confidence.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-4 text-sm leading-7 text-[var(--text-body)] sm:text-base">
          Recognized as a top contracting partner in the UAE market.
        </p>
        <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          We continue to deliver premium villa construction and trusted material
          supply.
        </p>
      </div>
    ),
  },
];

export default function TimelineDemo() {
  return (
    <div className="relative w-full overflow-clip">
      <div className="mx-auto max-w-3xl text-center px-4 sm:px-6 lg:px-8 pt-4 pb-10 sm:pt-6 sm:pb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(216,90,48,0.18)] bg-[rgba(216,90,48,0.08)] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm font-medium tracking-wide text-accent">
            Our Journey
          </span>
        </div>
        <h3
          className="mt-6 heading-serif text-3xl font-bold sm:text-4xl"
          style={{ color: "var(--text-heading)" }}
        >
          Key milestones in our growth
        </h3>
      </div>

      <Timeline data={data} />
    </div>
  );
}