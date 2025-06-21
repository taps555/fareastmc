import { useState } from "react";
import { Menu, X } from "lucide-react"; // pastikan kamu import icon-nya

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "profile", label: "Profil" },
    { id: "news", label: "Berita" },
    { id: "education", label: "Edukasi" },
    { id: "gallery", label: "Galeri" },
    { id: "calendar", label: "Kalender" },
    { id: "chapter", label: "Chapter" },
  ];
  const handleScroll = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Tutup menu mobile
  };

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-blue-500/30 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r rounded-full flex items-center justify-center">
              <img src="/logofe.png" alt="" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">FAREAST MC</h1>
              <p className="text-xs text-blue-400">INDONESIA</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.id ? "text-blue-400" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-500/30">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.id ? "text-blue-400" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
