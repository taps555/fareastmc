"use client";
import { useEffect, useState } from "react";

const OrganizationAdmin = () => {
  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    position: "",
    description: "",
    color: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchMembers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/organization");
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      console.error("❌ Gagal fetch anggota:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditing
      ? `http://localhost:5000/api/organization/${editId}`
      : "http://localhost:5000/api/organization";
    const method = isEditing ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setForm({
        name: "",
        role: "",
        position: "",
        description: "",
        color: "",
      });
      setIsEditing(false);
      setEditId(null);
      fetchMembers();
    } catch (error) {
      console.error("❌ Gagal submit data:", error);
    }
  };

  const handleEdit = (member) => {
    setForm({
      name: member.name || "",
      role: member.role || "",
      position: member.position || "",
      description: member.description || "",
      color: member.color || "",
    });
    setIsEditing(true);
    setEditId(member.id);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/organization/${id}`, {
        method: "DELETE",
      });
      fetchMembers();
    } catch (error) {
      console.error("❌ Gagal hapus data:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manajemen Struktur Organisasi</h1>

      <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nama"
          className="border px-3 py-2 rounded"
          required
        />
        <input
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Role (misal: ketua, wakilKetua, pengurus, penasehat)"
          className="border px-3 py-2 rounded"
          required
        />
        <input
          name="position"
          value={form.position}
          onChange={handleChange}
          placeholder="Jabatan (misal: Sekretaris, Bendahara)"
          className="border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Deskripsi tugas"
          className="border px-3 py-2 rounded"
        />
        <input
          name="color"
          value={form.color}
          onChange={handleChange}
          placeholder="Warna HEX (contoh: #FF5733)"
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Simpan Perubahan" : "Tambah Anggota"}
        </button>
      </form>

      <table className="w-full table-auto border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Jabatan</th>
            <th className="border p-2">Warna</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="border p-2">{member.name}</td>
              <td className="border p-2">{member.role}</td>
              <td className="border p-2">{member.position}</td>
              <td className="border p-2">
                <span
                  className="inline-block w-5 h-5 rounded-full mr-2"
                  style={{ backgroundColor: member.color }}
                ></span>
                {member.color}
              </td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganizationAdmin;
