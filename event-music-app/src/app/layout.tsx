import type { Metadata } from 'next';
import './global.css';
import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Kagemaya.id — Sinema 4D & Pengalaman Kreatif',
  description:
    'Platform kurasi tiket film sinema 4D interaktif, workshop seni visual, dan festival budaya kolaborasi sinema Indo-Jepang.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <body className="bg-kage-black text-kage-washi antialiased flex flex-col min-h-screen">
        <AuthProvider>
          <div className="film-grain" />
          
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>

          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
