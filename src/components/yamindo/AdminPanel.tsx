"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Settings,
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  Loader2,
  RefreshCw,
  Image,
  CheckCircle,
  LogIn,
  LogOut,
  ShieldCheck,
  Upload,
} from "lucide-react";

const ADMIN_TABS = [
  { key: "nav-menus", label: "Menu Navigasi" },
  { key: "site-config", label: "Pengaturan" },
  { key: "hero-slides", label: "Hero Slider" },
  { key: "services", label: "Layanan" },
  { key: "causes", label: "Program Donasi" },
  { key: "counters", label: "Counter" },
  { key: "team-members", label: "Tim" },
  { key: "org-members", label: "Struktur Org" },
  { key: "gallery-images", label: "Galeri" },
  { key: "testimonials", label: "Testimoni" },
  { key: "blog-posts", label: "Berita" },
  { key: "partners", label: "Mitra" },
  { key: "footer-events", label: "Acara" },
  { key: "donation-presets", label: "Donasi" },
  { key: "bank-accounts", label: "Rekening" },
  // Sub-page tabs
  { key: "about-sections", label: "Tentang" },
  { key: "education-services", label: "Pendidikan" },
  { key: "service-details", label: "Layanan Detail" },
  { key: "program-details", label: "Program Pg" },
  { key: "gallery-page-items", label: "Galeri Pg" },
  { key: "news-articles", label: "Berita Pg" },
  { key: "contact-messages", label: "Pesan" },
  { key: "page-contents", label: "Narasi Page" },
];

const ICON_OPTIONS = [
  "GraduationCap", "HeartPulse", "Home", "Droplets", "BookOpen", "HandHelping",
  "Users", "Globe", "Baby", "Heart", "Star", "Shield",
];

const COLOR_OPTIONS = [
  { label: "Teal", value: "from-teal-400 to-teal-600" },
  { label: "Rose", value: "from-rose-400 to-rose-600" },
  { label: "Amber", value: "from-amber-400 to-amber-600" },
  { label: "Sky", value: "from-sky-400 to-sky-600" },
  { label: "Violet", value: "from-violet-400 to-violet-600" },
  { label: "Emerald", value: "from-emerald-400 to-emerald-600" },
];

const GRADIENT_OPTIONS = [
  { label: "Teal-Amber", value: "from-teal-50 via-amber-50/30 to-orange-50" },
  { label: "Amber-Teal", value: "from-amber-50 via-teal-50/30 to-green-50" },
  { label: "Green-Amber", value: "from-green-50 via-amber-50/30 to-teal-50" },
];

// Simple field definitions for each entity type
interface FieldDef {
  key: string;
  label: string;
  type: "text" | "textarea" | "number" | "select" | "checkbox" | "image" | "readonly";
  options?: { label: string; value: string }[];
}

const ENTITY_FIELDS: Record<string, FieldDef[]> = {
  "hero-slides": [
    { key: "title", label: "Judul (ID)", type: "text" },
    { key: "en_title", label: "Title (EN)", type: "text" },
    { key: "subtitle", label: "Subtitle (ID)", type: "text" },
    { key: "en_subtitle", label: "Subtitle (EN)", type: "text" },
    { key: "description", label: "Deskripsi (ID)", type: "textarea" },
    { key: "en_description", label: "Description (EN)", type: "textarea" },
    { key: "image", label: "URL Gambar", type: "image" },
    { key: "bullets", label: "Bullet Points (ID, JSON array)", type: "text" },
    { key: "en_bullets", label: "Bullet Points (EN, JSON array)", type: "text" },
    { key: "bgGradient", label: "Gradient", type: "select", options: GRADIENT_OPTIONS },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  services: [
    { key: "title", label: "Judul (ID)", type: "text" },
    { key: "en_title", label: "Title (EN)", type: "text" },
    { key: "description", label: "Deskripsi (ID)", type: "textarea" },
    { key: "en_description", label: "Description (EN)", type: "textarea" },
    { key: "image", label: "URL Gambar", type: "image" },
    { key: "icon", label: "Ikon", type: "select", options: ICON_OPTIONS.map((i) => ({ label: i, value: i })) },
    { key: "color", label: "Warna Gradient", type: "select", options: COLOR_OPTIONS },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  causes: [
    { key: "title", label: "Judul (ID)", type: "text" },
    { key: "en_title", label: "Title (EN)", type: "text" },
    { key: "description", label: "Deskripsi (ID)", type: "textarea" },
    { key: "en_description", label: "Description (EN)", type: "textarea" },
    { key: "image", label: "URL Gambar", type: "image" },
    { key: "raised", label: "Terkumpul", type: "text" },
    { key: "goal", label: "Target", type: "text" },
    { key: "percent", label: "Persen (otomatis)", type: "readonly" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  counters: [
    { key: "label", label: "Label (ID)", type: "text" },
    { key: "en_label", label: "Label (EN)", type: "text" },
    { key: "value", label: "Nilai Angka", type: "number" },
    { key: "icon", label: "Ikon", type: "select", options: ICON_OPTIONS.map((i) => ({ label: i, value: i })) },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "team-members": [
    { key: "name", label: "Nama (ID)", type: "text" },
    { key: "en_name", label: "Name (EN)", type: "text" },
    { key: "role", label: "Jabatan (ID)", type: "text" },
    { key: "en_role", label: "Role (EN)", type: "text" },
    { key: "bio", label: "Bio (ID)", type: "textarea" },
    { key: "en_bio", label: "Bio (EN)", type: "textarea" },
    { key: "image", label: "URL Foto", type: "image" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "gallery-images": [
    { key: "src", label: "URL Gambar", type: "image" },
    { key: "alt", label: "Alt Text (ID)", type: "text" },
    { key: "en_alt", label: "Alt Text (EN)", type: "text" },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  testimonials: [
    { key: "name", label: "Nama (ID)", type: "text" },
    { key: "en_name", label: "Name (EN)", type: "text" },
    { key: "role", label: "Jabatan (ID)", type: "text" },
    { key: "en_role", label: "Role (EN)", type: "text" },
    { key: "text", label: "Testimoni (ID)", type: "textarea" },
    { key: "en_text", label: "Testimonial (EN)", type: "textarea" },
    { key: "image", label: "URL Foto", type: "image" },
    { key: "rating", label: "Rating (1-5)", type: "number" },
    { key: "tag", label: "Tag (ID)", type: "text" },
    { key: "en_tag", label: "Tag (EN)", type: "text" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "blog-posts": [
    { key: "title", label: "Judul (ID)", type: "text" },
    { key: "en_title", label: "Title (EN)", type: "text" },
    { key: "category", label: "Kategori (ID)", type: "text" },
    { key: "en_category", label: "Category (EN)", type: "text" },
    { key: "date", label: "Tanggal", type: "text" },
    { key: "image", label: "URL Gambar", type: "image" },
    { key: "excerpt", label: "Ringkasan (ID)", type: "textarea" },
    { key: "en_excerpt", label: "Excerpt (EN)", type: "textarea" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  partners: [
    { key: "name", label: "Nama (ID)", type: "text" },
    { key: "en_name", label: "Name (EN)", type: "text" },
    { key: "logo", label: "Logo Text", type: "text" },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "footer-events": [
    { key: "date", label: "Tanggal", type: "text" },
    { key: "title", label: "Judul Acara (ID)", type: "text" },
    { key: "en_title", label: "Event Title (EN)", type: "text" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  // Sub-page entity fields
  "about-sections": [
    { key: "type", label: "Tipe Section", type: "select", options: [{ label: "Visi", value: "vision" }, { label: "Misi", value: "mission" }, { label: "Sejarah", value: "history" }, { label: "Legalitas", value: "legality" }] },
    { key: "title", label: "Judul (ID)", type: "text" },
    { key: "en_title", label: "Title (EN)", type: "text" },
    { key: "content", label: "Konten (ID)", type: "textarea" },
    { key: "en_content", label: "Content (EN)", type: "textarea" },
    { key: "image", label: "URL Gambar", type: "image" },
    { key: "items", label: "Items (ID, JSON)", type: "text" },
    { key: "en_items", label: "Items (EN, JSON)", type: "text" },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "education-services": [
    { key: "title", label: "Judul (ID)", type: "text" },
    { key: "en_title", label: "Title (EN)", type: "text" },
    { key: "description", label: "Deskripsi (ID)", type: "textarea" },
    { key: "en_description", label: "Description (EN)", type: "textarea" },
    { key: "image", label: "URL Gambar", type: "image" },
    { key: "icon", label: "Ikon", type: "select", options: ICON_OPTIONS.map((i) => ({ label: i, value: i })) },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "service-details": [
    { key: "slug", label: "Slug (URL unik, tanpa spasi)", type: "text" },
    { key: "title", label: "Judul (ID)", type: "text" },
    { key: "en_title", label: "Title (EN)", type: "text" },
    { key: "short_desc", label: "Deskripsi Singkat (ID)", type: "textarea" },
    { key: "en_short_desc", label: "Short Desc (EN)", type: "textarea" },
    { key: "content", label: "Konten Lengkap (ID)", type: "textarea" },
    { key: "en_content", label: "Full Content (EN)", type: "textarea" },
    { key: "image", label: "URL Gambar", type: "image" },
    { key: "icon", label: "Ikon", type: "select", options: ICON_OPTIONS.map((i) => ({ label: i, value: i })) },
    { key: "features", label: "Fitur (ID, JSON)", type: "text" },
    { key: "en_features", label: "Features (EN, JSON)", type: "text" },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "program-details": [
    { key: "slug", label: "Slug (URL unik, tanpa spasi)", type: "text" },
    { key: "title", label: "Judul (ID)", type: "text" },
    { key: "en_title", label: "Title (EN)", type: "text" },
    { key: "description", label: "Deskripsi Singkat (ID)", type: "textarea" },
    { key: "en_description", label: "Short Description (EN)", type: "textarea" },
    { key: "content", label: "Konten Lengkap (ID)", type: "textarea" },
    { key: "en_content", label: "Full Content (EN)", type: "textarea" },
    { key: "image", label: "URL Gambar", type: "image" },
    { key: "category", label: "Kategori (ID)", type: "text" },
    { key: "en_category", label: "Category (EN)", type: "text" },
    { key: "raised", label: "Terkumpul", type: "text" },
    { key: "goal", label: "Target", type: "text" },
    { key: "percent", label: "Persen (otomatis)", type: "readonly" },
    { key: "status", label: "Status", type: "select", options: [{ label: "Aktif", value: "active" }, { label: "Selesai", value: "completed" }, { label: "Akan Datang", value: "upcoming" }] },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "gallery-page-items": [
    { key: "type", label: "Tipe", type: "select", options: [{ label: "Foto", value: "photo" }, { label: "Video", value: "video" }] },
    { key: "src", label: "URL Sumber", type: "image" },
    { key: "alt", label: "Alt Text (ID)", type: "text" },
    { key: "en_alt", label: "Alt Text (EN)", type: "text" },
    { key: "category", label: "Kategori (ID)", type: "text" },
    { key: "en_category", label: "Category (EN)", type: "text" },
    { key: "video_url", label: "Video URL", type: "text" },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "news-articles": [
    { key: "title", label: "Judul (ID)", type: "text" },
    { key: "en_title", label: "Title (EN)", type: "text" },
    { key: "category", label: "Kategori (ID)", type: "text" },
    { key: "en_category", label: "Category (EN)", type: "text" },
    { key: "content", label: "Konten (ID)", type: "textarea" },
    { key: "en_content", label: "Content (EN)", type: "textarea" },
    { key: "excerpt", label: "Ringkasan (ID)", type: "textarea" },
    { key: "en_excerpt", label: "Excerpt (EN)", type: "textarea" },
    { key: "image", label: "URL Gambar", type: "image" },
    { key: "author", label: "Penulis", type: "text" },
    { key: "date", label: "Tanggal", type: "text" },
    { key: "featured", label: "Artikel Unggulan", type: "checkbox" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "contact-messages": [
    { key: "name", label: "Nama", type: "text" },
    { key: "email", label: "Email", type: "text" },
    { key: "phone", label: "Telepon", type: "text" },
    { key: "subject", label: "Subjek", type: "text" },
    { key: "message", label: "Pesan", type: "textarea" },
    { key: "isRead", label: "Dibaca", type: "checkbox" },
  ],
  "org-members": [
    { key: "name", label: "Nama (ID)", type: "text" },
    { key: "en_name", label: "Name (EN)", type: "text" },
    { key: "position", label: "Jabatan (ID)", type: "text" },
    { key: "en_position", label: "Position (EN)", type: "text" },
    { key: "photo", label: "Foto", type: "image" },
    { key: "level", label: "Level (1=Ketua, 2=Direktur, 3=Staff)", type: "number" },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "bank-accounts": [
    { key: "bankName", label: "Nama Bank (ID)", type: "text" },
    { key: "en_bankName", label: "Bank Name (EN)", type: "text" },
    { key: "accountNo", label: "Nomor Rekening", type: "text" },
    { key: "accountName", label: "Atas Nama (ID)", type: "text" },
    { key: "en_accountName", label: "Account Name (EN)", type: "text" },
    { key: "logo", label: "Logo Bank", type: "image" },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "page-contents": [
    { key: "page", label: "Halaman (slug)", type: "select", options: [
      { label: "Kontak", value: "kontak" },
      { label: "Layanan", value: "layanan" },
      { label: "Travel Haji Umrah", value: "travel-haji-umrah" },
      { label: "Aqiqah", value: "aqiqah" },
      { label: "Pelatihan Agency", value: "pelatihan-agency" },
      { label: "Tentang", value: "tentang" },
      { label: "Program", value: "program" },
      { label: "Berita", value: "berita" },
      { label: "Galeri", value: "galeri" },
      { label: "Tim", value: "tim" },
      { label: "Beranda", value: "beranda" },
    ]},
    { key: "section", label: "Seksi (hero/stats/intro/desc/cta)", type: "text" },
    { key: "title", label: "Judul (ID)", type: "text" },
    { key: "en_title", label: "Title (EN)", type: "text" },
    { key: "content", label: "Konten Narasi (ID)", type: "textarea" },
    { key: "en_content", label: "Content Narrative (EN)", type: "textarea" },
    { key: "image", label: "URL Gambar", type: "image" },
    { key: "items", label: "Items (ID, JSON array)", type: "text" },
    { key: "en_items", label: "Items (EN, JSON array)", type: "text" },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
};

function ImageUploadField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: any;
  onChange: (key: string, value: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/bmp"];
    if (!allowedTypes.includes(file.type)) {
      alert("Format file tidak didukung. Gunakan JPG, PNG, GIF, atau WebP.");
      if (fileRef.current) fileRef.current.value = "";
      return;
    }

    // Validate file size (4MB max for Vercel/DB safety)
    if (file.size > 4 * 1024 * 1024) {
      alert("Ukuran file terlalu besar. Maksimal 4MB. Coba kompress dulu fotonya.");
      if (fileRef.current) fileRef.current.value = "";
      return;
    }

    setUploading(true);
    try {
      // Convert to base64 entirely client-side (no server upload needed)
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error("Gagal membaca file"));
        reader.readAsDataURL(file);
      });
      onChange(field.key, dataUrl);
    } catch (err) {
      alert("Upload gagal: " + (err instanceof Error ? err.message : "Unknown error"));
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div>
      <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">
        {field.label}
      </Label>
      {value && (
        <div className="mb-2 relative inline-block">
          <img
            src={value}
            alt="Preview"
            className="w-20 h-20 object-cover rounded-lg border"
          />
          <button
            type="button"
            onClick={() => onChange(field.key, "")}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600"
          >
            X
          </button>
        </div>
      )}
      <div className="flex gap-2">
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={uploading}
          onClick={() => fileRef.current?.click()}
          className="text-xs"
        >
          {uploading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
          ) : (
            <Upload className="w-3.5 h-3.5 mr-1.5" />
          )}
          {uploading ? "Mengupload..." : "Pilih Foto"}
        </Button>
      </div>
      <div className="mt-1.5">
        <input
          type="text"
          placeholder="Atau paste URL gambar..."
          value={typeof value === "string" && !value.startsWith("data:") ? value : ""}
          onChange={(e) => onChange(field.key, e.target.value)}
          className="w-full text-xs px-2 py-1.5 border rounded-md bg-transparent"
        />
      </div>
    </div>
  );
}

function DynamicForm({
  fields,
  data,
  onChange,
}: {
  fields: FieldDef[];
  data: Record<string, any>;
  onChange: (key: string, value: any) => void;
}) {
  return (
    <div className="space-y-3">
      {fields.map((field) => {
        const val = data[field.key];
        if (field.type === "textarea") {
          return (
            <div key={field.key}>
              <Label className="text-xs font-medium text-muted-foreground mb-1 block">
                {field.label}
              </Label>
              <Textarea
                value={val || ""}
                onChange={(e) => onChange(field.key, e.target.value)}
                rows={3}
                className="text-sm"
              />
            </div>
          );
        }
        if (field.type === "select" && field.options) {
          return (
            <div key={field.key}>
              <Label className="text-xs font-medium text-muted-foreground mb-1 block">
                {field.label}
              </Label>
              <Select
                value={String(val || "")}
                onValueChange={(v) => onChange(field.key, v)}
              >
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Pilih..." />
                </SelectTrigger>
                <SelectContent>
                  {field.options.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          );
        }
        if (field.type === "image") {
          return <ImageUploadField key={field.key} field={field} value={val} onChange={onChange} />;
        }
        if (field.type === "readonly") {
          const pct = Number(val) || 0;
          return (
            <div key={field.key}>
              <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                {field.label}
              </Label>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-7 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                    style={{
                      width: `${Math.min(pct, 100)}%`,
                      background: pct >= 100
                        ? 'linear-gradient(90deg, #10b981, #059669)'
                        : pct >= 50
                        ? 'linear-gradient(90deg, #0d9488, var(--yamindo-teal))'
                        : 'linear-gradient(90deg, #f59e0b, #f97316)',
                    }}
                  >
                    {pct >= 15 && (
                      <span className="text-[10px] font-bold text-white drop-shadow">
                        {pct}%
                      </span>
                    )}
                  </div>
                </div>
                <span className={`text-sm font-bold min-w-[3rem] text-right ${
                  pct >= 100 ? 'text-emerald-600' : 'text-[var(--yamindo-teal)]'
                }`}>
                  {pct}%
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">
                Dihitung otomatis: Terkumpul ÷ Target
                {pct >= 100 && ' ✓ Target tercapai!'}
              </p>
            </div>
          );
        }
        if (field.type === "checkbox") {
          return (
            <div key={field.key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={val === true || val === 1 || val === "true"}
                onChange={(e) => onChange(field.key, e.target.checked ? 1 : 0)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <Label className="text-xs font-medium text-muted-foreground">
                {field.label}
              </Label>
            </div>
          );
        }
        return (
          <div key={field.key}>
            <Label className="text-xs font-medium text-muted-foreground mb-1 block">
              {field.label}
            </Label>
            <Input
              type={field.type === "number" ? "number" : "text"}
              value={val ?? ""}
              onChange={(e) =>
                onChange(
                  field.key,
                  field.type === "number"
                    ? e.target.value === ""
                      ? null
                      : Number(e.target.value)
                    : e.target.value
                )
              }
              className="text-sm"
            />
          </div>
        );
      })}
    </div>
  );
}

function EntityManager({
  tabKey,
}: {
  tabKey: string;
}) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Record<string, any> | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [saving, setSaving] = useState(false);

  const fields = ENTITY_FIELDS[tabKey] || [];
  const apiUrl = `/api/admin/${tabKey}`;

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    Promise.resolve()
      .then(() => { if (!cancelled) setLoading(true); return fetch(apiUrl); })
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => { if (!cancelled) setItems(data); })
      .catch(console.error)
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [apiUrl, refreshKey]);

  const fetchItems = useCallback(() => setRefreshKey((k) => k + 1), []);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const method = editing.id ? "PUT" : "POST";
      const res = await fetch(apiUrl, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing),
      });
      if (res.ok) {
        setEditing(null);
        setIsCreating(false);
        fetchItems();
      }
    } catch (e) {
      console.error("Save error:", e);
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus item ini?")) return;
    try {
      const res = await fetch(apiUrl, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) fetchItems();
    } catch (e) {
      console.error("Delete error:", e);
    }
  };

  // Helper: parse Rp string like "Rp 4.000.000" to number
  const parseRp = (s: string): number => {
    if (!s) return 0;
    const cleaned = s.replace(/[^0-9]/g, '');
    return parseInt(cleaned, 10) || 0;
  };

  const handleFieldChange = (key: string, value: any) => {
    if (!editing) return;
    const updated = { ...editing, [key]: value };
    // Auto-calculate percent for causes & program-details
    if ((tabKey === 'causes' || tabKey === 'program-details') && (key === 'raised' || key === 'goal')) {
      const raisedNum = parseRp(updated.raised);
      const goalNum = parseRp(updated.goal);
      updated.percent = goalNum > 0 ? Math.min(Math.round((raisedNum / goalNum) * 100), 100) : 0;
    }
    setEditing(updated);
  };

  const startCreate = () => {
    const newItem: Record<string, any> = {};
    for (const f of fields) {
      if (f.type === "number") newItem[f.key] = 0;
      else if (f.type === "checkbox") newItem[f.key] = 1;
      else newItem[f.key] = "";
    }
    setEditing(newItem);
    setIsCreating(true);
  };

  const startEdit = (item: any) => {
    setEditing({ ...item });
    setIsCreating(false);
  };

  const cancelEdit = () => {
    setEditing(null);
    setIsCreating(false);
  };

  const getTitleField = () => {
    if (tabKey === "hero-slides") return "title";
    if (tabKey === "gallery-images") return "alt";
    if (tabKey === "donation-presets") return "label";
    if (tabKey === "org-members") return "name";
    if (tabKey === "team-members") return "name";
    if (tabKey === "counters") return "label";
    if (tabKey === "partners") return "name";
    if (tabKey === "bank-accounts") return "bankName";
    if (tabKey === "page-contents") return "title";
    if (tabKey === "footer-events") return "title";
    if (tabKey === "contact-messages") return "subject";
    return "title";
  };

  const titleField = getTitleField();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">
          {items.length} item
        </h3>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={fetchItems}
            className="h-8 text-xs"
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            Refresh
          </Button>
          <Button
            size="sm"
            onClick={startCreate}
            className="h-8 text-xs bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)]"
          >
            <Plus className="w-3 h-3 mr-1" />
            Tambah Baru
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      ) : editing ? (
        <div className="border rounded-xl p-4 space-y-4 bg-muted/30">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">
              {isCreating ? "Item Baru" : "Edit Item"}
            </h4>
            <Button size="sm" variant="ghost" onClick={cancelEdit} className="h-7 w-7 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>
          <DynamicForm
            fields={fields}
            data={editing}
            onChange={handleFieldChange}
          />
          <Button
            size="sm"
            onClick={handleSave}
            disabled={saving}
            className="bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)]"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin mr-1" />
            ) : (
              <Save className="w-4 h-4 mr-1" />
            )}
            Simpan
          </Button>
        </div>
      ) : (
        <div className="space-y-2 max-h-[55vh] overflow-y-auto pr-1">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">
              Belum ada data. Klik &quot;Tambah Baru&quot; untuk menambahkan.
            </p>
          ) : (
            items.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-white border rounded-lg hover:shadow-sm transition-shadow"
              >
                {(item.image || item.src || item.photo) ? (
                  <img
                    src={item.image || item.src || item.photo}
                    alt=""
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-[var(--yamindo-teal-light)] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-[var(--yamindo-teal)]">
                      {(item[titleField] || "?").substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item[titleField] || "(no title)"}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {item.position || item.subtitle || item.role || item.category || item.tag || item.label || ""}
                  </p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => startEdit(item)}
                    className="h-8 w-8 p-0"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(item.id)}
                    className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

function SiteConfigManager() {
  const [configs, setConfigs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editKey, setEditKey] = useState("");
  const [editValue, setEditValue] = useState("");

  const CONFIG_LABELS: Record<string, string> = {
    topbar_welcome: "Teks Top Bar (ID)",
    en_topbar_welcome: "Top Bar Text (EN)",
    phone: "Nomor Telepon",
    email: "Email",
    address: "Alamat",
    cta_title: "Judul CTA Banner (ID)",
    en_cta_title: "CTA Banner Title (EN)",
    cta_subtitle: "Subtitle CTA Banner (ID)",
    en_cta_subtitle: "CTA Banner Subtitle (EN)",
  };

  const [configRefresh, setConfigRefresh] = useState(0);

  useEffect(() => {
    let cancelled = false;
    Promise.resolve()
      .then(() => { if (!cancelled) setLoading(true); return fetch("/api/admin/site-config"); })
      .then((r) => (r.ok ? r.json() : {}))
      .then((data) => { if (!cancelled) setConfigs(data); })
      .catch(console.error)
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [configRefresh]);

  const fetchConfigs = useCallback(() => setConfigRefresh((k) => k + 1), []);

  const handleSave = async () => {
    if (!editKey) return;
    setSaving(true);
    try {
      await fetch("/api/admin/site-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: editKey, value: editValue }),
      });
      setEditKey("");
      setEditValue("");
      fetchConfigs();
    } catch (e) {
      console.error(e);
    }
    setSaving(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Pengaturan Website</h3>
        <Button size="sm" variant="outline" onClick={fetchConfigs} className="h-8 text-xs">
          <RefreshCw className="w-3 h-3 mr-1" /> Refresh
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {Object.entries(CONFIG_LABELS).map(([key, label]) => (
            <div key={key} className="p-3 bg-white border rounded-lg">
              {editKey === key ? (
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground">{label}</Label>
                  <Input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="text-sm"
                  />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={handleSave}
                      disabled={saving}
                      className="h-7 text-xs bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)]"
                    >
                      {saving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3 mr-1" />}
                      Simpan
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => { setEditKey(""); setEditValue(""); }} className="h-7 text-xs">
                      Batal
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">{label}</p>
                    <p className="text-sm mt-0.5">{configs[key] || "(belum diatur)"}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => { setEditKey(key); setEditValue(configs[key] || ""); }}
                    className="h-8 w-8 p-0"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ====== Nav Menu Manager ======
interface NavMenuWithChildren {
  id: string;
  label: string;
  en_label: string;
  href: string;
  navKey: string;
  order: number;
  active: boolean;
  children: {
    id: string;
    parentId: string;
    label: string;
    en_label: string;
    href: string;
    icon: string;
    order: number;
    active: boolean;
  }[];
}

function NavMenuManager() {
  const [menus, setMenus] = useState<NavMenuWithChildren[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingParent, setEditingParent] = useState<Partial<NavMenuWithChildren> | null>(null);
  const [editingChild, setEditingChild] = useState<Partial<NavMenuWithChildren['children'][0]> & { parentId?: string } | null>(null);
  const [expandedParent, setExpandedParent] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchMenus = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/nav-menus');
      if (res.ok) setMenus(await res.json());
    } catch (e) { console.error(e); }
    setLoading(false);
  }, []);

  useEffect(() => { fetchMenus(); }, [fetchMenus]);

  const handleSaveParent = async () => {
    if (!editingParent) return;
    setSaving(true);
    try {
      if (editingParent.id) {
        const { id, children, ...data } = editingParent as NavMenuWithChildren;
        await fetch('/api/admin/nav-menus', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, ...data }) });
      } else {
        await fetch('/api/admin/nav-menus', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(editingParent) });
      }
      setEditingParent(null);
      fetchMenus();
    } catch (e) { console.error(e); }
    setSaving(false);
  };

  const handleDeleteParent = async (id: string) => {
    if (!confirm('Hapus menu ini beserta sub-menunya?')) return;
    try {
      await fetch('/api/admin/nav-menus', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
      fetchMenus();
    } catch (e) { console.error(e); }
  };

  const handleSaveChild = async () => {
    if (!editingChild) return;
    setSaving(true);
    try {
      if (editingChild.id) {
        const { id, parentId, ...data } = editingChild;
        await fetch('/api/admin/nav-menu-items', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, ...data }) });
      } else {
        await fetch('/api/admin/nav-menu-items', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ parentId: editingChild.parentId, label: editingChild.label || '', href: editingChild.href || '/', icon: editingChild.icon || '' }) });
      }
      setEditingChild(null);
      fetchMenus();
    } catch (e) { console.error(e); }
    setSaving(false);
  };

  const handleDeleteChild = async (id: string) => {
    if (!confirm('Hapus sub-menu ini?')) return;
    try {
      await fetch('/api/admin/nav-menu-items', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
      fetchMenus();
    } catch (e) { console.error(e); }
  };

  const moveOrder = async (id: string, direction: 'up' | 'down') => {
    const idx = menus.findIndex(m => m.id === id);
    if (idx < 0) return;
    const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= menus.length) return;
    const newMenus = [...menus];
    const tmp = newMenus[idx].order;
    newMenus[idx] = { ...newMenus[idx], order: newMenus[swapIdx].order };
    newMenus[swapIdx] = { ...newMenus[swapIdx], order: tmp };
    try {
      await Promise.all([
        fetch('/api/admin/nav-menus', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: newMenus[idx].id, order: newMenus[idx].order }) }),
        fetch('/api/admin/nav-menus', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: newMenus[swapIdx].id, order: newMenus[swapIdx].order }) }),
      ]);
      fetchMenus();
    } catch (e) { console.error(e); }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">{menus.length} menu utama</h3>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={fetchMenus} className="h-8 text-xs">
            <RefreshCw className="w-3 h-3 mr-1" /> Refresh
          </Button>
          <Button size="sm" onClick={() => setEditingParent({ label: '', en_label: '', href: '/', navKey: '', order: menus.length, active: true })} className="h-8 text-xs bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)]">
            <Plus className="w-3 h-3 mr-1" /> Tambah Menu
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-8"><Loader2 className="w-6 h-6 animate-spin text-muted-foreground" /></div>
      ) : editingParent ? (
        <div className="border rounded-xl p-4 space-y-3 bg-muted/30">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">{editingParent.id ? 'Edit Menu' : 'Menu Baru'}</h4>
            <Button size="sm" variant="ghost" onClick={() => setEditingParent(null)} className="h-7 w-7 p-0"><X className="w-4 h-4" /></Button>
          </div>
          <div><Label className="text-xs">Label (ID)</Label><Input value={editingParent.label || ''} onChange={e => setEditingParent({ ...editingParent, label: e.target.value })} className="text-sm mt-1" /></div>
          <div><Label className="text-xs">Label (EN)</Label><Input value={editingParent.en_label || ''} onChange={e => setEditingParent({ ...editingParent, en_label: e.target.value })} className="text-sm mt-1" /></div>
          <div><Label className="text-xs">URL / Href</Label><Input value={editingParent.href || ''} onChange={e => setEditingParent({ ...editingParent, href: e.target.value })} className="text-sm mt-1" placeholder="/" /></div>
          <div><Label className="text-xs">Key (untuk dropdown, kosongkan jika tanpa sub-menu)</Label><Input value={editingParent.navKey || ''} onChange={e => setEditingParent({ ...editingParent, navKey: e.target.value })} className="text-sm mt-1" placeholder="contoh: layanan" /></div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={editingParent.active !== false} onChange={e => setEditingParent({ ...editingParent, active: e.target.checked })} className="w-4 h-4 rounded" />
            <Label className="text-xs">Aktif</Label>
          </div>
          <Button size="sm" onClick={handleSaveParent} disabled={saving} className="bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)]">
            {saving ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : <Save className="w-4 h-4 mr-1" />} Simpan
          </Button>
        </div>
      ) : (
        <div className="space-y-2 max-h-[55vh] overflow-y-auto pr-1">
          {menus.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">Belum ada menu. Klik &quot;Tambah Menu&quot;.</p>
          ) : menus.map((menu, idx) => (
            <div key={menu.id} className="border rounded-lg overflow-hidden">
              {/* Parent row */}
              <div className="flex items-center gap-2 p-3 bg-white hover:shadow-sm transition-shadow">
                <div className="flex flex-col gap-0.5">
                  <button onClick={() => moveOrder(menu.id, 'up')} disabled={idx === 0} className="text-muted-foreground hover:text-foreground disabled:opacity-30 text-xs">▲</button>
                  <button onClick={() => moveOrder(menu.id, 'down')} disabled={idx === menus.length - 1} className="text-muted-foreground hover:text-foreground disabled:opacity-30 text-xs">▼</button>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{menu.label} <span className="text-muted-foreground font-normal">/ {menu.en_label || '—'}</span></p>
                  <p className="text-xs text-muted-foreground">{menu.href} {menu.navKey ? `(key: ${menu.navKey})` : ''} {menu.children.length > 0 ? `· ${menu.children.length} sub` : ''}</p>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${menu.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{menu.active ? 'Aktif' : 'Nonaktif'}</span>
                <button onClick={() => setExpandedParent(expandedParent === menu.id ? null : menu.id)} className="text-xs px-2 py-1 rounded hover:bg-muted text-muted-foreground">{menu.children.length > 0 ? (expandedParent === menu.id ? '▾' : `▸ ${menu.children.length}`) : '—'}</button>
                <Button size="sm" variant="ghost" onClick={() => setEditingParent(menu)} className="h-8 w-8 p-0"><Pencil className="w-3.5 h-3.5" /></Button>
                <Button size="sm" variant="ghost" onClick={() => handleDeleteParent(menu.id)} className="h-8 w-8 p-0 text-red-500 hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></Button>
              </div>

              {/* Children section */}
              {expandedParent === menu.id && (
                <div className="border-t bg-muted/20 p-2 space-y-1">
                  <div className="flex items-center justify-between px-1 py-1">
                    <span className="text-xs font-medium text-muted-foreground">Sub-menu ({menu.children.length})</span>
                    <Button size="sm" variant="ghost" onClick={() => setEditingChild({ parentId: menu.id, label: '', en_label: '', href: '/', icon: '', order: menu.children.length, active: true })} className="h-6 text-xs px-2">
                      <Plus className="w-3 h-3 mr-1" /> Tambah
                    </Button>
                  </div>

                  {editingChild && editingChild.parentId === menu.id ? (
                    <div className="border rounded-lg p-3 bg-white space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold">{editingChild.id ? 'Edit Sub-menu' : 'Sub-menu Baru'}</span>
                        <button onClick={() => setEditingChild(null)} className="text-muted-foreground hover:text-foreground"><X className="w-3.5 h-3.5" /></button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div><Label className="text-[10px]">Label (ID)</Label><Input value={editingChild.label || ''} onChange={e => setEditingChild({ ...editingChild, label: e.target.value })} className="text-xs mt-0.5 h-8" /></div>
                        <div><Label className="text-[10px]">Label (EN)</Label><Input value={editingChild.en_label || ''} onChange={e => setEditingChild({ ...editingChild, en_label: e.target.value })} className="text-xs mt-0.5 h-8" /></div>
                      </div>
                      <div><Label className="text-[10px]">URL / Href</Label><Input value={editingChild.href || ''} onChange={e => setEditingChild({ ...editingChild, href: e.target.value })} className="text-xs mt-0.5 h-8" placeholder="/layanan#pendidikan" /></div>
                      <div><Label className="text-[10px]">Icon Key</Label><Input value={editingChild.icon || ''} onChange={e => setEditingChild({ ...editingChild, icon: e.target.value })} className="text-xs mt-0.5 h-8" placeholder="pendidikan, kesehatan, dst." /></div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={handleSaveChild} disabled={saving} className="h-7 text-xs bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)]">
                          {saving ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <Save className="w-3 h-3 mr-1" />} Simpan
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => setEditingChild(null)} className="h-7 text-xs">Batal</Button>
                      </div>
                    </div>
                  ) : (
                    menu.children.map((child) => (
                      <div key={child.id} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate">{child.label} <span className="text-muted-foreground font-normal">/ {child.en_label || '—'}</span></p>
                          <p className="text-[10px] text-muted-foreground truncate">{child.href} {child.icon ? `· icon: ${child.icon}` : ''}</p>
                        </div>
                        <button onClick={() => setEditingChild(child)} className="text-muted-foreground hover:text-[var(--yamindo-teal)]"><Pencil className="w-3 h-3" /></button>
                        <button onClick={() => handleDeleteChild(child.id)} className="text-muted-foreground hover:text-red-500"><Trash2 className="w-3 h-3" /></button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("site-config");

  // Check localStorage on mount
  useEffect(() => {
    const auth = localStorage.getItem("yamindo_admin_auth");
    if (auth === "true") setIsLoggedIn(true);
  }, []);

  // Listen for open request from footer button
  useEffect(() => {
    const handleOpenAdmin = () => {
      if (isLoggedIn) {
        setOpen(true);
      } else {
        setShowLogin(true);
      }
    };
    window.addEventListener("open-yamindo-admin", handleOpenAdmin);
    return () => window.removeEventListener("open-yamindo-admin", handleOpenAdmin);
  }, [isLoggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: loginPassword }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("yamindo_admin_auth", "true");
        setIsLoggedIn(true);
        setShowLogin(false);
        setLoginPassword("");
        setOpen(true);
      } else {
        setLoginError(data.error || "Password salah");
      }
    } catch {
      setLoginError("Gagal menghubungi server");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("yamindo_admin_auth");
    setIsLoggedIn(false);
    setOpen(false);
  };

  return (
    <>
      {/* Floating Admin Button - only shown when logged in */}
      {isLoggedIn && (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="fixed bottom-6 left-6 w-12 h-12 bg-[var(--yamindo-teal-dark)] hover:bg-[var(--yamindo-teal)] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
              aria-label="Buka Admin Panel"
            >
              <Settings className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto p-0">
            <SheetHeader className="p-4 pb-2 border-b bg-[var(--yamindo-teal-dark)] text-white sticky top-0 z-10">
              <SheetTitle className="flex items-center justify-between text-white">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  Admin Panel — Yamindo CMS
                </span>
                <button
                  onClick={handleLogout}
                  className="text-xs text-white/60 hover:text-white flex items-center gap-1 transition-colors"
                  title="Keluar"
                >
                  <LogOut className="w-4 h-4" />
                  Keluar
                </button>
              </SheetTitle>
              <p className="text-xs text-white/60">
                Kelola semua konten website dari sini. Perubahan langsung terlihat setelah refresh halaman.
              </p>
            </SheetHeader>
            <div className="p-4">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full h-auto flex-wrap gap-1 bg-muted/50 p-1 mb-4">
                  {ADMIN_TABS.map((tab) => (
                    <TabsTrigger
                      key={tab.key}
                      value={tab.key}
                      className="text-xs px-2.5 py-1.5 data-[state=active]:bg-[var(--yamindo-teal)] data-[state=active]:text-white"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {ADMIN_TABS.map((tab) => (
                  <TabsContent key={tab.key} value={tab.key}>
                    {tab.key === "site-config" ? (
                      <SiteConfigManager />
                    ) : tab.key === "nav-menus" ? (
                      <NavMenuManager />
                    ) : (
                      <EntityManager tabKey={tab.key} />
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </SheetContent>
        </Sheet>
      )}

      {/* Login Dialog */}
      <Dialog open={showLogin} onOpenChange={setShowLogin}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--yamindo-teal)]" />
              Masuk Admin Panel
            </DialogTitle>
            <DialogDescription>
              Masukkan password admin untuk mengelola konten website Yamindo.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="admin-password">Password Admin</Label>
              <Input
                id="admin-password"
                type="password"
                placeholder="Masukkan password..."
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="mt-1.5"
                autoFocus
              />
              {loginError && (
                <p className="text-sm text-red-500 mt-1.5">{loginError}</p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => { setShowLogin(false); setLoginPassword(""); setLoginError(""); }}
                className="flex-1"
              >
                Batal
              </Button>
              <Button
                type="submit"
                disabled={loginLoading || !loginPassword}
                className="flex-1 bg-[var(--yamindo-teal-dark)] hover:bg-[var(--yamindo-teal)]"
              >
                {loginLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Masuk
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
