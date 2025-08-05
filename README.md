# Bhakti Sanskriti - Next.js Website

A spiritual organization website built with Next.js, dedicated to preserving and promoting Hindu culture, traditions, and spiritual practices.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Multilingual Support**: English and Hindi language switching
- **Modern Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Component Library**: shadcn/ui components for consistent design
- **SEO Optimized**: Built-in Next.js SEO features
- **Fast Performance**: Static generation and optimized builds

## 📱 Pages

- **Home**: Hero section with services overview
- **About**: Mission, vision, and organizational values
- **Services**: Spiritual services and cultural programs
- **Products**: Sacred worship kits and ritual items
- **Gallery**: Photo and video galleries of events
- **Contact**: Contact information with embedded map

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd bhakti-sanskriti-nextjs
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context (Language)
- **Data Fetching**: TanStack Query

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── products/        # Products page
│   ├── gallery/          # Gallery page
│   ├── contact/          # Contact page
│   └── not-found.tsx     # 404 page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── Layout.tsx        # Main layout component
├── contexts/             # React contexts
├── hooks/                # Custom hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎨 Customization

### Colors & Theming

The website uses a custom color scheme defined in `app/globals.css`:
- Primary: `#1F4D66` (Deep blue)
- Secondary: `#F4A300` (Golden yellow)
- Background gradients for spiritual sections

### Language Support

Language switching is handled by `LanguageContext.tsx` with translations for:
- Navigation menus
- Page content
- UI elements

### Adding New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update navigation in `components/Layout.tsx`

## 📞 Contact Information

- **Location**: Clock Tower, Dehradun, Uttarakhand - 248001, India
- **Phone**: +91 7017075603
- **Email**: info@bhaktisanskriti.org
- **WhatsApp**: Available for quick responses

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with love for preserving Hindu culture and traditions
- Thanks to the open-source community for the amazing tools
- Special thanks to all contributors and supporters

---

**Om Namah Shivaya** 🕉️