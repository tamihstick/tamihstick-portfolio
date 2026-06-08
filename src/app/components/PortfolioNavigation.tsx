export default function PortfolioNavigation() {
  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold tracking-tight">
              tamihstick <br /> folio
            </div>
            <div className="hidden text-sm text-gray-600 md:block">
              Full Stack Developer <br /> Folio / 2023 — 2026
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="block text-sm text-gray-600 md:hidden">
              Frontend Developer <br /> Folio / 2021 — 2024
            </div>

            <div className="h-2 w-2 rounded-full bg-green-500" />

            <button
              onClick={handleContactScroll}
              className="px-4 py-2 text-sm font-medium transition-colors hover:text-gray-600"
            >
              contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
