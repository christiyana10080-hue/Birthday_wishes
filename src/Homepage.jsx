import React, { useRef } from "react";

function Home() {
  // ✅ Use files from public folder
  const HERO_IMAGE = "/hero.png";
  const GIFT_VIDEO = "/gift1.mp4";
  const GALLERY_IMG1 = "/gallery1.png";
  const GALLERY_IMG2 = "/gallery2.png";
  // const SONG_URL = "/song.mp3"; // if you want background music

  const audioRef = useRef(null);

  // Confetti
  const Confetti = () => (
    <div className="confetti-pointer fixed inset-0 pointer-events-none z-50">
      <div className="confetti-area absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={`confetti piece-${i % 5}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 font-sans text-gray-900">
      {/* HERO */}
      <main id="home" className="pt-12">
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-20">
            <div className="space-y-6">
              <div className="text-9xl md:text-[160px] leading-none font-extrabold text-black relative">
                <span className="block">24</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-black">
                <span className="block">Happy Birthday...!🎂</span>
                <span className="block -mt4">Ruksana💖💓</span>
              </h1>
              <p className="text-md md:text-lg text-gray-700">
                I made this just for you — teyrey vastech...!💝
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#surprise"
                  className="bg-yellow-500 hover:bg-yellow-600 rounded-full px-5 py-3 font-semibold transition-transform transform hover:-translate-y-1 shadow-lg"
                >
                  Click for surprise
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl drop-shadow-xl overflow-hidden animate-float">
                <img
                  src={HERO_IMAGE}
                  alt="hero"
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Greeting (timer removed) */}
        <section
          id="wish"
          className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3 items-stretch"
        >
          <div className="md:col-span-3 bg-white rounded-2xl p-8 shadow-lg overflow-hidden">
            <h2 className="text-3xl font-bold text-yellow-600">#Hey Rukku..!💓💖</h2>
            <p className="mt-4 text-gray-700">
              Many more Happy returns of the day...! 💓💖🎂🍰
            </p>
            <blockquote className="mt-6 border-l-4 border-yellow-400 pl-4 italic text-gray-600">
              lot&apos;s of love to U...!
            </blockquote>
          </div>
        </section>

        {/* Surprise Section (always visible now) */}
        <section id="surprise" className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-2xl p-6 md:p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold">Surprise</h3>
            <div className="mt-6 relative">
              <div className="bg-white p-4 md:p-8 rounded-xl shadow-2xl relative animate-pop">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h4 className="text-2xl font-extrabold">
                      Happy Birthday, Ruksana! 🎉
                    </h4>
                    <p className="mt-4 text-gray-700">
                      On this special day, I just want to remind you
                      how much you mean to me. You are my sunshine, my safe
                      place, and my happiest reason to smile every day. Life
                      feels magical with you in it, and I am endlessly
                      grateful to walk this journey by your side. Happy
                      Birthday, today is all about you, and I
                      promise to make you feel as special as you truly are. I
                      love you forever and always 💖
                      <br />
                      <br />
                      Kabbi tijey hurt kartani....! And sorry for our all past
                      conflicts. Let’s end our fights...!🫴
                    </p>

                    <div className="mt-6 flex gap-3">
                      <a
                        className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-[1.02] transition"
                        href="#gallery"
                      >
                        View gallery
                      </a>
                      {/* <a
                        className="bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-[1.02] transition"
                        href="#video"
                      >
                        Watch video
                      </a> */}
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <video
                      id="surprise-video"
                      src={GIFT_VIDEO}
                      controls
                      playsInline
                      className="w-full h-90 object-cover"
                    />
                  </div>
                </div>
                {/* <audio ref={audioRef} src={SONG_URL} /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold mb-6">Memories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["/gallery1.png", "/gallery2.png", "/hero.png"].map((src, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-md transform hover:scale-[1.02] transition"
              >
                <img
                  src={src}
                  alt={`gallery-${idx}`}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-gray-500">
          Made with ❤️ by me for you — aunty...! ruk's
        </footer>
      </main>

      {/* Confetti always visible */}
      <Confetti />
    </div>
  );
}

export default Home;
