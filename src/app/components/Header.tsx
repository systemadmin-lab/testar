import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header 
      className="w-full h-[121px] flex items-center justify-between border-b border-white/5 bg-transparent backdrop-blur-md fixed top-0 left-0 z-50 box-border"
      style={{
        paddingTop: "35px",
        paddingBottom: "35px",
        paddingLeft: "180px",
        paddingRight: "180px",
      }}
    >
      {/* Logo Section */}
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

      {/* Navigation - 373px margin from logo */}
      <nav className="flex items-center gap-8 shrink-0" style={{ marginLeft: "373px" }}>
        {[
          { label: "Home", href: "/home" },
          { label: "Services", href: "/services" },
          { label: "Work", href: "/work" },
          { label: "About us", href: "/about-us" },
          { label: "Contact Us", href: "/contact-us" },
        ].map((item) => (
          <Link 
            key={item.label} 
            href={item.href} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* CTA Button - 373px margin from nav */}
      <button 
  className="
    group
    flex items-center justify-center
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

    </header>
  );
}
