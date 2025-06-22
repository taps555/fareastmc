// app/admin/organization/page.jsx
"use client";
import { useEffect, useState } from "react";

const OrganizationAdmin = () => {
  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    position: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchMembers = async () => {
    const res = await fetch("http://localhost:5000/api/organization");
    const data = await res.json();
    setMembers(data);
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

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setForm({
      name: "",
      role: "",
      position: "",
      description: "",
    });
    setIsEditing(false);
    setEditId(null);
    fetchMembers();
  };

  const handleEdit = (member) => {
    setForm(member);
    setIsEditing(true);
    setEditId(member.id);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/organization/${id}`, {
      method: "DELETE",
    });
    fetchMembers();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Struktur Organisasi</h1>

      <form onSubmit={handleSubmit} className="grid gap-2 mb-6">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key}
            className="border px-3 py-2 rounded"
            required
          />
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Update" : "Tambah"}
        </button>
      </form>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nama</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Jabatan</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="border p-2">{member.name}</td>
              <td className="border p-2">{member.role}</td>
              <td className="border p-2">{member.position}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
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
