"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string; external?: boolean }[];
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Tienda", href: "https://garaged.com.ar", external: true },
  { 
    label: "Herramientas", 
    dropdown: [
      { label: "Bienestar Docente", href: "https://bienestardocente.com.ar", external: true },
      { label: "Pantallas Tactiles", href: "https://pantallastactiles.com.ar", external: true },
      { label: "Pizarras Digitales", href: "https://pizarrasdigitales.com.ar", external: true },
      { label: "Juegos", href: "/juegos" },
      { label: "Opivalia", href: "https://opivalia.com", external: true },
      { label: "Recursos", href: "https://www.centrodeinnovacioneducativa.com.ar/blog", external: true },
      { label: "Descargas", href: "/descargas" },
      { label: "Blog", href: "/blog" },
      { label: "Acceso a TOMI Digital", href: "https://tomi.digital/es", external: true },
      { label: "Canal de YouTube", href: "https://www.youtube.com/user/ondafilms/videos", external: true }
    ]
  },
  { label: "Webinar", href: "https://www.youtube.com/user/ondafilms/streams", external: true },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Navbar({ user }: { user: any }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.reload();
  };

  const NavLink = ({ item, isMobile = false }: { item: NavItem, isMobile?: boolean }) => {
    if (item.dropdown) {
      return (
        <div className={isMobile ? "w-full" : "relative"} ref={!isMobile ? dropdownRef : null}>
          <button
            onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
            className={`flex items-center gap-1.5 ${isMobile ? "w-full px-3 py-2.5" : "px-3 py-2"} rounded-lg text-sm font-medium transition-all text-[var(--foreground-muted)] hover:text-white hover:bg-white/5`}
          >
            {item.label} 
            <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === item.label ? "rotate-180" : ""}`} />
          </button>
          
          {dropdownOpen === item.label && (
            <div 
              className={`${isMobile ? "pl-4 mt-1 space-y-1" : "absolute top-full left-0 mt-2 w-56 rounded-xl py-2"} transition-all`}
              style={!isMobile ? {
                background: "var(--background-elevated)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--border)",
                boxShadow: "0 20px 50px -12px rgba(0,0,0,0.5)",
              } : {}}
            >
              {item.dropdown.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  target={subItem.external ? "_blank" : "_self"}
                  rel={subItem.external ? "noopener noreferrer" : ""}
                  onClick={() => { setDropdownOpen(null); if (isMobile) setMobileOpen(false); }}
                  className="block px-4 py-2.5 text-sm font-medium text-[var(--foreground-muted)] hover:text-white hover:bg-white/5 transition-all"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        href={item.href!}
        target={item.external ? "_blank" : "_self"}
        rel={item.external ? "noopener noreferrer" : ""}
        onClick={() => { if (isMobile) setMobileOpen(false); }}
        className={`block ${isMobile ? "px-3 py-2.5" : "px-3 py-2"} rounded-lg text-sm font-medium transition-all text-[var(--foreground-muted)] hover:text-white hover:bg-white/5`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 10, 15, 0.8)"
          : "var(--background)",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img 
              src="/lcd_logo.png" 
              alt="La Clase Digital" 
              width={140} 
              height={40} 
              className="cursor-pointer brightness-0 invert" 
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {!user && (
              <Link
                href="/login"
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all bg-[var(--brand-emerald)] text-[var(--background)] hover:bg-[var(--brand-emerald-light)]"
              >
                Iniciar Sesion
              </Link>
            )}

            {user && (
              <div className="flex items-center gap-4 border-l border-[var(--border)] pl-4 ml-2">
                <span className="text-sm font-semibold text-[var(--brand-emerald)]">
                  {user.name.split(" ")[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-[var(--foreground-muted)] hover:text-red-400 transition-colors"
                >
                  Salir
                </button>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[var(--foreground-muted)] hover:text-white hover:bg-white/5 transition-all"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-[var(--border)]"
          style={{
            background: "var(--background-elevated)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} isMobile={true} />
            ))}
            <div className="pt-4 space-y-2 border-t border-[var(--border)]">
              {!user && (
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-3 rounded-full text-sm font-semibold bg-[var(--brand-emerald)] text-[var(--background)]"
                >
                  Iniciar Sesion
                </Link>
              )}
              {user && (
                <>
                  <div className="block px-4 py-2 text-sm font-semibold text-[var(--brand-emerald)]">
                    Hola, {user.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center px-4 py-3 rounded-lg text-sm font-medium text-red-400 border border-red-400/30 bg-red-400/10"
                  >
                    Cerrar Sesion
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
