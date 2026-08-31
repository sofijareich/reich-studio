import type { Stat } from "./referenzen";

export type PortfolioProject = {
  id: string;
  name: string;
  shortName: string;
  category: string;
  logline: string;
  duration: string;
  origin: string;
  approach: string;
  statsSource: string;
  stats: Stat[];
  gallery: { alt: string }[];
};
