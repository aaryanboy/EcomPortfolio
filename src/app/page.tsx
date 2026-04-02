import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const skills = [
    "Next.js 15",
    "Figma",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "SQL",
    "UI/UX",
  ];

  const projects = [
    { title: "NextStore", desc: "Performance first commerce.", tag: "Next.js", img: "/nextstore.png" },
    { title: "NovaUI", desc: "Modern design system.", tag: "Figma", img: "/novaui.png" },
    { title: "FlowState", desc: "Focus & Productivity.", tag: "TS + Node", img: "/flowstate.png" },
    { title: "PixelMint", desc: "Next-gen NFT platform.", tag: "Web3", img: "/pixelmint.png" },
  ];

  return (
    <main style={{ position: 'relative' }}>
      <div className="noise-overlay" />
      <div className="glow-orb" />
      
      {/* Dynamic Navbar */}
      <nav className="nav-container">
        <div className="nav-bar">
          <a href="#work">Work</a>
          <a href="#skills">Tools</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Bento Hero */}
      <section className="bento-hero">
        <div className="hero-main">
          <p style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.4rem', textTransform: 'uppercase', fontSize: '0.7rem' }}>Creative Developer</p>
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: '0.9', fontWeight: '800', marginBottom: '2rem' }}>
            ARYAN <br />
            <span className="gradient-text">BAJRACHARYA</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '480px', fontSize: '1rem', marginBottom: '3rem', lineHeight: '1.6' }}>
            Based in Bhaktapur, Nepal. Focused on building high-performance web applications with a focus on minimalist aesthetics and user-centric design.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#work" className="contact-button" style={{ margin: 0 }}>Discover Work</a>
            <a href="#contact" className="btn-secondary" style={{ padding: '1rem 2rem' }}>Let&apos;s Talk</a>
          </div>
        </div>

        <div className="hero-stats">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ opacity: 0.3, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>Expertise</span>
            <span className="dot dot-g" style={{ width: '8px', height: '8px' }}></span>
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.3' }}>Bridging the gap between code and design.</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.slice(0, 5).map(s => (
              <span key={s} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '0.8rem', fontSize: '0.7rem', border: '1px solid rgba(255,255,255,0.05)' }}>{s}</span>
            ))}
          </div>
        </div>

        <div className="hero-spotlight">
          <Image src="/nextstore.png" alt="Spotlight" fill className="spotlight-img" />
          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 1, pointerEvents: 'none' }}>
             <span style={{ background: 'var(--foreground)', color: 'black', padding: '0.2rem 0.6rem', borderRadius: '0.4rem', fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase' }}>Featured</span>
             <h4 style={{ fontSize: '1.2rem', marginTop: '0.5rem', fontWeight: '700' }}>NextStore E-com</h4>
          </div>
        </div>
      </section>

      {/* Selected Works - Balanced Layout */}
      <section id="work" className="section container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.2rem' }}>Selected</span>
            <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Portfolio</h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.3)', maxWidth: '300px', textAlign: 'right', fontSize: '0.9rem' }}>A curated collection of projects highlighting visual excellence and technical precision.</p>
        </div>
        
        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.title} className="work-card">
              <Image src={project.img} alt={project.title} fill className="work-img" />
              <div className="work-card-content">
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1rem', fontWeight: '700' }}>{project.tag}</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{project.title}</h3>
                <p style={{ opacity: 0.5, fontSize: '0.85rem', marginTop: '0.25rem' }}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section id="skills" className="section container">
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '5rem 2rem', borderRadius: '3rem', textAlign: 'center', backdropFilter: 'blur(20px)' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>The Toolkit</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '3rem' }}>Leveraging modern technologies to build scalable web products.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            {skills.map(s => (
              <div key={s} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: '1.25rem', fontWeight: '600', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container" style={{ textAlign: 'center', padding: '8rem 0' }}>
        <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: '900', marginBottom: '2rem', lineHeight: '0.8', letterSpacing: '-0.05em' }}>
          LET&apos;S <br />
          <span className="gradient-text">CONNECT.</span>
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
          <Link href="mailto:aryan@example.com" className="btn-secondary" style={{ background: 'white', color: 'black' }}>Email Me</Link>
          <Link href="https://linkedin.com" target="_blank" className="btn-secondary">LinkedIn</Link>
          <Link href="https://github.com" target="_blank" className="btn-secondary">GitHub</Link>
        </div>
      </section>

      <footer className="container footer">
        <p style={{ opacity: 0.2, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.3rem' }}>© {new Date().getFullYear()} Aryan Bajracharya — Built for the future</p>
      </footer>
    </main>
  );
}
