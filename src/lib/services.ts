export type Service = {
  name: string;
  price: string;
  period: string;
  description: string;
  points: string[];
  details: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    name: "Starter",
    price: "ab CHF 2'800",
    period: "einmalig",
    description:
      "Der Einstieg: eine Website und die Automatisierungen, die stehen bleiben.",
    points: ["Website-Setup", "1-2 Kernautomatisierungen", "Klare Übergabe"],
    details: [
      "Website nach diesem Design-Standard, auf dich zugeschnitten",
      "1-2 Automatisierungen für die Aufgaben, die am meisten Zeit fressen",
      "Übergabe-Dokumentation, damit du verstehst, was läuft",
      "Kein Abo, keine Verpflichtung danach",
    ],
  },
  {
    name: "Growth",
    price: "ab CHF 2'500",
    period: "/Monat",
    description:
      "Laufender Content und Leads, ohne dass du selbst dranbleiben musst.",
    points: ["Content-Produktion", "Lead-Automatisierung", "Monatliches Update"],
    details: [
      "Laufende Content-Produktion für deine Kanäle",
      "Automatisierte Lead-Erfassung und -Weiterleitung",
      "Monatliches Update: was lief, was als Nächstes kommt",
      "Anpassungen an bestehenden Systemen inklusive",
    ],
    featured: true,
  },
  {
    name: "Full-Service",
    price: "ab CHF 5'000",
    period: "/Monat",
    description: "Du machst dein Fachgebiet. Wir übernehmen den Rest — komplett.",
    points: ["Alles aus Growth", "Volle Kundenkommunikation", "Direkter Draht zu mir"],
    details: [
      "Alles aus Growth, plus laufende Weiterentwicklung",
      "Ich übernehme die Kommunikation mit deinen Endkund:innen im Marketing-Prozess",
      "Priorität bei Anfragen und Anpassungen",
      "Direkter, persönlicher Draht zu mir — keine Warteschlange",
    ],
  },
];
