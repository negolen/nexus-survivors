# 🛡️ Nexus Survivors: Merge & Conquer

High-retention Cyber-Arcade **Roguelite Bullet-Heaven + Tactical Weapon Merge** web & cross-platform game built with **TypeScript, HTML5 Canvas (60 FPS), Web Audio API, and Vite**.

## ✨ Key Features
- **Tactical Weapon Merge System:** 6 Active Orbital Slots + 6 Workshop Bench Slots. Merge identical weapons from **Tier 1 (Common)** up to **Tier 5 (Legendary)** across 5 distinct weapon archetypes (*Plasma Blaster, Tesla Arc Coil, Cryo Nova Emitter, Kinetic Ripper, Hellfire Launcher*).
- **In-Wave Roguelite Level-Up Draft:** Collect XP crystals mid-wave to draft 3 tactical combat upgrades—or watch a Rewarded Ad to **Take All 3 Upgrades**.
- **3 Playable Cyber Commanders:** *Vanguard MK-I*, *Tesla Engineer*, and *Void Phantom*.
- **Multi-Channel Monetization SDK Bridge (`src/sdk/MonetizationManager.ts`):**
  - Ready for **Poki SDK**, **CrazyGames SDK**, and **Stripe IAP**.
  - Built-in interactive **Ad & IAP Revenue Simulator** tracking real-time eCPM and store conversions.
- **Zero-Dependency Procedural Audio (`src/core/AudioManager.ts`):** Synthesized sound effects via Web Audio API.
- **Multi-Language Support (`src/core/I18n.ts`):** English (`EN` default) and Turkish (`TR`).

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📦 Production Build (Poki / CrazyGames / GitHub Pages / Vercel)

```bash
npm run build
```
