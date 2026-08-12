import { Copy, Mail } from "lucide-react";
import { useRef } from "react";

export default function PortfolioContact() {
  const emailRef = useRef<HTMLButtonElement>(null);

  const handleCopyEmail = () => {
    const email = "oluwadareseyii@gmail.com";
    navigator.clipboard.writeText(email);

    if (emailRef.current) {
      emailRef.current.classList.add("bg-gray-100");
      setTimeout(() => {
        if (emailRef.current) {
          emailRef.current.classList.remove("bg-gray-100");
        }
      }, 2000);
    }
  };

  return (
    <section id="contact-section" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
            Got a question, proposal or project or want to work together on
            something? Feel free to reach out.
          </p>
        </div>

        {/* Marquee-like scrolling text */}
        <div className="mb-12 overflow-hidden border-y border-gray-200 py-8">
          <a
            href="mailto:oluwadareseyii@gmail.com?subject=Lets%20work%20together!&body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
            className="block text-center text-lg font-bold uppercase tracking-wider transition-colors hover:text-gray-600 md:text-2xl"
          >
            LET'S TALK — LET'S COLLABORATE — SAY HELLO — WANNA BE STARTING
            SOMETHING?
          </a>
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <button
            ref={emailRef}
            onClick={handleCopyEmail}
            className="flex items-center gap-3 rounded-lg border border-gray-300 px-6 py-4 transition-colors hover:border-gray-900 hover:bg-gray-50"
          >
            <Mail size={20} />
            <span className="text-base font-medium">
              erjhonbaldoza@gmail.com
            </span>
            <Copy size={16} />
          </button>
          <span className="text-xs text-gray-600">Click to copy</span>
        </div>
      </div>
    </section>
  );
}
