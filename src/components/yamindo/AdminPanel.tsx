"use client";

import { useState, useCallback, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
} from "lucide-react";

const ADMIN_TABS = [
  { key: "site-config", label: "Pengaturan" },
  { key: "hero-slides", label: "Hero Slider" },
  { key: "services", label: "Layanan" },
  { key: "causes", label: "Program Donasi" },
  { key: "counters", label: "Counter" },
  { key: "team-members", label: "Tim" },
  { key: "gallery-images", label: "Galeri" },
  { key: "testimonials", label: "Testimoni" },
  { key: "blog-posts", label: "Berita" },
  { key: "partners", label: "Mitra" },
  { key: "footer-events", label: "Acara" },
  { key: "donation-presets", label: "Donasi" },
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
  type: "text" | "textarea" | "number" | "select" | "checkbox";
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
    { key: "image", label: "URL Gambar", type: "text" },
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
    { key: "image", label: "URL Gambar", type: "text" },
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
    { key: "image", label: "URL Gambar", type: "text" },
    { key: "raised", label: "Terkumpul", type: "text" },
    { key: "goal", label: "Target", type: "text" },
    { key: "percent", label: "Persen", type: "number" },
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
    { key: "image", label: "URL Foto", type: "text" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
  "gallery-images": [
    { key: "src", label: "URL Gambar", type: "text" },
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
    { key: "image", label: "URL Foto", type: "text" },
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
    { key: "image", label: "URL Gambar", type: "text" },
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
  "donation-presets": [
    { key: "label", label: "Label (ID)", type: "text" },
    { key: "en_label", label: "Label (EN)", type: "text" },
    { key: "amount", label: "Jumlah (null = custom)", type: "number" },
    { key: "order", label: "Urutan", type: "number" },
    { key: "active", label: "Aktif", type: "checkbox" },
  ],
};

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

  const handleFieldChange = (key: string, value: any) => {
    if (!editing) return;
    setEditing({ ...editing, [key]: value });
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
    return "title" || "name" || "label" || "date";
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
                {item.image || item.src ? (
                  <img
                    src={item.image || item.src}
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
                    {item.subtitle || item.role || item.category || item.tag || item.label || ""}
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

export default function AdminPanel() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("site-config");

  return (
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
          <SheetTitle className="flex items-center gap-2 text-white">
            <Settings className="w-5 h-5" />
            Admin Panel — Yamindo CMS
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
                ) : (
                  <EntityManager tabKey={tab.key} />
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}
