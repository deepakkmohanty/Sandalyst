import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/sections/home/home";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Sandalyst | A style for every you" },
    { name: "description", content: "Discover Sandalyst's women's slides, toe-post sandals, cross-straps, wedges and flats. Explore the collection preview." },
    { property: "og:title", content: "Sandalyst | A style for every you" },
    { property: "og:description", content: "A considered collection of women's footwear. Explore the Sandalyst storefront preview." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});
