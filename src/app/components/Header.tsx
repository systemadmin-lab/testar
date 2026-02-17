"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`w-full h-[121px] flex items-center justify-between fixed top-0 left-0 z-50 box-border transition-all duration-500 ${
        scrolled 
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg" 
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        paddingTop: "35px",
        paddingBottom: "35px",
        paddingLeft: "180px",
        paddingRight: "180px",
      }}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-[14px] shrink-0">
         <Image 
            src="/assets/header/mainlogo.svg" 
            alt="Arcedion Icon" 
            width={47} 
            height={47} 
            className="w-[47px] h-[47px]"
         />
         <Image 
            src="/assets/header/Arcediyon.svg" 
            alt="Arcedion Text" 
            width={127} 
            height={21} 
            className="w-[127px] h-[21px]"
         />
      </div>

      {/* Navigation - 373px margin from logo (hidden on mobile) */}
      <nav className="hidden lg:flex items-center gap-8 shrink-0" style={{ marginLeft: "373px" }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label} 
              href={item.href} 
              className={`text-sm font-medium transition-colors ${
                isActive 
                  ? "text-[#DA1316]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* CTA Button - 373px margin from nav (hidden on mobile) */}
      <button 
  className="
    group
    hidden lg:flex items-center justify-center
    font-medium text-sm
    shrink-0
    transition-all duration-500
    text-white
    relative overflow-hidden
  "
  style={{
    width: "148px",
    height: "51px",
    backgroundColor: "rgba(218, 19, 22, 1)",
    borderRadius: "8px",
    marginLeft: "373px",
  }}
>
  <span className="relative z-10 group-hover:text-black transition-colors duration-500">
    Get Started
  </span>

  {/* hover background */}
  <span
    className="
      absolute inset-0
      bg-[rgba(255,241,203,1)]
      translate-x-[-100%]
      group-hover:translate-x-0
      transition-transform duration-500
    "
  />
</button>

      {/* Mobile Hamburger Button */}
      <button 
        className="lg:hidden flex items-center justify-center text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Overlay Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-black/95 backdrop-blur-md z-40 flex flex-col items-center pt-12 gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  isActive ? "text-[#DA1316]" : "text-white hover:text-white/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            className="mt-4 px-8 py-3 bg-[#DA1316] text-white rounded-lg font-medium text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </button>
        </div>
      )}

    </header>
  );
}
