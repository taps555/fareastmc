"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const CalendarSection = () => {
  const [selectedMonth, setSelectedMonth] = useState("Touring");

  const events = {
    Touring: [
      {
        id: 1,
        title: "Jambore rakerda rakernas serta wingday",
        date: "-",
        time: "-",
        location: "Surabaya",
        participants: "-",
        type: "touring",
        description:
          "Touring santai sambil mempererat persaudaraan, menikmati keindahan alam, dan menyalakan semangat kebersamaan dalam satu perjalanan penuh makna!",
      },
      {
        id: 2,
        title: "Mempererat tali persaudaraan anggota club FAREAST MC INDONESIA",
        date: "Setiap Jumat",
        time: "-",
        location: "Bambu runcing surabaya",
        participants: "Anggota",
        type: "Kumpul",
        description:
          "Touring santai sambil mempererat persaudaraan, menikmati keindahan alam, dan menyalakan semangat kebersamaan dalam satu perjalanan penuh makna!",
      },
    ],
    Rapat: [
      {
        id: 1,
        title: "Kumpul rutin sesama member anniversary club dan wingday",
        date: "-",
        time: "-",
        location: "Basecamp Fareast MC, Surabaya",
        participants: "Anggota",
        type: "meeting",
        description:
          "Rapat koordinasi mingguan membahas agenda kegiatan bulan April",
      },
      {
        id: 2,
        title: "Membahas internal club",
        date: "-",
        time: "-",
        location: "Basecamp Fareast MC, Surabaya",
        participants: "Anggota",
        type: "meeting",
        description:
          "Rapat koordinasi mingguan membahas agenda kegiatan bulan April",
      },
    ],
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case "touring":
        return "bg-green-600";
      case "meeting":
        return "bg-blue-600";
      case "workshop":
        return "bg-purple-600";
      case "meetup":
        return "bg-orange-600";
      default:
        return "bg-gray-600";
    }
  };

  const getEventTypeLabel = (type) => {
    switch (type) {
      case "touring":
        return "Touring";
      case "meeting":
        return "Rapat";
      case "workshop":
        return "Workshop";
      case "meetup":
        return "Meet Up";
      default:
        return "Event";
    }
  };

  return (
    <section id="calendar" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kalender <span className="text-blue-400">Kegiatan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Jadwal lengkap kegiatan komunitas mulai dari touring, workshop,
            hingga rapat rutin
          </p>
        </div>

        {/* Month Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/50 rounded-lg p-1 border border-blue-500/30">
            <button
              onClick={() => setSelectedMonth("Touring")}
              className={`px-6 py-3 rounded-md transition-all ${
                selectedMonth === "Touring"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Event
            </button>
            <button
              onClick={() => setSelectedMonth("Rapat")}
              className={`px-6 py-3 rounded-md transition-all ${
                selectedMonth === "Rapat"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Rapat
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {events[selectedMonth].map((event) => (
            <div
              key={event.id}
              className="bg-black/50 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center space-x-3 mb-3 md:mb-0">
                  <span
                    className={`${getEventTypeColor(
                      event.type
                    )} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                  >
                    {getEventTypeLabel(event.type)}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {event.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users size={16} />
                  <span>{event.participants} </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar size={16} className="text-blue-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock size={16} className="text-blue-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin size={16} className="text-blue-400" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{event.description}</p>

              {/* <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
                  Daftar Sekarang
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all">
                  Detail Event
                </button>
              </div> */}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all">
            Lihat Kalender Lengkap
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
