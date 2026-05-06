# 🎂 Birthday Website Setup Guide

Selamat! Website ulang tahun mu sudah siap. Ini adalah panduan untuk customize website sesuai keinginanmu.

## 📋 Daftar Customize

### 1. **Nama Pacarmu**

Edit file [src/pages/Home.jsx](src/pages/Home.jsx#L49) dan [src/pages/Closing.jsx](src/pages/Closing.jsx#L47):

```jsx
// Change this:
💖 Nama Pacarmu 💖

// To:
💖 Nama Sebenarnya 💖
```

### 2. **Tanggal Ulang Tahun**

Edit [src/pages/Home.jsx](src/pages/Home.jsx#L27):

```jsx
// Change this:
const targetDate = new Date('2026-05-14').getTime();

// To:
const targetDate = new Date('2026-05-14').getTime(); // sesuaikan tanggalnya
```

### 3. **Pesan Personal**

Edit [src/pages/Message.jsx](src/pages/Message.jsx#L10-L31) dan ganti `fullMessage` dengan pesan mu sendiri:

```jsx
const fullMessage = `Hai sayang! 💕

Tulis pesan mu di sini...
`;
```

### 4. **Foto-foto & Captions**

Masukkan 5 foto ke folder `/public/images/`:

1. Rename foto mu menjadi: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`
2. Letakkan di folder `/public/images/`
3. Supported format: JPG, PNG, WebP

**Layout Grid:**
- photo1.jpg → Big (2x2)
- photo2.jpg → Small
- photo3.jpg → Small
- photo4.jpg → Wide (2x1)
- photo5.jpg → **Extra Wide (full width!)**

**Customize Captions:**

Edit [src/components/PhotoGrid.jsx](src/components/PhotoGrid.jsx#L8-L24) dan ganti captions sesuai keinginan mu:

```jsx
const photos = [
  { 
    id: 1, 
    src: '/images/photo1.jpg', 
    span: 'col-span-2 row-span-2',
    caption: 'Aku suka caramu marah kepadaku (meskipun agak ngeri)' // ← Ganti caption mu di sini
  },
  { 
    id: 2, 
    src: '/images/photo2.jpg', 
    span: 'col-span-1 row-span-1',
    caption: 'Senyuman mu adalah hal terindah di dunia' // ← Ganti caption mu di sini
  },
  // ... dst untuk photo 3, 4, 5
];
```

**Caption Ideas:**
- "Senyuman mu adalah hal terindah di dunia"
- "Aku suka caramu marah kepadaku (meskipun agak ngeri)"
- "Mata mu yang berbicara lebih dari ribuan kata"
- "Setiap momen denganmu terasa seperti mimpi indah"
- "Kamu adalah alasan terbaik untuk tersenyum setiap hari"
- "Caramu tertawa membuat seluruh dunia terasa lebih cerah"
- "Aku jatuh cinta dengan setiap detail dirimu"
- "Dengan mu, setiap hari adalah petualangan baru"
- "Kamu adalah cahaya dalam hidupku"
- "Aku mencintaimu lebih dari kata-kata bisa menyatakan"

### 5. **Background Music** 🎵

Untuk menambah musik background:

1. Siapkan file musik (MP3 format recommended)
2. Rename file ke `birthday-song.mp3`
3. Letakkan di folder `/public/music/`
4. Buka web, musik akan autoplay (dengan tombol kontrol)

#### Tips Musik:
- Gunakan music tanpa lirik atau instrumental
- File size sebaiknya di bawah 5MB
- Format: MP3, WAV, atau OGG

**Sumber musik gratis:**
- Bensound.com
- FreeAudioMotion.com
- Pixabay Music

### 6. **Warna Custom** (Optional)

Edit [tailwind.config.js](tailwind.config.js#L6-L11):

```javascript
colors: {
  primary: "#6B4226",   // Coklat tua
  secondary: "#A67B5B", // Coklat susu
  soft: "#D2B48C",      // Tan
  cream: "#F5E6D3",     // Background
  accent: "#8B5E3C"     // Hover
}
```

**Color Palette Alternatives:**
- Rose Gold: `#B76E79`, `#D4A5A5`, `#E8C5C5`
- Lavender: `#8E7CC3`, `#B8A8D8`, `#D4C5E8`
- Sage Green: `#6B8E7B`, `#A8B8A8`, `#C5D4C5`

### 7. **Nama Pengirim**

Edit [src/pages/Message.jsx](src/pages/Message.jsx#L31) dan [src/pages/Closing.jsx](src/pages/Closing.jsx#L52):

```jsx
// Change this:
—Namamu ❤️

// To:
—Nama Pengirim ❤️
```

### 8. **Tombol WhatsApp** (Optional)

Edit [src/pages/Closing.jsx](src/pages/Closing.jsx#L60):

```jsx
<motion.a
  href="https://wa.me/628123456789?text=Terima%20kasih%20untuk%20surprise%20mu!" // Ganti nomor & pesan
  ...
>
  Hubungi Aku 💬
</motion.a>
```

Format: `https://wa.me/[KODE_NEGARA][NOMOR_TELEPON]`

Contoh Indonesia: `https://wa.me/628123456789`

## 🚀 Cara Deploy

### Option 1: Vercel (Recommended - FREE)

1. Push project ke GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import GitHub repo
4. Click Deploy
5. Share link ke pacarmu! 🎉

### Option 2: Netlify (FREE)

1. Push project ke GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect GitHub
4. Select repo → Deploy

### Option 3: GitHub Pages

```bash
npm run build
# Hasilnya di folder 'dist'
# Push ke branch 'gh-pages' atau deploy manual
```

## 📂 Folder Structure

```
birthday-web/
├── public/
│   ├── images/           ← Letakkan foto di sini
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   └── ...
│   └── music/            ← Letakkan lagu di sini
│       └── birthday-song.mp3
├── src/
│   ├── pages/            ← Semua halaman
│   │   ├── Home.jsx      ← Landing page
│   │   ├── Message.jsx   ← Pesan personal
│   │   ├── Gallery.jsx   ← Galeri foto
│   │   └── Closing.jsx   ← Halaman akhir + confetti
│   ├── components/       ← Komponen reusable
│   │   ├── Navbar.jsx    ← Navigasi
│   │   ├── MusicPlayer.jsx  ← Player musik
│   │   └── PhotoGrid.jsx ← Grid foto
│   ├── App.jsx
│   └── index.css
├── tailwind.config.js    ← Config warna
├── vite.config.js
└── package.json
```

## 🎨 Animasi & Effects

Website sudah include:
- ✨ Floating particles di Home
- 🎬 Typing animation untuk pesan
- 🖼️ Photo hover effects + zoom
- 💥 Confetti animation di ending
- 📱 Responsive design (mobile-friendly)
- 🎵 Background music player
- 🌈 Smooth transitions

## 🔧 Troubleshooting

### Musik tidak jalan?
1. Pastikan file ada di `/public/music/birthday-song.mp3`
2. Coba reload halaman
3. Check browser console (F12) untuk error

### Foto tidak muncul?
1. Pastikan file ada di `/public/images/`
2. Pastikan nama file tepat: `photo1.jpg`, `photo2.jpg`, dst
3. Cek format file (JPG/PNG)

### Website lambat?
1. Optimize foto (compress di tinypng.com)
2. Kurangi ukuran file musik
3. Build dengan `npm run build`

## 📝 Customization Checklist

- [ ] Ganti nama pacarmu di semua file
- [ ] Update tanggal ulang tahun
- [ ] Tulis pesan personal
- [ ] Letakkan 5 foto di `/public/images/`
- [ ] Letakkan musik di `/public/music/`
- [ ] Update nama pengirim
- [ ] Customize warna (opsional)
- [ ] Update WhatsApp link (opsional)
- [ ] Test di mobile
- [ ] Deploy ke hosting

## 💡 Tips

1. **Test sebelum deploy**: Buka `http://localhost:5173` dan test semua halaman
2. **Foto berkualitas**: Gunakan foto yang clear dan bagus
3. **Musik pilihan**: Pilih musik yang cocok dengan vibe
4. **Mobile-friendly**: Website sudah responsive, tapi test di phone
5. **Share dengan confident**: Website kamu pasti bikin pacarmu terharu! 💕

---

**Happy Coding & Happy Birthday!** 🎂✨

Kalau ada pertanyaan atau butuh bantuan, jangan ragu untuk tanya!
