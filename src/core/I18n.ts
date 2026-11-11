export type LangCode = 'en' | 'tr';

// Compact dictionary: key -> [en, tr] tuple eliminates duplicating keys across two giant objects
const T: Record<string, [string, string]> = {
  hero_badge: [
    '3D WEBGL • MONETIZATION-READY • 60FPS ROGUELITE',
    '3D WEBGL • GELİR MODELİ HAZIR • 60FPS ROGUELITE'
  ],
  game_subtitle: ['MERGE & CONQUER', 'BİRLEŞTİR & FETHET'],
  hero_desc: [
    'Survive relentless 3D cyber-swarms, merge identical weapons up to Tier-5 Legendary, and defeat Dreadnought Bosses before detonation!',
    '3D siber sürülerden sağ çık, aynı silahları Seviye-5 Efsaneviye birleştir ve Bossları patlamadan önce yok et!'
  ],
  stat_highest_wave: ['HIGHEST WAVE', 'EN YÜKSEK DALGA'],
  stat_high_score: ['HIGH SCORE', 'REKOR SKOR'],
  stat_pvp_trophies: ['PVP TROPHIES', 'PVP KUPASI'],
  stat_ads_watched: ['ADS WATCHED', 'İZLENEN REKLAM'],
  stat_sim_rev: ['SIMULATED REV', 'SİMÜLE GELİR'],
  wave_label: ['WAVE', 'DALGA'],
  lvl_label: ['LVL', 'SV'],
  speed_2x_on: ['2x TURBO ON', '2x TURBO AÇIK'],
  speed_1x_btn: ['1x SPEED (2x AD/VIP)', '1x HIZ (2x REKLAM/VIP)'],
  vip_store_btn: ['VIP STORE', 'VIP MAĞAZA'],
  hud_crates_btn: ['CRATES', 'KASALAR'],
  hud_missions_btn: ['MISSIONS', 'GÖREVLER'],
  hud_ranks_btn: ['RANKS', 'LİDERLİK'],
  commanders_title: [
    'SELECT CYBER COMMANDER (2 FREE • 2 VIP)',
    'SİBER KOMUTAN SEÇİMİ (2 ÜCRETSİZ • 2 VIP)'
  ],
  cmd_vanguard_name: ['Commander Rex (Vanguard)', 'Komutan Rex (Öncü)'],
  cmd_vanguard_role: ['FREE • MALE', 'ÜCRETSİZ • ERKEK'],
  cmd_vanguard_desc: [
    '+25 Max Hull HP • Starts w/ Dual Plasma Blasters',
    '+25 Maks Can • Çift Plazma Silahı ile başlar'
  ],
  cmd_valkyrie_name: ['Commander Aria (Valkyrie)', 'Komutan Aria (Valkyrie)'],
  cmd_valkyrie_role: ['FREE • FEMALE', 'ÜCRETSİZ • KADIN'],
  cmd_valkyrie_desc: [
    '+15% Attack Speed & +12% Move Speed • Starts w/ Cryo Nova + Plasma',
    '+%15 Saldırı Hızı & +%12 Hareket Hızı • Buz Novası + Plazma ile başlar'
  ],
  cmd_tesla_name: ['Overlord Volt (Tesla Prime)', 'Lord Volt (Tesla Prime)'],
  cmd_tesla_role: ['👑 VIP COMMANDER', '👑 VIP KOMUTAN'],
  cmd_tesla_desc: [
    '+25% All Weapon Damage • Starts w/ Tier-2 Tesla Coil + Plasma',
    '+%25 Tüm Silah Hasarı • Sv-2 Tesla Bobini + Plazma ile başlar'
  ],
  cmd_phantom_name: ['Shadow Nyx (Void Phantom)', 'Gölge Nyx (Hiçlik Hayaleti)'],
  cmd_phantom_role: ['👑 VIP COMMANDER', '👑 VIP KOMUTAN'],
  cmd_phantom_desc: [
    '+30% Move Speed & +20% Crit Chance • Starts w/ Tier-2 Ripper + Rockets',
    '+%30 Hareket Hızı & +%20 Kritik Şansı • Sv-2 Testere + Roket ile başlar'
  ],
  cmd_selected: ['SELECTED ✓', 'SEÇİLDİ ✓'],
  cmd_select: ['SELECT', 'SEÇ'],
  cmd_unlock_vip: ['👑 VIP PASS', '👑 VIP PAKET'],
  cmd_unlock_gems: ['Unlock ({gems} 💎)', 'Aç ({gems} 💎)'],
  meta_dmg_title: ['⚔️ Weapon Damage', '⚔️ Silah Hasarı'],
  meta_dmg_desc: ['+15% All Damage / Lv', '+%15 Tüm Hasar / Sv'],
  meta_hp_title: ['🛡️ Hull Integrity', '🛡️ Zırh Bütünlüğü'],
  meta_hp_desc: ['+30 Max HP / Lv', '+30 Maks Can / Sv'],
  meta_spd_title: ['⚡ Fire Rate Overclock', '⚡ Atış Hızı Aşırtma'],
  meta_spd_desc: ['+8% Attack Speed / Lv', '+%8 Saldırı Hızı / Sv'],
  meta_gold_title: ['🪙 Venture Capital', '🪙 Başlangıç Sermayesi'],
  meta_gold_desc: ['+25 Starting Gold / Lv', '+25 Başlangıç Altını / Sv'],
  btn_start_run: ['🚀 SOLO ARENA (START RUN)', '🚀 SOLO ARENA (BAŞLA)'],
  btn_start_pvp: ['⚔️ PVP ARENA ROYALE (RIVALS + HORDE)', '⚔️ PVP ARENA ROYALE (RAKİPLER + SÜRÜ)'],
  btn_continue_run: ['▶ CONTINUE SOLO (WAVE {wave})', '▶ SOLO\'YA DEVAM ET (DALGA {wave})'],
  btn_new_run: ['🆕 NEW SOLO RUN (RESETS SAVED PROGRESS)', '🆕 YENİ SOLO OYUN (KAYITLI İLERLEMEYİ SİLER)'],
  btn_free_gold_ad: ['🎬 Watch Rewarded Ad (+250 Gold & +10 💎)', '🎬 Ödüllü Reklam İzle (+250 Altın & +10 💎)'],
  workshop_title: ['WAVE {wave} CLEARED! • MERGE WORKSHOP', 'DALGA {wave} TEMİZLENDİ! • BİRLEŞTİRME ATÖLYESİ'],
  workshop_sub: [
    'Click two identical weapons of the same Tier to MERGE them into Tier+1 (2.15x Damage)!',
    'Aynı tür ve seviyedeki iki silaha tıklayarak Seviye+1 (2.15x Hasar) olarak BİRLEŞTİR!'
  ],
  btn_auto_merge: ['✨ AUTO-MERGE ALL', '✨ TÜMÜNÜ OTOMATİK BİRLEŞTİR'],
  btn_double_wave_ad: ['🎬 2x Wave Gold (+{gold}g)', '🎬 2x Dalga Altını (+{gold}g)'],
  badge_bonus_claimed: ['2x BONUS CLAIMED ✓', '2x BONUS ALINDI ✓'],
  active_slots_title: ['ACTIVE ORBITAL SLOTS (6 MAX)', 'AKTİF YÖRÜNGE SİLAHLARI (MAKS 6)'],
  bench_slots_title: ['WORKSHOP BENCH (STORAGE)', 'ATÖLYE DEPOSU (YEDEK)'],
  armory_title: ['ARMORY REQUISITION', 'CEPHANELİK TEDARİĞİ'],
  btn_reroll_gold: ['🎲 Reroll (25 🪙)', '🎲 Yenile (25 🪙)'],
  btn_reroll_ad: ['🎬 Free Reroll + Rare Chance (Ad)', '🎬 Ücretsiz Yenile + Nadir Şansı (Reklam)'],
  btn_main_menu: ['🏠 Main Menu', '🏠 Ana Menü'],
  btn_next_wave: ['⚔️ START WAVE {wave} ▶', '⚔️ DALGA {wave} BAŞLAT ▶'],
  levelup_title: ['⚡ TACTICAL LEVEL UP! (LEVEL {level})', '⚡ TAKTİKSEL SEVİYE ATLAMA! (SEVİYE {level})'],
  levelup_sub: [
    'Select 1 combat augmentation for this run — or claim ALL 3 via Rewarded Ad!',
    'Bu tur için 1 savaş güçlendirmesi seç — veya Reklam izleyerek 3 KARTIN TÜMÜNÜ AL!'
  ],
  btn_take_all_3: ['🎬 TAKE ALL 3 UPGRADES (Watch Ad)', '🎬 3 KARTIN TÜMÜNÜ AL (Reklam İzle)'],
  btn_select_card: ['SELECT AUGMENT', 'GÜÇLENDİRMEYİ SEÇ'],
  death_revive_title: ['⚠️ HULL CRITICAL — REVIVE AVAILABLE!', '⚠️ ZIRH KRİTİK — DİRİLME MEVCUT!'],
  death_over_title: ['💀 RUN TERMINATED', '💀 OPERASYON SONA ERDİ'],
  death_summary: [
    'You reached Wave {wave} and eliminated {kills} hostiles.',
    'Dalga {wave} seviyesine ulaştın ve {kills} düşmanı yok ettin.'
  ],
  btn_revive_ad: ['🎬 Watch Ad to REVIVE (100% HP + Tactical Nuke)', '🎬 Reklam İzle ve DİRİL (%100 Can + Nükleer Dalga)'],
  btn_claim_end_ad: ['🎬 Watch Ad: Claim +{gold} Bonus Gold & Exit', '🎬 Reklam İzle: +{gold} Bonus Altın Al & Çık'],
  btn_return_hub: ['Return to Upgrade Hub', 'Geliştirme Merkezine Dön'],
  crates_modal_title: ['🎁 CYBER SUPPLY CRATES (GACHA LAB)', '🎁 SİBER İKMAL KASALARI (GACHA)'],
  crates_modal_sub: [
    'Open encrypted supply pods for Gold, Gems, and Permanent Tech Shards (+3% All Weapon Damage per Shard)!',
    'Altın, Elmas ve Kalıcı Teknoloji Parçaları (Parça başına +%3 Silah Hasarı) için kasaları aç!'
  ],
  tech_shards_banner: [
    '⚡ Permanent Tech Shards Owned: {shards} (+{bonus}% Global Weapon Damage)',
    '⚡ Kalıcı Teknoloji Parçası: {shards} (+%{bonus} Genel Silah Hasarı)'
  ],
  crate_free_title: ['Encrypted Ad Pod', 'Şifreli Reklam Kapsülü'],
  crate_free_desc: ['Contains 250–600 Gold, 15–35 Gems, or Tech Shards!', '250–600 Altın, 15–35 Elmas veya Teknoloji Parçası içerir!'],
  crate_free_btn: ['🎬 OPEN FREE CRATE (Watch Ad)', '🎬 ÜCRETSİZ KASA AÇ (Reklam İzle)'],
  crate_1x_title: ['Quantum Supply Crate', 'Kuantum İkmal Kasası'],
  crate_1x_desc: ['Guaranteed High Gold + Gems + 1–3 Permanent Tech Shards!', 'Garantili Yüksek Altın + Elmas + 1–3 Kalıcı Teknoloji Parçası!'],
  crate_1x_btn: ['OPEN 1x CRATE (80 💎)', '1x KASA AÇ (80 💎)'],
  crate_10x_title: ['10x Mega Armada Vault', '10x Mega Armada Kasası'],
  crate_10x_desc: ['10x Quantum Crates with Bonus Jackpot Shards & Gold (Save 100 💎)!', '10x Kuantum Kasası + Jackpot Teknoloji Parçaları (100 💎 Tasarruf)!'],
  crate_10x_btn: ['OPEN 10x MEGA VAULT (700 💎)', '10x MEGA KASA AÇ (700 💎)'],
  crate_rewards_header: ['🎉 SUPPLY DROP UNLOCKED!', '🎉 İKMAL KAPSÜLÜ AÇILDI!'],
  missions_modal_title: ['📋 DAILY OPERATIONS & BOUNTIES', '📋 GÜNLÜK GÖREVLER & ÖDÜLLER'],
  missions_modal_sub: [
    'Complete combat milestones to earn Gems and Gold. Watch an Ad on claim to DOUBLE your bounty!',
    'Elmas ve Altın kazanmak için hedefleri tamamla. Reklam izleyerek ödülü 2 KATINA çıkar!'
  ],
  mission_kill_title: ['Exterminator Protocol', 'İmha Protokolü'],
  mission_kill_desc: ['Eliminate {target} hostile cyber-units', '{target} düşman siber birimini yok et'],
  mission_merge_title: ['Master Synthesizer', 'Usta Sentezci'],
  mission_merge_desc: ['Merge identical orbital weapons {target} times', 'Aynı silahları {target} kez birleştir'],
  mission_wave_title: ['Deep Arena Survivor', 'Arena Hayatta Kalanı'],
  mission_wave_desc: ['Reach Wave {target} in the Cyber Arena', 'Siber Arenada Dalga {target} seviyesine ulaş'],
  mission_lvl_title: ['Tactical Overclocker', 'Taktiksel Aşırtıcı'],
  mission_lvl_desc: ['Level up {target} times during arena runs', 'Arena turlarında {target} kez seviye atla'],
  btn_claim_mission: ['CLAIM', 'AL'],
  btn_claim_2x_ad: ['🎬 2x CLAIM (Ad)', '🎬 2x AL (Reklam)'],
  mission_in_progress: ['IN PROGRESS', 'DEVAM EDİYOR'],
  leaderboard_title: ['🏆 GLOBAL ARENA LEADERBOARD', '🏆 KÜRESEL ARENA LİDERLİK TABLOSU'],
  leaderboard_sub: [
    'Top Cyber Commanders ranked by Arena High Score & Highest Wave survived.',
    'En yüksek skor ve ulaşılan dalgaya göre sıralanan Siber Komutanlar.'
  ],
  callsign_label: ['YOUR CALLSIGN:', 'KOMUTAN ADIN:'],
  btn_save_callsign: ['SAVE NAME', 'KAYDET'],
  col_rank: ['RANK', 'SIRA'],
  col_commander: ['COMMANDER', 'KOMUTAN'],
  col_wave: ['MAX WAVE', 'MAKS DALGA'],
  col_score: ['HIGH SCORE', 'REKOR SKOR'],
  theme_selector_title: ['🎨 ARENA THEME', '🎨 ARENA TEMASI'],
  theme_auto: ['🔄 AUTO (CHANGES EVERY 5 WAVES)', '🔄 OTOMATİK (HER 5 DALGADA BİR DEĞİŞİR)'],
  theme_nebula: ['🌌 CYBER NEBULA', '🌌 SİBER NEBULA'],
  theme_solar: ['🔥 SOLAR INFERNO', '🔥 SOLAR CEHENNEM'],
  theme_cryo: ['❄️ CRYO GLACIER', '❄️ CRYO BUZUL'],
  theme_matrix: ['🟩 MATRIX EMERALD', '🟩 MATRİKS ZÜMRÜT'],
  hud_theme_btn: ['THEME', 'TEMA']
};

export class I18n {
  private static currentLang: LangCode = 'en';

  public static getLang(): LangCode {
    return this.currentLang;
  }

  public static setLang(lang: LangCode): void {
    this.currentLang = lang === 'tr' ? 'tr' : 'en';
  }

  public static t(key: string, params?: Record<string, string | number>): string {
    const entry = T[key];
    let text = entry ? (this.currentLang === 'tr' ? entry[1] : entry[0]) : key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, String(v));
      }
    }
    return text;
  }
}
