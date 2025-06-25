"use client";
import { useState, useEffect } from "react";

export default function VideoAdmin() {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({
    title: "",
    video_url: "",
    category_name: "",
    duration: "",
  });
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await fetch("https://apii.fareastmcindonesia.com/api/videos");
    const data = await res.json();
    setVideos(data);
  };

  const handleChange = (e) => {
    setNewVideo({ ...newVideo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setThumbnailFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newVideo.title);
    formData.append("video_url", newVideo.video_url);
    formData.append("category_name", newVideo.category_name);
    formData.append("duration", newVideo.duration);
    if (thumbnailFile) formData.append("thumbnail", thumbnailFile);

    const url = editingId
      ? `http://localhost:5000/api/videos/${editingId}`
      : "http://localhost:5000/api/videos";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      body: formData,
    });

    if (res.ok) {
      setNewVideo({
        title: "",
        video_url: "",
        category_name: "",
        duration: "",
      });
      setThumbnailFile(null);
      setEditingId(null);
      fetchVideos();
    }
  };

  const handleEdit = (video) => {
    setNewVideo({
      title: video.title,
      video_url: video.video_url,
      category_name: video.category_name,
      duration: video.duration,
    });
    setEditingId(video.id);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/videos/${id}`, {
      method: "DELETE",
    });
    fetchVideos();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manajemen Video</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          type="text"
          name="title"
          placeholder="Judul"
          value={newVideo.title}
          onChange={handleChange}
          className="border px-3 py-2 w-full"
        />
        <input
          type="text"
          name="video_url"
          placeholder="Video URL"
          value={newVideo.video_url}
          onChange={handleChange}
          className="border px-3 py-2 w-full"
        />
        <input
          type="text"
          name="category_name"
          placeholder="Kategori"
          value={newVideo.category_name}
          onChange={handleChange}
          className="border px-3 py-2 w-full"
        />
        <input
          type="text"
          name="duration"
          placeholder="Durasi, contoh: 04:26"
          value={newVideo.duration}
          onChange={handleChange}
          className="border px-3 py-2 w-full"
        />
        <input
          type="file"
          name="thumbnail"
          onChange={handleFileChange}
          className="border px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Simpan Perubahan" : "Tambah Video"}
        </button>
      </form>

      <table className="w-full table-auto border">
        <thead className="bg-gray-200 text-black">
          <tr>
            <th className="border p-2">Judul</th>
            <th className="border p-2">URL</th>
            <th className="border p-2">Kategori</th>
            <th className="border p-2">Durasi</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.id}>
              <td className="border p-2">{video.title}</td>
              <td className="border p-2">{video.video_url}</td>
              <td className="border p-2">{video.category_name}</td>
              <td className="border p-2">{video.duration}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEdit(video)}
                  className="bg-yellow-500 px-3 py-1 rounded text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="bg-red-600 px-3 py-1 rounded text-white"
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
}
