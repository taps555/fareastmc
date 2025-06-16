import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100); // Delay sedikit untuk efek masuk

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900
      transition-opacity duration-1000 ease-out transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-yellow-500/50">
            <img src="/logofe.png" alt="" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            FAREAST MC
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-orange-400 mb-6">
            INDONESIA
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Komunitas Motor Klasik Terdepan di Indonesia
            <br />
            <span className="text-orange-400">
              Passion • Brotherhood • Adventure
            </span>
          </p>
        </div>
        {/* 
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
            Bergabung Sekarang
          </button>
          <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
            Pelajari Lebih Lanjut
          </button>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-orange-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
