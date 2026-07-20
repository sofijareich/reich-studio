export type ReferenzMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string };

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
};

export type MediumItem = {
  name: string;
  purpose: string;
  whyItWorked: string;
};

export type CaseStudy = {
  id: string;
  name: string;
  category: string;
  logline: string;
  duration: string;
  cover: string;
  origin: string;
  approach?: string;
  media: MediumItem[];
  stats: Stat[];
  statsSource: string;
  gallery: ReferenzMedia[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "sempia",
    name: "Restaurant Sempia",
    category: "Gastronomie",
    logline: "TikTok von 0 aufgebaut — Gäste kamen wegen des Contents vorbei.",
    duration: "10 Monate laufende Betreuung",
    cover: "/referenzen/sempia/print/menu-1.png",
    origin:
      "Ich habe für Sempia im Alleingang einen TikTok-Account aufgebaut — spontan, ohne grossen Plan, einfach angefangen. Das Ergebnis kam schneller als erwartet: Gäste kamen ins Restaurant und sprachen uns direkt auf den Content an, mit Komplimenten für die Videos und der Freude, endlich einen echten Einblick hinter die Kulissen zu bekommen.",
    approach:
      "Parallel dazu habe ich zehn Monate lang die vorher qualitativ schwachen Printmaterialien komplett erneuert — Menüs, Banner, Sponsorentafeln, Informationsmaterial und Flyer. Auf Instagram liefen weiterhin Videos, die gezielt auf die Zielgruppe zugeschnitten waren und zusätzliche Besucher anlockten.",
    media: [
      {
        name: "TikTok",
        purpose: "Von null aufgebaut, um eine jüngere Zielgruppe zu erreichen und das Restaurant sichtbar zu machen.",
        whyItWorked:
          "Authentischer Content ohne Hochglanz-Anspruch — Gäste erkannten sich darin wieder und kamen deswegen vorbei.",
      },
      {
        name: "Instagram Reels",
        purpose: "Zielgruppengerechte Videos, um zusätzliche Besucher anzulocken.",
        whyItWorked: "Konsequente Ausrichtung auf das, was die Zielgruppe wirklich sehen wollte — statt generischer Food-Clips.",
      },
      {
        name: "Print-Material",
        purpose: "Komplette Erneuerung von Menüs, Bannern, Sponsorentafeln, Informationsmaterial und Flyern.",
        whyItWorked: "Ein hochwertiges Erscheinungsbild schafft Vertrauen, bevor der erste Teller serviert wird.",
      },
    ],
    stats: [
      { value: 186, suffix: "K", label: "TikTok Post Views", sublabel: "+3'837% in 60 Tagen" },
      { value: 25, suffix: "K", label: "TikTok Likes", sublabel: "+17'670% im selben Zeitraum" },
      { value: 2750, label: "TikTok Profilaufrufe", sublabel: "+4'993% in 60 Tagen" },
      { value: 384, label: "Instagram-Follower heute", sublabel: "@restaurantsempia" },
    ],
    statsSource:
      "Quelle: TikTok-Analytics-Export (60-Tage-Fenster, Mai–Juli 2024) sowie aktueller Live-Stand der Accounts.",
    gallery: [
      { type: "video", src: "/referenzen/sempia/ad.webm" },
      { type: "image", src: "/referenzen/sempia/print/menu-1.png", alt: "Sempia Menükarte, Seite 1" },
      { type: "image", src: "/referenzen/sempia/print/menu-2.png", alt: "Sempia Menükarte, Seite 2" },
      { type: "image", src: "/referenzen/sempia/print/wochenmenu.png", alt: "Sempia Wochenmenü" },
      { type: "image", src: "/referenzen/sempia/print/tageskarte.png", alt: "Sempia Tageskarte" },
    ],
  },
  {
    id: "hotel-sempachersee",
    name: "Hotel Sempachersee",
    category: "Hotel & Gastronomie",
    logline: "Ein Konto, vier Marken: Hotel, Vivace, LAGO und Aurora unter einem Dach.",
    duration: "Laufende Betreuung über mehrere Monate",
    cover: "/referenzen/hotel-sempachersee/vivace/interior-wide.jpg",
    origin:
      "Für Hotel Sempachersee habe ich das komplette Marketing-Paket übernommen — nur ohne TikTok. Darunter laufen das Restaurant Vivace, die Bar & Lounge LAGO und die Event Location Aurora, die alle über den gemeinsamen Hotel-Account vermarktet werden.",
    approach:
      "Über Monate hinweg habe ich verschiedene Events beworben, Ads geschaltet und die Ergebnisse laufend analysiert und angepasst — statt einmal aufzusetzen und laufen zu lassen.",
    media: [
      {
        name: "Instagram (Hauptkanal)",
        purpose: "Zentrale Vermarktung von Hotel, Vivace, LAGO und Aurora unter einem Dach.",
        whyItWorked: "Ein Konto, eine klare Linie — Gäste finden alles an einem Ort statt über verstreute Kanäle.",
      },
      {
        name: "Ads",
        purpose: "Gezielte Bewerbung einzelner Events über mehrere Monate.",
        whyItWorked: "Laufende Analyse und Anpassung statt 'einmal einrichten und vergessen' — Budget floss dahin, wo es wirkte.",
      },
      {
        name: "Print-Material",
        purpose: "Sales-Folder, Poster und Informationsmaterial für Hotel, Vivace, LAGO und Aurora.",
        whyItWorked: "Ein einheitliches Erscheinungsbild über alle vier Marken hinweg.",
      },
    ],
    stats: [
      { value: 1257, label: "Instagram-Follower heute", sublabel: "@hotelsempachersee" },
      { value: 390, label: "Beiträge", sublabel: "seit Kontostart" },
      { value: 4, label: "Marken unter einem Dach", sublabel: "Hotel, Vivace, LAGO, Aurora" },
    ],
    statsSource: "Quelle: aktueller Live-Stand des Instagram-Accounts @hotelsempachersee.",
    gallery: [
      { type: "image", src: "/referenzen/hotel-sempachersee/vivace/interior-wide.jpg", alt: "Restaurant Vivace, Innenraum" },
      { type: "image", src: "/referenzen/hotel-sempachersee/vivace/dish.jpg", alt: "Gericht im Restaurant Vivace" },
      { type: "image", src: "/referenzen/hotel-sempachersee/vivace/bar-setup.jpg", alt: "Bar-Aufbau im Restaurant Vivace" },
      { type: "image", src: "/referenzen/hotel-sempachersee/vivace/plants.jpg", alt: "Detail Restaurant Vivace" },
      { type: "image", src: "/referenzen/hotel-sempachersee/vivace/detail.jpg", alt: "Interior-Detail Restaurant Vivace" },
      { type: "video", src: "/referenzen/hotel-sempachersee/aurora/before-after.webm" },
      { type: "image", src: "/referenzen/hotel-sempachersee/print/poster-winterlounge.jpg", alt: "Winterlounge Plakat" },
      { type: "image", src: "/referenzen/hotel-sempachersee/print/sales-folder-01.png", alt: "Sales Folder, Titelseite" },
      { type: "image", src: "/referenzen/hotel-sempachersee/print/sales-folder-03.png", alt: "Sales Folder, Seminare" },
      { type: "image", src: "/referenzen/hotel-sempachersee/print/sales-folder-05.png", alt: "Sales Folder, Zimmer" },
      { type: "image", src: "/referenzen/hotel-sempachersee/print/sales-folder-07.png", alt: "Sales Folder, Rahmenprogramm" },
    ],
  },
  {
    id: "ebikon-bar",
    name: "All in One Bar, Ebikon",
    category: "Nightlife",
    logline: "Zwei Testvideos, ein gepostetes Reel — die echten Zahlen dazu.",
    duration: "Kurzprojekt: 2 Testvideos für ein Event",
    cover: "/referenzen/ebikon-bar/dj-fire.jpg",
    origin:
      "Für die All in One Bar in Ebikon habe ich zwei Testvideos zu einem Event produziert, gedacht als Instagram Reel.",
    approach: "Eines der beiden wurde veröffentlicht — hier sind die echten Zahlen dazu, ohne Beschönigung.",
    media: [
      {
        name: "Instagram Reel",
        purpose: "Ein Event bei der Bar einfangen und für Reichweite über den bestehenden Account hinaus sorgen.",
        whyItWorked: "Echte Momente statt gestellter Szenen — passend zum Nightlife-Publikum der Bar.",
      },
    ],
    stats: [
      { value: 6, label: "Mal geteilt", sublabel: "dieses Reel" },
      { value: 2, label: "Kommentare", sublabel: "dieses Reel" },
      { value: 1517, label: "Follower des Accounts", sublabel: "@allinoneebikon" },
    ],
    statsSource:
      "Quelle: Instagram, aktueller Stand. Genaue Like-Zahlen zeigt Instagram bei diesem Beitrag nicht mehr öffentlich an.",
    gallery: [{ type: "image", src: "/referenzen/ebikon-bar/dj-fire.jpg", alt: "DJ-Set in der All in One Bar, Ebikon" }],
  },
];
