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
      { label: "Pantallas Táctiles", href: "https://pantallastactiles.com.ar", external: true },
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
            className={`flex items-center gap-1 ${isMobile ? "w-full px-3 py-2.5" : "px-3 py-2"} rounded-lg text-sm font-medium transition-colors`}
            style={{ color: "rgba(255,255,255,0.8)" }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile && dropdownOpen !== item.label) {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }
            }}
          >
            {item.label} <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === item.label ? "rotate-180" : ""}`} />
          </button>
          
          {dropdownOpen === item.label && (
            <div 
              className={`${isMobile ? "pl-4 mt-1 space-y-1" : "absolute top-full left-0 mt-2 w-56 rounded-xl shadow-lg py-2"} transition-all`}
              style={!isMobile ? {
                background: "rgba(18, 19, 107, 0.95)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.1)",
              } : {}}
            >
              {item.dropdown.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  target={subItem.external ? "_blank" : "_self"}
                  rel={subItem.external ? "noopener noreferrer" : ""}
                  onClick={() => { setDropdownOpen(null); if (isMobile) setMobileOpen(false); }}
                  className={`block px-4 py-2 text-sm font-medium transition-colors`}
                  style={{ color: "rgba(255,255,255,0.8)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
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
        className={`block ${isMobile ? "px-3 py-2.5" : "px-3 py-2"} rounded-lg text-sm font-medium transition-colors`}
        style={{ color: "rgba(255,255,255,0.8)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = "#ffffff";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
          (e.currentTarget as HTMLElement).style.background = "transparent";
        }}
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
          ? "rgba(18, 19, 107, 0.75)"
          : "var(--brand-navy)",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img src="/lcd_logo.png" alt="La Clase Digital" width={140} height={40} className="cursor-pointer brightness-0 invert" />
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
                className="px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                style={{
                  background: "var(--brand-lime)",
                  color: "var(--brand-navy)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.filter = "brightness(1.1)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.filter = "brightness(1)")
                }
              >
                Iniciar Sesión
              </Link>
            )}

            {user && (
              <div className="flex items-center gap-4 border-l border-white/20 pl-4 ml-2">
                <span className="text-sm font-bold" style={{ color: "var(--brand-cyan)" }}>
                  {user.name.split(" ")[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f87171")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                >
                  Salir
                </button>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{ color: "rgba(255,255,255,0.9)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "transparent")
            }
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(18, 19, 107, 0.95)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} isMobile={true} />
            ))}
            <div
              className="pt-3 space-y-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              {!user && (
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2.5 rounded-full text-sm font-bold transition-all mb-2 shadow-md"
                  style={{
                    background: "var(--brand-lime)",
                    color: "var(--brand-navy)",
                  }}
                >
                  Iniciar Sesión
                </Link>
              )}
              {user && (
                <>
                  <div className="block px-4 py-2 text-sm font-bold" style={{ color: "var(--brand-cyan)" }}>
                    Hola, {user.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color: "#f87171",
                      border: "1px solid rgba(248,113,113,0.3)",
                      background: "rgba(248,113,113,0.1)",
                    }}
                  >
                    Cerrar Sesión
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
