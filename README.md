# 🎂 Sweet 18 - Birthday Website

A beautiful, modern, and interactive birthday website for your special someone's 18th birthday. Built with React.js and Tailwind CSS with stunning animations, photo gallery, and personalized messages.

## ✨ Features

### 🎨 Design
- **Aesthetic & Modern**: Clean layout with soft colors and modern design patterns
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Smooth animations and micro-interactions throughout
- **Customizable Colors**: Easy to change color palette to any theme

### 🎬 Animations
- ✨ Floating particle effects
- 🎬 Typing animation for messages
- 🎞️ Photo hover effects with zoom
- 💥 Confetti celebration animation
- 🌊 Smooth page transitions

### 🔧 Pages
1. **Home** - Landing page with countdown timer
2. **Message** - Personal digital letter with typing effect
3. **Gallery** - Beautiful photo grid (5 photos) with lightbox
4. **Closing** - Celebration page with confetti

### 🎵 Features
- Background music player with play/pause and volume control
- Auto-play capability
- Customizable music file
- Fixed player in corner

### 💫 Color Palette
- **Primary Brown**: #6B4226
- **Secondary Brown**: #A67B5B
- **Soft Tan**: #D2B48C
- **Cream Background**: #F5E6D3
- **Accent Brown**: #8B5E3C

## 🚀 Quick Start

### 1. Installation

```bash
# Clone or download this project
cd birthday-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Customization

**See [CUSTOMIZE.md](CUSTOMIZE.md) for detailed instructions on:**
- Adding names and personal messages
- Adding photos
- Adding background music
- Changing colors
- Deploying to the web

### 3. Add Your Files

```
📁 /public
  📁 images/
    📄 photo1.jpg
    📄 photo2.jpg
    📄 photo3.jpg
    📄 photo4.jpg
    📄 photo5.jpg
  📁 music/
    🎵 birthday-song.mp3
```

### 4. Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel, Netlify, or any static host
```

## 📚 Project Structure

```
birthday-web/
├── public/
│   ├── images/              # Your 5 photos here
│   └── music/               # Your background music here
├── src/
│   ├── pages/
│   │   ├── Home.jsx         # Landing & countdown
│   │   ├── Message.jsx      # Personal letter
│   │   ├── Gallery.jsx      # Photo gallery
│   │   └── Closing.jsx      # Celebration page
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MusicPlayer.jsx
│   │   └── PhotoGrid.jsx
│   ├── App.jsx
│   └── index.css
├── tailwind.config.js       # Color configuration
├── vite.config.js
└── package.json
```

## 🛠️ Technologies Used

- **React 19** - UI Framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icons
- **Canvas Confetti** - Confetti effects
- **Vite** - Build tool

## 📝 Customization Guide

See [CUSTOMIZE.md](CUSTOMIZE.md) for:
- Personalizing names and messages
- Adding photos and music
- Changing colors
- Adding WhatsApp integration
- Deployment instructions

## 🎯 Key Customizations

### Change Name
Edit in `src/pages/Home.jsx` and `src/pages/Closing.jsx`:
```jsx
💖 Nama Pacarmu 💖 → 💖 Nama Sebenarnya 💖
```

### Change Birthday Date
Edit in `src/pages/Home.jsx`:
```jsx
const targetDate = new Date('2026-05-14').getTime();
```

### Add Personal Message
Edit in `src/pages/Message.jsx`:
```jsx
const fullMessage = `Your personal message here...`;
```

### Add Photos
1. Prepare 5 photos (JPG or PNG)
2. Place in `/public/images/`
3. Name them: `photo1.jpg` through `photo5.jpg`

### Add Music
1. Prepare MP3 file
2. Place in `/public/music/`
3. Name it: `birthday-song.mp3`

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Connect on [vercel.com](https://vercel.com)
3. Deploy in one click

### Netlify
1. Push to GitHub
2. Connect on [netlify.com](https://netlify.com)
3. Deploy automatically

### GitHub Pages
```bash
npm run build
# Deploy 'dist' folder to GitHub Pages
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 💡 Tips

- ✅ Test on mobile before sending
- ✅ Optimize photos (use tinypng.com)
- ✅ Use high-quality, clear photos
- ✅ Choose meaningful background music
- ✅ Personalize every message
- ✅ Share with confidence! 💕

## 🎁 Features Breakdown

### Home Page
- Countdown timer to birthday
- Floating particle animations
- "Start Surprise" button
- Responsive grid countdown

### Message Page
- Digital love letter
- Typing animation effect
- Personal, heartfelt message
- Smooth glass morphism design

### Gallery Page
- Unique grid layout
- 5 photo slots
- Hover zoom effects
- Click to enlarge (lightbox)
- Responsive grid system

### Closing Page
- Celebration message
- Confetti animation 🎉
- Multiple action buttons
- Floating hearts animation
- Warm color theme

## 🔧 Troubleshooting

**Music not playing?**
- Check `/public/music/birthday-song.mp3` exists
- Reload page
- Check browser console

**Photos not showing?**
- Verify files in `/public/images/`
- Check file names (photo1.jpg - photo5.jpg)
- Try different image format

**Animations not smooth?**
- Update browser to latest version
- Check GPU acceleration is enabled

## 📄 License

This project is free to use and modify for personal use.

## 🎉 Happy Birthday!

This website is made with ❤️ to celebrate a special birthday. Personalize it, make it beautiful, and watch your special someone's reaction!

---

**Questions or need help?** Check [CUSTOMIZE.md](CUSTOMIZE.md) for detailed instructions!
