"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

type SubItem = { label: string; href: string; external?: boolean };
type NavItem = {
  label: string;
  href?: string;
  subItems?: SubItem[];
  subGroups?: { group: string; items: SubItem[] }[];
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Tienda", href: "https://garaged.com.ar", external: true },
  {
    label: "Herramientas",
    subGroups: [
      {
        group: "Plataformas educativas",
        items: [
          { label: "Bienestar Docente", href: "https://bienestardocente.com.ar/", external: true },
          { label: "Pantallas Táctiles", href: "https://pantallastactiles.com.ar/", external: true },
          { label: "Pizarras Digitales", href: "https://pizarrasdigitales.com.ar/", external: true },
          { label: "TOMI Digital", href: "https://tomi.digital/es", external: true },
          { label: "Opivalia", href: "https://opivalia.com/", external: true },
        ],
      },
      {
        group: "Recursos y contenido",
        items: [
          { label: "Juegos", href: "/juegos" },
          { label: "Recursos", href: "/recursos" },
          { label: "Descargas", href: "https://www.centrodeinnovacioneducativa.com.ar/blog", external: true },
          { label: "Blog", href: "/blog" },
          { label: "Canal de YouTube", href: "https://www.youtube.com/user/ondafilms/videos", external: true },
        ],
      },
    ],
  },
  { label: "Webinar", href: "https://www.youtube.com/@EmpresariosTV", external: true },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Navbar({ user }: { user: any }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.reload();
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled ? "rgba(18, 19, 107, 0.75)" : "var(--brand-navy)",
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
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1"
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
                ) : (
                  <button
                    onClick={() => setActiveDropdown(
                      activeDropdown === item.label ? null : item.label
                    )}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      if (activeDropdown !== item.label) {
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }
                    }}
                  >
                    {item.label}
                    {(item.subItems || item.subGroups) && <ChevronDown className={`w-4 h-4 opacity-70 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </button>
                )}

                {/* Dropdown — flat subItems */}
                {item.subItems && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-2xl overflow-hidden"
                    style={{ background: 'rgba(13,14,82,0.97)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="py-2">
                      {item.subItems.map((sub) => (
                        <Link key={sub.label} href={sub.href}
                          target={sub.external ? '_blank' : undefined}
                          rel={sub.external ? 'noopener noreferrer' : undefined}
                          className="block px-4 py-2.5 text-sm transition-all"
                          style={{ color: 'rgba(255,255,255,0.78)' }}
                          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(0,212,245,0.1)'; el.style.color = '#00D4F5'; el.style.paddingLeft = '20px'; }}
                          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'rgba(255,255,255,0.78)'; el.style.paddingLeft = '16px'; }}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dropdown — grouped subGroups */}
                {item.subGroups && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 rounded-2xl shadow-2xl overflow-hidden"
                    style={{ background: 'rgba(13,14,82,0.97)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', minWidth: '380px' }}>
                    <div className="grid grid-cols-2 gap-0 p-4">
                      {item.subGroups.map((group) => (
                        <div key={group.group} className="p-2">
                          <p className="text-[10px] font-black uppercase tracking-widest mb-3 px-2" style={{ color: '#00D4F5' }}>{group.group}</p>
                          <div className="space-y-0.5">
                            {group.items.map((sub) => (
                              <Link key={sub.label} href={sub.href}
                                target={sub.external ? '_blank' : undefined}
                                rel={sub.external ? 'noopener noreferrer' : undefined}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                                style={{ color: 'rgba(255,255,255,0.75)' }}
                                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(0,212,245,0.1)'; el.style.color = '#fff'; }}
                                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'rgba(255,255,255,0.75)'; }}>
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(0,212,245,0.5)' }} />
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions — auth */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-4">
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--brand-cyan)" }}
                >
                  Hola, {user.name.split(" ")[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#f87171")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")
                  }
                >
                  Salir
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                style={{
                  background: "var(--brand-lime)",
                  color: "#0d0e52",
                }}
                onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--brand-lime-hover)")
                }
                onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--brand-lime)")
                }
              >
                Iniciar Sesión
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{ color: "rgba(255,255,255,0.9)" }}
            onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background =
              "rgba(255,255,255,0.1)")
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
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="block px-3 py-2.5 rounded-lg text-sm font-bold" style={{ color: "var(--brand-cyan)" }}>
                    {item.label}
                  </div>
                )}
                {item.subItems && (
                  <div className="pl-4 space-y-1 mb-2 border-l border-white/10 ml-3">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        target={sub.external ? "_blank" : undefined}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm transition-colors"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div
              className="pt-3 space-y-2 mt-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              {user ? (
                <>
                  <div
                    className="block px-4 py-2 text-sm font-bold"
                    style={{ color: "var(--brand-cyan)" }}
                  >
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
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold transition-all"
                  style={{
                    background: "var(--brand-lime)",
                    color: "#0d0e52",
                  }}
                >
                  Iniciar Sesión
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

