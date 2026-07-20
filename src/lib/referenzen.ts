export type ReferenzMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string };

export type Referenz = {
  id: string;
  name: string;
  category: string;
  description: string;
  cover: string;
  media: ReferenzMedia[];
};

export const referenzen: Referenz[] = [
  {
    id: "vivace",
    name: "Restaurant Vivace, Nottwil",
    category: "Gastronomie",
    description:
      "Food- und Interior-Fotografie für die Speisekarte, Social Media und den Webauftritt — natürliches Licht, keine Studio-Sterilität.",
    cover: "/referenzen/vivace/interior-wide.jpg",
    media: [
      { type: "image", src: "/referenzen/vivace/interior-wide.jpg", alt: "Restaurant Vivace, Innenraum" },
      { type: "image", src: "/referenzen/vivace/dish.jpg", alt: "Gericht im Restaurant Vivace" },
      { type: "image", src: "/referenzen/vivace/bar-setup.jpg", alt: "Bar-Aufbau im Restaurant Vivace" },
      { type: "image", src: "/referenzen/vivace/plants.jpg", alt: "Detailaufnahme Restaurant Vivace" },
      { type: "image", src: "/referenzen/vivace/detail.jpg", alt: "Interior-Detail Restaurant Vivace" },
    ],
  },
  {
    id: "sempia",
    name: "Restaurant Sempia, Nottwil",
    category: "Gastronomie",
    description: "Kurzer Video-Ad für Social Media — Ton und Schnitt im Marken-Stil.",
    cover: "/referenzen/sempia/ad.webm",
    media: [{ type: "video", src: "/referenzen/sempia/ad.webm" }],
  },
  {
    id: "ebikon-bar",
    name: "All in One Bar, Ebikon",
    category: "Nightlife",
    description: "Event-Fotografie an einem Live-Abend — DJ-Set, Stimmung, Bewegung statt gestellter Posen.",
    cover: "/referenzen/ebikon-bar/dj-fire.jpg",
    media: [{ type: "image", src: "/referenzen/ebikon-bar/dj-fire.jpg", alt: "DJ-Set in der All in One Bar, Ebikon" }],
  },
  {
    id: "eventlocation",
    name: "Event Location — Vorher/Nachher",
    category: "Event",
    description: "Vorher/Nachher-Video für eine Eventlocation — dieselbe Kamera, derselbe Rahmen, anderer Eindruck.",
    cover: "/referenzen/eventlocation/before-after.webm",
    media: [{ type: "video", src: "/referenzen/eventlocation/before-after.webm" }],
  },
];
