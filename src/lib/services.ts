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
    price: "from CHF 2'800",
    period: "one-time",
    description:
      "The entry point: a website and the automations that stick around.",
    points: ["Website setup", "1-2 core automations", "Clear handover"],
    details: [
      "Website built to this design standard, tailored to you",
      "1-2 automations for the tasks that eat the most time",
      "Handover documentation so you understand what's running",
      "No subscription, no commitment afterward",
    ],
  },
  {
    name: "Growth",
    price: "from CHF 2'500",
    period: "/month",
    description:
      "Ongoing content and leads, without you having to stay on top of it.",
    points: ["Content production", "Lead automation", "Monthly update"],
    details: [
      "Ongoing content production for your channels",
      "Automated lead capture and routing",
      "Monthly update: what happened, what's next",
      "Adjustments to existing systems included",
    ],
    featured: true,
  },
  {
    name: "Full-Service",
    price: "from CHF 5'000",
    period: "/month",
    description: "You do your work. We handle the rest — completely.",
    points: ["Everything in Growth", "Full client communication", "Direct line to me"],
    details: [
      "Everything in Growth, plus ongoing development",
      "I handle communication with your clients in the marketing process",
      "Priority on requests and adjustments",
      "Direct, personal line to me — no queue",
    ],
  },
];
