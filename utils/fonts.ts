import localFont from "next/font/local";

export const figTree = localFont({
  src: [
    {
      path: "../public/fonts/Figtree-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Figtree-Italic-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/static/Figtree-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/static/Figtree-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-fig-tree",
});
