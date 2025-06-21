import {
  Users,
  Crown,
  Shield,
  FileText,
  DollarSign,
  MessageCircle,
  UserCheck,
} from "lucide-react";
import supabase from "../supabaseClient";
import { useEffect, useState } from "react";

const OrganizationStructure = () => {
  //   const organizationData = {
  //     ketua: {
  //       name: "HANAFI",
  //       position: "Ketua",
  //       icon: <Crown className="text-yellow-400" size={32} />,
  //       description: "Memimpin dan mengkoordinasi seluruh kegiatan komunitas",
  //       color: "from-yellow-500 to-yellow-600",
  //     },
  //     wakilKetua: {
  //       name: "JULI RIANTO",
  //       position: "Wakil Ketua",
  //       icon: <Shield className="text-orange-400" size={32} />,
  //       description: "Membantu ketua dalam menjalankan tugas kepemimpinan",
  //       color: "from-orange-500 to-orange-600",
  //     },
  //     pengurus: [
  //       {
  //         name: "MEDY PRAKOSO",
  //         position: "Sekretaris",
  //         icon: <FileText className="text-blue-400" size={28} />,
  //         description: "Mengelola administrasi dan dokumentasi komunitas",
  //         color: "from-blue-500 to-blue-600",
  //       },
  //       {
  //         name: "PANDU WIBISONO",
  //         position: "Bendahara",
  //         icon: <DollarSign className="text-green-400" size={28} />,
  //         description: "Mengelola keuangan dan kas komunitas",
  //         color: "from-green-500 to-green-600",
  //       },
  //       {
  //         name: "RIDHO ALFARIZY",
  //         position: "Humas",
  //         icon: <MessageCircle className="text-purple-400" size={28} />,
  //         description: "Mengelola hubungan masyarakat dan komunikasi eksternal",
  //         color: "from-purple-500 to-purple-600",
  //       },
  //     ],
  //     penasehat: [
  //       {
  //         name: "ZAMZAM",
  //         position: "Penasehat",
  //         icon: <UserCheck className="text-indigo-400" size={28} />,
  //         description: "Memberikan arahan dan masukan strategis",
  //         color: "from-indigo-500 to-indigo-600",
  //       },
  //       {
  //         name: "IMAM",
  //         position: "Penasehat",
  //         icon: <UserCheck className="text-indigo-400" size={28} />,
  //         description: "Memberikan arahan dan masukan strategis",
  //         color: "from-indigo-500 to-indigo-600",
  //       },
  //       {
  //         name: "AGUNG",
  //         position: "Penasehat",
  //         icon: <UserCheck className="text-indigo-400" size={28} />,
  //         description: "Memberikan arahan dan masukan strategis",
  //         color: "from-indigo-500 to-indigo-600",
  //       },
  //     ],
  //   };

  const [organizationData, setOrganizationData] = useState({
    ketua: null,
    wakilKetua: null,
    pengurus: [],
    penasehat: [],
  });

  const fetchOrganization = async () => {
    const { data, error } = await supabase
      .from("organization_members")
      .select("*");

    // console.log("📦 Supabase data:", data);
    // console.log("❌ Supabase error:", error);

    if (error) return;

    const categorized = {
      ketua: null,
      wakilKetua: null,
      pengurus: [],
      penasehat: [],
    };

    data.forEach((member) => {
      switch (member.role) {
        case "ketua":
          categorized.ketua = member;
          break;
        case "wakilKetua":
          categorized.wakilKetua = member;
          break;
        case "pengurus":
          categorized.pengurus.push(member);
          break;
        case "penasehat":
          categorized.penasehat.push(member);
          break;
        default:
          break;
      }
    });

    // console.log("✅ categorized:", categorized);
    setOrganizationData(categorized);
  };

  useEffect(() => {
    fetchOrganization();
  }, []);

  const iconMap = {
    Ketua: <Crown className="text-yellow-400" size={32} />,
    "Wakil Ketua": <Shield className="text-orange-400" size={32} />,
    Sekretaris: <FileText className="text-blue-400" size={28} />,
    Bendahara: <DollarSign className="text-green-400" size={28} />,
    Humas: <MessageCircle className="text-purple-400" size={28} />,
    Penasehat: <UserCheck className="text-indigo-400" size={28} />,
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Struktur <span className="text-blue-400">Organisasi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Struktur kepengurusan Fareast MC Indonesia yang solid dan
            berpengalaman
          </p>
        </div>

        {/* Ketua */}
        {organizationData.ketua && (
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="bg-black/50 rounded-2xl p-8 border border-yellow-500/50 hover:border-yellow-500/80 transition-all hover:transform hover:scale-105 max-w-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/30">
                    {iconMap[organizationData.ketua.position]}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {organizationData.ketua.name}
                  </h3>
                  <p className="text-yellow-400 font-semibold text-lg mb-3">
                    {organizationData.ketua.position}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {organizationData.ketua.description}
                  </p>
                </div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-yellow-500 to-orange-500"></div>
            </div>
          </div>
        )}

        {/* Wakil Ketua */}

        {organizationData.wakilKetua && (
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="bg-black/50 rounded-2xl p-8 border border-orange-500/50 hover:border-orange-500/80 transition-all hover:transform hover:scale-105 max-w-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/30">
                    {iconMap[organizationData.wakilKetua.position]}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {organizationData.wakilKetua.name}
                  </h3>
                  <p className="text-orange-400 font-semibold mb-3">
                    {organizationData.wakilKetua.position}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {organizationData.wakilKetua.description}
                  </p>
                </div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-orange-500 to-blue-500"></div>
            </div>
          </div>
        )}

        {/* Pengurus Inti */}
        {organizationData.pengurus.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Pengurus Inti
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {organizationData.pengurus.map((pengurus, index) => (
                <div
                  key={index}
                  className="bg-black/50 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all hover:transform hover:scale-105"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${pengurus.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      {iconMap[pengurus.position]}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {pengurus.name}
                    </h4>
                    <p className="text-blue-400 font-semibold mb-3">
                      {pengurus.position}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {pengurus.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Penasehat */}
        {organizationData.penasehat.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Dewan Penasehat
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {organizationData.penasehat.map((penasehat, index) => (
                <div
                  key={index}
                  className="bg-black/50 rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-500/60 transition-all hover:transform hover:scale-105"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${penasehat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      {iconMap[penasehat.position]}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {penasehat.name}
                    </h4>
                    <p className="text-indigo-400 font-semibold mb-3">
                      {penasehat.position}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {penasehat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Anggota Section */}
        {/* <div className="text-center">
          <div className="bg-black/50 rounded-xl p-8 border border-blue-500/30 max-w-md mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
              <Users className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">ANGGOTA</h3>
            <p className="text-blue-400 font-semibold mb-4">
              1,250+ Anggota Aktif
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Anggota dari berbagai chapter di seluruh Indonesia yang tergabung
              dalam komunitas Fareast MC
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Lihat Daftar Anggota
            </button>
          </div>
        </div> */}

        {/* Organization Chart Visual */}
        {/*  */}
      </div>
    </section>
  );
};

export default OrganizationStructure;
