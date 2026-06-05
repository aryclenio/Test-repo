import React from "react";

export interface MetricCardProps {
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  trendText: string;
  trendClass: string;
  label: string;
  value: number | string;
}

export function formatMetricValue(value: number | string): string {
  // Try to parse string to number if possible (but avoid parsing pure strings like "94%")
  if (typeof value === "string") {
    // Check if it's a numeric string
    if (/^\d+$/.test(value)) {
      value = Number(value);
    } else {
      return value;
    }
  }

  if (typeof value === "number" && !isNaN(value)) {
    if (value >= 1000) {
      const formatted = (value / 1000).toFixed(1);
      return formatted.endsWith(".0")
        ? `${formatted.slice(0, -2)}k`
        : `${formatted}k`;
    }
    return value.toString();
  }

  return String(value);
}

export default function MetricCard({
  icon,
  iconBgClass,
  iconTextClass,
  trendText,
  trendClass,
  label,
  value,
}: MetricCardProps) {
  const formattedValue = formatMetricValue(value);

  return (
    <div className="bg-white p-lg rounded-2xl shadow-sm border border-surface-container flex flex-col gap-sm">
      <div className="flex items-center justify-between">
        <span className={`p-sm rounded-xl font-bold ${iconBgClass} ${iconTextClass}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </span>
        <span className={`font-label-md text-label-md font-bold ${trendClass}`}>
          {trendText}
        </span>
      </div>
      <div>
        <h3 className="font-body-md text-body-md text-on-surface-variant">{label}</h3>
        <p className="font-headline-md text-headline-md text-text-dark font-bold">
          {formattedValue}
        </p>
      </div>
    </div>
  );
}
