import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-blue-500/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r rounded-full flex items-center justify-center ">
                <img src="/logofe.png" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">FAREAST MC</h3>
                <p className="text-xs text-blue-400">INDONESIA</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Komunitas motor klasik terdepan di Indonesia yang mengedepankan
              persaudaraan, edukasi, dan petualangan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#profile"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Profil Komunitas
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Berita & Artikel
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Konten Edukasi
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Galeri
                </a>
              </li>
              <li>
                <a
                  href="#calendar"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Kalender Kegiatan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">
                  Jakarta, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">info@fareastmc.id</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                  <Mail size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Fareast MC Indonesia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
