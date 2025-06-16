"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfileSection from "./components/ProfileSection";
import NewsSection from "./components/NewsSection";
import EducationSection from "./components/EducationSection";
import GallerySection from "./components/GallerySection";
import CalendarSection from "./components/CalendarSection";
import ChapterMap from "./components/ChapterMap";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 2 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero />
      <ProfileSection />
      <NewsSection />
      <EducationSection />
      <GallerySection />
      <CalendarSection />
      <ChapterMap />
      <Footer />
    </div>
  );
}

export default App;
