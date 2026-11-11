export type LangCode = 'en' | 'tr';

const DICTIONARY: Record<LangCode, Record<string, string>> = {
  en: {
    hero_badge: 'HTML5 • MONETIZATION-READY • 60FPS ROGUELITE',
    game_subtitle: 'MERGE & CONQUER',
    hero_desc: 'Survive relentless cyber-swarms, merge identical weapons up to Tier-5 Legendary, and draft roguelite upgrades.',
    stat_highest_wave: 'HIGHEST WAVE',
    stat_high_score: 'HIGH SCORE',
    stat_ads_watched: 'ADS WATCHED',
    stat_sim_rev: 'SIMULATED REV',
    wave_label: 'WAVE',
    lvl_label: 'LVL',
    speed_2x_on: '2x TURBO ON',
    speed_1x_btn: '1x SPEED (2x AD/VIP)',
    vip_store_btn: 'VIP STORE',
    commanders_title: 'SELECT CYBER COMMANDER',
    cmd_vanguard_name: 'Vanguard MK-I',
    cmd_vanguard_desc: '+10% Max Hull HP • Starts with Dual Plasma Blasters',
    cmd_tesla_name: 'Tesla Engineer',
    cmd_tesla_desc: '+20% All Weapon Damage • Starts with Tesla Arc Coil',
    cmd_phantom_name: 'Void Phantom',
    cmd_phantom_desc: '+25% Move Speed & +15% Crit Chance • Starts w/ Tier-2 Ripper',
    cmd_selected: 'SELECTED ✓',
    cmd_select: 'SELECT',
    cmd_unlock_gold: 'Unlock (1,500 🪙)',
    cmd_unlock_gems: 'Unlock ({gems} 💎)',
    meta_dmg_title: '⚔️ Weapon Damage',
    meta_dmg_desc: '+15% All Damage / Lv',
    meta_hp_title: '🛡️ Hull Integrity',
    meta_hp_desc: '+30 Max HP / Lv',
    meta_spd_title: '⚡ Fire Rate Overclock',
    meta_spd_desc: '+8% Attack Speed / Lv',
    meta_gold_title: '🪙 Venture Capital',
    meta_gold_desc: '+25 Starting Gold / Lv',
    btn_start_run: '🚀 DEPLOY TO ARENA (START RUN)',
    btn_free_gold_ad: '🎬 Watch Rewarded Ad (+250 Gold & +10 💎)',
    workshop_title: 'WAVE {wave} CLEARED! • MERGE WORKSHOP',
    workshop_sub: 'Click two identical weapons of the same Tier to MERGE them into Tier+1 (2.15x Damage)!',
    btn_auto_merge: '✨ AUTO-MERGE ALL',
    btn_double_wave_ad: '🎬 2x Wave Gold (+{gold}g)',
    badge_bonus_claimed: '2x BONUS CLAIMED ✓',
    active_slots_title: 'ACTIVE ORBITAL SLOTS (6 MAX)',
    bench_slots_title: 'WORKSHOP BENCH (STORAGE)',
    armory_title: 'ARMORY REQUISITION',
    btn_reroll_gold: '🎲 Reroll (25 🪙)',
    btn_reroll_ad: '🎬 Free Reroll + Rare Chance (Ad)',
    btn_main_menu: '🏠 Main Menu',
    btn_next_wave: '⚔️ START WAVE {wave} ▶',
    levelup_title: '⚡ TACTICAL LEVEL UP! (LEVEL {level})',
    levelup_sub: 'Select 1 combat augmentation for this run — or claim ALL 3 via Rewarded Ad!',
    btn_take_all_3: '🎬 TAKE ALL 3 UPGRADES (Watch Ad)',
    btn_select_card: 'SELECT AUGMENT',
    death_revive_title: '⚠️ HULL CRITICAL — REVIVE AVAILABLE!',
    death_over_title: '💀 RUN TERMINATED',
    death_summary: 'You reached Wave {wave} and eliminated {kills} hostiles.',
    btn_revive_ad: '🎬 Watch Ad to REVIVE (100% HP + Tactical Nuke)',
    btn_claim_end_ad: '🎬 Watch Ad: Claim +{gold} Bonus Gold & Exit',
    btn_return_hub: 'Return to Upgrade Hub'
  },
  tr: {
    hero_badge: 'HTML5 • GELİR MODELİ HAZIR • 60FPS ROGUELITE',
    game_subtitle: 'BİRLEŞTİR & FETHET',
    hero_desc: 'Siber sürülerden sağ çık, aynı silahları Seviye-5 Efsaneviye birleştir ve roguelite güçlendirmeleri seç.',
    stat_highest_wave: 'EN YÜKSEK DALGA',
    stat_high_score: 'REKOR SKOR',
    stat_ads_watched: 'İZLENEN REKLAM',
    stat_sim_rev: 'SİMÜLE GELİR',
    wave_label: 'DALGA',
    lvl_label: 'SV',
    speed_2x_on: '2x TURBO AÇIK',
    speed_1x_btn: '1x HIZ (2x REKLAM/VIP)',
    vip_store_btn: 'VIP MAĞAZA',
    commanders_title: 'SİBER KOMUTAN SEÇİMİ',
    cmd_vanguard_name: 'Öncü MK-I',
    cmd_vanguard_desc: '+%10 Maks Can • Çift Plazma Silahı ile başlar',
    cmd_tesla_name: 'Tesla Mühendisi',
    cmd_tesla_desc: '+%20 Tüm Silah Hasarı • Tesla Bobini ile başlar',
    cmd_phantom_name: 'Hiçlik Hayaleti',
    cmd_phantom_desc: '+%25 Hareket Hızı & +%15 Kritik Şansı • Sv-2 Testere ile başlar',
    cmd_selected: 'SEÇİLDİ ✓',
    cmd_select: 'SEÇ',
    cmd_unlock_gold: 'Aç (1,500 🪙)',
    cmd_unlock_gems: 'Aç ({gems} 💎)',
    meta_dmg_title: '⚔️ Silah Hasarı',
    meta_dmg_desc: '+%15 Tüm Hasar / Sv',
    meta_hp_title: '🛡️ Zırh Bütünlüğü',
    meta_hp_desc: '+30 Maks Can / Sv',
    meta_spd_title: '⚡ Atış Hızı Aşırtma',
    meta_spd_desc: '+%8 Saldırı Hızı / Sv',
    meta_gold_title: '🪙 Başlangıç Sermayesi',
    meta_gold_desc: '+25 Başlangıç Altını / Sv',
    btn_start_run: '🚀 ARENAYA İNİŞ YAP (BAŞLA)',
    btn_free_gold_ad: '🎬 Ödüllü Reklam İzle (+250 Altın & +10 💎)',
    workshop_title: 'DALGA {wave} TEMİZLENDİ! • BİRLEŞTİRME ATÖLYESİ',
    workshop_sub: 'Aynı tür ve seviyedeki iki silaha tıklayarak Seviye+1 (2.15x Hasar) olarak BİRLEŞTİR!',
    btn_auto_merge: '✨ TÜMÜNÜ OTOMATİK BİRLEŞTİR',
    btn_double_wave_ad: '🎬 2x Dalga Altını (+{gold}g)',
    badge_bonus_claimed: '2x BONUS ALINDI ✓',
    active_slots_title: 'AKTİF YÖRÜNGE SİLAHLARI (MAKS 6)',
    bench_slots_title: 'ATÖLYE DEPOSU (YEDEK)',
    armory_title: 'CEPHANELİK TEDARİĞİ',
    btn_reroll_gold: '🎲 Yenile (25 🪙)',
    btn_reroll_ad: '🎬 Ücretsiz Yenile + Nadir Şansı (Reklam)',
    btn_main_menu: '🏠 Ana Menü',
    btn_next_wave: '⚔️ DALGA {wave} BAŞLAT ▶',
    levelup_title: '⚡ TAKTİKSEL SEVİYE ATLAMA! (SEVİYE {level})',
    levelup_sub: 'Bu tur için 1 savaş güçlendirmesi seç — veya Reklam izleyerek 3 KARTIN TÜMÜNÜ AL!',
    btn_take_all_3: '🎬 3 KARTIN TÜMÜNÜ AL (Reklam İzle)',
    btn_select_card: 'GÜÇLENDİRMEYİ SEÇ',
    death_revive_title: '⚠️ ZIRH KRİTİK — DİRİLME MEVCUT!',
    death_over_title: '💀 OPERASYON SONA ERDİ',
    death_summary: 'Dalga {wave} seviyesine ulaştın ve {kills} düşmanı yok ettin.',
    btn_revive_ad: '🎬 Reklam İzle ve DİRİL (%100 Can + Nükleer Dalga)',
    btn_claim_end_ad: '🎬 Reklam İzle: +{gold} Bonus Altın Al & Çık',
    btn_return_hub: 'Geliştirme Merkezine Dön'
  }
};

export class I18n {
  private static currentLang: LangCode = 'en'; // Strict English default

  public static getLang(): LangCode {
    return this.currentLang;
  }

  public static setLang(lang: LangCode): void {
    this.currentLang = lang === 'tr' ? 'tr' : 'en';
  }

  public static t(key: string, params?: Record<string, string | number>): string {
    const table = DICTIONARY[this.currentLang] || DICTIONARY.en;
    let text = table[key] || DICTIONARY.en[key] || key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, String(v));
      }
    }
    return text;
  }
}
