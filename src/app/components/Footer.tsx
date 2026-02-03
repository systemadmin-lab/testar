import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Shield, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      style={{ backgroundColor: 'rgba(92, 8, 9, 1)' }}
      className="w-full text-white pt-24 pb-8"
    >
      <div 
        className="w-full mx-auto"
        style={{ paddingLeft: '180px', paddingRight: '180px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/20">
                    <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">Arcadeon</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-8 text-sm">
              Helping ambitious brands tell their story and scale their impact through strategic growth partnerships.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white/80 transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white/80 transition-colors"><Youtube className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white/80 transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white/80 transition-colors"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li><Link href="#" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Creative & Design</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Strategy & Planning</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Traditional Marketing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Customer Experience</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">MarTech Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+880 0000 000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span>contact@siliconrya.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-1" />
                <span>House #06, Floor #3rd (301)<br/>Road #104, Gulshan-2, Lakeside<br/>Dhaka 1212, Bangladesh.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
          <p>© 2026 Arcadeon. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
