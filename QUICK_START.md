# ⚡ Quick Start Guide

## 🎯 5-Minute Setup

### Step 1: Start Dev Server (Already Running!)
```bash
npm run dev
# Website is live at http://localhost:5173
```

### Step 2: Add Customizations

#### 2.1 - Change Names
Open [src/pages/Home.jsx](src/pages/Home.jsx) → Find line 49:
```jsx
// Change from:
💖 Nama Pacarmu 💖

// Change to:
💖 Nama Pacarnya 💖
```

Open [src/pages/Closing.jsx](src/pages/Closing.jsx) → Find line 47:
```jsx
// Same change here
```

#### 2.2 - Write Personal Message
Open [src/pages/Message.jsx](src/pages/Message.jsx) → Find the `fullMessage` variable (around line 10):
```jsx
const fullMessage = `
Hai sayang! 💕

Tulis pesan mu di sini...
Bisa sebanyak yang kamu mau!

—Namamu
`;
```

#### 2.3 - Add Photos & Captions
1. Get 5 best photos of your girlfriend
2. Create folder: `/public/images/`
3. Rename & save photos as:
   - `photo1.jpg` (will be large)
   - `photo2.jpg` (will be small)
   - `photo3.jpg` (will be small)
   - `photo4.jpg` (will be wide)
   - `photo5.jpg` (will be EXTRA WIDE - full width!)

4. **Add Custom Captions:**
   Open [src/components/PhotoGrid.jsx](src/components/PhotoGrid.jsx) and edit the captions:
   ```jsx
   const photos = [
     { 
       id: 1, 
       src: '/images/photo1.jpg', 
       span: 'col-span-2 row-span-2',
       caption: 'Aku suka caramu marah kepadaku (meskipun agak ngeri)' // ← Change this
     },
     { 
       id: 2, 
       src: '/images/photo2.jpg', 
       span: 'col-span-1 row-span-1',
       caption: 'Senyuman mu adalah hal terindah di dunia' // ← Change this
     },
     // ... continue for photos 3, 4, 5
   ];
   ```
   
   **Each photo will show:**
   - On hover: caption preview
   - On click: beautiful modal with full-size photo + caption

#### 2.4 - Add Music
1. Download royalty-free music (MP3 format)
   - Recommendations: Bensound.com, Pixabay Music
2. Create folder: `/public/music/`
3. Save as: `birthday-song.mp3`

#### 2.5 - Update Sender Name
Open [src/pages/Message.jsx](src/pages/Message.jsx) → End of message:
```jsx
—Namamu ❤️  // Change "Namamu" to your name
```

Same in [src/pages/Closing.jsx](src/pages/Closing.jsx).

### Step 3: Test Everything
- [ ] Visit http://localhost:5173
- [ ] Check all 4 pages load
- [ ] Test countdown timer
- [ ] Read message looks good
- [ ] Photos appear correctly
- [ ] Music plays when clicked
- [ ] Confetti works on closing page
- [ ] Mobile view works (press F12)

### Step 4: Deploy!

#### Option A: Vercel (Easiest)
```bash
# 1. Push to GitHub
git add .
git commit -m "Birthday website"
git push

# 2. Go to vercel.com
# 3. Click "Import Project"
# 4. Select your repo
# 5. Click Deploy
# Done! You get a live URL
```

#### Option B: Netlify
```bash
# 1. Push to GitHub
# 2. Go to netlify.com
# 3. Connect GitHub
# 4. Select repository
# 5. Deploy
```

#### Option C: Build & Host Locally
```bash
# Build for production
npm run build

# Files ready in 'dist' folder
# Upload 'dist' to any web hosting
```

## 📝 File Locations to Edit

| What | File | Line |
|-----|------|------|
| Girlfriend's name | `src/pages/Home.jsx` | 49 |
| Birthday date | `src/pages/Home.jsx` | 27 |
| Personal message | `src/pages/Message.jsx` | 10 |
| Sender name (msg) | `src/pages/Message.jsx` | 31 |
| Sender name (closing) | `src/pages/Closing.jsx` | 52 |
| WhatsApp number | `src/pages/Closing.jsx` | 60 |

## 📂 File Locations to Add

| Files | Location |
|-------|----------|
| 5 photos | `/public/images/photo1.jpg` to `photo5.jpg` |
| Music | `/public/music/birthday-song.mp3` |

## ✅ Customization Checklist

```
NAMES & TEXT:
[ ] Change girlfriend's name (Home page)
[ ] Change girlfriend's name (Closing page)
[ ] Write personal message
[ ] Update sender name in message
[ ] Update sender name in closing

MEDIA:
[ ] Add photo1.jpg
[ ] Add photo2.jpg
[ ] Add photo3.jpg
[ ] Add photo4.jpg
[ ] Add photo5.jpg
[ ] Add birthday-song.mp3

OPTIONAL:
[ ] Update WhatsApp link
[ ] Change colors (if desired)
[ ] Update countdown date if needed

TESTING:
[ ] Test on desktop
[ ] Test on mobile
[ ] Play music
[ ] Check all animations
[ ] Verify all pages work

DEPLOYMENT:
[ ] Build with: npm run build
[ ] Deploy to Vercel/Netlify/etc
[ ] Test live website
[ ] Share with girlfriend!
```

## 🎨 Color Customization (Optional)

If you want different colors, edit [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  primary: "#6B4226",      // Main color
  secondary: "#A67B5B",    // Secondary
  soft: "#D2B48C",         // Soft shade
  cream: "#F5E6D3",        // Background
  accent: "#8B5E3C"        // Highlight
}
```

**Color Ideas:**
- Rose Gold: `#B76E79`, `#D4A5A5`, `#E8C5C5`
- Lavender: `#8E7CC3`, `#B8A8D8`, `#D4C5E8`
- Sage: `#6B8E7B`, `#A8B8A8`, `#C5D4C5`

## 🎵 Music Tips

1. **Best sources (FREE):**
   - Bensound.com
   - Pixabay.com/music
   - FreeAudioMotion.com
   - YouTube Audio Library

2. **Best formats:**
   - MP3 (best compatibility)
   - OGG (smaller file)
   - WAV (high quality)

3. **File size:**
   - Aim for under 5MB
   - Compress if needed

4. **Music style:**
   - Instrumental preferred
   - Smooth & relaxing
   - Romantic or uplifting

## 🚀 Deploy Commands

```bash
# Build the website
npm run build

# Preview build locally
npm run preview

# Run dev server
npm run dev

# Check for errors
npm run lint
```

## 🆘 Troubleshooting

**Photos not showing?**
- ❌ Path: `/src/assets/images/` ← Wrong!
- ✅ Path: `/public/images/` ← Correct!
- ✅ File names: `photo1.jpg`, `photo2.jpg`, etc

**Music not playing?**
- Check: `/public/music/birthday-song.mp3` exists
- Try reload page
- Check browser console (F12)

**Website looks broken?**
- Clear browser cache (Ctrl+Shift+R)
- Hard refresh (Ctrl+F5)
- Try different browser

**Styles not showing?**
- Save all files (Ctrl+S)
- Dev server auto-reloads
- Check no errors in console

## 📞 Need Help?

See full guide in [CUSTOMIZE.md](CUSTOMIZE.md)

## 🎉 You're All Set!

```
✨ Website Created
🎨 Customized
📸 Photos Added
🎵 Music Added
🚀 Ready to Deploy
💕 Ready to Impress!
```

**One more thing:** Save your work often! Git is your friend:
```bash
git add .
git commit -m "Updated birthday website"
git push
```

---

Good luck! Your girlfriend will love this! 🎂❤️
