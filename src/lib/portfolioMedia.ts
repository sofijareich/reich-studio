export type PortfolioMediaItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

// Order matches the "gallery" arrays in messages/{locale}.json under
// PortfolioPage.projects[].gallery — each entry there supplies the alt/caption
// text for the item at the same index here.
export const portfolioMedia: Record<string, PortfolioMediaItem[]> = {
  sempia: [
    { type: "video", src: "/referenzen/sempia/ad.webm" },
    { type: "image", src: "/referenzen/sempia/print/menu-1.png" },
    { type: "image", src: "/referenzen/sempia/print/wochenmenu.png" },
  ],
  "hotel-sempachersee": [
    { type: "image", src: "/referenzen/hotel-sempachersee/vivace/interior-wide.jpg" },
    { type: "image", src: "/referenzen/hotel-sempachersee/vivace/dish.jpg" },
    { type: "image", src: "/referenzen/hotel-sempachersee/vivace/bar-setup.jpg" },
    { type: "video", src: "/referenzen/hotel-sempachersee/aurora/before-after.webm" },
    { type: "video", src: "/referenzen/hotel-sempachersee/lago/promo.webm" },
    { type: "image", src: "/referenzen/hotel-sempachersee/print/poster-winterlounge.jpg" },
  ],
  "ebikon-bar": [
    { type: "video", src: "/referenzen/ebikon-bar/testvideo-instagram.mp4" },
    { type: "image", src: "/referenzen/ebikon-bar/dj-fire.jpg" },
    { type: "image", src: "/referenzen/ebikon-bar/crowd.jpg" },
    { type: "image", src: "/referenzen/ebikon-bar/action.jpg" },
    { type: "image", src: "/referenzen/ebikon-bar/bar-ambiance.jpg" },
    { type: "image", src: "/referenzen/ebikon-bar/dj-1.jpg" },
    { type: "image", src: "/referenzen/ebikon-bar/performer.jpg" },
  ],
};

export const portfolioCover: Record<string, string> = {
  sempia: "/referenzen/sempia/print/menu-1.png",
  "hotel-sempachersee": "/referenzen/hotel-sempachersee/vivace/interior-wide.jpg",
  "ebikon-bar": "/referenzen/ebikon-bar/dj-fire.jpg",
};
