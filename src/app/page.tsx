import HomePage from "@/components/home/page";
import { Metadata } from "next";

export const metadata:Metadata={
   title: "Events & Webinars | Shabuj Global Education",
   description: "Explore upcoming and past events, seminars, and webinars by Shabuj Global Education. Stay updated on study abroad opportunities and educational guidance.",
   openGraph: {
    title: "Events & Webinars | Shabuj Global Education",
    description: "Explore upcoming and past events, seminars, and webinars by Shabuj Global Education. Stay updated on study abroad opportunities and educational guidance.",
    url: "https://shabuj-global-education.vercel.app",
    siteName: "Shabuj Global Education",
    type: "website",
  },
}

export default function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}
