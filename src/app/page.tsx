import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The origin",
  description:
    "Love movies? Learn a new language while you watch. Enjoy films, pick up conversation skills, and explore new cultures.",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
