import Image from 'next/image';
import { APPS } from '../lib/apps';

function AppIcon({ accent }) {
  return (
    <span className={`app-card-icon app-card-icon--${accent}`} aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16v12H4V7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4 11h16M9 7V5h6v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="hub-page">
      <div className="hub-bg" aria-hidden="true" />

      <header className="hub-header">
        <Image src="/logo.png" alt="Boxing Center" width={200} height={50} className="hub-logo" priority />
        <p className="hub-eyebrow">Control Center</p>
        <h1>Outils Boxing Center</h1>
        <p className="hub-lead">Accès rapide aux consoles et sites du réseau</p>
      </header>

      <main className="hub-grid">
        {APPS.map((app) => (
          <a key={app.id} href={app.url} className={`app-card app-card--${app.accent}`} target="_blank" rel="noopener noreferrer">
            <div className="app-card-top">
              <AppIcon accent={app.accent} />
              <span className="app-card-tag">{app.tag}</span>
            </div>
            <h2>{app.title}</h2>
            <p>{app.description}</p>
            <span className="app-card-link">
              Ouvrir
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        ))}
      </main>

      <footer className="hub-footer">
        <a href="https://boxingcenter.fr" target="_blank" rel="noopener noreferrer">
          boxingcenter.fr
        </a>
      </footer>
    </div>
  );
}
