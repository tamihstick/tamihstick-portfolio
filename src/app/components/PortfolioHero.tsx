import { ArrowDown } from "lucide-react";

export default function PortfolioHero() {
  const handleScrollDown = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h1 className="mb-8 text-center text-5xl font-bold tracking-tight md:text-7xl">
            FULL <br className="md:hidden" />
            <span className="hidden md:inline">——</span> STACK <br className="md:hidden" />
            <span className="hidden md:inline">——</span> DEVELOPER
          </h1>

          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-8">
            <div className="md:hidden text-center md:text-left text-base leading-relaxed text-gray-700">
              <span className="font-semibold">About</span> I am a developer based in Naga City, Philippines focused on creating interactive digital experiences on the web, working with brands and industry leaders such as{" "}
              <span className="font-semibold">Google Fonts,</span>
              <span className="font-semibold"> Paystack,</span>{" "}
              <span className="font-semibold">Heva Health,</span>{" "}
              <span className="font-semibold">Disney,</span>{" "}
              <span className="font-semibold">Jelly,</span> and{" "}
              <span className="font-semibold">Null</span> amongst others to achieve this.
            </div>

            <div className="hidden md:flex md:flex-1 md:flex-col md:gap-8">
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold">About</span> I am a developer based in Manchester, UK focused on creating interactive digital experiences on the web, working with brands and industry leaders such as{" "}
                <span className="font-semibold">Google Fonts,</span>
                <span className="font-semibold"> Paystack,</span>{" "}
                <span className="font-semibold">Heva Health,</span>{" "}
                <span className="font-semibold">Disney,</span>{" "}
                <span className="font-semibold">Jelly,</span> and{" "}
                <span className="font-semibold">Null</span> amongst others to achieve this.
              </p>

              <div className="flex flex-col items-center gap-4">
                <p className="text-sm font-medium text-gray-600">Scroll down</p>
                <button
                  onClick={handleScrollDown}
                  className="inline-flex animate-bounce items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <ArrowDown size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
