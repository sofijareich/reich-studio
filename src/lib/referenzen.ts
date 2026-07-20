export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
};

export const stats: Stat[] = [
  { value: 186, suffix: "K", label: "Video-Views generiert", sublabel: "TikTok-Kampagne, 60 Tage" },
  { value: 25, suffix: "K", label: "Interaktionen (Likes)", sublabel: "TikTok-Kampagne, 60 Tage" },
  { value: 3, label: "Betreute Projekte", sublabel: "Gastronomie, Hotel, Nightlife" },
  { value: 3158, label: "Follower erreicht", sublabel: "über betreute Kanäle, aktueller Stand" },
];

export const statsSource =
  "Quelle: TikTok-Analytics-Export (60-Tage-Fenster, Mai–Juli 2024) sowie aktueller Live-Stand der betreuten Instagram-Accounts.";
