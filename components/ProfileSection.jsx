import { Users, Target, Award } from "lucide-react";

const ProfileSection = () => {
  const profileData = [
    {
      icon: <Users className="text-blue-400" size={48} />,
      title: "Sejarah Komunitas",
      content:
        "Sejarah berdirinya Far East pada tahun 2003 di surabaya far east sendiri adalah komunitas motor tua yang memprioritaskan motor tua tahun 70an kebawah yang berasal dari inggris,german,america. Far east juga terafiliasi dengan motor antique club indonesia sejak 2004. Dengan member saat ini 60 orang",
    },
    {
      icon: <Target className="text-blue-400" size={48} />,
      title: "Visi & Misi",
      content:
        "Visi : Far East Classic Motorcycle bertujuan merangkul pecinta motor tua di Surabaya dengan membangun komunitas yang saling terhubung, mendukung, dan berbagi pengetahuan. Melalui visi ini, mereka ingin memperkuat ikatan antaranggota, menjaga keberlanjutan minat terhadap motor klasik, serta menciptakan ekosistem yang menghargai warisan otomotif. Dengan semangat kebersamaan, komunitas ini diharapkan menjadi wadah inspiratif bagi pecinta motor tua di Surabaya.",
      contentmisi:
        "Misi : Far East Classic Motorcycle memiliki misi untuk melebarkan sayap organisasi, memperluas jangkauan komunitas pecinta motor klasik di luar Surabaya. Dengan semangat ini, mereka berkomitmen memperkuat eksistensi, mengajak lebih banyak penggemar bergabung, serta melestarikan warisan otomotif secara lebih luas.",
    },
    {
      icon: <Award className="text-blue-400" size={48} />,
      title: "Tokoh Penting",
      content:
        "Dipimpin oleh Bro Agus Santoso sebagai Founder & President, didukung oleh Vice President Bro Dedi Kurniawan, dan Secretary General Sis Maya Sari. Tim leadership yang berpengalaman dalam dunia otomotif klasik selama lebih dari 20 tahun.",
    },
  ];

  return (
    <section id="profile" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Profil <span className="text-blue-400">Komunitas</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profileData.map((item, index) => (
            <div
              key={index}
              className="bg-black/50 p-8 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-center">
                {item.content}
              </p>
              <p className="text-gray-300 leading-relaxed text-center">
                {item.contentmisi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
