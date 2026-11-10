"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Menu, X, Clock3, Scissors, Plus, Minus, MapPin,
} from "lucide-react";

const services = [
  { number: "01", name: "Classic Cuts", detail: "Timeless styles for every gentleman.", time: "A classic, considered finish" },
  { number: "02", name: "Modern Fade", detail: "Sharp, precision-blended gradients, finished with attention to every detail.", time: "Clean blends. Sharp transitions." },
  { number: "03", name: "Royal Shave", detail: "A hot towel luxury straight-razor experience.", time: "A traditional barbershop ritual" },
  { number: "04", name: "Beard Design", detail: "Expert shaping and conditioning for a clean, well-defined finish.", time: "Shape. Detail. Condition." },
];

const premiumServices = [
  { number: "01", name: "Taper Fade", local: "$5.00", international: "$20.00" },
  { number: "02", name: "Fade", local: "$10.00", international: "$30.00" },
  { number: "03", name: "Chiskop", local: "$5.00", international: "$15.00" },
  { number: "04", name: "Brush Cut", local: "$10.00", international: "$20.00" },
  { number: "05", name: "English Cut", local: "$10.00", international: "$25.00" },
];

const photo = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function BookingLink({ children = "Make an enquiry", className = "button button-dark" }) {
  return (
    <a className={className} href="#contact">
      <span>{children}</span><ArrowUpRight size={16} strokeWidth={1.7} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState(0);
  const [form, setForm] = useState({ name: "", service: "Taper Fade", date: "", message: "" });

  const submitEnquiry = (event) => {
    event.preventDefault();
    const message = [
      "Hello ICE T, I’d like to make an appointment enquiry.",
      `Name: ${form.name}`,
      `Service: ${form.service}`,
      form.date ? `Preferred date: ${form.date}` : "",
      form.message ? `A little more: ${form.message}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/263775897664?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <main>
      <div className="announcement"><span>ICE T BARBERSHOP</span><span className="announcement-center">WHERE EVERY CUT IS A PIECE OF ART</span><a href="#contact">MAKE AN ENQUIRY <ArrowUpRight size={12} /></a></div>

      <header className="site-header">
        <a className="wordmark" href="#" aria-label="ICE T home"><span>ICE</span><b>T.</b><small>BARBERSHOP</small></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">THE EXPERIENCE</a><a href="/team">MEET THE TEAM</a><a href="#services">SERVICES</a><a href="#prices">PRICES</a><a href="#work">GALLERY</a><a href="#visit">FIND US</a>
        </nav>
        <BookingLink className="header-booking">BOOK YOUR CHAIR <ArrowUpRight size={15} /></BookingLink>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
      </header>

      <AnimatePresence>
        {menuOpen && <motion.nav id="mobile-navigation" className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} aria-label="Mobile navigation">
          {[["THE EXPERIENCE", "#story"], ["MEET THE TEAM", "/team"], ["SERVICES", "#services"], ["PRICES", "#prices"], ["GALLERY", "#work"], ["FIND US", "#visit"]].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}<ArrowUpRight size={18} /></a>)}
          <BookingLink className="button button-light" />
        </motion.nav>}
      </AnimatePresence>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-topline"><span>EST. ZIMBABWE</span><span>GOOD HAIR. GOOD ENERGY.</span></div>
        <div className="hero-content">
          <motion.p className="eyebrow hero-eyebrow" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>MORE THAN A HAIRCUT. IT’S YOUR SIGNATURE.</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .12 }}>MORE THAN A<br /><em>BARBER SHOP.</em></motion.h1>
          <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5, duration: .8 }}>
            <p>Where every cut is a piece of art.<br />Come in as you are. Leave unmistakably you.</p>
            <BookingLink className="button button-light">FIND YOUR CHAIR</BookingLink>
          </motion.div>
        </div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>03</span></div>
        <a className="scroll-cue" href="#story"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17} /></a>
        <div className="hero-stamp"><span>THE ART OF</span><b>THE CUT</b><span>ICE T · ZW</span></div>
      </section>

      <section className="intro section-pad" id="story">
        <div className="section-kicker"><span>01 / THE EXPERIENCE</span><span>BUILT AROUND YOU</span></div>
        <div className="intro-grid">
          <div className="intro-heading"><p className="eyebrow">NOT JUST A BARBERSHOP</p><h2>A GOOD CUT<br />CHANGES <em>EVERYTHING.</em></h2></div>
          <div className="intro-copy"><p className="lead">The details matter. The atmosphere matters. And the way you feel when you walk out matters most.</p><p>At ICE T, the chair is yours. Our approach is rooted in craft, confidence and the belief that a great cut should feel as good as it looks. Based at Landela Complex on NRZ Lawley Road, we welcome guests looking for a barbershop in Victoria Falls, Zimbabwe.</p><a href="#services" className="text-link">GET TO KNOW THE CRAFT <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="intro-image-wrap"><div className="intro-image" /><div className="image-caption"><span>THE ICE T EXPERIENCE</span><span>DETAIL IS EVERYTHING — ALWAYS.</span></div></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-kicker"><span>02 / THE MENU</span><span>THE RIGHT CUT. THE RIGHT FEEL.</span></div>
        <div className="services-heading"><div><p className="eyebrow">A LITTLE SOMETHING FOR EVERY STYLE</p><h2>THE <em>CRAFT.</em></h2></div><p className="services-note">Good grooming isn’t one-size-fits-all. Find your look, then make it yours.</p></div>
        <div className="services-layout">
          <div className="service-list">{services.map((service, index) => <div className={`service-item ${openService === index ? "is-open" : ""}`} key={service.number}>
            <button className="service-trigger" onClick={() => setOpenService(openService === index ? -1 : index)} aria-expanded={openService === index}><span className="service-number">{service.number}</span><span className="service-name">{service.name}</span><span className="service-icon">{openService === index ? <Minus size={18} /> : <Plus size={18} />}</span></button>
            <AnimatePresence>{openService === index && <motion.div className="service-detail" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{service.detail}</p><span>{service.time}</span><a href="#contact">ENQUIRE ABOUT THIS SERVICE <ArrowUpRight size={14} /></a></motion.div>}</AnimatePresence>
          </div>)}</div>
          <div className="services-photo"><Image src={photo("photo-1621605815971-fbc98d665033", 1100)} alt="Barber carefully shaping a fresh haircut" width={1100} height={1400} sizes="(max-width: 700px) 100vw, 40vw" /><span className="photo-label">THE FINER DETAILS</span></div>
        </div>
        <p className="service-disclaimer">From timeless cuts to a traditional straight-razor shave, find the service that suits your style.</p>
      </section>

      <section className="prices section-pad" id="prices">
        <div className="section-kicker"><span>03 / THE PRICE GUIDE</span><span>GOOD GROOMING. CLEAR PRICING.</span></div>
        <div className="prices-heading"><div><p className="eyebrow">YOUR LOOK, YOUR WAY</p><h2>PREMIUM <em>SERVICES.</em></h2></div><p>Choose your experience — local or international. Every cut is finished with care and attention to detail.</p></div>
        <div className="price-list">
          <div className="price-table-head"><span>SERVICE</span><span>LOCAL</span><span>INTL</span><span></span></div>
          {premiumServices.map((service) => <div className="price-row" key={service.number}>
            <span className="price-number">{service.number}</span>
            <div className="price-service"><span className="price-name">{service.name}</span><span className="price-description">Where every cut is a piece of art.</span></div>
            <span className="price-value"><small>LOCAL</small>{service.local}</span>
            <span className="price-value"><small>INTL</small>{service.international}</span>
            <a href="#contact" aria-label={`Reserve a session for ${service.name}`}>RESERVE <ArrowUpRight size={15} /></a>
          </div>)}
        </div>
        <div className="price-footer"><span>Prices shown in US dollars.</span><a href="#contact">RESERVE YOUR SESSION <ArrowUpRight size={14} /></a></div>
      </section>

      <section className="statement"><div className="statement-inner"><span className="eyebrow">THE ICE T STANDARD</span><p>CONFIDENCE IS<br />A <em>GOOD LOOK.</em></p><span className="statement-mark">✳</span></div></section>

      <section className="work section-pad" id="work">
        <div className="section-kicker"><span>04 / THE GALLERY</span><span>MADE WITH INTENTION</span></div>
        <div className="work-heading"><h2>FRESH CUTS.<br /><em>REAL CHARACTER.</em></h2><p>Every detail has a purpose. Every finish tells a story. This is the craft behind the chair.</p></div>
        <div className="gallery-grid">
          <figure className="gallery-tall"><Image src={photo("photo-1621605815971-fbc98d665033", 1100)} alt="Close detail of a barber creating a clean fade" width={1100} height={1500} sizes="(max-width: 700px) 50vw, 45vw" /><figcaption><span>01 — THE DETAIL</span><span>PRECISION IN EVERY LINE</span></figcaption></figure>
          <figure className="gallery-wide"><Image src={photo("photo-1503951914875-452162b0f3f1", 1100)} alt="Warm, considered barbershop interior" width={1100} height={700} sizes="(max-width: 700px) 50vw, 45vw" /><figcaption><span>02 — THE SPACE</span><span>MAKE YOURSELF AT HOME</span></figcaption></figure>
          <figure className="gallery-square"><Image src={photo("photo-1622286342621-4bd786c2447c", 1000)} alt="Barber at work, shaping a client’s style" width={1000} height={900} sizes="(max-width: 700px) 50vw, 45vw" /><figcaption><span>03 — THE CRAFT</span><span>IT’S ALL IN THE FINISH</span></figcaption></figure>
        </div>
        <p className="gallery-note">Photography shown is for this design concept. ICE T’s own haircut portfolio can replace these images.</p>
      </section>

      <section className="visit section-pad" id="visit">
        <div className="section-kicker"><span>05 / COME THROUGH</span><span>YOUR CHAIR IS WAITING</span></div>
        <div className="visit-grid"><div><p className="eyebrow">GOOD PEOPLE. GREAT GROOMING.</p><h2>SEE YOU<br /><em>IN THE CHAIR.</em></h2><p className="visit-copy">A great cut starts with a conversation. Get in touch with the team and let’s find a time that works for you.</p><BookingLink>START A CONVERSATION</BookingLink></div>
          <div className="visit-card"><div className="visit-card-top"><span>ICE T BARBERSHOP</span><Scissors size={20} /></div><div className="visit-card-main"><span className="eyebrow">OPENING HOURS</span><div className="hours-row"><span>MONDAY — THURSDAY</span><b>08:00 — 18:00</b></div><div className="hours-row"><span>FRIDAY — SATURDAY</span><b>08:00 — 19:00</b></div><div className="hours-row"><span>SUNDAY</span><b>09:00 — 19:00</b></div><p className="hours-note">Listed hours · 136 NRZ Lawley Road, Landela Complex, Victoria Falls.</p></div><div className="visit-card-bottom"><MapPin size={15} /><span>136 NRZ Lawley Road · Landela Complex · Victoria Falls</span></div></div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-top"><span className="eyebrow">LET’S GET YOU LOOKING RIGHT</span><span>ICE T / ZIMBABWE</span></div>
        <div className="contact-grid"><div><h2>YOUR NEXT<br /><em>GREAT CUT.</em></h2><p>Tell us what you’re looking for. We’ll help you take it from here.</p><div className="contact-signoff">WHERE EVERY CUT IS A PIECE OF ART<span>✳</span></div><div className="contact-details"><a href="tel:+263775897664">+263 77 589 7664</a><a href="https://wa.me/263775897664" target="_blank" rel="noreferrer">WHATSAPP THE TEAM <ArrowUpRight size={13} /></a><p>136 NRZ Lawley Road, Landela Complex,<br />Victoria Falls, Zimbabwe.</p></div></div>
          <form className="enquiry-form" onSubmit={submitEnquiry}><label>YOUR NAME<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="What should we call you?" /></label><label>WHAT ARE YOU LOOKING FOR?<select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}><option>Taper Fade</option><option>Fade</option><option>Chiskop</option><option>Brush Cut</option><option>English Cut</option><option>Classic Cuts</option><option>Modern Fade</option><option>Royal Shave</option><option>Beard Design</option><option>Not sure yet</option></select></label><label>PREFERRED DATE <span className="optional">(OPTIONAL)</span><input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} /></label><label>A NOTE FOR THE TEAM <span className="optional">(OPTIONAL)</span><textarea rows="2" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Anything else we should know?" /></label><button className="button button-light submit-button" type="submit"><span>CONTINUE IN WHATSAPP</span><ArrowUpRight size={16} /></button><p className="form-note">This opens a WhatsApp chat with ICE T. Your appointment is confirmed when the team replies.</p></form>
        </div>
      </section>

      <footer className="footer"><a className="wordmark footer-logo" href="#"><span>ICE</span><b>T.</b><small>BARBERSHOP</small></a><p>WHERE EVERY CUT IS A PIECE OF ART.</p><div className="footer-links"><a href="/team">MEET THE TEAM</a><a href="#services">SERVICES</a><a href="#prices">PRICES</a><a href="#work">GALLERY</a><a href="#contact">CONTACT</a></div><span className="copyright">© ICE T BARBERSHOP · ZIMBABWE</span></footer>
    </main>
  );
}


