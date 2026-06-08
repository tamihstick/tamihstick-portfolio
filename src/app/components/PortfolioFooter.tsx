import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function PortfolioFooter() {
  const [time, setTime] = useState({ hour: "00", minute: "00" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hour = String(now.getHours()).padStart(2, "0");
      const minute = String(now.getMinutes()).padStart(2, "0");
      setTime({ hour, minute });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { label: "Twitter", href: "https://twitter.com/tamihstick" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/tamihstick/",
    },
    { label: "Github", href: "https://github.com/tamihstick" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Social Links */}
        <div className="mb-12 flex flex-wrap gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-gray-600"
            >
              <ExternalLink size={16} />
              {link.label}
            </a>
          ))}
        </div>

        {/* Footer Info */}
        <div className="grid gap-8 border-t border-gray-200 pt-8 text-sm text-gray-600 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-900">NAGA, PH</p>
            <div className="flex items-center gap-1">
              <span>{time.hour}</span>
              <span className="animate-pulse">:</span>
              <span>{time.minute}</span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="font-medium text-gray-900">© 2026 tamihstick. All rights reserved.</p>
          </div>

          <div className="text-right">
            <p>
              Design by{" "}
              <a
                href="tamihstick"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                tamihstick
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
