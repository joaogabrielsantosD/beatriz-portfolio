"use client";
import React from 'react';
import '@/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Beatriz Calado - Portfolio</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children} {/* Aqui renderiza o conteúdo da página */}
        </main>
        <footer className="text-center mt-auto py-4 w-full">
          <p>&copy; 2024 Beatriz</p>
        </footer>
      </body>
    </html>
  );
}
