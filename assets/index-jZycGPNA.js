(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const fa={en:{hero_badge:"3D WEBGL • MONETIZATION-READY • 60FPS ROGUELITE",game_subtitle:"MERGE & CONQUER",hero_desc:"Survive relentless 3D cyber-swarms, merge identical weapons up to Tier-5 Legendary, and defeat Dreadnought Bosses before detonation!",stat_highest_wave:"HIGHEST WAVE",stat_high_score:"HIGH SCORE",stat_pvp_trophies:"PVP TROPHIES",stat_ads_watched:"ADS WATCHED",stat_sim_rev:"SIMULATED REV",wave_label:"WAVE",lvl_label:"LVL",speed_2x_on:"2x TURBO ON",speed_1x_btn:"1x SPEED (2x AD/VIP)",vip_store_btn:"VIP STORE",hud_crates_btn:"CRATES",hud_missions_btn:"MISSIONS",hud_ranks_btn:"RANKS",commanders_title:"SELECT CYBER COMMANDER (2 FREE • 2 VIP)",cmd_vanguard_name:"Commander Rex (Vanguard)",cmd_vanguard_role:"FREE • MALE",cmd_vanguard_desc:"+25 Max Hull HP • Starts w/ Dual Plasma Blasters",cmd_valkyrie_name:"Commander Aria (Valkyrie)",cmd_valkyrie_role:"FREE • FEMALE",cmd_valkyrie_desc:"+15% Attack Speed & +12% Move Speed • Starts w/ Cryo Nova + Plasma",cmd_tesla_name:"Overlord Volt (Tesla Prime)",cmd_tesla_role:"👑 VIP COMMANDER",cmd_tesla_desc:"+25% All Weapon Damage • Starts w/ Tier-2 Tesla Coil + Plasma",cmd_phantom_name:"Shadow Nyx (Void Phantom)",cmd_phantom_role:"👑 VIP COMMANDER",cmd_phantom_desc:"+30% Move Speed & +20% Crit Chance • Starts w/ Tier-2 Ripper + Rockets",cmd_selected:"SELECTED ✓",cmd_select:"SELECT",cmd_unlock_vip:"👑 VIP PASS",cmd_unlock_gems:"Unlock ({gems} 💎)",meta_dmg_title:"⚔️ Weapon Damage",meta_dmg_desc:"+15% All Damage / Lv",meta_hp_title:"🛡️ Hull Integrity",meta_hp_desc:"+30 Max HP / Lv",meta_spd_title:"⚡ Fire Rate Overclock",meta_spd_desc:"+8% Attack Speed / Lv",meta_gold_title:"🪙 Venture Capital",meta_gold_desc:"+25 Starting Gold / Lv",btn_start_run:"🚀 SOLO ARENA (START RUN)",btn_start_pvp:"⚔️ PVP ARENA ROYALE (RIVALS + HORDE)",btn_continue_run:"▶ CONTINUE SOLO (WAVE {wave})",btn_new_run:"🆕 NEW SOLO RUN (RESETS SAVED PROGRESS)",btn_free_gold_ad:"🎬 Watch Rewarded Ad (+250 Gold & +10 💎)",workshop_title:"WAVE {wave} CLEARED! • MERGE WORKSHOP",workshop_sub:"Click two identical weapons of the same Tier to MERGE them into Tier+1 (2.15x Damage)!",btn_auto_merge:"✨ AUTO-MERGE ALL",btn_double_wave_ad:"🎬 2x Wave Gold (+{gold}g)",badge_bonus_claimed:"2x BONUS CLAIMED ✓",active_slots_title:"ACTIVE ORBITAL SLOTS (6 MAX)",bench_slots_title:"WORKSHOP BENCH (STORAGE)",armory_title:"ARMORY REQUISITION",btn_reroll_gold:"🎲 Reroll (25 🪙)",btn_reroll_ad:"🎬 Free Reroll + Rare Chance (Ad)",btn_main_menu:"🏠 Main Menu",btn_next_wave:"⚔️ START WAVE {wave} ▶",levelup_title:"⚡ TACTICAL LEVEL UP! (LEVEL {level})",levelup_sub:"Select 1 combat augmentation for this run — or claim ALL 3 via Rewarded Ad!",btn_take_all_3:"🎬 TAKE ALL 3 UPGRADES (Watch Ad)",btn_select_card:"SELECT AUGMENT",death_revive_title:"⚠️ HULL CRITICAL — REVIVE AVAILABLE!",death_over_title:"💀 RUN TERMINATED",death_summary:"You reached Wave {wave} and eliminated {kills} hostiles.",btn_revive_ad:"🎬 Watch Ad to REVIVE (100% HP + Tactical Nuke)",btn_claim_end_ad:"🎬 Watch Ad: Claim +{gold} Bonus Gold & Exit",btn_return_hub:"Return to Upgrade Hub",crates_modal_title:"🎁 CYBER SUPPLY CRATES (GACHA LAB)",crates_modal_sub:"Open encrypted supply pods for Gold, Gems, and Permanent Tech Shards (+3% All Weapon Damage per Shard)!",tech_shards_banner:"⚡ Permanent Tech Shards Owned: {shards} (+{bonus}% Global Weapon Damage)",crate_free_title:"Encrypted Ad Pod",crate_free_desc:"Contains 250–600 Gold, 15–35 Gems, or Tech Shards!",crate_free_btn:"🎬 OPEN FREE CRATE (Watch Ad)",crate_1x_title:"Quantum Supply Crate",crate_1x_desc:"Guaranteed High Gold + Gems + 1–3 Permanent Tech Shards!",crate_1x_btn:"OPEN 1x CRATE (80 💎)",crate_10x_title:"10x Mega Armada Vault",crate_10x_desc:"10x Quantum Crates with Bonus Jackpot Shards & Gold (Save 100 💎)!",crate_10x_btn:"OPEN 10x MEGA VAULT (700 💎)",crate_rewards_header:"🎉 SUPPLY DROP UNLOCKED!",missions_modal_title:"📋 DAILY OPERATIONS & BOUNTIES",missions_modal_sub:"Complete combat milestones to earn Gems and Gold. Watch an Ad on claim to DOUBLE your bounty!",mission_kill_title:"Exterminator Protocol",mission_kill_desc:"Eliminate {target} hostile cyber-units",mission_merge_title:"Master Synthesizer",mission_merge_desc:"Merge identical orbital weapons {target} times",mission_wave_title:"Deep Arena Survivor",mission_wave_desc:"Reach Wave {target} in the Cyber Arena",mission_lvl_title:"Tactical Overclocker",mission_lvl_desc:"Level up {target} times during arena runs",btn_claim_mission:"CLAIM",btn_claim_2x_ad:"🎬 2x CLAIM (Ad)",mission_in_progress:"IN PROGRESS",leaderboard_title:"🏆 GLOBAL ARENA LEADERBOARD",leaderboard_sub:"Top Cyber Commanders ranked by Arena High Score & Highest Wave survived.",callsign_label:"YOUR CALLSIGN:",btn_save_callsign:"SAVE NAME",col_rank:"RANK",col_commander:"COMMANDER",col_wave:"MAX WAVE",col_score:"HIGH SCORE",theme_selector_title:"🎨 ARENA THEME",theme_auto:"🔄 AUTO (CHANGES EVERY 5 WAVES)",theme_nebula:"🌌 CYBER NEBULA",theme_solar:"🔥 SOLAR INFERNO",theme_cryo:"❄️ CRYO GLACIER",theme_matrix:"🟩 MATRIX EMERALD",hud_theme_btn:"THEME"},tr:{hero_badge:"3D WEBGL • GELİR MODELİ HAZIR • 60FPS ROGUELITE",game_subtitle:"BİRLEŞTİR & FETHET",hero_desc:"3D siber sürülerden sağ çık, aynı silahları Seviye-5 Efsaneviye birleştir ve Bossları patlamadan önce yok et!",stat_highest_wave:"EN YÜKSEK DALGA",stat_high_score:"REKOR SKOR",stat_pvp_trophies:"PVP KUPASI",stat_ads_watched:"İZLENEN REKLAM",stat_sim_rev:"SİMÜLE GELİR",wave_label:"DALGA",lvl_label:"SV",speed_2x_on:"2x TURBO AÇIK",speed_1x_btn:"1x HIZ (2x REKLAM/VIP)",vip_store_btn:"VIP MAĞAZA",hud_crates_btn:"KASALAR",hud_missions_btn:"GÖREVLER",hud_ranks_btn:"LİDERLİK",commanders_title:"SİBER KOMUTAN SEÇİMİ (2 ÜCRETSİZ • 2 VIP)",cmd_vanguard_name:"Komutan Rex (Öncü)",cmd_vanguard_role:"ÜCRETSİZ • ERKEK",cmd_vanguard_desc:"+25 Maks Can • Çift Plazma Silahı ile başlar",cmd_valkyrie_name:"Komutan Aria (Valkyrie)",cmd_valkyrie_role:"ÜCRETSİZ • KADIN",cmd_valkyrie_desc:"+%15 Saldırı Hızı & +%12 Hareket Hızı • Buz Novası + Plazma ile başlar",cmd_tesla_name:"Lord Volt (Tesla Prime)",cmd_tesla_role:"👑 VIP KOMUTAN",cmd_tesla_desc:"+%25 Tüm Silah Hasarı • Sv-2 Tesla Bobini + Plazma ile başlar",cmd_phantom_name:"Gölge Nyx (Hiçlik Hayaleti)",cmd_phantom_role:"👑 VIP KOMUTAN",cmd_phantom_desc:"+%30 Hareket Hızı & +%20 Kritik Şansı • Sv-2 Testere + Roket ile başlar",cmd_selected:"SEÇİLDİ ✓",cmd_select:"SEÇ",cmd_unlock_vip:"👑 VIP PAKET",cmd_unlock_gems:"Aç ({gems} 💎)",meta_dmg_title:"⚔️ Silah Hasarı",meta_dmg_desc:"+%15 Tüm Hasar / Sv",meta_hp_title:"🛡️ Zırh Bütünlüğü",meta_hp_desc:"+30 Maks Can / Sv",meta_spd_title:"⚡ Atış Hızı Aşırtma",meta_spd_desc:"+%8 Saldırı Hızı / Sv",meta_gold_title:"🪙 Başlangıç Sermayesi",meta_gold_desc:"+25 Başlangıç Altını / Sv",btn_start_run:"🚀 SOLO ARENA (BAŞLA)",btn_start_pvp:"⚔️ PVP ARENA ROYALE (RAKİPLER + SÜRÜ)",btn_continue_run:"▶ SOLO'YA DEVAM ET (DALGA {wave})",btn_new_run:"🆕 YENİ SOLO OYUN (KAYITLI İLERLEMEYİ SİLER)",btn_free_gold_ad:"🎬 Ödüllü Reklam İzle (+250 Altın & +10 💎)",workshop_title:"DALGA {wave} TEMİZLENDİ! • BİRLEŞTİRME ATÖLYESİ",workshop_sub:"Aynı tür ve seviyedeki iki silaha tıklayarak Seviye+1 (2.15x Hasar) olarak BİRLEŞTİR!",btn_auto_merge:"✨ TÜMÜNÜ OTOMATİK BİRLEŞTİR",btn_double_wave_ad:"🎬 2x Dalga Altını (+{gold}g)",badge_bonus_claimed:"2x BONUS ALINDI ✓",active_slots_title:"AKTİF YÖRÜNGE SİLAHLARI (MAKS 6)",bench_slots_title:"ATÖLYE DEPOSU (YEDEK)",armory_title:"CEPHANELİK TEDARİĞİ",btn_reroll_gold:"🎲 Yenile (25 🪙)",btn_reroll_ad:"🎬 Ücretsiz Yenile + Nadir Şansı (Reklam)",btn_main_menu:"🏠 Ana Menü",btn_next_wave:"⚔️ DALGA {wave} BAŞLAT ▶",levelup_title:"⚡ TAKTİKSEL SEVİYE ATLAMA! (SEVİYE {level})",levelup_sub:"Bu tur için 1 savaş güçlendirmesi seç — veya Reklam izleyerek 3 KARTIN TÜMÜNÜ AL!",btn_take_all_3:"🎬 3 KARTIN TÜMÜNÜ AL (Reklam İzle)",btn_select_card:"GÜÇLENDİRMEYİ SEÇ",death_revive_title:"⚠️ ZIRH KRİTİK — DİRİLME MEVCUT!",death_over_title:"💀 OPERASYON SONA ERDİ",death_summary:"Dalga {wave} seviyesine ulaştın ve {kills} düşmanı yok ettin.",btn_revive_ad:"🎬 Reklam İzle ve DİRİL (%100 Can + Nükleer Dalga)",btn_claim_end_ad:"🎬 Reklam İzle: +{gold} Bonus Altın Al & Çık",btn_return_hub:"Geliştirme Merkezine Dön",crates_modal_title:"🎁 SİBER İKMAL KASALARI (GACHA)",crates_modal_sub:"Altın, Elmas ve Kalıcı Teknoloji Parçaları (Parça başına +%3 Silah Hasarı) için kasaları aç!",tech_shards_banner:"⚡ Kalıcı Teknoloji Parçası: {shards} (+%{bonus} Genel Silah Hasarı)",crate_free_title:"Şifreli Reklam Kapsülü",crate_free_desc:"250–600 Altın, 15–35 Elmas veya Teknoloji Parçası içerir!",crate_free_btn:"🎬 ÜCRETSİZ KASA AÇ (Reklam İzle)",crate_1x_title:"Kuantum İkmal Kasası",crate_1x_desc:"Garantili Yüksek Altın + Elmas + 1–3 Kalıcı Teknoloji Parçası!",crate_1x_btn:"1x KASA AÇ (80 💎)",crate_10x_title:"10x Mega Armada Kasası",crate_10x_desc:"10x Kuantum Kasası + Jackpot Teknoloji Parçaları (100 💎 Tasarruf)!",crate_10x_btn:"10x MEGA KASA AÇ (700 💎)",crate_rewards_header:"🎉 İKMAL KAPSÜLÜ AÇILDI!",missions_modal_title:"📋 GÜNLÜK GÖREVLER & ÖDÜLLER",missions_modal_sub:"Elmas ve Altın kazanmak için hedefleri tamamla. Reklam izleyerek ödülü 2 KATINA çıkar!",mission_kill_title:"İmha Protokolü",mission_kill_desc:"{target} düşman siber birimini yok et",mission_merge_title:"Usta Sentezci",mission_merge_desc:"Aynı silahları {target} kez birleştir",mission_wave_title:"Arena Hayatta Kalanı",mission_wave_desc:"Siber Arenada Dalga {target} seviyesine ulaş",mission_lvl_title:"Taktiksel Aşırtıcı",mission_lvl_desc:"Arena turlarında {target} kez seviye atla",btn_claim_mission:"AL",btn_claim_2x_ad:"🎬 2x AL (Reklam)",mission_in_progress:"DEVAM EDİYOR",leaderboard_title:"🏆 KÜRESEL ARENA LİDERLİK TABLOSU",leaderboard_sub:"En yüksek skor ve ulaşılan dalgaya göre sıralanan Siber Komutanlar.",callsign_label:"KOMUTAN ADIN:",btn_save_callsign:"KAYDET",col_rank:"SIRA",col_commander:"KOMUTAN",col_wave:"MAKS DALGA",col_score:"REKOR SKOR",theme_selector_title:"🎨 ARENA TEMASI",theme_auto:"🔄 OTOMATİK (HER 5 DALGADA BİR DEĞİŞİR)",theme_nebula:"🌌 SİBER NEBULA",theme_solar:"🔥 SOLAR CEHENNEM",theme_cryo:"❄️ CRYO BUZUL",theme_matrix:"🟩 MATRİKS ZÜMRÜT",hud_theme_btn:"TEMA"}};class ${static currentLang="en";static getLang(){return this.currentLang}static setLang(e){this.currentLang=e==="tr"?"tr":"en"}static t(e,t){let i=(fa[this.currentLang]||fa.en)[e]||fa.en[e]||e;if(t)for(const[a,r]of Object.entries(t))i=i.replace(`{${a}}`,String(r));return i}}const ho="nexus_survivors_save_v1",oi={language:"en",playerName:"CYBER_COMMANDER",selectedCommander:"vanguard",selectedTheme:"auto",unlockedCommanders:["vanguard","valkyrie"],soloRun:null,gold:150,gems:25,techShards:0,highScore:0,highestWave:1,pvpTrophies:1e3,pvpRivalsEliminated:0,totalKills:0,totalMerges:0,totalLevelUps:0,missionTiers:{killsTier:1,mergesTier:1,waveTier:1,levelUpsTier:1},vipUnlocked:!1,starterPackBought:!1,totalRevenueSimulated:0,rewardedAdsWatched:0,interstitialAdsWatched:0,iapPurchasesCount:0,soundEnabled:!0,meta:{damageLevel:0,maxHpLevel:0,startingGoldLevel:0,magnetLevel:0,attackSpeedLevel:0}};class Pe{static instance;data;listeners=[];saveTimeoutId=null;notifyScheduled=!1;constructor(){this.data=this.load(),$.setLang(this.data.language||"en"),typeof window<"u"&&window.addEventListener("beforeunload",()=>this.flushSave())}static getInstance(){return Pe.instance||(Pe.instance=new Pe),Pe.instance}load(){try{const e=localStorage.getItem(ho);if(!e)return structuredClone(oi);const t=JSON.parse(e),n=Array.isArray(t.unlockedCommanders)?t.unlockedCommanders:["vanguard","valkyrie"];return n.includes("vanguard")||n.push("vanguard"),n.includes("valkyrie")||n.push("valkyrie"),{...structuredClone(oi),...t,language:t.language==="tr"?"tr":"en",unlockedCommanders:n,missionTiers:{...oi.missionTiers,...t.missionTiers||{}},meta:{...oi.meta,...t.meta||{}}}}catch{return structuredClone(oi)}}save(){this.scheduleNotify(),this.saveTimeoutId===null&&(this.saveTimeoutId=window.setTimeout(()=>{this.saveTimeoutId=null,this.flushSave()},250))}flushSave(){this.saveTimeoutId!==null&&(clearTimeout(this.saveTimeoutId),this.saveTimeoutId=null);try{localStorage.setItem(ho,JSON.stringify(this.data))}catch(e){console.warn("Could not persist save data:",e)}}setLanguage(e){this.data.language=e,$.setLang(e),this.save()}setArenaTheme(e){this.data.selectedTheme=e,this.save()}toggleLanguage(){const e=this.data.language==="en"?"tr":"en";return this.setLanguage(e),e}isCommanderUnlocked(e){return e==="vanguard"||e==="valkyrie"||(e==="tesla_engineer"||e==="void_phantom")&&this.data.vipUnlocked?!0:this.data.unlockedCommanders.includes(e)}unlockCommander(e){this.data.unlockedCommanders.includes(e)||this.data.unlockedCommanders.push(e),this.data.selectedCommander=e,this.save()}recordKill(e=1){this.data.totalKills+=e,this.save()}recordMerge(e=1){this.data.totalMerges+=e,this.save()}recordLevelUp(e=1){this.data.totalLevelUps+=e,this.save()}saveSoloRun(e){this.data.soloRun=e,this.save()}clearSoloRun(){this.data.soloRun=null,this.save()}hasResumableSoloRun(){return!!this.data.soloRun&&this.data.soloRun.wave>=2}recordRunStats(e,t){e>this.data.highestWave&&(this.data.highestWave=e),t>this.data.highScore&&(this.data.highScore=t),this.save()}getCommanderPowerLevel(){const e=this.data.meta;return 1+e.damageLevel+e.maxHpLevel+e.attackSpeedLevel+e.startingGoldLevel+Math.floor(this.data.techShards/2)}addPvpTrophies(e,t=0){this.data.pvpTrophies=Math.max(0,Math.floor((this.data.pvpTrophies||1e3)+e)),this.data.pvpRivalsEliminated=(this.data.pvpRivalsEliminated||0)+t,this.save()}rollSupplyCrate(e,t){let n=0,i=0,a=0;for(let r=0;r<e;r++){const o=t?400+Math.floor(Math.random()*550):250+Math.floor(Math.random()*350),l=t?15+Math.floor(Math.random()*35):15+Math.floor(Math.random()*25),c=t?1+Math.floor(Math.random()*3):Math.random()<.65?1:0;n+=o,i+=l,a+=c}return this.data.gold+=n,this.data.gems+=i,this.data.techShards+=a,this.save(),{gold:n,gems:i,techShards:a}}onChange(e){this.listeners.push(e)}scheduleNotify(){this.notifyScheduled||(this.notifyScheduled=!0,requestAnimationFrame(()=>{this.notifyScheduled=!1;for(const e of this.listeners)e()}))}addGold(e){this.data.gold=Math.max(0,Math.floor(this.data.gold+e)),this.save()}spendGold(e){return this.data.gold<e?!1:(this.data.gold-=e,this.save(),!0)}addGems(e){this.data.gems=Math.max(0,Math.floor(this.data.gems+e)),this.save()}spendGems(e){return this.data.gems<e?!1:(this.data.gems-=e,this.save(),!0)}recordAdRevenue(e,t){e==="rewarded"?this.data.rewardedAdsWatched+=1:this.data.interstitialAdsWatched+=1,this.data.totalRevenueSimulated=Number((this.data.totalRevenueSimulated+t/1e3).toFixed(4)),this.save()}recordIapRevenue(e){this.data.iapPurchasesCount+=1,this.data.totalRevenueSimulated=Number((this.data.totalRevenueSimulated+e).toFixed(4)),this.save()}getMaxUpgradeLevelCap(){return Math.max(1,this.data.highestWave)}getMetaUpgradeCost(e){const t=this.data.meta[e];return Math.floor(100*Math.pow(1.55,t))}buyMetaUpgrade(e){const t=this.getMaxUpgradeLevelCap();if(this.data.meta[e]>=t)return!1;const n=this.getMetaUpgradeCost(e);return this.spendGold(n)?(this.data.meta[e]+=1,this.save(),!0):!1}getDamageMultiplier(){const e=this.data.selectedCommander==="tesla_engineer"?.25:0,t=this.data.techShards*.03;return 1+this.data.meta.damageLevel*.15+e+t}getBonusMaxHp(){const e=this.data.selectedCommander==="vanguard"?25:0;return this.data.meta.maxHpLevel*30+e}getStartingWaveGold(){return 40+this.data.meta.startingGoldLevel*25}getMagnetRadius(){return 100+this.data.meta.magnetLevel*25}getAttackSpeedMultiplier(){return 1+this.data.meta.attackSpeedLevel*.08}resetSave(){this.data=structuredClone(oi),$.setLang("en"),this.flushSave(),this.scheduleNotify()}}class _e{static instance;ctx=null;adMuted=!1;constructor(){}static getInstance(){return _e.instance||(_e.instance=new _e),_e.instance}setAdMuted(e){this.adMuted=e}ensureContext(){if(this.adMuted||!Pe.getInstance().data.soundEnabled)return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}playShoot(e=0){const t=this.ensureContext();if(!t)return;const n=t.currentTime,i=t.createOscillator(),a=t.createGain();i.type="triangle";const r=520+e*60;i.frequency.setValueAtTime(r,n),i.frequency.exponentialRampToValueAtTime(140,n+.09),a.gain.setValueAtTime(.08,n),a.gain.exponentialRampToValueAtTime(.001,n+.09),i.connect(a),a.connect(t.destination),i.start(n),i.stop(n+.09)}playLightning(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(920,t),n.frequency.linearRampToValueAtTime(320,t+.06),n.frequency.linearRampToValueAtTime(750,t+.12),i.gain.setValueAtTime(.06,t),i.gain.exponentialRampToValueAtTime(.001,t+.12),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.12)}playHit(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="square",n.frequency.setValueAtTime(190,t),n.frequency.exponentialRampToValueAtTime(55,t+.06),i.gain.setValueAtTime(.05,t),i.gain.exponentialRampToValueAtTime(.001,t+.06),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.06)}playCoin(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(987.77,t),n.frequency.setValueAtTime(1318.51,t+.05),i.gain.setValueAtTime(.06,t),i.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.14)}playMerge(e){const t=this.ensureContext();if(!t)return;const n=t.currentTime,i=[440,554.37,659.25,880,1108.73],a=1+(e-1)*.12;i.forEach((r,o)=>{const l=t.createOscillator(),c=t.createGain();l.type="triangle",l.frequency.setValueAtTime(r*a,n+o*.045),c.gain.setValueAtTime(.11,n+o*.045),c.gain.exponentialRampToValueAtTime(.001,n+o*.045+.2),l.connect(c),c.connect(t.destination),l.start(n+o*.045),l.stop(n+o*.045+.2)})}playExplosion(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.sampleRate*.25,i=e.createBuffer(1,n,e.sampleRate),a=i.getChannelData(0);for(let c=0;c<n;c++)a[c]=Math.random()*2-1;const r=e.createBufferSource();r.buffer=i;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(420,t),o.frequency.exponentialRampToValueAtTime(60,t+.25);const l=e.createGain();l.gain.setValueAtTime(.15,t),l.gain.exponentialRampToValueAtTime(.001,t+.25),r.connect(o),o.connect(l),l.connect(e.destination),r.start(t),r.stop(t+.25)}playWaveComplete(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,a)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.setValueAtTime(i,t+a*.08),o.gain.setValueAtTime(.1,t+a*.08),o.gain.exponentialRampToValueAtTime(.001,t+a*.08+.35),r.connect(o),o.connect(e.destination),r.start(t+a*.08),r.stop(t+a*.08+.35)})}playCashRegister(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[1046.5,1318.5,1567.98,2093].forEach((i,a)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.setValueAtTime(i,t+a*.055),o.gain.setValueAtTime(.14,t+a*.055),o.gain.exponentialRampToValueAtTime(.001,t+a*.055+.24),r.connect(o),o.connect(e.destination),r.start(t+a*.055),r.stop(t+a*.055+.24)})}playClick(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(680,t),n.frequency.exponentialRampToValueAtTime(340,t+.03),i.gain.setValueAtTime(.06,t),i.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.03)}}const Or="187",Ec=0,uo=1,bc=2,Ws=1,Ml=2,Zi=3,ei=0,Ht=1,Gt=2,Ci=0,ji=1,Ai=2,fo=3,po=4,Tc=5,wi=100,wc=101,Ac=102,Rc=103,Cc=104,Pc=200,Lc=201,Ic=202,Dc=203,Sl=204,yl=205,Nc=206,Uc=207,Oc=208,Fc=209,Bc=210,kc=211,Gc=212,Hc=213,zc=214,$a=0,qa=1,Ya=2,ts=3,Ka=4,Za=5,Ja=6,Qa=7,Fr=0,Vc=1,Wc=2,Rn=0,El=1,bl=2,Tl=3,Br=4,wl=5,Al=6,Rl=7,Cl=300,Ii=301,ns=302,pa=303,ma=304,jn=1e3,An=1001,ja=1002,Pt=1003,Xc=1004,us=1005,Wt=1006,ga=1007,Hn=1008,Yt=1009,Pl=1010,Ll=1011,is=1012,kr=1013,_n=1014,ln=1015,vn=1016,Gr=1017,Hr=1018,Di=1020,Il=35902,Dl=35899,Nl=1021,Ul=1022,mn=1023,Wn=1026,zn=1027,zr=1028,Vr=1029,ti=1030,Wr=1031,Xr=1033,Xs=33776,$s=33777,qs=33778,Ys=33779,er=35840,tr=35841,nr=35842,ir=35843,sr=36196,ar=37492,rr=37496,or=37488,lr=37489,Zs=37490,cr=37491,dr=37808,hr=37809,ur=37810,fr=37811,pr=37812,mr=37813,gr=37814,_r=37815,vr=37816,xr=37817,Mr=37818,Sr=37819,yr=37820,Er=37821,br=36492,Tr=36494,wr=36495,Ar=36283,Rr=36284,Js=36285,Cr=36286,$c=3200,Qs=0,qc=1,Gn="",qt="srgb",js="srgb-linear",ea="linear",je="srgb",_a=7680,Yc=519,Kc=512,Zc=513,Jc=514,Ol=515,Qc=516,jc=517,Fl=518,Bl=519,kl=35044,mo="300 es",cn=2e3,ss=2001;function ed(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function td(){const s=ta("canvas");return s.style.display="block",s}const go={};function na(...s){const e="THREE."+s.shift();console.log(e,...s)}function Gl(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ie(...s){s=Gl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ke(...s){s=Gl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Pi(...s){const e=s.join(" ");e in go||(go[e]=!0,Ie(...s))}function nd(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const id={[$a]:$a,[Ya]:Ja,[Ka]:Ka,[ts]:Za,[qa]:qa,[Ja]:Ya,[Qa]:Qa,[Za]:ts};class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],va=Math.PI/180,Pr=180/Math.PI;function si(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function sd(s,e){return(s%e+e)%e}function xa(s,e,t){return(1-t)*s+t*e}function ad(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function la(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hl(s,e){if(e.constructor===Float32Array)return s;const t=la(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function zl(s,e){if(e.constructor===Float32Array)return s;const t=la(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}class Ne{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],g=n[i+3],d=a[r+0],p=a[r+1],x=a[r+2],b=a[r+3];if(g!==b||l!==d||c!==p||h!==x){let m=l*d+c*p+h*x+g*b;m<0&&(d=-d,p=-p,x=-x,b=-b,m=-m);let f=1-o;if(m<.9995){const _=Math.acos(m),v=Math.sin(_);f=Math.sin(f*_)/v,o=Math.sin(o*_)/v,l=l*f+d*o,c=c*f+p*o,h=h*f+x*o,g=g*f+b*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+x*o,g=g*f+b*o;const _=1/Math.sqrt(l*l+c*c+h*h+g*g);l*=_,c*=_,h*=_,g*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],g=a[r],d=a[r+1],p=a[r+2],x=a[r+3];return e[t]=o*x+h*g+l*p-c*d,e[t+1]=l*x+h*d+c*g-o*p,e[t+2]=c*x+h*p+o*d-l*g,e[t+3]=h*x-o*g-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),g=o(a/2),d=l(n/2),p=l(i/2),x=l(a/2);switch(r){case"XYZ":this._x=d*h*g+c*p*x,this._y=c*p*g-d*h*x,this._z=c*h*x+d*p*g,this._w=c*h*g-d*p*x;break;case"YXZ":this._x=d*h*g+c*p*x,this._y=c*p*g-d*h*x,this._z=c*h*x-d*p*g,this._w=c*h*g+d*p*x;break;case"ZXY":this._x=d*h*g-c*p*x,this._y=c*p*g+d*h*x,this._z=c*h*x+d*p*g,this._w=c*h*g-d*p*x;break;case"ZYX":this._x=d*h*g-c*p*x,this._y=c*p*g+d*h*x,this._z=c*h*x-d*p*g,this._w=c*h*g+d*p*x;break;case"YZX":this._x=d*h*g+c*p*x,this._y=c*p*g+d*h*x,this._z=c*h*x-d*p*g,this._w=c*h*g-d*p*x;break;case"XZY":this._x=d*h*g-c*p*x,this._y=c*p*g-d*h*x,this._z=c*h*x+d*p*g,this._w=c*h*g+d*p*x;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],g=t[10],d=n+o+g;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-i)*p}else if(n>o&&n>g){const p=2*Math.sqrt(1+n-o-g);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(a+c)/p}else if(o>g){const p=2*Math.sqrt(1+o-n-g);this._w=(a-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+g-n-o);this._w=(r-i)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),h=2*(o*t-a*i),g=2*(a*n-r*t);return this.x=t+l*c+r*g-o*h,this.y=n+l*h+o*c-a*g,this.z=i+l*g+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new O,_o=new Oi;class ke{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c)}set(e,t,n,i,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],g=n[7],d=n[2],p=n[5],x=n[8],b=i[0],m=i[3],f=i[6],_=i[1],v=i[4],y=i[7],w=i[2],T=i[5],u=i[8];return a[0]=r*b+o*_+l*w,a[3]=r*m+o*v+l*T,a[6]=r*f+o*y+l*u,a[1]=c*b+h*_+g*w,a[4]=c*m+h*v+g*T,a[7]=c*f+h*y+g*u,a[2]=d*b+p*_+x*w,a[5]=d*m+p*v+x*T,a[8]=d*f+p*y+x*u,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],g=h*r-o*c,d=o*l-h*a,p=c*a-r*l,x=t*g+n*d+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=g*b,e[1]=(i*c-h*n)*b,e[2]=(o*n-i*r)*b,e[3]=d*b,e[4]=(h*t-i*l)*b,e[5]=(i*a-o*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(r*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new ke,vo=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xo=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rd(){const s={enabled:!0,workingColorSpace:js,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===je&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===je&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[js]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:vo,fromXYZ:xo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:vo,fromXYZ:xo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),s}const qe=rd();function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Li(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let li;class od{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{li===void 0&&(li=ta("canvas")),li.width=e.width,li.height=e.height;const i=li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=li}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Cn(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ld=0;class $r{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(ya(i[r].image)):a.push(ya(i[r]))}else a=ya(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?od.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let cd=0;const Ea=new O;class Ut extends ii{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=An,i=An,a=Wt,r=Hn,o=mn,l=Yt,c=Ut.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=si(),this.name="",this.source=new $r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Cl;Ut.DEFAULT_ANISOTROPY=1;class ut{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],h=l[4],g=l[8],d=l[1],p=l[5],x=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(g-b)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(g+b)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,w=(f+1)/2,T=(h+d)/4,u=(g+b)/4,M=(x+m)/4;return v>y&&v>w?v<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(v),i=T/n,a=u/n):y>w?y<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(y),n=T/i,a=M/i):w<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(w),n=u/a,i=M/a),this.set(n,i,a,t),this}let _=Math.sqrt((m-x)*(m-x)+(g-b)*(g-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(g-b)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const i=n.count;for(let a=0;a<i;a++)this.textures[a]=new Ut({width:e,height:t,depth:n.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new $r(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vl extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hd extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class et{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,a,r,o,l,c,h,g,d,p,x,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c,h,g,d,p,x,b,m)}set(e,t,n,i,a,r,o,l,c,h,g,d,p,x,b,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=g,f[14]=d,f[3]=p,f[7]=x,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ci.setFromMatrixColumn(e,0).length(),a=1/ci.setFromMatrixColumn(e,1).length(),r=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const d=r*h,p=r*g,x=o*h,b=o*g;t[0]=l*h,t[4]=-l*g,t[8]=c,t[1]=p+x*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=x+p*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,p=l*g,x=c*h,b=c*g;t[0]=d+b*o,t[4]=x*o-p,t[8]=r*c,t[1]=r*g,t[5]=r*h,t[9]=-o,t[2]=p*o-x,t[6]=b+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,p=l*g,x=c*h,b=c*g;t[0]=d-b*o,t[4]=-r*g,t[8]=x+p*o,t[1]=p+x*o,t[5]=r*h,t[9]=b-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,p=r*g,x=o*h,b=o*g;t[0]=l*h,t[4]=x*c-p,t[8]=d*c+b,t[1]=l*g,t[5]=b*c+d,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,p=r*c,x=o*l,b=o*c;t[0]=l*h,t[4]=b-d*g,t[8]=x*g+p,t[1]=g,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*g+x,t[10]=d-b*g}else if(e.order==="XZY"){const d=r*l,p=r*c,x=o*l,b=o*c;t[0]=l*h,t[4]=-g,t[8]=c*h,t[1]=d*g+b,t[5]=r*h,t[9]=p*g-x,t[2]=x*g-p,t[6]=o*h,t[10]=b*g+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ud,e,fd)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Nn.crossVectors(n,Xt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Nn.crossVectors(n,Xt)),Nn.normalize(),fs.crossVectors(Xt,Nn),i[0]=Nn.x,i[4]=fs.x,i[8]=Xt.x,i[1]=Nn.y,i[5]=fs.y,i[9]=Xt.y,i[2]=Nn.z,i[6]=fs.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],g=n[5],d=n[9],p=n[13],x=n[2],b=n[6],m=n[10],f=n[14],_=n[3],v=n[7],y=n[11],w=n[15],T=i[0],u=i[4],M=i[8],C=i[12],R=i[1],L=i[5],D=i[9],F=i[13],P=i[2],B=i[6],q=i[10],z=i[14],ne=i[3],W=i[7],j=i[11],te=i[15];return a[0]=r*T+o*R+l*P+c*ne,a[4]=r*u+o*L+l*B+c*W,a[8]=r*M+o*D+l*q+c*j,a[12]=r*C+o*F+l*z+c*te,a[1]=h*T+g*R+d*P+p*ne,a[5]=h*u+g*L+d*B+p*W,a[9]=h*M+g*D+d*q+p*j,a[13]=h*C+g*F+d*z+p*te,a[2]=x*T+b*R+m*P+f*ne,a[6]=x*u+b*L+m*B+f*W,a[10]=x*M+b*D+m*q+f*j,a[14]=x*C+b*F+m*z+f*te,a[3]=_*T+v*R+y*P+w*ne,a[7]=_*u+v*L+y*B+w*W,a[11]=_*M+v*D+y*q+w*j,a[15]=_*C+v*F+y*z+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],g=e[6],d=e[10],p=e[14],x=e[3],b=e[7],m=e[11],f=e[15],_=l*p-c*d,v=o*p-c*g,y=o*d-l*g,w=r*p-c*h,T=r*d-l*h,u=r*g-o*h;return t*(b*_-m*v+f*y)-n*(x*_-m*w+f*T)+i*(x*v-b*w+f*u)-a*(x*y-b*T+m*u)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-n*(a*h-o*l)+i*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],g=e[9],d=e[10],p=e[11],x=e[12],b=e[13],m=e[14],f=e[15],_=t*o-n*r,v=t*l-i*r,y=t*c-a*r,w=n*l-i*o,T=n*c-a*o,u=i*c-a*l,M=h*b-g*x,C=h*m-d*x,R=h*f-p*x,L=g*m-d*b,D=g*f-p*b,F=d*f-p*m,P=_*F-v*D+y*L+w*R-T*C+u*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return e[0]=(o*F-l*D+c*L)*B,e[1]=(i*D-n*F-a*L)*B,e[2]=(b*u-m*T+f*w)*B,e[3]=(d*T-g*u-p*w)*B,e[4]=(l*R-r*F-c*C)*B,e[5]=(t*F-i*R+a*C)*B,e[6]=(m*y-x*u-f*v)*B,e[7]=(h*u-d*y+p*v)*B,e[8]=(r*D-o*R+c*M)*B,e[9]=(n*R-t*D-a*M)*B,e[10]=(x*T-b*y+f*_)*B,e[11]=(g*y-h*T-p*_)*B,e[12]=(o*C-r*L-l*M)*B,e[13]=(t*L-n*C+i*M)*B,e[14]=(b*v-x*w-m*_)*B,e[15]=(h*w-g*v+d*_)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,g=o+o,d=a*c,p=a*h,x=a*g,b=r*h,m=r*g,f=o*g,_=l*c,v=l*h,y=l*g,w=n.x,T=n.y,u=n.z;return i[0]=(1-(b+f))*w,i[1]=(p+y)*w,i[2]=(x-v)*w,i[3]=0,i[4]=(p-y)*T,i[5]=(1-(d+f))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(x+v)*u,i[9]=(m-_)*u,i[10]=(1-(d+b))*u,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=ci.set(i[0],i[1],i[2]).length();const o=ci.set(i[4],i[5],i[6]).length(),l=ci.set(i[8],i[9],i[10]).length();a<0&&(r=-r),an.copy(this);const c=1/r,h=1/o,g=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=g,an.elements[9]*=g,an.elements[10]*=g,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,a,r,o=cn,l=!1){const c=this.elements,h=2*a/(t-e),g=2*a/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let x,b;if(l)x=a/(r-a),b=r*a/(r-a);else if(o===cn)x=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===ss)x=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=g,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=cn,l=!1){const c=this.elements,h=2/(t-e),g=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i);let x,b;if(l)x=1/(r-a),b=r/(r-a);else if(o===cn)x=-2/(r-a),b=-(r+a)/(r-a);else if(o===ss)x=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=g,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new O,an=new et,ud=new O(0,0,0),fd=new O(1,1,1),Nn=new O,fs=new O,Xt=new O,Mo=new et,So=new Oi;class Pn{constructor(e=0,t=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],g=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-$e(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return So.setFromEuler(this),this.setFromQuaternion(So,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pd=0;const yo=new O,di=new Oi,Mn=new et,ps=new O,ki=new O,md=new O,gd=new Oi,Eo=new O(1,0,0),bo=new O(0,1,0),To=new O(0,0,1),wo={type:"added"},_d={type:"removed"},hi={type:"childadded",child:null},ba={type:"childremoved",child:null};class ft extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new O,t=new Pn,n=new Oi,i=new O(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new ke}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(bo,e)}rotateZ(e){return this.rotateOnAxis(To,e)}translateOnAxis(e,t){return yo.copy(e).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(bo,e)}translateZ(e){return this.translateOnAxis(To,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ps.copy(e):ps.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ki,ps,this.up):Mn.lookAt(ps,ki,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(Mn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wo),hi.child=e,this.dispatchEvent(hi),hi.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_d),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wo),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,md),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*i,a[13]+=n-a[1]*t-a[5]*n-a[9]*i,a[14]+=i-a[2]*t-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const g=l[c];a(e.shapes,g)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),g=r(e.shapes),d=r(e.skeletons),p=r(e.animations),x=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ft.DEFAULT_UP=new O(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ht extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vd={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],d=h.position.distanceTo(g.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},ms={h:0,s:0,l:0};function wa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=sd(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=wa(r,a,e+1/3),this.g=wa(r,a,e),this.b=wa(r,a,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=qt){function n(a){a!==void 0&&parseFloat(a)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return qe.workingToColorSpace(Nt.copy(this),e),Math.round($e(Nt.r*255,0,255))*65536+Math.round($e(Nt.g*255,0,255))*256+Math.round($e(Nt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,a=Nt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const g=r-o;switch(c=h<=.5?g/(r+o):g/(2-r-o),r){case n:l=(i-a)/g+(i<a?6:0);break;case i:l=(a-n)/g+2;break;case a:l=(n-i)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=qt){qe.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(ms);const n=xa(Un.h,ms.h,t),i=xa(Un.s,ms.s,t),a=xa(Un.l,ms.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new De;De.NAMES=Xl;class ia{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $l extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rn=new O,Sn=new O,Aa=new O,yn=new O,ui=new O,fi=new O,Ao=new O,Ra=new O,Ca=new O,Pa=new O,La=new ut,Ia=new ut,Da=new ut;class nn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){rn.subVectors(i,t),Sn.subVectors(n,t),Aa.subVectors(e,t);const r=rn.dot(rn),o=rn.dot(Sn),l=rn.dot(Aa),c=Sn.dot(Sn),h=Sn.dot(Aa),g=r*c-o*o;if(g===0)return a.set(0,0,0),null;const d=1/g,p=(c*l-o*h)*d,x=(r*h-o*l)*d;return a.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,i,a,r,o,l){return this.getBarycoord(e,t,n,i,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,yn.x),l.addScaledVector(r,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(e,t,n,i,a,r){return La.setScalar(0),Ia.setScalar(0),Da.setScalar(0),La.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(La,a.x),r.addScaledVector(Ia,a.y),r.addScaledVector(Da,a.z),r}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Sn.subVectors(e,t),rn.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;ui.subVectors(i,n),fi.subVectors(a,n),Ra.subVectors(e,n);const l=ui.dot(Ra),c=fi.dot(Ra);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,i);const h=ui.dot(Ca),g=fi.dot(Ca);if(h>=0&&g<=h)return t.copy(i);const d=l*g-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),t.copy(n).addScaledVector(ui,r);Pa.subVectors(e,a);const p=ui.dot(Pa),x=fi.dot(Pa);if(x>=0&&p<=x)return t.copy(a);const b=p*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(fi,o);const m=h*x-p*g;if(m<=0&&g-h>=0&&p-x>=0)return Ao.subVectors(a,i),o=(g-h)/(g-h+(p-x)),t.copy(i).addScaledVector(Ao,o);const f=1/(m+b+d);return r=b*f,o=d*f,t.copy(n).addScaledVector(ui,r).addScaledVector(fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ai{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,on):on.fromBufferAttribute(a,r),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),_s.subVectors(this.max,Gi),pi.subVectors(e.a,Gi),mi.subVectors(e.b,Gi),gi.subVectors(e.c,Gi),On.subVectors(mi,pi),Fn.subVectors(gi,mi),Yn.subVectors(pi,gi);let t=[0,-On.z,On.y,0,-Fn.z,Fn.y,0,-Yn.z,Yn.y,On.z,0,-On.x,Fn.z,0,-Fn.x,Yn.z,0,-Yn.x,-On.y,On.x,0,-Fn.y,Fn.x,0,-Yn.y,Yn.x,0];return!Na(t,pi,mi,gi,_s)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,pi,mi,gi,_s))?!1:(vs.crossVectors(On,Fn),t=[vs.x,vs.y,vs.z],Na(t,pi,mi,gi,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const En=[new O,new O,new O,new O,new O,new O,new O,new O],on=new O,gs=new ai,pi=new O,mi=new O,gi=new O,On=new O,Fn=new O,Yn=new O,Gi=new O,_s=new O,vs=new O,Kn=new O;function Na(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Kn.fromArray(s,a);const o=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const gt=new O,xs=new Ne;let xd=0;class dn extends ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=ln,this.version=0,this._normalizationScale=e!==void 0?la(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Hl(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):zl(e,this.array)}}class ql extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yl extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Md=new ai,Hi=new O,Ua=new O;class ri{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Md.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(Ua)),this.expandByPoint(Hi.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Sd=0;const jt=new et,Oa=new ft,_i=new O,$t=new ai,zi=new ai,wt=new O;class Mt extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?Yl:ql)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ke().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];$t.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors($t.min,zi.min),$t.expandByPoint(wt),wt.addVectors($t.max,zi.max),$t.expandByPoint(wt)):($t.expandByPoint(zi.min),$t.expandByPoint(zi.max))}$t.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)wt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(e,c),wt.add(_i)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new O,l[C]=new O;const h=new O,g=new O,d=new O,p=new Ne,x=new Ne,b=new Ne,m=new O,f=new O;function _(C,R,L){c[C]=c[R]=c[L]=1,h.fromBufferAttribute(n,C),g.fromBufferAttribute(n,R),d.fromBufferAttribute(n,L),p.fromBufferAttribute(a,C),x.fromBufferAttribute(a,R),b.fromBufferAttribute(a,L),g.sub(h),d.sub(h),x.sub(p),b.sub(p);const D=1/(x.x*b.y-b.x*x.y);isFinite(D)&&(m.copy(g).multiplyScalar(b.y).addScaledVector(d,-x.y).multiplyScalar(D),f.copy(d).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(D),o[C].add(m),o[R].add(m),o[L].add(m),l[C].add(f),l[R].add(f),l[L].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,R=v.length;C<R;++C){const L=v[C],D=L.start,F=L.count;for(let P=D,B=D+F;P<B;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new O,w=new O,T=new O,u=new O;function M(C){T.fromBufferAttribute(i,C),u.copy(T);const R=o[C];y.copy(R),y.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(u,R);const D=w.dot(l[C])<0?-1:1;r.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,R=n.count;C<R;++C)c[C]&&M(C);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new O,a=new O,r=new O,o=new O,l=new O,c=new O,h=new O,g=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,x),a.fromBufferAttribute(t,b),r.fromBufferAttribute(t,m),h.subVectors(r,a),g.subVectors(i,a),h.cross(g),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,a),g.subVectors(i,a),h.cross(g),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,g=o.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let f=0;f<h;f++)d[x++]=c[p++]}return new dn(d,h,g)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,g=c.length;h<g;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let g=0,d=c.length;g<d;g++){const p=c[g];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],g=a[c];for(let d=0,p=g.length;d<p;d++)h.push(g[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const g=r[c];this.addGroup(g.start,g.count,g.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kl,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Ro(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Ro(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Ro(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=si()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Ft=new O;class sa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?la(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),a=this._normalize(a)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Hl(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):zl(e,this.data.array)}}const Fa=new O,Ed=new O,bd=new ke;class kn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Fa.subVectors(n,t).cross(Ed.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Fa),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bd.getNormalMatrix(e),i=this.coplanarPoint(Fa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Td=0;class Ln extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=si(),this.name="",this.type="Material",this.blending=ji,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=yl,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vi;const Vi=new O,xi=new O,Mi=new O,Si=new Ne,Wi=new Ne,Kl=new et,Ms=new O,Xi=new O,Ss=new O,Co=new Ne,Ba=new Ne,Po=new Ne;class ys extends ft{constructor(e=new Ji){if(super(),this.isSprite=!0,this.type="Sprite",vi===void 0){vi=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yd(t,5);vi.setIndex([0,1,2,0,2,3]),vi.setAttribute("position",new sa(n,3,0,!1)),vi.setAttribute("uv",new sa(n,2,3,!1))}this.geometry=vi,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xi.setFromMatrixScale(this.matrixWorld),Kl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xi.multiplyScalar(-Mi.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;Es(Ms.set(-.5,-.5,0),Mi,r,xi,i,a),Es(Xi.set(.5,-.5,0),Mi,r,xi,i,a),Es(Ss.set(.5,.5,0),Mi,r,xi,i,a),Co.set(0,0),Ba.set(1,0),Po.set(1,1);let o=e.ray.intersectTriangle(Ms,Xi,Ss,!1,Vi);if(o===null&&(Es(Xi.set(-.5,.5,0),Mi,r,xi,i,a),Ba.set(0,1),o=e.ray.intersectTriangle(Ms,Ss,Xi,!1,Vi),o===null))return;const l=e.ray.origin.distanceTo(Vi);l<e.near||l>e.far||t.push({distance:l,point:Vi.clone(),uv:nn.getInterpolation(Vi,Ms,Xi,Ss,Co,Ba,Po,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Es(s,e,t,n,i,a){Si.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Wi.x=a*Si.x-i*Si.y,Wi.y=i*Si.x+a*Si.y):Wi.copy(Si),s.copy(e),s.x+=Wi.x,s.y+=Wi.y,s.applyMatrix4(Kl)}const bn=new O,ka=new O,bs=new O,Ts=new O;class qr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ka.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Ts.copy(this.origin).sub(ka);const a=e.distanceTo(t)*.5,r=-this.direction.dot(bs),o=Ts.dot(this.direction),l=-Ts.dot(bs),c=Ts.lengthSq(),h=Math.abs(1-r*r);let g,d,p,x;if(h>0)if(g=r*l-o,d=r*o-l,x=a*h,g>=0)if(d>=-x)if(d<=x){const b=1/h;g*=b,d*=b,p=g*(g+r*d+2*o)+d*(r*g+d+2*l)+c}else d=a,g=Math.max(0,-(r*d+o)),p=-g*g+d*(d+2*l)+c;else d=-a,g=Math.max(0,-(r*d+o)),p=-g*g+d*(d+2*l)+c;else d<=-x?(g=Math.max(0,-(-r*a+o)),d=g>0?-a:Math.min(Math.max(-a,-l),a),p=-g*g+d*(d+2*l)+c):d<=x?(g=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(g=Math.max(0,-(r*a+o)),d=g>0?a:Math.min(Math.max(-a,-l),a),p=-g*g+d*(d+2*l)+c);else d=r>0?-a:a,g=Math.max(0,-(r*d+o)),p=-g*g+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),i&&i.copy(ka).addScaledVector(bs,d),p}intersectSphere(e,t){if(e.radius<0)return null;bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,g=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),g>=0?(o=(e.min.z-d.z)*g,l=(e.max.z-d.z)*g):(o=(e.max.z-d.z)*g,l=(e.min.z-d.z)*g),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,g=e.x-r.x,d=e.y-r.y,p=e.z-r.z,x=t.x-r.x,b=t.y-r.y,m=t.z-r.z,f=n.x-r.x,_=n.y-r.y,v=n.z-r.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(h);let u,M,C,R,L,D,F,P,B,q,z,ne;if(y>=w&&y>=T?(C=l,D=g,B=x,ne=f,l>=0?(u=c,M=h,R=d,L=p,F=b,P=m,q=_,z=v):(u=h,M=c,R=p,L=d,F=m,P=b,q=v,z=_)):w>=T?(C=c,D=d,B=b,ne=_,c>=0?(u=h,M=l,R=p,L=g,F=m,P=x,q=v,z=f):(u=l,M=h,R=g,L=p,F=x,P=m,q=f,z=v)):(C=h,D=p,B=m,ne=v,h>=0?(u=l,M=c,R=g,L=d,F=x,P=b,q=f,z=_):(u=c,M=l,R=d,L=g,F=b,P=x,q=_,z=f)),C===0)return null;const W=u/C,j=M/C,te=1/C,be=R-W*D,Oe=L-j*D,Z=F-W*B,ge=P-j*B,Se=q-W*ne,Re=z-j*ne,ve=Se*ge-Re*Z,Be=be*Re-Oe*Se,pt=Z*Oe-ge*be;if(i){if(ve<0||Be<0||pt<0)return null}else if((ve<0||Be<0||pt<0)&&(ve>0||Be>0||pt>0))return null;const Le=ve+Be+pt;if(Le===0)return null;const Je=te*(ve*D+Be*B+pt*ne);return(Le>0?Je<0:Je>0)?null:this.at(Je/Le,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lo=new et,Zn=new qr,ws=new ri,Io=new O,As=new O,Rs=new O,Cs=new O,Ga=new O,Ps=new O,Do=new O,Ls=new O;class ee extends ft{constructor(e=new Mt,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){Ps.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],g=a[l];h!==0&&(Ga.fromBufferAttribute(g,e),r?Ps.addScaledVector(Ga,h):Ps.addScaledVector(Ga.sub(t),h))}t.add(Ps)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(a),Zn.copy(e.ray).recast(e.near),!(ws.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(ws,Io)===null||Zn.origin.distanceToSquared(Io)>(e.far-e.near)**2))&&(Lo.copy(a).invert(),Zn.copy(e.ray).applyMatrix4(Lo),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,g=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,b=d.length;x<b;x++){const m=d[x],f=r[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=v;y<w;y+=3){const T=o.getX(y),u=o.getX(y+1),M=o.getX(y+2);i=Is(this,f,e,n,c,h,g,T,u,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=x,f=b;m<f;m+=3){const _=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);i=Is(this,r,e,n,c,h,g,_,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,b=d.length;x<b;x++){const m=d[x],f=r[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=v;y<w;y+=3){const T=y,u=y+1,M=y+2;i=Is(this,f,e,n,c,h,g,T,u,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=x,f=b;m<f;m+=3){const _=m,v=m+1,y=m+2;i=Is(this,r,e,n,c,h,g,_,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function wd(s,e,t,n,i,a,r,o){let l;if(e.side===Ht?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,e.side===ei,o),l===null)return null;Ls.copy(o),Ls.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:s}}function Is(s,e,t,n,i,a,r,o,l,c){s.getVertexPosition(o,As),s.getVertexPosition(l,Rs),s.getVertexPosition(c,Cs);const h=wd(s,e,t,n,As,Rs,Cs,Do);if(h){const g=new O;nn.getBarycoord(Do,As,Rs,Cs,g),i&&(h.uv=nn.getInterpolatedAttribute(i,o,l,c,g,new Ne)),a&&(h.uv1=nn.getInterpolatedAttribute(a,o,l,c,g,new Ne)),r&&(h.normal=nn.getInterpolatedAttribute(r,o,l,c,g,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};nn.getNormal(As,Rs,Cs,d.normal),h.face=d,h.barycoord=g}return h}class Zl extends Ut{constructor(e=null,t=1,n=1,i,a,r,o,l,c=Pt,h=Pt,g,d){super(null,r,o,l,c,h,i,a,g,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No extends dn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yi=new et,Uo=new et,Ds=[],Oo=new ai,Ad=new et,$i=new ee,qi=new ri;class Rd extends ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new No(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ad)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),Oo.copy(e.boundingBox).applyMatrix4(yi),this.boundingBox.union(Oo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),qi.copy(e.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qi.copy(this.boundingSphere),qi.applyMatrix4(n),e.ray.intersectsSphere(qi)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,yi),Uo.multiplyMatrices(n,yi),$i.matrixWorld=Uo,$i.raycast(e,Ds);for(let r=0,o=Ds.length;r<o;r++){const l=Ds[r];l.instanceId=a,l.object=this,t.push(l)}Ds.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new No(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zl(new Float32Array(i*this.count),i,this.count,zr,ln));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;return a[l]=o,a.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jn=new ri,Cd=new Ne(.5,.5),Ns=new O;class as{constructor(e=new kn,t=new kn,n=new kn,i=new kn,a=new kn,r=new kn){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const i=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],g=a[5],d=a[6],p=a[7],x=a[8],b=a[9],m=a[10],f=a[11],_=a[12],v=a[13],y=a[14],w=a[15];if(i[0].setComponents(c-r,p-h,f-x,w-_).normalize(),i[1].setComponents(c+r,p+h,f+x,w+_).normalize(),i[2].setComponents(c+o,p+g,f+b,w+v).normalize(),i[3].setComponents(c-o,p-g,f-b,w-v).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,p-d,f-m,w-y).normalize();else if(i[4].setComponents(c-l,p-d,f-m,w-y).normalize(),t===cn)i[5].setComponents(c+l,p+d,f+m,w+y).normalize();else if(t===ss)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){Jn.center.set(0,0,0);const t=Cd.distanceTo(e.center);return Jn.radius=.7071067811865476+t,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ns.x=i.normal.x>0?e.max.x:e.min.x,Ns.y=i.normal.y>0?e.max.y:e.min.y,Ns.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Fo=new et;class Yr{constructor(){this.coordinateSystem=cn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const a=t[i];Fo.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),n[i]===void 0&&(n[i]=new as),n[i].setFromProjectionMatrix(Fo,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new as),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Yr().copy(this)}}class Kr extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const aa=new O,ra=new O,Bo=new et,Yi=new qr,Us=new ri,Ha=new O,ko=new O;class Jl extends ft{constructor(e=new Mt,t=new Kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)aa.fromBufferAttribute(t,i-1),ra.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=aa.distanceTo(ra);e.setAttribute("lineDistance",new tt(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=a,e.ray.intersectsSphere(Us)===!1)return;Bo.copy(i).invert(),Yi.copy(e.ray).applyMatrix4(Bo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),x=Math.min(h.count,r.start+r.count);for(let b=p,m=x-1;b<m;b+=c){const f=h.getX(b),_=h.getX(b+1),v=Os(this,e,Yi,l,f,_,b);v&&t.push(v)}if(this.isLineLoop){const b=h.getX(x-1),m=h.getX(p),f=Os(this,e,Yi,l,b,m,x-1);f&&t.push(f)}}else{const p=Math.max(0,r.start),x=Math.min(d.count,r.start+r.count);for(let b=p,m=x-1;b<m;b+=c){const f=Os(this,e,Yi,l,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){const b=Os(this,e,Yi,l,x-1,p,x-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Os(s,e,t,n,i,a,r){const o=s.geometry.attributes.position;if(aa.fromBufferAttribute(o,i),ra.fromBufferAttribute(o,a),t.distanceSqToSegment(aa,ra,Ha,ko)>n)return;Ha.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ha);if(!(c<e.near||c>e.far))return{distance:c,point:ko.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const Go=new O,Ho=new O;class Pd extends Jl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)Go.fromBufferAttribute(t,i),Ho.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Go.distanceTo(Ho);e.setAttribute("lineDistance",new tt(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lr extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zo=new et,Ir=new qr,Fs=new ri,Bs=new O;class Vo extends ft{constructor(e=new Mt,t=new Lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(i),Fs.radius+=a,e.ray.intersectsSphere(Fs)===!1)return;zo.copy(i).invert(),Ir.copy(e.ray).applyMatrix4(zo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,g=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let x=d,b=p;x<b;x++){const m=c.getX(x);Bs.fromBufferAttribute(g,m),Wo(Bs,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),p=Math.min(g.count,r.start+r.count);for(let x=d,b=p;x<b;x++)Bs.fromBufferAttribute(g,x),Wo(Bs,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Wo(s,e,t,n,i,a,r){const o=Ir.distanceSqToPoint(s);if(o<t){const l=new O;Ir.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Ql extends Ut{constructor(e=[],t=Ii,n,i,a,r,o,l,c,h){super(e,t,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ks extends Ut{constructor(e,t,n,i,a,r,o,l,c){super(e,t,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ni extends Ut{constructor(e,t,n=_n,i,a,r,o=Pt,l=Pt,c,h=Wn,g=1){if(h!==Wn&&h!==zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:g};super(d,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class jl extends Ni{constructor(e,t=_n,n=Ii,i,a,r=Pt,o=Pt,l,c=Wn){const h={width:e,height:e,depth:1},g=[h,h,h,h,h,h];super(e,e,t,n,i,a,r,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ec extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _t extends Mt{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],g=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,r,a,0),x("z","y","x",1,-1,n,t,-e,r,a,1),x("x","z","y",1,1,e,n,t,i,r,2),x("x","z","y",1,-1,e,n,-t,i,r,3),x("x","y","z",1,-1,e,t,n,i,a,4),x("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(g,2));function x(b,m,f,_,v,y,w,T,u,M,C){const R=y/u,L=w/M,D=y/2,F=w/2,P=T/2,B=u+1,q=M+1;let z=0,ne=0;const W=new O;for(let j=0;j<q;j++){const te=j*L-F;for(let be=0;be<B;be++){const Oe=be*R-D;W[b]=Oe*_,W[m]=te*v,W[f]=P,c.push(W.x,W.y,W.z),W[b]=0,W[m]=0,W[f]=T>0?1:-1,h.push(W.x,W.y,W.z),g.push(be/u),g.push(1-j/M),z+=1}}for(let j=0;j<M;j++)for(let te=0;te<u;te++){const be=d+te+B*j,Oe=d+te+B*(j+1),Z=d+(te+1)+B*(j+1),ge=d+(te+1)+B*j;l.push(be,Oe,ge),l.push(Oe,Z,ge),ne+=6}o.addGroup(p,ne,C),p+=ne,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ot extends Mt{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],g=[],d=[],p=[];let x=0;const b=[],m=n/2;let f=0;_(),r===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function _(){const y=new O,w=new O;let T=0;const u=(t-e)/n;for(let M=0;M<=a;M++){const C=[],R=M/a,L=R*(t-e)+e;for(let D=0;D<=i;D++){const F=D/i,P=F*l+o,B=Math.sin(P),q=Math.cos(P);w.x=L*B,w.y=-R*n+m,w.z=L*q,g.push(w.x,w.y,w.z),y.set(B,u,q).normalize(),d.push(y.x,y.y,y.z),p.push(F,1-R),C.push(x++)}b.push(C)}for(let M=0;M<i;M++)for(let C=0;C<a;C++){const R=b[C][M],L=b[C+1][M],D=b[C+1][M+1],F=b[C][M+1];(e>0||C!==0)&&(h.push(R,L,F),T+=3),(t>0||C!==a-1)&&(h.push(L,D,F),T+=3)}c.addGroup(f,T,0),f+=T}function v(y){const w=x,T=new Ne,u=new O;let M=0;const C=y===!0?e:t,R=y===!0?1:-1;for(let D=1;D<=i;D++)g.push(0,m*R,0),d.push(0,R,0),p.push(.5,.5),x++;const L=x;for(let D=0;D<=i;D++){const P=D/i*l+o,B=Math.cos(P),q=Math.sin(P);u.x=C*q,u.y=m*R,u.z=C*B,g.push(u.x,u.y,u.z),d.push(0,R,0),T.x=B*.5+.5,T.y=q*.5*R+.5,p.push(T.x,T.y),x++}for(let D=0;D<i;D++){const F=w+D,P=L+D;y===!0?h.push(P,P+1,F):h.push(P+1,P,F),M+=3}c.addGroup(f,M,y===!0?1:2),f+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wn extends ot{constructor(e=1,t=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new wn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class os extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const a=[],r=[];o(i),c(n),h(),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(a.slice(),3)),this.setAttribute("uv",new tt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const v=new O,y=new O,w=new O;for(let T=0;T<t.length;T+=3)p(t[T+0],v),p(t[T+1],y),p(t[T+2],w),l(v,y,w,_)}function l(_,v,y,w){const T=w+1,u=[];for(let M=0;M<=T;M++){u[M]=[];const C=_.clone().lerp(y,M/T),R=v.clone().lerp(y,M/T),L=T-M;for(let D=0;D<=L;D++)D===0&&M===T?u[M][D]=C:u[M][D]=C.clone().lerp(R,D/L)}for(let M=0;M<T;M++)for(let C=0;C<2*(T-M)-1;C++){const R=Math.floor(C/2);C%2===0?(d(u[M][R+1]),d(u[M+1][R]),d(u[M][R])):(d(u[M][R+1]),d(u[M+1][R+1]),d(u[M+1][R]))}}function c(_){const v=new O;for(let y=0;y<a.length;y+=3)v.x=a[y+0],v.y=a[y+1],v.z=a[y+2],v.normalize().multiplyScalar(_),a[y+0]=v.x,a[y+1]=v.y,a[y+2]=v.z}function h(){const _=new O;for(let v=0;v<a.length;v+=3){_.x=a[v+0],_.y=a[v+1],_.z=a[v+2];const y=m(_)/2/Math.PI+.5,w=f(_)/Math.PI+.5;r.push(y,1-w)}x(),g()}function g(){for(let _=0;_<r.length;_+=6){const v=r[_+0],y=r[_+2],w=r[_+4],T=Math.max(v,y,w),u=Math.min(v,y,w);T>.9&&u<.1&&(v<.2&&(r[_+0]+=1),y<.2&&(r[_+2]+=1),w<.2&&(r[_+4]+=1))}}function d(_){a.push(_.x,_.y,_.z)}function p(_,v){const y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function x(){const _=new O,v=new O,y=new O,w=new O,T=new Ne,u=new Ne,M=new Ne;for(let C=0,R=0;C<a.length;C+=9,R+=6){_.set(a[C+0],a[C+1],a[C+2]),v.set(a[C+3],a[C+4],a[C+5]),y.set(a[C+6],a[C+7],a[C+8]),T.set(r[R+0],r[R+1]),u.set(r[R+2],r[R+3]),M.set(r[R+4],r[R+5]),w.copy(_).add(v).add(y).divideScalar(3);const L=m(w);b(T,R+0,_,L),b(u,R+2,v,L),b(M,R+4,y,L)}}function b(_,v,y,w){w<0&&_.x===1&&(r[v]=_.x-1),y.x===0&&y.z===0&&(r[v]=w/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.vertices,e.indices,e.radius,e.detail)}}class oa extends os{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oa(e.radius,e.detail)}}class Zr extends os{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zr(e.radius,e.detail)}}class Qn extends os{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qn(e.radius,e.detail)}}class ls extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,g=e/o,d=t/l,p=[],x=[],b=[],m=[];for(let f=0;f<h;f++){const _=f*d-r;for(let v=0;v<c;v++){const y=v*g-a;x.push(y,-_,0),b.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const v=_+c*f,y=_+c*(f+1),w=_+1+c*(f+1),T=_+1+c*f;p.push(v,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new tt(x,3)),this.setAttribute("normal",new tt(b,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ri extends Mt{constructor(e=.5,t=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let g=e;const d=(t-e)/i,p=new O,x=new Ne;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){const f=a+m/n*r;p.x=g*Math.cos(f),p.y=g*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,h.push(x.x,x.y)}g+=d}for(let b=0;b<i;b++){const m=b*(n+1);for(let f=0;f<n;f++){const _=f+m,v=_,y=_+n+1,w=_+n+2,T=_+1;o.push(v,y,T),o.push(y,w,T)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bt extends Mt{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],g=new O,d=new O,p=[],x=[],b=[],m=[];for(let f=0;f<=n;f++){const _=[],v=f/n,y=r+v*o,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w);let u=0;f===0&&r===0?u=.5/t:f===n&&l===Math.PI&&(u=-.5/t);for(let M=0;M<=t;M++){const C=M/t,R=i+C*a;g.x=-T*Math.cos(R),g.y=w,g.z=T*Math.sin(R),x.push(g.x,g.y,g.z),d.copy(g).normalize(),b.push(d.x,d.y,d.z),m.push(C+u,1-v),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){const v=h[f][_+1],y=h[f][_],w=h[f+1][_],T=h[f+1][_+1];(f!==0||r>0)&&p.push(v,y,T),(f!==n-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new tt(x,3)),this.setAttribute("normal",new tt(b,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class en extends Mt{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],g=[],d=new O,p=new O,x=new O;for(let b=0;b<=n;b++){const m=r+b/n*o;for(let f=0;f<=i;f++){const _=f/i*a;p.x=(e+t*Math.cos(m))*Math.cos(_),p.y=(e+t*Math.cos(m))*Math.sin(_),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),x.subVectors(p,d).normalize(),h.push(x.x,x.y,x.z),g.push(f/i),g.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=i;m++){const f=(i+1)*b+m-1,_=(i+1)*(b-1)+m-1,v=(i+1)*(b-1)+m,y=(i+1)*b+m;l.push(f,_,y),l.push(_,v,y)}this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ui(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Xo(i))i.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Xo(i[0])){const a=[];for(let r=0,o=i.length;r<o;r++)a[r]=i[r].clone();e[t][n]=a}else e[t][n]=i.slice();else e[t][n]=i}}return e}function kt(s){const e={};for(let t=0;t<s.length;t++){const n=Ui(s[t]);for(const i in n)e[i]=n[i]}return e}function Xo(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ld(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Id={clone:Ui,merge:kt};var Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(i.value);break;case"m4":this.uniforms[n].value=new et().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ud extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dr extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tn extends Dr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Pi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Pi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Od extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Fr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fd extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bd extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jr extends ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class kd extends Jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const za=new et,$o=new O,qo=new O;class nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;$o.setFromMatrixPosition(e.matrixWorld),t.position.copy($o),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(za,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=i?i.z/a.x:1,o=i?i.w/a.y:1,l=i?i.x/a.x:0,c=i?i.y/a.y:0;e.coordinateSystem===ss||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gs=new O,Hs=new Oi,un=new O;class ic extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gs,Hs,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Hs,un.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Gs,Hs,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Hs,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new O,Yo=new Ne,Ko=new Ne;class tn extends ic{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,Yo,Ko),t.subVectors(Ko,Yo)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Gd extends nc{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class sc extends Jr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ac extends ic{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hd extends nc{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zo extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Hd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ei=-90,bi=1;class Nr extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Ei,bi,e,t);i.layers=this.layers,this.add(i);const a=new tn(Ei,bi,e,t);a.layers=this.layers,this.add(a);const r=new tn(Ei,bi,e,t);r.layers=this.layers,this.add(r);const o=new tn(Ei,bi,e,t);o.layers=this.layers,this.add(o);const l=new tn(Ei,bi,e,t);l.layers=this.layers,this.add(l);const c=new tn(Ei,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,g=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(g,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class zd extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Jo extends Pd{constructor(e=10,t=10,n=4473924,i=8947848){n=new De(n),i=new De(i);const a=t/2,r=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,x=-o;d<=t;d++,x+=r){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const b=d===a?n:i;b.toArray(c,p),p+=3,b.toArray(c,p),p+=3,b.toArray(c,p),p+=3,b.toArray(c,p),p+=3}const h=new Mt;h.setAttribute("position",new tt(l,3)),h.setAttribute("color",new tt(c,3));const g=new Kr({vertexColors:!0,toneMapped:!1});super(h,g),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Qo(s,e,t,n){const i=Vd(n);switch(t){case Nl:return s*e;case zr:return s*e/i.components*i.byteLength;case Vr:return s*e/i.components*i.byteLength;case ti:return s*e*2/i.components*i.byteLength;case Wr:return s*e*2/i.components*i.byteLength;case Ul:return s*e*3/i.components*i.byteLength;case mn:return s*e*4/i.components*i.byteLength;case Xr:return s*e*4/i.components*i.byteLength;case Xs:case $s:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qs:case Ys:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tr:case ir:return Math.max(s,16)*Math.max(e,8)/4;case er:case nr:return Math.max(s,8)*Math.max(e,8)/2;case sr:case ar:case or:case lr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rr:case Zs:case cr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ur:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _r:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Mr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Er:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case br:case Tr:case wr:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ar:case Rr:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Js:case Cr:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vd(s){switch(s){case Yt:case Pl:return{byteLength:1,components:1};case is:case Ll:case vn:return{byteLength:2,components:1};case Gr:case Hr:return{byteLength:2,components:4};case _n:case kr:case ln:return{byteLength:4,components:1};case Il:case Dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Or}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Or);function rc(){let s=null,e=!1,t=null,n=null;function i(a,r){n=s.requestAnimationFrame(i),t(a,r)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function Wd(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,g=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,l,c){const h=l.array,g=l.updateRanges;if(s.bindBuffer(c,o),g.length===0)s.bufferSubData(c,0,h);else{g.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<g.length;p++){const x=g[d],b=g[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++d,g[d]=b)}g.length=d+1;for(let p=0,x=g.length;p<x;p++){const b=g[p];s.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}var Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,eh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,th=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ih=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ah=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ph=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ah=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ih=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Oh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$h=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,su=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ru=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Su=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Au=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ru=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Du=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ou=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ku=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qu=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ju=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ju=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ff=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ef=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Xd,alphahash_pars_fragment:$d,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:Kd,alphatest_pars_fragment:Zd,aomap_fragment:Jd,aomap_pars_fragment:Qd,batching_pars_vertex:jd,batching_vertex:eh,begin_vertex:th,beginnormal_vertex:nh,bsdfs:ih,iridescence_fragment:sh,bumpmap_pars_fragment:ah,clipping_planes_fragment:rh,clipping_planes_pars_fragment:oh,clipping_planes_pars_vertex:lh,clipping_planes_vertex:ch,color_fragment:dh,color_pars_fragment:hh,color_pars_vertex:uh,color_vertex:fh,common:ph,defaultnormal_vertex:mh,displacementmap_pars_vertex:gh,displacementmap_vertex:_h,emissivemap_fragment:vh,emissivemap_pars_fragment:xh,colorspace_fragment:Mh,colorspace_pars_fragment:Sh,envmap_fragment:yh,envmap_common_pars_fragment:Eh,envmap_pars_fragment:bh,envmap_pars_vertex:Th,envmap_physical_pars_fragment:Oh,envmap_vertex:wh,fog_vertex:Ah,fog_pars_vertex:Rh,fog_fragment:Ch,fog_pars_fragment:Ph,gradientmap_pars_fragment:Lh,lightmap_pars_fragment:Ih,lights_lambert_fragment:Dh,lights_lambert_pars_fragment:Nh,lights_pars_begin:Uh,lights_toon_fragment:Fh,lights_toon_pars_fragment:Bh,lights_phong_fragment:kh,lights_phong_pars_fragment:Gh,lights_physical_fragment:Hh,lights_physical_pars_fragment:zh,lights_fragment_begin:Vh,lights_fragment_maps:Wh,lights_fragment_end:Xh,lightprobes_pars_fragment:$h,logdepthbuf_fragment:qh,logdepthbuf_pars_fragment:Yh,logdepthbuf_pars_vertex:Kh,logdepthbuf_vertex:Zh,map_fragment:Jh,map_pars_fragment:Qh,map_particle_fragment:jh,map_particle_pars_fragment:eu,metalnessmap_fragment:tu,metalnessmap_pars_fragment:nu,morphinstance_vertex:iu,morphcolor_vertex:su,morphnormal_vertex:au,morphtarget_pars_vertex:ru,morphtarget_vertex:ou,normal_fragment_begin:lu,normal_fragment_maps:cu,normal_pars_fragment:du,normal_pars_vertex:hu,normal_vertex:uu,normalmap_pars_fragment:fu,clearcoat_normal_fragment_begin:pu,clearcoat_normal_fragment_maps:mu,clearcoat_pars_fragment:gu,iridescence_pars_fragment:_u,opaque_fragment:vu,packing:xu,premultiplied_alpha_fragment:Mu,project_vertex:Su,dithering_fragment:yu,dithering_pars_fragment:Eu,roughnessmap_fragment:bu,roughnessmap_pars_fragment:Tu,shadowmap_pars_fragment:wu,shadowmap_pars_vertex:Au,shadowmap_vertex:Ru,shadowmask_pars_fragment:Cu,skinbase_vertex:Pu,skinning_pars_vertex:Lu,skinning_vertex:Iu,skinnormal_vertex:Du,specularmap_fragment:Nu,specularmap_pars_fragment:Uu,tonemapping_fragment:Ou,tonemapping_pars_fragment:Fu,transmission_fragment:Bu,transmission_pars_fragment:ku,uv_pars_fragment:Gu,uv_pars_vertex:Hu,uv_vertex:zu,worldpos_vertex:Vu,background_vert:Wu,background_frag:Xu,backgroundCube_vert:$u,backgroundCube_frag:qu,cube_vert:Yu,cube_frag:Ku,depth_vert:Zu,depth_frag:Ju,distance_vert:Qu,distance_frag:ju,equirect_vert:ef,equirect_frag:tf,linedashed_vert:nf,linedashed_frag:sf,meshbasic_vert:af,meshbasic_frag:rf,meshlambert_vert:of,meshlambert_frag:lf,meshmatcap_vert:cf,meshmatcap_frag:df,meshnormal_vert:hf,meshnormal_frag:uf,meshphong_vert:ff,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:gf,meshtoon_vert:_f,meshtoon_frag:vf,points_vert:xf,points_frag:Mf,shadow_vert:Sf,shadow_frag:yf,sprite_vert:Ef,sprite_frag:bf},me={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},pn={basic:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:kt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:kt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new De(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:kt([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:kt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:kt([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:kt([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:kt([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:kt([me.lights,me.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};pn.physical={uniforms:kt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const zs={r:0,b:0,g:0},Tf=new et,oc=new ke;oc.set(-1,0,0,0,1,0,0,0,1);function wf(s,e,t,n,i,a){const r=new De(0);let o=i===!0?0:1,l,c,h=null,g=0,d=null;function p(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){const y=_.backgroundBlurriness>0;v=e.get(v,y)}return v}function x(_){let v=!1;const y=p(_);y===null?m(r,o):y&&y.isColor&&(m(y,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(_,v){const y=p(v);y&&y.isCubeTexture?(c===void 0&&(c=new ee(new _t(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Ui(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,u){this.matrixWorld.copyPosition(u.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tf.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(oc),c.material.toneMapped=qe.getTransfer(y.colorSpace)!==je,(h!==y||g!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,g=y.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ee(new ls(2,2),new ni({name:"BackgroundMaterial",uniforms:Ui(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=qe.getTransfer(y.colorSpace)!==je,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||g!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,g=y.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(zs,tc(s)),t.buffers.color.setClear(zs.r,zs.g,zs.b,v,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,v=1){r.set(_),o=v,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(r,o)},render:x,addToRenderList:b,dispose:f}}function Af(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let a=i,r=!1;function o(L,D,F,P,B){let q=!1;const z=g(L,P,F,D);a!==z&&(a=z,c(a.object)),q=p(L,P,F,B),q&&x(L,P,F,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,y(L,D,F,P),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function g(L,D,F,P){const B=P.wireframe===!0;let q=n[D.id];q===void 0&&(q={},n[D.id]=q);const z=L.isInstancedMesh===!0?L.id:0;let ne=q[z];ne===void 0&&(ne={},q[z]=ne);let W=ne[F.id];W===void 0&&(W={},ne[F.id]=W);let j=W[B];return j===void 0&&(j=d(l()),W[B]=j),j}function d(L){const D=[],F=[],P=[];for(let B=0;B<t;B++)D[B]=0,F[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:P,object:L,attributes:{},index:null}}function p(L,D,F,P){const B=a.attributes,q=D.attributes;let z=0;const ne=F.getAttributes();for(const W in ne)if(ne[W].location>=0){const te=B[W];let be=q[W];if(be===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),te===void 0||te.attribute!==be||be&&te.data!==be.data)return!0;z++}return a.attributesNum!==z||a.index!==P}function x(L,D,F,P){const B={},q=D.attributes;let z=0;const ne=F.getAttributes();for(const W in ne)if(ne[W].location>=0){let te=q[W];te===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const be={};be.attribute=te,te&&te.data&&(be.data=te.data),B[W]=be,z++}a.attributes=B,a.attributesNum=z,a.index=P}function b(){const L=a.newAttributes;for(let D=0,F=L.length;D<F;D++)L[D]=0}function m(L){f(L,0)}function f(L,D){const F=a.newAttributes,P=a.enabledAttributes,B=a.attributeDivisors;F[L]=1,P[L]===0&&(s.enableVertexAttribArray(L),P[L]=1),B[L]!==D&&(s.vertexAttribDivisor(L,D),B[L]=D)}function _(){const L=a.newAttributes,D=a.enabledAttributes;for(let F=0,P=D.length;F<P;F++)D[F]!==L[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function v(L,D,F,P,B,q,z){z===!0?s.vertexAttribIPointer(L,D,F,B,q):s.vertexAttribPointer(L,D,F,P,B,q)}function y(L,D,F,P){b();const B=P.attributes,q=F.getAttributes(),z=D.defaultAttributeValues;for(const ne in q){const W=q[ne];if(W.location>=0){let j=B[ne];if(j===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const te=j.normalized,be=j.itemSize,Oe=e.get(j);if(Oe===void 0)continue;const Z=Oe.buffer,ge=Oe.type,Se=Oe.bytesPerElement,Re=ge===s.INT||ge===s.UNSIGNED_INT||j.gpuType===kr;if(j.isInterleavedBufferAttribute){const ve=j.data,Be=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,pt=j.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Le=0;Le<W.locationSize;Le++)f(W.location+Le,ve.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Le=0;Le<W.locationSize;Le++)m(W.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Le=0;Le<W.locationSize;Le++)v(W.location+Le,be/W.locationSize,ge,te,Be*Se,(pt+be/W.locationSize*Le)*Se,Re)}else{if(j.isInstancedBufferAttribute){for(let ve=0;ve<W.locationSize;ve++)f(W.location+ve,j.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<W.locationSize;ve++)m(W.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let ve=0;ve<W.locationSize;ve++)v(W.location+ve,be/W.locationSize,ge,te,be*Se,be/W.locationSize*ve*Se,Re)}}else if(z!==void 0){const te=z[ne];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(W.location,te);break;case 3:s.vertexAttrib3fv(W.location,te);break;case 4:s.vertexAttrib4fv(W.location,te);break;default:s.vertexAttrib1fv(W.location,te)}}}}_()}function w(){C();for(const L in n){const D=n[L];for(const F in D){const P=D[F];for(const B in P){const q=P[B];for(const z in q)h(q[z].object),delete q[z];delete P[B]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const F in D){const P=D[F];for(const B in P){const q=P[B];for(const z in q)h(q[z].object),delete q[z];delete P[B]}}delete n[L.id]}function u(L){for(const D in n){const F=n[D];for(const P in F){const B=F[P];if(B[L.id]===void 0)continue;const q=B[L.id];for(const z in q)h(q[z].object),delete q[z];delete B[L.id]}}}function M(L){for(const D in n){const F=n[D],P=L.isInstancedMesh===!0?L.id:0,B=F[P];if(B!==void 0){for(const q in B){const z=B[q];for(const ne in z)h(z[ne].object),delete z[ne];delete B[q]}delete F[P],Object.keys(F).length===0&&delete n[D]}}}function C(){R(),r=!0,a!==i&&(a=i,c(a.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:u,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function Rf(s,e,t){let n;function i(l){n=l}function a(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,n,1)}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Cf(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const u=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(u){return!(u!==mn&&n.convert(u)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(u){const M=u===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==Yt&&u!==ln&&!M&&n.convert(u)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(u){if(u==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:g,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,maxSamples:w,samples:T}}function Pf(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new kn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){const p=g.length!==0||d||n!==0||i;return i=d,n=g.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,d){t=h(g,d,0)},this.setState=function(g,d,p){const x=g.clippingPlanes,b=g.clipIntersection,m=g.clipShadows,f=s.get(g);if(!i||x===null||x.length===0||a&&!m)a?h(null):c();else{const _=a?0:n,v=_*4;let y=f.clippingState||null;l.value=y,y=h(x,d,v,p);for(let w=0;w!==v;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(g,d,p,x){const b=g!==null?g.length:0;let m=null;if(b!==0){if(m=l.value,x!==!0||m===null){const f=p+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==b;++v,y+=4)r.copy(g[v]).applyMatrix4(_,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}class Qr extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ql(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _t(5,5,5),a=new ni({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Ci});a.uniforms.tEquirect.value=t;const r=new ee(i,a),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Wt),new Nr(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}const jo=256,Lf=3,If=20,lc=256,cc=16,Df=3,Nf=new O,Uf=new De;class rs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Nr(1,10,null),this._boxMesh=new ee(new _t(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,a={}){const{size:r=256,position:o=Nf}=a,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const g=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,x=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(Uf));const m=new Nr(n,i,h);return m.position.copy(o),m.update(l,e),l.autoClear=g,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=x,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(jo,ad(e))}_fromTexture(e,t){e.mapping===Ii||e.mapping===ns?this._setSize(e.image.length===0?jo:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=el(e,!1,!1),n=Math.log2(e)-Lf;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=el(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,a=this._cubeCamera;i.material=n,a.renderTarget=e,a.activeMipmapLevel=t;const r=e.width>>t;e.viewport.set(0,0,r,r),a.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ii||e.mapping===ns?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=tl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Of(),this._integrationMaterial=Ff());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/cc);for(let r=0;r<=n;r++){const o=rs.lodToRoughness(r,n);if(r>n-Df)a.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(lc*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Bf());const n=this._blurMaterial,i=n.uniforms,a=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=a.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(a,0,n)}}function el(s,e,t){return new Qr(s,{minFilter:Hn,generateMipmaps:e,type:vn,colorSpace:js,depthBuffer:t})}function cs(s,e,t){return new ni({name:s,uniforms:e,vertexShader:ze.cube_vert,fragmentShader:t,side:Ht,blending:Ci,depthTest:!1,depthWrite:!1})}function Of(){return cs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ff(){return cs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Bf(){return cs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${If}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function tl(){return cs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function nl(){return cs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function kf(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,p=!1){return d==null?null:p?r(d):a(d)}function a(d){if(d&&d.isTexture){const p=d.mapping;if(p===pa||p===ma)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const b=new Qr(x.height);return b.fromEquirectangularTexture(s,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,x=p===pa||p===ma,b=p===Ii||p===ns;if(x||b){let m=t.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new rs(s)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return x&&_&&_.height>0||b&&_&&l(_)?(n===null&&(n=new rs(s)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===pa?d.mapping=Ii:p===ma&&(d.mapping=ns),d}function l(d){let p=0;const x=6;for(let b=0;b<x;b++)d[b]!==void 0&&p++;return p===x}function c(d){const p=d.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:g}}function Gf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Pi("WebGLRenderer: "+n+" extension not supported."),i}}}function Hf(s,e,t,n){const i={},a=new WeakMap,r=new FinalizationRegistry(x=>delete i[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(const m in x.attributes)e.remove(x.attributes[m]);x.removeEventListener("dispose",o),delete i[x.id],r.unregister(x);const b=a.get(x);b&&(e.remove(b),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,b){return i[b.id]!==void 0||(b.addEventListener("dispose",o),i[b.id]=new WeakRef(b),r.register(b,b.id,b),t.memory.geometries++),b}function h(x){const b=x.attributes;for(const m in b)e.update(b[m],s.ARRAY_BUFFER)}function g(x){const b=x.index,m=x.attributes.position;let f=0;if(m===void 0)return;const _=b!==null?b.array.length:m.array.length/3-1,v=m.count>=65535?Yl:ql,y=new v(Math.ceil(_/3)*6,1),w=y.array;if(b!==null){const u=b.array;f=b.version;for(let M=0,C=0;M<_;M+=3){const R=u[M+0],L=u[M+1],D=u[M+2];w[C++]=R,w[C++]=L,w[C++]=L,w[C++]=D,w[C++]=D,w[C++]=R}}else{f=m.version;for(let u=0,M=0;u<_;u+=3){const C=u+0,R=u+1,L=u+2;w[M++]=C,w[M++]=R,w[M++]=R,w[M++]=L,w[M++]=L,w[M++]=C}}y.version=f;const T=a.get(x);T&&e.remove(T),a.set(x,y)}function d(x){const b=a.get(x);if(b){const m=x.index;m!==null&&b.version<m.version&&g(x)}else g(x);return a.get(x)}function p(){for(const x in i){const b=i[x].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function zf(s,e,t){let n;function i(g){n=g}let a,r;function o(g){a=g.type,r=g.bytesPerElement}function l(g,d){s.drawElements(n,d,a,g*r),t.update(d,n,1)}function c(g,d,p){p!==0&&(s.drawElementsInstanced(n,d,a,g*r,p),t.update(d,n,p))}function h(g,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,g,0,p);let b=0;for(let m=0;m<p;m++)b+=d[m];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:Ke("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wf(s,e,t){const n=new WeakMap,i=new ut;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==g){let R=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var p=R;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),b===!0&&(y=2),m===!0&&(y=3);let w=o.attributes.position.count*y,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const u=new Float32Array(w*T*4*g),M=new Vl(u,w,T,g);M.type=ln,M.needsUpdate=!0;const C=y*4;for(let L=0;L<g;L++){const D=f[L],F=_[L],P=v[L],B=w*T*4*L;for(let q=0;q<D.count;q++){const z=q*C;x===!0&&(i.fromBufferAttribute(D,q),u[B+z+0]=i.x,u[B+z+1]=i.y,u[B+z+2]=i.z,u[B+z+3]=0),b===!0&&(i.fromBufferAttribute(F,q),u[B+z+4]=i.x,u[B+z+5]=i.y,u[B+z+6]=i.z,u[B+z+7]=0),m===!0&&(i.fromBufferAttribute(P,q),u[B+z+8]=i.x,u[B+z+9]=i.y,u[B+z+10]=i.z,u[B+z+11]=P.itemSize===4?i.w:1)}}d={count:g,texture:M,size:new Ne(w,T)},n.set(o,d),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const b=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(s,"morphTargetBaseInfluence",b),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function Xf(s,e,t,n,i){let a=new WeakMap;function r(c){const h=i.render.frame,g=c.geometry,d=e.get(c,g);if(a.get(d)!==h&&(e.update(d),a.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;a.get(p)!==h&&(p.update(),a.set(p,h))}return d}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const $f={[El]:"LINEAR_TONE_MAPPING",[bl]:"REINHARD_TONE_MAPPING",[Tl]:"CINEON_TONE_MAPPING",[Br]:"ACES_FILMIC_TONE_MAPPING",[Al]:"AGX_TONE_MAPPING",[Rl]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function qf(s,e,t,n,i,a){const r=new gn(e,t,{type:s,depthBuffer:i,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Mt;h.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tt([0,2,0,0,2,0],2));const g=new Ud({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ee(h,g),p=new ac(-1,1,1,-1,0,1);let x=null,b=null,m=!1,f,_=null,v=[],y=!1;this.setSize=function(w,T){r.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let u=0;u<v.length;u++){const M=v[u];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){v=w,y=v.length>0&&v[0].isRenderPass===!0;const T=r.width,u=r.height;v.length>0&&o===null&&(o=new gn(T,u,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(T,u,{type:vn,depthBuffer:!1,stencilBuffer:!1}));const M=i===!0&&v.some(C=>C.needsDepthTexture===!0);M!==(r.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ni(T,u),a===!0&&(c.format=zn,c.type=Di)),r.dispose(),r.depthTexture=M?c:null,r.resolveDepthBuffer=M,r.storeMultisampledDepthBuffer=M);for(let C=0;C<v.length;C++){const R=v[C];R.setSize&&R.setSize(T,u),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===Rn&&v.length===0)return!1;if(_=T,T!==null){const u=T.width,M=T.height;(r.width!==u||r.height!==M)&&this.setSize(u,M)}return y===!1&&w.setRenderTarget(r),f=w.toneMapping,w.toneMapping=Rn,!0},this.hasRenderPass=function(){return y},this.end=function(w,T){w.toneMapping=f,m=!0;let u=r,M=o;for(let C=0;C<v.length;C++){const R=v[C];R.enabled!==!1&&(R.render(w,M,u,T),R.needsSwap!==!1&&(u=M,M=M===o?l:o))}if(x!==w.outputColorSpace||b!==w.toneMapping){x=w.outputColorSpace,b=w.toneMapping,g.defines={},qe.getTransfer(x)===je&&(g.defines.SRGB_TRANSFER="");const C=$f[b];C&&(g.defines[C]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=u.texture,w.setRenderTarget(_),w.render(d,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),g.dispose()}}const dc=new Ut,hc=new Ni(1,1),uc=new jl(1),fc=new Vl,pc=new hd,mc=new Ql,il=[],sl=[],al=new Float32Array(16),rl=new Float32Array(9),ol=new Float32Array(4);function Fi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=il[i];if(a===void 0&&(a=new Float32Array(i),il[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ca(s,e){let t=sl[e];t===void 0&&(t=new Int32Array(e),sl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Yf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),yt(t,e)}}function Zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),yt(t,e)}}function Jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),yt(t,e)}}function Qf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(St(t,n))return;ol.set(n),s.uniformMatrix2fv(this.addr,!1,ol),yt(t,n)}}function jf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(St(t,n))return;rl.set(n),s.uniformMatrix3fv(this.addr,!1,rl),yt(t,n)}}function ep(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(St(t,n))return;al.set(n),s.uniformMatrix4fv(this.addr,!1,al),yt(t,n)}}function tp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),yt(t,e)}}function ip(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),yt(t,e)}}function sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),yt(t,e)}}function ap(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),yt(t,e)}}function op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),yt(t,e)}}function lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),yt(t,e)}}function da(s){return s.version===0&&(s.compareFunction=Bl,s.needsUpdate=!0),s}function cp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?a=da(hc):a=dc,t.setTexture2D(e||a,i)}function dp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pc,i)}function hp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_CUBE_SHADOW?a=da(uc):a=mc,t.setTextureCube(e||a,i)}function up(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fc,i)}function fp(s){switch(s){case 5126:return Yf;case 35664:return Kf;case 35665:return Zf;case 35666:return Jf;case 35674:return Qf;case 35675:return jf;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return sp;case 5125:return ap;case 36294:return rp;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}function pp(s,e){s.uniform1fv(this.addr,e)}function mp(s,e){const t=Fi(e,this.size,2);s.uniform2fv(this.addr,t)}function gp(s,e){const t=Fi(e,this.size,3);s.uniform3fv(this.addr,t)}function _p(s,e){const t=Fi(e,this.size,4);s.uniform4fv(this.addr,t)}function vp(s,e){const t=Fi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xp(s,e){const t=Fi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mp(s,e){const t=Fi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Sp(s,e){s.uniform1iv(this.addr,e)}function yp(s,e){s.uniform2iv(this.addr,e)}function Ep(s,e){s.uniform3iv(this.addr,e)}function bp(s,e){s.uniform4iv(this.addr,e)}function Tp(s,e){s.uniform1uiv(this.addr,e)}function wp(s,e){s.uniform2uiv(this.addr,e)}function Ap(s,e){s.uniform3uiv(this.addr,e)}function Rp(s,e){s.uniform4uiv(this.addr,e)}function Cp(s,e,t){const n=this.cache,i=e.length,a=ca(t,i);St(n,a)||(s.uniform1iv(this.addr,a),yt(n,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=da(hc):r=dc;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,a[o])}function Pp(s,e,t){const n=this.cache,i=e.length,a=ca(t,i);St(n,a)||(s.uniform1iv(this.addr,a),yt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||pc,a[r])}function Lp(s,e,t){const n=this.cache,i=e.length,a=ca(t,i);St(n,a)||(s.uniform1iv(this.addr,a),yt(n,a));let r;this.type===s.SAMPLER_CUBE_SHADOW?r=da(uc):r=mc;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||r,a[o])}function Ip(s,e,t){const n=this.cache,i=e.length,a=ca(t,i);St(n,a)||(s.uniform1iv(this.addr,a),yt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||fc,a[r])}function Dp(s){switch(s){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return vp;case 35675:return xp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return yp;case 35668:case 35672:return Ep;case 35669:case 35673:return bp;case 5125:return Tp;case 36294:return wp;case 36295:return Ap;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Ip}}class Np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fp(t.type)}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dp(t.type)}}class Op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function ll(s,e){s.seq.push(e),s.map[e.id]=e}function Fp(s,e,t){const n=s.name,i=n.length;for(Va.lastIndex=0;;){const a=Va.exec(n),r=Va.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){ll(t,c===void 0?new Np(o,s,e):new Up(o,s,e));break}else{let g=t.map[o];g===void 0&&(g=new Op(o),ll(t,g)),t=g}}}class Ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);Fp(o,l,this)}const i=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):a.push(r);i.length>0&&(this.seq=i.concat(a))}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function cl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Bp=37297;let kp=0;function Gp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const dl=new ke;function Hp(s){qe._getMatrix(dl,qe.workingColorSpace,s);const e=`mat3( ${dl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case ea:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Gp(s.getShaderSource(e),o)}else return a}function zp(s,e){const t=Hp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Vp={[El]:"Linear",[bl]:"Reinhard",[Tl]:"Cineon",[Br]:"ACESFilmic",[Al]:"AgX",[Rl]:"Neutral",[wl]:"Custom"};function Wp(s,e){const t=Vp[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new O;function Xp(){qe.getLuminanceCoefficients(Vs);const s=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $p(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function qp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Qi(s){return s!==""}function ul(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function fl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ur(s){return s.replace(Kp,Zp)}function Zp(s,e){const t=ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ur(t)}const Jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(s){return s.replace(Jp,Qp)}function Qp(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function ml(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jp={[Ws]:"SHADOWMAP_TYPE_PCF",[Zi]:"SHADOWMAP_TYPE_VSM"};function em(s){return jp[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tm={[ns]:"ENVMAP_MODE_REFRACTION"};function nm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":tm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const im={[Fr]:"ENVMAP_BLENDING_MULTIPLY",[Vc]:"ENVMAP_BLENDING_MIX",[Wc]:"ENVMAP_BLENDING_ADD"};function sm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":im[s.combine]||"ENVMAP_BLENDING_NONE"}function am(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=em(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=nm(t),g=sm(t),d=$p(t),p=qp(a),x=i.createProgram();let b,m,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qi).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qi).join(`
`),m.length>0&&(m+=`
`)):(b=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),m=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,zp("linearToOutputTexel",t.outputColorSpace),Xp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),r=Ur(r),r=ul(r,t),r=fl(r,t),o=Ur(o),o=ul(o,t),o=fl(o,t),r=pl(r),o=pl(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",t.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=f+b+r,v=f+m+o,y=cl(i,i.VERTEX_SHADER,_),w=cl(i,i.FRAGMENT_SHADER,v);i.attachShader(x,y),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(R){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(x)||"",D=i.getShaderInfoLog(y)||"",F=i.getShaderInfoLog(w)||"",P=L.trim(),B=D.trim(),q=F.trim();let z=!0,ne=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,y,w);else{const W=hl(i,y,"vertex"),j=hl(i,w,"fragment");Ke("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+W+`
`+j)}else P!==""?Ie("WebGLProgram: Program Info Log:",P):(B===""||q==="")&&(ne=!1);ne&&(R.diagnostics={runnable:z,programLog:P,vertexShader:{log:B,prefix:b},fragmentShader:{log:q,prefix:m}})}i.deleteShader(y),i.deleteShader(w),u=new Ks(i,x),M=Yp(i,x)}let u;this.getUniforms=function(){return u===void 0&&T(this),u};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,Bp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=w,this}let rm=0;class om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lm(e),t.set(e,n)),n}}class lm{constructor(e){this.id=rm++,this.code=e,this.usedTimes=0}}function cm(s){return s===ti||s===Zs||s===Js}function dm(s,e,t,n,i,a){const r=new Wl,o=new om,l=new Set,c=[],h=new Map,g=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(u){return l.add(u),u===0?"uv":`uv${u}`}function x(u,M,C,R,L,D){const F=R.fog,P=L.geometry,B=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?R.environment:null,q=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap,z=e.get(u.envMap||B,q),ne=d[u.type];let W=n.precision;u.precision!==null&&(W=n.getMaxPrecision(u.precision),W!==u.precision&&Ie("WebGLProgram.getParameters:",u.precision,"not supported, using",W,"instead."));const j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=j!==void 0?j.length:0;let be=0;P.morphAttributes.position!==void 0&&(be=1),P.morphAttributes.normal!==void 0&&(be=2),P.morphAttributes.color!==void 0&&(be=3);let Oe,Z,ge,Se;if(ne){const pe=pn[ne];Oe=pe.vertexShader,Z=pe.fragmentShader}else{Oe=u.vertexShader,Z=u.fragmentShader;const pe=o.getVertexShaderStage(u),Qe=o.getFragmentShaderStage(u);o.update(u,pe,Qe),ge=pe.id,Se=Qe.id}const Re=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,pt=L.isBatchedMesh===!0,Le=!!u.map,Je=!!u.matcap,nt=!!z,Ve=nt&&z.isPMREMTexture===!0,At=!!u.aoMap,vt=!!u.lightMap,zt=!!u.bumpMap&&u.wireframe===!1,lt=!!u.normalMap,hn=!!u.displacementMap,Et=!!u.emissiveMap,Kt=!!u.metalnessMap,Zt=!!u.roughnessMap,Jt=u.anisotropy>0,U=u.clearcoat>0,Qt=u.diffuseRoughness>0,at=u.dispersion>0,rt=u.retroreflectivity>0,fe=u.iridescence>0,xt=u.sheen>0,Ce=u.transmission>0,Ue=Jt&&!!u.anisotropyMap,A=U&&!!u.clearcoatMap,S=U&&!!u.clearcoatNormalMap,G=U&&!!u.clearcoatRoughnessMap,ie=Qt&&!!u.diffuseRoughnessMap,Q=fe&&!!u.iridescenceMap,re=fe&&!!u.iridescenceThicknessMap,he=xt&&!!u.sheenColorMap,Y=xt&&!!u.sheenRoughnessMap,K=!!u.specularMap,le=!!u.specularColorMap,I=!!u.specularIntensityMap,J=Ce&&!!u.transmissionMap,X=Ce&&!!u.thicknessMap,ce=!!u.gradientMap,ae=!!u.alphaMap,oe=u.alphaTest>0,we=!!u.alphaHash,He=!!u.extensions;let se=Rn;u.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(se=s.toneMapping);const Ae=Ve?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ge={shaderID:ne,shaderType:u.type,shaderName:u.name,vertexShader:Oe,fragmentShader:Z,defines:u.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:W,batching:pt,batchingColor:pt&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!u.alphaToCoverage,map:Le,matcap:Je,envMap:nt,envMapMode:nt&&z.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Ae.length-1:null,envMapSize:Ve?Ae[0].width:null,aoMap:At,lightMap:vt,bumpMap:zt,normalMap:lt,displacementMap:hn,emissiveMap:Et,normalMapObjectSpace:lt&&u.normalMapType===qc,normalMapTangentSpace:lt&&u.normalMapType===Qs,packedNormalMap:lt&&u.normalMapType===Qs&&cm(u.normalMap.format),metalnessMap:Kt,roughnessMap:Zt,anisotropy:Jt,anisotropyMap:Ue,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:G,diffuseRoughness:Qt,diffuseRoughnessMap:ie,dispersion:at,retroreflection:rt,iridescence:fe,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:xt,sheenColorMap:he,sheenRoughnessMap:Y,specularMap:K,specularColorMap:le,specularIntensityMap:I,transmission:Ce,transmissionMap:J,thicknessMap:X,gradientMap:ce,opaque:u.transparent===!1&&u.blending===ji&&u.alphaToCoverage===!1,alphaMap:ae,alphaTest:oe,alphaHash:we,combine:u.combine,mapUv:Le&&p(u.map.channel),aoMapUv:At&&p(u.aoMap.channel),lightMapUv:vt&&p(u.lightMap.channel),bumpMapUv:zt&&p(u.bumpMap.channel),normalMapUv:lt&&p(u.normalMap.channel),displacementMapUv:hn&&p(u.displacementMap.channel),emissiveMapUv:Et&&p(u.emissiveMap.channel),metalnessMapUv:Kt&&p(u.metalnessMap.channel),roughnessMapUv:Zt&&p(u.roughnessMap.channel),anisotropyMapUv:Ue&&p(u.anisotropyMap.channel),clearcoatMapUv:A&&p(u.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(u.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&p(u.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&p(u.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&p(u.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(u.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(u.sheenColorMap.channel),sheenRoughnessMapUv:Y&&p(u.sheenRoughnessMap.channel),specularMapUv:K&&p(u.specularMap.channel),specularColorMapUv:le&&p(u.specularColorMap.channel),specularIntensityMapUv:I&&p(u.specularIntensityMap.channel),transmissionMapUv:J&&p(u.transmissionMap.channel),thicknessMapUv:X&&p(u.thicknessMap.channel),alphaMapUv:ae&&p(u.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(lt||Jt),vertexNormals:!!P.attributes.normal,vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(Le||ae),fog:!!F,useFog:u.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:u.wireframe===!1&&(u.flatShading===!0||P.attributes.normal===void 0&&lt===!1&&(u.isMeshLambertMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isMeshPhysicalMaterial)),sizeAttenuation:u.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ve,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:be,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(pe=>pe.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:u.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:Le&&u.map.isVideoTexture===!0&&qe.getTransfer(u.map.colorSpace)===je,decodeVideoTextureEmissive:Et&&u.emissiveMap.isVideoTexture===!0&&qe.getTransfer(u.emissiveMap.colorSpace)===je,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===Gt,flipSided:u.side===Ht,useDepthPacking:u.depthPacking>=0,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionClipCullDistance:He&&u.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&u.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:u.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function b(u){const M=[];if(u.shaderID?M.push(u.shaderID):(M.push(u.customVertexShaderID),M.push(u.customFragmentShaderID)),u.defines!==void 0)for(const C in u.defines)M.push(C),M.push(u.defines[C]);return u.isRawShaderMaterial===!1&&(m(M,u),f(M,u),M.push(s.outputColorSpace)),M.push(u.customProgramCacheKey),M.join()}function m(u,M){u.push(M.precision),u.push(M.outputColorSpace),u.push(M.envMapMode),u.push(M.envMapPMREM),u.push(M.envMapMaxLod),u.push(M.envMapSize),u.push(M.mapUv),u.push(M.alphaMapUv),u.push(M.lightMapUv),u.push(M.aoMapUv),u.push(M.bumpMapUv),u.push(M.normalMapUv),u.push(M.displacementMapUv),u.push(M.emissiveMapUv),u.push(M.metalnessMapUv),u.push(M.roughnessMapUv),u.push(M.anisotropyMapUv),u.push(M.clearcoatMapUv),u.push(M.clearcoatNormalMapUv),u.push(M.clearcoatRoughnessMapUv),u.push(M.diffuseRoughnessMapUv),u.push(M.iridescenceMapUv),u.push(M.iridescenceThicknessMapUv),u.push(M.sheenColorMapUv),u.push(M.sheenRoughnessMapUv),u.push(M.specularMapUv),u.push(M.specularColorMapUv),u.push(M.specularIntensityMapUv),u.push(M.transmissionMapUv),u.push(M.thicknessMapUv),u.push(M.combine),u.push(M.fogExp2),u.push(M.sizeAttenuation),u.push(M.morphTargetsCount),u.push(M.numSunLights),u.push(M.numDirLights),u.push(M.numPointLights),u.push(M.numSpotLights),u.push(M.numSpotLightMaps),u.push(M.numHemiLights),u.push(M.numRectAreaLights),u.push(M.numSunLightShadows),u.push(M.numDirLightShadows),u.push(M.numPointLightShadows),u.push(M.numSpotLightShadows),u.push(M.numSpotLightShadowsWithMaps),u.push(M.numLightProbes),u.push(M.numLightProbeGrids),u.push(M.shadowMapType),u.push(M.toneMapping),u.push(M.numClippingPlanes),u.push(M.numClipIntersection),u.push(M.depthPacking)}function f(u,M){r.disableAll(),M.instancing&&r.enable(0),M.instancingColor&&r.enable(1),M.instancingMorph&&r.enable(2),M.matcap&&r.enable(3),M.envMap&&r.enable(4),M.normalMapObjectSpace&&r.enable(5),M.normalMapTangentSpace&&r.enable(6),M.clearcoat&&r.enable(7),M.iridescence&&r.enable(8),M.alphaTest&&r.enable(9),M.vertexColors&&r.enable(10),M.vertexAlphas&&r.enable(11),M.vertexUv1s&&r.enable(12),M.vertexUv2s&&r.enable(13),M.vertexUv3s&&r.enable(14),M.vertexTangents&&r.enable(15),M.anisotropy&&r.enable(16),M.alphaHash&&r.enable(17),M.batching&&r.enable(18),M.dispersion&&r.enable(19),M.retroreflection&&r.enable(24),M.diffuseRoughness&&r.enable(25),M.batchingColor&&r.enable(20),M.gradientMap&&r.enable(21),M.packedNormalMap&&r.enable(22),M.vertexNormals&&r.enable(23),u.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reversedDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),M.numLightProbeGrids>0&&r.enable(22),M.hasPositionAttribute&&r.enable(23),u.push(r.mask)}function _(u){const M=d[u.type];let C;if(M){const R=pn[M];C=Id.clone(R.uniforms)}else C=u.uniforms;return C}function v(u,M){let C=h.get(M);return C!==void 0?++C.usedTimes:(C=new am(s,M,u,i),c.push(C),h.set(M,C)),C}function y(u){if(--u.usedTimes===0){const M=c.indexOf(u);c[M]=c[c.length-1],c.pop(),h.delete(u.cacheKey),u.destroy()}}function w(u){o.remove(u)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:b,getUniforms:_,acquireProgram:v,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:T}}function hm(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function um(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function gl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _l(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,x,b,m,f){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:p,material:x,materialVariant:r(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:f},s[e]=_):(_.id=d.id,_.object=d,_.geometry=p,_.material=x,_.materialVariant=r(d),_.groupOrder=b,_.renderOrder=d.renderOrder,_.z=m,_.group=f),e++,_}function l(d,p,x,b,m,f,_){_.reversedDepth===!0&&(m=-m);const v=o(d,p,x,b,m,f);x.transmission>0?n.push(v):x.transparent===!0?i.push(v):t.push(v)}function c(d,p,x,b,m,f){const _=o(d,p,x,b,m,f);x.transmission>0?n.unshift(_):x.transparent===!0?i.unshift(_):t.unshift(_)}function h(d,p){t.length>1&&t.sort(d||um),n.length>1&&n.sort(p||gl),i.length>1&&i.sort(p||gl)}function g(){for(let d=e,p=s.length;d<p;d++){const x=s[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:l,unshift:c,finish:g,sort:h}}function fm(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new _l,s.set(n,[r])):i>=a.length?(r=new _l,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function pm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new De};break;case"SpotLight":t={position:new O,direction:new O,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function mm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gm=0;function _m(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vm(s){const e=new pm,t=mm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,a=new et,r=new et;function o(c){let h=0,g=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,x=0,b=0,m=0,f=0,_=0,v=0,y=0,w=0,T=0,u=0,M=0,C=0,R=0;c.sort(_m);for(let D=0,F=c.length;D<F;D++){const P=c[D],B=P.color,q=P.intensity,z=P.distance;let ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ti?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*q,g+=B.g*q,d+=B.b*q;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],q);R++}else if(P.isSunLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,te=t.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[x]=te,n.sunShadowMap[x]=ne;const be=j.getViewportCount();for(let Oe=0;Oe<be;Oe++)n.sunShadowMatrix[b+Oe]=j.getMatrix(Oe),n.sunShadowCascade[b+Oe]=j._cascadeData[Oe];b+=be,x++}n.sun[p]=W,p++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,te=t.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=P.shadow.matrix,w++}n.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(B).multiplyScalar(q),W.distance=z,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const j=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,j.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=j.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.spotShadow[_]=te,n.spotShadowMap[_]=ne,u++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(B).multiplyScalar(q),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=W,v++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const j=P.shadow,te=t.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,n.pointShadow[f]=te,n.pointShadowMap[f]=ne,n.pointShadowMatrix[f]=P.shadow.matrix,T++}n.point[f]=W,f++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(q),W.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[y]=W,y++}}v>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=g,n.ambient[2]=d;const L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==_||L.rectAreaLength!==v||L.hemiLength!==y||L.numSunShadows!==x||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==u||L.numSpotMaps!==M||L.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=_,n.rectArea.length=v,n.point.length=f,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=u,n.spotShadowMap.length=u,n.spotLightMatrix.length=u+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=_,L.rectAreaLength=v,L.hemiLength=y,L.numSunShadows=x,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=u,L.numSpotMaps=M,L.numLightProbes=R,n.version=gm++)}function l(c,h){let g=0,d=0,p=0,x=0,b=0,m=0;const f=h.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isSunLight){const w=n.sun[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),g++}else if(y.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(f),d++}else if(y.isSpotLight){const w=n.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const w=n.rectArea[b];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),r.identity(),a.copy(y.matrixWorld),a.premultiply(f),r.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function vl(s){const e=new vm(s),t=[],n=[],i=[];function a(g){h.camera=g,t.length=0,n.length=0,i.length=0}function r(g){g.isLightProbeGrid?i.push(g):t.push(g)}function o(g){n.push(g)}function l(){e.setup(t),i.sort((g,d)=>g.priority-d.priority||g.id-d.id)}function c(g){e.setupView(t,g)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function xm(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new vl(s),e.set(i,[o])):a>=r.length?(o=new vl(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ym=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Em=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],xl=new et,Ki=new O,Wa=new O;function bm(s,e,t){let n=new as;const i=new Ne,a=new Ne,r=new ut,o=new Fd,l=new Bd,c={},h=t.maxTextureSize,g={[ei]:Ht,[Ht]:ei,[Gt]:Gt},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Mm,fragmentShader:Sm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Mt;x.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ee(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let f=this.type;this.render=function(T,u,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ml&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ws);const C=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=f!==this.type;F&&u.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=T.length;P<B;P++){const q=T[P],z=q.shadow;if(z===void 0){Ie("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ne=z.getFrameExtents();i.multiply(ne),a.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/ne.x),i.x=a.x*ne.x,z.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/ne.y),i.y=a.y*ne.y,z.mapSize.y=a.y));const W=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Zi){if(q.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new gn(i.x,i.y,{format:ti,type:vn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Ni(i.x,i.y,ln),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Wn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Pt,z.map.depthTexture.magFilter=Pt}else q.isPointLight?(z.map=new Qr(i.x),z.map.depthTexture=new jl(i.x,_n)):(z.map=new gn(i.x,i.y),z.map.depthTexture=new Ni(i.x,i.y,_n)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Wn,this.type===Ws?(z.map.depthTexture.compareFunction=W?Fl:Ol,z.map.depthTexture.minFilter=Wt,z.map.depthTexture.magFilter=Wt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Pt,z.map.depthTexture.magFilter=Pt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);const j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,M);const te=z.camera.layers.mask&4294967294?z.camera.layers:M.layers;for(let be=0;be<j;be++){const Oe=z.getCamera(be);if(q.isPointLight){const Z=z.camera,ge=z.matrix,Se=q.distance||Z.far;Se!==Z.far&&(Z.far=Se,Z.updateProjectionMatrix()),Ki.setFromMatrixPosition(q.matrixWorld),Z.position.copy(Ki),Wa.copy(Z.position),Wa.add(ym[be]),Z.up.copy(Em[be]),Z.lookAt(Wa),Z.updateMatrixWorld(),ge.makeTranslation(-Ki.x,-Ki.y,-Ki.z),xl.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z._frustum.setFromProjectionMatrix(xl,Z.coordinateSystem,Z.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,be),s.clear();else{be===0&&(s.setRenderTarget(z.map),s.clear());const Z=z.getViewport(be);r.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),D.viewport(r)}n=z.getFrustum(be),y(u,M,Oe,q,te,this.type)}z.isPointLightShadow!==!0&&this.type===Zi&&_(z,M),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(C,R,L)};function _(T,u){const M=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new gn(i.x,i.y,{format:ti,type:vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(u,null,M,d,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(u,null,M,p,b,null)}function v(T,u,M,C){let R=null;const L=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)R=L;else if(R=M.isPointLight===!0?l:o,s.localClippingEnabled&&u.clipShadows===!0&&Array.isArray(u.clippingPlanes)&&u.clippingPlanes.length!==0||u.displacementMap&&u.displacementScale!==0||u.alphaMap&&u.alphaTest>0||u.map&&u.alphaTest>0||u.alphaToCoverage===!0){const D=R.uuid,F=u.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let B=P[F];B===void 0&&(B=R.clone(),P[F]=B,u.addEventListener("dispose",w)),R=B}if(R.visible=u.visible,R.wireframe=u.wireframe,C===Zi?R.side=u.shadowSide!==null?u.shadowSide:u.side:R.side=u.shadowSide!==null?u.shadowSide:g[u.side],R.alphaMap=u.alphaMap,R.alphaTest=u.alphaToCoverage===!0?.5:u.alphaTest,R.map=u.map,R.clipShadows=u.clipShadows,R.clippingPlanes=u.clippingPlanes,R.clipIntersection=u.clipIntersection,R.displacementMap=u.displacementMap,R.displacementScale=u.displacementScale,R.displacementBias=u.displacementBias,R.wireframeLinewidth=u.wireframeLinewidth,R.linewidth=u.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=s.properties.get(R);D.light=M}return R}function y(T,u,M,C,R,L){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Zi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const P=e.update(T),B=T.material;if(Array.isArray(B)){const q=P.groups;for(let z=0,ne=q.length;z<ne;z++){const W=q[z],j=B[W.materialIndex];if(j&&j.visible){const te=v(T,j,C,L);T.onBeforeShadow(s,T,u,M,P,te,W),s.renderBufferDirect(M,null,P,te,T,W),T.onAfterShadow(s,T,u,M,P,te,W)}}}else if(B.visible){const q=v(T,B,C,L);T.onBeforeShadow(s,T,u,M,P,q,null),s.renderBufferDirect(M,null,P,q,T,null),T.onAfterShadow(s,T,u,M,P,q,null)}}const F=T.children;for(let P=0,B=F.length;P<B;P++)y(F[P],u,M,C,R,L)}function w(T){T.target.removeEventListener("dispose",w);for(const M in c){const C=c[M],R=T.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Tm(s,e){function t(){let I=!1;const J=new ut;let X=null;const ce=new ut(0,0,0,0);return{setMask:function(ae){X!==ae&&!I&&(s.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){I=ae},setClear:function(ae,oe,we,He,se){se===!0&&(ae*=He,oe*=He,we*=He),J.set(ae,oe,we,He),ce.equals(J)===!1&&(s.clearColor(ae,oe,we,He),ce.copy(J))},reset:function(){I=!1,X=null,ce.set(-1,0,0,0)}}}function n(){let I=!1,J=!1,X=null,ce=null,ae=null;return{setReversed:function(oe){if(J!==oe){const we=e.get("EXT_clip_control");oe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),J=oe;const He=ae;ae=null,this.setClear(He)}},getReversed:function(){return J},setTest:function(oe){oe?ve(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(oe){X!==oe&&!I&&(s.depthMask(oe),X=oe)},setFunc:function(oe){if(J&&(oe=id[oe]),ce!==oe){switch(oe){case $a:s.depthFunc(s.NEVER);break;case qa:s.depthFunc(s.ALWAYS);break;case Ya:s.depthFunc(s.LESS);break;case ts:s.depthFunc(s.LEQUAL);break;case Ka:s.depthFunc(s.EQUAL);break;case Za:s.depthFunc(s.GEQUAL);break;case Ja:s.depthFunc(s.GREATER);break;case Qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=oe}},setLocked:function(oe){I=oe},setClear:function(oe){ae!==oe&&(ae=oe,J&&(oe=1-oe),s.clearDepth(oe))},reset:function(){I=!1,X=null,ce=null,ae=null,J=!1}}}function i(){let I=!1,J=null,X=null,ce=null,ae=null,oe=null,we=null,He=null,se=null;return{setTest:function(Ae){I||(Ae?ve(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(Ae){J!==Ae&&!I&&(s.stencilMask(Ae),J=Ae)},setFunc:function(Ae,Ge,pe){(X!==Ae||ce!==Ge||ae!==pe)&&(s.stencilFunc(Ae,Ge,pe),X=Ae,ce=Ge,ae=pe)},setOp:function(Ae,Ge,pe){(oe!==Ae||we!==Ge||He!==pe)&&(s.stencilOp(Ae,Ge,pe),oe=Ae,we=Ge,He=pe)},setLocked:function(Ae){I=Ae},setClear:function(Ae){se!==Ae&&(s.clearStencil(Ae),se=Ae)},reset:function(){I=!1,J=null,X=null,ce=null,ae=null,oe=null,we=null,He=null,se=null}}}const a=new t,r=new n,o=new i;let l={};const c=new WeakMap;let h={},g={},d={},p=new WeakMap,x=[],b=null,m=!1,f=null,_=null,v=null,y=null,w=null,T=null,u=null,M=new De(0,0,0),C=0,R=!1,L=null,D=null,F=null,P=null,B=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=ne>=2);let j=null,te={};const be=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),Z=new ut().fromArray(be),ge=new ut().fromArray(Oe);function Se(I,J,X,ce){const ae=new Uint8Array(4),oe=s.createTexture();s.bindTexture(I,oe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let we=0;we<X;we++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(J+we,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return oe}const Re={};Re[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ve(s.DEPTH_TEST),r.setFunc(ts),zt(!1),lt(uo),ve(s.CULL_FACE),At(Ci);function ve(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Be(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function pt(I,J){return d[I]!==J?(s.bindFramebuffer(I,J),d[I]=J,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=J),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=J),!0):!1}function Le(I,J){let X=x,ce=!1;if(I){X=p.get(J),X===void 0&&(X=[],p.set(J,X));const ae=I.textures;if(X.length!==ae.length||X[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,we=ae.length;oe<we;oe++)X[oe]=s.COLOR_ATTACHMENT0+oe;X.length=ae.length,ce=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,ce=!0);ce&&s.drawBuffers(X)}function Je(I){return b!==I?(s.useProgram(I),b=I,!0):!1}const nt={[wi]:s.FUNC_ADD,[wc]:s.FUNC_SUBTRACT,[Ac]:s.FUNC_REVERSE_SUBTRACT};nt[Rc]=s.MIN,nt[Cc]=s.MAX;const Ve={[Pc]:s.ZERO,[Lc]:s.ONE,[Ic]:s.SRC_COLOR,[Sl]:s.SRC_ALPHA,[Bc]:s.SRC_ALPHA_SATURATE,[Oc]:s.DST_COLOR,[Nc]:s.DST_ALPHA,[Dc]:s.ONE_MINUS_SRC_COLOR,[yl]:s.ONE_MINUS_SRC_ALPHA,[Fc]:s.ONE_MINUS_DST_COLOR,[Uc]:s.ONE_MINUS_DST_ALPHA,[kc]:s.CONSTANT_COLOR,[Gc]:s.ONE_MINUS_CONSTANT_COLOR,[Hc]:s.CONSTANT_ALPHA,[zc]:s.ONE_MINUS_CONSTANT_ALPHA};function At(I,J,X,ce,ae,oe,we,He,se,Ae){if(I===Ci){m===!0&&(Be(s.BLEND),m=!1);return}if(m===!1&&(ve(s.BLEND),m=!0),I!==Tc){if(I!==f||Ae!==R){if((_!==wi||w!==wi)&&(s.blendEquation(s.FUNC_ADD),_=wi,w=wi),Ae)switch(I){case ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFunc(s.ONE,s.ONE);break;case fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case po:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ke("WebGLState: Invalid blending: ",I);break}else switch(I){case ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case fo:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case po:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",I);break}v=null,y=null,T=null,u=null,M.set(0,0,0),C=0,f=I,R=Ae}return}ae=ae||J,oe=oe||X,we=we||ce,(J!==_||ae!==w)&&(s.blendEquationSeparate(nt[J],nt[ae]),_=J,w=ae),(X!==v||ce!==y||oe!==T||we!==u)&&(s.blendFuncSeparate(Ve[X],Ve[ce],Ve[oe],Ve[we]),v=X,y=ce,T=oe,u=we),(He.equals(M)===!1||se!==C)&&(s.blendColor(He.r,He.g,He.b,se),M.copy(He),C=se),f=I,R=!1}function vt(I,J){I.side===Gt?Be(s.CULL_FACE):ve(s.CULL_FACE);let X=I.side===Ht;J&&(X=!X),zt(X),I.blending===ji&&I.transparent===!1?At(Ci):At(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),a.setMask(I.colorWrite);const ce=I.stencilWrite;o.setTest(ce),ce&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(I){L!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),L=I)}function lt(I){I!==Ec?(ve(s.CULL_FACE),I!==D&&(I===uo?s.cullFace(s.BACK):I===bc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),D=I}function hn(I){I!==F&&(z&&s.lineWidth(I),F=I)}function Et(I,J,X){I?(ve(s.POLYGON_OFFSET_FILL),(P!==J||B!==X)&&(P=J,B=X,r.getReversed()&&(J=-J,X=-X),s.polygonOffset(J,X))):Be(s.POLYGON_OFFSET_FILL)}function Kt(I){I?ve(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function Zt(I){I===void 0&&(I=s.TEXTURE0+q-1),j!==I&&(s.activeTexture(I),j=I)}function Jt(I,J,X){X===void 0&&(j===null?X=s.TEXTURE0+q-1:X=j);let ce=te[X];ce===void 0&&(ce={type:void 0,texture:void 0},te[X]=ce),(ce.type!==I||ce.texture!==J)&&(j!==X&&(s.activeTexture(X),j=X),s.bindTexture(I,J||Re[I]),ce.type=I,ce.texture=J)}function U(){const I=te[j];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Qt(){try{s.compressedTexImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function at(){try{s.compressedTexImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function rt(){try{s.texSubImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function fe(){try{s.texSubImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function xt(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function Ue(){try{s.texStorage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function A(){try{s.texStorage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function S(){try{s.texImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function G(){try{s.texImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function ie(I){return g[I]!==void 0?g[I]:s.getParameter(I)}function Q(I,J){g[I]!==J&&(s.pixelStorei(I,J),g[I]=J)}function re(I){Z.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function he(I){ge.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ge.copy(I))}function Y(I,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let ce=X.get(I);ce===void 0&&(ce=s.getUniformBlockIndex(J,I.name),s.uniformBlockBinding(J,ce,ce),X.set(I,ce))}function K(I,J,X){const ae=c.get(J).get(I);l[ae]!==X&&(s.bindBufferBase(s.UNIFORM_BUFFER,ae,X),l[ae]=X)}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},g={},j=null,te={},d={},l={},p=new WeakMap,x=[],b=null,m=!1,f=null,_=null,v=null,y=null,w=null,T=null,u=null,M=new De(0,0,0),C=0,R=!1,L=null,D=null,F=null,P=null,B=null,Z.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ve,disable:Be,bindFramebuffer:pt,drawBuffers:Le,useProgram:Je,setBlending:At,setMaterial:vt,setFlipSided:zt,setCullFace:lt,setLineWidth:hn,setPolygonOffset:Et,setScissorTest:Kt,activeTexture:Zt,bindTexture:Jt,unbindTexture:U,compressedTexImage2D:Qt,compressedTexImage3D:at,texImage2D:S,texImage3D:G,pixelStorei:Q,getParameter:ie,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Ue,texStorage3D:A,texSubImage2D:rt,texSubImage3D:fe,compressedTexSubImage2D:xt,compressedTexSubImage3D:Ce,scissor:re,viewport:he,reset:le}}function wm(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,g=new Set;let d;const p=new WeakMap,x=new Set,b=new FinalizationRegistry(A=>x.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,S){return m?new OffscreenCanvas(A,S):ta("canvas")}function _(A,S,G){let ie=1;const Q=Ue(A);if((Q.width>G||Q.height>G)&&(ie=G/Math.max(Q.width,Q.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(ie*Q.width),he=Math.floor(ie*Q.height);d===void 0&&(d=f(re,he));const Y=S?f(re,he):d;return Y.width=re,Y.height=he,Y.getContext("2d").drawImage(A,0,0,re,he),Ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+he+")."),Y}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function v(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(A,S,G,ie,Q,re=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he;ie&&(he=e.get("EXT_texture_norm16"),he||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=S;if(S===s.RED&&(G===s.FLOAT&&(Y=s.R32F),G===s.HALF_FLOAT&&(Y=s.R16F),G===s.UNSIGNED_BYTE&&(Y=s.R8),G===s.UNSIGNED_SHORT&&he&&(Y=he.R16_EXT),G===s.SHORT&&he&&(Y=he.R16_SNORM_EXT)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(Y=s.R8UI),G===s.UNSIGNED_SHORT&&(Y=s.R16UI),G===s.UNSIGNED_INT&&(Y=s.R32UI),G===s.BYTE&&(Y=s.R8I),G===s.SHORT&&(Y=s.R16I),G===s.INT&&(Y=s.R32I)),S===s.RG&&(G===s.FLOAT&&(Y=s.RG32F),G===s.HALF_FLOAT&&(Y=s.RG16F),G===s.UNSIGNED_BYTE&&(Y=s.RG8),G===s.UNSIGNED_SHORT&&he&&(Y=he.RG16_EXT),G===s.SHORT&&he&&(Y=he.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(Y=s.RG8UI),G===s.UNSIGNED_SHORT&&(Y=s.RG16UI),G===s.UNSIGNED_INT&&(Y=s.RG32UI),G===s.BYTE&&(Y=s.RG8I),G===s.SHORT&&(Y=s.RG16I),G===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),G===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),G===s.UNSIGNED_INT&&(Y=s.RGB32UI),G===s.BYTE&&(Y=s.RGB8I),G===s.SHORT&&(Y=s.RGB16I),G===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),G===s.UNSIGNED_INT&&(Y=s.RGBA32UI),G===s.BYTE&&(Y=s.RGBA8I),G===s.SHORT&&(Y=s.RGBA16I),G===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&(G===s.UNSIGNED_SHORT&&he&&(Y=he.RGB16_EXT),G===s.SHORT&&he&&(Y=he.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),S===s.RGBA){const K=re?ea:qe.getTransfer(Q);G===s.FLOAT&&(Y=s.RGBA32F),G===s.HALF_FLOAT&&(Y=s.RGBA16F),G===s.UNSIGNED_BYTE&&(Y=K===je?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&he&&(Y=he.RGBA16_EXT),G===s.SHORT&&he&&(Y=he.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function u(A,S){let G;return A?S===null||S===_n||S===Di?G=s.DEPTH24_STENCIL8:S===ln?G=s.DEPTH32F_STENCIL8:S===is&&(G=s.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_n||S===Di?G=s.DEPTH_COMPONENT24:S===ln?G=s.DEPTH_COMPONENT32F:S===is&&(G=s.DEPTH_COMPONENT16),G}function M(A,S){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=new WeakRef(A);n.get(A).__ref=S,x.add(S),b.register(A,S,S)}function R(A){const S=n.get(A).__ref;S!==void 0&&(x.delete(S),b.unregister(S))}function L(A){F(A.target)}function D(A){P(A.target)}function F(A){A.removeEventListener("dispose",L),R(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&g.delete(A)}function P(A){A.removeEventListener("dispose",D),R(A),ne(A)}function B(){for(const A of x){const S=A.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):F(S))}x.clear(),g.clear()}function q(A){const S=n.get(A);if(S.__webglInit===void 0)return;const G=A.source,ie=p.get(G);if(ie){const Q=ie[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&z(A),Object.keys(ie).length===0&&p.delete(G)}n.remove(A)}function z(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const G=A.source,ie=p.get(G);delete ie[S.__cacheKey],r.memory.textures--}function ne(A){const S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();const G=A.depthTexture;if(G&&G.renderTarget===A&&F(G),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let re=0;re<S.__webglFramebuffer[Q].length;re++)s.deleteFramebuffer(S.__webglFramebuffer[Q][re]);else s.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[Q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ie=A.textures;for(let Q=0,re=ie.length;Q<re;Q++){const he=n.get(ie[Q]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),r.memory.textures--),n.remove(ie[Q])}n.remove(A)}let W=0;function j(){W=0}function te(){return W}function be(A){W=A}function Oe(){const A=W;return A>=i.maxTextures&&Ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,A}function Z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ge(A,S){const G=n.get(A);if(A.isVideoTexture&&xt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const ie=A.image;if(ie===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(G,A,S);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function Se(A,S){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){vt(G,A,S);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function Re(A,S){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){vt(G,A,S);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function ve(A,S){const G=n.get(A);if(A.version>0&&G.__version!==A.version){zt(G,A,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}const Be={[jn]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[ja]:s.MIRRORED_REPEAT},pt={[Pt]:s.NEAREST,[Xc]:s.NEAREST_MIPMAP_NEAREST,[us]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[ga]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},Le={[Kc]:s.NEVER,[Bl]:s.ALWAYS,[Zc]:s.LESS,[Ol]:s.LEQUAL,[Jc]:s.EQUAL,[Fl]:s.GEQUAL,[Qc]:s.GREATER,[jc]:s.NOTEQUAL};function Je(A,S){if(S.type===ln&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wt||S.magFilter===ga||S.magFilter===us||S.magFilter===Hn||S.minFilter===Wt||S.minFilter===ga||S.minFilter===us||S.minFilter===Hn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Be[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Be[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Be[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,pt[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pt||S.minFilter!==us&&S.minFilter!==Hn||S.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function nt(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",L),C(S));const ie=S.source;let Q=p.get(ie);Q===void 0&&(Q={},p.set(ie,Q));const re=Z(S);if(re!==A.__cacheKey){Q[re]===void 0&&(Q[re]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,G=!0),Q[re].usedTimes++;const he=Q[A.__cacheKey];he!==void 0&&(Q[A.__cacheKey].usedTimes--,he.usedTimes===0&&z(S)),A.__cacheKey=re,A.__webglTexture=Q[re].texture}return G}function Ve(A,S,G){return Math.floor(Math.floor(A/G)/S)}function At(A,S,G,ie){const re=A.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,G,ie,S.data);else{re.sort((I,J)=>I.start-J.start);let he=0;for(let I=1;I<re.length;I++){const J=re[he],X=re[I],ce=J.start+J.count,ae=Ve(X.start,S.width,4),oe=Ve(J.start,S.width,4);X.start<=ce+1&&ae===oe&&Ve(X.start+X.count-1,S.width,4)===ae?J.count=Math.max(J.count,X.start+X.count-J.start):(++he,re[he]=X)}re.length=he+1;const Y=t.getParameter(s.UNPACK_ROW_LENGTH),K=t.getParameter(s.UNPACK_SKIP_PIXELS),le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let I=0,J=re.length;I<J;I++){const X=re[I],ce=Math.floor(X.start/4),ae=Math.ceil(X.count/4),oe=ce%S.width,we=Math.floor(ce/S.width),He=ae,se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,we),t.texSubImage2D(s.TEXTURE_2D,0,oe,we,He,se,G,ie,S.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Y),t.pixelStorei(s.UNPACK_SKIP_PIXELS,K),t.pixelStorei(s.UNPACK_SKIP_ROWS,le)}}function vt(A,S,G){let ie=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=s.TEXTURE_3D);const Q=nt(A,S),re=S.source;t.bindTexture(ie,A.__webglTexture,s.TEXTURE0+G);const he=n.get(re);if(re.version!==he.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const se=qe.getPrimaries(qe.workingColorSpace),Ae=S.colorSpace===Gn?null:qe.getPrimaries(S.colorSpace),Ge=S.colorSpace===Gn||se===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let K=_(S.image,!1,i.maxTextureSize);K=Ce(S,K);const le=a.convert(S.format,S.colorSpace),I=a.convert(S.type);let J=T(S.internalFormat,le,I,S.normalized,S.colorSpace,S.isVideoTexture);Je(ie,S);let X;const ce=S.mipmaps,ae=S.isVideoTexture!==!0,oe=he.__version===void 0||Q===!0,we=re.dataReady,He=M(S,K);if(S.isDepthTexture)J=u(S.format===zn,S.type),oe&&(ae?t.texStorage2D(s.TEXTURE_2D,1,J,K.width,K.height):t.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,le,I,null));else if(S.isDataTexture)if(ce.length>0){ae&&oe&&t.texStorage2D(s.TEXTURE_2D,He,J,ce[0].width,ce[0].height);for(let se=0,Ae=ce.length;se<Ae;se++)X=ce[se],ae?we&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,X.width,X.height,le,I,X.data):t.texImage2D(s.TEXTURE_2D,se,J,X.width,X.height,0,le,I,X.data);S.generateMipmaps=!1}else ae?(oe&&t.texStorage2D(s.TEXTURE_2D,He,J,K.width,K.height),we&&At(S,K,le,I)):t.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,le,I,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ae&&oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,J,ce[0].width,ce[0].height,K.depth);for(let se=0,Ae=ce.length;se<Ae;se++)if(X=ce[se],S.format!==mn)if(le!==null)if(ae){if(we)if(S.layerUpdates.size>0){const Ge=Qo(X.width,X.height,S.format,S.type);for(const pe of S.layerUpdates){const Qe=X.data.subarray(pe*Ge/X.data.BYTES_PER_ELEMENT,(pe+1)*Ge/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,pe,X.width,X.height,1,le,Qe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,X.width,X.height,K.depth,le,X.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,J,X.width,X.height,K.depth,0,X.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?we&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,X.width,X.height,K.depth,le,I,X.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,J,X.width,X.height,K.depth,0,le,I,X.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ae&&oe&&t.texStorage2D(s.TEXTURE_2D,He,J,ce[0].width,ce[0].height);for(let se=0,Ae=ce.length;se<Ae;se++)X=ce[se],S.format!==mn?le!==null?ae?we&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,X.width,X.height,le,X.data):t.compressedTexImage2D(s.TEXTURE_2D,se,J,X.width,X.height,0,X.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?we&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,X.width,X.height,le,I,X.data):t.texImage2D(s.TEXTURE_2D,se,J,X.width,X.height,0,le,I,X.data)}else if(S.isDataArrayTexture)if(ae){if(oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,J,K.width,K.height,K.depth),we)if(S.layerUpdates.size>0){const se=Qo(K.width,K.height,S.format,S.type);for(const Ae of S.layerUpdates){const Ge=K.data.subarray(Ae*se/K.data.BYTES_PER_ELEMENT,(Ae+1)*se/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ae,K.width,K.height,1,le,I,Ge)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,le,I,K.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,le,I,K.data);else if(S.isData3DTexture)ae?(oe&&t.texStorage3D(s.TEXTURE_3D,He,J,K.width,K.height,K.depth),we&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,le,I,K.data)):t.texImage3D(s.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,le,I,K.data);else if(S.isFramebufferTexture){if(oe)if(ae)t.texStorage2D(s.TEXTURE_2D,He,J,K.width,K.height);else{let se=K.width,Ae=K.height;for(let Ge=0;Ge<He;Ge++)t.texImage2D(s.TEXTURE_2D,Ge,J,se,Ae,0,le,I,null),se>>=1,Ae>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const se=s.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),K.parentNode!==se){se.appendChild(K),g.add(S),se.onpaint=Ae=>{const Ge=Ae.changedElements;for(const pe of g)Ge.includes(pe.image)&&(pe.needsUpdate=!0)},se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{const Ge=s.RGBA,pe=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ge,pe,Qe,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ce.length>0){if(ae&&oe){const se=Ue(ce[0]);t.texStorage2D(s.TEXTURE_2D,He,J,se.width,se.height)}for(let se=0,Ae=ce.length;se<Ae;se++)X=ce[se],ae?we&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,le,I,X):t.texImage2D(s.TEXTURE_2D,se,J,le,I,X);S.generateMipmaps=!1}else if(ae){if(oe){const se=Ue(K);t.texStorage2D(s.TEXTURE_2D,He,J,se.width,se.height)}we&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,I,K)}else t.texImage2D(s.TEXTURE_2D,0,J,le,I,K);v(S)&&S.mipmapsAutoUpdate===!0&&y(ie),he.__version=re.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function zt(A,S,G){if(S.image.length!==6)return;const ie=nt(A,S),Q=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);const re=n.get(Q);if(Q.version!==re.__version||ie===!0){t.activeTexture(s.TEXTURE0+G);const he=qe.getPrimaries(qe.workingColorSpace),Y=S.colorSpace===Gn?null:qe.getPrimaries(S.colorSpace),K=S.colorSpace===Gn||he===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const le=S.isCompressedTexture||S.image[0].isCompressedTexture,I=S.image[0]&&S.image[0].isDataTexture,J=[];for(let pe=0;pe<6;pe++)!le&&!I?J[pe]=_(S.image[pe],!0,i.maxCubemapSize):J[pe]=I?S.image[pe].image:S.image[pe],J[pe]=Ce(S,J[pe]);const X=J[0],ce=a.convert(S.format,S.colorSpace),ae=a.convert(S.type);let oe=T(S.internalFormat,ce,ae,S.normalized,S.colorSpace);const we=S.isVideoTexture!==!0,He=re.__version===void 0||ie===!0,se=Q.dataReady;let Ae=M(S,X);Je(s.TEXTURE_CUBE_MAP,S);let Ge;if(S.isDepthTexture){if(oe=u(S.format===zn,S.type),He)if(we)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,oe,X.width,X.height);else for(let pe=0;pe<6;pe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,X.width,X.height,0,ce,ae,null)}else if(le){we&&He&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,oe,X.width,X.height);for(let pe=0;pe<6;pe++){Ge=J[pe].mipmaps;for(let Qe=0;Qe<Ge.length;Qe++){const bt=Ge[Qe];S.format!==mn?ce!==null?we?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe,0,0,bt.width,bt.height,ce,bt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe,oe,bt.width,bt.height,0,bt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe,0,0,bt.width,bt.height,ce,ae,bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe,oe,bt.width,bt.height,0,ce,ae,bt.data)}}}else{if(Ge=S.mipmaps,we&&He){Ge.length>0&&Ae++;const pe=Ue(J[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,oe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(I){we?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,J[pe].width,J[pe].height,ce,ae,J[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,J[pe].width,J[pe].height,0,ce,ae,J[pe].data);for(let Qe=0;Qe<Ge.length;Qe++){const In=Ge[Qe].image[pe].image;we?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe+1,0,0,In.width,In.height,ce,ae,In.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe+1,oe,In.width,In.height,0,ce,ae,In.data)}}else{we?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce,ae,J[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,ce,ae,J[pe]);for(let Qe=0;Qe<Ge.length;Qe++){const bt=Ge[Qe];we?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe+1,0,0,ce,ae,bt.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe+1,oe,ce,ae,bt.image[pe])}}}v(S)&&S.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),re.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function lt(A,S,G,ie,Q,re){const he=a.convert(G.format,G.colorSpace),Y=a.convert(G.type),K=T(G.internalFormat,he,Y,G.normalized,G.colorSpace),le=n.get(S),I=n.get(G);if(I.__renderTarget=S,!le.__hasExternalTextures){const J=Math.max(1,S.width>>re),X=Math.max(1,S.height>>re);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,re,K,J,X,S.depth,0,he,Y,null):t.texImage2D(Q,re,K,J,X,0,he,Y,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),fe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Q,I.__webglTexture,0,rt(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,Q,I.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function hn(A,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const ie=S.depthTexture,Q=ie&&ie.isDepthTexture?ie.type:null,re=u(S.stencilBuffer,Q),he=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;fe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(S),re,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(S),re,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,re,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,A)}else{const ie=S.textures;for(let Q=0;Q<ie.length;Q++){const re=ie[Q],he=a.convert(re.format,re.colorSpace),Y=a.convert(re.type),K=T(re.internalFormat,he,Y,re.normalized,re.colorSpace);fe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(S),K,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(S),K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(A,S,G){const ie=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(S.depthTexture);Q.__renderTarget=S;const re=ie?S.depthTexture.image[0]:S.depthTexture.image;(!Q.__webglTexture||re.width!==S.width||re.height!==S.height)&&(re.width=S.width,re.height=S.height,S.depthTexture.needsUpdate=!0),ie?ve(S.depthTexture,0):ge(S.depthTexture,0);const he=Q.__webglTexture,Y=rt(S),K=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,le=S.depthTexture.format===zn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===Wn)fe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,K,he,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,le,K,he,0);else if(S.depthTexture.format===zn)fe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,K,he,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,le,K,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(A){const S=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const ie=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ie){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ie.removeEventListener("dispose",Q)};ie.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=ie}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let ie=0;ie<6;ie++)Et(S.__webglFramebuffer[ie],A,ie);else A.texture.mipmaps.length>0?Et(S.__webglFramebuffer[0],A,0):Et(S.__webglFramebuffer,A,0);else if(G){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]===void 0)S.__webglDepthbuffer[ie]=s.createRenderbuffer(),hn(S.__webglDepthbuffer[ie],A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,re)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),hn(S.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(A,S,G){const ie=n.get(A);S!==void 0&&lt(ie.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Kt(A)}function Jt(A){const S=A.texture,G=n.get(A),ie=n.get(S);A.addEventListener("dispose",D),C(A);const Q=A.textures,re=A.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=S.version,r.memory.textures++),re){G.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0){G.__webglFramebuffer[Y]=[];for(let K=0;K<S.mipmaps.length;K++)G.__webglFramebuffer[Y][K]=s.createFramebuffer()}else G.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(S.mipmaps.length>0){G.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)G.__webglFramebuffer[Y]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(he)for(let Y=0,K=Q.length;Y<K;Y++){const le=n.get(Q[Y]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&fe(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){const K=Q[Y];G.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Y]);const le=a.convert(K.format,K.colorSpace),I=a.convert(K.type),J=T(K.internalFormat,le,I,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),X=rt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,X,J,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,G.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),hn(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),Je(s.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)lt(G.__webglFramebuffer[Y][K],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else lt(G.__webglFramebuffer[Y],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);v(S)?y(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(he){for(let Y=0,K=Q.length;Y<K;Y++){const le=Q[Y],I=n.get(le);let J=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,I.__webglTexture),Je(J,le),lt(G.__webglFramebuffer,A,le,s.COLOR_ATTACHMENT0+Y,J,0),v(le)&&y(J)}t.unbindTexture()}else{let Y=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Y,ie.__webglTexture),Je(Y,S),S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)lt(G.__webglFramebuffer[K],A,S,s.COLOR_ATTACHMENT0,Y,K);else lt(G.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,Y,0);v(S)?y(Y):S.mipmaps.length>0&&s.texParameteri(Y,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Kt(A)}function U(A){const S=A.textures;for(let G=0,ie=S.length;G<ie;G++){const Q=S[G];if(v(Q)&&Q.mipmapsAutoUpdate===!0){const re=w(A),he=n.get(Q).__webglTexture;t.bindTexture(re,he),y(re),t.unbindTexture()}}}const Qt=[];function at(A){if(A.samples>0){if(fe(A)===!1){const S=A.textures,G=A.width,ie=A.height;let Q=s.COLOR_BUFFER_BIT;const re=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(A),Y=S.length>1;if(Y)for(let le=0;le<S.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let le=0;le<S.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[le]);const I=n.get(S[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,I,0)}s.blitFramebuffer(0,0,G,ie,0,0,G,ie,Q,s.NEAREST),l===!0&&(Qt.length=0,Qt.push(s.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Qt.push(re),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<S.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,he.__webglColorRenderbuffer[le]);const I=n.get(S[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,I,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function rt(A){return Math.min(i.maxSamples,A.samples)}function fe(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xt(A){const S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ce(A,S){const G=A.colorSpace,ie=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==js&&G!==Gn&&(qe.getTransfer(G)===je?(ie!==mn||Q!==Yt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",G)),S}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=be,this.setTexture2D=ge,this.setTexture2DArray=Se,this.setTexture3D=Re,this.setTextureCube=ve,this.rebindTextures=Zt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=fe,this.dispose=B}function Am(s,e){function t(n,i=Gn){let a;const r=qe.getTransfer(i);if(n===Yt)return s.UNSIGNED_BYTE;if(n===Gr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pl)return s.BYTE;if(n===Ll)return s.SHORT;if(n===is)return s.UNSIGNED_SHORT;if(n===kr)return s.INT;if(n===_n)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===vn)return s.HALF_FLOAT;if(n===Nl)return s.ALPHA;if(n===Ul)return s.RGB;if(n===mn)return s.RGBA;if(n===Wn)return s.DEPTH_COMPONENT;if(n===zn)return s.DEPTH_STENCIL;if(n===zr)return s.RED;if(n===Vr)return s.RED_INTEGER;if(n===ti)return s.RG;if(n===Wr)return s.RG_INTEGER;if(n===Xr)return s.RGBA_INTEGER;if(n===Xs||n===$s||n===qs||n===Ys)if(r===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Xs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Xs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===er||n===tr||n===nr||n===ir)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===er)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ir)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sr||n===ar||n===rr||n===or||n===lr||n===Zs||n===cr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===sr||n===ar)return r===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===rr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===or)return a.COMPRESSED_R11_EAC;if(n===lr)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Zs)return a.COMPRESSED_RG11_EAC;if(n===cr)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dr||n===hr||n===ur||n===fr||n===pr||n===mr||n===gr||n===_r||n===vr||n===xr||n===Mr||n===Sr||n===yr||n===Er)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===dr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ur)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_r)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yr)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Er)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===Tr||n===wr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===br)return r===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ar||n===Rr||n===Js||n===Cr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ar)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Rr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ec(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:Rm,fragmentShader:Cm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lm extends ii{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,g=null,d=null,p=null,x=null;const b=typeof XRWebGLBinding<"u",m=new Pm,f={},_=t.getContextAttributes();let v=null,y=null;const w=[],T=[],u=new Ne;let M=null,C=null;const R=new tn;R.viewport=new ut;const L=new tn;L.viewport=new ut;const D=[R,L],F=new zd;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ge=w[Z];return ge===void 0&&(ge=new Ta,w[Z]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Z){let ge=w[Z];return ge===void 0&&(ge=new Ta,w[Z]=ge),ge.getGripSpace()},this.getHand=function(Z){let ge=w[Z];return ge===void 0&&(ge=new Ta,w[Z]=ge),ge.getHandSpace()};function q(Z){const ge=T.indexOf(Z.inputSource);if(ge===-1)return;const Se=w[ge];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,c||r),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<w.length;Z++){const ge=T[Z];ge!==null&&(T[Z]=null,w[Z].disconnect(ge))}P=null,B=null,m.reset();for(const Z in f)delete f[Z];if(e.setRenderTarget(v),p=null,d=null,g=null,i=null,y=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(u.width,u.height,!1),C!==null){const Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(i,t)),g},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",z),i.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(u),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Re=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=_.stencil?zn:Wn,Re=_.stencil?Di:_n);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};g=this.getBinding(),d=g.createProjectionLayer(Be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new gn(d.textureWidth,d.textureHeight,{format:mn,type:Yt,depthTexture:new Ni(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new gn(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Z){for(let ge=0;ge<Z.removed.length;ge++){const Se=Z.removed[ge],Re=T.indexOf(Se);Re>=0&&(T[Re]=null,w[Re].disconnect(Se))}for(let ge=0;ge<Z.added.length;ge++){const Se=Z.added[ge];let Re=T.indexOf(Se);if(Re===-1){for(let Be=0;Be<w.length;Be++)if(Be>=T.length){T.push(Se),Re=Be;break}else if(T[Be]===null){T[Be]=Se,Re=Be;break}if(Re===-1)break}const ve=w[Re];ve&&ve.connect(Se)}}function W(Z,ge){ge===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ge.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ge=Z.near,Se=Z.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),F.near=L.near=R.near=ge,F.far=L.far=R.far=Se,(P!==F.near||B!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,B=F.far),F.layers.mask=Z.layers.mask|6,R.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const Re=Z.parent,ve=F.cameras;W(F,Re);for(let Be=0;Be<ve.length;Be++)W(ve[Be],Re);F.projectionMatrix.copy(R.projectionMatrix),F.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,F,Re)};function j(Z,ge,Se){Se===null?Z.matrix.copy(ge.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ge.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ge.projectionMatrix),Z.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Pr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return f[Z]};let te=null;function be(Z,ge){if(h=ge.getViewerPose(c||r),x=ge,h!==null){const Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Re=!1;Se.length!==F.cameras.length&&(F.cameras.length=0,Re=!0);for(let Le=0;Le<Se.length;Le++){const Je=Se[Le];let nt=null;if(p!==null)nt=p.getViewport(Je);else{const At=g.getViewSubImage(d,Je);nt=At.viewport,Le===0&&(e.setRenderTargetTextures(y,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(y))}let Ve=D[Le];Ve===void 0&&(Ve=new tn,Ve.layers.enable(Le),Ve.viewport=new ut,D[Le]=Ve),Ve.matrix.fromArray(Je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(nt.x,nt.y,nt.width,nt.height),Le===0&&(F.matrix.copy(Ve.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Re===!0&&F.cameras.push(Ve)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){g=n.getBinding();const Le=g.getDepthInformation(Se[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,i.renderState)}if(ve&&ve.includes("camera-access")&&b){e.state.unbindTexture(),g=n.getBinding();for(let Le=0;Le<Se.length;Le++){const Je=Se[Le].camera;if(Je){let nt=f[Je];nt||(nt=new ec,f[Je]=nt);const Ve=g.getCameraImage(Je);nt.sourceTexture=Ve}}}}for(let Se=0;Se<w.length;Se++){const Re=T[Se],ve=w[Se];Re!==null&&ve!==void 0&&ve.update(Re,ge,c||r)}te&&te(Z,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),x=null}const Oe=new rc;Oe.setAnimationLoop(be),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}}const Im=new et,gc=new ke;gc.set(-1,0,0,0,1,0,0,0,1);function Dm(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,tc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,_,v,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(m,f):f.isMeshLambertMaterial?(a(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(m,f),g(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),x(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),b(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(Im.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function g(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nm(s,e,t,n){let i={},a={};function r(_,v){const y=v.program;n.uniformBlockBinding(_,y,i[_.id])}function o(_,v){let y=i[_.id];y===void 0&&(x(_),y=l(_),i[_.id]=y,_.addEventListener("dispose",m));const w=v.program;n.updateUBOMapping(_,w);const T=e.render.frame;a[_.id]!==T&&(c(_),a[_.id]=T)}function l(_){const v=s.createBuffer(),y=_.__size,w=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,y,w),s.bindBuffer(s.UNIFORM_BUFFER,null),v}function c(_){const v=i[_.id],y=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,u=y.length;T<u;T++){const M=y[T];if(Array.isArray(M))for(let C=0,R=M.length;C<R;C++)h(M[C],T,C,w);else h(M,T,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,v,y,w){if(d(_,v,y,w)===!0){const T=_.__offset,u=_.value;if(Array.isArray(u)){let M=0;for(let C=0;C<u.length;C++){const R=u[C],L=b(R,!0);g(R,_.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else g(u,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,_.__data)}}function g(_,v,y){typeof _=="number"||typeof _=="boolean"?v[y]=_:_.isMatrix3?(v[y]=_.elements[0],v[y+1]=_.elements[1],v[y+2]=_.elements[2],v[y+3]=0,v[y+4]=_.elements[3],v[y+5]=_.elements[4],v[y+6]=_.elements[5],v[y+7]=0,v[y+8]=_.elements[6],v[y+9]=_.elements[7],v[y+10]=_.elements[8],v[y+11]=0):ArrayBuffer.isView(_)?v.set(_.subarray(0,v.length-y),y):_.toArray(v,y)}function d(_,v,y,w){const T=_.value,u=v+"_"+y;if(Array.isArray(T)){w[u]===void 0&&(w[u]=[]);const M=w[u];let C=!1;for(let R=0;R<T.length;R++)p(T[R],M,R)===!0&&(C=!0);return C}return p(T,w,u)}function p(_,v,y){if(v[y]===void 0)return typeof _=="number"||typeof _=="boolean"?v[y]=_:ArrayBuffer.isView(_)?v[y]=_.slice():v[y]=_.clone(),!0;{const w=v[y];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return v[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function x(_){const v=_.uniforms;let y=0;const w=16;for(let u=0,M=v.length;u<M;u++){const C=Array.isArray(v[u])?v[u]:[v[u]];for(let R=0,L=C.length;R<L;R++){const D=C[R],F=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(v[u])||Array.isArray(D.value);let B=y;for(let z=0,ne=F.length;z<ne;z++){const W=F[z],j=b(W,P),te=y%w,be=te%j.boundary,Oe=te+be;y+=be,Oe!==0&&w-Oe<j.storage&&(y+=w-Oe),z===0&&(B=y),y+=j.storage}const q=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new q((y-B)/Float32Array.BYTES_PER_ELEMENT),D.__offset=B}}const T=y%w;return T>0&&(y+=w-T),_.__size=y,_.__cache={},this}function b(_,v){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",_),v===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(_){const v=_.target;v.removeEventListener("dispose",m),s.deleteBuffer(i[v.id]),delete i[v.id],delete a[v.id]}function f(){for(const _ in i)s.deleteBuffer(i[_]);i={},a={}}return{bind:r,update:o,dispose:f}}const Um=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function Om(){return fn===null&&(fn=new Zl(Um,16,16,ti,vn),fn.name="DFG_LUT",fn.minFilter=Wt,fn.magFilter=Wt,fn.wrapS=An,fn.wrapT=An,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class Fm{constructor(e={}){const{canvas:t=td(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Yt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=r;const b=p,m=new Set([Xr,Wr,Vr]),f=new Set([Yt,_n,is,Di,Gr,Hr]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const u=[],M=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,D=null,F=null,P=null,B=null;this._outputColorSpace=qt;let q=0,z=0,ne=null,W=-1,j=null;const te=new ut,be=new ut;let Oe=null;const Z=new De(0);let ge=0,Se=t.width,Re=t.height,ve=1,Be=null,pt=null;const Le=new ut(0,0,Se,Re),Je=new ut(0,0,Se,Re);let nt=!1;const Ve=new as,At=new Yr;let vt=!1,zt=!1;const lt=new et,hn=new O,Et=new ut,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Jt(){return ne===null?ve:1}let U=n;function Qt(E,N){return t.getContext(E,N)}let at,rt,fe,xt,Ce,Ue,A,S,G,ie,Q,re,he,Y,K,le,I,J,X,ce,ae,oe,we;try{const E={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Or}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){const N="webgl2";if(U=Qt(N,E),U===null)throw Qt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(E){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ke("WebGLRenderer: "+E.message),E}function He(){at=new Gf(U),at.init(),ae=new Am(U,at),rt=new Cf(U,at,e,ae),fe=new Tm(U,at),rt.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),F=U.createFramebuffer(),P=U.createFramebuffer(),B=U.createFramebuffer(),xt=new Vf(U),Ce=new hm,Ue=new wm(U,at,fe,Ce,rt,ae,xt),A=new kf(R),S=new Wd(U),oe=new Af(U,S),G=new Hf(U,S,xt,oe),ie=new Xf(U,G,S,oe,xt),J=new Wf(U,rt,Ue),K=new Pf(Ce),Q=new dm(R,A,at,rt,oe,K),re=new Dm(R,Ce),he=new fm,Y=new xm(at),I=new wf(R,A,fe,ie,x,l),le=new bm(R,ie,rt),we=new Nm(U,xt,rt,fe),X=new Rf(U,at,xt),ce=new zf(U,at,xt),xt.programs=Q.programs,R.capabilities=rt,R.extensions=at,R.properties=Ce,R.renderLists=he,R.shadowMap=le,R.state=fe,R.info=xt}b!==Yt&&(C=new qf(b,t.width,t.height,o,i,a));const se=new Lm(R,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(E){E!==void 0&&(ve=E,this.setSize(Se,Re,!1))},this.getSize=function(E){return E.set(Se,Re)},this.setSize=function(E,N,V=!0){if(se.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=E,Re=N,t.width=Math.floor(E*ve),t.height=Math.floor(N*ve),V===!0&&(t.style.width=E+"px",t.style.height=N+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Se*ve,Re*ve).floor()},this.setDrawingBufferSize=function(E,N,V){Se=E,Re=N,ve=V,t.width=Math.floor(E*V),t.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(b===Yt){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(te)},this.getViewport=function(E){return E.copy(Le)},this.setViewport=function(E,N,V,k){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,N,V,k),fe.viewport(te.copy(Le).multiplyScalar(Jt()).round())},this.getScissor=function(E){return E.copy(Je)},this.setScissor=function(E,N,V,k){E.isVector4?Je.set(E.x,E.y,E.z,E.w):Je.set(E,N,V,k),fe.scissor(be.copy(Je).multiplyScalar(Jt()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){fe.setScissorTest(nt=E)},this.setOpaqueSort=function(E){Be=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,V=!0){let k=0;if(E){let H=!1;if(ne!==null){const ue=ne.texture.format;H=m.has(ue)}if(H){const ue=ne.texture.type,Me=f.has(ue),de=I.getClearColor(),xe=I.getClearAlpha(),Te=de.r,Fe=de.g,We=de.b;Me?(_[0]=Te,_[1]=Fe,_[2]=We,_[3]=xe,U.clearBufferuiv(U.COLOR,0,_)):(v[0]=Te,v[1]=Fe,v[2]=We,v[3]=xe,U.clearBufferiv(U.COLOR,0,v))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),I.dispose(),he.dispose(),Y.dispose(),Ue.dispose(),Ce.dispose(),A.dispose(),ie.dispose(),G.dispose(),oe.dispose(),we.dispose(),Q.dispose(),se.dispose(),se.removeEventListener("sessionstart",eo),se.removeEventListener("sessionend",to),Xn.stop()};function Ae(E){E.preventDefault(),na("WebGLRenderer: Context Lost."),L=!0}function Ge(){na("WebGLRenderer: Context Restored."),L=!1;const E=xt.autoReset,N=le.enabled,V=le.autoUpdate,k=le.needsUpdate,H=le.type;He(),xt.autoReset=E,le.enabled=N,le.autoUpdate=V,le.needsUpdate=k,le.type=H}function pe(E){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Qe(E){const N=E.target;N.removeEventListener("dispose",Qe),bt(N)}function bt(E){In(E),Ce.remove(E)}function In(E){const N=Ce.get(E).programs;N!==void 0&&(N.forEach(function(V){Q.releaseProgram(V)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,k,H,ue){N===null&&(N=Kt);const Me=H.isMesh&&H.matrixWorld.determinantAffine()<0,de=Mc(E,N,V,k,H);fe.setMaterial(k,Me);let xe=V.index,Te=1;if(k.wireframe===!0){if(xe=G.getWireframeAttribute(V),xe===void 0)return;Te=2}const Fe=V.drawRange,We=V.attributes.position;let ye=Fe.start*Te,Xe=(Fe.start+Fe.count)*Te;ue!==null&&(ye=Math.max(ye,ue.start*Te),Xe=Math.min(Xe,(ue.start+ue.count)*Te)),xe!==null?(ye=Math.max(ye,0),Xe=Math.min(Xe,xe.count)):We!=null&&(ye=Math.max(ye,0),Xe=Math.min(Xe,We.count));const mt=Xe-ye;if(mt<0||mt===1/0)return;oe.setup(H,k,de,V,xe);let st,it=X;if(xe!==null&&(st=S.get(xe),it=ce,it.setIndex(st)),H.isMesh)k.wireframe===!0?(fe.setLineWidth(k.wireframeLinewidth*Jt()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(H.isLine){let Lt=k.linewidth;Lt===void 0&&(Lt=1),fe.setLineWidth(Lt*Jt()),H.isLineSegments?it.setMode(U.LINES):H.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else H.isPoints?it.setMode(U.POINTS):H.isSprite&&it.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(at.get("WEBGL_multi_draw"))it.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Lt=H._multiDrawStarts,Ee=H._multiDrawCounts,Ot=H._multiDrawCount,Ze=xe?S.get(xe).bytesPerElement:1,$n=Ce.get(k).currentProgram.getUniforms();for(let It=0;It<Ot;It++)$n.setValue(U,"_gl_DrawID",It),it.render(Lt[It]/Ze,Ee[It])}else if(H.isInstancedMesh)it.renderInstances(ye,mt,H.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ee=Math.min(V.instanceCount,Lt);it.renderInstances(ye,mt,Ee)}else it.render(ye,mt)};function jr(E,N,V,k){D!==null&&E.isNodeMaterial&&D.setObject(k,E),vt===!0&&K.setState(E,V,!1),E.transparent===!0&&E.side===Gt&&E.forceSinglePass===!1?(E.side=Ht,E.needsUpdate=!0,Bi(E,N,k),E.side=ei,E.needsUpdate=!0,Bi(E,N,k),E.side=Gt):Bi(E,N,k)}this.compile=function(E,N,V=null){V===null&&(V=E),D!==null&&D.renderStart(E,N,V),T=Y.get(V),T.init(N),M.push(T),V.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),E!==V&&E.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),zt=this.localClippingEnabled,vt=K.init(this.clippingPlanes,zt),vt===!0&&K.setGlobalState(this.clippingPlanes,N),D!==null&&le.render(T.state.shadowsArray,V,N);const k=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){const de=ue[Me];jr(de,V,N,H),k.add(de)}else jr(ue,V,N,H),k.add(ue)}),T=M.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(E,N,V=null){const k=this.compile(E,N,V);return new Promise(H=>{function ue(){if(k.forEach(function(Me){const xe=Ce.get(Me).currentProgram;(xe===void 0||xe.isReady())&&k.delete(Me)}),k.size===0){H(E);return}setTimeout(ue,10)}at.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ha=null;function vc(E){ha&&ha(E)}function eo(){Xn.stop()}function to(){Xn.start()}const Xn=new rc;Xn.setAnimationLoop(vc),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(E){ha=E,se.setAnimationLoop(E),E===null?Xn.stop():Xn.start()},se.addEventListener("sessionstart",eo),se.addEventListener("sessionend",to),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(E,N);const V=se.enabled===!0&&se.isPresenting===!0,k=C!==null&&(ne===null||V)&&C.begin(R,ne);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(N),N=se.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,N,ne),T=Y.get(E,M.length),T.init(N),T.state.textureUnits=Ue.getTextureUnits(),M.push(T),lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?At.setFromArrayCamera(N):Ve.setFromProjectionMatrix(lt,cn,N.reversedDepth),zt=this.localClippingEnabled,vt=K.init(this.clippingPlanes,zt),w=he.get(E,u.length),w.init(),u.push(w),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&ua(Me,N,-1/0,R.sortObjects)}ua(E,N,0,R.sortObjects),w.finish(),D!==null&&D.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(Be,pt),Zt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Zt&&I.addToRenderList(w,E),this.info.autoReset===!0&&this.info.reset(),vt===!0&&K.beginShadows();const H=T.state.shadowsArray;if(le.render(H,E,N),vt===!0&&K.endShadows(),(k&&C.hasRenderPass())===!1){const Me=w.opaque,de=w.transmissive;if(T.setupLights(),N.isArrayCamera){const xe=N.cameras;if(de.length>0)for(let Te=0,Fe=xe.length;Te<Fe;Te++){const We=xe[Te];io(Me,de,E,We)}Zt&&I.render(E);for(let Te=0,Fe=xe.length;Te<Fe;Te++){const We=xe[Te];no(w,E,We,We.viewport)}}else de.length>0&&io(Me,de,E,N),Zt&&I.render(E),no(w,E,N)}ne!==null&&z===0&&(Ue.updateMultisampleRenderTarget(ne),Ue.updateRenderTargetMipmap(ne)),k&&C.end(R),E.isScene===!0&&E.onAfterRender(R,E,N),oe.resetDefaultState(),W=-1,j=null,M.pop(),M.length>0?(T=M[M.length-1],Ue.setTextureUnits(T.state.textureUnits),vt===!0&&K.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,u.pop(),u.length>0?w=u[u.length-1]:w=null,D!==null&&D.renderEnd()};function ua(E,N,V,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){const Me=N.isArrayCamera?At:Ve;if(!E.frustumCulled||E.intersectsFrustum(Me)){k&&Et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);const de=ie.update(E),xe=E.material;xe.visible&&w.push(E,de,xe,V,Et.z,null,N)}}else if(E.isMesh||E.isLine||E.isPoints){const Me=N.isArrayCamera?At:Ve;if(!E.frustumCulled||E.intersectsFrustum(Me)){const de=ie.update(E),xe=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Et.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Et.copy(de.boundingSphere.center)),Et.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(xe)){const Te=de.groups;for(let Fe=0,We=Te.length;Fe<We;Fe++){const ye=Te[Fe],Xe=xe[ye.materialIndex];Xe&&Xe.visible&&w.push(E,de,Xe,V,Et.z,ye,N)}}else xe.visible&&w.push(E,de,xe,V,Et.z,null,N)}}}const ue=E.children;for(let Me=0,de=ue.length;Me<de;Me++)ua(ue[Me],N,V,k)}function no(E,N,V,k){const{opaque:H,transmissive:ue,transparent:Me}=E;T.setupLightsView(V),vt===!0&&K.setGlobalState(R.clippingPlanes,V),k&&fe.viewport(te.copy(k)),H.length>0&&ds(H,N,V),ue.length>0&&ds(ue,N,V),Me.length>0&&ds(Me,N,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function io(E,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const ye=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new gn(1,1,{generateMipmaps:!0,type:ye?vn:Yt,minFilter:Hn,samples:Math.max(4,rt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const ue=T.state.transmissionRenderTarget[k.id],Me=k.viewport||te;ue.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);const de=R.getRenderTarget(),xe=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(Z),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),Zt&&I.render(V);const Fe=R.toneMapping;R.toneMapping=Rn;const We=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),vt===!0&&K.setGlobalState(R.clippingPlanes,k),ds(E,V,k),Ue.updateMultisampleRenderTarget(ue),Ue.updateRenderTargetMipmap(ue),at.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Xe=0,mt=N.length;Xe<mt;Xe++){const st=N[Xe],{object:it,geometry:Lt,material:Ee,group:Ot}=st;if(Ee.side===Gt&&it.layers.test(k.layers)){const Ze=Ee.side;Ee.side=Ht,Ee.needsUpdate=!0,so(it,V,k,Lt,Ee,Ot),Ee.side=Ze,Ee.needsUpdate=!0,ye=!0}}ye===!0&&(Ue.updateMultisampleRenderTarget(ue),Ue.updateRenderTargetMipmap(ue))}R.setRenderTarget(de,xe,Te),R.setClearColor(Z,ge),We!==void 0&&(k.viewport=We),R.toneMapping=Fe}function ds(E,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let H=0,ue=E.length;H<ue;H++){const Me=E[H],{object:de,geometry:xe,group:Te}=Me;let Fe=Me.material;Fe.allowOverride===!0&&k!==null&&(Fe=k),de.layers.test(V.layers)&&so(de,N,V,xe,Fe,Te)}}function so(E,N,V,k,H,ue){D!==null&&H.isNodeMaterial&&D.setObject(E,H),E.onBeforeRender(R,N,V,k,H,ue),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(R,N,V,k,E,ue),H.transparent===!0&&H.side===Gt&&H.forceSinglePass===!1?(H.side=Ht,H.needsUpdate=!0,R.renderBufferDirect(V,N,k,H,E,ue),H.side=ei,H.needsUpdate=!0,R.renderBufferDirect(V,N,k,H,E,ue),H.side=Gt):R.renderBufferDirect(V,N,k,H,E,ue),E.onAfterRender(R,N,V,k,H,ue)}function ao(E){let N=0;for(const V of E)V.texture!==null&&N++;return N}function Bi(E,N,V){N.isScene!==!0&&(N=Kt);const k=Ce.get(E),H=T.state.lights,ue=T.state.shadowsArray,Me=H.state.version,de=Q.getParameters(E,H.state,ue,N,V,T.state.lightProbeGridArray),xe=Q.getProgramCacheKey(de);let Te=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const Fe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=A.get(E.envMap||k.environment,Fe),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",Qe),Te=new Map,k.programs=Te,k.programVariants=new Map);let We=Te.get(xe);if(We!==void 0){if(k.currentProgram===We&&k.lightsStateVersion===Me)return oo(E,de),We}else de.uniforms=Q.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,V,de),E.onBeforeCompile(de,R),We=Q.acquireProgram(de,xe),Te.set(xe,We),k.uniforms=de.uniforms;const ye=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=K.uniform),oo(E,de),k.needsLights=yc(E),k.lightsStateVersion=Me,k.needsLights&&(ye.ambientLightColor.value=H.state.ambient,ye.lightProbe.value=H.state.probe,ye.sunLights.value=H.state.sun,ye.sunLightShadows.value=H.state.sunShadow,ye.directionalLights.value=H.state.directional,ye.directionalLightShadows.value=H.state.directionalShadow,ye.spotLights.value=H.state.spot,ye.spotLightShadows.value=H.state.spotShadow,ye.rectAreaLights.value=H.state.rectArea,ye.ltc_1.value=H.state.rectAreaLTC1,ye.ltc_2.value=H.state.rectAreaLTC2,ye.pointLights.value=H.state.point,ye.pointLightShadows.value=H.state.pointShadow,ye.hemisphereLights.value=H.state.hemi,ye.sunShadowMatrix.value=H.state.sunShadowMatrix,ye.sunShadowCascade.value=H.state.sunShadowCascade,ye.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ye.spotLightMatrix.value=H.state.spotLightMatrix,ye.spotLightMap.value=H.state.spotLightMap,ye.pointShadowMatrix.value=H.state.pointShadowMatrix),k.numLightProbeGrids=ao(T.state.lightProbeGridArray),k.currentProgram=We,k.uniformsList=null,We}function xc(E,N,V,k,H){const ue=Ce.get(E),Me=ue.currentProgram.id+","+k+","+H;let de=ue.programVariants.get(Me);return de===void 0?(de=Bi(E,N,V),ue.programVariants.set(Me,de)):(ue.currentProgram=de,ue.uniformsList=null,ue.outputColorSpace=k,ue.toneMapping=H),de}function ro(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Ks.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function oo(E,N){const V=Ce.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Mc(E,N,V,k,H){N.isScene!==!0&&(N=Kt),Ue.resetTextureUnits();const ue=N.fog,Me=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,de=ne===null?R.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:qe.workingColorSpace,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Te=A.get(k.envMap||Me,xe),Fe=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,We=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ye=!!V.morphAttributes.position,Xe=!!V.morphAttributes.normal,mt=!!V.morphAttributes.color;let st=Rn;k.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(st=R.toneMapping);const it=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Lt=it!==void 0?it.length:0,Ee=Ce.get(k),Ot=T.state.lights;if(vt===!0&&(zt===!0||E!==j)){const ct=E===j&&k.id===W;K.setState(k,E,ct)}let Ze=!1,$n=!1;k.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Ot.state.version||H.isBatchedMesh&&Ee.batching===!1||!H.isBatchedMesh&&Ee.batching===!0||H.isBatchedMesh&&Ee.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ee.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ee.instancing===!1||!H.isInstancedMesh&&Ee.instancing===!0||H.isSkinnedMesh&&Ee.skinning===!1||!H.isSkinnedMesh&&Ee.skinning===!0||H.isInstancedMesh&&Ee.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ee.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ee.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ee.instancingMorph===!1&&H.morphTexture!==null||Ee.envMap!==Te||k.fog===!0&&Ee.fog!==ue||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==K.numPlanes||Ee.numIntersection!==K.numIntersection)||Ee.vertexAlphas!==Fe||Ee.vertexTangents!==We||Ee.morphTargets!==ye||Ee.morphNormals!==Xe||Ee.morphColors!==mt||Ee.morphTargetsCount!==Lt||Ee.numLightProbeGrids!==ao(T.state.lightProbeGridArray)?Ze=!0:(Ee.outputColorSpace!==de||Ee.toneMapping!==st)&&($n=!0):(Ze=!0,Ee.__version=k.version);let It=Ee.currentProgram;(Ze===!0||$n===!0)&&(It=$n===!0?xc(k,N,H,de,st):Bi(k,N,H),D&&k.isNodeMaterial&&D.onUpdateProgram(k,It,Ee));let hs=!1,Dn=!1,qn=!1;const Ye=It.getUniforms(),Rt=Ee.uniforms;if(fe.useProgram(It.program)&&(hs=!0,Dn=!0,qn=!0),k.id!==W&&(W=k.id,Dn=!0),hs||j!==E){fe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ye.setValue(U,"projectionMatrix",E.projectionMatrix),Ye.setValue(U,"viewMatrix",E.matrixWorldInverse);const Tt=Ye.map.cameraPosition;Tt!==void 0&&Tt.setValue(U,hn.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&Ye.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ye.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,Dn=!0,qn=!0)}if(Ee.needsLights&&(Ot.state.sunShadowMap.length>0&&Ye.setValue(U,"sunShadowMap",Ot.state.sunShadowMap,Ue),Ot.state.directionalShadowMap.length>0&&Ye.setValue(U,"directionalShadowMap",Ot.state.directionalShadowMap,Ue),Ot.state.spotShadowMap.length>0&&Ye.setValue(U,"spotShadowMap",Ot.state.spotShadowMap,Ue),Ot.state.pointShadowMap.length>0&&Ye.setValue(U,"pointShadowMap",Ot.state.pointShadowMap,Ue)),H.isSkinnedMesh){Ye.setOptional(U,H,"bindMatrix"),Ye.setOptional(U,H,"bindMatrixInverse");const ct=H.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),Ye.setValue(U,"boneTexture",ct.boneTexture,Ue))}H.isBatchedMesh&&(Ye.setOptional(U,H,"batchingTexture"),Ye.setValue(U,"batchingTexture",H._matricesTexture,Ue),Ye.setOptional(U,H,"batchingIdTexture"),Ye.setValue(U,"batchingIdTexture",H._indirectTexture,Ue),Ye.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&Ye.setValue(U,"batchingColorTexture",H._colorsTexture,Ue));const sn=V.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&J.update(H,V,It),(Dn||Ee.receiveShadow!==H.receiveShadow)&&(Ee.receiveShadow=H.receiveShadow,Ye.setValue(U,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Rt.envMapIntensity.value=N.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=Om()),Dn){if(Ye.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ee.needsLights&&Sc(Rt,qn),ue&&k.fog===!0&&re.refreshFogUniforms(Rt,ue),re.refreshMaterialUniforms(Rt,k,ve,Re,T.state.transmissionRenderTarget[E.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const ct=y;let Tt=0;for(const xn of T.state.lightProbeGridArray)xn.texture!==null&&(ct.textures[Tt]=xn.texture,ct.min[Tt]=xn.boundingBox.min,ct.max[Tt]=xn.boundingBox.max,ct.resolution[Tt]=xn.resolution,Tt++);for(const xn in ct)ct[xn].length=Tt;Rt.probesSH.value=ct.textures,Rt.probesMin.value=ct.min,Rt.probesMax.value=ct.max,Rt.probesResolution.value=ct.resolution}Ks.upload(U,ro(Ee),Rt,Ue)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ks.upload(U,ro(Ee),Rt,Ue),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ye.setValue(U,"center",H.center),Ye.setValue(U,"modelViewMatrix",H.modelViewMatrix),Ye.setValue(U,"normalMatrix",H.normalMatrix),Ye.setValue(U,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const ct=k.uniformsGroups;for(let Tt=0,xn=ct.length;Tt<xn;Tt++){const co=ct[Tt];we.update(co,It),we.bind(co,It)}}return It}function Sc(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function yc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(E,N,V){const k=Ce.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ce.get(E.texture).__webglTexture=N,Ce.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const V=Ce.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){ne=E,q=N,z=V;let k=null,H=!1,ue=!1;if(E){const de=Ce.get(E);if(de.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),te.copy(E.viewport),be.copy(E.scissor),Oe=E.scissorTest,fe.viewport(te),fe.scissor(be),fe.setScissorTest(Oe),W=-1;return}else if(de.__webglFramebuffer===void 0)Ue.setupRenderTarget(E);else if(de.__hasExternalTextures)Ue.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(de.__boundDepthTexture!==Fe){if(Fe!==null&&Ce.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(E)}}const xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);const Te=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?k=Te[N][V]:k=Te[N],H=!0):E.samples>0&&Ue.useMultisampledRTT(E)===!1?k=Ce.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?k=Te[V]:k=Te,te.copy(E.viewport),be.copy(E.scissor),Oe=E.scissorTest}else te.copy(Le).multiplyScalar(ve).floor(),be.copy(Je).multiplyScalar(ve).floor(),Oe=nt;if(V!==0&&(k=F),fe.bindFramebuffer(U.FRAMEBUFFER,k)&&fe.drawBuffers(E,k),fe.viewport(te),fe.scissor(be),fe.setScissorTest(Oe),H){const de=Ce.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,V)}else if(ue){const de=N;for(let xe=0;xe<E.textures.length;xe++){const Te=Ce.get(E.textures[xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xe,Te.__webglTexture,V,de)}}else if(E!==null&&V!==0){const de=Ce.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,V)}W=-1};function lo(E){const N=Ce.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=rt.textureFormatReadable(E.format),N.__typeReadable=rt.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,V,k,H,ue,Me,de=0){if(!(E&&E.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(xe=xe[Me],Array.isArray(xe)&&(xe=xe[0])),xe){fe.bindFramebuffer(U.FRAMEBUFFER,xe);try{const Te=E.textures[de],Fe=Te.format,We=Te.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);const ye=lo(Te);if(ye.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&V>=0&&V<=E.height-H&&U.readPixels(N,V,k,H,ae.convert(Fe),ae.convert(We),ue)}finally{const Te=ne!==null?Ce.get(ne).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,k,H,ue,Me,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(xe=xe[Me],Array.isArray(xe)&&(xe=xe[0])),xe)if(N>=0&&N<=E.width-k&&V>=0&&V<=E.height-H){fe.bindFramebuffer(U.FRAMEBUFFER,xe);const Te=E.textures[de],Fe=Te.format,We=Te.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);const ye=lo(Te);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(N,V,k,H,ae.convert(Fe),ae.convert(We),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const mt=ne!==null?Ce.get(ne).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,mt);const st=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await nd(U,st,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Xe),U.deleteSync(st),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,V=0){const k=Math.pow(2,-V),H=Math.floor(E.image.width*k),ue=Math.floor(E.image.height*k),Me=N!==null?N.x:0,de=N!==null?N.y:0;Ue.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,Me,de,H,ue),fe.unbindTexture()},this.copyTextureToTexture=function(E,N,V=null,k=null,H=0,ue=0){let Me,de,xe,Te,Fe,We,ye,Xe,mt;const st=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(V!==null)Me=V.max.x-V.min.x,de=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,Te=V.min.x,Fe=V.min.y,We=V.isBox3?V.min.z:0;else{const Ye=Math.pow(2,-H);Me=Math.floor(st.width*Ye),de=Math.floor(st.height*Ye),E.isDataArrayTexture?xe=st.depth:E.isData3DTexture?xe=Math.floor(st.depth*Ye):xe=1,Te=0,Fe=0,We=0}k!==null?(ye=k.x,Xe=k.y,mt=k.z):(ye=0,Xe=0,mt=0);const it=ae.convert(N.format),Lt=ae.convert(N.type);let Ee;N.isData3DTexture?(Ue.setTexture3D(N,0),Ee=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ue.setTexture2DArray(N,0),Ee=U.TEXTURE_2D_ARRAY):(Ue.setTexture2D(N,0),Ee=U.TEXTURE_2D),fe.activeTexture(U.TEXTURE0),fe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),fe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),fe.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const Ot=fe.getParameter(U.UNPACK_ROW_LENGTH),Ze=fe.getParameter(U.UNPACK_IMAGE_HEIGHT),$n=fe.getParameter(U.UNPACK_SKIP_PIXELS),It=fe.getParameter(U.UNPACK_SKIP_ROWS),hs=fe.getParameter(U.UNPACK_SKIP_IMAGES);fe.pixelStorei(U.UNPACK_ROW_LENGTH,st.width),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st.height),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),fe.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,We);const Dn=E.isDataArrayTexture||E.isData3DTexture,qn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Ye=Ce.get(E),Rt=Ce.get(N),sn=Ce.get(Ye.__renderTarget),ct=Ce.get(Rt.__renderTarget);fe.bindFramebuffer(U.READ_FRAMEBUFFER,sn.__webglFramebuffer),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Tt=0;Tt<xe;Tt++)Dn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(E).__webglTexture,H,We+Tt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(N).__webglTexture,ue,mt+Tt)),U.blitFramebuffer(Te,Fe,Te+Me,Fe+de,ye,Xe,ye+Me,Xe+de,U.DEPTH_BUFFER_BIT,U.NEAREST);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||Ce.has(E)){const Ye=Ce.get(E),Rt=Ce.get(N);fe.bindFramebuffer(U.READ_FRAMEBUFFER,P),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let sn=0;sn<xe;sn++)Dn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ye.__webglTexture,H,We+sn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ye.__webglTexture,H),qn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.__webglTexture,ue,mt+sn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rt.__webglTexture,ue),H!==0?U.blitFramebuffer(Te,Fe,Te+Me,Fe+de,ye,Xe,ye+Me,Xe+de,U.COLOR_BUFFER_BIT,U.NEAREST):qn?U.copyTexSubImage3D(Ee,ue,ye,Xe,mt+sn,Te,Fe,Me,de):U.copyTexSubImage2D(Ee,ue,ye,Xe,Te,Fe,Me,de);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else qn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ee,ue,ye,Xe,mt,Me,de,xe,it,Lt,st.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,ue,ye,Xe,mt,Me,de,xe,it,st.data):U.texSubImage3D(Ee,ue,ye,Xe,mt,Me,de,xe,it,Lt,st):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,ye,Xe,Me,de,it,Lt,st.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,ye,Xe,st.width,st.height,it,st.data):U.texSubImage2D(U.TEXTURE_2D,ue,ye,Xe,Me,de,it,Lt,st);fe.pixelStorei(U.UNPACK_ROW_LENGTH,Ot),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ze),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,$n),fe.pixelStorei(U.UNPACK_SKIP_ROWS,It),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,hs),ue===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(Ee),fe.unbindTexture()},this.initRenderTarget=function(E){Ce.get(E).__webglFramebuffer===void 0&&Ue.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ue.setTextureCube(E,0):E.isData3DTexture?Ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ue.setTexture2DArray(E,0):Ue.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){q=0,z=0,ne=null,fe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class Bm extends $l{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new _t;e.deleteAttribute("uv");const t=new Dr({side:Ht}),n=new Dr,i=new sc(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const a=new ee(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const r=new Rd(e,n,6),o=new ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);const l=new ee(e,Ti(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ee(e,Ti(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new ee(e,Ti(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const g=new ee(e,Ti(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const d=new ee(e,Ti(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new ee(e,Ti(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ti(s){return new Od({color:0,emissive:16777215,emissiveIntensity:s})}const Xa=["Common","Uncommon","Rare","Epic","Legendary","Mythic","Celestial","Immortal","Transcendent","Omega"],es=["#94a3b8","#22c55e","#3b82f6","#a855f7","#f59e0b","#ef4444","#06b6d4","#ec4899","#fde047","#ffffff"],Vn={plasma:{id:"plasma",name:"Plasma Blaster",icon:"⚡",description:"Rapid-fire high-velocity energy bolts at the nearest target.",baseDamage:18,baseCooldown:.48,range:330,baseCost:25,color:"#38bdf8"},tesla:{id:"tesla",name:"Tesla Arc Coil",icon:"🌩️",description:"Chain lightning that arcs across multiple nearby enemies.",baseDamage:24,baseCooldown:.85,range:280,baseCost:35,color:"#c084fc"},frost:{id:"frost",name:"Cryo Nova Emitter",icon:"❄️",description:"Emits freezing shockwaves that damage and slow enemies by 50%.",baseDamage:20,baseCooldown:1.35,range:195,baseCost:35,color:"#67e8f9"},sawblade:{id:"sawblade",name:"Kinetic Ripper",icon:"⚙️",description:"Fires piercing cyber-sawblades that slice through lines of foes.",baseDamage:30,baseCooldown:.9,range:350,baseCost:40,color:"#f43f5e"},missile:{id:"missile",name:"Hellfire Launcher",icon:"🚀",description:"Launches explosive splash-damage rockets with heavy impact.",baseDamage:48,baseCooldown:1.4,range:400,baseCost:50,color:"#fb923c"}};class Vt{static MAX_EQUIPPED=6;static MAX_BENCH=6;equipped=[null,null,null,null,null,null];bench=[null,null,null,null,null,null];uidCounter=1;constructor(){this.resetForNewRun()}resetForNewRun(){this.equipped=[null,null,null,null,null,null],this.bench=[null,null,null,null,null,null],this.equipped[0]=this.createWeapon("plasma",1),this.equipped[1]=this.createWeapon("plasma",1)}static getMaxAllowedTier(){return Math.max(1,Pe.getInstance().data.highestWave)}createWeapon(e,t=1){const n=Vt.getMaxAllowedTier();return{uid:`wpn_${this.uidCounter++}_${Date.now()}`,archetype:e,tier:Math.max(1,Math.min(n,t)),cooldownTimer:0,orbitAngle:0}}static getDamage(e,t){const n=Vn[e.archetype],i=Math.pow(2.15,e.tier-1);return Math.round(n.baseDamage*i*t)}static getCooldown(e,t){const n=Vn[e.archetype],i=1+(e.tier-1)*.12;return n.baseCooldown/(i*t)}addWeaponToAvailableSlot(e){for(let t=0;t<Vt.MAX_EQUIPPED;t++)if(!this.equipped[t])return this.equipped[t]=e,!0;for(let t=0;t<Vt.MAX_BENCH;t++)if(!this.bench[t])return this.bench[t]=e,!0;return!1}hasFreeSlot(){return this.equipped.some(e=>e===null)||this.bench.some(e=>e===null)}interactSlots(e,t,n,i){if(e===n&&t===i)return{action:"none"};const a=e==="equipped"?this.equipped:this.bench,r=n==="equipped"?this.equipped:this.bench,o=a[t],l=r[i];if(!o)return{action:"none"};const c=Vt.getMaxAllowedTier();if(l&&o.archetype===l.archetype&&o.tier===l.tier&&o.tier<c){const h=this.createWeapon(o.archetype,o.tier+1);return r[i]=h,a[t]=null,Pe.getInstance().recordMerge(1),_e.getInstance().playMerge(h.tier),{action:"merged",newTier:h.tier}}return r[i]=o,a[t]=l,_e.getInstance().playClick(),{action:"swapped"}}autoMergeAll(){let e=0,t=!0;for(;t;){t=!1;const n=[];this.equipped.forEach((a,r)=>n.push({group:"equipped",index:r,item:a})),this.bench.forEach((a,r)=>n.push({group:"bench",index:r,item:a}));const i=Vt.getMaxAllowedTier();for(let a=0;a<n.length;a++){const r=n[a];if(!(!r.item||r.item.tier>=i)){for(let o=a+1;o<n.length;o++){const l=n[o];if(l.item&&r.item.archetype===l.item.archetype&&r.item.tier===l.item.tier){this.interactSlots(l.group,l.index,r.group,r.index),e++,t=!0;break}}if(t)break}}}for(let n=0;n<Vt.MAX_EQUIPPED;n++)if(!this.equipped[n]){const i=this.bench.findIndex(a=>a!==null);i!==-1&&(this.equipped[n]=this.bench[i],this.bench[i]=null)}return e}sellWeapon(e,t){const n=e==="equipped"?this.equipped:this.bench,i=n[t];if(!i)return 0;let a=0;for(let l=0;l<this.equipped.length;l++)this.equipped[l]!==null&&a++;for(let l=0;l<this.bench.length;l++)this.bench[l]!==null&&a++;if(a<=1)return 0;const r=Vn[i.archetype],o=Math.floor(r.baseCost*Math.pow(1.8,i.tier-1)*.65);return n[t]=null,_e.getInstance().playCoin(),o}}const km={cyber_nebula:{fogColor:1711946,hemiSky:9684477,hemiGround:988970,accentColor:3718648,floorColor:12110079,floorEmissive:1454174},solar_inferno:{fogColor:2820615,hemiSky:16486972,hemiGround:3344646,accentColor:16347926,floorColor:16698058,floorEmissive:6166541},cryo_glacier:{fogColor:467507,hemiSky:6809849,hemiGround:535357,accentColor:2282478,floorColor:10875900,floorEmissive:801618},emerald_matrix:{fogColor:270097,hemiSky:4906624,hemiGround:339480,accentColor:2278750,floorColor:8843180,floorEmissive:672286}};class Gm{renderer;scene;camera;worldSize;camTarget=new O(1100,0,1100);projVec=new O;armorBumpTex;floorHexTex;glowSpriteTex;dirLight;backLight;hemiLight;floorMat;currentActiveTheme=null;themeTextureCache=new Map;reactorRings=[];reactorPulseRing;reactorCoreMat;barrierBeamMat;pylonRings=[];holoSkyscraperRings=[];dustPoints;playerGroup=new ht;playerChassisMat;playerSecondaryMat;playerGlowMat;playerHaloSprite;playerTurretGroup=new ht;playerThrusterMesh;playerLight;commanderAttachments={vanguard:new ht,valkyrie:new ht,tesla_engineer:new ht,void_phantom:new ht};weaponPods=[];geoLoot=new Qn(9.5,0);geoProjSphere=new Bt(6.5,16,16);geoProjSaw=new ot(16,16,3,24);geoParticle=new oa(4.5,0);geoFrostRing=new Ri(.88,1,48);enemyMeshes=new Map;lootPool=[];projPool=[];particlePool=[];frostPool=[];lightningLines=[];constructor(e,t){this.worldSize=t,this.renderer=new Fm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ml,this.renderer.toneMapping=Br,this.renderer.toneMappingExposure=1.28,this.renderer.domElement.id="webgl-canvas",e.parentElement?.insertBefore(this.renderer.domElement,e),this.scene=new $l,this.scene.fog=new ia(1711946,22e-5);const n=new rs(this.renderer);n.compileEquirectangularShader(),this.scene.environment=n.fromScene(new Bm,.04).texture,this.armorBumpTex=this.createSciFiArmorTexture(),this.glowSpriteTex=this.createGlowSpriteTexture();const i=this.getThemeTextures("cyber_nebula");this.floorHexTex=i.floor,this.scene.background=i.sky,this.camera=new tn(45,window.innerWidth/window.innerHeight,10,7e3),this.camera.position.set(t/2,530,t/2+430),this.camera.lookAt(t/2,0,t/2),this.geoFrostRing.rotateX(-Math.PI/2),this.hemiLight=new kd(9684477,988970,1.4),this.scene.add(this.hemiLight),this.dirLight=new Zo(16317180,3.2),this.dirLight.position.set(t/2+320,780,t/2+260),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.set(2048,2048),this.dirLight.shadow.camera.left=-620,this.dirLight.shadow.camera.right=620,this.dirLight.shadow.camera.top=620,this.dirLight.shadow.camera.bottom=-620,this.dirLight.shadow.camera.near=100,this.dirLight.shadow.camera.far=1600,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target),this.backLight=new Zo(11032055,1.6),this.backLight.position.set(t/2-550,650,t/2-550),this.scene.add(this.backLight),this.buildCyberMegacityAndArena(),this.buildPlayerMech(),this.buildWeaponDronePods();const a=Pe.getInstance().data.selectedTheme||"auto";this.applyTheme(a,1)}resize(e,t){this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}createSciFiArmorTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,256,256),t.fillStyle="#707070";for(let i=0;i<256;i+=8)for(let a=0;a<256;a+=8)(a+i)%16===0&&t.fillRect(a,i,4,4);t.strokeStyle="#303030",t.lineWidth=3,t.strokeRect(6,6,244,244),t.beginPath(),t.moveTo(0,128),t.lineTo(256,128),t.moveTo(128,0),t.lineTo(128,256),t.stroke(),t.strokeStyle="#b8b8b8",t.lineWidth=1.5,t.strokeRect(10,10,236,236);const n=new ks(e);return n.wrapS=jn,n.wrapT=jn,n.repeat.set(2,2),n}applyTheme(e,t=1){let n;if(e==="auto"){const r=["cyber_nebula","solar_inferno","cryo_glacier","emerald_matrix"],o=Math.floor(Math.max(0,t-1)/5)%r.length;n=r[o]}else n=e;if(this.currentActiveTheme===n&&this.scene.background)return;this.currentActiveTheme=n;const i=this.getThemeTextures(n),a=km[n];this.scene.background=i.sky,this.scene.fog instanceof ia&&this.scene.fog.color.setHex(a.fogColor),this.hemiLight&&(this.hemiLight.color.setHex(a.hemiSky),this.hemiLight.groundColor.setHex(a.hemiGround)),this.floorMat&&(this.floorMat.map=i.floor,this.floorMat.bumpMap=i.floor,this.floorMat.emissiveMap=i.floor,this.floorMat.color.setHex(a.floorColor),this.floorMat.emissive.setHex(a.floorEmissive),this.floorMat.needsUpdate=!0),this.barrierBeamMat&&this.barrierBeamMat.color.setHex(a.accentColor),this.reactorCoreMat&&this.reactorCoreMat.color.setHex(a.accentColor),this.dustPoints&&this.dustPoints.material&&this.dustPoints.material.color.setHex(a.accentColor)}getThemeTextures(e){const t=this.themeTextureCache.get(e);if(t)return t;const n=this.generateSkyTexture(e),i=this.generateFloorTexture(e),a={sky:n,floor:i};return this.themeTextureCache.set(e,a),a}generateSkyTexture(e){const t=document.createElement("canvas");t.width=1024,t.height=1024;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,1024);e==="solar_inferno"?(i.addColorStop(0,"#1c0505"),i.addColorStop(.4,"#581309"),i.addColorStop(.72,"#a3360b"),i.addColorStop(1,"#f97316")):e==="cryo_glacier"?(i.addColorStop(0,"#03111f"),i.addColorStop(.4,"#07364d"),i.addColorStop(.75,"#0e7490"),i.addColorStop(1,"#67e8f9")):e==="emerald_matrix"?(i.addColorStop(0,"#02160c"),i.addColorStop(.4,"#064227"),i.addColorStop(.75,"#047857"),i.addColorStop(1,"#34d399")):(i.addColorStop(0,"#0b0f3a"),i.addColorStop(.45,"#3b1a6e"),i.addColorStop(.75,"#a3318f"),i.addColorStop(1,"#ff7a59")),n.fillStyle=i,n.fillRect(0,0,1024,1024);let a;e==="solar_inferno"?a=[[240,280,280,"rgba(249,115,22,0.45)"],[750,260,300,"rgba(239,68,68,0.42)"],[500,650,320,"rgba(251,146,60,0.35)"],[820,680,260,"rgba(245,158,11,0.32)"]]:e==="cryo_glacier"?a=[[220,280,260,"rgba(34,211,238,0.45)"],[720,240,300,"rgba(6,182,212,0.4)"],[520,620,320,"rgba(103,232,249,0.32)"],[850,690,250,"rgba(165,243,252,0.28)"]]:e==="emerald_matrix"?a=[[220,300,260,"rgba(34,197,94,0.45)"],[760,240,300,"rgba(16,185,129,0.42)"],[500,640,340,"rgba(74,222,128,0.3)"],[840,690,260,"rgba(5,150,105,0.35)"]]:a=[[220,300,260,"rgba(56,189,248,0.35)"],[760,220,300,"rgba(168,85,247,0.38)"],[520,620,340,"rgba(236,72,153,0.28)"],[860,700,240,"rgba(34,211,238,0.25)"]];for(const[o,l,c,h]of a){const g=n.createRadialGradient(o,l,10,o,l,c);g.addColorStop(0,h),g.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=g,n.fillRect(0,0,1024,1024)}if(e==="emerald_matrix"){n.fillStyle="#86efac";for(let o=20;o<1024;o+=38){const l=Math.random()*380,c=120+Math.random()*260;for(let h=l;h<l+c;h+=14)n.globalAlpha=Math.random()*.85,n.fillRect(o,h,2.5,6)}}else{n.fillStyle=e==="solar_inferno"?"#fef08a":"#ffffff";for(let o=0;o<260;o++)n.globalAlpha=.3+Math.random()*.7,n.fillRect(Math.random()*1024,Math.random()*700,1.8,1.8)}n.globalAlpha=1;const r=new ks(t);return r.colorSpace=qt,r}generateFloorTexture(e){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d");let i,a,r,o,l,c;e==="solar_inferno"?(i="#1c0a08",a="#30130f",r="#240d0a",o="#f97316",l="#ef4444",c="#fef08a"):e==="cryo_glacier"?(i="#0d2030",a="#14334a",r="#0f283a",o="#22d3ee",l="#06b6d4",c="#e0f2fe"):e==="emerald_matrix"?(i="#061d10",a="#0b331c",r="#072614",o="#22c55e",l="#10b981",c="#86efac"):(i="#1b2b4a",a="#27406b",r="#1e3358",o="#38bdf8",l="#a855f7",c="#facc15"),n.fillStyle=i,n.fillRect(0,0,512,512);const h=64;for(let d=0;d<512;d+=h)for(let p=0;p<512;p+=h)n.fillStyle=(d/h+p/h)%2===0?a:r,n.fillRect(d+4,p+4,h-8,h-8);n.shadowColor=o,n.shadowBlur=8,n.strokeStyle=o,n.lineWidth=2.5;for(let d=0;d<=512;d+=h*2)n.beginPath(),n.moveTo(d,0),n.lineTo(d,512),n.moveTo(0,d),n.lineTo(512,d),n.stroke();n.shadowColor=l,n.strokeStyle=l,n.lineWidth=2;for(let d=0;d<512;d+=h*2)for(let p=0;p<512;p+=h*2)n.beginPath(),n.moveTo(d+14,p+14),n.lineTo(d+50,p+14),n.lineTo(d+50,p+50),n.stroke(),n.fillStyle=c,n.beginPath(),n.arc(d+14,p+14,3,0,Math.PI*2),n.fill();n.shadowBlur=0;const g=new ks(t);return g.wrapS=jn,g.wrapT=jn,g.repeat.set(28,28),g}createGlowSpriteTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,2,64,64,64);return n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.28,"rgba(56, 189, 248, 0.65)"),n.addColorStop(.65,"rgba(56, 189, 248, 0.18)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new ks(e)}enableShadowsRecursive(e){e.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)})}buildCyberMegacityAndArena(){const e=this.worldSize/2,t=new Float32Array(1600*3);for(let C=0;C<1600;C++)t[C*3]=e+(Math.random()-.5)*5600,t[C*3+1]=-300+Math.random()*1400,t[C*3+2]=e+(Math.random()-.5)*5600;const n=new Mt;n.setAttribute("position",new dn(t,3));const i=new Lr({color:9684477,size:6,transparent:!0,opacity:.75});this.scene.add(new Vo(n,i));const a=new Float32Array(260*3);for(let C=0;C<260;C++)a[C*3]=Math.random()*this.worldSize,a[C*3+1]=8+Math.random()*140,a[C*3+2]=Math.random()*this.worldSize;const r=new Mt;r.setAttribute("position",new dn(a,3));const o=new Lr({color:3718648,size:4.5,transparent:!0,opacity:.65});this.dustPoints=new Vo(r,o),this.scene.add(this.dustPoints);const l=new ls(this.worldSize+2400,this.worldSize+2400);l.rotateX(-Math.PI/2),this.floorMat=new Tn({color:12110079,map:this.floorHexTex,bumpMap:this.floorHexTex,bumpScale:1.2,emissive:1454174,emissiveMap:this.floorHexTex,emissiveIntensity:.55,metalness:.55,roughness:.38,clearcoat:.4,clearcoatRoughness:.25});const c=new ee(l,this.floorMat);c.position.set(e,-.5,e),c.receiveShadow=!0,this.scene.add(c);const h=new Jo(this.worldSize,44,1976635,988970);h.position.set(e,.15,e);const g=new Jo(this.worldSize,11,3718648,1920728);g.position.set(e,.3,e),this.scene.add(h,g),this.reactorCoreMat=new dt({color:3718648});const d=new ee(new ot(45,55,4,24),this.reactorCoreMat);d.position.set(e,1,e),this.scene.add(d),[78,125,175].forEach((C,R)=>{const L=new Ri(C-4,C,R===1?6:36);L.rotateX(-Math.PI/2);const D=new dt({color:R%2===0?3718648:11032055,side:Gt,transparent:!0,opacity:.78}),F=new ee(L,D);F.position.set(e,.6+R*.2,e),this.scene.add(F),this.reactorRings.push(F)});const x=new Ri(24,30,48);x.rotateX(-Math.PI/2),this.reactorPulseRing=new ee(x,new dt({color:3718648,transparent:!0,opacity:.8,side:Gt})),this.reactorPulseRing.position.set(e,1.2,e),this.scene.add(this.reactorPulseRing),this.barrierBeamMat=new dt({color:3718648});const b=new Tn({color:988970,emissive:165063,emissiveIntensity:.45,metalness:.9,roughness:.15,clearcoat:.7}),m=[10,22,34];for(const C of m){const R=new _t(this.worldSize,2.2,2.2),L=new _t(2.2,2.2,this.worldSize),D=new ee(R,this.barrierBeamMat);D.position.set(e,C,0);const F=new ee(R,this.barrierBeamMat);F.position.set(e,C,this.worldSize);const P=new ee(L,this.barrierBeamMat);P.position.set(0,C,e);const B=new ee(L,this.barrierBeamMat);B.position.set(this.worldSize,C,e),this.scene.add(D,F,P,B)}const f=new ot(20,28,125,16),_=[[0,0],[this.worldSize,0],[0,this.worldSize],[this.worldSize,this.worldSize]];for(const[C,R]of _){const L=new ee(f,b);L.position.set(C,62.5,R),L.castShadow=!0,this.scene.add(L);const D=new ee(new en(32,3,12,32),this.barrierBeamMat);D.rotation.x=Math.PI/2,D.position.set(C,105,R),this.scene.add(D),this.pylonRings.push(D)}const v=[16007006,16096779,11032055,2282478],y=95;[[y,y],[this.worldSize-y,y],[this.worldSize-y,this.worldSize-y],[y,this.worldSize-y]].forEach(([C,R],L)=>{const D=v[L],F=new Ri(38,48,40);F.rotateX(-Math.PI/2);const P=new ee(F,new dt({color:D,transparent:!0,opacity:.85,side:Gt}));P.position.set(C,1.4,R),this.scene.add(P),this.reactorRings.push(P);const B=new ee(new ot(30,30,160,20,1,!0),new dt({color:D,transparent:!0,opacity:.18,side:Gt}));B.position.set(C,80,R),this.scene.add(B)});const T=new Qn(1,0),u=[3718648,11032055,15485081,2282478];for(let C=0;C<22;C++){const R=C/22*Math.PI*2+C%3*.4,L=260+C*97%700,D=Math.max(160,Math.min(this.worldSize-160,e+Math.cos(R)*L)),F=Math.max(160,Math.min(this.worldSize-160,e+Math.sin(R)*L)),P=10+C%4*5,B=new ee(T,new dt({color:u[C%4],transparent:!0,opacity:.85}));B.scale.set(P,P*2.3,P),B.position.set(D,P*1.4,F),this.scene.add(B),this.holoSkyscraperRings.push(B)}const M=new Tn({color:461593,emissive:988970,metalness:.9,roughness:.2,clearcoat:.6});for(let C=0;C<24;C++){const R=C/24*Math.PI*2,L=this.worldSize*.82+C%3*180,D=e+Math.cos(R)*L,F=e+Math.sin(R)*L,P=280+C%5*110,B=65+C%3*20,q=new ee(new _t(B,P,B),M);q.position.set(D,P/2-40,F),this.scene.add(q);const z=C%2===0?3718648:11032055,ne=new ee(new _t(B+4,P*.85,4),new dt({color:z}));if(ne.position.set(D,P/2-40,F),this.scene.add(ne),C%3===0){const W=new ee(new en(B*.85,3,8,24),new dt({color:z,wireframe:!0}));W.rotation.x=Math.PI/2,W.position.set(D,P-25,F),this.scene.add(W),this.holoSkyscraperRings.push(W)}}}buildPlayerMech(){this.playerChassisMat=new Tn({color:959977,emissive:959977,emissiveIntensity:.35,bumpMap:this.armorBumpTex,bumpScale:.8,metalness:.88,roughness:.16,clearcoat:.9,clearcoatRoughness:.1}),this.playerSecondaryMat=new Tn({color:1976635,bumpMap:this.armorBumpTex,bumpScale:.6,metalness:.92,roughness:.2,clearcoat:.7}),this.playerGlowMat=new dt({color:3718648});const e=new Ji({map:this.glowSpriteTex,color:3718648,blending:Ai,depthWrite:!1,transparent:!0,opacity:.75});this.playerHaloSprite=new ys(e),this.playerHaloSprite.scale.set(85,85,1),this.playerHaloSprite.position.y=18,this.playerGroup.add(this.playerHaloSprite);const t=new wn(11,18,16);t.rotateX(Math.PI),this.playerThrusterMesh=new ee(t,this.playerGlowMat),this.playerThrusterMesh.position.y=6,this.playerGroup.add(this.playerThrusterMesh);const n=new en(23,2.4,16,36);n.rotateX(Math.PI/2);const i=new ee(n,this.playerGlowMat);i.position.y=8,this.playerGroup.add(i);const a=new ee(new ot(16,20,12,16),this.playerSecondaryMat);a.position.y=13,this.playerGroup.add(a);const r=new ee(new ot(15,13,14,16),this.playerChassisMat);this.playerTurretGroup.add(r);const o=new ee(new Bt(6.5,20,20),this.playerGlowMat);o.position.set(13,1,0),this.playerTurretGroup.add(o);const l=new Bt(9.5,20,16);l.scale(1.15,.85,1);const c=new ee(l,this.playerChassisMat);c.position.set(0,6,-16);const h=new ee(l,this.playerChassisMat);h.position.set(0,6,16),this.playerTurretGroup.add(c,h);const g=new ee(new Bt(9.2,24,24),this.playerSecondaryMat);g.position.set(2,12,0);const d=new ee(new ot(9.6,9.6,3.8,20,1,!1,-Math.PI*.35,Math.PI*.7),this.playerGlowMat);d.rotation.y=Math.PI/2,d.position.set(2.5,12,0),this.playerTurretGroup.add(g,d);const p=new ot(2.8,3.2,22,16);p.rotateZ(Math.PI/2);const x=new ee(p,this.playerSecondaryMat);x.position.set(14,1,-14);const b=new ee(p,this.playerSecondaryMat);b.position.set(14,1,14),this.playerTurretGroup.add(x,b);const m=new _t(8,22,4),f=new ee(m,this.playerChassisMat);f.position.set(-12,8,-14),f.rotation.z=-.3;const _=new ee(m,this.playerChassisMat);_.position.set(-12,8,14),_.rotation.z=-.3,this.commanderAttachments.vanguard.add(f,_);const v=new dt({color:2282478,side:Gt}),y=new wn(3.5,24,12);y.rotateZ(Math.PI/2);for(let F=0;F<3;F++){const P=new ee(y,v);P.position.set(-14-F*3,12-F*5,-16-F*5),P.rotation.y=-.5,P.rotation.z=.35-F*.15;const B=new ee(y,v);B.position.set(-14-F*3,12-F*5,16+F*5),B.rotation.y=.5,B.rotation.z=.35-F*.15,this.commanderAttachments.valkyrie.add(P,B)}const w=new ee(new en(13,1.6,12,32),v);w.rotation.x=Math.PI/2,w.position.set(0,23,0),this.commanderAttachments.valkyrie.add(w);const T=new ot(4,5.5,24,16),u=new ee(T,this.playerChassisMat);u.position.set(-12,14,-11);const M=new ee(T,this.playerChassisMat);M.position.set(-12,14,11);const C=new ee(new en(18,2,12,32),this.playerGlowMat);C.position.set(-12,24,0),this.commanderAttachments.tesla_engineer.add(u,M,C);const R=new wn(5.5,32,12);R.rotateZ(Math.PI*.65);const L=new ee(R,this.playerChassisMat);L.position.set(-16,10,-18),L.rotation.y=-.4;const D=new ee(R,this.playerChassisMat);D.position.set(-16,10,18),D.rotation.y=.4,this.commanderAttachments.void_phantom.add(L,D);for(const F of Object.values(this.commanderAttachments))this.playerTurretGroup.add(F);this.playerTurretGroup.position.y=24,this.playerGroup.add(this.playerTurretGroup),this.playerLight=new sc(3718648,4.5,480,1.5),this.playerLight.position.set(0,52,0),this.playerGroup.add(this.playerLight),this.enableShadowsRecursive(this.playerGroup),this.scene.add(this.playerGroup)}buildWeaponDronePods(){for(let e=0;e<6;e++){const t=new ht,n=new Tn({color:3718648,emissive:3718648,emissiveIntensity:.4,bumpMap:this.armorBumpTex,bumpScale:.5,metalness:.88,roughness:.16,clearcoat:.85}),i=new dt({color:16777215}),a=new ys(new Ji({map:this.glowSpriteTex,color:3718648,blending:Ai,depthWrite:!1,transparent:!0,opacity:.65}));a.scale.set(34,34,1),t.add(a);const r=new ht,o=new ee(new Bt(7.2,20,20),n),l=new ot(1.8,1.8,15,12);l.rotateZ(Math.PI/2);const c=new ee(l,i);c.position.set(6,0,-3.2);const h=new ee(l,i);h.position.set(6,0,3.2),r.add(o,c,h);const g=new ht,d=new ee(new ot(3.2,6.5,17,16),n),p=new ee(new en(9.5,1.6,12,28),i);p.rotation.x=Math.PI/2,p.position.y=5,g.add(d,p);const x=new ht,b=new ee(new Qn(8.5,1),i),m=new ee(new en(11.5,1.6,12,24),n);m.rotation.x=Math.PI/2,x.add(b,m);const f=new ht,_=new ee(new ot(11.5,11.5,2.4,24),n),v=new ee(new Bt(4.5,16,16),i);f.add(_,v);const y=new ht,w=new ee(new ot(7,8,12,16),n),T=new ee(new Bt(4.5,16,12),i);T.position.y=7,y.add(w,T);const u={plasma:r,tesla:g,frost:x,sawblade:f,missile:y};for(const P of Object.values(u))t.add(P);const M=new ht,C=new _t(4,2,17),R=new ee(C,n);M.add(R),t.add(M);const L=new ee(new en(13.5,1.3,12,28),i);L.rotation.x=Math.PI/2,t.add(L);const D=new ht,F=new dt({color:16436245});for(let P=0;P<4;P++){const B=P/4*Math.PI*2,q=new ee(new Qn(3.2,0),F);q.position.set(Math.cos(B)*14,6,Math.sin(B)*14),D.add(q)}t.add(D),this.enableShadowsRecursive(t),t.visible=!1,this.scene.add(t),this.weaponPods.push({root:t,archetypeGroups:u,tierWings:M,tierRing:L,tierCrown:D,primaryMat:n,emissiveMat:i,glowSprite:a})}}worldToScreen(e,t,n=0){this.projVec.set(e,n,t),this.projVec.project(this.camera);const i=window.innerWidth/2,a=window.innerHeight/2;return{x:this.projVec.x*i+i,y:-this.projVec.y*a+a,visible:this.projVec.z<1}}renderScene(e){const t=performance.now()*.001,{player:n,equippedWeapons:i,enemies:a,projectiles:r,lootDrops:o,frostRings:l,lightningBolts:c,particles:h,screenShake:g,bossRageStage:d}=e,p=(Math.random()-.5)*g*1.4,x=(Math.random()-.5)*g*1.4;this.camTarget.x+=(n.x-this.camTarget.x)*.18,this.camTarget.z+=(n.y-this.camTarget.z)*.18,this.camera.position.set(this.camTarget.x+p,530,this.camTarget.z+430+x),this.camera.lookAt(this.camTarget.x+p*.3,0,this.camTarget.z+x*.3),this.dirLight.position.set(this.camTarget.x+280,780,this.camTarget.z+240),this.dirLight.target.position.set(this.camTarget.x,0,this.camTarget.z),this.dirLight.target.updateMatrixWorld(),this.reactorRings.forEach((T,u)=>{T.rotation.z=t*(u%2===0?.45:-.65)});const b=1+t%1.8*3.8;this.reactorPulseRing.scale.setScalar(b),this.reactorPulseRing.material.opacity=Math.max(0,.75-t%1.8*.4);for(const T of this.pylonRings)T.rotation.z=t*2.2;for(const T of this.holoSkyscraperRings)T.rotation.z=-t*.8;if(this.dustPoints.position.y=Math.sin(t*1.5)*6,d>0){const T=.5+.5*Math.sin(t*(4+d*3));this.barrierBeamMat.color.setHex(T>.5?16007006:16436245),this.reactorCoreMat.color.setHex(16007006),this.backLight.color.setHex(15680580),this.backLight.intensity=2.2+d*.5}else this.barrierBeamMat.color.setHex(3718648),this.reactorCoreMat.color.setHex(3718648),this.backLight.color.setHex(11032055),this.backLight.intensity=1.6;const m=Pe.getInstance().data.selectedCommander,f={vanguard:{primary:959977,glow:3718648},valkyrie:{primary:15485081,glow:2282478},tesla_engineer:{primary:11032055,glow:16436245},void_phantom:{primary:14753096,glow:16007006}},_=f[m]||f.vanguard,v=n.invulnTimer>0&&Math.floor(performance.now()/60)%2===0;this.playerChassisMat.color.setHex(v?16777215:_.primary),this.playerChassisMat.emissive.setHex(v?16777215:_.primary),this.playerGlowMat.color.setHex(_.glow),this.playerHaloSprite.material.color.setHex(_.glow),this.playerLight.color.setHex(_.glow);for(const[T,u]of Object.entries(this.commanderAttachments))u.visible=T===m;const y=Math.sin(t*6)*2.5;this.playerGroup.position.set(n.x,y,n.y),this.playerTurretGroup.rotation.y=-n.angle,this.playerThrusterMesh.scale.y=.85+Math.sin(t*28)*.25;for(let T=0;T<6;T++){const u=i[T],M=this.weaponPods[T];if(!u){M.root.visible=!1;continue}M.root.visible=!0;for(const[F,P]of Object.entries(M.archetypeGroups))P.visible=F===u.archetype;M.tierWings.visible=u.tier>=2,M.tierRing.visible=u.tier>=3,M.tierCrown.visible=u.tier>=5,M.tierCrown.rotation.y=t*3.5;const C=n.x+Math.cos(u.orbitAngle)*52,R=n.y+Math.sin(u.orbitAngle)*52,L=.85+u.tier*.14;M.root.position.set(C,20+Math.sin(t*7+T)*2.5,R),M.root.scale.setScalar(L),M.root.rotation.y=t*(u.archetype==="sawblade"?12:3.2)+T;const D=new De(es[u.tier-1]||"#38bdf8");M.primaryMat.color.copy(D),M.primaryMat.emissive.copy(D),M.glowSprite.material.color.copy(D)}const w=new Set;for(let T=0;T<a.length;T++){const u=a[T];w.add(u.id);let M=this.enemyMeshes.get(u.id);M||(M=this.createEnemyMesh(u),this.enemyMeshes.set(u.id,M),this.scene.add(M.group));const C=Math.atan2(n.y-u.y,n.x-u.x),R=Math.sin(t*7+u.id)*2.2;if(M.group.position.set(u.x,u.radius*.85+R,u.y),u.type==="swarmer")M.group.rotation.y=-C,M.legs&&M.legs.forEach((L,D)=>{L.rotation.z=Math.sin(t*20+D%2*Math.PI)*.35}),M.abdomen&&M.abdomen.scale.setScalar(1+Math.sin(t*10+u.id)*.12);else if(u.type==="speedster"){if(M.group.rotation.y=-C,M.group.rotation.x=Math.sin(t*9+u.id)*.22,M.flames){const L=.75+Math.sin(t*35+u.id)*.35;M.flames.forEach(D=>D.scale.y=L)}}else if(u.type==="charger")M.group.rotation.y=-C,M.group.rotation.z=-.22;else if(u.type==="tank")M.group.rotation.y=-C,M.turret&&(M.turret.rotation.y=Math.sin(t*2.5+u.id)*.35),M.wheels&&M.wheels.forEach(L=>L.rotation.z-=.08);else if(u.type==="rival")M.group.rotation.y=-C,M.shieldsGroup&&(M.shieldsGroup.rotation.y=t*4.5+u.id);else if(u.type==="boss"){const L=1+d*.1;M.group.scale.setScalar(L);const D=1+d*.55;M.group.rotation.y+=.02*D,M.ringX&&(M.ringX.rotation.x+=.045*D),M.ringY&&(M.ringY.rotation.y-=.055*D),M.ringZ&&(M.ringZ.rotation.z+=.05*D),M.shieldsGroup&&(M.shieldsGroup.rotation.y-=.035*D),M.innerStar&&M.innerStar.scale.setScalar(1+Math.sin(t*(6+d*4))*.18)}u.hitFlash>0?(M.mainMat.color.setHex(16777215),M.mainMat.emissive.setHex(16777215),M.mainMat.emissiveIntensity=1):u.slowTimer>0?(M.mainMat.color.setHex(6809849),M.mainMat.emissive.setHex(165063),M.mainMat.emissiveIntensity=.65):(M.mainMat.color.set(u.color),M.mainMat.emissive.set(u.color),M.mainMat.emissiveIntensity=u.type==="boss"?.55+d*.2:.32)}for(const[T,u]of this.enemyMeshes.entries())w.has(T)||(this.scene.remove(u.group),u.mainMat.dispose(),u.accentMat.dispose(),this.enemyMeshes.delete(T));this.syncProjectiles(r),this.syncLootDrops(o,t),this.syncFrostRings(l),this.syncLightningBolts(c),this.syncParticles(h),this.renderer.render(this.scene,this.camera)}createEnemyMesh(e){const t=new ht,n=new Tn({color:e.color,emissive:e.color,emissiveIntensity:.32,bumpMap:this.armorBumpTex,bumpScale:.7,metalness:.85,roughness:.2,clearcoat:.8,clearcoatRoughness:.15}),i=new dt({color:16436245}),a=new Tn({color:988970,bumpMap:this.armorBumpTex,bumpScale:.5,metalness:.9,roughness:.22,clearcoat:.6});if(e.type==="swarmer"){const m=new ee(new Bt(9.5,16,16),a),f=new ee(new Bt(11.5,20,20),n);f.scale.set(1.25,.9,1),f.position.set(-11,2,0);const _=new ee(new Bt(2.4,10,10),i);_.position.set(8,3,-4);const v=new ee(new Bt(2.4,10,10),i);v.position.set(8,3,4);const y=[],w=new ot(1.5,.8,15,8);for(let T=0;T<6;T++){const u=T<3?-1:1,M=T%3,C=new ee(w,n);C.position.set((M-1)*7,-4,u*11),C.rotation.x=u*.45,t.add(C),y.push(C)}return t.add(m,f,_,v),this.enableShadowsRecursive(t),{type:e.type,group:t,mainMat:n,accentMat:i,legs:y,abdomen:f}}if(e.type==="speedster"){const m=new wn(8.5,32,16);m.rotateZ(-Math.PI/2);const f=new ee(m,n),_=new _t(14,2,34),v=new ee(_,a);v.position.set(-4,0,0);const y=new ee(new Bt(5,16,12),new dt({color:3718648}));y.scale.set(1.8,.7,.85),y.position.set(2,4,0);const w=new wn(4,15,12);w.rotateZ(Math.PI/2);const T=new dt({color:16347926}),u=new ee(w,T);u.position.set(-19,0,-5);const M=new ee(w,T);return M.position.set(-19,0,5),t.add(f,v,y,u,M),this.enableShadowsRecursive(t),{type:e.type,group:t,mainMat:n,accentMat:i,flames:[u,M]}}if(e.type==="charger"){const m=new ee(new ot(14,16,22,16),n);m.rotation.z=Math.PI/2;const f=new ee(new _t(8,16,28),a);f.position.set(13,-2,0);const _=new wn(4.5,24,14);_.rotateZ(-Math.PI/2);const v=new ee(_,i);v.position.set(18,5,-11);const y=new ee(_,i);return y.position.set(18,5,11),t.add(m,f,v,y),this.enableShadowsRecursive(t),{type:e.type,group:t,mainMat:n,accentMat:i}}if(e.type==="tank"){const m=new ee(new _t(34,18,28),n),f=new _t(38,12,8),_=new ee(f,a);_.position.set(0,-4,-17);const v=new ee(f,a);v.position.set(0,-4,17);const y=[],w=new ot(5.2,5.2,10,16);w.rotateX(Math.PI/2);for(const L of[-12,0,12]){const D=new ee(w,i);D.position.set(L,-4,-17);const F=new ee(w,i);F.position.set(L,-4,17),t.add(D,F),y.push(D,F)}const T=new ht,u=new ee(new ot(12,15,10,20),a),M=new ot(2.8,3.2,26,16);M.rotateZ(Math.PI/2);const C=new ee(M,n);C.position.set(14,1,-5);const R=new ee(M,n);return R.position.set(14,1,5),T.add(u,C,R),T.position.y=13,t.add(m,_,v,T),this.enableShadowsRecursive(t),{type:e.type,group:t,mainMat:n,accentMat:i,turret:T,wheels:y}}if(e.type==="rival"){const m=new ee(new en(26,2.2,12,32),new dt({color:16007006}));m.rotation.x=Math.PI/2,m.position.y=-10,t.add(m);const f=new ee(new ot(14,18,12,16),a);f.position.y=-4;const _=new ee(new ot(14,12,15,16),n);_.position.y=7;const v=new ee(new _t(12,9,10),n);v.position.set(0,11,-15);const y=new ee(new _t(12,9,10),n);y.position.set(0,11,15);const w=new ee(new Bt(8.5,16,16),a);w.position.set(0,18,0);const T=new ee(new _t(8,3.5,13),i);T.position.set(5,18,0);const u=new ot(2.2,2.2,18,12);u.rotateZ(Math.PI/2);const M=new ee(u,i);M.position.set(14,8,-12);const C=new ee(u,i);C.position.set(14,8,12);const R=new ht;R.position.y=10;const L=new Qn(5.5,1);for(let D=0;D<3;D++){const F=D/3*Math.PI*2,P=new ee(L,i);P.position.set(Math.cos(F)*34,0,Math.sin(F)*34),R.add(P)}return t.add(f,_,v,y,w,T,M,C,R),this.enableShadowsRecursive(t),{type:e.type,group:t,mainMat:n,accentMat:i,shieldsGroup:R}}const r=new ee(new Zr(27,2),new dt({color:16777215})),o=new ee(new oa(44,1),n),l=new ys(new Ji({map:this.glowSpriteTex,color:16007006,blending:Ai,depthWrite:!1,transparent:!0,opacity:.85}));l.scale.set(160,160,1),t.add(l);const c=new en(60,3.5,16,48),h=new ee(c,i),g=new ee(c,n);g.rotation.x=Math.PI/2;const d=new ee(c,i);d.rotation.y=Math.PI/2;const p=new ht,x=new _t(10,36,26);for(let m=0;m<4;m++){const f=m/4*Math.PI*2,_=new ee(x,a);_.position.set(Math.cos(f)*70,0,Math.sin(f)*70),_.rotation.y=-f,p.add(_)}const b=new ee(new wn(15,40,16),i);return b.position.y=56,t.add(r,o,h,g,d,p,b),this.enableShadowsRecursive(t),{type:e.type,group:t,mainMat:n,accentMat:i,ringX:h,ringY:g,ringZ:d,shieldsGroup:p,innerStar:r}}syncProjectiles(e){for(;this.projPool.length<e.length;){const t=new dt({color:3718648}),n=new ee(this.geoProjSphere,t),i=new ys(new Ji({map:this.glowSpriteTex,color:3718648,blending:Ai,depthWrite:!1,transparent:!0,opacity:.7}));i.scale.set(24,24,1),n.add(i),this.scene.add(n),this.projPool.push(n)}for(let t=0;t<this.projPool.length;t++){const n=this.projPool[t];if(t>=e.length){n.visible=!1;continue}const i=e[t];n.visible=!0,n.geometry=i.isSawblade?this.geoProjSaw:this.geoProjSphere,n.material.color.set(i.color);const a=n.children[0];if(a&&a.material.color.set(i.color),n.position.set(i.x,18,i.y),i.isSawblade){const r=i.radius/16;n.scale.set(r,1,r),n.rotation.y=i.rotation||0}else{const r=i.radius/6;n.scale.setScalar(r)}}}syncLootDrops(e,t){for(;this.lootPool.length<e.length;){const n=new Tn({color:16436245,emissive:16436245,emissiveIntensity:.55,metalness:.85,roughness:.12,clearcoat:1}),i=new ee(this.geoLoot,n);i.castShadow=!0,this.scene.add(i),this.lootPool.push(i)}for(let n=0;n<this.lootPool.length;n++){const i=this.lootPool[n];if(n>=e.length){i.visible=!1;continue}const a=e[n];i.visible=!0;const r=a.type==="gold"?16436245:a.type==="gem"?3718648:a.type==="weapon_pod"?12616956:4906624,o=i.material;o.color.setHex(r),o.emissive.setHex(r),i.scale.setScalar(a.type==="weapon_pod"?1.45:1),i.position.set(a.x,10+Math.sin(t*5+n)*3,a.y),i.rotation.y=t*3+n}}syncFrostRings(e){for(;this.frostPool.length<e.length;){const t=new dt({color:6809849,transparent:!0,opacity:.8,side:Gt}),n=new ee(this.geoFrostRing,t);this.scene.add(n),this.frostPool.push(n)}for(let t=0;t<this.frostPool.length;t++){const n=this.frostPool[t];if(t>=e.length){n.visible=!1;continue}const i=e[t];n.visible=!0,n.position.set(i.x,3,i.y),n.scale.setScalar(Math.max(1,i.currentRadius));const a=n.material;a.color.set(i.color),a.opacity=Math.max(0,i.alpha)}}syncLightningBolts(e){for(const t of this.lightningLines)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.lightningLines=[];for(const t of e){if(t.points.length<2)continue;const n=t.points.map(o=>new O(o.x,22,o.y)),i=new Mt().setFromPoints(n),a=new Kr({color:t.color,transparent:!0,opacity:Math.max(0,t.alpha)}),r=new Jl(i,a);this.scene.add(r),this.lightningLines.push(r)}}syncParticles(e){for(;this.particlePool.length<e.length;){const t=new dt({color:16777215,transparent:!0,opacity:1}),n=new ee(this.geoParticle,t);this.scene.add(n),this.particlePool.push(n)}for(let t=0;t<this.particlePool.length;t++){const n=this.particlePool[t];if(t>=e.length){n.visible=!1;continue}const i=e[t];n.visible=!0,n.position.set(i.x,12+i.alpha*14,i.y),n.rotation.x+=.15,n.rotation.y+=.15,n.scale.setScalar(i.radius/3);const a=n.material;a.color.set(i.color),a.opacity=Math.max(0,i.alpha)}}}const Hm=[{id:"overclock",icon:"⚡",titleEn:"Overclocked Barrels",titleTr:"Aşırtılmış Namlular",descEn:"+20% Attack Speed for all orbital weapons this run",descTr:"Bu tur tüm yörünge silahları için +%20 Saldırı Hızı",color:"#38bdf8"},{id:"crit_matrix",icon:"🎯",titleEn:"Critical Matrix",titleTr:"Kritik Matris",descEn:"+15% Critical Hit Chance (2x Damage) & +10% Base Damage",descTr:"+%15 Kritik Vuruş Şansı (2x Hasar) & +%10 Temel Hasar",color:"#f43f5e"},{id:"nanite_hull",icon:"🛡️",titleEn:"Nanite Hull Plating",titleTr:"Nanit Zırh Kaplaması",descEn:"+40 Max HP & Immediately Restore 50 HP",descTr:"+40 Maksimum Can & Anında 50 Can Yenileme",color:"#22c55e"},{id:"scrap_harvester",icon:"🪙",titleEn:"Scrap Harvester",titleTr:"Hurda Toplayıcı",descEn:"+30% Gold Dropped from Enemies + Instant +80 Gold",descTr:"Düşmanlardan +%30 Daha Fazla Altın + Anında +80 Altın",color:"#facc15"},{id:"grav_magnet",icon:"🧲",titleEn:"Graviton Magnet",titleTr:"Graviton Mıknatısı",descEn:"+50% Loot Pickup Radius & +12% Move Speed",descTr:"+%50 Ganimet Çekim Alanı & +%12 Hareket Hızı",color:"#a855f7"},{id:"plasma_core",icon:"🔥",titleEn:"Superheated Core",titleTr:"Aşırı Isınmış Çekirdek",descEn:"+25% All Weapon Damage this run",descTr:"Bu turda tüm silahlar için +%25 Hasar Bonusu",color:"#fb923c"}];class zm{canvas;ctx;renderer3d;weapons;state="MENU";worldSize=2200;player={x:1100,y:1100,radius:20,hp:100,maxHp:100,speed:245,invulnTimer:0,angle:0,level:1,xp:0,xpToNext:50};runBuffs={damageMult:0,attackSpeedMult:0,critChance:0,goldMult:0,magnetMult:0,moveSpeedMult:0};gameMode="SOLO";currentWave=1;waveTimer=25;waveDuration=25;bossElapsedTime=0;bossRageStage=0;runGoldEarned=0;waveGoldEarned=0;runKills=0;runScore=0;revivedThisRun=!1;gameSpeedMultiplier=1;tempAdSpeedWave=!1;enemies=[];projectiles=[];lightningBolts=[];frostRings=[];lootDrops=[];particles=[];floatingTexts=[];spawnTimer=0;enemyIdCounter=1;screenShake=0;isPausedBySdk=!1;keys=new Set;joyActive=!1;joyOriginX=0;joyOriginY=0;joyCurrentX=0;joyCurrentY=0;JOY_DEADZONE=8;JOY_MAX_RADIUS=52;onHudUpdate;onLevelUp;onWaveComplete;onPlayerDeath;lastFrameTime=performance.now();constructor(e){this.canvas=e;const t=e.getContext("2d");if(!t)throw new Error("Canvas 2D context not supported");this.ctx=t,this.weapons=new Vt,this.renderer3d=new Gm(e,this.worldSize),this.handleResize(),window.addEventListener("resize",()=>this.handleResize()),this.bindInputs(),requestAnimationFrame(n=>this.loop(n))}handleResize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.renderer3d?.resize(window.innerWidth,window.innerHeight)}bindInputs(){window.addEventListener("keydown",t=>{const n=t.target?.tagName;n==="INPUT"||n==="TEXTAREA"||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),this.keys.add(t.code))}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),this.canvas.addEventListener("pointerdown",t=>{this.joyActive=!0,this.joyOriginX=t.clientX,this.joyOriginY=t.clientY,this.joyCurrentX=t.clientX,this.joyCurrentY=t.clientY}),window.addEventListener("pointermove",t=>{if(this.joyActive){this.joyCurrentX=t.clientX,this.joyCurrentY=t.clientY;const n=this.joyCurrentX-this.joyOriginX,i=this.joyCurrentY-this.joyOriginY,a=Math.hypot(n,i),r=this.JOY_MAX_RADIUS*1.45;if(a>r){const o=a-r;this.joyOriginX+=n/a*o,this.joyOriginY+=i/a*o}}});const e=()=>{this.joyActive=!1};window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e)}setSdkPause(e){this.isPausedBySdk=e,this.lastFrameTime=performance.now()}startNewRun(e="SOLO"){this.gameMode=e;const t=Pe.getInstance(),n=t.data.selectedCommander;if(this.weapons.equipped=[null,null,null,null,null,null],this.weapons.bench=[null,null,null,null,null,null],this.runBuffs={damageMult:0,attackSpeedMult:n==="valkyrie"?.15:0,critChance:n==="void_phantom"?.2:0,goldMult:0,magnetMult:0,moveSpeedMult:n==="void_phantom"?.3:n==="valkyrie"?.12:0},n==="valkyrie"?(this.weapons.equipped[0]=this.weapons.createWeapon("frost",1),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)):n==="tesla_engineer"?(this.weapons.equipped[0]=this.weapons.createWeapon("tesla",2),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)):n==="void_phantom"?(this.weapons.equipped[0]=this.weapons.createWeapon("sawblade",2),this.weapons.equipped[1]=this.weapons.createWeapon("missile",1)):(this.weapons.equipped[0]=this.weapons.createWeapon("plasma",1),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)),t.data.starterPackBought&&this.weapons.addWeaponToAvailableSlot(this.weapons.createWeapon("plasma",3)),e==="PVP"){const i=Math.min(4,Math.floor(t.data.meta.startingGoldLevel/2)+(t.data.techShards>=5?1:0)),a=["plasma","tesla","frost","sawblade","missile"];for(let r=0;r<i;r++){const o=a[(r+t.data.meta.damageLevel)%a.length];this.weapons.addWeaponToAvailableSlot(this.weapons.createWeapon(o,1))}this.weapons.autoMergeAll()}this.player.level=1,this.player.xp=0,this.player.xpToNext=45,this.currentWave=1,this.runGoldEarned=0,this.runKills=0,this.runScore=0,this.revivedThisRun=!1,t.addGold(t.getStartingWaveGold()),this.startWave(1)}applyTacticalCard(e){const t=Pe.getInstance();switch(e){case"overclock":this.runBuffs.attackSpeedMult+=.2;break;case"crit_matrix":this.runBuffs.critChance=Math.min(.85,this.runBuffs.critChance+.15),this.runBuffs.damageMult+=.1;break;case"nanite_hull":this.player.maxHp+=40,this.player.hp=Math.min(this.player.maxHp,this.player.hp+50);break;case"scrap_harvester":this.runBuffs.goldMult+=.3,t.addGold(80),this.runGoldEarned+=80,this.waveGoldEarned+=80;break;case"grav_magnet":this.runBuffs.magnetMult+=.5,this.runBuffs.moveSpeedMult+=.12;break;case"plasma_core":this.runBuffs.damageMult+=.25;break}this.onHudUpdate?.()}applyCurrentTheme(){const e=Pe.getInstance().data.selectedTheme||"auto";this.renderer3d.applyTheme(e,this.currentWave)}startWave(e){const t=Pe.getInstance();this.currentWave=e,this.applyCurrentTheme();const n=e%5===0;this.waveDuration=n?45:Math.min(40,22+e*2),this.waveTimer=this.waveDuration,this.waveGoldEarned=0,this.player.x=this.worldSize/2,this.player.y=this.worldSize/2;const i=100+t.getBonusMaxHp()+(e-1)*12;if(this.player.maxHp=Math.max(this.player.maxHp,i),this.player.hp=this.player.maxHp,this.player.invulnTimer=1,this.enemies=[],this.projectiles=[],this.lightningBolts=[],this.frostRings=[],this.lootDrops=[],this.bossElapsedTime=0,this.bossRageStage=0,!t.data.vipUnlocked&&!this.tempAdSpeedWave&&(this.gameSpeedMultiplier=1),n){this.spawnEnemy("boss");for(let a=0;a<4;a++)this.spawnWaveEnemy()}if(this.gameMode==="PVP")for(let a=0;a<3;a++)this.spawnRivalCommander(a);this.state="PLAYING",this.onHudUpdate?.(),this.persistSoloCheckpoint(e)}persistSoloCheckpoint(e){if(this.gameMode!=="SOLO")return;const t=n=>n?{archetype:n.archetype,tier:n.tier}:null;Pe.getInstance().saveSoloRun({wave:e,commander:Pe.getInstance().data.selectedCommander,equipped:this.weapons.equipped.map(t),bench:this.weapons.bench.map(t),runBuffs:{...this.runBuffs},player:{level:this.player.level,xp:this.player.xp,xpToNext:this.player.xpToNext,maxHp:this.player.maxHp},runGoldEarned:this.runGoldEarned,runKills:this.runKills,runScore:this.runScore,revivedThisRun:this.revivedThisRun})}saveCheckpointOnExit(){if(this.gameMode!=="SOLO")return;const e=this.state==="SHOP"?this.currentWave+1:this.currentWave;this.persistSoloCheckpoint(e)}resumeSoloRun(){const e=Pe.getInstance(),t=e.data.soloRun;if(!t)return!1;this.gameMode="SOLO",e.data.selectedCommander=t.commander;const n=i=>i?this.weapons.createWeapon(i.archetype,i.tier):null;for(this.weapons.equipped=t.equipped.map(n),this.weapons.bench=t.bench.map(n);this.weapons.equipped.length<Vt.MAX_EQUIPPED;)this.weapons.equipped.push(null);for(;this.weapons.bench.length<Vt.MAX_BENCH;)this.weapons.bench.push(null);return this.runBuffs={...t.runBuffs},this.player.level=t.player.level,this.player.xp=t.player.xp,this.player.xpToNext=t.player.xpToNext,this.player.maxHp=t.player.maxHp,this.runGoldEarned=t.runGoldEarned,this.runKills=t.runKills,this.runScore=t.runScore,this.revivedThisRun=t.revivedThisRun,this.startWave(t.wave),!0}revivePlayerWithNuke(){this.revivedThisRun=!0,this.player.hp=this.player.maxHp,this.player.invulnTimer=3,this.screenShake=18,this.bossElapsedTime=0,this.bossRageStage=0,_e.getInstance().playExplosion();let e=0;for(let t=0;t<this.enemies.length;t++){const n=this.enemies[t];this.spawnParticles(n.x,n.y,n.color,14),n.type==="boss"&&(n.hp=Math.max(1,n.hp*.5),this.enemies[e++]=n)}this.enemies.length=e,this.state="PLAYING",this.onHudUpdate?.()}loop(e){const t=Math.min(.05,(e-this.lastFrameTime)/1e3);if(this.lastFrameTime=e,!this.isPausedBySdk&&this.state==="PLAYING"){const n=t*this.gameSpeedMultiplier;this.update(n)}this.render(),requestAnimationFrame(n=>this.loop(n))}update(e){const t=Pe.getInstance();let n=null;for(let _=0;_<this.enemies.length;_++)if(this.enemies[_].type==="boss"){n=this.enemies[_];break}if(this.waveTimer-=e,n){this.waveTimer<0&&(this.waveTimer=0),this.bossElapsedTime+=e;const _=Math.min(3,Math.floor(this.bossElapsedTime/10));if(_>this.bossRageStage){this.bossRageStage=_,n.damage=Math.round(n.damage*1.35),n.speed=Math.round(n.speed*1.18),n.radius=Math.round(n.radius*1.08),this.screenShake=15,_e.getInstance().playExplosion();const v=$.getLang()==="tr"?`🔥 BOSS ÖFKE EVRESİ ${this.bossRageStage}! (+%35 HASAR)`:`🔥 BOSS RAGE STAGE ${this.bossRageStage}! (+35% DMG)`;this.spawnFloatingText(n.x,n.y-30,v,"#f97316",1.45)}if(this.bossElapsedTime>=34){this.screenShake=35,_e.getInstance().playExplosion(),this.spawnParticles(n.x,n.y,"#ef4444",45),this.spawnParticles(this.player.x,this.player.y,"#facc15",40);const v=$.getLang()==="tr"?"💥 ARENA İNFİLAK ETTİ! (34sn SÜRE DOLDU)":"💥 ARENA DETONATED! (34s LIMIT)";this.spawnFloatingText(this.player.x,this.player.y-30,v,"#ef4444",1.55),this.player.hp=0,this.handlePlayerDeath();return}}else if(this.bossRageStage=0,this.waveTimer<=0){this.waveTimer=0,this.completeWave();return}let i=0,a=0;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(a-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(a+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(i-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(i+=1),i===0&&a===0&&this.joyActive){const _=this.joyCurrentX-this.joyOriginX,v=this.joyCurrentY-this.joyOriginY,y=Math.hypot(_,v);y>this.JOY_DEADZONE&&(i=_/y,a=v/y)}else if(i!==0||a!==0){const _=Math.hypot(i,a);i/=_,a/=_}const r=this.player.speed*(1+this.runBuffs.moveSpeedMult);if(this.player.x=Math.max(40,Math.min(this.worldSize-40,this.player.x+i*r*e)),this.player.y=Math.max(40,Math.min(this.worldSize-40,this.player.y+a*r*e)),(i!==0||a!==0)&&(this.player.angle=Math.atan2(a,i)),this.player.invulnTimer>0&&(this.player.invulnTimer-=e),this.screenShake>0&&(this.screenShake=Math.max(0,this.screenShake-e*35)),this.spawnTimer-=e,this.spawnTimer<=0){const _=Math.max(.22,1.15-this.currentWave*.065);this.spawnTimer=_,this.spawnWaveEnemy()}const o=t.getDamageMultiplier()*(1+this.runBuffs.damageMult),l=t.getAttackSpeedMultiplier()*(1+this.runBuffs.attackSpeedMult),c=this.weapons.equipped;for(let _=0;_<c.length;_++){const v=c[_];if(!v)continue;const y=_/Vt.MAX_EQUIPPED*Math.PI*2;v.orbitAngle=y+performance.now()*.0018,v.cooldownTimer-=e;const w=this.player.x+Math.cos(v.orbitAngle)*48,T=this.player.y+Math.sin(v.orbitAngle)*48;v.cooldownTimer<=0&&(this.fireWeapon(v,w,T,o)?v.cooldownTimer=Vt.getCooldown(v,l):v.cooldownTimer=.1)}let h=0;for(let _=0;_<this.projectiles.length;_++){const v=this.projectiles[_];v.x+=v.vx*e,v.y+=v.vy*e,v.life-=e,v.rotation!==void 0&&(v.rotation+=e*16);let y=v.life>0;if(y)if(v.fromRival)if(Math.hypot(v.x-this.player.x,v.y-this.player.y)<=v.radius+this.player.radius){if(y=!1,this.player.invulnTimer<=0&&(this.player.hp-=v.damage,this.player.invulnTimer=.35,this.screenShake=8,_e.getInstance().playHit(),this.spawnFloatingText(this.player.x,this.player.y-25,`-${v.damage} HP`,"#f43f5e",1.2),this.player.hp<=0)){this.player.hp=0,this.handlePlayerDeath();return}}else for(let T=this.enemies.length-1;T>=0;T--){const u=this.enemies[T];if(!(u.type==="rival"||v.hitEnemyIds.has(u.id))&&Math.hypot(v.x-u.x,v.y-u.y)<=v.radius+u.radius){v.hitEnemyIds.add(u.id),this.damageEnemy(u,v.damage,v.color),y=!1;break}}else for(let w=this.enemies.length-1;w>=0;w--){const T=this.enemies[w];if(v.hitEnemyIds.has(T.id))continue;if(Math.hypot(v.x-T.x,v.y-T.y)<=v.radius+T.radius)if(v.hitEnemyIds.add(T.id),v.splashRadius>0?this.triggerExplosionSplash(v.x,v.y,v.splashRadius,v.damage,v.color):this.damageEnemy(T,v.damage,v.color),v.pierce>0)v.pierce-=1;else{y=!1;break}}y&&(this.projectiles[h++]=v)}this.projectiles.length=h;for(let _=0;_<this.enemies.length;_++){const v=this.enemies[_];v.hitFlash>0&&(v.hitFlash-=e),v.slowTimer>0&&(v.slowTimer-=e);const y=Math.atan2(this.player.y-v.y,this.player.x-v.x),w=Math.hypot(this.player.x-v.x,this.player.y-v.y),T=v.slowTimer>0?.5:1;if(v.type==="rival"){const u=v.strafeDir||1;let M=y;if(w<190?M=y+Math.PI+u*.55:w<320&&(M=y+Math.PI/2*u),v.x=Math.max(55,Math.min(this.worldSize-55,v.x+Math.cos(M)*v.speed*T*e)),v.y=Math.max(55,Math.min(this.worldSize-55,v.y+Math.sin(M)*v.speed*T*e)),v.shootTimer=(v.shootTimer??1.2)-e,v.shootTimer<=0&&w<560){v.shootTimer=1.25;const C=430;this.projectiles.push({x:v.x,y:v.y,vx:Math.cos(y)*C,vy:Math.sin(y)*C,radius:6,damage:v.damage,color:v.color,pierce:0,splashRadius:0,life:1.5,fromRival:!0,hitEnemyIds:new Set}),_e.getInstance().playShoot(-1)}}else v.x+=Math.cos(y)*v.speed*T*e,v.y+=Math.sin(y)*v.speed*T*e;if(w<this.player.radius+v.radius&&this.player.invulnTimer<=0&&(this.player.hp-=v.damage,this.player.invulnTimer=.45,this.screenShake=10,_e.getInstance().playHit(),this.spawnFloatingText(this.player.x,this.player.y-25,`-${v.damage} HP`,"#ef4444",1.25),this.player.hp<=0)){this.player.hp=0,this.handlePlayerDeath();return}}const g=t.getMagnetRadius()*(1+this.runBuffs.magnetMult);let d=!1,p=0;for(let _=0;_<this.lootDrops.length;_++){const v=this.lootDrops[_],y=Math.hypot(this.player.x-v.x,this.player.y-v.y);if(y<g){const u=Math.atan2(this.player.y-v.y,this.player.x-v.x);v.x+=Math.cos(u)*450*e,v.y+=Math.sin(u)*450*e}let w=!1;if(y<this.player.radius+v.radius+8){if(w=!0,v.type==="gold"){const T=Math.max(1,Math.round(v.value*(1+this.runBuffs.goldMult)));t.addGold(T),this.runGoldEarned+=T,this.waveGoldEarned+=T,this.spawnFloatingText(v.x,v.y,`+${T}g`,"#facc15",.95)}else if(v.type==="gem")t.addGems(v.value),this.spawnFloatingText(v.x,v.y,`+${v.value} 💎`,"#38bdf8",1.15);else if(v.type==="heal")this.player.hp=Math.min(this.player.maxHp,this.player.hp+v.value),this.spawnFloatingText(v.x,v.y,`+${v.value} HP`,"#4ade80",1.1);else if(v.type==="weapon_pod"){const T=["plasma","tesla","frost","sawblade","missile"],u=T[Math.floor(Math.random()*T.length)],M=this.currentWave>=5&&Math.random()<.35?2:1;this.weapons.hasFreeSlot()||this.weapons.autoMergeAll(),this.weapons.hasFreeSlot()||(this.weapons.bench[Vt.MAX_BENCH-1]=null);const C=this.weapons.createWeapon(u,M);this.weapons.addWeaponToAvailableSlot(C);const R=this.weapons.autoMergeAll();_e.getInstance().playMerge(R>0?4:2),this.spawnParticles(this.player.x,this.player.y,"#c084fc",16);const L=$.getLang()==="tr"?R>0?`🔧 SİLAH PODU + OTOMATİK BİRLEŞTİRME (${R}x)!`:"🔧 SİLAH PODU KUŞANILDI!":R>0?`🔧 WEAPON POD + AUTO-MERGE (${R}x)!`:"🔧 WEAPON POD EQUIPPED!";this.spawnFloatingText(this.player.x,this.player.y-28,L,"#c084fc",1.28)}v.xpValue>0&&(this.player.xp+=v.xpValue,this.player.xp>=this.player.xpToNext&&(this.player.xp-=this.player.xpToNext,this.player.level+=1,this.player.xpToNext=Math.round(this.player.xpToNext*1.38+20),t.recordLevelUp(1),d=!0)),_e.getInstance().playCoin()}w||(this.lootDrops[p++]=v)}this.lootDrops.length=p;let x=0;for(let _=0;_<this.lightningBolts.length;_++){const v=this.lightningBolts[_];v.alpha-=e*4.5,v.alpha>0&&(this.lightningBolts[x++]=v)}this.lightningBolts.length=x;let b=0;for(let _=0;_<this.frostRings.length;_++){const v=this.frostRings[_];v.currentRadius+=(v.maxRadius-v.currentRadius)*e*10,v.alpha-=e*2.5,v.alpha>0&&(this.frostRings[b++]=v)}this.frostRings.length=b;let m=0;for(let _=0;_<this.particles.length;_++){const v=this.particles[_];v.x+=v.vx*e,v.y+=v.vy*e,v.alpha-=v.decay*e,v.alpha>0&&(this.particles[m++]=v)}this.particles.length=m;let f=0;for(let _=0;_<this.floatingTexts.length;_++){const v=this.floatingTexts[_];v.y+=v.vy*e,v.alpha-=e*1.4,v.alpha>0&&(this.floatingTexts[f++]=v)}if(this.floatingTexts.length=f,this.onHudUpdate?.(),d)if(this.gameMode==="PVP"){this.player.maxHp+=20;const _=Math.round(this.player.maxHp*.3);this.player.hp=Math.min(this.player.maxHp,this.player.hp+_),this.runBuffs.damageMult+=.15,this.runBuffs.attackSpeedMult+=.12,this.runBuffs.critChance=Math.min(.85,this.runBuffs.critChance+.05),_e.getInstance().playMerge(4),this.spawnParticles(this.player.x,this.player.y,"#facc15",24);const v=$.getLang()==="tr"?`⚡ OVERCLOCK SV.${this.player.level}! (+%15 HASAR & CAN)`:`⚡ OVERCLOCK LVL ${this.player.level}! (+15% DMG & HEAL)`;this.spawnFloatingText(this.player.x,this.player.y-36,v,"#facc15",1.38),this.onHudUpdate?.()}else this.state="LEVEL_UP",_e.getInstance().playMerge(4),this.onLevelUp?.()}fireWeapon(e,t,n,i){const a=Vn[e.archetype];let r=Vt.getDamage(e,i);const o=Math.random()<this.runBuffs.critChance;o&&(r=Math.round(r*2));let l=null,c=a.range;for(const d of this.enemies){const p=Math.hypot(d.x-t,d.y-n);p<=c&&(c=p,l=d)}if(!l)return!1;const h=Math.atan2(l.y-n,l.x-t),g=es[e.tier-1]||a.color;if(e.archetype==="plasma")return this.projectiles.push({x:t,y:n,vx:Math.cos(h)*640,vy:Math.sin(h)*640,radius:5+e.tier,damage:r,color:o?"#facc15":a.color,pierce:e.tier>=4?1:0,splashRadius:0,life:1.2,hitEnemyIds:new Set}),_e.getInstance().playShoot(e.tier),!0;if(e.archetype==="sawblade")return this.projectiles.push({x:t,y:n,vx:Math.cos(h)*460,vy:Math.sin(h)*460,radius:12+e.tier*2,damage:r,color:o?"#facc15":g,pierce:2+e.tier*2,splashRadius:0,life:1.6,isSawblade:!0,rotation:0,hitEnemyIds:new Set}),_e.getInstance().playShoot(e.tier-2),!0;if(e.archetype==="missile")return this.projectiles.push({x:t,y:n,vx:Math.cos(h)*420,vy:Math.sin(h)*420,radius:8+e.tier,damage:r,color:a.color,pierce:0,splashRadius:65+e.tier*14,life:1.5,hitEnemyIds:new Set}),_e.getInstance().playShoot(-2),!0;if(e.archetype==="tesla"){const d=2+e.tier,p=new Set,x=[{x:t,y:n}];let b=t,m=n;for(let f=0;f<d;f++){let _=null,v=220;for(const y of this.enemies){if(p.has(y.id))continue;const w=Math.hypot(y.x-b,y.y-m);w<=v&&(v=w,_=y)}if(!_)break;p.add(_.id),x.push({x:_.x,y:_.y}),b=_.x,m=_.y,this.damageEnemy(_,r,a.color)}return this.lightningBolts.push({points:x,color:a.color,alpha:1}),_e.getInstance().playLightning(),!0}if(e.archetype==="frost"){const d=a.range+e.tier*18;for(let p=this.enemies.length-1;p>=0;p--){const x=this.enemies[p];Math.hypot(x.x-this.player.x,x.y-this.player.y)<=d&&(x.slowTimer=2.5+e.tier*.4,this.damageEnemy(x,r,a.color))}return this.frostRings.push({x:this.player.x,y:this.player.y,currentRadius:20,maxRadius:d,color:a.color,alpha:.9}),_e.getInstance().playShoot(3),!0}return!1}triggerExplosionSplash(e,t,n,i,a){this.screenShake=Math.max(this.screenShake,5),this.spawnParticles(e,t,a,16),_e.getInstance().playExplosion();for(let r=this.enemies.length-1;r>=0;r--){const o=this.enemies[r];Math.hypot(o.x-e,o.y-t)<=n+o.radius&&this.damageEnemy(o,i,a)}}damageEnemy(e,t,n){if(e.hp-=t,e.hitFlash=.1,this.spawnFloatingText(e.x+(Math.random()-.5)*16,e.y-e.radius,`${t}`,n,e.type==="boss"?1.2:.95),e.hp<=0){const i=this.enemies.indexOf(e);if(i!==-1){const r=this.enemies.pop();i<this.enemies.length&&r&&(this.enemies[i]=r)}this.runKills+=1;const a=Pe.getInstance();if(a.recordKill(1),this.runScore+=e.goldValue*10,this.spawnParticles(e.x,e.y,e.color,e.type==="boss"||e.type==="rival"?30:8),e.type==="rival"){a.addPvpTrophies(15,1),this.screenShake=Math.max(this.screenShake,12),_e.getInstance().playExplosion();const r=$.getLang()==="tr"?`⚔️ ${e.rivalName} ELENDİ! (+15 🏆)`:`⚔️ ${e.rivalName} ELIMINATED! (+15 🏆)`;this.spawnFloatingText(e.x,e.y-34,r,"#facc15",1.4)}this.gameMode==="PVP"&&(e.type==="rival"||e.type==="boss"||e.type==="tank"||e.type==="charger"&&Math.random()<.35)&&this.lootDrops.push({x:e.x-14,y:e.y+10,vx:0,vy:0,value:1,xpValue:22,type:"weapon_pod",radius:12}),this.lootDrops.push({x:e.x,y:e.y,vx:0,vy:0,value:e.goldValue,xpValue:e.type==="boss"?80:e.type==="rival"?45:12,type:"gold",radius:7}),e.type==="boss"||e.type==="rival"||Math.random()<.04?this.lootDrops.push({x:e.x+12,y:e.y+8,vx:0,vy:0,value:e.type==="boss"?10:e.type==="rival"?4:1,xpValue:15,type:"gem",radius:9}):Math.random()<.035&&this.lootDrops.push({x:e.x-10,y:e.y,vx:0,vy:0,value:20,xpValue:5,type:"heal",radius:8})}}spawnWaveEnemy(){const e=Math.random();this.currentWave>=4&&e<.14?this.spawnEnemy("tank"):this.currentWave>=3&&e<.32?this.spawnEnemy("charger"):this.currentWave>=2&&e<.55?this.spawnEnemy("speedster"):this.spawnEnemy("swarmer")}getArenaCornerPosition(e,t=65){const a=[{x:95,y:95},{x:this.worldSize-95,y:95},{x:this.worldSize-95,y:this.worldSize-95},{x:95,y:this.worldSize-95}][Math.abs(e)%4],r=(Math.random()-.5)*t,o=(Math.random()-.5)*t;return{x:Math.max(55,Math.min(this.worldSize-55,a.x+r)),y:Math.max(55,Math.min(this.worldSize-55,a.y+o))}}spawnEnemy(e){const t=Math.floor(Math.random()*4),{x:n,y:i}=this.getArenaCornerPosition(t,80),a=Math.pow(1.24,this.currentWave-1),o={swarmer:{type:"swarmer",radius:14,hp:Math.round(28*a),maxHp:Math.round(28*a),speed:115,damage:Math.round(9*a),color:"#f43f5e",goldValue:Math.round(4+this.currentWave*1.5)},speedster:{type:"speedster",radius:11,hp:Math.round(19*a),maxHp:Math.round(19*a),speed:185,damage:Math.round(8*a),color:"#fbbf24",goldValue:Math.round(5+this.currentWave*1.8)},charger:{type:"charger",radius:17,hp:Math.round(52*a),maxHp:Math.round(52*a),speed:145,damage:Math.round(14*a),color:"#ec4899",goldValue:Math.round(8+this.currentWave*2.2)},tank:{type:"tank",radius:24,hp:Math.round(135*a),maxHp:Math.round(135*a),speed:78,damage:Math.round(20*a),color:"#a855f7",goldValue:Math.round(15+this.currentWave*3)},boss:{type:"boss",radius:48,hp:Math.round(3200*a),maxHp:Math.round(3200*a),speed:96,damage:Math.round(38*a),color:"#ef4444",goldValue:Math.round(250+this.currentWave*45)},rival:{type:"rival",radius:22,hp:Math.round(260*a),maxHp:Math.round(260*a),speed:170,damage:Math.round(16*a),color:"#f59e0b",goldValue:Math.round(65+this.currentWave*15)}}[e];this.enemies.push({id:this.enemyIdCounter++,x:n,y:i,slowTimer:0,hitFlash:0,...o})}spawnRivalCommander(e){const t=["KAEL_X99","VALKYRIE_7","CYBER_SLAYER","NOVA_KING","VOID_HUNTER","APEX_MECH","ZERO_COOL","SHADOW_NYX"],n=["vanguard","valkyrie","tesla_engineer","void_phantom"],i={vanguard:"#38bdf8",valkyrie:"#ec4899",tesla_engineer:"#a855f7",void_phantom:"#f43f5e"},a=n[(this.currentWave+e)%n.length],r=t[(this.currentWave*3+e)%t.length],{x:o,y:l}=this.getArenaCornerPosition(e%4,30),c=Pe.getInstance(),h=Math.max(0,Math.floor(((c.data.pvpTrophies||1e3)-1e3)/120)),g=Math.max(1,this.currentWave*2+h+e),d=Math.pow(1.16,g-1);this.enemies.push({id:this.enemyIdCounter++,type:"rival",x:o,y:l,radius:22,hp:Math.round(280*d),maxHp:Math.round(280*d),speed:Math.min(240,165+g*3),damage:Math.round(16*d),color:i[a],goldValue:Math.round(80+g*22),slowTimer:0,hitFlash:0,rivalName:r,rivalClass:a,rivalLevel:g,shootTimer:.8+e*.35,strafeDir:e%2===0?1:-1})}completeWave(){const e=Pe.getInstance();for(const n of this.lootDrops)n.type==="gold"?(e.addGold(n.value),this.runGoldEarned+=n.value,this.waveGoldEarned+=n.value):n.type==="gem"&&e.addGems(n.value);this.lootDrops=[];const t=25+this.currentWave*15+(this.gameMode==="PVP"?60:0);if(e.addGold(t),this.waveGoldEarned+=t,this.runGoldEarned+=t,this.gameMode==="PVP"&&e.addPvpTrophies(25,0),this.currentWave>e.data.highestWave&&(e.data.highestWave=this.currentWave),this.runScore>e.data.highScore&&(e.data.highScore=this.runScore),e.save(),this.tempAdSpeedWave=!1,_e.getInstance().playWaveComplete(),this.gameMode==="PVP"){this.currentWave+=1;const n=this.currentWave%5===0;this.waveDuration=n?45:Math.min(40,22+this.currentWave*2),this.waveTimer=this.waveDuration,this.waveGoldEarned=0,this.bossElapsedTime=0,this.bossRageStage=0,this.player.hp=Math.min(this.player.maxHp,this.player.hp+Math.round(this.player.maxHp*.35)),this.weapons.autoMergeAll();const i=this.enemies.filter(r=>r.type==="rival").length;for(let r=i;r<3;r++)this.spawnRivalCommander(r);n&&this.spawnEnemy("boss"),this.spawnParticles(this.player.x,this.player.y,"#facc15",28);const a=$.getLang()==="tr"?`⚔️ PVP RAUNT ${this.currentWave}! (+25 🏆 & +${t}🪙)`:`⚔️ PVP ROUND ${this.currentWave}! (+25 🏆 & +${t}🪙)`;this.spawnFloatingText(this.player.x,this.player.y-42,a,"#facc15",1.45),this.onHudUpdate?.();return}this.state="SHOP",this.persistSoloCheckpoint(this.currentWave+1),this.onWaveComplete?.()}handlePlayerDeath(){const e=Pe.getInstance();this.runScore>e.data.highScore&&(e.data.highScore=this.runScore,e.save()),this.state=this.revivedThisRun?"GAMEOVER":"REVIVE_PROMPT",_e.getInstance().playExplosion(),this.onPlayerDeath?.()}spawnParticles(e,t,n,i){for(let a=0;a<i;a++){const r=Math.random()*Math.PI*2,o=40+Math.random()*190;this.particles.push({x:e,y:t,vx:Math.cos(r)*o,vy:Math.sin(r)*o,radius:2+Math.random()*3.5,color:n,alpha:1,decay:1.5+Math.random()*1.5})}}spawnFloatingText(e,t,n,i,a=1){this.floatingTexts.push({x:e,y:t,text:n,color:i,alpha:1,vy:-48,scale:a})}render(){this.renderer3d.renderScene({player:this.player,equippedWeapons:this.weapons.equipped,enemies:this.enemies,projectiles:this.projectiles,lootDrops:this.lootDrops,frostRings:this.frostRings,lightningBolts:this.lightningBolts,particles:this.particles,screenShake:this.screenShake,bossRageStage:this.bossRageStage});const e=this.ctx,t=this.canvas.width,n=this.canvas.height;e.clearRect(0,0,t,n);let i=null,a=0;for(let o=0;o<this.enemies.length;o++){const l=this.enemies[o];if(l.type==="boss"&&(i=l),l.type==="rival"&&(a+=1),l.hp<l.maxHp||l.type==="boss"||l.type==="rival"){const c=l.type==="rival"?68:l.radius*2+12,h=this.renderer3d.worldToScreen(l.x,l.y,c);if(!h.visible)continue;const g=l.type==="boss"?96:l.type==="rival"?68:Math.max(32,l.radius*2.2),d=l.type==="boss"?8:l.type==="rival"?7:5,p=h.x-g/2,x=h.y-d/2;if(e.fillStyle="rgba(2, 6, 23, 0.85)",e.fillRect(p-1,x-1,g+2,d+2),e.fillStyle=l.type==="boss"?"#f43f5e":l.type==="rival"?"#f59e0b":"#22c55e",e.fillRect(p,x,g*Math.max(0,l.hp/l.maxHp),d),l.type==="rival"&&l.rivalName){e.save(),e.font="700 11px Orbitron, sans-serif",e.fillStyle="#facc15",e.strokeStyle="rgba(0,0,0,0.85)",e.lineWidth=3,e.textAlign="center";const b=`⚔️ [LVL.${l.rivalLevel||1}] ${l.rivalName}`;e.strokeText(b,h.x,x-6),e.fillText(b,h.x,x-6),e.restore()}}}let r=0;if(i&&this.state==="PLAYING"){const o=t<600,l=Math.min(580,t*.94),c=o?20:24,h=(t-l)/2,g=o?38:46;r=g+c;const d=Math.max(0,i.hp/i.maxHp),p=Math.max(0,34-this.bossElapsedTime);e.save(),e.fillStyle="rgba(15, 23, 42, 0.95)",e.strokeStyle=p<10?"#facc15":"#f43f5e",e.lineWidth=2,e.fillRect(h,g,l,c),e.strokeRect(h,g,l,c),e.fillStyle=this.bossRageStage>0?"#f97316":"#e11d48",e.fillRect(h+2,g+2,(l-4)*d,c-4),e.font=o?"700 10px Orbitron, sans-serif":"700 12px Orbitron, sans-serif",e.fillStyle="#ffffff",e.textAlign="center";const x=this.bossRageStage>0?` • 🔥 RAGE ${this.bossRageStage}/3`:"",b=$.getLang()==="tr"?`⚠️ BOSS (${Math.ceil(i.hp)}/${i.maxHp})${x} • 💥 İNFİLAK: ${p.toFixed(1)}s`:`⚠️ BOSS (${Math.ceil(i.hp)}/${i.maxHp})${x} • 💥 DETONATE: ${p.toFixed(1)}s`;e.fillText(b,t/2,g+(o?14:17)),e.restore()}if(this.gameMode==="PVP"&&this.state==="PLAYING"){const o=t<600,l=Pe.getInstance().data.pvpTrophies||1e3,c=Pe.getInstance().getCommanderPowerLevel(),h=i?r+4:o?38:46,g=o?20:22;e.save(),e.font=o?"700 10px Orbitron, sans-serif":"700 11px Orbitron, sans-serif",e.textAlign="center",e.fillStyle="rgba(15, 23, 42, 0.92)",e.strokeStyle="#f59e0b",e.lineWidth=1.5;const d=Math.min(420,t*.94);e.fillRect((t-d)/2,h,d,g),e.strokeRect((t-d)/2,h,d,g),e.fillStyle="#facc15";const p=$.getLang()==="tr"?`⚔️ PVP • GÜÇ ${c} • RAKİP: ${a}/3 • 🏆 ${l}`:`⚔️ PVP • PWR ${c} • RIVALS: ${a}/3 • 🏆 ${l}`;e.fillText(p,t/2,h+(o?14:15)),e.restore()}for(let o=0;o<this.floatingTexts.length;o++){const l=this.floatingTexts[o],c=(1-l.alpha)*42,h=this.renderer3d.worldToScreen(l.x,l.y,28+c);h.visible&&(e.save(),e.globalAlpha=Math.max(0,l.alpha),e.font=`700 ${Math.round(15*l.scale)}px Orbitron, sans-serif`,e.fillStyle=l.color,e.strokeStyle="rgba(0,0,0,0.75)",e.lineWidth=3,e.textAlign="center",e.strokeText(l.text,h.x,h.y),e.fillText(l.text,h.x,h.y),e.restore())}this.joyActive&&this.state==="PLAYING"&&this.drawVirtualJoystick(e)}drawVirtualJoystick(e){const t=this.joyCurrentX-this.joyOriginX,n=this.joyCurrentY-this.joyOriginY,i=Math.hypot(t,n),a=Math.min(i,this.JOY_MAX_RADIUS),r=Math.atan2(n,t),o=this.joyOriginX+(i>0?Math.cos(r)*a:0),l=this.joyOriginY+(i>0?Math.sin(r)*a:0);e.save(),e.beginPath(),e.arc(this.joyOriginX,this.joyOriginY,this.JOY_MAX_RADIUS,0,Math.PI*2),e.fillStyle="rgba(56, 189, 248, 0.12)",e.fill(),e.lineWidth=2.5,e.strokeStyle="rgba(56, 189, 248, 0.55)",e.stroke(),i>this.JOY_DEADZONE&&(e.beginPath(),e.moveTo(this.joyOriginX,this.joyOriginY),e.lineTo(o,l),e.strokeStyle="rgba(56, 189, 248, 0.35)",e.lineWidth=2,e.stroke()),e.beginPath(),e.arc(o,l,20,0,Math.PI*2),e.fillStyle="#38bdf8",e.shadowColor="#38bdf8",e.shadowBlur=12,e.fill(),e.lineWidth=2.5,e.strokeStyle="#ffffff",e.stroke(),e.restore()}}const _c=[{id:"starter_pack",title:"Cyber Starter Bundle",description:"+1,500 Gold, +100 Gems & Instant Tier-3 Epic Plasma Blaster",priceUsd:1.99,badge:"BEST VALUE"},{id:"vip_speed",title:"VIP Overclock Pass",description:"Permanently Unlock 2x Turbo Game Speed + +500 Gems + No Forced Interstitials",priceUsd:4.99,badge:"MOST POPULAR"},{id:"gem_vault_small",title:"Neon Gem Pouch",description:"+150 Cyber Gems for Legendary Crates & Instant Merges",priceUsd:.99},{id:"gem_vault_mega",title:"Quantum Gem Vault",description:"+1,000 Cyber Gems + 5,000 Bonus Gold",priceUsd:7.99,badge:"WHALE PACK"}];class Ct{static instance;activePlatform="Simulator";overlayContainer=null;onPauseGame;onResumeGame;constructor(){this.detectPlatform()}static getInstance(){return Ct.instance||(Ct.instance=new Ct),Ct.instance}bindEngineCallbacks(e,t){this.onPauseGame=e,this.onResumeGame=t,this.overlayContainer=document.getElementById("sdk-overlay")}detectPlatform(){typeof window<"u"&&(window.PokiSDK?(this.activePlatform="Poki",window.PokiSDK.init().catch(()=>{})):window.CrazyGames?.SDK?this.activePlatform="CrazyGames":this.activePlatform="Simulator")}async showRewardedAd(e){if(this.onPauseGame?.(),_e.getInstance().setAdMuted(!0),window.PokiSDK?.gameplayStop?.(),this.activePlatform==="Poki"&&window.PokiSDK)try{const t=await window.PokiSDK.rewardedBreak();return _e.getInstance().setAdMuted(!1),window.PokiSDK.gameplayStart?.(),t&&(Pe.getInstance().recordAdRevenue("rewarded",25),_e.getInstance().playCashRegister()),this.onResumeGame?.(),t}catch{return _e.getInstance().setAdMuted(!1),this.onResumeGame?.(),!1}return this.activePlatform==="CrazyGames"&&window.CrazyGames?.SDK?.ad?new Promise(t=>{window.CrazyGames.SDK.ad.requestAd("rewarded",{adFinished:()=>{_e.getInstance().setAdMuted(!1),Pe.getInstance().recordAdRevenue("rewarded",25),_e.getInstance().playCashRegister(),this.onResumeGame?.(),t(!0)},adError:()=>{_e.getInstance().setAdMuted(!1),this.onResumeGame?.(),t(!1)}})}):this.runSimulatedRewardedAd(e)}async showInterstitialAd(e){if(!Pe.getInstance().data.vipUnlocked){if(this.onPauseGame?.(),this.activePlatform==="Poki"&&window.PokiSDK){await window.PokiSDK.commercialBreak(),Pe.getInstance().recordAdRevenue("interstitial",12),this.onResumeGame?.();return}await this.runSimulatedInterstitialAd(e)}}async purchaseProduct(e){const t=_c.find(i=>i.id===e);if(!t)return!1;this.onPauseGame?.();const n=await this.runSimulatedStripeCheckout(t);return this.onResumeGame?.(),n&&(Pe.getInstance().recordIapRevenue(t.priceUsd),_e.getInstance().playCashRegister()),n}runSimulatedRewardedAd(e){return new Promise(t=>{if(!this.overlayContainer){this.onResumeGame?.(),t(!0);return}let n=3;this.overlayContainer.innerHTML=`
        <div class="sdk-modal-backdrop">
          <div class="sdk-ad-box">
            <div class="sdk-ad-header">
              <span class="sdk-badge">REWARDED VIDEO AD • eCPM $25.00</span>
              <span id="sdk-ad-timer" class="sdk-timer">Reward in ${n}s...</span>
            </div>
            <div class="sdk-ad-stage">
              <div class="sdk-ad-visual">
                <div class="sdk-pulse-ring"></div>
                <h3>NEXUS CLOUD SPONSOR</h3>
                <p>Placement: <strong>${e}</strong></p>
                <p class="sdk-sub">Simulating Poki / CrazyGames / AdSense H5 Rewarded Ad SDK Call</p>
              </div>
            </div>
            <div class="sdk-ad-footer">
              <button id="sdk-cancel-ad" class="btn-secondary">Skip (No Reward)</button>
              <button id="sdk-claim-ad" class="btn-primary" disabled>Wait ${n}s...</button>
            </div>
          </div>
        </div>
      `;const i=document.getElementById("sdk-ad-timer"),a=document.getElementById("sdk-claim-ad"),r=document.getElementById("sdk-cancel-ad"),o=window.setInterval(()=>{n-=1,n>0?(i&&(i.textContent=`Reward in ${n}s...`),a&&(a.textContent=`Wait ${n}s...`)):(window.clearInterval(o),i&&(i.textContent="REWARD GRANTED ✓"),a&&(a.disabled=!1,a.textContent="CLAIM REWARD (+Revenue)",a.classList.add("pulse-glow")))},850),l=c=>{window.clearInterval(o),this.overlayContainer&&(this.overlayContainer.innerHTML=""),_e.getInstance().setAdMuted(!1),c&&(Pe.getInstance().recordAdRevenue("rewarded",25),_e.getInstance().playCashRegister()),this.onResumeGame?.(),t(c)};a?.addEventListener("click",()=>l(!0)),r?.addEventListener("click",()=>l(!1))})}runSimulatedInterstitialAd(e){return new Promise(t=>{if(!this.overlayContainer){this.onResumeGame?.(),t();return}this.overlayContainer.innerHTML=`
        <div class="sdk-modal-backdrop">
          <div class="sdk-ad-box">
            <div class="sdk-ad-header">
              <span class="sdk-badge">COMMERCIAL BREAK • eCPM $12.00</span>
              <span class="sdk-timer">Auto-Skippable</span>
            </div>
            <div class="sdk-ad-stage">
              <div class="sdk-ad-visual">
                <h3>INTERSTITIAL AD BREAK</h3>
                <p>Trigger: <strong>${e}</strong></p>
                <p class="sdk-sub">Tip: Unlock VIP Pass to remove all interstitial breaks!</p>
              </div>
            </div>
            <div class="sdk-ad-footer">
              <button id="sdk-close-interstitial" class="btn-primary">Continue to Game ▶</button>
            </div>
          </div>
        </div>
      `,document.getElementById("sdk-close-interstitial")?.addEventListener("click",()=>{this.overlayContainer&&(this.overlayContainer.innerHTML=""),_e.getInstance().setAdMuted(!1),Pe.getInstance().recordAdRevenue("interstitial",12),_e.getInstance().playCashRegister(),this.onResumeGame?.(),t()})})}runSimulatedStripeCheckout(e){return new Promise(t=>{if(!this.overlayContainer){t(!0);return}this.overlayContainer.innerHTML=`
        <div class="sdk-modal-backdrop">
          <div class="sdk-ad-box stripe-box">
            <div class="sdk-ad-header">
              <span class="sdk-badge stripe-badge">STRIPE / WEB-IAP CHECKOUT</span>
              <span class="sdk-timer">$${e.priceUsd.toFixed(2)} USD</span>
            </div>
            <div class="sdk-ad-stage">
              <div class="sdk-ad-visual">
                <h3>${e.title}</h3>
                <p>${e.description}</p>
                <div class="stripe-card-mock">
                  <span>💳 **** **** **** 4242</span>
                  <span>EXP 12/29 • CVC 888</span>
                </div>
                <p class="sdk-sub">Instant Sandbox Checkout — Adds $${e.priceUsd.toFixed(2)} to your Simulated Revenue Counter</p>
              </div>
            </div>
            <div class="sdk-ad-footer">
              <button id="sdk-cancel-iap" class="btn-secondary">Cancel</button>
              <button id="sdk-confirm-iap" class="btn-gold">Authorize $${e.priceUsd.toFixed(2)} ✓</button>
            </div>
          </div>
        </div>
      `;const n=i=>{this.overlayContainer&&(this.overlayContainer.innerHTML=""),t(i)};document.getElementById("sdk-confirm-iap")?.addEventListener("click",()=>n(!0)),document.getElementById("sdk-cancel-iap")?.addEventListener("click",()=>n(!1))})}}const Vm=[{name:"NEXUS_OVERLORD",wave:38,score:194500,vip:!0},{name:"VALKYRIE_X9",wave:34,score:162800,vip:!0},{name:"KRONOS_PRIME",wave:30,score:138400,vip:!0},{name:"CYBER_SHOGUN",wave:27,score:112900,vip:!1},{name:"ZERO_COOL_US",wave:24,score:94200,vip:!0},{name:"NOVA_STRIKER",wave:21,score:78500,vip:!1},{name:"AETHER_WOLF",wave:18,score:61400,vip:!0},{name:"VOLT_HUNTER",wave:15,score:45200,vip:!1},{name:"PHANTOM_BLADE",wave:12,score:31800,vip:!1},{name:"OMEGA_DRIFTER",wave:10,score:22400,vip:!1},{name:"BYTE_RANGER",wave:8,score:14900,vip:!1},{name:"NEON_ROOKIE",wave:5,score:7600,vip:!1},{name:"SCRAP_PILOT",wave:3,score:3200,vip:!1}];class Wm{engine;uiLayer;selectedSlot=null;shopOffers=[];draftedLevelCards=[];waveBonusDoubled=!1;showDevMetrics=typeof window<"u"&&window.location.search.includes("dev=1");hudEls=null;constructor(e){this.engine=e;const t=document.getElementById("ui-layer");if(!t)throw new Error("#ui-layer not found");this.uiLayer=t,this.engine.onHudUpdate=()=>this.updateTopHudValues(),this.engine.onLevelUp=()=>this.openLevelUpModal(),this.engine.onWaveComplete=()=>this.openBetweenWaveWorkshop(),this.engine.onPlayerDeath=()=>this.openDeathModal(),Pe.getInstance().onChange(()=>this.updateTopHudValues()),window.addEventListener("keydown",n=>{if(n.code==="F9"){this.showDevMetrics=!this.showDevMetrics;const i=document.getElementById("hud-rev");i&&(i.style.display=this.showDevMetrics?"flex":"none");const a=document.getElementById("menu-dev-rev");a&&(a.style.display=this.showDevMetrics?"flex":"none")}}),this.renderMainMenu()}resetToInGameHud(){this.uiLayer.innerHTML=this.renderTopHud(),this.bindTopHudEvents()}cacheHudElements(){this.hudEls={hpFill:document.getElementById("hud-hp-fill"),hpText:document.getElementById("hud-hp-text"),xpFill:document.getElementById("hud-xp-fill"),lvlText:document.getElementById("hud-lvl-text"),waveNum:document.getElementById("hud-wave-num"),waveTimer:document.getElementById("hud-wave-timer"),gold:document.getElementById("hud-gold"),gems:document.getElementById("hud-gems"),rev:document.getElementById("hud-revenue"),speedBtn:document.getElementById("btn-speed-toggle")}}getThemeHudLabel(e){switch(e||Pe.getInstance().data.selectedTheme||"auto"){case"cyber_nebula":return"🌌 NEBULA";case"solar_inferno":return"🔥 INFERNO";case"cryo_glacier":return"❄️ CRYO";case"emerald_matrix":return"🟩 MATRIX";default:return"🔄 AUTO"}}renderTopHud(){const e=Pe.getInstance().data,t=this.engine.player,n=Math.max(0,Math.min(100,t.hp/t.maxHp*100)),i=Math.max(0,Math.min(100,t.xp/t.xpToNext*100)),a=this.engine.gameSpeedMultiplier===2,r=e.language==="tr"?"🌐 TR | EN":"🌐 EN | TR";return this.engine.state==="MENU"?`
      <header class="top-hud menu-hud">
        <div class="hud-left">
          <div class="currency-pill gold-pill">
            <span>🪙</span>
            <strong id="hud-gold">${e.gold.toLocaleString()}</strong>
          </div>
          <div class="currency-pill gem-pill">
            <span>💎</span>
            <strong id="hud-gems">${e.gems.toLocaleString()}</strong>
          </div>
          <div id="hud-rev" class="currency-pill revenue-pill" style="display: ${this.showDevMetrics?"flex":"none"}" title="Developer Revenue Tracker (Toggle with F9 or ?dev=1)">
            <span>📈 REV:</span>
            <strong id="hud-revenue">$${e.totalRevenueSimulated.toFixed(2)}</strong>
          </div>
        </div>

        <div class="hud-right">
          <button id="btn-theme-toggle" class="btn-hud" title="Switch Arena Visual Theme">
            🎨 ${this.getThemeHudLabel(e.selectedTheme)}
          </button>
          <button id="btn-open-crates" class="btn-hud">
            🎁 ${$.t("hud_crates_btn")}
          </button>
          <button id="btn-open-missions" class="btn-hud">
            📋 ${$.t("hud_missions_btn")}
          </button>
          <button id="btn-open-ranks" class="btn-hud">
            🏆 ${$.t("hud_ranks_btn")}
          </button>
          <button id="btn-open-store" class="btn-hud btn-vip">
            💎 ${$.t("vip_store_btn")}
          </button>
          <button id="btn-lang-toggle" class="btn-hud" title="Switch Language (Default: English)">
            ${r}
          </button>
          <button id="btn-sound-toggle" class="btn-hud">
            ${e.soundEnabled?"🔊":"🔇"}
          </button>
        </div>
      </header>
    `:`
      <header class="top-hud in-game-hud">
        <div class="hud-left">
          <div class="hp-bar-wrap" title="Hull Integrity">
            <div id="hud-hp-fill" class="hp-bar-fill" style="width: ${n}%"></div>
            <span id="hud-hp-text" class="hp-bar-label">${Math.ceil(t.hp)} / ${t.maxHp}</span>
          </div>
          <div class="xp-bar-wrap" title="Tactical Level Progress">
            <div id="hud-xp-fill" class="xp-bar-fill" style="width: ${i}%"></div>
            <span id="hud-lvl-text" class="hp-bar-label">${$.t("lvl_label")} ${t.level}</span>
          </div>
        </div>

        <div class="hud-center">
          <div class="wave-pill">
            <span id="hud-wave-num">${$.t("wave_label")} ${this.engine.currentWave}</span>
            <strong id="hud-wave-timer">${Math.ceil(this.engine.waveTimer)}s</strong>
          </div>
          <div class="currency-pill gold-pill">
            <span>🪙</span>
            <strong id="hud-gold">${e.gold.toLocaleString()}</strong>
          </div>
          <div class="currency-pill gem-pill hide-on-tiny">
            <span>💎</span>
            <strong id="hud-gems">${e.gems.toLocaleString()}</strong>
          </div>
        </div>

        <div class="hud-right">
          <button id="btn-speed-toggle" class="btn-hud ${a?"active-speed":""}" title="Toggle Turbo Speed (1x / 2x)">
            ${a?"⚡ 2x":"⚡ 1x"}
          </button>
          <button id="btn-sound-toggle" class="btn-hud" title="Audio Mute Toggle">
            ${e.soundEnabled?"🔊":"🔇"}
          </button>
          <button id="btn-hud-home" class="btn-hud btn-hud-home" title="Return to Main Menu (Auto-saves progress)">
            🏠 <span class="hide-on-mobile">${$.t("btn_main_menu")}</span>
          </button>
        </div>
      </header>
      `}bindTopHudEvents(){this.cacheHudElements(),document.getElementById("btn-hud-home")?.addEventListener("click",()=>{_e.getInstance().playClick(),Pe.getInstance().recordRunStats(this.engine.currentWave,this.engine.runScore),this.engine.saveCheckpointOnExit(),this.engine.state="MENU",this.renderMainMenu()}),document.getElementById("btn-speed-toggle")?.addEventListener("click",async()=>{_e.getInstance().playClick();const e=Pe.getInstance();if(this.engine.gameSpeedMultiplier===2){this.engine.gameSpeedMultiplier=1,this.updateTopHudValues();return}e.data.vipUnlocked||this.engine.tempAdSpeedWave?(this.engine.gameSpeedMultiplier=2,this.updateTopHudValues()):await Ct.getInstance().showRewardedAd("Unlock 2x Turbo Speed (Current Wave)")&&(this.engine.tempAdSpeedWave=!0,this.engine.gameSpeedMultiplier=2,this.updateTopHudValues())}),document.getElementById("btn-open-crates")?.addEventListener("click",()=>{_e.getInstance().playClick(),this.openCratesModal()}),document.getElementById("btn-open-missions")?.addEventListener("click",()=>{_e.getInstance().playClick(),this.openMissionsModal()}),document.getElementById("btn-open-ranks")?.addEventListener("click",()=>{_e.getInstance().playClick(),this.openLeaderboardModal()}),document.getElementById("btn-open-store")?.addEventListener("click",()=>{_e.getInstance().playClick(),this.openStoreModal()}),document.getElementById("btn-lang-toggle")?.addEventListener("click",()=>{_e.getInstance().playClick(),Pe.getInstance().toggleLanguage(),this.engine.state==="MENU"?this.renderMainMenu():this.engine.state==="SHOP"?this.renderWorkshopModal():this.engine.state==="LEVEL_UP"?this.renderLevelUpModal():this.engine.state==="REVIVE_PROMPT"||this.engine.state==="GAMEOVER"?this.openDeathModal():this.resetToInGameHud()}),document.getElementById("btn-sound-toggle")?.addEventListener("click",e=>{const t=Pe.getInstance();t.data.soundEnabled=!t.data.soundEnabled,t.save(),e.currentTarget.textContent=t.data.soundEnabled?"🔊":"🔇"}),document.getElementById("btn-theme-toggle")?.addEventListener("click",()=>{_e.getInstance().playClick();const e=["auto","cyber_nebula","solar_inferno","cryo_glacier","emerald_matrix"],t=Pe.getInstance(),n=t.data.selectedTheme||"auto",i=e[(e.indexOf(n)+1)%e.length];t.setArenaTheme(i),this.engine.applyCurrentTheme(),this.engine.state==="MENU"?this.renderMainMenu():this.resetToInGameHud()})}updateHUD(){this.updateTopHudValues()}updateTopHudValues(){(!this.hudEls||!this.hudEls.hpFill)&&this.cacheHudElements();const e=this.hudEls;if(!e||!e.hpFill)return;const t=Pe.getInstance().data,n=this.engine.player,i=`${Math.max(0,Math.min(100,n.hp/n.maxHp*100))}%`;e.hpFill.style.width!==i&&(e.hpFill.style.width=i);const a=`HP ${Math.ceil(n.hp)} / ${n.maxHp}`;e.hpText&&e.hpText.textContent!==a&&(e.hpText.textContent=a);const r=`${Math.max(0,Math.min(100,n.xp/n.xpToNext*100))}%`;e.xpFill&&e.xpFill.style.width!==r&&(e.xpFill.style.width=r);const o=`${$.t("lvl_label")} ${n.level}`;e.lvlText&&e.lvlText.textContent!==o&&(e.lvlText.textContent=o);const l=`${$.t("wave_label")} ${this.engine.currentWave}`;e.waveNum&&e.waveNum.textContent!==l&&(e.waveNum.textContent=l);const c=`${Math.ceil(this.engine.waveTimer)}s`;e.waveTimer&&e.waveTimer.textContent!==c&&(e.waveTimer.textContent=c);const h=t.gold.toLocaleString();e.gold&&e.gold.textContent!==h&&(e.gold.textContent=h);const g=t.gems.toLocaleString();e.gems&&e.gems.textContent!==g&&(e.gems.textContent=g);const d=`$${t.totalRevenueSimulated.toFixed(2)}`;if(e.rev&&e.rev.textContent!==d&&(e.rev.textContent=d),e.speedBtn){const p=this.engine.gameSpeedMultiplier===2,x=`⚡ ${p?$.t("speed_2x_on"):$.t("speed_1x_btn")}`;e.speedBtn.textContent!==x&&(e.speedBtn.textContent=x,e.speedBtn.classList.toggle("active-speed",p))}}renderMainMenu(){const e=Pe.getInstance(),t=e.data,n=t.language==="tr";this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel main-menu-panel">
          <div class="menu-top-row">
            <div class="hero-badge">${$.t("hero_badge")}</div>
            <div class="lang-switch-group" role="group" aria-label="Language Selector">
              <button id="btn-menu-lang-en" class="btn-lang-pill ${n?"":"active-lang"}">🇬🇧 ENGLISH (EN)</button>
              <button id="btn-menu-lang-tr" class="btn-lang-pill ${n?"active-lang":""}">🇹🇷 TÜRKÇE (TR)</button>
            </div>
          </div>
          <h1 class="game-title">NEXUS SURVIVORS<span>${$.t("game_subtitle")}</span></h1>
          <p class="hero-subtitle">${$.t("hero_desc")}</p>

          <div class="theme-switch-container">
            <span class="theme-switch-label">${$.t("theme_selector_title")}</span>
            <div class="theme-switch-pills">
              <button data-theme="auto" class="btn-theme-pill ${t.selectedTheme==="auto"?"active-theme":""}">${$.t("theme_auto")}</button>
              <button data-theme="cyber_nebula" class="btn-theme-pill ${t.selectedTheme==="cyber_nebula"?"active-theme":""}">${$.t("theme_nebula")}</button>
              <button data-theme="solar_inferno" class="btn-theme-pill ${t.selectedTheme==="solar_inferno"?"active-theme":""}">${$.t("theme_solar")}</button>
              <button data-theme="cryo_glacier" class="btn-theme-pill ${t.selectedTheme==="cryo_glacier"?"active-theme":""}">${$.t("theme_cryo")}</button>
              <button data-theme="emerald_matrix" class="btn-theme-pill ${t.selectedTheme==="emerald_matrix"?"active-theme":""}">${$.t("theme_matrix")}</button>
            </div>
          </div>

          <div class="stats-banner">
            <div><span>${$.t("stat_highest_wave")}</span><strong>${$.t("wave_label")} ${t.highestWave}</strong></div>
            <div><span>${$.t("stat_high_score")}</span><strong>${t.highScore.toLocaleString()}</strong></div>
            <div><span>${$.t("stat_pvp_trophies")}</span><strong style="color: #facc15">🏆 ${(t.pvpTrophies||1e3).toLocaleString()}</strong></div>
            <div><span>${$.t("stat_ads_watched")}</span><strong>${t.rewardedAdsWatched+t.interstitialAdsWatched}</strong></div>
            <div id="menu-dev-rev" style="display: ${this.showDevMetrics?"flex":"none"}"><span>${$.t("stat_sim_rev")}</span><strong class="text-green">$${t.totalRevenueSimulated.toFixed(2)}</strong></div>
          </div>

          <div class="workshop-section">
            <h3>${$.t("commanders_title")}</h3>
            <div class="commanders-grid">
              ${this.renderCommanderCard("vanguard","./assets/cmd-rex.jpg","🤖",$.t("cmd_vanguard_name"),$.t("cmd_vanguard_role"),$.t("cmd_vanguard_desc"),"#0ea5e9",!1,0)}
              ${this.renderCommanderCard("valkyrie","./assets/cmd-aria.jpg","🪽",$.t("cmd_valkyrie_name"),$.t("cmd_valkyrie_role"),$.t("cmd_valkyrie_desc"),"#ec4899",!1,0)}
              ${this.renderCommanderCard("tesla_engineer","./assets/cmd-volt.jpg","🌩️",$.t("cmd_tesla_name"),$.t("cmd_tesla_role"),$.t("cmd_tesla_desc"),"#a855f7",!0,180)}
              ${this.renderCommanderCard("void_phantom","./assets/cmd-nyx.jpg","🥷",$.t("cmd_phantom_name"),$.t("cmd_phantom_role"),$.t("cmd_phantom_desc"),"#f43f5e",!0,250)}
            </div>
          </div>

          <div class="workshop-section">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
              <h3 style="margin:0;">${n?`⚡ KALICI KOMUTAN GÜÇLENDİRME (MAKS SEVİYE SINIRI: SOLO DALGA ${e.getMaxUpgradeLevelCap()})`:`⚡ PERMANENT COMMANDER UPGRADES (MAX LEVEL CAP: SOLO WAVE ${e.getMaxUpgradeLevelCap()})`}</h3>
              <div style="display:flex; gap:10px; align-items:center; background:rgba(15,23,42,0.9); border:1.5px solid #facc15; padding:6px 14px; border-radius:999px;">
                <span style="color:#facc15; font-weight:800; font-family:'Orbitron',sans-serif; font-size:0.95rem;">🪙 ${t.gold.toLocaleString()} ${n?"ALTIN":"GOLD"}</span>
                <span style="color:#38bdf8; font-weight:800; font-family:'Orbitron',sans-serif; font-size:0.95rem;">💎 ${t.gems.toLocaleString()} ${n?"ELMAS":"GEMS"}</span>
              </div>
            </div>
            <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:10px;">
              ${n?`Solo (PvE) modda ulaştığınız en yüksek dalga (${t.highestWave}) aynı zamanda geliştirmelerin ve silah birleştirmenin maksimum seviye sınırıdır!`:`Your Highest Solo Wave (${t.highestWave}) sets the maximum level cap for both permanent upgrades and weapon merging!`}
            </p>
            <div class="meta-upgrades-grid">
              ${this.renderMetaUpgradeCard("damageLevel",$.t("meta_dmg_title"),$.t("meta_dmg_desc"))}
              ${this.renderMetaUpgradeCard("maxHpLevel",$.t("meta_hp_title"),$.t("meta_hp_desc"))}
              ${this.renderMetaUpgradeCard("attackSpeedLevel",$.t("meta_spd_title"),$.t("meta_spd_desc"))}
              ${this.renderMetaUpgradeCard("startingGoldLevel",$.t("meta_gold_title"),$.t("meta_gold_desc"))}
            </div>
          </div>

          <div class="menu-actions">
            ${e.hasResumableSoloRun()?`<button id="btn-continue-run" class="btn-gold btn-xl pulse-glow">${$.t("btn_continue_run",{wave:t.soloRun.wave})}</button>`:""}
            <button id="btn-start-run" class="btn-primary btn-xl ${e.hasResumableSoloRun()?"":"pulse-glow"}">${e.hasResumableSoloRun()?$.t("btn_new_run"):$.t("btn_start_run")}</button>
            <button id="btn-start-pvp" class="btn-ad btn-xl pulse-glow">${$.t("btn_start_pvp")}</button>
            <button id="btn-free-gold-ad" class="btn-ad">${$.t("btn_free_gold_ad")}</button>
            <button id="btn-menu-crates" class="btn-gold">🎁 ${$.t("hud_crates_btn")}</button>
            <button id="btn-menu-missions" class="btn-secondary">📋 ${$.t("hud_missions_btn")}</button>
            <button id="btn-menu-ranks" class="btn-secondary">🏆 ${$.t("hud_ranks_btn")}</button>
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),document.getElementById("btn-menu-lang-en")?.addEventListener("click",()=>{_e.getInstance().playClick(),e.setLanguage("en"),this.renderMainMenu()}),document.getElementById("btn-menu-lang-tr")?.addEventListener("click",()=>{_e.getInstance().playClick(),e.setLanguage("tr"),this.renderMainMenu()}),this.uiLayer.querySelectorAll("[data-theme]").forEach(i=>{i.addEventListener("click",a=>{const r=a.currentTarget.dataset.theme;r&&(_e.getInstance().playClick(),e.setArenaTheme(r),this.engine.applyCurrentTheme(),this.renderMainMenu())})}),document.getElementById("btn-continue-run")?.addEventListener("click",()=>{_e.getInstance().playClick(),this.resetToInGameHud(),this.engine.resumeSoloRun()||this.engine.startNewRun("SOLO")}),document.getElementById("btn-start-run")?.addEventListener("click",()=>{if(e.hasResumableSoloRun()){const i=n?`Kayıtlı Solo ilerlemen (Dalga ${t.soloRun.wave}) silinip yeni oyun başlayacak. Emin misin?`:`Your saved Solo progress (Wave ${t.soloRun.wave}) will be replaced by a new run. Continue?`;if(!window.confirm(i))return}_e.getInstance().playClick(),this.resetToInGameHud(),this.engine.startNewRun("SOLO")}),document.getElementById("btn-start-pvp")?.addEventListener("click",()=>{_e.getInstance().playClick(),this.resetToInGameHud(),this.engine.startNewRun("PVP")}),document.getElementById("btn-free-gold-ad")?.addEventListener("click",async()=>{_e.getInstance().playClick(),await Ct.getInstance().showRewardedAd("Menu Free Gold & Gem Drop")&&(e.addGold(250),e.addGems(10),this.renderMainMenu())}),document.getElementById("btn-menu-crates")?.addEventListener("click",()=>{_e.getInstance().playClick(),this.openCratesModal()}),document.getElementById("btn-menu-missions")?.addEventListener("click",()=>{_e.getInstance().playClick(),this.openMissionsModal()}),document.getElementById("btn-menu-ranks")?.addEventListener("click",()=>{_e.getInstance().playClick(),this.openLeaderboardModal()}),this.uiLayer.querySelectorAll("[data-cmd-select]").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.cmdSelect,r=i.dataset.cmdMode;if(r==="select")e.data.selectedCommander=a,e.save(),_e.getInstance().playClick(),this.renderMainMenu();else if(r==="vip")_e.getInstance().playClick(),this.openStoreModal();else if(r==="gems"){const o=a==="tesla_engineer"?180:250;e.spendGems(o)?(e.unlockCommander(a),_e.getInstance().playMerge(4),this.renderMainMenu()):this.openStoreModal()}})}),this.uiLayer.querySelectorAll("[data-meta-buy]").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.metaBuy;e.buyMetaUpgrade(a)?(_e.getInstance().playMerge(2),this.renderMainMenu()):_e.getInstance().playHit()})})}renderCommanderCard(e,t,n,i,a,r,o,l,c){const h=Pe.getInstance(),g=h.isCommanderUnlocked(e),d=h.data.selectedCommander===e;let p="";return g?p=`
        <button data-cmd-select="${e}" data-cmd-mode="select" class="${d?"btn-gold":"btn-primary"}">
          ${d?$.t("cmd_selected"):$.t("cmd_select")}
        </button>
      `:p=`
        <div class="cmd-unlock-btns">
          <button data-cmd-select="${e}" data-cmd-mode="vip" class="btn-buy">${$.t("cmd_unlock_vip")}</button>
          <button data-cmd-select="${e}" data-cmd-mode="gems" class="btn-ad">${$.t("cmd_unlock_gems",{gems:c})}</button>
        </div>
      `,`
      <div class="commander-card ${d?"cmd-active":""}" style="border-color: ${d?o:"rgba(148,163,184,0.25)"}">
        <div class="cmd-top">
          <div class="cmd-portrait-wrap" style="background: ${o}22; border-color: ${o}">
            <img class="cmd-portrait-img" src="${t}" alt="${i}" onerror="this.style.display='none'" />
            <span class="cmd-fallback-icon">${n}</span>
          </div>
          <div>
            <span class="lvl-tag" style="margin-left:0; color: ${l?"#facc15":"#38bdf8"}">${a}</span>
            <h4>${i}</h4>
            <p>${r}</p>
          </div>
        </div>
        ${p}
      </div>
    `}renderMetaUpgradeCard(e,t,n){const i=Pe.getInstance(),a=i.data.meta[e],r=i.getMaxUpgradeLevelCap(),o=a>=r,l=i.getMetaUpgradeCost(e),c=!o&&i.data.gold>=l,h=i.data.language==="tr";return`
      <div class="meta-card" style="border-color: ${o?"rgba(250,204,21,0.45)":"rgba(56,189,248,0.28)"}">
        <div class="meta-info">
          <h4>${t} <span class="lvl-tag">Lv.${a} / Max ${r}</span></h4>
          <p>${n}</p>
          ${o?`<small style="color:#facc15; display:block; margin-top:3px; font-weight:700;">${h?`🔒 Maks Sınır (Solo Dalga ${r+1}'e ulaşarak artır)`:`🔒 Cap Reached (Reach Solo Wave ${r+1} to raise)`}</small>`:""}
        </div>
        <button data-meta-buy="${e}" class="btn-buy ${c?"":"disabled"}" ${c?"":"disabled"}>
          ${o?h?`MAKS (${r})`:`MAX (${r})`:`🪙 ${l.toLocaleString()}`}
        </button>
      </div>
    `}openLevelUpModal(){const e=[...Hm].sort(()=>Math.random()-.5);this.draftedLevelCards=e.slice(0,3),this.renderLevelUpModal()}renderLevelUpModal(){const e=$.getLang()==="tr";this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel levelup-panel">
          <div class="workshop-header">
            <div>
              <h2>${$.t("levelup_title",{level:this.engine.player.level})}</h2>
              <p>${$.t("levelup_sub")}</p>
            </div>
            <button id="btn-take-all-cards-ad" class="btn-ad pulse-glow">${$.t("btn_take_all_3")}</button>
          </div>

          <div class="tactical-cards-grid">
            ${this.draftedLevelCards.map((t,n)=>`
              <div class="tactical-card" style="border-color: ${t.color}" data-pick-card="${n}">
                <div class="tactical-icon">${t.icon}</div>
                <h3>${e?t.titleTr:t.titleEn}</h3>
                <p>${e?t.descTr:t.descEn}</p>
                <button class="btn-primary">${$.t("btn_select_card")}</button>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),this.uiLayer.querySelectorAll("[data-pick-card]").forEach(t=>{t.addEventListener("click",()=>{const n=Number(t.dataset.pickCard),i=this.draftedLevelCards[n];i&&(_e.getInstance().playClick(),this.engine.applyTacticalCard(i.id),this.resetToInGameHud(),this.engine.state="PLAYING")})}),document.getElementById("btn-take-all-cards-ad")?.addEventListener("click",async()=>{if(_e.getInstance().playClick(),await Ct.getInstance().showRewardedAd("Take All 3 Level-Up Tactical Cards")){for(const n of this.draftedLevelCards)this.engine.applyTacticalCard(n.id);this.resetToInGameHud(),this.engine.state="PLAYING"}})}openBetweenWaveWorkshop(){this.selectedSlot=null,this.waveBonusDoubled=!1,this.rollShopOffers(),this.renderWorkshopModal()}rollShopOffers(){const e=Object.keys(Vn);this.shopOffers=[];for(let t=0;t<3;t++){const n=e[Math.floor(Math.random()*e.length)],i=Vn[n],a=this.engine.currentWave>=4&&Math.random()<.3?2:1,r=Math.round((i.baseCost+this.engine.currentWave*6)*Math.pow(2,a-1));this.shopOffers.push({archetype:n,tier:a,cost:r,purchased:!1})}}renderWorkshopModal(){const e=Pe.getInstance(),t=e.getDamageMultiplier()*(1+this.engine.runBuffs.damageMult),n=(r,o,l)=>{const c=this.selectedSlot?.group===o&&this.selectedSlot?.index===l;if(!r)return`
          <div class="weapon-slot empty-slot ${c?"selected-slot":""}" data-slot-group="${o}" data-slot-idx="${l}">
            <span class="slot-placeholder">${o==="equipped"?"EQUIP SLOT":"BENCH"}</span>
          </div>
        `;const h=Vn[r.archetype],g=es[Math.min(es.length-1,r.tier-1)],d=Xa[Math.min(Xa.length-1,r.tier-1)]||`Tier ${r.tier}`,p=Math.round(h.baseDamage*Math.pow(2.15,r.tier-1)*t);return`
        <div class="weapon-slot filled-slot ${c?"selected-slot":""}"
             style="border-color: ${g}; box-shadow: 0 0 12px ${g}33"
             data-slot-group="${o}" data-slot-idx="${l}">
          <div class="slot-tier-badge" style="background: ${g}">T${r.tier} ${d}</div>
          <div class="slot-icon">${h.icon}</div>
          <div class="slot-name">${h.name}</div>
          <div class="slot-dmg">⚔️ ${p} DMG</div>
          <button class="btn-sell-slot" data-sell-group="${o}" data-sell-idx="${l}" title="Sell Weapon">🪙 Sell</button>
        </div>
      `},i=e.getMaxUpgradeLevelCap(),a=e.data.language==="tr";this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel workshop-panel">
          <div class="workshop-header">
            <div>
              <h2>${$.t("workshop_title",{wave:this.engine.currentWave})}</h2>
              <p>${$.t("workshop_sub")} <strong style="color:#facc15;">(${a?`Maks Silah Seviyesi: T${i}`:`Max Weapon Tier Cap: T${i}`})</strong></p>
            </div>
            <div class="workshop-header-btns" style="align-items:center;">
              <div style="display:flex; gap:10px; align-items:center; background:rgba(15,23,42,0.95); border:2px solid #facc15; padding:6px 14px; border-radius:999px;">
                <span style="color:#facc15; font-weight:800; font-family:'Orbitron',sans-serif; font-size:1rem;">🪙 ${e.data.gold.toLocaleString()}</span>
                <span style="color:#38bdf8; font-weight:800; font-family:'Orbitron',sans-serif; font-size:0.95rem;">💎 ${e.data.gems.toLocaleString()}</span>
              </div>
              <button id="btn-auto-merge" class="btn-gold">${$.t("btn_auto_merge")}</button>
              ${this.waveBonusDoubled?`<span class="badge-claimed">${$.t("badge_bonus_claimed")}</span>`:`<button id="btn-double-wave-ad" class="btn-ad">${$.t("btn_double_wave_ad",{gold:this.engine.waveGoldEarned})}</button>`}
            </div>
          </div>

          <div class="workshop-section">
            <h3>${$.t("active_slots_title")}</h3>
            <div class="slots-grid">
              ${this.engine.weapons.equipped.map((r,o)=>n(r,"equipped",o)).join("")}
            </div>
          </div>

          <div class="workshop-section">
            <h3>${$.t("bench_slots_title")}</h3>
            <div class="slots-grid">
              ${this.engine.weapons.bench.map((r,o)=>n(r,"bench",o)).join("")}
            </div>
          </div>

          <div class="workshop-section shop-offers-section">
            <div class="shop-bar-header">
              <h3>${$.t("armory_title")}</h3>
              <div class="shop-reroll-btns">
                <button id="btn-reroll-gold" class="btn-secondary">${$.t("btn_reroll_gold")}</button>
                <button id="btn-reroll-ad" class="btn-ad">${$.t("btn_reroll_ad")}</button>
              </div>
            </div>
            <div class="shop-offers-grid">
              ${this.shopOffers.map((r,o)=>{const l=Vn[r.archetype],c=es[r.tier-1],h=!r.purchased&&e.data.gold>=r.cost&&this.engine.weapons.hasFreeSlot();return`
                    <div class="shop-offer-card ${r.purchased?"sold-out":""}" style="border-color: ${c}">
                      <div class="slot-tier-badge" style="background: ${c}">T${r.tier} ${Xa[r.tier-1]}</div>
                      <div class="offer-main">
                        <span class="offer-icon">${l.icon}</span>
                        <div>
                          <h4>${l.name}</h4>
                          <p>${l.description}</p>
                        </div>
                      </div>
                      <button data-buy-offer="${o}" class="btn-primary ${h?"":"disabled"}" ${h?"":"disabled"}>
                        ${r.purchased?"PURCHASED ✓":`BUY • 🪙 ${r.cost}`}
                      </button>
                    </div>
                  `}).join("")}
            </div>
          </div>

          <div class="workshop-footer">
            <button id="btn-Menu-return" class="btn-secondary">${$.t("btn_main_menu")}</button>
            <button id="btn-next-wave" class="btn-primary btn-xl pulse-glow">${$.t("btn_next_wave",{wave:this.engine.currentWave+1})}</button>
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),this.bindWorkshopEvents()}bindWorkshopEvents(){const e=Pe.getInstance();this.uiLayer.querySelectorAll("[data-slot-group]").forEach(t=>{t.addEventListener("click",n=>{if(n.target.hasAttribute("data-sell-group"))return;const i=t.dataset.slotGroup,a=Number(t.dataset.slotIdx);this.selectedSlot?(this.engine.weapons.interactSlots(this.selectedSlot.group,this.selectedSlot.index,i,a),this.selectedSlot=null,this.renderWorkshopModal()):(i==="equipped"&&this.engine.weapons.equipped[a]||i==="bench"&&this.engine.weapons.bench[a])&&(this.selectedSlot={group:i,index:a},_e.getInstance().playClick(),this.renderWorkshopModal())})}),this.uiLayer.querySelectorAll("[data-sell-group]").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const i=t.dataset.sellGroup,a=Number(t.dataset.sellIdx),r=this.engine.weapons.sellWeapon(i,a);r>0&&(e.addGold(r),this.renderWorkshopModal())})}),document.getElementById("btn-auto-merge")?.addEventListener("click",()=>{this.engine.weapons.autoMergeAll(),this.renderWorkshopModal()}),document.getElementById("btn-double-wave-ad")?.addEventListener("click",async()=>{await Ct.getInstance().showRewardedAd("2x Wave Clear Gold Bonus")&&!this.waveBonusDoubled&&(this.waveBonusDoubled=!0,e.addGold(this.engine.waveGoldEarned),this.renderWorkshopModal())}),this.uiLayer.querySelectorAll("[data-buy-offer]").forEach(t=>{t.addEventListener("click",()=>{const n=Number(t.dataset.buyOffer),i=this.shopOffers[n];if(!(!i||i.purchased)&&this.engine.weapons.hasFreeSlot()&&e.spendGold(i.cost)){i.purchased=!0;const a=this.engine.weapons.createWeapon(i.archetype,i.tier);this.engine.weapons.addWeaponToAvailableSlot(a),_e.getInstance().playCoin(),this.renderWorkshopModal()}})}),document.getElementById("btn-reroll-gold")?.addEventListener("click",()=>{e.spendGold(25)&&(_e.getInstance().playClick(),this.rollShopOffers(),this.renderWorkshopModal())}),document.getElementById("btn-reroll-ad")?.addEventListener("click",async()=>{await Ct.getInstance().showRewardedAd("Free Armory Reroll + High Tier Crate")&&(this.rollShopOffers(),this.shopOffers[1]&&(this.shopOffers[1].tier=Math.min(4,this.shopOffers[1].tier+1)),this.renderWorkshopModal())}),document.getElementById("btn-Menu-return")?.addEventListener("click",()=>{this.engine.saveCheckpointOnExit(),this.engine.state="MENU",this.renderMainMenu()}),document.getElementById("btn-next-wave")?.addEventListener("click",async()=>{_e.getInstance().playClick(),this.engine.currentWave%3===0&&await Ct.getInstance().showInterstitialAd(`Between Wave ${this.engine.currentWave} & ${this.engine.currentWave+1}`),this.resetToInGameHud(),this.engine.startWave(this.engine.currentWave+1)})}openDeathModal(){const e=Pe.getInstance(),t=this.engine.state==="REVIVE_PROMPT",n=Math.max(100,Math.floor(this.engine.runGoldEarned*.5));this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel death-panel">
          <h2 class="death-title">${t?$.t("death_revive_title"):$.t("death_over_title")}</h2>
          <p>${$.t("death_summary",{wave:this.engine.currentWave,kills:this.engine.runKills})}</p>

          <div class="stats-banner">
            <div><span>${$.t("wave_label")}</span><strong>${this.engine.currentWave}</strong></div>
            <div><span>GOLD</span><strong>🪙 ${this.engine.runGoldEarned}</strong></div>
            <div><span>SCORE</span><strong>${this.engine.runScore.toLocaleString()}</strong></div>
          </div>

          <div class="death-actions">
            ${t?`<button id="btn-revive-ad" class="btn-ad btn-xl pulse-glow">${$.t("btn_revive_ad")}</button>`:""}
            <button id="btn-claim-2x-end" class="btn-gold">${$.t("btn_claim_end_ad",{gold:n})}</button>
            <button id="btn-return-menu" class="btn-secondary">${$.t("btn_return_hub")}</button>
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),document.getElementById("btn-revive-ad")?.addEventListener("click",async()=>{await Ct.getInstance().showRewardedAd("Emergency Revive + Tactical Nuke")&&(this.resetToInGameHud(),this.engine.revivePlayerWithNuke())}),document.getElementById("btn-claim-2x-end")?.addEventListener("click",async()=>{await Ct.getInstance().showRewardedAd("End-of-Run Bonus Gold Multiplier")&&e.addGold(n),this.engine.state="MENU",this.renderMainMenu()}),document.getElementById("btn-return-menu")?.addEventListener("click",()=>{this.engine.state="MENU",this.renderMainMenu()})}openSubModal(e,t,n,i,a){document.getElementById(e)?.remove();const r=this.engine.state;this.engine.setSdkPause(!0);const o=document.createElement("div");o.id=e,o.className="modal-backdrop",o.innerHTML=`
      <div class="cyber-panel store-panel">
        <div class="workshop-header">
          <div>
            <h2>${t}</h2>
            <p>${n}</p>
          </div>
          <button id="btn-close-${e}" class="btn-secondary">✕ Close</button>
        </div>
        ${i}
      </div>
    `,this.uiLayer.appendChild(o);const l=()=>{o.remove(),this.engine.setSdkPause(!1),r==="MENU"?this.renderMainMenu():r==="SHOP"?this.renderWorkshopModal():r==="LEVEL_UP"?this.renderLevelUpModal():this.updateTopHudValues()};document.getElementById(`btn-close-${e}`)?.addEventListener("click",l),a(o,l)}openCratesModal(e){const t=Pe.getInstance(),n=t.data.techShards,i=`
      <div class="shards-banner">${$.t("tech_shards_banner",{shards:n,bonus:n*3})}</div>
      ${e?`
        <div class="crate-loot-reveal pulse-glow">
          <h4>${$.t("crate_rewards_header")}</h4>
          <div class="loot-pills">
            <span class="loot-pill">🪙 +${e.gold} Gold</span>
            <span class="loot-pill">💎 +${e.gems} Gems</span>
            ${e.techShards>0?`<span class="loot-pill shard-pill">⚙️ +${e.techShards} Tech Shards (+${e.techShards*3}% DMG)</span>`:""}
          </div>
        </div>
      `:""}
      <div class="iap-grid">
        <div class="iap-card">
          <span class="iap-badge">FREE AD DROP</span>
          <div class="crate-big-icon">📦</div>
          <h3>${$.t("crate_free_title")}</h3>
          <p>${$.t("crate_free_desc")}</p>
          <button id="btn-open-ad-crate" class="btn-ad">${$.t("crate_free_btn")}</button>
        </div>
        <div class="iap-card">
          <div class="crate-big-icon">🎁</div>
          <h3>${$.t("crate_1x_title")}</h3>
          <p>${$.t("crate_1x_desc")}</p>
          <button id="btn-open-1x-crate" class="btn-primary">${$.t("crate_1x_btn")}</button>
        </div>
        <div class="iap-card">
          <span class="iap-badge">JACKPOT VALUE</span>
          <div class="crate-big-icon">🌌</div>
          <h3>${$.t("crate_10x_title")}</h3>
          <p>${$.t("crate_10x_desc")}</p>
          <button id="btn-open-10x-crate" class="btn-gold">${$.t("crate_10x_btn")}</button>
        </div>
      </div>
    `;this.openSubModal("crates-modal",$.t("crates_modal_title"),$.t("crates_modal_sub"),i,(a,r)=>{document.getElementById("btn-open-ad-crate")?.addEventListener("click",async()=>{if(await Ct.getInstance().showRewardedAd("Open Free Cyber Supply Crate")){const l=t.rollSupplyCrate(1,!1);_e.getInstance().playMerge(5),this.openCratesModal(l)}}),document.getElementById("btn-open-1x-crate")?.addEventListener("click",()=>{if(t.spendGems(80)){const o=t.rollSupplyCrate(1,!0);_e.getInstance().playMerge(4),this.openCratesModal(o)}else r(),this.openStoreModal()}),document.getElementById("btn-open-10x-crate")?.addEventListener("click",()=>{if(t.spendGems(700)){const o=t.rollSupplyCrate(10,!0);_e.getInstance().playMerge(5),this.openCratesModal(o)}else r(),this.openStoreModal()})})}openMissionsModal(){const e=Pe.getInstance(),t=e.data,n=[{tierKey:"killsTier",title:$.t("mission_kill_title"),desc:$.t("mission_kill_desc",{target:t.missionTiers.killsTier*60}),current:t.totalKills,target:t.missionTiers.killsTier*60,rewardGold:250*t.missionTiers.killsTier,rewardGems:20},{tierKey:"mergesTier",title:$.t("mission_merge_title"),desc:$.t("mission_merge_desc",{target:t.missionTiers.mergesTier*4}),current:t.totalMerges,target:t.missionTiers.mergesTier*4,rewardGold:300*t.missionTiers.mergesTier,rewardGems:25},{tierKey:"waveTier",title:$.t("mission_wave_title"),desc:$.t("mission_wave_desc",{target:t.missionTiers.waveTier*3}),current:t.highestWave,target:t.missionTiers.waveTier*3,rewardGold:400*t.missionTiers.waveTier,rewardGems:35},{tierKey:"levelUpsTier",title:$.t("mission_lvl_title"),desc:$.t("mission_lvl_desc",{target:t.missionTiers.levelUpsTier*3}),current:t.totalLevelUps,target:t.missionTiers.levelUpsTier*3,rewardGold:250*t.missionTiers.levelUpsTier,rewardGems:20}],i=`
      <div class="missions-list">
        ${n.map((a,r)=>{const o=Math.min(100,Math.round(a.current/a.target*100)),l=a.current>=a.target;return`
              <div class="mission-row ${l?"mission-ready":""}">
                <div class="mission-details">
                  <h4>${a.title} <span class="lvl-tag">Tier ${t.missionTiers[a.tierKey]}</span></h4>
                  <p>${a.desc} (${Math.min(a.current,a.target)} / ${a.target})</p>
                  <div class="mission-prog-wrap">
                    <div class="mission-prog-fill" style="width: ${o}%"></div>
                  </div>
                </div>
                <div class="mission-rewards">
                  <span class="reward-tag">🪙 ${a.rewardGold} + 💎 ${a.rewardGems}</span>
                  ${l?`
                    <div class="mission-claim-btns">
                      <button data-claim-idx="${r}" data-claim-mult="1" class="btn-primary">${$.t("btn_claim_mission")}</button>
                      <button data-claim-idx="${r}" data-claim-mult="2" class="btn-ad">${$.t("btn_claim_2x_ad")}</button>
                    </div>
                  `:`<button class="btn-secondary" disabled>${$.t("mission_in_progress")}</button>`}
                </div>
              </div>
            `}).join("")}
      </div>
    `;this.openSubModal("missions-modal",$.t("missions_modal_title"),$.t("missions_modal_sub"),i,a=>{a.querySelectorAll("[data-claim-idx]").forEach(r=>{r.addEventListener("click",async()=>{const o=Number(r.dataset.claimIdx),l=Number(r.dataset.claimMult),c=n[o];!c||c.current<c.target||l===2&&!await Ct.getInstance().showRewardedAd(`2x Mission Bounty: ${c.title}`)||(e.addGold(c.rewardGold*l),e.addGems(c.rewardGems*l),e.data.missionTiers[c.tierKey]+=1,e.save(),_e.getInstance().playCashRegister(),this.openMissionsModal())})})})}openLeaderboardModal(){const e=Pe.getInstance(),t=e.data,n=[...Vm,{name:t.playerName||"CYBER_COMMANDER",wave:t.highestWave,score:t.highScore,vip:t.vipUnlocked,isPlayer:!0}].sort((a,r)=>r.score-a.score||r.wave-a.wave),i=`
      <div class="callsign-bar">
        <label for="input-callsign">${$.t("callsign_label")}</label>
        <input id="input-callsign" type="text" maxlength="18" value="${t.playerName}" />
        <button id="btn-save-callsign" class="btn-primary">${$.t("btn_save_callsign")}</button>
      </div>

      <div class="leaderboard-table-wrap">
        <table class="leaderboard-table">
          <thead>
            <tr>
              <th>${$.t("col_rank")}</th>
              <th>${$.t("col_commander")}</th>
              <th>${$.t("col_wave")}</th>
              <th>${$.t("col_score")}</th>
            </tr>
          </thead>
          <tbody>
            ${n.map((a,r)=>`
              <tr class="${a.isPlayer?"player-rank-row":""}">
                <td><strong>#${r+1}</strong></td>
                <td>
                  ${a.name}
                  ${a.vip?'<span class="vip-tag">VIP</span>':""}
                  ${a.isPlayer?'<span class="you-tag">YOU</span>':""}
                </td>
                <td>${$.t("wave_label")} ${a.wave}</td>
                <td><strong>${a.score.toLocaleString()}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;this.openSubModal("leaderboard-modal",$.t("leaderboard_title"),$.t("leaderboard_sub"),i,()=>{document.getElementById("btn-save-callsign")?.addEventListener("click",()=>{const r=(document.getElementById("input-callsign")?.value||"").trim().toUpperCase().slice(0,18);r&&(e.data.playerName=r,e.save(),_e.getInstance().playClick(),this.openLeaderboardModal())})})}openStoreModal(){const e=Pe.getInstance(),t=`
      <div class="iap-grid">
        ${_c.map(n=>{const i=n.id==="vip_speed"&&e.data.vipUnlocked||n.id==="starter_pack"&&e.data.starterPackBought;return`
            <div class="iap-card">
              ${n.badge?`<span class="iap-badge">${n.badge}</span>`:""}
              <h3>${n.title}</h3>
              <p>${n.description}</p>
              <button data-iap-id="${n.id}" class="btn-gold ${i?"disabled":""}" ${i?"disabled":""}>
                ${i?"UNLOCKED ✓":`BUY $${n.priceUsd.toFixed(2)}`}
              </button>
            </div>
          `}).join("")}
      </div>

      <div class="gem-exchange-bar">
        <div>
          <h4>🎁 LEGENDARY GEM EXCHANGE</h4>
          <p>Spend 50 💎 Gems to receive +1,000 Gold instantly</p>
        </div>
        <button id="btn-spend-gems" class="btn-primary">Spend 50 💎 → +1,000 🪙</button>
      </div>
    `;this.openSubModal("vip-store-modal","💎 NEXUS CYBER STORE & IAP SANDBOX","Test high-converting In-App Purchases (Stripe/Portal SDK) and Gem Crates. All transactions increment your Simulated Revenue counter!",t,(n,i)=>{n.querySelectorAll("[data-iap-id]").forEach(a=>{a.addEventListener("click",async()=>{const r=a.dataset.iapId;await Ct.getInstance().purchaseProduct(r)&&(r==="starter_pack"?(e.data.starterPackBought=!0,e.addGold(1500),e.addGems(100),this.engine.weapons.addWeaponToAvailableSlot(this.engine.weapons.createWeapon("plasma",3))):r==="vip_speed"?(e.data.vipUnlocked=!0,e.unlockCommander("tesla_engineer"),e.unlockCommander("void_phantom"),e.addGems(500),this.engine.gameSpeedMultiplier=2):r==="gem_vault_small"?e.addGems(150):r==="gem_vault_mega"&&(e.addGems(1e3),e.addGold(5e3)),e.save(),i())})}),document.getElementById("btn-spend-gems")?.addEventListener("click",()=>{e.spendGems(50)&&(e.addGold(1e3),_e.getInstance().playCashRegister(),this.updateTopHudValues())})})}}window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("game-canvas");if(!s)throw new Error("Missing #game-canvas element");const e=new zm(s);Ct.getInstance().bindEngineCallbacks(()=>e.setSdkPause(!0),()=>e.setSdkPause(!1)),new Wm(e)});
