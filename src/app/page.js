"use client";

import { useState, useEffect } from "react";

const services = [
  { number: "01", name: "Classic Haircut", description: "A precise, timeless cut tailored to your style.", price: "$25", duration: "30 MIN" },
  { number: "02", name: "Skin Fade", description: "A clean, seamless fade with meticulous detailing.", price: "$35", duration: "45 MIN" },
  { number: "03", name: "Beard Sculpting", description: "Expert shaping, sharp lines and a refined finish.", price: "$18", duration: "20 MIN" },
  { number: "04", name: "The Full Experience", description: "A tailored haircut and beard treatment, finished right.", price: "$50", duration: "60 MIN" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    service: "Classic Haircut",
    date: "",
    time: "",
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const selectedService = services.find(
    (service) => service.name === booking.service
  );
  const today = new Date().toLocaleDateString("en-CA");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#11110f] text-[#f3f0e8]">
      <div className="bg-[#c9a875] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#171612] sm:text-xs">
        Independent barbershop · Crafted with intention
      </div>

      <header className="relative z-20 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#home" className="text-xl font-black uppercase tracking-[0.12em] sm:text-2xl">
            NORTHLINE<span className="text-[#c9a875]">.</span>
            <span className="mt-1 block text-[9px] font-medium tracking-[0.42em] text-white/50">BARBER STUDIO</span>
          </a>

          <button
            className="border border-white/20 px-4 py-2 text-xs uppercase tracking-widest md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <div className={`${menuOpen ? "absolute left-0 right-0 top-full flex flex-col border-b border-white/10 bg-[#11110f] px-6 py-5" : "hidden"} gap-6 text-xs uppercase tracking-[0.18em] md:static md:flex md:flex-row md:items-center md:bg-transparent md:p-0`}>
            <a onClick={() => setMenuOpen(false)} className="text-white/65 transition hover:text-[#c9a875]" href="#services">Services</a>
            <a onClick={() => setMenuOpen(false)} className="text-white/65 transition hover:text-[#c9a875]" href="#story">Our story</a>
            <a onClick={() => setMenuOpen(false)} className="text-white/65 transition hover:text-[#c9a875]" href="#gallery">Gallery</a>
            <a onClick={() => setMenuOpen(false)} href="#visit" className="w-fit border border-[#c9a875] px-5 py-3 text-[#c9a875] transition hover:bg-[#c9a875] hover:text-[#11110f]">Book a chair ↗</a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_35%,rgba(201,168,117,0.12),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 md:min-h-[690px] md:grid-cols-[1fr_1fr] lg:px-12 lg:py-24">
          <div className="animate-[fadeUp_.8s_ease-out_both]">
            <p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#c9a875] sm:text-xs">
              <span className="h-px w-9 bg-[#c9a875]" /> Good cuts. No shortcuts.
            </p>
            <h1 className="max-w-3xl text-6xl font-black uppercase leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[86px]">
              Find your
              <br />
              <span className="font-light italic text-[#c9a875]">own edge.</span>
            </h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              More than a haircut. A little time for yourself, a skilled hand, and a style that feels unmistakably yours.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#visit" className="group inline-flex items-center gap-5 bg-[#c9a875] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#171612] transition hover:bg-[#e2c79c]">
                Book your appointment <span className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
              <a href="#services" className="inline-flex items-center border border-white/20 px-6 py-4 text-xs uppercase tracking-[0.15em] transition hover:border-[#c9a875] hover:text-[#c9a875]">
                Explore services
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/40">
              <span>✳ Detail driven</span>
              <span>✳ Your style first</span>
              <span>✳ No rush, just craft</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl animate-[fadeUp_1s_ease-out_both]">
            <div className="absolute -right-3 -top-3 h-24 w-24 border-r border-t border-[#c9a875]/70 sm:-right-5 sm:-top-5" />
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#24231f]">
              <img
                src="/images/barber-hero.jpg"
                alt="Barber working carefully on a client's haircut"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/15" />
              <div className="absolute left-5 top-5 border border-white/30 bg-black/25 px-4 py-3 backdrop-blur-sm sm:left-7 sm:top-7">
                <p className="text-[9px] uppercase tracking-[0.24em] text-white/65">The Northline standard</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest">Craft over shortcuts</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#e4c897]">Precision · Character · Craft</p>
                <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">The art of<br/><span className="font-light italic text-[#e4c897]">the everyday.</span></h2>
                <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-4 text-[9px] uppercase tracking-[0.2em] text-white/65">
                  <span>Sharp by nature.</span>
                  <span>NL—01</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 bg-[#c9a875] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#171612] sm:-left-5">
              Made for your style.
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-[#191916]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c9a875]">The menu</p>
              <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">Good work.<br/><span className="font-light italic text-[#c9a875]">Fair prices.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/50">No unnecessary extras. Just considered cuts, attention to detail, and a finish you can feel good about.</p>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.number} className="reveal group bg-[#191916] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#22221d] sm:p-8 lg:p-10">
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#c9a875]">{service.number} / 04</span>
                  <span className="text-[10px] tracking-[0.15em] text-white/35">{service.duration}</span>
                </div>
                <div className="mt-9 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide sm:text-2xl">{service.name}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">{service.description}</p>
                  </div>
                  <p className="shrink-0 text-xl font-light text-[#c9a875]">{service.price}</p>
                </div>
                <a href="#visit" className="mt-7 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50 transition group-hover:text-[#c9a875]">Choose this service <span>↗</span></a>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/35">Illustrative US-dollar pricing for this portfolio concept.</p>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center lg:px-12 lg:py-28">
        <div className="reveal relative min-h-[360px] overflow-hidden border border-white/10 bg-[#1c1b17] sm:min-h-[470px]">
          <img
            src="/images/barber-studio.jpg"
            alt="Barbershop interior and barber at work"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#e4c897]">Northline Barber Studio</p>
            <p className="mt-3 text-3xl font-black uppercase sm:text-4xl">Less noise.<br/><span className="font-light italic text-[#e4c897]">More craft.</span></p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c9a875]">A little about us</p>
          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">A good cut<br/>changes your <span className="font-light italic text-[#c9a875]">whole day.</span></h2>
          <p className="mt-7 text-sm leading-7 text-white/55">Northline is a concept built around a simple idea: a barbershop should feel personal. No pressure, no fuss. We take the time to understand what you want and put care into every detail.</p>
          <p className="mt-4 text-sm leading-7 text-white/55">Come in for a clean-up or a complete change. Leave feeling more like yourself.</p>
          <a href="#gallery" className="mt-8 inline-flex items-center gap-4 border-b border-[#c9a875] pb-3 text-xs uppercase tracking-[0.2em] text-[#c9a875] transition hover:gap-6">Explore the craft <span>→</span></a>
        </div>
      </section>

      <section id="gallery" className="bg-[#191916] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c9a875]">Inside the studio</p>
              <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">The craft <span className="font-light italic text-[#c9a875]">in focus.</span></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/45">The small details make the difference. Every cut, every finish, every time.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="reveal group relative aspect-[4/5] overflow-hidden bg-[#24231f]">
              <img src="/images/barber-hero.jpg" alt="Barber carefully cutting a client's hair" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy"/>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6 pt-16 text-xs uppercase tracking-[0.2em]">01 — Precision</figcaption>
            </figure>
            <figure className="reveal group relative aspect-[4/5] overflow-hidden bg-[#24231f]">
              <img src="/images/barber-cut.jpg" alt="Barber giving a customer a detailed haircut" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy"/>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6 pt-16 text-xs uppercase tracking-[0.2em]">02 — The process</figcaption>
            </figure>
            <figure className="reveal group relative aspect-[4/5] overflow-hidden bg-[#24231f] sm:col-span-2 lg:col-span-1">
              <img src="/images/barber-studio.jpg" alt="Barber studio atmosphere" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy"/>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6 pt-16 text-xs uppercase tracking-[0.2em]">03 — The atmosphere</figcaption>
            </figure>
          </div>
          <p className="mt-5 text-xs text-white/35">Stock photography used for this fictional portfolio concept.</p>
        </div>
      </section>

      <section id="visit" className="border-y border-white/10 bg-[#c9a875] text-[#171612]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-24">
          <div className="reveal">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em]">Your chair is waiting</p>
            <h2 className="max-w-xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">Make time for a better cut.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#171612]/70">Choose your service and preferred appointment time. We have made the booking experience interactive for this portfolio concept.</p>
            <div className="mt-8 border-t border-[#171612]/20 pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em]">A little more about your visit</p>
              <p className="mt-2 text-sm text-[#171612]/70">Every service includes a personal consultation and attention to detail.</p>
            </div>
          </div>

          <div className="reveal bg-[#171612] p-6 text-[#f3f0e8] sm:p-9">
            {bookingSubmitted ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a875]">Request preview · Complete</p>
                <h3 className="mt-5 text-3xl font-black uppercase">Looking sharp already.</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/65">Thanks, {booking.name}. Your demo request is ready for {booking.service} on {booking.date} at {booking.time}. No real appointment has been created.</p>
                <div className="mt-7 border border-white/15 p-5">
                  <p className="text-xs uppercase tracking-widest text-white/50">Selected service</p>
                  <p className="mt-2 text-lg font-bold">{selectedService?.name}</p>
                  <p className="mt-1 text-sm text-[#c9a875]">{selectedService?.price} · {selectedService?.duration}</p>
                </div>
                <button type="button" onClick={() => { setBookingSubmitted(false); setBooking({ name: "", email: "", service: "Classic Haircut", date: "", time: "" }); }} className="mt-7 border border-[#c9a875] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#c9a875] transition hover:bg-[#c9a875] hover:text-[#171612]">Make another demo request ↗</button>
              </div>
            ) : (
              <>
                <div className="mb-7 flex items-start justify-between gap-4 border-b border-white/15 pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9a875]">Appointment enquiry</p>
                    <h3 className="mt-2 text-2xl font-black uppercase">Book your chair</h3>
                  </div>
                  <span className="border border-white/20 px-3 py-2 text-[10px] uppercase tracking-widest text-white/50">Demo</span>
                </div>

                <form onSubmit={(event) => { event.preventDefault(); setBookingSubmitted(true); }} className="space-y-5">
                  <div>
                    <label htmlFor="booking-name" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Full name</label>
                    <input id="booking-name" name="name" autoComplete="name" required value={booking.name} onChange={(event) => setBooking({ ...booking, name: event.target.value })} placeholder="Your name" className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c9a875]" />
                  </div>

                  <div>
                    <label htmlFor="booking-email" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Email address</label>
                    <input id="booking-email" name="email" type="email" autoComplete="email" required value={booking.email} onChange={(event) => setBooking({ ...booking, email: event.target.value })} placeholder="you@example.com" className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c9a875]" />
                  </div>

                  <div>
                    <label htmlFor="booking-service" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Choose your service</label>
                    <select id="booking-service" name="service" value={booking.service} onChange={(event) => setBooking({ ...booking, service: event.target.value })} className="w-full border border-white/15 bg-[#24231f] px-4 py-3.5 text-sm text-white outline-none focus:border-[#c9a875]">
                      {services.map((service) => <option key={service.name} value={service.name}>{service.name} — {service.price} · {service.duration}</option>)}
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="booking-date" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Preferred date</label>
                      <input id="booking-date" name="date" type="date" min={today} required value={booking.date} onChange={(event) => setBooking({ ...booking, date: event.target.value })} className="w-full min-w-0 border border-white/15 bg-white/5 px-3 py-3.5 text-sm text-white outline-none focus:border-[#c9a875] [color-scheme:dark]" />
                    </div>
                    <div>
                      <label htmlFor="booking-time" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Preferred time</label>
                      <select id="booking-time" name="time" required value={booking.time} onChange={(event) => setBooking({ ...booking, time: event.target.value })} className="w-full border border-white/15 bg-[#24231f] px-3 py-3.5 text-sm text-white outline-none focus:border-[#c9a875]">
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">Illustrative price</p>
                      <p className="mt-1 text-2xl font-black text-[#c9a875]">{selectedService?.price}</p>
                    </div>
                    <button type="submit" className="inline-flex items-center gap-4 bg-[#c9a875] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#171612] transition hover:bg-[#e2c79c] sm:px-7">Preview request <span>↗</span></button>
                  </div>
                  <p className="text-[11px] leading-5 text-white/40">Portfolio demo only. Submitting displays a confirmation preview; it does not send your details or reserve a real appointment.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-[10px] uppercase tracking-[0.18em] text-white/40 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <a href="#home" className="text-lg font-black tracking-[0.12em] text-[#f3f0e8]">NORTHLINE<span className="text-[#c9a875]">.</span></a>
        <p>Independent by nature. Precise by choice.</p>
        <p>Concept website · © {new Date().getFullYear()} Northline Barber</p>
      </footer>

      <style jsx global>{`
        html { scroll-behavior: smooth; }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal:nth-child(2) { transition-delay: 100ms; }
        .reveal:nth-child(3) { transition-delay: 180ms; }
        .reveal:nth-child(4) { transition-delay: 260ms; }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; scroll-behavior: auto !important; }
        }
      `}</style>
    </main>
  );
}


