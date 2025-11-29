# 📝 Personal Notes App

Aplikasi catatan pribadi yang modern dan minimalis, dibangun dengan React dan Vite. Terinspirasi dari desain Notion dengan fitur-fitur lengkap untuk mengelola catatan Anda.

## ✨ Fitur

### 🌙 **Dark/Light Mode**
- Toggle tema dengan satu klik
- Persistent theme dengan localStorage
- Auto-detection system preference

### 🔍 **Enhanced Search**
- Real-time search filtering
- Search dengan tombol clear (X)
- Search counter yang informatif
- Tersedia di halaman aktif dan arsip

### ✏️ **Smart Note Input**
- Character limit indicator untuk judul (50 karakter)
- Visual warning system (normal → warning → danger)
- Form validation yang responsive
- Auto-focus dan keyboard shortcuts

### 📱 **Responsive Design**
- Mobile-first approach
- Consistent UI/UX di semua device
- Touch-friendly interface
- Optimized untuk tablet dan desktop

### 🗂️ **Complete Note Management**
- **CRUD Operations**: Create, Read, Update, Delete
- **Archive System**: Arsipkan catatan tanpa menghapus
- **Auto-sorting**: Catatan terbaru selalu di atas
- **Multi-page Navigation**: Halaman terpisah untuk setiap fungsi

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM v7
- **Styling**: Pure CSS dengan CSS Variables
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/arezyhs/dicoding-react-personal-notes-app.git
   cd dicoding-react-personal-notes-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable components
│   ├── NoteInput.jsx    # Form input dengan character limit
│   └── NoteSearch.jsx   # Search dengan clear button
├── hooks/               # Custom React hooks
│   └── useTheme.js      # Theme management hook
├── pages/               # Page components
│   ├── AddNote.jsx      # Halaman tambah catatan
│   ├── ArchivedNotesList.jsx  # Halaman daftar arsip
│   ├── NoteDetail.jsx   # Halaman detail catatan
│   ├── NotesList.jsx    # Halaman daftar catatan aktif
│   └── NotFound.jsx     # 404 page
├── styles/
│   └── style.css        # Global styles dengan CSS variables
├── utils/
│   ├── index.js         # Utility functions
│   └── local-data.js    # Data management functions
├── App.jsx              # Main app component
└── index.jsx            # App entry point
```

## 🎨 Design System

### **Color Palette**
- **Light Mode**: Clean whites dan soft grays
- **Dark Mode**: Deep blacks dan subtle grays
- **Accent Colors**: Purposeful colors untuk actions

### **Typography**
- **Page Titles**: 24px, font-weight 600
- **Note Titles**: 18px, font-weight 600  
- **Body Text**: 15px-16px, line-height 1.5-1.7
- **Meta Text**: 12px-14px, muted colors

### **Components**
- **Buttons**: Consistent `.btn` class dengan variants
- **Cards**: Hover effects dengan subtle shadows
- **Forms**: Clean inputs dengan focus states
- **Navigation**: Minimalist dengan active states

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Pages & Routes

- `/` - **Catatan Aktif**: Daftar semua catatan aktif
- `/archived` - **Arsip**: Daftar catatan yang diarsipkan
- `/notes/new` - **Tambah Catatan**: Form untuk membuat catatan baru
- `/notes/:id` - **Detail Catatan**: View detail dan edit catatan
- `*` - **404 Page**: Halaman tidak ditemukan

## 🎯 Key Features Detail

### **Note Management**
- ✅ Tambah catatan baru dengan validasi
- ✅ Edit catatan existing (via detail page)
- ✅ Hapus catatan dengan konfirmasi
- ✅ Arsip/unarsip catatan
- ✅ Auto-save dengan localStorage

### **Search & Filter**
- ✅ Real-time search di judul catatan
- ✅ Case-insensitive search
- ✅ Search hasil counter
- ✅ Clear search dengan tombol X

### **UI/UX Enhancements**
- ✅ Consistent spacing dan typography
- ✅ Smooth transitions dan animations
- ✅ Loading states dan empty states
- ✅ Accessible color contrast
- ✅ Keyboard navigation support

## 🌟 Highlights

- **Modern React**: Menggunakan functional components dan hooks
- **Performance**: Fast builds dengan Vite
- **Accessibility**: WCAG compliant colors dan navigation
- **SEO Ready**: Proper HTML semantics
- **Mobile Optimized**: Touch gestures dan responsive design

## 👨‍💻 Author

**Akbar Setiyawan (arezyhs)**
- GitHub: [@arezyhs](https://github.com/arezyhs)
- Project: [dicoding-react-personal-notes-app](https://github.com/arezyhs/dicoding-react-personal-notes-app)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React + Vite**
