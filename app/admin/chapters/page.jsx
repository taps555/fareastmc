// app/admin/chapters/page.jsx
"use client";
import { useEffect, useState } from "react";

const ChapterAdmin = () => {
  const [chapters, setChapters] = useState([]);
  const [form, setForm] = useState({
    name: "",
    coordinator: "",
    phone: "",
    email: "",
    members: "",
    location: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchChapters = async () => {
    const res = await fetch("https://apii.fareastmcindonesia.com/api/chapters");
    const data = await res.json();
    setChapters(data);
  };

  useEffect(() => {
    fetchChapters();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditing
      ? `http://localhost:5000/api/chapters/${editId}`
      : "http://localhost:5000/api/chapters";
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
      coordinator: "",
      phone: "",
      email: "",
      members: "",
      location: "",
      address: "",
    });
    setIsEditing(false);
    setEditId(null);
    fetchChapters();
  };

  const handleEdit = (chapter) => {
    setForm(chapter);
    setIsEditing(true);
    setEditId(chapter.id);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/chapters/${id}`, {
      method: "DELETE",
    });
    fetchChapters();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Chapter</h1>

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
            <th className="border p-2">Koordinator</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {chapters.map((chapter) => (
            <tr key={chapter.id}>
              <td className="border p-2">{chapter.name}</td>
              <td className="border p-2">{chapter.coordinator}</td>
              <td className="border p-2">{chapter.email}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEdit(chapter)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(chapter.id)}
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

export default ChapterAdmin;
