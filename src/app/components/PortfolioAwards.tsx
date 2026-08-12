export default function PortfolioAwards() {
  const awards = [
    "Featured in DILG for my work on the DILGMS 2023.",
  ];

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Awards Left */}
          <div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
              AWARDS X <br /> RECOGNITION
            </h2>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="animate-fadeIn border-b border-gray-200 pb-4 text-sm text-gray-700 last:border-b-0"
                >
                  {award}
                </div>
              ))}
            </div>
          </div>

          {/* Awards Right */}
          <div className="flex flex-col gap-12">
            <div className="animate-fadeIn">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest">
                Interests
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Web Development, Animation, Graphic Design, Gaming, Music <br />
                <a
                  href="https://github.com/tamihstick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  See my Github
                </a>
              </p>
            </div>

            <div className="animate-fadeIn">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest">
                ICEBREAKERS
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                I listen to Spotify all the time, you can see
                what I'm currently listening to on this{" "}
                <a
                  href="https://spotify.com/user/tamihstick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Spotify.
                </a>{" "}
                I like traveling and good food (work with me so I can fund
                this).{" "}
                <button
                  onClick={() => {
                    const contactSection =
                      document.getElementById("contact-section");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="font-bold text-gray-900 underline hover:no-underline"
                >
                  GET IN TOUCH
                </button>{" "}
                to know more about me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
