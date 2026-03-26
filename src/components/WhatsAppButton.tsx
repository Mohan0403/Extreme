import { MessageCircle, Phone } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+919884149111"
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-gold"
        style={{
          background: 'linear-gradient(to bottom, #E6C16A 0%, #D4A94A 45%, #B8892F 75%, #8F6A24 100%)',
          color: '#18171c',
          boxShadow: '0 4px 18px 0 #B8892F55',
        }}
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href="https://wa.me/919884149111?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Xtreme%20Car%20Care"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-foreground shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
