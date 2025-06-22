// app/admin/page.jsx
"use client";

import Link from "next/link";

const AdminDashboard = () => {
  const menuItems = [
    {
      title: "Manajemen Video",
      href: "/admin/videos",
      description: "Kelola daftar video edukasi dan kategori",
    },
    {
      title: "Manajemen Chapter",
      href: "/admin/chapters",
      description: "Kelola data chapter komunitas motor",
    },
    {
      title: "Struktur Organisasi",
      href: "/admin/organization",
      description: "Kelola ketua, wakil, pengurus, dan penasehat",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
