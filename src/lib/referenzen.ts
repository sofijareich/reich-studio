export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
};

export const stats: Stat[] = [
  { value: 186, suffix: "K", label: "Video views generated", sublabel: "TikTok campaign, 60 days" },
  { value: 25, suffix: "K", label: "Interactions (likes)", sublabel: "TikTok campaign, 60 days" },
  { value: 3, label: "Projects managed", sublabel: "Food & beverage, hotel, nightlife" },
  { value: 3158, label: "Followers reached", sublabel: "across managed channels, current" },
];

export const statsSource =
  "Source: TikTok Analytics export (60-day window, May–July 2024) plus current live stats from managed Instagram accounts.";
