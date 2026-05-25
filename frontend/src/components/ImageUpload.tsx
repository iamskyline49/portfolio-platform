"use client";

import { useState } from "react";

import { authApi } from "@/lib/auth-api";

interface Props {
  onUploaded: (imageUrl: string) => void;
}

export default function ImageUpload({ onUploaded }: Props) {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      const res = await authApi.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onUploaded(res.data.url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={uploadImage} />

      {loading && <p className="mt-2 text-sm text-slate-400">Uploading...</p>}
    </div>
  );
}
