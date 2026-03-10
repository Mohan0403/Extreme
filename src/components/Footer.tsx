import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Xtreme Car Care" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-heading text-lg font-bold text-gradient-gold">XTREME CAR CARE</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Chennai's premium car detailing and restoration studio. Precision care for your prized possession.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Services", "About", "Gallery", "Reviews", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <Link to="/book" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-muted-foreground text-sm">
              <p>6, Arcot Rd, Virugambakkam</p>
              <p>Chennai, Tamil Nadu 600092</p>
              <a href="tel:+919884149111" className="hover:text-primary transition-colors">+91 98841 49111</a>
              <p>Mon – Sun: 9 AM – 11 PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Xtreme Car Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
