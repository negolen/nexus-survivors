(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const ks={en:{hero_badge:"3D WEBGL • MONETIZATION-READY • 60FPS ROGUELITE",game_subtitle:"MERGE & CONQUER",hero_desc:"Survive relentless 3D cyber-swarms, merge identical weapons up to Tier-5 Legendary, and defeat Dreadnought Bosses before detonation!",stat_highest_wave:"HIGHEST WAVE",stat_high_score:"HIGH SCORE",stat_ads_watched:"ADS WATCHED",stat_sim_rev:"SIMULATED REV",wave_label:"WAVE",lvl_label:"LVL",speed_2x_on:"2x TURBO ON",speed_1x_btn:"1x SPEED (2x AD/VIP)",vip_store_btn:"VIP STORE",hud_crates_btn:"CRATES",hud_missions_btn:"MISSIONS",hud_ranks_btn:"RANKS",commanders_title:"SELECT CYBER COMMANDER (2 FREE • 2 VIP)",cmd_vanguard_name:"Commander Rex (Vanguard)",cmd_vanguard_role:"FREE • MALE",cmd_vanguard_desc:"+25 Max Hull HP • Starts w/ Dual Plasma Blasters",cmd_valkyrie_name:"Commander Aria (Valkyrie)",cmd_valkyrie_role:"FREE • FEMALE",cmd_valkyrie_desc:"+15% Attack Speed & +12% Move Speed • Starts w/ Cryo Nova + Plasma",cmd_tesla_name:"Overlord Volt (Tesla Prime)",cmd_tesla_role:"👑 VIP COMMANDER",cmd_tesla_desc:"+25% All Weapon Damage • Starts w/ Tier-2 Tesla Coil + Plasma",cmd_phantom_name:"Shadow Nyx (Void Phantom)",cmd_phantom_role:"👑 VIP COMMANDER",cmd_phantom_desc:"+30% Move Speed & +20% Crit Chance • Starts w/ Tier-2 Ripper + Rockets",cmd_selected:"SELECTED ✓",cmd_select:"SELECT",cmd_unlock_vip:"👑 VIP PASS",cmd_unlock_gems:"Unlock ({gems} 💎)",meta_dmg_title:"⚔️ Weapon Damage",meta_dmg_desc:"+15% All Damage / Lv",meta_hp_title:"🛡️ Hull Integrity",meta_hp_desc:"+30 Max HP / Lv",meta_spd_title:"⚡ Fire Rate Overclock",meta_spd_desc:"+8% Attack Speed / Lv",meta_gold_title:"🪙 Venture Capital",meta_gold_desc:"+25 Starting Gold / Lv",btn_start_run:"🚀 DEPLOY TO 3D ARENA (START RUN)",btn_free_gold_ad:"🎬 Watch Rewarded Ad (+250 Gold & +10 💎)",workshop_title:"WAVE {wave} CLEARED! • MERGE WORKSHOP",workshop_sub:"Click two identical weapons of the same Tier to MERGE them into Tier+1 (2.15x Damage)!",btn_auto_merge:"✨ AUTO-MERGE ALL",btn_double_wave_ad:"🎬 2x Wave Gold (+{gold}g)",badge_bonus_claimed:"2x BONUS CLAIMED ✓",active_slots_title:"ACTIVE ORBITAL SLOTS (6 MAX)",bench_slots_title:"WORKSHOP BENCH (STORAGE)",armory_title:"ARMORY REQUISITION",btn_reroll_gold:"🎲 Reroll (25 🪙)",btn_reroll_ad:"🎬 Free Reroll + Rare Chance (Ad)",btn_main_menu:"🏠 Main Menu",btn_next_wave:"⚔️ START WAVE {wave} ▶",levelup_title:"⚡ TACTICAL LEVEL UP! (LEVEL {level})",levelup_sub:"Select 1 combat augmentation for this run — or claim ALL 3 via Rewarded Ad!",btn_take_all_3:"🎬 TAKE ALL 3 UPGRADES (Watch Ad)",btn_select_card:"SELECT AUGMENT",death_revive_title:"⚠️ HULL CRITICAL — REVIVE AVAILABLE!",death_over_title:"💀 RUN TERMINATED",death_summary:"You reached Wave {wave} and eliminated {kills} hostiles.",btn_revive_ad:"🎬 Watch Ad to REVIVE (100% HP + Tactical Nuke)",btn_claim_end_ad:"🎬 Watch Ad: Claim +{gold} Bonus Gold & Exit",btn_return_hub:"Return to Upgrade Hub",crates_modal_title:"🎁 CYBER SUPPLY CRATES (GACHA LAB)",crates_modal_sub:"Open encrypted supply pods for Gold, Gems, and Permanent Tech Shards (+3% All Weapon Damage per Shard)!",tech_shards_banner:"⚡ Permanent Tech Shards Owned: {shards} (+{bonus}% Global Weapon Damage)",crate_free_title:"Encrypted Ad Pod",crate_free_desc:"Contains 250–600 Gold, 15–35 Gems, or Tech Shards!",crate_free_btn:"🎬 OPEN FREE CRATE (Watch Ad)",crate_1x_title:"Quantum Supply Crate",crate_1x_desc:"Guaranteed High Gold + Gems + 1–3 Permanent Tech Shards!",crate_1x_btn:"OPEN 1x CRATE (80 💎)",crate_10x_title:"10x Mega Armada Vault",crate_10x_desc:"10x Quantum Crates with Bonus Jackpot Shards & Gold (Save 100 💎)!",crate_10x_btn:"OPEN 10x MEGA VAULT (700 💎)",crate_rewards_header:"🎉 SUPPLY DROP UNLOCKED!",missions_modal_title:"📋 DAILY OPERATIONS & BOUNTIES",missions_modal_sub:"Complete combat milestones to earn Gems and Gold. Watch an Ad on claim to DOUBLE your bounty!",mission_kill_title:"Exterminator Protocol",mission_kill_desc:"Eliminate {target} hostile cyber-units",mission_merge_title:"Master Synthesizer",mission_merge_desc:"Merge identical orbital weapons {target} times",mission_wave_title:"Deep Arena Survivor",mission_wave_desc:"Reach Wave {target} in the Cyber Arena",mission_lvl_title:"Tactical Overclocker",mission_lvl_desc:"Level up {target} times during arena runs",btn_claim_mission:"CLAIM",btn_claim_2x_ad:"🎬 2x CLAIM (Ad)",mission_in_progress:"IN PROGRESS",leaderboard_title:"🏆 GLOBAL ARENA LEADERBOARD",leaderboard_sub:"Top Cyber Commanders ranked by Arena High Score & Highest Wave survived.",callsign_label:"YOUR CALLSIGN:",btn_save_callsign:"SAVE NAME",col_rank:"RANK",col_commander:"COMMANDER",col_wave:"MAX WAVE",col_score:"HIGH SCORE"},tr:{hero_badge:"3D WEBGL • GELİR MODELİ HAZIR • 60FPS ROGUELITE",game_subtitle:"BİRLEŞTİR & FETHET",hero_desc:"3D siber sürülerden sağ çık, aynı silahları Seviye-5 Efsaneviye birleştir ve Bossları patlamadan önce yok et!",stat_highest_wave:"EN YÜKSEK DALGA",stat_high_score:"REKOR SKOR",stat_ads_watched:"İZLENEN REKLAM",stat_sim_rev:"SİMÜLE GELİR",wave_label:"DALGA",lvl_label:"SV",speed_2x_on:"2x TURBO AÇIK",speed_1x_btn:"1x HIZ (2x REKLAM/VIP)",vip_store_btn:"VIP MAĞAZA",hud_crates_btn:"KASALAR",hud_missions_btn:"GÖREVLER",hud_ranks_btn:"LİDERLİK",commanders_title:"SİBER KOMUTAN SEÇİMİ (2 ÜCRETSİZ • 2 VIP)",cmd_vanguard_name:"Komutan Rex (Öncü)",cmd_vanguard_role:"ÜCRETSİZ • ERKEK",cmd_vanguard_desc:"+25 Maks Can • Çift Plazma Silahı ile başlar",cmd_valkyrie_name:"Komutan Aria (Valkyrie)",cmd_valkyrie_role:"ÜCRETSİZ • KADIN",cmd_valkyrie_desc:"+%15 Saldırı Hızı & +%12 Hareket Hızı • Buz Novası + Plazma ile başlar",cmd_tesla_name:"Lord Volt (Tesla Prime)",cmd_tesla_role:"👑 VIP KOMUTAN",cmd_tesla_desc:"+%25 Tüm Silah Hasarı • Sv-2 Tesla Bobini + Plazma ile başlar",cmd_phantom_name:"Gölge Nyx (Hiçlik Hayaleti)",cmd_phantom_role:"👑 VIP KOMUTAN",cmd_phantom_desc:"+%30 Hareket Hızı & +%20 Kritik Şansı • Sv-2 Testere + Roket ile başlar",cmd_selected:"SEÇİLDİ ✓",cmd_select:"SEÇ",cmd_unlock_vip:"👑 VIP PAKET",cmd_unlock_gems:"Aç ({gems} 💎)",meta_dmg_title:"⚔️ Silah Hasarı",meta_dmg_desc:"+%15 Tüm Hasar / Sv",meta_hp_title:"🛡️ Zırh Bütünlüğü",meta_hp_desc:"+30 Maks Can / Sv",meta_spd_title:"⚡ Atış Hızı Aşırtma",meta_spd_desc:"+%8 Saldırı Hızı / Sv",meta_gold_title:"🪙 Başlangıç Sermayesi",meta_gold_desc:"+25 Başlangıç Altını / Sv",btn_start_run:"🚀 3D ARENAYA İNİŞ YAP (BAŞLA)",btn_free_gold_ad:"🎬 Ödüllü Reklam İzle (+250 Altın & +10 💎)",workshop_title:"DALGA {wave} TEMİZLENDİ! • BİRLEŞTİRME ATÖLYESİ",workshop_sub:"Aynı tür ve seviyedeki iki silaha tıklayarak Seviye+1 (2.15x Hasar) olarak BİRLEŞTİR!",btn_auto_merge:"✨ TÜMÜNÜ OTOMATİK BİRLEŞTİR",btn_double_wave_ad:"🎬 2x Dalga Altını (+{gold}g)",badge_bonus_claimed:"2x BONUS ALINDI ✓",active_slots_title:"AKTİF YÖRÜNGE SİLAHLARI (MAKS 6)",bench_slots_title:"ATÖLYE DEPOSU (YEDEK)",armory_title:"CEPHANELİK TEDARİĞİ",btn_reroll_gold:"🎲 Yenile (25 🪙)",btn_reroll_ad:"🎬 Ücretsiz Yenile + Nadir Şansı (Reklam)",btn_main_menu:"🏠 Ana Menü",btn_next_wave:"⚔️ DALGA {wave} BAŞLAT ▶",levelup_title:"⚡ TAKTİKSEL SEVİYE ATLAMA! (SEVİYE {level})",levelup_sub:"Bu tur için 1 savaş güçlendirmesi seç — veya Reklam izleyerek 3 KARTIN TÜMÜNÜ AL!",btn_take_all_3:"🎬 3 KARTIN TÜMÜNÜ AL (Reklam İzle)",btn_select_card:"GÜÇLENDİRMEYİ SEÇ",death_revive_title:"⚠️ ZIRH KRİTİK — DİRİLME MEVCUT!",death_over_title:"💀 OPERASYON SONA ERDİ",death_summary:"Dalga {wave} seviyesine ulaştın ve {kills} düşmanı yok ettin.",btn_revive_ad:"🎬 Reklam İzle ve DİRİL (%100 Can + Nükleer Dalga)",btn_claim_end_ad:"🎬 Reklam İzle: +{gold} Bonus Altın Al & Çık",btn_return_hub:"Geliştirme Merkezine Dön",crates_modal_title:"🎁 SİBER İKMAL KASALARI (GACHA)",crates_modal_sub:"Altın, Elmas ve Kalıcı Teknoloji Parçaları (Parça başına +%3 Silah Hasarı) için kasaları aç!",tech_shards_banner:"⚡ Kalıcı Teknoloji Parçası: {shards} (+%{bonus} Genel Silah Hasarı)",crate_free_title:"Şifreli Reklam Kapsülü",crate_free_desc:"250–600 Altın, 15–35 Elmas veya Teknoloji Parçası içerir!",crate_free_btn:"🎬 ÜCRETSİZ KASA AÇ (Reklam İzle)",crate_1x_title:"Kuantum İkmal Kasası",crate_1x_desc:"Garantili Yüksek Altın + Elmas + 1–3 Kalıcı Teknoloji Parçası!",crate_1x_btn:"1x KASA AÇ (80 💎)",crate_10x_title:"10x Mega Armada Kasası",crate_10x_desc:"10x Kuantum Kasası + Jackpot Teknoloji Parçaları (100 💎 Tasarruf)!",crate_10x_btn:"10x MEGA KASA AÇ (700 💎)",crate_rewards_header:"🎉 İKMAL KAPSÜLÜ AÇILDI!",missions_modal_title:"📋 GÜNLÜK GÖREVLER & ÖDÜLLER",missions_modal_sub:"Elmas ve Altın kazanmak için hedefleri tamamla. Reklam izleyerek ödülü 2 KATINA çıkar!",mission_kill_title:"İmha Protokolü",mission_kill_desc:"{target} düşman siber birimini yok et",mission_merge_title:"Usta Sentezci",mission_merge_desc:"Aynı silahları {target} kez birleştir",mission_wave_title:"Arena Hayatta Kalanı",mission_wave_desc:"Siber Arenada Dalga {target} seviyesine ulaş",mission_lvl_title:"Taktiksel Aşırtıcı",mission_lvl_desc:"Arena turlarında {target} kez seviye atla",btn_claim_mission:"AL",btn_claim_2x_ad:"🎬 2x AL (Reklam)",mission_in_progress:"DEVAM EDİYOR",leaderboard_title:"🏆 KÜRESEL ARENA LİDERLİK TABLOSU",leaderboard_sub:"En yüksek skor ve ulaşılan dalgaya göre sıralanan Siber Komutanlar.",callsign_label:"KOMUTAN ADIN:",btn_save_callsign:"KAYDET",col_rank:"SIRA",col_commander:"KOMUTAN",col_wave:"MAKS DALGA",col_score:"REKOR SKOR"}};class Q{static currentLang="en";static getLang(){return this.currentLang}static setLang(e){this.currentLang=e==="tr"?"tr":"en"}static t(e,t){let i=(ks[this.currentLang]||ks.en)[e]||ks.en[e]||e;if(t)for(const[a,r]of Object.entries(t))i=i.replace(`{${a}}`,String(r));return i}}const Fr="nexus_survivors_save_v1",ti={language:"en",playerName:"CYBER_COMMANDER",selectedCommander:"vanguard",unlockedCommanders:["vanguard","valkyrie"],gold:150,gems:25,techShards:0,highScore:0,highestWave:1,totalKills:0,totalMerges:0,totalLevelUps:0,missionTiers:{killsTier:1,mergesTier:1,waveTier:1,levelUpsTier:1},vipUnlocked:!1,starterPackBought:!1,totalRevenueSimulated:0,rewardedAdsWatched:0,interstitialAdsWatched:0,iapPurchasesCount:0,soundEnabled:!0,meta:{damageLevel:0,maxHpLevel:0,startingGoldLevel:0,magnetLevel:0,attackSpeedLevel:0}};class He{static instance;data;listeners=[];saveTimeoutId=null;notifyScheduled=!1;constructor(){this.data=this.load(),Q.setLang(this.data.language||"en"),typeof window<"u"&&window.addEventListener("beforeunload",()=>this.flushSave())}static getInstance(){return He.instance||(He.instance=new He),He.instance}load(){try{const e=localStorage.getItem(Fr);if(!e)return structuredClone(ti);const t=JSON.parse(e),n=Array.isArray(t.unlockedCommanders)?t.unlockedCommanders:["vanguard","valkyrie"];return n.includes("vanguard")||n.push("vanguard"),n.includes("valkyrie")||n.push("valkyrie"),{...structuredClone(ti),...t,language:t.language==="tr"?"tr":"en",unlockedCommanders:n,missionTiers:{...ti.missionTiers,...t.missionTiers||{}},meta:{...ti.meta,...t.meta||{}}}}catch{return structuredClone(ti)}}save(){this.scheduleNotify(),this.saveTimeoutId===null&&(this.saveTimeoutId=window.setTimeout(()=>{this.saveTimeoutId=null,this.flushSave()},250))}flushSave(){this.saveTimeoutId!==null&&(clearTimeout(this.saveTimeoutId),this.saveTimeoutId=null);try{localStorage.setItem(Fr,JSON.stringify(this.data))}catch(e){console.warn("Could not persist save data:",e)}}setLanguage(e){this.data.language=e,Q.setLang(e),this.save()}toggleLanguage(){const e=this.data.language==="en"?"tr":"en";return this.setLanguage(e),e}isCommanderUnlocked(e){return e==="vanguard"||e==="valkyrie"||(e==="tesla_engineer"||e==="void_phantom")&&this.data.vipUnlocked?!0:this.data.unlockedCommanders.includes(e)}unlockCommander(e){this.data.unlockedCommanders.includes(e)||this.data.unlockedCommanders.push(e),this.data.selectedCommander=e,this.save()}recordKill(e=1){this.data.totalKills+=e,this.save()}recordMerge(e=1){this.data.totalMerges+=e,this.save()}recordLevelUp(e=1){this.data.totalLevelUps+=e,this.save()}rollSupplyCrate(e,t){let n=0,i=0,a=0;for(let r=0;r<e;r++){const o=t?400+Math.floor(Math.random()*550):250+Math.floor(Math.random()*350),l=t?15+Math.floor(Math.random()*35):15+Math.floor(Math.random()*25),c=t?1+Math.floor(Math.random()*3):Math.random()<.65?1:0;n+=o,i+=l,a+=c}return this.data.gold+=n,this.data.gems+=i,this.data.techShards+=a,this.save(),{gold:n,gems:i,techShards:a}}onChange(e){this.listeners.push(e)}scheduleNotify(){this.notifyScheduled||(this.notifyScheduled=!0,requestAnimationFrame(()=>{this.notifyScheduled=!1;for(const e of this.listeners)e()}))}addGold(e){this.data.gold=Math.max(0,Math.floor(this.data.gold+e)),this.save()}spendGold(e){return this.data.gold<e?!1:(this.data.gold-=e,this.save(),!0)}addGems(e){this.data.gems=Math.max(0,Math.floor(this.data.gems+e)),this.save()}spendGems(e){return this.data.gems<e?!1:(this.data.gems-=e,this.save(),!0)}recordAdRevenue(e,t){e==="rewarded"?this.data.rewardedAdsWatched+=1:this.data.interstitialAdsWatched+=1,this.data.totalRevenueSimulated=Number((this.data.totalRevenueSimulated+t/1e3).toFixed(4)),this.save()}recordIapRevenue(e){this.data.iapPurchasesCount+=1,this.data.totalRevenueSimulated=Number((this.data.totalRevenueSimulated+e).toFixed(4)),this.save()}getMetaUpgradeCost(e){const t=this.data.meta[e];return Math.floor(100*Math.pow(1.55,t))}buyMetaUpgrade(e){const t=this.getMetaUpgradeCost(e);return this.spendGold(t)?(this.data.meta[e]+=1,this.save(),!0):!1}getDamageMultiplier(){const e=this.data.selectedCommander==="tesla_engineer"?.25:0,t=this.data.techShards*.03;return 1+this.data.meta.damageLevel*.15+e+t}getBonusMaxHp(){const e=this.data.selectedCommander==="vanguard"?25:0;return this.data.meta.maxHpLevel*30+e}getStartingWaveGold(){return 40+this.data.meta.startingGoldLevel*25}getMagnetRadius(){return 100+this.data.meta.magnetLevel*25}getAttackSpeedMultiplier(){return 1+this.data.meta.attackSpeedLevel*.08}resetSave(){this.data=structuredClone(ti),Q.setLang("en"),this.flushSave(),this.scheduleNotify()}}class Me{static instance;ctx=null;adMuted=!1;constructor(){}static getInstance(){return Me.instance||(Me.instance=new Me),Me.instance}setAdMuted(e){this.adMuted=e}ensureContext(){if(this.adMuted||!He.getInstance().data.soundEnabled)return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}playShoot(e=0){const t=this.ensureContext();if(!t)return;const n=t.currentTime,i=t.createOscillator(),a=t.createGain();i.type="triangle";const r=520+e*60;i.frequency.setValueAtTime(r,n),i.frequency.exponentialRampToValueAtTime(140,n+.09),a.gain.setValueAtTime(.08,n),a.gain.exponentialRampToValueAtTime(.001,n+.09),i.connect(a),a.connect(t.destination),i.start(n),i.stop(n+.09)}playLightning(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(920,t),n.frequency.linearRampToValueAtTime(320,t+.06),n.frequency.linearRampToValueAtTime(750,t+.12),i.gain.setValueAtTime(.06,t),i.gain.exponentialRampToValueAtTime(.001,t+.12),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.12)}playHit(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="square",n.frequency.setValueAtTime(190,t),n.frequency.exponentialRampToValueAtTime(55,t+.06),i.gain.setValueAtTime(.05,t),i.gain.exponentialRampToValueAtTime(.001,t+.06),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.06)}playCoin(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(987.77,t),n.frequency.setValueAtTime(1318.51,t+.05),i.gain.setValueAtTime(.06,t),i.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.14)}playMerge(e){const t=this.ensureContext();if(!t)return;const n=t.currentTime,i=[440,554.37,659.25,880,1108.73],a=1+(e-1)*.12;i.forEach((r,o)=>{const l=t.createOscillator(),c=t.createGain();l.type="triangle",l.frequency.setValueAtTime(r*a,n+o*.045),c.gain.setValueAtTime(.11,n+o*.045),c.gain.exponentialRampToValueAtTime(.001,n+o*.045+.2),l.connect(c),c.connect(t.destination),l.start(n+o*.045),l.stop(n+o*.045+.2)})}playExplosion(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.sampleRate*.25,i=e.createBuffer(1,n,e.sampleRate),a=i.getChannelData(0);for(let c=0;c<n;c++)a[c]=Math.random()*2-1;const r=e.createBufferSource();r.buffer=i;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(420,t),o.frequency.exponentialRampToValueAtTime(60,t+.25);const l=e.createGain();l.gain.setValueAtTime(.15,t),l.gain.exponentialRampToValueAtTime(.001,t+.25),r.connect(o),o.connect(l),l.connect(e.destination),r.start(t),r.stop(t+.25)}playWaveComplete(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,a)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.setValueAtTime(i,t+a*.08),o.gain.setValueAtTime(.1,t+a*.08),o.gain.exponentialRampToValueAtTime(.001,t+a*.08+.35),r.connect(o),o.connect(e.destination),r.start(t+a*.08),r.stop(t+a*.08+.35)})}playCashRegister(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[1046.5,1318.5,1567.98,2093].forEach((i,a)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.setValueAtTime(i,t+a*.055),o.gain.setValueAtTime(.14,t+a*.055),o.gain.exponentialRampToValueAtTime(.001,t+a*.055+.24),r.connect(o),o.connect(e.destination),r.start(t+a*.055),r.stop(t+a*.055+.24)})}playClick(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(680,t),n.frequency.exponentialRampToValueAtTime(340,t+.03),i.gain.setValueAtTime(.06,t),i.gain.exponentialRampToValueAtTime(.001,t+.03),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.03)}}const lr="187",Hl=0,Or=1,zl=2,Ms=1,Vl=2,Pi=3,Zn=0,kt=1,Vt=2,mi=0,Ii=1,Br=2,Gr=3,kr=4,Wl=5,pi=100,Xl=101,$l=102,ql=103,Yl=104,Kl=200,Zl=201,Jl=202,Ql=203,Vo=204,Wo=205,jl=206,ec=207,tc=208,nc=209,ic=210,sc=211,ac=212,rc=213,oc=214,_a=0,va=1,xa=2,Ui=3,Ma=4,Sa=5,ya=6,Ea=7,Xo=0,lc=1,cc=2,bn=0,$o=1,qo=2,Yo=3,Ko=4,Zo=5,Jo=6,Qo=7,jo=300,_i=301,Fi=302,Hs=303,zs=304,ba=1e3,En=1001,Ta=1002,Pt=1003,dc=1004,Yi=1005,Gt=1006,Vs=1007,On=1008,Wt=1009,el=1010,tl=1011,Oi=1012,cr=1013,fn=1014,dn=1015,pn=1016,dr=1017,hr=1018,vi=1020,nl=35902,il=35899,sl=1021,al=1022,hn=1023,Hn=1026,Bn=1027,rl=1028,ur=1029,Jn=1030,fr=1031,pr=1033,Ss=33776,ys=33777,Es=33778,bs=33779,Aa=35840,wa=35841,Ra=35842,Ca=35843,Pa=36196,La=37492,Ia=37496,Da=37488,Na=37489,ws=37490,Ua=37491,Fa=37808,Oa=37809,Ba=37810,Ga=37811,ka=37812,Ha=37813,za=37814,Va=37815,Wa=37816,Xa=37817,$a=37818,qa=37819,Ya=37820,Ka=37821,Za=36492,Ja=36494,Qa=36495,ja=36283,er=36284,Rs=36285,tr=36286,hc=3200,nr=0,uc=1,Fn="",Zt="srgb",Cs="srgb-linear",Ps="linear",je="srgb",Ws=7680,fc=519,pc=512,mc=513,gc=514,ol=515,_c=516,vc=517,ll=518,cl=519,xc=35044,Hr="300 es",an=2e3,Bi=2001;function Mc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sc(){const s=Ls("canvas");return s.style.display="block",s}const zr={};function Vr(...s){const e="THREE."+s.shift();console.log(e,...s)}function dl(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Le(...s){s=dl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ze(...s){s=dl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ts(...s){const e=s.join(" ");e in zr||(zr[e]=!0,Le(...s))}function yc(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Ec={[_a]:_a,[xa]:ya,[Ma]:Ma,[Ui]:Sa,[va]:va,[ya]:xa,[Ea]:Ea,[Sa]:Ui};class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,ir=180/Math.PI;function ki(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function bc(s,e){return(s%e+e)%e}function $s(s,e,t){return(1-t)*s+t*e}function Tc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mr(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ac(s,e){if(e.constructor===Float32Array)return s;const t=mr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function wc(s,e){if(e.constructor===Float32Array)return s;const t=mr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}class ze{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let l=n[i+0],c=n[i+1],p=n[i+2],g=n[i+3],h=a[r+0],m=a[r+1],x=a[r+2],b=a[r+3];if(g!==b||l!==h||c!==m||p!==x){let f=l*h+c*m+p*x+g*b;f<0&&(h=-h,m=-m,x=-x,b=-b,f=-f);let u=1-o;if(f<.9995){const _=Math.acos(f),M=Math.sin(_);u=Math.sin(u*_)/M,o=Math.sin(o*_)/M,l=l*u+h*o,c=c*u+m*o,p=p*u+x*o,g=g*u+b*o}else{l=l*u+h*o,c=c*u+m*o,p=p*u+x*o,g=g*u+b*o;const _=1/Math.sqrt(l*l+c*c+p*p+g*g);l*=_,c*=_,p*=_,g*=_}}e[t]=l,e[t+1]=c,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],p=n[i+3],g=a[r],h=a[r+1],m=a[r+2],x=a[r+3];return e[t]=o*x+p*g+l*m-c*h,e[t+1]=l*x+p*h+c*g-o*m,e[t+2]=c*x+p*m+o*h-l*g,e[t+3]=p*x-o*g-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),p=o(i/2),g=o(a/2),h=l(n/2),m=l(i/2),x=l(a/2);switch(r){case"XYZ":this._x=h*p*g+c*m*x,this._y=c*m*g-h*p*x,this._z=c*p*x+h*m*g,this._w=c*p*g-h*m*x;break;case"YXZ":this._x=h*p*g+c*m*x,this._y=c*m*g-h*p*x,this._z=c*p*x-h*m*g,this._w=c*p*g+h*m*x;break;case"ZXY":this._x=h*p*g-c*m*x,this._y=c*m*g+h*p*x,this._z=c*p*x+h*m*g,this._w=c*p*g-h*m*x;break;case"ZYX":this._x=h*p*g-c*m*x,this._y=c*m*g+h*p*x,this._z=c*p*x-h*m*g,this._w=c*p*g+h*m*x;break;case"YZX":this._x=h*p*g+c*m*x,this._y=c*m*g+h*p*x,this._z=c*p*x-h*m*g,this._w=c*p*g-h*m*x;break;case"XZY":this._x=h*p*g-c*m*x,this._y=c*m*g-h*p*x,this._z=c*p*x+h*m*g,this._w=c*p*g+h*m*x;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],p=t[6],g=t[10],h=n+o+g;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(p-l)*m,this._y=(a-c)*m,this._z=(r-i)*m}else if(n>o&&n>g){const m=2*Math.sqrt(1+n-o-g);this._w=(p-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(a+c)/m}else if(o>g){const m=2*Math.sqrt(1+o-n-g);this._w=(a-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+p)/m}else{const m=2*Math.sqrt(1+g-n-o);this._w=(r-i)/m,this._x=(a+c)/m,this._y=(l+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,p=t._w;return this._x=n*p+r*o+i*c-a*l,this._y=i*p+r*l+a*o-n*c,this._z=a*p+r*c+n*l-i*o,this._w=r*p-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,t=Math.sin(t*c)/p,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),p=2*(o*t-a*i),g=2*(a*n-r*t);return this.x=t+l*c+r*g-o*p,this.y=n+l*p+o*c-a*g,this.z=i+l*g+a*p-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new F,Wr=new Si;class Fe{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c)}set(e,t,n,i,a,r,o,l,c){const p=this.elements;return p[0]=e,p[1]=i,p[2]=o,p[3]=t,p[4]=a,p[5]=l,p[6]=n,p[7]=r,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],p=n[4],g=n[7],h=n[2],m=n[5],x=n[8],b=i[0],f=i[3],u=i[6],_=i[1],M=i[4],E=i[7],A=i[2],T=i[5],d=i[8];return a[0]=r*b+o*_+l*A,a[3]=r*f+o*M+l*T,a[6]=r*u+o*E+l*d,a[1]=c*b+p*_+g*A,a[4]=c*f+p*M+g*T,a[7]=c*u+p*E+g*d,a[2]=h*b+m*_+x*A,a[5]=h*f+m*M+x*T,a[8]=h*u+m*E+x*d,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return t*r*p-t*o*c-n*a*p+n*o*l+i*a*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],p=e[8],g=p*r-o*c,h=o*l-p*a,m=c*a-r*l,x=t*g+n*h+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=g*b,e[1]=(i*c-p*n)*b,e[2]=(o*n-i*r)*b,e[3]=h*b,e[4]=(p*t-i*l)*b,e[5]=(i*a-o*t)*b,e[6]=m*b,e[7]=(n*l-c*t)*b,e[8]=(r*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ys.makeScale(e,t)),this}rotate(e){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ys.makeRotation(-e)),this}translate(e,t){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ys.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new Fe,Xr=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$r=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rc(){const s={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===je&&(i.r=Tn(i.r),i.g=Tn(i.g),i.b=Tn(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===je&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fn?Ps:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Cs]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:Xr,fromXYZ:$r,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:Xr,fromXYZ:$r,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),s}const $e=Rc();function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ni;class Cc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ni===void 0&&(ni=Ls("canvas")),ni.width=e.width,ni.height=e.height;const i=ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Tn(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pc=0;class gr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(Ks(i[r].image)):a.push(Ks(i[r]))}else a=Ks(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ks(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Lc=0;const Zs=new F;class Ot extends jn{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=En,i=En,a=Gt,r=On,o=hn,l=Wt,c=Ot.DEFAULT_ANISOTROPY,p=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=ki(),this.name="",this.source=new gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zs).x}get height(){return this.source.getSize(Zs).y}get depth(){return this.source.getSize(Zs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=jo;Ot.DEFAULT_ANISOTROPY=1;class ht{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],p=l[4],g=l[8],h=l[1],m=l[5],x=l[9],b=l[2],f=l[6],u=l[10];if(Math.abs(p-h)<.01&&Math.abs(g-b)<.01&&Math.abs(x-f)<.01){if(Math.abs(p+h)<.1&&Math.abs(g+b)<.1&&Math.abs(x+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(m+1)/2,A=(u+1)/2,T=(p+h)/4,d=(g+b)/4,v=(x+f)/4;return M>E&&M>A?M<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(M),i=T/n,a=d/n):E>A?E<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(E),n=T/i,a=v/i):A<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(A),n=d/a,i=v/a),this.set(n,i,a,t),this}let _=Math.sqrt((f-x)*(f-x)+(g-b)*(g-b)+(h-p)*(h-p));return Math.abs(_)<.001&&(_=1),this.x=(f-x)/_,this.y=(g-b)/_,this.z=(h-p)/_,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ic extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const i=n.count;for(let a=0;a<i;a++)this.textures[a]=new Ot({width:e,height:t,depth:n.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new gr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hl extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dc extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class at{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,a,r,o,l,c,p,g,h,m,x,b,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c,p,g,h,m,x,b,f)}set(e,t,n,i,a,r,o,l,c,p,g,h,m,x,b,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=p,u[10]=g,u[14]=h,u[3]=m,u[7]=x,u[11]=b,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ii.setFromMatrixColumn(e,0).length(),a=1/ii.setFromMatrixColumn(e,1).length(),r=1/ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const h=r*p,m=r*g,x=o*p,b=o*g;t[0]=l*p,t[4]=-l*g,t[8]=c,t[1]=m+x*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=x+m*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*p,m=l*g,x=c*p,b=c*g;t[0]=h+b*o,t[4]=x*o-m,t[8]=r*c,t[1]=r*g,t[5]=r*p,t[9]=-o,t[2]=m*o-x,t[6]=b+h*o,t[10]=r*l}else if(e.order==="ZXY"){const h=l*p,m=l*g,x=c*p,b=c*g;t[0]=h-b*o,t[4]=-r*g,t[8]=x+m*o,t[1]=m+x*o,t[5]=r*p,t[9]=b-h*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const h=r*p,m=r*g,x=o*p,b=o*g;t[0]=l*p,t[4]=x*c-m,t[8]=h*c+b,t[1]=l*g,t[5]=b*c+h,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,m=r*c,x=o*l,b=o*c;t[0]=l*p,t[4]=b-h*g,t[8]=x*g+m,t[1]=g,t[5]=r*p,t[9]=-o*p,t[2]=-c*p,t[6]=m*g+x,t[10]=h-b*g}else if(e.order==="XZY"){const h=r*l,m=r*c,x=o*l,b=o*c;t[0]=l*p,t[4]=-g,t[8]=c*p,t[1]=h*g+b,t[5]=r*p,t[9]=m*g-x,t[2]=x*g-m,t[6]=o*p,t[10]=b*g+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nc,e,Uc)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Cn.crossVectors(n,Ht),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Cn.crossVectors(n,Ht)),Cn.normalize(),Ki.crossVectors(Ht,Cn),i[0]=Cn.x,i[4]=Ki.x,i[8]=Ht.x,i[1]=Cn.y,i[5]=Ki.y,i[9]=Ht.y,i[2]=Cn.z,i[6]=Ki.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],p=n[1],g=n[5],h=n[9],m=n[13],x=n[2],b=n[6],f=n[10],u=n[14],_=n[3],M=n[7],E=n[11],A=n[15],T=i[0],d=i[4],v=i[8],L=i[12],R=i[1],P=i[5],N=i[9],z=i[13],I=i[2],H=i[6],Z=i[10],k=i[14],ne=i[3],X=i[7],j=i[11],ee=i[15];return a[0]=r*T+o*R+l*I+c*ne,a[4]=r*d+o*P+l*H+c*X,a[8]=r*v+o*N+l*Z+c*j,a[12]=r*L+o*z+l*k+c*ee,a[1]=p*T+g*R+h*I+m*ne,a[5]=p*d+g*P+h*H+m*X,a[9]=p*v+g*N+h*Z+m*j,a[13]=p*L+g*z+h*k+m*ee,a[2]=x*T+b*R+f*I+u*ne,a[6]=x*d+b*P+f*H+u*X,a[10]=x*v+b*N+f*Z+u*j,a[14]=x*L+b*z+f*k+u*ee,a[3]=_*T+M*R+E*I+A*ne,a[7]=_*d+M*P+E*H+A*X,a[11]=_*v+M*N+E*Z+A*j,a[15]=_*L+M*z+E*k+A*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],p=e[2],g=e[6],h=e[10],m=e[14],x=e[3],b=e[7],f=e[11],u=e[15],_=l*m-c*h,M=o*m-c*g,E=o*h-l*g,A=r*m-c*p,T=r*h-l*p,d=r*g-o*p;return t*(b*_-f*M+u*E)-n*(x*_-f*A+u*T)+i*(x*M-b*A+u*d)-a*(x*E-b*T+f*d)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],p=e[10];return t*(r*p-o*c)-n*(a*p-o*l)+i*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],p=e[8],g=e[9],h=e[10],m=e[11],x=e[12],b=e[13],f=e[14],u=e[15],_=t*o-n*r,M=t*l-i*r,E=t*c-a*r,A=n*l-i*o,T=n*c-a*o,d=i*c-a*l,v=p*b-g*x,L=p*f-h*x,R=p*u-m*x,P=g*f-h*b,N=g*u-m*b,z=h*u-m*f,I=_*z-M*N+E*P+A*R-T*L+d*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return e[0]=(o*z-l*N+c*P)*H,e[1]=(i*N-n*z-a*P)*H,e[2]=(b*d-f*T+u*A)*H,e[3]=(h*T-g*d-m*A)*H,e[4]=(l*R-r*z-c*L)*H,e[5]=(t*z-i*R+a*L)*H,e[6]=(f*E-x*d-u*M)*H,e[7]=(p*d-h*E+m*M)*H,e[8]=(r*N-o*R+c*v)*H,e[9]=(n*R-t*N-a*v)*H,e[10]=(x*T-b*E+u*_)*H,e[11]=(g*E-p*T-m*_)*H,e[12]=(o*L-r*P-l*v)*H,e[13]=(t*P-n*L+i*v)*H,e[14]=(b*M-x*A-f*_)*H,e[15]=(p*A-g*M+h*_)*H,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,p=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,p*o+n,p*l-i*r,0,c*l-i*o,p*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,p=r+r,g=o+o,h=a*c,m=a*p,x=a*g,b=r*p,f=r*g,u=o*g,_=l*c,M=l*p,E=l*g,A=n.x,T=n.y,d=n.z;return i[0]=(1-(b+u))*A,i[1]=(m+E)*A,i[2]=(x-M)*A,i[3]=0,i[4]=(m-E)*T,i[5]=(1-(h+u))*T,i[6]=(f+_)*T,i[7]=0,i[8]=(x+M)*d,i[9]=(f-_)*d,i[10]=(1-(h+b))*d,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=ii.set(i[0],i[1],i[2]).length();const o=ii.set(i[4],i[5],i[6]).length(),l=ii.set(i[8],i[9],i[10]).length();a<0&&(r=-r),jt.copy(this);const c=1/r,p=1/o,g=1/l;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=p,jt.elements[5]*=p,jt.elements[6]*=p,jt.elements[8]*=g,jt.elements[9]*=g,jt.elements[10]*=g,t.setFromRotationMatrix(jt),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,a,r,o=an,l=!1){const c=this.elements,p=2*a/(t-e),g=2*a/(n-i),h=(t+e)/(t-e),m=(n+i)/(n-i);let x,b;if(l)x=a/(r-a),b=r*a/(r-a);else if(o===an)x=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===Bi)x=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=g,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=an,l=!1){const c=this.elements,p=2/(t-e),g=2/(n-i),h=-(t+e)/(t-e),m=-(n+i)/(n-i);let x,b;if(l)x=1/(r-a),b=r/(r-a);else if(o===an)x=-2/(r-a),b=-(r+a)/(r-a);else if(o===Bi)x=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=g,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ii=new F,jt=new at,Nc=new F(0,0,0),Uc=new F(1,1,1),Cn=new F,Ki=new F,Ht=new F,qr=new at,Yr=new Si;class zn{constructor(e=0,t=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],p=i[9],g=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-qe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-p,m),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yr.setFromEuler(this),this.setFromQuaternion(Yr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fc=0;const Kr=new F,si=new Si,gn=new at,Zi=new F,bi=new F,Oc=new F,Bc=new Si,Zr=new F(1,0,0),Jr=new F(0,1,0),Qr=new F(0,0,1),jr={type:"added"},Gc={type:"removed"},ai={type:"childadded",child:null},Js={type:"childremoved",child:null};class bt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new F,t=new zn,n=new Si,i=new F(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Fe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(Zr,e)}rotateY(e){return this.rotateOnAxis(Jr,e)}rotateZ(e){return this.rotateOnAxis(Qr,e)}translateOnAxis(e,t){return Kr.copy(e).applyQuaternion(this.quaternion),this.position.add(Kr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zr,e)}translateY(e){return this.translateOnAxis(Jr,e)}translateZ(e){return this.translateOnAxis(Qr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zi.copy(e):Zi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(bi,Zi,this.up):gn.lookAt(Zi,bi,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(gn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jr),ai.child=e,this.dispatchEvent(ai),ai.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gc),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jr),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,Oc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Bc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*i,a[13]+=n-a[1]*t-a[5]*n-a[9]*i,a[14]+=i-a[2]*t-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const g=l[c];a(e.shapes,g)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),p=r(e.images),g=r(e.shapes),h=r(e.skeletons),m=r(e.animations),x=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function r(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bt.DEFAULT_UP=new F(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dt extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kc={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const b of e.hand.values()){const f=t.getJointPose(b,n),u=this._getHandJoint(c,b);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const p=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],h=p.position.distanceTo(g.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kc)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function js(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=bc(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=js(r,a,e+1/3),this.g=js(r,a,e),this.b=js(r,a,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=Zt){function n(a){a!==void 0&&parseFloat(a)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=fl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return $e.workingToColorSpace(Nt.copy(this),e),Math.round(qe(Nt.r*255,0,255))*65536+Math.round(qe(Nt.g*255,0,255))*256+Math.round(qe(Nt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,a=Nt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const p=(o+r)/2;if(o===r)l=0,c=0;else{const g=r-o;switch(c=p<=.5?g/(r+o):g/(2-r-o),r){case n:l=(i-a)/g+(i<a?6:0);break;case i:l=(a-n)/g+2;break;case a:l=(n-i)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Zt){$e.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Ji);const n=$s(Pn.h,Ji.h,t),i=$s(Pn.s,Ji.s,t),a=$s(Pn.l,Ji.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new ke;ke.NAMES=fl;class _r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new _r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hc extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const en=new F,_n=new F,ea=new F,vn=new F,ri=new F,oi=new F,eo=new F,ta=new F,na=new F,ia=new F,sa=new ht,aa=new ht,ra=new ht;class sn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),en.subVectors(e,t),i.cross(en);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){en.subVectors(i,t),_n.subVectors(n,t),ea.subVectors(e,t);const r=en.dot(en),o=en.dot(_n),l=en.dot(ea),c=_n.dot(_n),p=_n.dot(ea),g=r*c-o*o;if(g===0)return a.set(0,0,0),null;const h=1/g,m=(c*l-o*p)*h,x=(r*p-o*l)*h;return a.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,i,a,r,o,l){return this.getBarycoord(e,t,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,vn.x),l.addScaledVector(r,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(e,t,n,i,a,r){return sa.setScalar(0),aa.setScalar(0),ra.setScalar(0),sa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),ra.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(sa,a.x),r.addScaledVector(aa,a.y),r.addScaledVector(ra,a.z),r}static isFrontFacing(e,t,n,i){return en.subVectors(n,t),_n.subVectors(e,t),en.cross(_n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),en.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;ri.subVectors(i,n),oi.subVectors(a,n),ta.subVectors(e,n);const l=ri.dot(ta),c=oi.dot(ta);if(l<=0&&c<=0)return t.copy(n);na.subVectors(e,i);const p=ri.dot(na),g=oi.dot(na);if(p>=0&&g<=p)return t.copy(i);const h=l*g-p*c;if(h<=0&&l>=0&&p<=0&&l-p>0)return r=l/(l-p),t.copy(n).addScaledVector(ri,r);ia.subVectors(e,a);const m=ri.dot(ia),x=oi.dot(ia);if(x>=0&&m<=x)return t.copy(a);const b=m*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(oi,o);const f=p*x-m*g;if(f<=0&&g-p>=0&&m-x>=0)return eo.subVectors(a,i),o=(g-p)/(g-p+(m-x)),t.copy(i).addScaledVector(eo,o);const u=1/(f+b+h);return r=b*u,o=h*u,t.copy(n).addScaledVector(ri,r).addScaledVector(oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,tn):tn.fromBufferAttribute(a,r),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),ji.subVectors(this.max,Ti),li.subVectors(e.a,Ti),ci.subVectors(e.b,Ti),di.subVectors(e.c,Ti),Ln.subVectors(ci,li),In.subVectors(di,ci),$n.subVectors(li,di);let t=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-$n.z,$n.y,Ln.z,0,-Ln.x,In.z,0,-In.x,$n.z,0,-$n.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-$n.y,$n.x,0];return!oa(t,li,ci,di,ji)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,li,ci,di,ji))?!1:(es.crossVectors(Ln,In),t=[es.x,es.y,es.z],oa(t,li,ci,di,ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xn=[new F,new F,new F,new F,new F,new F,new F,new F],tn=new F,Qi=new Hi,li=new F,ci=new F,di=new F,Ln=new F,In=new F,$n=new F,Ti=new F,ji=new F,es=new F,qn=new F;function oa(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){qn.fromArray(s,a);const o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),p=n.dot(qn);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const pt=new F,ts=new ze;let zc=0;class An extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=dn,this.version=0,this._normalizationScale=e!==void 0?mr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ac(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):wc(e,this.array)}}class pl extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ml extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Vc=new Hi,Ai=new F,la=new F;class zi{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vc.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(la)),this.expandByPoint(Ai.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Wc=0;const Kt=new at,ca=new bt,hi=new F,zt=new Hi,wi=new Hi,yt=new F;class Tt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mc(e)?ml:pl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Fe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return ca.lookAt(e),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new et(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];zt.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(zt.min,wi.min),zt.expandByPoint(yt),yt.addVectors(zt.max,wi.max),zt.expandByPoint(yt)):(zt.expandByPoint(wi.min),zt.expandByPoint(wi.max))}zt.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)yt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)yt.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),yt.add(hi)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new F,l[L]=new F;const p=new F,g=new F,h=new F,m=new ze,x=new ze,b=new ze,f=new F,u=new F;function _(L,R,P){c[L]=c[R]=c[P]=1,p.fromBufferAttribute(n,L),g.fromBufferAttribute(n,R),h.fromBufferAttribute(n,P),m.fromBufferAttribute(a,L),x.fromBufferAttribute(a,R),b.fromBufferAttribute(a,P),g.sub(p),h.sub(p),x.sub(m),b.sub(m);const N=1/(x.x*b.y-b.x*x.y);isFinite(N)&&(f.copy(g).multiplyScalar(b.y).addScaledVector(h,-x.y).multiplyScalar(N),u.copy(h).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(N),o[L].add(f),o[R].add(f),o[P].add(f),l[L].add(u),l[R].add(u),l[P].add(u))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,R=M.length;L<R;++L){const P=M[L],N=P.start,z=P.count;for(let I=N,H=N+z;I<H;I+=3)_(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const E=new F,A=new F,T=new F,d=new F;function v(L){T.fromBufferAttribute(i,L),d.copy(T);const R=o[L];E.copy(R),E.sub(T.multiplyScalar(T.dot(R))).normalize(),A.crossVectors(d,R);const N=A.dot(l[L])<0?-1:1;r.setXYZW(L,E.x,E.y,E.z,N)}for(let L=0,R=n.count;L<R;++L)c[L]&&v(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new F,a=new F,r=new F,o=new F,l=new F,c=new F,p=new F,g=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),b=e.getX(h+1),f=e.getX(h+2);i.fromBufferAttribute(t,x),a.fromBufferAttribute(t,b),r.fromBufferAttribute(t,f),p.subVectors(r,a),g.subVectors(i,a),p.cross(g),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,f),o.add(p),l.add(p),c.add(p),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),p.subVectors(r,a),g.subVectors(i,a),p.cross(g),n.setXYZ(h+0,p.x,p.y,p.z),n.setXYZ(h+1,p.x,p.y,p.z),n.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,g=o.normalized,h=new c.constructor(l.length*p);let m=0,x=0;for(let b=0,f=l.length;b<f;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*p;for(let u=0;u<p;u++)h[x++]=c[m++]}return new An(h,p,g)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let p=0,g=c.length;p<g;p++){const h=c[p],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let g=0,h=c.length;g<h;g++){const m=c[g];p.push(m.toJSON(e.data))}p.length>0&&(i[l]=p,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const p=i[c];this.setAttribute(c,p.clone(t))}const a=e.morphAttributes;for(const c in a){const p=[],g=a[c];for(let h=0,m=g.length;h<m;h++)p.push(g[h].clone(t));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,p=r.length;c<p;c++){const g=r[c];this.addGroup(g.start,g.count,g.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const da=new F,Xc=new F,$c=new Fe;class Nn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=da.subVectors(n,t).cross(Xc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(da),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$c.getNormalMatrix(e),i=this.coplanarPoint(da).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qc=0;class ei extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Ii,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Wo,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mn=new F,ha=new F,ns=new F,is=new F;class vr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ha.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),is.copy(this.origin).sub(ha);const a=e.distanceTo(t)*.5,r=-this.direction.dot(ns),o=is.dot(this.direction),l=-is.dot(ns),c=is.lengthSq(),p=Math.abs(1-r*r);let g,h,m,x;if(p>0)if(g=r*l-o,h=r*o-l,x=a*p,g>=0)if(h>=-x)if(h<=x){const b=1/p;g*=b,h*=b,m=g*(g+r*h+2*o)+h*(r*g+h+2*l)+c}else h=a,g=Math.max(0,-(r*h+o)),m=-g*g+h*(h+2*l)+c;else h=-a,g=Math.max(0,-(r*h+o)),m=-g*g+h*(h+2*l)+c;else h<=-x?(g=Math.max(0,-(-r*a+o)),h=g>0?-a:Math.min(Math.max(-a,-l),a),m=-g*g+h*(h+2*l)+c):h<=x?(g=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(g=Math.max(0,-(r*a+o)),h=g>0?a:Math.min(Math.max(-a,-l),a),m=-g*g+h*(h+2*l)+c);else h=r>0?-a:a,g=Math.max(0,-(r*h+o)),m=-g*g+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),i&&i.copy(ha).addScaledVector(ns,h),m}intersectSphere(e,t){if(e.radius<0)return null;Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,l;const c=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),p>=0?(a=(e.min.y-h.y)*p,r=(e.max.y-h.y)*p):(a=(e.max.y-h.y)*p,r=(e.min.y-h.y)*p),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),g>=0?(o=(e.min.z-h.z)*g,l=(e.max.z-h.z)*g):(o=(e.max.z-h.z)*g,l=(e.min.z-h.z)*g),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,i,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,p=o.z,g=e.x-r.x,h=e.y-r.y,m=e.z-r.z,x=t.x-r.x,b=t.y-r.y,f=t.z-r.z,u=n.x-r.x,_=n.y-r.y,M=n.z-r.z,E=Math.abs(l),A=Math.abs(c),T=Math.abs(p);let d,v,L,R,P,N,z,I,H,Z,k,ne;if(E>=A&&E>=T?(L=l,N=g,H=x,ne=u,l>=0?(d=c,v=p,R=h,P=m,z=b,I=f,Z=_,k=M):(d=p,v=c,R=m,P=h,z=f,I=b,Z=M,k=_)):A>=T?(L=c,N=h,H=b,ne=_,c>=0?(d=p,v=l,R=m,P=g,z=f,I=x,Z=M,k=u):(d=l,v=p,R=g,P=m,z=x,I=f,Z=u,k=M)):(L=p,N=m,H=f,ne=M,p>=0?(d=l,v=c,R=g,P=h,z=x,I=b,Z=u,k=_):(d=c,v=l,R=h,P=g,z=b,I=x,Z=_,k=u)),L===0)return null;const X=d/L,j=v/L,ee=1/L,be=R-X*N,De=P-j*N,Y=z-X*H,ge=I-j*H,Se=Z-X*ne,Re=k-j*ne,_e=Se*ge-Re*Y,Ue=be*Re-De*Se,ut=Y*De-ge*be;if(i){if(_e<0||Ue<0||ut<0)return null}else if((_e<0||Ue<0||ut<0)&&(_e>0||Ue>0||ut>0))return null;const Pe=_e+Ue+ut;if(Pe===0)return null;const Je=ee*(_e*N+Ue*H+ut*ne);return(Pe>0?Je<0:Je>0)?null:this.at(Je/Pe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const to=new at,Yn=new vr,ss=new zi,no=new F,as=new F,rs=new F,os=new F,ua=new F,ls=new F,io=new F,cs=new F;class ae extends bt{constructor(e=new Tt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){ls.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const p=o[l],g=a[l];p!==0&&(ua.fromBufferAttribute(g,e),r?ls.addScaledVector(ua,p):ls.addScaledVector(ua.sub(t),p))}t.add(ls)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(a),Yn.copy(e.ray).recast(e.near),!(ss.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(ss,no)===null||Yn.origin.distanceToSquared(no)>(e.far-e.near)**2))&&(to.copy(a).invert(),Yn.copy(e.ray).applyMatrix4(to),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,h=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,b=h.length;x<b;x++){const f=h[x],u=r[f.materialIndex],_=Math.max(f.start,m.start),M=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let E=_,A=M;E<A;E+=3){const T=o.getX(E),d=o.getX(E+1),v=o.getX(E+2);i=ds(this,u,e,n,c,p,g,T,d,v),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const x=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let f=x,u=b;f<u;f+=3){const _=o.getX(f),M=o.getX(f+1),E=o.getX(f+2);i=ds(this,r,e,n,c,p,g,_,M,E),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,b=h.length;x<b;x++){const f=h[x],u=r[f.materialIndex],_=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let E=_,A=M;E<A;E+=3){const T=E,d=E+1,v=E+2;i=ds(this,u,e,n,c,p,g,T,d,v),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const x=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let f=x,u=b;f<u;f+=3){const _=f,M=f+1,E=f+2;i=ds(this,r,e,n,c,p,g,_,M,E),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Yc(s,e,t,n,i,a,r,o){let l;if(e.side===kt?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,e.side===Zn,o),l===null)return null;cs.copy(o),cs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(cs);return c<t.near||c>t.far?null:{distance:c,point:cs.clone(),object:s}}function ds(s,e,t,n,i,a,r,o,l,c){s.getVertexPosition(o,as),s.getVertexPosition(l,rs),s.getVertexPosition(c,os);const p=Yc(s,e,t,n,as,rs,os,io);if(p){const g=new F;sn.getBarycoord(io,as,rs,os,g),i&&(p.uv=sn.getInterpolatedAttribute(i,o,l,c,g,new ze)),a&&(p.uv1=sn.getInterpolatedAttribute(a,o,l,c,g,new ze)),r&&(p.normal=sn.getInterpolatedAttribute(r,o,l,c,g,new F),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};sn.getNormal(as,rs,os,h.normal),p.face=h,p.barycoord=g}return p}class Kc extends Ot{constructor(e=null,t=1,n=1,i,a,r,o,l,c=Pt,p=Pt,g,h){super(null,r,o,l,c,p,i,a,g,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kn=new zi,Zc=new ze(.5,.5),hs=new F;class Gi{constructor(e=new Nn,t=new Nn,n=new Nn,i=new Nn,a=new Nn,r=new Nn){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){const i=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],p=a[4],g=a[5],h=a[6],m=a[7],x=a[8],b=a[9],f=a[10],u=a[11],_=a[12],M=a[13],E=a[14],A=a[15];if(i[0].setComponents(c-r,m-p,u-x,A-_).normalize(),i[1].setComponents(c+r,m+p,u+x,A+_).normalize(),i[2].setComponents(c+o,m+g,u+b,A+M).normalize(),i[3].setComponents(c-o,m-g,u-b,A-M).normalize(),n)i[4].setComponents(l,h,f,E).normalize(),i[5].setComponents(c-l,m-h,u-f,A-E).normalize();else if(i[4].setComponents(c-l,m-h,u-f,A-E).normalize(),t===an)i[5].setComponents(c+l,m+h,u+f,A+E).normalize();else if(t===Bi)i[5].setComponents(l,h,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){Kn.center.set(0,0,0);const t=Zc.distanceTo(e.center);return Kn.radius=.7071067811865476+t,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hs.x=i.normal.x>0?e.max.x:e.min.x,hs.y=i.normal.y>0?e.max.y:e.min.y,hs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const so=new at;class xr{constructor(){this.coordinateSystem=an,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const a=t[i];so.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),n[i]===void 0&&(n[i]=new Gi),n[i].setFromProjectionMatrix(so,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Gi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new xr().copy(this)}}class Mr extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Is=new F,Ds=new F,ao=new at,Ri=new vr,us=new zi,fa=new F,ro=new F;class gl extends bt{constructor(e=new Tt,t=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)Is.fromBufferAttribute(t,i-1),Ds.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Is.distanceTo(Ds);e.setAttribute("lineDistance",new et(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(i),us.radius+=a,e.ray.intersectsSphere(us)===!1)return;ao.copy(i).invert(),Ri.copy(e.ray).applyMatrix4(ao);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,p=n.index,h=n.attributes.position;if(p!==null){const m=Math.max(0,r.start),x=Math.min(p.count,r.start+r.count);for(let b=m,f=x-1;b<f;b+=c){const u=p.getX(b),_=p.getX(b+1),M=fs(this,e,Ri,l,u,_,b);M&&t.push(M)}if(this.isLineLoop){const b=p.getX(x-1),f=p.getX(m),u=fs(this,e,Ri,l,b,f,x-1);u&&t.push(u)}}else{const m=Math.max(0,r.start),x=Math.min(h.count,r.start+r.count);for(let b=m,f=x-1;b<f;b+=c){const u=fs(this,e,Ri,l,b,b+1,b);u&&t.push(u)}if(this.isLineLoop){const b=fs(this,e,Ri,l,x-1,m,x-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function fs(s,e,t,n,i,a,r){const o=s.geometry.attributes.position;if(Is.fromBufferAttribute(o,i),Ds.fromBufferAttribute(o,a),t.distanceSqToSegment(Is,Ds,fa,ro)>n)return;fa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(fa);if(!(c<e.near||c>e.far))return{distance:c,point:ro.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const oo=new F,lo=new F;class Jc extends gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)oo.fromBufferAttribute(t,i),lo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+oo.distanceTo(lo);e.setAttribute("lineDistance",new et(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sr extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const co=new at,ar=new vr,ps=new zi,ms=new F;class ho extends bt{constructor(e=new Tt,t=new sr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(i),ps.radius+=a,e.ray.intersectsSphere(ps)===!1)return;co.copy(i).invert(),ar.copy(e.ray).applyMatrix4(co);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,g=n.attributes.position;if(c!==null){const h=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let x=h,b=m;x<b;x++){const f=c.getX(x);ms.fromBufferAttribute(g,f),uo(ms,f,l,i,e,t,this)}}else{const h=Math.max(0,r.start),m=Math.min(g.count,r.start+r.count);for(let x=h,b=m;x<b;x++)ms.fromBufferAttribute(g,x),uo(ms,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function uo(s,e,t,n,i,a,r){const o=ar.distanceSqToPoint(s);if(o<t){const l=new F;ar.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class _l extends Ot{constructor(e=[],t=_i,n,i,a,r,o,l,c,p){super(e,t,n,i,a,r,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xi extends Ot{constructor(e,t,n=fn,i,a,r,o=Pt,l=Pt,c,p=Hn,g=1){if(p!==Hn&&p!==Bn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:g};super(h,i,a,r,o,l,p,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class vl extends xi{constructor(e,t=fn,n=_i,i,a,r=Pt,o=Pt,l,c=Hn){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,n,i,a,r,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xl extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class st extends Tt{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],p=[],g=[];let h=0,m=0;x("z","y","x",-1,-1,n,t,e,r,a,0),x("z","y","x",1,-1,n,t,-e,r,a,1),x("x","z","y",1,1,e,n,t,i,r,2),x("x","z","y",1,-1,e,n,-t,i,r,3),x("x","y","z",1,-1,e,t,n,i,a,4),x("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(p,3)),this.setAttribute("uv",new et(g,2));function x(b,f,u,_,M,E,A,T,d,v,L){const R=E/d,P=A/v,N=E/2,z=A/2,I=T/2,H=d+1,Z=v+1;let k=0,ne=0;const X=new F;for(let j=0;j<Z;j++){const ee=j*P-z;for(let be=0;be<H;be++){const De=be*R-N;X[b]=De*_,X[f]=ee*M,X[u]=I,c.push(X.x,X.y,X.z),X[b]=0,X[f]=0,X[u]=T>0?1:-1,p.push(X.x,X.y,X.z),g.push(be/d),g.push(1-j/v),k+=1}}for(let j=0;j<v;j++)for(let ee=0;ee<d;ee++){const be=h+ee+H*j,De=h+ee+H*(j+1),Y=h+(ee+1)+H*(j+1),ge=h+(ee+1)+H*j;l.push(be,De,ge),l.push(De,Y,ge),ne+=6}o.addGroup(m,ne,L),m+=ne,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rt extends Tt{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const p=[],g=[],h=[],m=[];let x=0;const b=[],f=n/2;let u=0;_(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(m,2));function _(){const E=new F,A=new F;let T=0;const d=(t-e)/n;for(let v=0;v<=a;v++){const L=[],R=v/a,P=R*(t-e)+e;for(let N=0;N<=i;N++){const z=N/i,I=z*l+o,H=Math.sin(I),Z=Math.cos(I);A.x=P*H,A.y=-R*n+f,A.z=P*Z,g.push(A.x,A.y,A.z),E.set(H,d,Z).normalize(),h.push(E.x,E.y,E.z),m.push(z,1-R),L.push(x++)}b.push(L)}for(let v=0;v<i;v++)for(let L=0;L<a;L++){const R=b[L][v],P=b[L+1][v],N=b[L+1][v+1],z=b[L][v+1];(e>0||L!==0)&&(p.push(R,P,z),T+=3),(t>0||L!==a-1)&&(p.push(P,N,z),T+=3)}c.addGroup(u,T,0),u+=T}function M(E){const A=x,T=new ze,d=new F;let v=0;const L=E===!0?e:t,R=E===!0?1:-1;for(let N=1;N<=i;N++)g.push(0,f*R,0),h.push(0,R,0),m.push(.5,.5),x++;const P=x;for(let N=0;N<=i;N++){const I=N/i*l+o,H=Math.cos(I),Z=Math.sin(I);d.x=L*Z,d.y=f*R,d.z=L*H,g.push(d.x,d.y,d.z),h.push(0,R,0),T.x=H*.5+.5,T.y=Z*.5*R+.5,m.push(T.x,T.y),x++}for(let N=0;N<i;N++){const z=A+N,I=P+N;E===!0?p.push(I,I+1,z):p.push(I+1,I,z),v+=3}c.addGroup(u,v,E===!0?1:2),u+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yn extends Rt{constructor(e=1,t=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new yn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vi extends Tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const a=[],r=[];o(i),c(n),p(),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(a.slice(),3)),this.setAttribute("uv",new et(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const M=new F,E=new F,A=new F;for(let T=0;T<t.length;T+=3)m(t[T+0],M),m(t[T+1],E),m(t[T+2],A),l(M,E,A,_)}function l(_,M,E,A){const T=A+1,d=[];for(let v=0;v<=T;v++){d[v]=[];const L=_.clone().lerp(E,v/T),R=M.clone().lerp(E,v/T),P=T-v;for(let N=0;N<=P;N++)N===0&&v===T?d[v][N]=L:d[v][N]=L.clone().lerp(R,N/P)}for(let v=0;v<T;v++)for(let L=0;L<2*(T-v)-1;L++){const R=Math.floor(L/2);L%2===0?(h(d[v][R+1]),h(d[v+1][R]),h(d[v][R])):(h(d[v][R+1]),h(d[v+1][R+1]),h(d[v+1][R]))}}function c(_){const M=new F;for(let E=0;E<a.length;E+=3)M.x=a[E+0],M.y=a[E+1],M.z=a[E+2],M.normalize().multiplyScalar(_),a[E+0]=M.x,a[E+1]=M.y,a[E+2]=M.z}function p(){const _=new F;for(let M=0;M<a.length;M+=3){_.x=a[M+0],_.y=a[M+1],_.z=a[M+2];const E=f(_)/2/Math.PI+.5,A=u(_)/Math.PI+.5;r.push(E,1-A)}x(),g()}function g(){for(let _=0;_<r.length;_+=6){const M=r[_+0],E=r[_+2],A=r[_+4],T=Math.max(M,E,A),d=Math.min(M,E,A);T>.9&&d<.1&&(M<.2&&(r[_+0]+=1),E<.2&&(r[_+2]+=1),A<.2&&(r[_+4]+=1))}}function h(_){a.push(_.x,_.y,_.z)}function m(_,M){const E=_*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function x(){const _=new F,M=new F,E=new F,A=new F,T=new ze,d=new ze,v=new ze;for(let L=0,R=0;L<a.length;L+=9,R+=6){_.set(a[L+0],a[L+1],a[L+2]),M.set(a[L+3],a[L+4],a[L+5]),E.set(a[L+6],a[L+7],a[L+8]),T.set(r[R+0],r[R+1]),d.set(r[R+2],r[R+3]),v.set(r[R+4],r[R+5]),A.copy(_).add(M).add(E).divideScalar(3);const P=f(A);b(T,R+0,_,P),b(d,R+2,M,P),b(v,R+4,E,P)}}function b(_,M,E,A){A<0&&_.x===1&&(r[M]=_.x-1),E.x===0&&E.z===0&&(r[M]=A/2/Math.PI+.5)}function f(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.vertices,e.indices,e.radius,e.detail)}}class Di extends Vi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Di(e.radius,e.detail)}}class Sr extends Vi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sr(e.radius,e.detail)}}class Un extends Vi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Un(e.radius,e.detail)}}class Wi extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,p=l+1,g=e/o,h=t/l,m=[],x=[],b=[],f=[];for(let u=0;u<p;u++){const _=u*h-r;for(let M=0;M<c;M++){const E=M*g-a;x.push(E,-_,0),b.push(0,0,1),f.push(M/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const M=_+c*u,E=_+c*(u+1),A=_+1+c*(u+1),T=_+1+c*u;m.push(M,E,T),m.push(E,A,T)}this.setIndex(m),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(b,3)),this.setAttribute("uv",new et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ni extends Tt{constructor(e=.5,t=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],p=[];let g=e;const h=(t-e)/i,m=new F,x=new ze;for(let b=0;b<=i;b++){for(let f=0;f<=n;f++){const u=a+f/n*r;m.x=g*Math.cos(u),m.y=g*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,p.push(x.x,x.y)}g+=h}for(let b=0;b<i;b++){const f=b*(n+1);for(let u=0;u<n;u++){const _=u+f,M=_,E=_+n+1,A=_+n+2,T=_+1;o.push(M,E,T),o.push(E,A,T)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class yr extends Tt{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const p=[],g=new F,h=new F,m=[],x=[],b=[],f=[];for(let u=0;u<=n;u++){const _=[],M=u/n,E=r+M*o,A=e*Math.cos(E),T=Math.sqrt(e*e-A*A);let d=0;u===0&&r===0?d=.5/t:u===n&&l===Math.PI&&(d=-.5/t);for(let v=0;v<=t;v++){const L=v/t,R=i+L*a;g.x=-T*Math.cos(R),g.y=A,g.z=T*Math.sin(R),x.push(g.x,g.y,g.z),h.copy(g).normalize(),b.push(h.x,h.y,h.z),f.push(L+d,1-M),_.push(c++)}p.push(_)}for(let u=0;u<n;u++)for(let _=0;_<t;_++){const M=p[u][_+1],E=p[u][_],A=p[u+1][_],T=p[u+1][_+1];(u!==0||r>0)&&m.push(M,E,T),(u!==n-1||l<Math.PI)&&m.push(E,A,T)}this.setIndex(m),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(b,3)),this.setAttribute("uv",new et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nn extends Tt{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],p=[],g=[],h=new F,m=new F,x=new F;for(let b=0;b<=n;b++){const f=r+b/n*o;for(let u=0;u<=i;u++){const _=u/i*a;m.x=(e+t*Math.cos(f))*Math.cos(_),m.y=(e+t*Math.cos(f))*Math.sin(_),m.z=t*Math.sin(f),c.push(m.x,m.y,m.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),x.subVectors(m,h).normalize(),p.push(x.x,x.y,x.z),g.push(u/i),g.push(b/n)}}for(let b=1;b<=n;b++)for(let f=1;f<=i;f++){const u=(i+1)*b+f-1,_=(i+1)*(b-1)+f-1,M=(i+1)*(b-1)+f,E=(i+1)*b+f;l.push(u,_,E),l.push(_,M,E)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(p,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Mi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(fo(i))i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(fo(i[0])){const a=[];for(let r=0,o=i.length;r<o;r++)a[r]=i[r].clone();e[t][n]=a}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Ft(s){const e={};for(let t=0;t<s.length;t++){const n=Mi(s[t]);for(const i in n)e[i]=n[i]}return e}function fo(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Qc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ml(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const jc={clone:Mi,merge:Ft};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=Qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(i.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new at().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nd extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sn extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class id extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sd extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Er extends bt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const pa=new at,po=new F,mo=new F;class Sl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;po.setFromMatrixPosition(e.matrixWorld),t.position.copy(po),mo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pa,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=i?i.z/a.x:1,o=i?i.w/a.y:1,l=i?i.x/a.x:0,c=i?i.y/a.y:0;e.coordinateSystem===Bi||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gs=new F,_s=new Si,on=new F;class yl extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gs,_s,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gs,_s,on.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(gs,_s,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gs,_s,on.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new F,go=new ze,_o=new ze;class Jt extends yl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,go,_o),t.subVectors(_o,go)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ad extends Sl{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}}class rd extends Er{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ad}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class El extends yl{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class od extends Sl{constructor(){super(new El(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vo extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new od}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ld extends Er{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ui=-90,fi=1;class rr extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jt(ui,fi,e,t);i.layers=this.layers,this.add(i);const a=new Jt(ui,fi,e,t);a.layers=this.layers,this.add(a);const r=new Jt(ui,fi,e,t);r.layers=this.layers,this.add(r);const o=new Jt(ui,fi,e,t);o.layers=this.layers,this.add(o);const l=new Jt(ui,fi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(ui,fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,p]=this.children,g=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,h,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class cd extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class xo extends Jc{constructor(e=10,t=10,n=4473924,i=8947848){n=new ke(n),i=new ke(i);const a=t/2,r=e/t,o=e/2,l=[],c=[];for(let h=0,m=0,x=-o;h<=t;h++,x+=r){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const b=h===a?n:i;b.toArray(c,m),m+=3,b.toArray(c,m),m+=3,b.toArray(c,m),m+=3,b.toArray(c,m),m+=3}const p=new Tt;p.setAttribute("position",new et(l,3)),p.setAttribute("color",new et(c,3));const g=new Mr({vertexColors:!0,toneMapped:!1});super(p,g),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Mo(s,e,t,n){const i=dd(n);switch(t){case sl:return s*e;case rl:return s*e/i.components*i.byteLength;case ur:return s*e/i.components*i.byteLength;case Jn:return s*e*2/i.components*i.byteLength;case fr:return s*e*2/i.components*i.byteLength;case al:return s*e*3/i.components*i.byteLength;case hn:return s*e*4/i.components*i.byteLength;case pr:return s*e*4/i.components*i.byteLength;case Ss:case ys:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Es:case bs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ca:return Math.max(s,16)*Math.max(e,8)/4;case Aa:case Ra:return Math.max(s,8)*Math.max(e,8)/2;case Pa:case La:case Da:case Na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ia:case ws:case Ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ka:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case za:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $a:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Za:case Ja:case Qa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ja:case er:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Rs:case tr:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dd(s){switch(s){case Wt:case el:return{byteLength:1,components:1};case Oi:case tl:case pn:return{byteLength:2,components:1};case dr:case hr:return{byteLength:2,components:4};case fn:case cr:case dn:return{byteLength:4,components:1};case nl:case il:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lr}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lr);function bl(){let s=null,e=!1,t=null,n=null;function i(a,r){n=s.requestAnimationFrame(i),t(a,r)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function hd(s){const e=new WeakMap;function t(o,l){const c=o.array,p=o.usage,g=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,p),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,l,c){const p=l.array,g=l.updateRanges;if(s.bindBuffer(c,o),g.length===0)s.bufferSubData(c,0,p);else{g.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<g.length;m++){const x=g[h],b=g[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++h,g[h]=b)}g.length=h+1;for(let m=0,x=g.length;m<x;m++){const b=g[m];s.bufferSubData(c,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
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
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
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
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Td=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ud=`#define PI 3.141592653589793
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
} // validated`,Fd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
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
}`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ih=`#ifdef USE_ENVMAP
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
#endif`,sh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lh=`PhysicalMaterial material;
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
#endif`,ch=`uniform sampler2D dfgLUT;
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
}`,dh=`
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
#endif`,hh=`#if defined( RE_IndirectDiffuse )
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
#endif`,uh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fh=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ph=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_h=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sh=`#if defined( USE_POINTS_UV )
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
#endif`,yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Th=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ah=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wh=`#ifdef USE_MORPHTARGETS
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
#endif`,Rh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ch=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ph=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ih=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nh=`#ifdef USE_NORMALMAP
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
#endif`,Uh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Oh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$h=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zh=`float getShadowMask() {
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
}`,Jh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qh=`#ifdef USE_SKINNING
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
#endif`,jh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eu=`#ifdef USE_SKINNING
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
#endif`,tu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,su=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,au=`#ifdef USE_TRANSMISSION
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
#endif`,ru=`#ifdef USE_TRANSMISSION
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
#endif`,ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,du=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uu=`uniform sampler2D t2D;
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
}`,fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pu=`uniform float backgroundBlurriness;
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
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_u=`#include <common>
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
}`,vu=`#if DEPTH_PACKING == 3200
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
}`,xu=`#define DISTANCE
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
}`,Mu=`#define DISTANCE
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
}`,Su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`uniform float scale;
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
}`,bu=`uniform vec3 diffuse;
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
}`,Tu=`#include <common>
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
}`,Au=`uniform vec3 diffuse;
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
}`,wu=`#define LAMBERT
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
}`,Ru=`#define LAMBERT
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
}`,Cu=`#define MATCAP
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
}`,Pu=`#define MATCAP
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
}`,Lu=`#define NORMAL
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
}`,Iu=`#define NORMAL
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
}`,Du=`#define PHONG
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
}`,Nu=`#define PHONG
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
}`,Uu=`#define STANDARD
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
}`,Fu=`#define STANDARD
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
}`,Ou=`#define TOON
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
}`,Bu=`#define TOON
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
}`,Gu=`uniform float size;
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
}`,ku=`uniform vec3 diffuse;
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
}`,Hu=`#include <common>
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
}`,zu=`uniform vec3 color;
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
}`,Vu=`uniform float rotation;
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
}`,Wu=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:ud,alphahash_pars_fragment:fd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:_d,aomap_fragment:vd,aomap_pars_fragment:xd,batching_pars_vertex:Md,batching_vertex:Sd,begin_vertex:yd,beginnormal_vertex:Ed,bsdfs:bd,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:wd,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Pd,color_fragment:Ld,color_pars_fragment:Id,color_pars_vertex:Dd,color_vertex:Nd,common:Ud,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Od,displacementmap_vertex:Bd,emissivemap_fragment:Gd,emissivemap_pars_fragment:kd,colorspace_fragment:Hd,colorspace_pars_fragment:zd,envmap_fragment:Vd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:ih,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:Kd,fog_fragment:Zd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:jd,lights_lambert_fragment:eh,lights_lambert_pars_fragment:th,lights_pars_begin:nh,lights_toon_fragment:sh,lights_toon_pars_fragment:ah,lights_phong_fragment:rh,lights_phong_pars_fragment:oh,lights_physical_fragment:lh,lights_physical_pars_fragment:ch,lights_fragment_begin:dh,lights_fragment_maps:hh,lights_fragment_end:uh,lightprobes_pars_fragment:fh,logdepthbuf_fragment:ph,logdepthbuf_pars_fragment:mh,logdepthbuf_pars_vertex:gh,logdepthbuf_vertex:_h,map_fragment:vh,map_pars_fragment:xh,map_particle_fragment:Mh,map_particle_pars_fragment:Sh,metalnessmap_fragment:yh,metalnessmap_pars_fragment:Eh,morphinstance_vertex:bh,morphcolor_vertex:Th,morphnormal_vertex:Ah,morphtarget_pars_vertex:wh,morphtarget_vertex:Rh,normal_fragment_begin:Ch,normal_fragment_maps:Ph,normal_pars_fragment:Lh,normal_pars_vertex:Ih,normal_vertex:Dh,normalmap_pars_fragment:Nh,clearcoat_normal_fragment_begin:Uh,clearcoat_normal_fragment_maps:Fh,clearcoat_pars_fragment:Oh,iridescence_pars_fragment:Bh,opaque_fragment:Gh,packing:kh,premultiplied_alpha_fragment:Hh,project_vertex:zh,dithering_fragment:Vh,dithering_pars_fragment:Wh,roughnessmap_fragment:Xh,roughnessmap_pars_fragment:$h,shadowmap_pars_fragment:qh,shadowmap_pars_vertex:Yh,shadowmap_vertex:Kh,shadowmask_pars_fragment:Zh,skinbase_vertex:Jh,skinning_pars_vertex:Qh,skinning_vertex:jh,skinnormal_vertex:eu,specularmap_fragment:tu,specularmap_pars_fragment:nu,tonemapping_fragment:iu,tonemapping_pars_fragment:su,transmission_fragment:au,transmission_pars_fragment:ru,uv_pars_fragment:ou,uv_pars_vertex:lu,uv_vertex:cu,worldpos_vertex:du,background_vert:hu,background_frag:uu,backgroundCube_vert:fu,backgroundCube_frag:pu,cube_vert:mu,cube_frag:gu,depth_vert:_u,depth_frag:vu,distance_vert:xu,distance_frag:Mu,equirect_vert:Su,equirect_frag:yu,linedashed_vert:Eu,linedashed_frag:bu,meshbasic_vert:Tu,meshbasic_frag:Au,meshlambert_vert:wu,meshlambert_frag:Ru,meshmatcap_vert:Cu,meshmatcap_frag:Pu,meshnormal_vert:Lu,meshnormal_frag:Iu,meshphong_vert:Du,meshphong_frag:Nu,meshphysical_vert:Uu,meshphysical_frag:Fu,meshtoon_vert:Ou,meshtoon_frag:Bu,points_vert:Gu,points_frag:ku,shadow_vert:Hu,shadow_frag:zu,sprite_vert:Vu,sprite_frag:Wu},me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},cn={basic:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ft([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ft([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ft([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ft([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ft([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ft([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Ft([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Ft([me.lights,me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};cn.physical={uniforms:Ft([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const vs={r:0,b:0,g:0},Xu=new at,Tl=new Fe;Tl.set(-1,0,0,0,1,0,0,0,1);function $u(s,e,t,n,i,a){const r=new ke(0);let o=i===!0?0:1,l,c,p=null,g=0,h=null;function m(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const E=_.backgroundBlurriness>0;M=e.get(M,E)}return M}function x(_){let M=!1;const E=m(_);E===null?f(r,o):E&&E.isColor&&(f(E,1),M=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(_,M){const E=m(M);E&&E.isCubeTexture?(c===void 0&&(c=new ae(new st(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Mi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xu.makeRotationFromEuler(M.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tl),c.material.toneMapped=$e.getTransfer(E.colorSpace)!==je,(p!==E||g!==E.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,p=E,g=E.version,h=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ae(new Wi(2,2),new Qn({name:"BackgroundMaterial",uniforms:Mi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=$e.getTransfer(E.colorSpace)!==je,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||g!==E.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,p=E,g=E.version,h=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function f(_,M){_.getRGB(vs,Ml(s)),t.buffers.color.setClear(vs.r,vs.g,vs.b,M,a)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,M=1){r.set(_),o=M,f(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,f(r,o)},render:x,addToRenderList:b,dispose:u}}function qu(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let a=i,r=!1;function o(P,N,z,I,H){let Z=!1;const k=g(P,I,z,N);a!==k&&(a=k,c(a.object)),Z=m(P,I,z,H),Z&&x(P,I,z,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,E(P,N,z,I),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function p(P){return s.deleteVertexArray(P)}function g(P,N,z,I){const H=I.wireframe===!0;let Z=n[N.id];Z===void 0&&(Z={},n[N.id]=Z);const k=P.isInstancedMesh===!0?P.id:0;let ne=Z[k];ne===void 0&&(ne={},Z[k]=ne);let X=ne[z.id];X===void 0&&(X={},ne[z.id]=X);let j=X[H];return j===void 0&&(j=h(l()),X[H]=j),j}function h(P){const N=[],z=[],I=[];for(let H=0;H<t;H++)N[H]=0,z[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:I,object:P,attributes:{},index:null}}function m(P,N,z,I){const H=a.attributes,Z=N.attributes;let k=0;const ne=z.getAttributes();for(const X in ne)if(ne[X].location>=0){const ee=H[X];let be=Z[X];if(be===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(be=P.instanceColor)),ee===void 0||ee.attribute!==be||be&&ee.data!==be.data)return!0;k++}return a.attributesNum!==k||a.index!==I}function x(P,N,z,I){const H={},Z=N.attributes;let k=0;const ne=z.getAttributes();for(const X in ne)if(ne[X].location>=0){let ee=Z[X];ee===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const be={};be.attribute=ee,ee&&ee.data&&(be.data=ee.data),H[X]=be,k++}a.attributes=H,a.attributesNum=k,a.index=I}function b(){const P=a.newAttributes;for(let N=0,z=P.length;N<z;N++)P[N]=0}function f(P){u(P,0)}function u(P,N){const z=a.newAttributes,I=a.enabledAttributes,H=a.attributeDivisors;z[P]=1,I[P]===0&&(s.enableVertexAttribArray(P),I[P]=1),H[P]!==N&&(s.vertexAttribDivisor(P,N),H[P]=N)}function _(){const P=a.newAttributes,N=a.enabledAttributes;for(let z=0,I=N.length;z<I;z++)N[z]!==P[z]&&(s.disableVertexAttribArray(z),N[z]=0)}function M(P,N,z,I,H,Z,k){k===!0?s.vertexAttribIPointer(P,N,z,H,Z):s.vertexAttribPointer(P,N,z,I,H,Z)}function E(P,N,z,I){b();const H=I.attributes,Z=z.getAttributes(),k=N.defaultAttributeValues;for(const ne in Z){const X=Z[ne];if(X.location>=0){let j=H[ne];if(j===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const ee=j.normalized,be=j.itemSize,De=e.get(j);if(De===void 0)continue;const Y=De.buffer,ge=De.type,Se=De.bytesPerElement,Re=ge===s.INT||ge===s.UNSIGNED_INT||j.gpuType===cr;if(j.isInterleavedBufferAttribute){const _e=j.data,Ue=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,ut=j.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Pe=0;Pe<X.locationSize;Pe++)u(X.location+Pe,_e.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)f(X.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let Pe=0;Pe<X.locationSize;Pe++)M(X.location+Pe,be/X.locationSize,ge,ee,Ue*Se,(ut+be/X.locationSize*Pe)*Se,Re)}else{if(j.isInstancedBufferAttribute){for(let _e=0;_e<X.locationSize;_e++)u(X.location+_e,j.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<X.locationSize;_e++)f(X.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let _e=0;_e<X.locationSize;_e++)M(X.location+_e,be/X.locationSize,ge,ee,be*Se,be/X.locationSize*_e*Se,Re)}}else if(k!==void 0){const ee=k[ne];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(X.location,ee);break;case 3:s.vertexAttrib3fv(X.location,ee);break;case 4:s.vertexAttrib4fv(X.location,ee);break;default:s.vertexAttrib1fv(X.location,ee)}}}}_()}function A(){L();for(const P in n){const N=n[P];for(const z in N){const I=N[z];for(const H in I){const Z=I[H];for(const k in Z)p(Z[k].object),delete Z[k];delete I[H]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const N=n[P.id];for(const z in N){const I=N[z];for(const H in I){const Z=I[H];for(const k in Z)p(Z[k].object),delete Z[k];delete I[H]}}delete n[P.id]}function d(P){for(const N in n){const z=n[N];for(const I in z){const H=z[I];if(H[P.id]===void 0)continue;const Z=H[P.id];for(const k in Z)p(Z[k].object),delete Z[k];delete H[P.id]}}}function v(P){for(const N in n){const z=n[N],I=P.isInstancedMesh===!0?P.id:0,H=z[I];if(H!==void 0){for(const Z in H){const k=H[Z];for(const ne in k)p(k[ne].object),delete k[ne];delete H[Z]}delete z[I],Object.keys(z).length===0&&delete n[N]}}}function L(){R(),r=!0,a!==i&&(a=i,c(a.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:d,initAttributes:b,enableAttribute:f,disableUnusedAttributes:_}}function Yu(s,e,t){let n;function i(l){n=l}function a(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,p){p!==0&&(s.drawArraysInstanced(n,l,c,p),t.update(c,n,p))}function o(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,p);let h=0;for(let m=0;m<p;m++)h+=c[m];t.update(h,n,1)}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Ku(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const d=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(d){return!(d!==hn&&n.convert(d)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(d){const v=d===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Wt&&d!==dn&&!v&&n.convert(d)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(d){if(d==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const p=l(c);p!==c&&(Le("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:E,maxSamples:A,samples:T}}function Zu(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new Nn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,h){const m=g.length!==0||h||n!==0||i;return i=h,n=g.length,m},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,h){t=p(g,h,0)},this.setState=function(g,h,m){const x=g.clippingPlanes,b=g.clipIntersection,f=g.clipShadows,u=s.get(g);if(!i||x===null||x.length===0||a&&!f)a?p(null):c();else{const _=a?0:n,M=_*4;let E=u.clippingState||null;l.value=E,E=p(x,h,M,m);for(let A=0;A!==M;++A)E[A]=t[A];u.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,h,m,x){const b=g!==null?g.length:0;let f=null;if(b!==0){if(f=l.value,x!==!0||f===null){const u=m+b*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(f===null||f.length<u)&&(f=new Float32Array(u));for(let M=0,E=m;M!==b;++M,E+=4)r.copy(g[M]).applyMatrix4(_,o),r.normal.toArray(f,E),f[E+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,f}}class br extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _l(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new st(5,5,5),a=new Qn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:mi});a.uniforms.tEquirect.value=t;const r=new ae(i,a),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Gt),new rr(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}const So=256,Ju=3,Qu=20,Al=256,wl=16,ju=3,ef=new F,tf=new ke;class Ns{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new rr(1,10,null),this._boxMesh=new ae(new st(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,a={}){const{size:r=256,position:o=ef}=a,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),p=this._getSourceTarget(!0);t>0&&(p.texture.mipmapsAutoUpdate=!1);const g=l.autoClear,h=l.autoClearColor,m=l.autoClearDepth,x=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(tf));const f=new rr(n,i,p);return f.position.copy(o),f.update(l,e),l.autoClear=g,l.autoClearColor=h,l.autoClearDepth=m,l.autoClearStencil=x,e.background=b,t>0&&(p.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(So,Tc(e))}_fromTexture(e,t){e.mapping===_i||e.mapping===Fi?this._setSize(e.image.length===0?So:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=yo(e,!1,!1),n=Math.log2(e)-Ju;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,a=this._cubeCamera;i.material=n,a.renderTarget=e,a.activeMipmapLevel=t;const r=e.width>>t;e.viewport.set(0,0,r,r),a.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_i||e.mapping===Fi?(this._cubemapMaterial===null&&(this._cubemapMaterial=bo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Eo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=nf(),this._integrationMaterial=sf());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/wl);for(let r=0;r<=n;r++){const o=Ns.lodToRoughness(r,n);if(r>n-ju)a.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Al*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=af());const n=this._blurMaterial,i=n.uniforms,a=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=a.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(a,0,n)}}function yo(s,e,t){return new br(s,{minFilter:On,generateMipmaps:e,type:pn,colorSpace:Cs,depthBuffer:t})}function Xi(s,e,t){return new Qn({name:s,uniforms:e,vertexShader:Ge.cube_vert,fragmentShader:t,side:kt,blending:mi,depthTest:!1,depthWrite:!1})}function nf(){return Xi("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Al}u

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
	`)}function sf(){return Xi("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wl}},`

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
	`)}function af(){return Xi("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Qu}
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
	`)}function Eo(){return Xi("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function bo(){return Xi("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rf(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,m=!1){return h==null?null:m?r(h):a(h)}function a(h){if(h&&h.isTexture){const m=h.mapping;if(m===Hs||m===zs)if(e.has(h)){const x=e.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const b=new br(x.height);return b.fromEquirectangularTexture(s,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const m=h.mapping,x=m===Hs||m===zs,b=m===_i||m===Fi;if(x||b){let f=t.get(h);const u=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new Ns(s)),f=x?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{const _=h.image;return x&&_&&_.height>0||b&&_&&l(_)?(n===null&&(n=new Ns(s)),f=x?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",p),f.texture):null}}}return h}function o(h,m){return m===Hs?h.mapping=_i:m===zs&&(h.mapping=Fi),h}function l(h){let m=0;const x=6;for(let b=0;b<x;b++)h[b]!==void 0&&m++;return m===x}function c(h){const m=h.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function p(h){const m=h.target;m.removeEventListener("dispose",p);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:g}}function of(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ts("WebGLRenderer: "+n+" extension not supported."),i}}}function lf(s,e,t,n){const i={},a=new WeakMap,r=new FinalizationRegistry(x=>delete i[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(const f in x.attributes)e.remove(x.attributes[f]);x.removeEventListener("dispose",o),delete i[x.id],r.unregister(x);const b=a.get(x);b&&(e.remove(b),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,b){return i[b.id]!==void 0||(b.addEventListener("dispose",o),i[b.id]=new WeakRef(b),r.register(b,b.id,b),t.memory.geometries++),b}function p(x){const b=x.attributes;for(const f in b)e.update(b[f],s.ARRAY_BUFFER)}function g(x){const b=x.index,f=x.attributes.position;let u=0;if(f===void 0)return;const _=b!==null?b.array.length:f.array.length/3-1,M=f.count>=65535?ml:pl,E=new M(Math.ceil(_/3)*6,1),A=E.array;if(b!==null){const d=b.array;u=b.version;for(let v=0,L=0;v<_;v+=3){const R=d[v+0],P=d[v+1],N=d[v+2];A[L++]=R,A[L++]=P,A[L++]=P,A[L++]=N,A[L++]=N,A[L++]=R}}else{u=f.version;for(let d=0,v=0;d<_;d+=3){const L=d+0,R=d+1,P=d+2;A[v++]=L,A[v++]=R,A[v++]=R,A[v++]=P,A[v++]=P,A[v++]=L}}E.version=u;const T=a.get(x);T&&e.remove(T),a.set(x,E)}function h(x){const b=a.get(x);if(b){const f=x.index;f!==null&&b.version<f.version&&g(x)}else g(x);return a.get(x)}function m(){for(const x in i){const b=i[x].deref();b!==void 0&&l(b)}}return{get:c,update:p,getWireframeAttribute:h,dispose:m}}function cf(s,e,t){let n;function i(g){n=g}let a,r;function o(g){a=g.type,r=g.bytesPerElement}function l(g,h){s.drawElements(n,h,a,g*r),t.update(h,n,1)}function c(g,h,m){m!==0&&(s.drawElementsInstanced(n,h,a,g*r,m),t.update(h,n,m))}function p(g,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,a,g,0,m);let b=0;for(let f=0;f<m;f++)b+=h[f];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function df(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:Ze("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hf(s,e,t){const n=new WeakMap,i=new ht;function a(r,o,l){const c=r.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=p!==void 0?p.length:0;let h=n.get(o);if(h===void 0||h.count!==g){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var m=R;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),b===!0&&(E=2),f===!0&&(E=3);let A=o.attributes.position.count*E,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const d=new Float32Array(A*T*4*g),v=new hl(d,A,T,g);v.type=dn,v.needsUpdate=!0;const L=E*4;for(let P=0;P<g;P++){const N=u[P],z=_[P],I=M[P],H=A*T*4*P;for(let Z=0;Z<N.count;Z++){const k=Z*L;x===!0&&(i.fromBufferAttribute(N,Z),d[H+k+0]=i.x,d[H+k+1]=i.y,d[H+k+2]=i.z,d[H+k+3]=0),b===!0&&(i.fromBufferAttribute(z,Z),d[H+k+4]=i.x,d[H+k+5]=i.y,d[H+k+6]=i.z,d[H+k+7]=0),f===!0&&(i.fromBufferAttribute(I,Z),d[H+k+8]=i.x,d[H+k+9]=i.y,d[H+k+10]=i.z,d[H+k+11]=I.itemSize===4?i.w:1)}}h={count:g,texture:v,size:new ze(A,T)},n.set(o,h),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let x=0;for(let f=0;f<c.length;f++)x+=c[f];const b=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(s,"morphTargetBaseInfluence",b),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:a}}function uf(s,e,t,n,i){let a=new WeakMap;function r(c){const p=i.render.frame,g=c.geometry,h=e.get(c,g);if(a.get(h)!==p&&(e.update(h),a.set(h,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==p&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),a.set(c,p))),c.isSkinnedMesh){const m=c.skeleton;a.get(m)!==p&&(m.update(),a.set(m,p))}return h}function o(){a=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:r,dispose:o}}const ff={[$o]:"LINEAR_TONE_MAPPING",[qo]:"REINHARD_TONE_MAPPING",[Yo]:"CINEON_TONE_MAPPING",[Ko]:"ACES_FILMIC_TONE_MAPPING",[Jo]:"AGX_TONE_MAPPING",[Qo]:"NEUTRAL_TONE_MAPPING",[Zo]:"CUSTOM_TONE_MAPPING"};function pf(s,e,t,n,i,a){const r=new un(e,t,{type:s,depthBuffer:i,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const p=new Tt;p.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new et([0,2,0,0,2,0],2));const g=new nd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ae(p,g),m=new El(-1,1,1,-1,0,1);let x=null,b=null,f=!1,u,_=null,M=[],E=!1;this.setSize=function(A,T){r.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let d=0;d<M.length;d++){const v=M[d];v.setSize&&v.setSize(A,T)}},this.setEffects=function(A){M=A,E=M.length>0&&M[0].isRenderPass===!0;const T=r.width,d=r.height;M.length>0&&o===null&&(o=new un(T,d,{type:pn,depthBuffer:!1,stencilBuffer:!1}),l=new un(T,d,{type:pn,depthBuffer:!1,stencilBuffer:!1}));const v=i===!0&&M.some(L=>L.needsDepthTexture===!0);v!==(r.depthTexture!==null)&&(v===!0&&c===null&&(c=new xi(T,d),a===!0&&(c.format=Bn,c.type=vi)),r.dispose(),r.depthTexture=v?c:null,r.resolveDepthBuffer=v,r.storeMultisampledDepthBuffer=v);for(let L=0;L<M.length;L++){const R=M[L];R.setSize&&R.setSize(T,d),v&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,T){if(f||A.toneMapping===bn&&M.length===0)return!1;if(_=T,T!==null){const d=T.width,v=T.height;(r.width!==d||r.height!==v)&&this.setSize(d,v)}return E===!1&&A.setRenderTarget(r),u=A.toneMapping,A.toneMapping=bn,!0},this.hasRenderPass=function(){return E},this.end=function(A,T){A.toneMapping=u,f=!0;let d=r,v=o;for(let L=0;L<M.length;L++){const R=M[L];R.enabled!==!1&&(R.render(A,v,d,T),R.needsSwap!==!1&&(d=v,v=v===o?l:o))}if(x!==A.outputColorSpace||b!==A.toneMapping){x=A.outputColorSpace,b=A.toneMapping,g.defines={},$e.getTransfer(x)===je&&(g.defines.SRGB_TRANSFER="");const L=ff[b];L&&(g.defines[L]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=d.texture,A.setRenderTarget(_),A.render(h,m),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),p.dispose(),g.dispose()}}const Rl=new Ot,Cl=new xi(1,1),Pl=new vl(1),Ll=new hl,Il=new Dc,Dl=new _l,To=[],Ao=[],wo=new Float32Array(16),Ro=new Float32Array(9),Co=new Float32Array(4);function yi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=To[i];if(a===void 0&&(a=new Float32Array(i),To[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function _t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fs(s,e){let t=Ao[e];t===void 0&&(t=new Int32Array(e),Ao[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function mf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function _f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function vf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function xf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Co.set(n),s.uniformMatrix2fv(this.addr,!1,Co),vt(t,n)}}function Mf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Ro.set(n),s.uniformMatrix3fv(this.addr,!1,Ro),vt(t,n)}}function Sf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;wo.set(n),s.uniformMatrix4fv(this.addr,!1,wo),vt(t,n)}}function yf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function Tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function Af(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function Rf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function Cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function Os(s){return s.version===0&&(s.compareFunction=cl,s.needsUpdate=!0),s}function Pf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?a=Os(Cl):a=Rl,t.setTexture2D(e||a,i)}function Lf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Il,i)}function If(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Os(Pl):a=Dl,t.setTextureCube(e||a,i)}function Df(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ll,i)}function Nf(s){switch(s){case 5126:return mf;case 35664:return gf;case 35665:return _f;case 35666:return vf;case 35674:return xf;case 35675:return Mf;case 35676:return Sf;case 5124:case 35670:return yf;case 35667:case 35671:return Ef;case 35668:case 35672:return bf;case 35669:case 35673:return Tf;case 5125:return Af;case 36294:return wf;case 36295:return Rf;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Lf;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return Df}}function Uf(s,e){s.uniform1fv(this.addr,e)}function Ff(s,e){const t=yi(e,this.size,2);s.uniform2fv(this.addr,t)}function Of(s,e){const t=yi(e,this.size,3);s.uniform3fv(this.addr,t)}function Bf(s,e){const t=yi(e,this.size,4);s.uniform4fv(this.addr,t)}function Gf(s,e){const t=yi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kf(s,e){const t=yi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Hf(s,e){const t=yi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zf(s,e){s.uniform1iv(this.addr,e)}function Vf(s,e){s.uniform2iv(this.addr,e)}function Wf(s,e){s.uniform3iv(this.addr,e)}function Xf(s,e){s.uniform4iv(this.addr,e)}function $f(s,e){s.uniform1uiv(this.addr,e)}function qf(s,e){s.uniform2uiv(this.addr,e)}function Yf(s,e){s.uniform3uiv(this.addr,e)}function Kf(s,e){s.uniform4uiv(this.addr,e)}function Zf(s,e,t){const n=this.cache,i=e.length,a=Fs(t,i);_t(n,a)||(s.uniform1iv(this.addr,a),vt(n,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=Os(Cl):r=Rl;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,a[o])}function Jf(s,e,t){const n=this.cache,i=e.length,a=Fs(t,i);_t(n,a)||(s.uniform1iv(this.addr,a),vt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Il,a[r])}function Qf(s,e,t){const n=this.cache,i=e.length,a=Fs(t,i);_t(n,a)||(s.uniform1iv(this.addr,a),vt(n,a));let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Os(Pl):r=Dl;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||r,a[o])}function jf(s,e,t){const n=this.cache,i=e.length,a=Fs(t,i);_t(n,a)||(s.uniform1iv(this.addr,a),vt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Ll,a[r])}function ep(s){switch(s){case 5126:return Uf;case 35664:return Ff;case 35665:return Of;case 35666:return Bf;case 35674:return Gf;case 35675:return kf;case 35676:return Hf;case 5124:case 35670:return zf;case 35667:case 35671:return Vf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return $f;case 36294:return qf;case 36295:return Yf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return jf}}class tp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nf(t.type)}}class np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ep(t.type)}}class ip{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Po(s,e){s.seq.push(e),s.map[e.id]=e}function sp(s,e,t){const n=s.name,i=n.length;for(ma.lastIndex=0;;){const a=ma.exec(n),r=ma.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Po(t,c===void 0?new tp(o,s,e):new np(o,s,e));break}else{let g=t.map[o];g===void 0&&(g=new ip(o),Po(t,g)),t=g}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);sp(o,l,this)}const i=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):a.push(r);i.length>0&&(this.seq=i.concat(a))}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Lo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ap=37297;let rp=0;function op(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Io=new Fe;function lp(s){$e._getMatrix(Io,$e.workingColorSpace,s);const e=`mat3( ${Io.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case Ps:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Do(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+op(s.getShaderSource(e),o)}else return a}function cp(s,e){const t=lp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const dp={[$o]:"Linear",[qo]:"Reinhard",[Yo]:"Cineon",[Ko]:"ACESFilmic",[Jo]:"AgX",[Qo]:"Neutral",[Zo]:"Custom"};function hp(s,e){const t=dp[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xs=new F;function up(){$e.getLuminanceCoefficients(xs);const s=xs.x.toFixed(4),e=xs.y.toFixed(4),t=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function pp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Li(s){return s!==""}function No(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Uo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function or(s){return s.replace(gp,_p)}function _p(s,e){const t=Ge[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return or(t)}const vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fo(s){return s.replace(vp,xp)}function xp(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Oo(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Mp={[Ms]:"SHADOWMAP_TYPE_PCF",[Pi]:"SHADOWMAP_TYPE_VSM"};function Sp(s){return Mp[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yp={[Fi]:"ENVMAP_MODE_REFRACTION"};function Ep(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yp[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bp={[Xo]:"ENVMAP_BLENDING_MULTIPLY",[lc]:"ENVMAP_BLENDING_MIX",[cc]:"ENVMAP_BLENDING_ADD"};function Tp(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":bp[s.combine]||"ENVMAP_BLENDING_NONE"}function Ap(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Sp(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",p=Ep(t),g=Tp(t),h=fp(t),m=pp(a),x=i.createProgram();let b,f,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Li).join(`
`),b.length>0&&(b+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Li).join(`
`),f.length>0&&(f+=`
`)):(b=[Oo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),f=[Oo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==bn?hp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,cp("linearToOutputTexel",t.outputColorSpace),up(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),r=or(r),r=No(r,t),r=Uo(r,t),o=or(o),o=No(o,t),o=Uo(o,t),r=Fo(r),o=Fo(o),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,b=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,f=["#define varying in",t.glslVersion===Hr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=u+b+r,M=u+f+o,E=Lo(i,i.VERTEX_SHADER,_),A=Lo(i,i.FRAGMENT_SHADER,M);i.attachShader(x,E),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(R){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(x)||"",N=i.getShaderInfoLog(E)||"",z=i.getShaderInfoLog(A)||"",I=P.trim(),H=N.trim(),Z=z.trim();let k=!0,ne=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,E,A);else{const X=Do(i,E,"vertex"),j=Do(i,A,"fragment");Ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+X+`
`+j)}else I!==""?Le("WebGLProgram: Program Info Log:",I):(H===""||Z==="")&&(ne=!1);ne&&(R.diagnostics={runnable:k,programLog:I,vertexShader:{log:H,prefix:b},fragmentShader:{log:Z,prefix:f}})}i.deleteShader(E),i.deleteShader(A),d=new As(i,x),v=mp(i,x)}let d;this.getUniforms=function(){return d===void 0&&T(this),d};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(x,ap)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}let wp=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cp(e),t.set(e,n)),n}}class Cp{constructor(e){this.id=wp++,this.code=e,this.usedTimes=0}}function Pp(s){return s===Jn||s===ws||s===Rs}function Lp(s,e,t,n,i,a){const r=new ul,o=new Rp,l=new Set,c=[],p=new Map,g=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(d){return l.add(d),d===0?"uv":`uv${d}`}function x(d,v,L,R,P,N){const z=R.fog,I=P.geometry,H=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?R.environment:null,Z=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,k=e.get(d.envMap||H,Z),ne=h[d.type];let X=n.precision;d.precision!==null&&(X=n.getMaxPrecision(d.precision),X!==d.precision&&Le("WebGLProgram.getParameters:",d.precision,"not supported, using",X,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=j!==void 0?j.length:0;let be=0;I.morphAttributes.position!==void 0&&(be=1),I.morphAttributes.normal!==void 0&&(be=2),I.morphAttributes.color!==void 0&&(be=3);let De,Y,ge,Se;if(ne){const pe=cn[ne];De=pe.vertexShader,Y=pe.fragmentShader}else{De=d.vertexShader,Y=d.fragmentShader;const pe=o.getVertexShaderStage(d),Qe=o.getFragmentShaderStage(d);o.update(d,pe,Qe),ge=pe.id,Se=Qe.id}const Re=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Ue=P.isInstancedMesh===!0,ut=P.isBatchedMesh===!0,Pe=!!d.map,Je=!!d.matcap,tt=!!k,Ve=tt&&k.isPMREMTexture===!0,At=!!d.aoMap,mt=!!d.lightMap,Bt=!!d.bumpMap&&d.wireframe===!1,lt=!!d.normalMap,rn=!!d.displacementMap,xt=!!d.emissiveMap,Xt=!!d.metalnessMap,$t=!!d.roughnessMap,qt=d.anisotropy>0,U=d.clearcoat>0,Yt=d.diffuseRoughness>0,rt=d.dispersion>0,ot=d.retroreflectivity>0,fe=d.iridescence>0,gt=d.sheen>0,Ce=d.transmission>0,Ie=qt&&!!d.anisotropyMap,w=U&&!!d.clearcoatMap,S=U&&!!d.clearcoatNormalMap,B=U&&!!d.clearcoatRoughnessMap,te=Yt&&!!d.diffuseRoughnessMap,J=fe&&!!d.iridescenceMap,re=fe&&!!d.iridescenceThicknessMap,he=gt&&!!d.sheenColorMap,$=gt&&!!d.sheenRoughnessMap,q=!!d.specularMap,le=!!d.specularColorMap,C=!!d.specularIntensityMap,K=Ce&&!!d.transmissionMap,W=Ce&&!!d.thicknessMap,ce=!!d.gradientMap,se=!!d.alphaMap,oe=d.alphaTest>0,Ae=!!d.alphaHash,Be=!!d.extensions;let ie=bn;d.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ie=s.toneMapping);const we=Ve?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Oe={shaderID:ne,shaderType:d.type,shaderName:d.name,vertexShader:De,fragmentShader:Y,defines:d.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:X,batching:ut,batchingColor:ut&&P._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&P.instanceColor!==null,instancingMorph:Ue&&P.morphTexture!==null,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:Pe,matcap:Je,envMap:tt,envMapMode:tt&&k.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?we.length-1:null,envMapSize:Ve?we[0].width:null,aoMap:At,lightMap:mt,bumpMap:Bt,normalMap:lt,displacementMap:rn,emissiveMap:xt,normalMapObjectSpace:lt&&d.normalMapType===uc,normalMapTangentSpace:lt&&d.normalMapType===nr,packedNormalMap:lt&&d.normalMapType===nr&&Pp(d.normalMap.format),metalnessMap:Xt,roughnessMap:$t,anisotropy:qt,anisotropyMap:Ie,clearcoat:U,clearcoatMap:w,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:Yt,diffuseRoughnessMap:te,dispersion:rt,retroreflection:ot,iridescence:fe,iridescenceMap:J,iridescenceThicknessMap:re,sheen:gt,sheenColorMap:he,sheenRoughnessMap:$,specularMap:q,specularColorMap:le,specularIntensityMap:C,transmission:Ce,transmissionMap:K,thicknessMap:W,gradientMap:ce,opaque:d.transparent===!1&&d.blending===Ii&&d.alphaToCoverage===!1,alphaMap:se,alphaTest:oe,alphaHash:Ae,combine:d.combine,mapUv:Pe&&m(d.map.channel),aoMapUv:At&&m(d.aoMap.channel),lightMapUv:mt&&m(d.lightMap.channel),bumpMapUv:Bt&&m(d.bumpMap.channel),normalMapUv:lt&&m(d.normalMap.channel),displacementMapUv:rn&&m(d.displacementMap.channel),emissiveMapUv:xt&&m(d.emissiveMap.channel),metalnessMapUv:Xt&&m(d.metalnessMap.channel),roughnessMapUv:$t&&m(d.roughnessMap.channel),anisotropyMapUv:Ie&&m(d.anisotropyMap.channel),clearcoatMapUv:w&&m(d.clearcoatMap.channel),clearcoatNormalMapUv:S&&m(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&m(d.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&m(d.diffuseRoughnessMap.channel),iridescenceMapUv:J&&m(d.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(d.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(d.sheenColorMap.channel),sheenRoughnessMapUv:$&&m(d.sheenRoughnessMap.channel),specularMapUv:q&&m(d.specularMap.channel),specularColorMapUv:le&&m(d.specularColorMap.channel),specularIntensityMapUv:C&&m(d.specularIntensityMap.channel),transmissionMapUv:K&&m(d.transmissionMap.channel),thicknessMapUv:W&&m(d.thicknessMap.channel),alphaMapUv:se&&m(d.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(lt||qt),vertexNormals:!!I.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Pe||se),fog:!!z,useFog:d.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||I.attributes.normal===void 0&&lt===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:_e,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:be,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:N.filter(pe=>pe.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:d.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:Pe&&d.map.isVideoTexture===!0&&$e.getTransfer(d.map.colorSpace)===je,decodeVideoTextureEmissive:xt&&d.emissiveMap.isVideoTexture===!0&&$e.getTransfer(d.emissiveMap.colorSpace)===je,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Vt,flipSided:d.side===kt,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:Be&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&d.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function b(d){const v=[];if(d.shaderID?v.push(d.shaderID):(v.push(d.customVertexShaderID),v.push(d.customFragmentShaderID)),d.defines!==void 0)for(const L in d.defines)v.push(L),v.push(d.defines[L]);return d.isRawShaderMaterial===!1&&(f(v,d),u(v,d),v.push(s.outputColorSpace)),v.push(d.customProgramCacheKey),v.join()}function f(d,v){d.push(v.precision),d.push(v.outputColorSpace),d.push(v.envMapMode),d.push(v.envMapPMREM),d.push(v.envMapMaxLod),d.push(v.envMapSize),d.push(v.mapUv),d.push(v.alphaMapUv),d.push(v.lightMapUv),d.push(v.aoMapUv),d.push(v.bumpMapUv),d.push(v.normalMapUv),d.push(v.displacementMapUv),d.push(v.emissiveMapUv),d.push(v.metalnessMapUv),d.push(v.roughnessMapUv),d.push(v.anisotropyMapUv),d.push(v.clearcoatMapUv),d.push(v.clearcoatNormalMapUv),d.push(v.clearcoatRoughnessMapUv),d.push(v.diffuseRoughnessMapUv),d.push(v.iridescenceMapUv),d.push(v.iridescenceThicknessMapUv),d.push(v.sheenColorMapUv),d.push(v.sheenRoughnessMapUv),d.push(v.specularMapUv),d.push(v.specularColorMapUv),d.push(v.specularIntensityMapUv),d.push(v.transmissionMapUv),d.push(v.thicknessMapUv),d.push(v.combine),d.push(v.fogExp2),d.push(v.sizeAttenuation),d.push(v.morphTargetsCount),d.push(v.numSunLights),d.push(v.numDirLights),d.push(v.numPointLights),d.push(v.numSpotLights),d.push(v.numSpotLightMaps),d.push(v.numHemiLights),d.push(v.numRectAreaLights),d.push(v.numSunLightShadows),d.push(v.numDirLightShadows),d.push(v.numPointLightShadows),d.push(v.numSpotLightShadows),d.push(v.numSpotLightShadowsWithMaps),d.push(v.numLightProbes),d.push(v.numLightProbeGrids),d.push(v.shadowMapType),d.push(v.toneMapping),d.push(v.numClippingPlanes),d.push(v.numClipIntersection),d.push(v.depthPacking)}function u(d,v){r.disableAll(),v.instancing&&r.enable(0),v.instancingColor&&r.enable(1),v.instancingMorph&&r.enable(2),v.matcap&&r.enable(3),v.envMap&&r.enable(4),v.normalMapObjectSpace&&r.enable(5),v.normalMapTangentSpace&&r.enable(6),v.clearcoat&&r.enable(7),v.iridescence&&r.enable(8),v.alphaTest&&r.enable(9),v.vertexColors&&r.enable(10),v.vertexAlphas&&r.enable(11),v.vertexUv1s&&r.enable(12),v.vertexUv2s&&r.enable(13),v.vertexUv3s&&r.enable(14),v.vertexTangents&&r.enable(15),v.anisotropy&&r.enable(16),v.alphaHash&&r.enable(17),v.batching&&r.enable(18),v.dispersion&&r.enable(19),v.retroreflection&&r.enable(24),v.diffuseRoughness&&r.enable(25),v.batchingColor&&r.enable(20),v.gradientMap&&r.enable(21),v.packedNormalMap&&r.enable(22),v.vertexNormals&&r.enable(23),d.push(r.mask),r.disableAll(),v.fog&&r.enable(0),v.useFog&&r.enable(1),v.flatShading&&r.enable(2),v.logarithmicDepthBuffer&&r.enable(3),v.reversedDepthBuffer&&r.enable(4),v.skinning&&r.enable(5),v.morphTargets&&r.enable(6),v.morphNormals&&r.enable(7),v.morphColors&&r.enable(8),v.premultipliedAlpha&&r.enable(9),v.shadowMapEnabled&&r.enable(10),v.doubleSided&&r.enable(11),v.flipSided&&r.enable(12),v.useDepthPacking&&r.enable(13),v.dithering&&r.enable(14),v.transmission&&r.enable(15),v.sheen&&r.enable(16),v.opaque&&r.enable(17),v.pointsUvs&&r.enable(18),v.decodeVideoTexture&&r.enable(19),v.decodeVideoTextureEmissive&&r.enable(20),v.alphaToCoverage&&r.enable(21),v.numLightProbeGrids>0&&r.enable(22),v.hasPositionAttribute&&r.enable(23),d.push(r.mask)}function _(d){const v=h[d.type];let L;if(v){const R=cn[v];L=jc.clone(R.uniforms)}else L=d.uniforms;return L}function M(d,v){let L=p.get(v);return L!==void 0?++L.usedTimes:(L=new Ap(s,v,d,i),c.push(L),p.set(v,L)),L}function E(d){if(--d.usedTimes===0){const v=c.indexOf(d);c[v]=c[c.length-1],c.pop(),p.delete(d.cacheKey),d.destroy()}}function A(d){o.remove(d)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:b,getUniforms:_,acquireProgram:M,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:T}}function Ip(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function Dp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Bo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Go(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,x,b,f,u){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:m,material:x,materialVariant:r(h),groupOrder:b,renderOrder:h.renderOrder,z:f,group:u},s[e]=_):(_.id=h.id,_.object=h,_.geometry=m,_.material=x,_.materialVariant=r(h),_.groupOrder=b,_.renderOrder=h.renderOrder,_.z=f,_.group=u),e++,_}function l(h,m,x,b,f,u,_){_.reversedDepth===!0&&(f=-f);const M=o(h,m,x,b,f,u);x.transmission>0?n.push(M):x.transparent===!0?i.push(M):t.push(M)}function c(h,m,x,b,f,u){const _=o(h,m,x,b,f,u);x.transmission>0?n.unshift(_):x.transparent===!0?i.unshift(_):t.unshift(_)}function p(h,m){t.length>1&&t.sort(h||Dp),n.length>1&&n.sort(m||Bo),i.length>1&&i.sort(m||Bo)}function g(){for(let h=e,m=s.length;h<m;h++){const x=s[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:l,unshift:c,finish:g,sort:p}}function Np(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new Go,s.set(n,[r])):i>=a.length?(r=new Go,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Up(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new ke};break;case"SpotLight":t={position:new F,direction:new F,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function Fp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Op=0;function Bp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Gp(s){const e=new Up,t=Fp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,a=new at,r=new at;function o(c){let p=0,g=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let m=0,x=0,b=0,f=0,u=0,_=0,M=0,E=0,A=0,T=0,d=0,v=0,L=0,R=0;c.sort(Bp);for(let N=0,z=c.length;N<z;N++){const I=c[N],H=I.color,Z=I.intensity,k=I.distance;let ne=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Jn?ne=I.shadow.map.texture:ne=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)p+=H.r*Z,g+=H.g*Z,h+=H.b*Z;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],Z);R++}else if(I.isSunLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,ee=t.get(I);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[x]=ee,n.sunShadowMap[x]=ne;const be=j.getViewportCount();for(let De=0;De<be;De++)n.sunShadowMatrix[b+De]=j.getMatrix(De),n.sunShadowCascade[b+De]=j._cascadeData[De];b+=be,x++}n.sun[m]=X,m++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,ee=t.get(I);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=ne,n.directionalShadowMatrix[f]=I.shadow.matrix,A++}n.directional[f]=X,f++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(H).multiplyScalar(Z),X.distance=k,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[_]=X;const j=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,j.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[_]=j.matrix,I.castShadow){const ee=t.get(I);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.spotShadow[_]=ee,n.spotShadowMap[_]=ne,d++}_++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(H).multiplyScalar(Z),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=X,M++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const j=I.shadow,ee=t.get(I);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,n.pointShadow[u]=ee,n.pointShadowMap[u]=ne,n.pointShadowMatrix[u]=I.shadow.matrix,T++}n.point[u]=X,u++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(Z),X.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[E]=X,E++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=h;const P=n.hash;(P.sunLength!==m||P.directionalLength!==f||P.pointLength!==u||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==E||P.numSunShadows!==x||P.numDirectionalShadows!==A||P.numPointShadows!==T||P.numSpotShadows!==d||P.numSpotMaps!==v||P.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=f,n.spot.length=_,n.rectArea.length=M,n.point.length=u,n.hemi.length=E,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=d,n.spotShadowMap.length=d,n.spotLightMatrix.length=d+v-L,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,P.sunLength=m,P.directionalLength=f,P.pointLength=u,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=E,P.numSunShadows=x,P.numDirectionalShadows=A,P.numPointShadows=T,P.numSpotShadows=d,P.numSpotMaps=v,P.numLightProbes=R,n.version=Op++)}function l(c,p){let g=0,h=0,m=0,x=0,b=0,f=0;const u=p.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const E=c[_];if(E.isSunLight){const A=n.sun[g];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(u),g++}else if(E.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(u),h++}else if(E.isSpotLight){const A=n.spot[x];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(u),x++}else if(E.isRectAreaLight){const A=n.rectArea[b];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(u),r.identity(),a.copy(E.matrixWorld),a.premultiply(u),r.extractRotation(a),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),b++}else if(E.isPointLight){const A=n.point[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const A=n.hemi[f];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(u),f++}}}return{setup:o,setupView:l,state:n}}function ko(s){const e=new Gp(s),t=[],n=[],i=[];function a(g){p.camera=g,t.length=0,n.length=0,i.length=0}function r(g){g.isLightProbeGrid?i.push(g):t.push(g)}function o(g){n.push(g)}function l(){e.setup(t),i.sort((g,h)=>g.priority-h.priority||g.id-h.id)}function c(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function kp(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new ko(s),e.set(i,[o])):a>=r.length?(o=new ko(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zp=`uniform sampler2D shadow_pass;
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
}`,Vp=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Wp=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ho=new at,Ci=new F,ga=new F;function Xp(s,e,t){let n=new Gi;const i=new ze,a=new ze,r=new ht,o=new id,l=new sd,c={},p=t.maxTextureSize,g={[Zn]:kt,[kt]:Zn,[Vt]:Vt},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Hp,fragmentShader:zp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Tt;x.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ae(x,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let u=this.type;this.render=function(T,d,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===Vl&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);const L=s.getRenderTarget(),R=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(mi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=u!==this.type;z&&d.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=T.length;I<H;I++){const Z=T[I],k=Z.shadow;if(k===void 0){Le("WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ne=k.getFrameExtents();i.multiply(ne),a.copy(k.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(a.x=Math.floor(p/ne.x),i.x=a.x*ne.x,k.mapSize.x=a.x),i.y>p&&(a.y=Math.floor(p/ne.y),i.y=a.y*ne.y,k.mapSize.y=a.y));const X=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Pi){if(Z.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new un(i.x,i.y,{format:Jn,type:pn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),k.map.texture.name=Z.name+".shadowMap",k.map.depthTexture=new xi(i.x,i.y,dn),k.map.depthTexture.name=Z.name+".shadowMapDepth",k.map.depthTexture.format=Hn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pt,k.map.depthTexture.magFilter=Pt}else Z.isPointLight?(k.map=new br(i.x),k.map.depthTexture=new vl(i.x,fn)):(k.map=new un(i.x,i.y),k.map.depthTexture=new xi(i.x,i.y,fn)),k.map.depthTexture.name=Z.name+".shadowMap",k.map.depthTexture.format=Hn,this.type===Ms?(k.map.depthTexture.compareFunction=X?ll:ol,k.map.depthTexture.minFilter=Gt,k.map.depthTexture.magFilter=Gt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pt,k.map.depthTexture.magFilter=Pt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);const j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Z.isPointLight!==!0&&k.updateMatrices(Z,v);const ee=k.camera.layers.mask&4294967294?k.camera.layers:v.layers;for(let be=0;be<j;be++){const De=k.getCamera(be);if(Z.isPointLight){const Y=k.camera,ge=k.matrix,Se=Z.distance||Y.far;Se!==Y.far&&(Y.far=Se,Y.updateProjectionMatrix()),Ci.setFromMatrixPosition(Z.matrixWorld),Y.position.copy(Ci),ga.copy(Y.position),ga.add(Vp[be]),Y.up.copy(Wp[be]),Y.lookAt(ga),Y.updateMatrixWorld(),ge.makeTranslation(-Ci.x,-Ci.y,-Ci.z),Ho.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ho,Y.coordinateSystem,Y.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,be),s.clear();else{be===0&&(s.setRenderTarget(k.map),s.clear());const Y=k.getViewport(be);r.set(a.x*Y.x,a.y*Y.y,a.x*Y.z,a.y*Y.w),N.viewport(r)}n=k.getFrustum(be),E(d,v,De,Z,ee,this.type)}k.isPointLightShadow!==!0&&this.type===Pi&&_(k,v),k.needsUpdate=!1}u=this.type,f.needsUpdate=!1,s.setRenderTarget(L,R,P)};function _(T,d){const v=e.update(b);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new un(i.x,i.y,{format:Jn,type:pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(d,null,v,h,b,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(d,null,v,m,b,null)}function M(T,d,v,L){let R=null;const P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?l:o,s.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0||d.alphaToCoverage===!0){const N=R.uuid,z=d.uuid;let I=c[N];I===void 0&&(I={},c[N]=I);let H=I[z];H===void 0&&(H=R.clone(),I[z]=H,d.addEventListener("dispose",A)),R=H}if(R.visible=d.visible,R.wireframe=d.wireframe,L===Pi?R.side=d.shadowSide!==null?d.shadowSide:d.side:R.side=d.shadowSide!==null?d.shadowSide:g[d.side],R.alphaMap=d.alphaMap,R.alphaTest=d.alphaToCoverage===!0?.5:d.alphaTest,R.map=d.map,R.clipShadows=d.clipShadows,R.clippingPlanes=d.clippingPlanes,R.clipIntersection=d.clipIntersection,R.displacementMap=d.displacementMap,R.displacementScale=d.displacementScale,R.displacementBias=d.displacementBias,R.wireframeLinewidth=d.wireframeLinewidth,R.linewidth=d.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=s.properties.get(R);N.light=v}return R}function E(T,d,v,L,R,P){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Pi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const I=e.update(T),H=T.material;if(Array.isArray(H)){const Z=I.groups;for(let k=0,ne=Z.length;k<ne;k++){const X=Z[k],j=H[X.materialIndex];if(j&&j.visible){const ee=M(T,j,L,P);T.onBeforeShadow(s,T,d,v,I,ee,X),s.renderBufferDirect(v,null,I,ee,T,X),T.onAfterShadow(s,T,d,v,I,ee,X)}}}else if(H.visible){const Z=M(T,H,L,P);T.onBeforeShadow(s,T,d,v,I,Z,null),s.renderBufferDirect(v,null,I,Z,T,null),T.onAfterShadow(s,T,d,v,I,Z,null)}}const z=T.children;for(let I=0,H=z.length;I<H;I++)E(z[I],d,v,L,R,P)}function A(T){T.target.removeEventListener("dispose",A);for(const v in c){const L=c[v],R=T.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function $p(s,e){function t(){let C=!1;const K=new ht;let W=null;const ce=new ht(0,0,0,0);return{setMask:function(se){W!==se&&!C&&(s.colorMask(se,se,se,se),W=se)},setLocked:function(se){C=se},setClear:function(se,oe,Ae,Be,ie){ie===!0&&(se*=Be,oe*=Be,Ae*=Be),K.set(se,oe,Ae,Be),ce.equals(K)===!1&&(s.clearColor(se,oe,Ae,Be),ce.copy(K))},reset:function(){C=!1,W=null,ce.set(-1,0,0,0)}}}function n(){let C=!1,K=!1,W=null,ce=null,se=null;return{setReversed:function(oe){if(K!==oe){const Ae=e.get("EXT_clip_control");oe?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),K=oe;const Be=se;se=null,this.setClear(Be)}},getReversed:function(){return K},setTest:function(oe){oe?_e(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(oe){W!==oe&&!C&&(s.depthMask(oe),W=oe)},setFunc:function(oe){if(K&&(oe=Ec[oe]),ce!==oe){switch(oe){case _a:s.depthFunc(s.NEVER);break;case va:s.depthFunc(s.ALWAYS);break;case xa:s.depthFunc(s.LESS);break;case Ui:s.depthFunc(s.LEQUAL);break;case Ma:s.depthFunc(s.EQUAL);break;case Sa:s.depthFunc(s.GEQUAL);break;case ya:s.depthFunc(s.GREATER);break;case Ea:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=oe}},setLocked:function(oe){C=oe},setClear:function(oe){se!==oe&&(se=oe,K&&(oe=1-oe),s.clearDepth(oe))},reset:function(){C=!1,W=null,ce=null,se=null,K=!1}}}function i(){let C=!1,K=null,W=null,ce=null,se=null,oe=null,Ae=null,Be=null,ie=null;return{setTest:function(we){C||(we?_e(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(we){K!==we&&!C&&(s.stencilMask(we),K=we)},setFunc:function(we,Oe,pe){(W!==we||ce!==Oe||se!==pe)&&(s.stencilFunc(we,Oe,pe),W=we,ce=Oe,se=pe)},setOp:function(we,Oe,pe){(oe!==we||Ae!==Oe||Be!==pe)&&(s.stencilOp(we,Oe,pe),oe=we,Ae=Oe,Be=pe)},setLocked:function(we){C=we},setClear:function(we){ie!==we&&(s.clearStencil(we),ie=we)},reset:function(){C=!1,K=null,W=null,ce=null,se=null,oe=null,Ae=null,Be=null,ie=null}}}const a=new t,r=new n,o=new i;let l={};const c=new WeakMap;let p={},g={},h={},m=new WeakMap,x=[],b=null,f=!1,u=null,_=null,M=null,E=null,A=null,T=null,d=null,v=new ke(0,0,0),L=0,R=!1,P=null,N=null,z=null,I=null,H=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ne=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=ne>=2);let j=null,ee={};const be=s.getParameter(s.SCISSOR_BOX),De=s.getParameter(s.VIEWPORT),Y=new ht().fromArray(be),ge=new ht().fromArray(De);function Se(C,K,W,ce){const se=new Uint8Array(4),oe=s.createTexture();s.bindTexture(C,oe),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<W;Ae++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(K,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(K+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return oe}const Re={};Re[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),_e(s.DEPTH_TEST),r.setFunc(Ui),Bt(!1),lt(Or),_e(s.CULL_FACE),At(mi);function _e(C){p[C]!==!0&&(s.enable(C),p[C]=!0)}function Ue(C){p[C]!==!1&&(s.disable(C),p[C]=!1)}function ut(C,K){return h[C]!==K?(s.bindFramebuffer(C,K),h[C]=K,C===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=K),C===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=K),!0):!1}function Pe(C,K){let W=x,ce=!1;if(C){W=m.get(K),W===void 0&&(W=[],m.set(K,W));const se=C.textures;if(W.length!==se.length||W[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,Ae=se.length;oe<Ae;oe++)W[oe]=s.COLOR_ATTACHMENT0+oe;W.length=se.length,ce=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,ce=!0);ce&&s.drawBuffers(W)}function Je(C){return b!==C?(s.useProgram(C),b=C,!0):!1}const tt={[pi]:s.FUNC_ADD,[Xl]:s.FUNC_SUBTRACT,[$l]:s.FUNC_REVERSE_SUBTRACT};tt[ql]=s.MIN,tt[Yl]=s.MAX;const Ve={[Kl]:s.ZERO,[Zl]:s.ONE,[Jl]:s.SRC_COLOR,[Vo]:s.SRC_ALPHA,[ic]:s.SRC_ALPHA_SATURATE,[tc]:s.DST_COLOR,[jl]:s.DST_ALPHA,[Ql]:s.ONE_MINUS_SRC_COLOR,[Wo]:s.ONE_MINUS_SRC_ALPHA,[nc]:s.ONE_MINUS_DST_COLOR,[ec]:s.ONE_MINUS_DST_ALPHA,[sc]:s.CONSTANT_COLOR,[ac]:s.ONE_MINUS_CONSTANT_COLOR,[rc]:s.CONSTANT_ALPHA,[oc]:s.ONE_MINUS_CONSTANT_ALPHA};function At(C,K,W,ce,se,oe,Ae,Be,ie,we){if(C===mi){f===!0&&(Ue(s.BLEND),f=!1);return}if(f===!1&&(_e(s.BLEND),f=!0),C!==Wl){if(C!==u||we!==R){if((_!==pi||A!==pi)&&(s.blendEquation(s.FUNC_ADD),_=pi,A=pi),we)switch(C){case Ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Br:s.blendFunc(s.ONE,s.ONE);break;case Gr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kr:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ze("WebGLState: Invalid blending: ",C);break}else switch(C){case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Br:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Gr:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kr:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",C);break}M=null,E=null,T=null,d=null,v.set(0,0,0),L=0,u=C,R=we}return}se=se||K,oe=oe||W,Ae=Ae||ce,(K!==_||se!==A)&&(s.blendEquationSeparate(tt[K],tt[se]),_=K,A=se),(W!==M||ce!==E||oe!==T||Ae!==d)&&(s.blendFuncSeparate(Ve[W],Ve[ce],Ve[oe],Ve[Ae]),M=W,E=ce,T=oe,d=Ae),(Be.equals(v)===!1||ie!==L)&&(s.blendColor(Be.r,Be.g,Be.b,ie),v.copy(Be),L=ie),u=C,R=!1}function mt(C,K){C.side===Vt?Ue(s.CULL_FACE):_e(s.CULL_FACE);let W=C.side===kt;K&&(W=!W),Bt(W),C.blending===Ii&&C.transparent===!1?At(mi):At(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),a.setMask(C.colorWrite);const ce=C.stencilWrite;o.setTest(ce),ce&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),xt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(C){P!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),P=C)}function lt(C){C!==Hl?(_e(s.CULL_FACE),C!==N&&(C===Or?s.cullFace(s.BACK):C===zl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),N=C}function rn(C){C!==z&&(k&&s.lineWidth(C),z=C)}function xt(C,K,W){C?(_e(s.POLYGON_OFFSET_FILL),(I!==K||H!==W)&&(I=K,H=W,r.getReversed()&&(K=-K,W=-W),s.polygonOffset(K,W))):Ue(s.POLYGON_OFFSET_FILL)}function Xt(C){C?_e(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function $t(C){C===void 0&&(C=s.TEXTURE0+Z-1),j!==C&&(s.activeTexture(C),j=C)}function qt(C,K,W){W===void 0&&(j===null?W=s.TEXTURE0+Z-1:W=j);let ce=ee[W];ce===void 0&&(ce={type:void 0,texture:void 0},ee[W]=ce),(ce.type!==C||ce.texture!==K)&&(j!==W&&(s.activeTexture(W),j=W),s.bindTexture(C,K||Re[C]),ce.type=C,ce.texture=K)}function U(){const C=ee[j];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Yt(){try{s.compressedTexImage2D(...arguments)}catch(C){Ze("WebGLState:",C)}}function rt(){try{s.compressedTexImage3D(...arguments)}catch(C){Ze("WebGLState:",C)}}function ot(){try{s.texSubImage2D(...arguments)}catch(C){Ze("WebGLState:",C)}}function fe(){try{s.texSubImage3D(...arguments)}catch(C){Ze("WebGLState:",C)}}function gt(){try{s.compressedTexSubImage2D(...arguments)}catch(C){Ze("WebGLState:",C)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(C){Ze("WebGLState:",C)}}function Ie(){try{s.texStorage2D(...arguments)}catch(C){Ze("WebGLState:",C)}}function w(){try{s.texStorage3D(...arguments)}catch(C){Ze("WebGLState:",C)}}function S(){try{s.texImage2D(...arguments)}catch(C){Ze("WebGLState:",C)}}function B(){try{s.texImage3D(...arguments)}catch(C){Ze("WebGLState:",C)}}function te(C){return g[C]!==void 0?g[C]:s.getParameter(C)}function J(C,K){g[C]!==K&&(s.pixelStorei(C,K),g[C]=K)}function re(C){Y.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Y.copy(C))}function he(C){ge.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function $(C,K){let W=c.get(K);W===void 0&&(W=new WeakMap,c.set(K,W));let ce=W.get(C);ce===void 0&&(ce=s.getUniformBlockIndex(K,C.name),s.uniformBlockBinding(K,ce,ce),W.set(C,ce))}function q(C,K,W){const se=c.get(K).get(C);l[se]!==W&&(s.bindBufferBase(s.UNIFORM_BUFFER,se,W),l[se]=W)}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),p={},g={},j=null,ee={},h={},l={},m=new WeakMap,x=[],b=null,f=!1,u=null,_=null,M=null,E=null,A=null,T=null,d=null,v=new ke(0,0,0),L=0,R=!1,P=null,N=null,z=null,I=null,H=null,Y.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:_e,disable:Ue,bindFramebuffer:ut,drawBuffers:Pe,useProgram:Je,setBlending:At,setMaterial:mt,setFlipSided:Bt,setCullFace:lt,setLineWidth:rn,setPolygonOffset:xt,setScissorTest:Xt,activeTexture:$t,bindTexture:qt,unbindTexture:U,compressedTexImage2D:Yt,compressedTexImage3D:rt,texImage2D:S,texImage3D:B,pixelStorei:J,getParameter:te,updateUBOMapping:$,uniformBlockBinding:q,texStorage2D:Ie,texStorage3D:w,texSubImage2D:ot,texSubImage3D:fe,compressedTexSubImage2D:gt,compressedTexSubImage3D:Ce,scissor:re,viewport:he,reset:le}}function qp(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,p=new WeakMap,g=new Set;let h;const m=new WeakMap,x=new Set,b=new FinalizationRegistry(w=>x.delete(w));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(w,S){return f?new OffscreenCanvas(w,S):Ls("canvas")}function _(w,S,B){let te=1;const J=Ie(w);if((J.width>B||J.height>B)&&(te=B/Math.max(J.width,J.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(te*J.width),he=Math.floor(te*J.height);h===void 0&&(h=u(re,he));const $=S?u(re,he):h;return $.width=re,$.height=he,$.getContext("2d").drawImage(w,0,0,re,he),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+re+"x"+he+")."),$}else return"data"in w&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function M(w){return w.generateMipmaps}function E(w){s.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(w,S,B,te,J,re=!1){if(w!==null){if(s[w]!==void 0)return s[w];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he;te&&(he=e.get("EXT_texture_norm16"),he||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===s.RED&&(B===s.FLOAT&&($=s.R32F),B===s.HALF_FLOAT&&($=s.R16F),B===s.UNSIGNED_BYTE&&($=s.R8),B===s.UNSIGNED_SHORT&&he&&($=he.R16_EXT),B===s.SHORT&&he&&($=he.R16_SNORM_EXT)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.R8UI),B===s.UNSIGNED_SHORT&&($=s.R16UI),B===s.UNSIGNED_INT&&($=s.R32UI),B===s.BYTE&&($=s.R8I),B===s.SHORT&&($=s.R16I),B===s.INT&&($=s.R32I)),S===s.RG&&(B===s.FLOAT&&($=s.RG32F),B===s.HALF_FLOAT&&($=s.RG16F),B===s.UNSIGNED_BYTE&&($=s.RG8),B===s.UNSIGNED_SHORT&&he&&($=he.RG16_EXT),B===s.SHORT&&he&&($=he.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.RG8UI),B===s.UNSIGNED_SHORT&&($=s.RG16UI),B===s.UNSIGNED_INT&&($=s.RG32UI),B===s.BYTE&&($=s.RG8I),B===s.SHORT&&($=s.RG16I),B===s.INT&&($=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.RGB8UI),B===s.UNSIGNED_SHORT&&($=s.RGB16UI),B===s.UNSIGNED_INT&&($=s.RGB32UI),B===s.BYTE&&($=s.RGB8I),B===s.SHORT&&($=s.RGB16I),B===s.INT&&($=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.RGBA8UI),B===s.UNSIGNED_SHORT&&($=s.RGBA16UI),B===s.UNSIGNED_INT&&($=s.RGBA32UI),B===s.BYTE&&($=s.RGBA8I),B===s.SHORT&&($=s.RGBA16I),B===s.INT&&($=s.RGBA32I)),S===s.RGB&&(B===s.UNSIGNED_SHORT&&he&&($=he.RGB16_EXT),B===s.SHORT&&he&&($=he.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),S===s.RGBA){const q=re?Ps:$e.getTransfer(J);B===s.FLOAT&&($=s.RGBA32F),B===s.HALF_FLOAT&&($=s.RGBA16F),B===s.UNSIGNED_BYTE&&($=q===je?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&he&&($=he.RGBA16_EXT),B===s.SHORT&&he&&($=he.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function d(w,S){let B;return w?S===null||S===fn||S===vi?B=s.DEPTH24_STENCIL8:S===dn?B=s.DEPTH32F_STENCIL8:S===Oi&&(B=s.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fn||S===vi?B=s.DEPTH_COMPONENT24:S===dn?B=s.DEPTH_COMPONENT32F:S===Oi&&(B=s.DEPTH_COMPONENT16),B}function v(w,S){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pt&&w.minFilter!==Gt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function L(w){const S=new WeakRef(w);n.get(w).__ref=S,x.add(S),b.register(w,S,S)}function R(w){const S=n.get(w).__ref;S!==void 0&&(x.delete(S),b.unregister(S))}function P(w){z(w.target)}function N(w){I(w.target)}function z(w){w.removeEventListener("dispose",P),R(w),Z(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&g.delete(w)}function I(w){w.removeEventListener("dispose",N),R(w),ne(w)}function H(){for(const w of x){const S=w.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):z(S))}x.clear(),g.clear()}function Z(w){const S=n.get(w);if(S.__webglInit===void 0)return;const B=w.source,te=m.get(B);if(te){const J=te[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&k(w),Object.keys(te).length===0&&m.delete(B)}n.remove(w)}function k(w){const S=n.get(w);s.deleteTexture(S.__webglTexture);const B=w.source,te=m.get(B);delete te[S.__cacheKey],r.memory.textures--}function ne(w){const S=n.get(w);S.__depthDisposeCallback&&S.__depthDisposeCallback();const B=w.depthTexture;if(B&&B.renderTarget===w&&z(B),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let re=0;re<S.__webglFramebuffer[J].length;re++)s.deleteFramebuffer(S.__webglFramebuffer[J][re]);else s.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)s.deleteFramebuffer(S.__webglFramebuffer[J]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const te=w.textures;for(let J=0,re=te.length;J<re;J++){const he=n.get(te[J]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),r.memory.textures--),n.remove(te[J])}n.remove(w)}let X=0;function j(){X=0}function ee(){return X}function be(w){X=w}function De(){const w=X;return w>=i.maxTextures&&Le("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,w}function Y(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.mipmapsAutoUpdate),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function ge(w,S){const B=n.get(w);if(w.isVideoTexture&&gt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const te=w.image;if(te===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(B,w,S);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function Se(w,S){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){mt(B,w,S);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function Re(w,S){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){mt(B,w,S);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function _e(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){Bt(B,w,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const Ue={[ba]:s.REPEAT,[En]:s.CLAMP_TO_EDGE,[Ta]:s.MIRRORED_REPEAT},ut={[Pt]:s.NEAREST,[dc]:s.NEAREST_MIPMAP_NEAREST,[Yi]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[Vs]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},Pe={[pc]:s.NEVER,[cl]:s.ALWAYS,[mc]:s.LESS,[ol]:s.LEQUAL,[gc]:s.EQUAL,[ll]:s.GEQUAL,[_c]:s.GREATER,[vc]:s.NOTEQUAL};function Je(w,S){if(S.type===dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gt||S.magFilter===Vs||S.magFilter===Yi||S.magFilter===On||S.minFilter===Gt||S.minFilter===Vs||S.minFilter===Yi||S.minFilter===On)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,Ue[S.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Ue[S.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Ue[S.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ut[S.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pt||S.minFilter!==Yi&&S.minFilter!==On||S.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function tt(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",P),L(S));const te=S.source;let J=m.get(te);J===void 0&&(J={},m.set(te,J));const re=Y(S);if(re!==w.__cacheKey){J[re]===void 0&&(J[re]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,B=!0),J[re].usedTimes++;const he=J[w.__cacheKey];he!==void 0&&(J[w.__cacheKey].usedTimes--,he.usedTimes===0&&k(S)),w.__cacheKey=re,w.__webglTexture=J[re].texture}return B}function Ve(w,S,B){return Math.floor(Math.floor(w/B)/S)}function At(w,S,B,te){const re=w.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,B,te,S.data);else{re.sort((C,K)=>C.start-K.start);let he=0;for(let C=1;C<re.length;C++){const K=re[he],W=re[C],ce=K.start+K.count,se=Ve(W.start,S.width,4),oe=Ve(K.start,S.width,4);W.start<=ce+1&&se===oe&&Ve(W.start+W.count-1,S.width,4)===se?K.count=Math.max(K.count,W.start+W.count-K.start):(++he,re[he]=W)}re.length=he+1;const $=t.getParameter(s.UNPACK_ROW_LENGTH),q=t.getParameter(s.UNPACK_SKIP_PIXELS),le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let C=0,K=re.length;C<K;C++){const W=re[C],ce=Math.floor(W.start/4),se=Math.ceil(W.count/4),oe=ce%S.width,Ae=Math.floor(ce/S.width),Be=se,ie=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(s.TEXTURE_2D,0,oe,Ae,Be,ie,B,te,S.data)}w.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,q),t.pixelStorei(s.UNPACK_SKIP_ROWS,le)}}function mt(w,S,B){let te=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=s.TEXTURE_3D);const J=tt(w,S),re=S.source;t.bindTexture(te,w.__webglTexture,s.TEXTURE0+B);const he=n.get(re);if(re.version!==he.__version||J===!0){if(t.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ie=$e.getPrimaries($e.workingColorSpace),we=S.colorSpace===Fn?null:$e.getPrimaries(S.colorSpace),Oe=S.colorSpace===Fn||ie===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let q=_(S.image,!1,i.maxTextureSize);q=Ce(S,q);const le=a.convert(S.format,S.colorSpace),C=a.convert(S.type);let K=T(S.internalFormat,le,C,S.normalized,S.colorSpace,S.isVideoTexture);Je(te,S);let W;const ce=S.mipmaps,se=S.isVideoTexture!==!0,oe=he.__version===void 0||J===!0,Ae=re.dataReady,Be=v(S,q);if(S.isDepthTexture)K=d(S.format===Bn,S.type),oe&&(se?t.texStorage2D(s.TEXTURE_2D,1,K,q.width,q.height):t.texImage2D(s.TEXTURE_2D,0,K,q.width,q.height,0,le,C,null));else if(S.isDataTexture)if(ce.length>0){se&&oe&&t.texStorage2D(s.TEXTURE_2D,Be,K,ce[0].width,ce[0].height);for(let ie=0,we=ce.length;ie<we;ie++)W=ce[ie],se?Ae&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,W.width,W.height,le,C,W.data):t.texImage2D(s.TEXTURE_2D,ie,K,W.width,W.height,0,le,C,W.data);S.generateMipmaps=!1}else se?(oe&&t.texStorage2D(s.TEXTURE_2D,Be,K,q.width,q.height),Ae&&At(S,q,le,C)):t.texImage2D(s.TEXTURE_2D,0,K,q.width,q.height,0,le,C,q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){se&&oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,K,ce[0].width,ce[0].height,q.depth);for(let ie=0,we=ce.length;ie<we;ie++)if(W=ce[ie],S.format!==hn)if(le!==null)if(se){if(Ae)if(S.layerUpdates.size>0){const Oe=Mo(W.width,W.height,S.format,S.type);for(const pe of S.layerUpdates){const Qe=W.data.subarray(pe*Oe/W.data.BYTES_PER_ELEMENT,(pe+1)*Oe/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,pe,W.width,W.height,1,le,Qe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,W.width,W.height,q.depth,le,W.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,K,W.width,W.height,q.depth,0,W.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,W.width,W.height,q.depth,le,C,W.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,K,W.width,W.height,q.depth,0,le,C,W.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{se&&oe&&t.texStorage2D(s.TEXTURE_2D,Be,K,ce[0].width,ce[0].height);for(let ie=0,we=ce.length;ie<we;ie++)W=ce[ie],S.format!==hn?le!==null?se?Ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,W.width,W.height,le,W.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,K,W.width,W.height,0,W.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ae&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,W.width,W.height,le,C,W.data):t.texImage2D(s.TEXTURE_2D,ie,K,W.width,W.height,0,le,C,W.data)}else if(S.isDataArrayTexture)if(se){if(oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,K,q.width,q.height,q.depth),Ae)if(S.layerUpdates.size>0){const ie=Mo(q.width,q.height,S.format,S.type);for(const we of S.layerUpdates){const Oe=q.data.subarray(we*ie/q.data.BYTES_PER_ELEMENT,(we+1)*ie/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,q.width,q.height,1,le,C,Oe)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,le,C,q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,K,q.width,q.height,q.depth,0,le,C,q.data);else if(S.isData3DTexture)se?(oe&&t.texStorage3D(s.TEXTURE_3D,Be,K,q.width,q.height,q.depth),Ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,le,C,q.data)):t.texImage3D(s.TEXTURE_3D,0,K,q.width,q.height,q.depth,0,le,C,q.data);else if(S.isFramebufferTexture){if(oe)if(se)t.texStorage2D(s.TEXTURE_2D,Be,K,q.width,q.height);else{let ie=q.width,we=q.height;for(let Oe=0;Oe<Be;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,K,ie,we,0,le,C,null),ie>>=1,we>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const ie=s.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),q.parentNode!==ie){ie.appendChild(q),g.add(S),ie.onpaint=we=>{const Oe=we.changedElements;for(const pe of g)Oe.includes(pe.image)&&(pe.needsUpdate=!0)},ie.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,q);else{const Oe=s.RGBA,pe=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Oe,pe,Qe,q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ce.length>0){if(se&&oe){const ie=Ie(ce[0]);t.texStorage2D(s.TEXTURE_2D,Be,K,ie.width,ie.height)}for(let ie=0,we=ce.length;ie<we;ie++)W=ce[ie],se?Ae&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,le,C,W):t.texImage2D(s.TEXTURE_2D,ie,K,le,C,W);S.generateMipmaps=!1}else if(se){if(oe){const ie=Ie(q);t.texStorage2D(s.TEXTURE_2D,Be,K,ie.width,ie.height)}Ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,C,q)}else t.texImage2D(s.TEXTURE_2D,0,K,le,C,q);M(S)&&S.mipmapsAutoUpdate===!0&&E(te),he.__version=re.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Bt(w,S,B){if(S.image.length!==6)return;const te=tt(w,S),J=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);const re=n.get(J);if(J.version!==re.__version||te===!0){t.activeTexture(s.TEXTURE0+B);const he=$e.getPrimaries($e.workingColorSpace),$=S.colorSpace===Fn?null:$e.getPrimaries(S.colorSpace),q=S.colorSpace===Fn||he===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const le=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,K=[];for(let pe=0;pe<6;pe++)!le&&!C?K[pe]=_(S.image[pe],!0,i.maxCubemapSize):K[pe]=C?S.image[pe].image:S.image[pe],K[pe]=Ce(S,K[pe]);const W=K[0],ce=a.convert(S.format,S.colorSpace),se=a.convert(S.type);let oe=T(S.internalFormat,ce,se,S.normalized,S.colorSpace);const Ae=S.isVideoTexture!==!0,Be=re.__version===void 0||te===!0,ie=J.dataReady;let we=v(S,W);Je(s.TEXTURE_CUBE_MAP,S);let Oe;if(S.isDepthTexture){if(oe=d(S.format===Bn,S.type),Be)if(Ae)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,oe,W.width,W.height);else for(let pe=0;pe<6;pe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,W.width,W.height,0,ce,se,null)}else if(le){Ae&&Be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,we,oe,W.width,W.height);for(let pe=0;pe<6;pe++){Oe=K[pe].mipmaps;for(let Qe=0;Qe<Oe.length;Qe++){const Mt=Oe[Qe];S.format!==hn?ce!==null?Ae?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe,0,0,Mt.width,Mt.height,ce,Mt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe,oe,Mt.width,Mt.height,0,Mt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe,0,0,Mt.width,Mt.height,ce,se,Mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe,oe,Mt.width,Mt.height,0,ce,se,Mt.data)}}}else{if(Oe=S.mipmaps,Ae&&Be){Oe.length>0&&we++;const pe=Ie(K[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,we,oe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(C){Ae?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,K[pe].width,K[pe].height,ce,se,K[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,K[pe].width,K[pe].height,0,ce,se,K[pe].data);for(let Qe=0;Qe<Oe.length;Qe++){const wn=Oe[Qe].image[pe].image;Ae?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe+1,0,0,wn.width,wn.height,ce,se,wn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe+1,oe,wn.width,wn.height,0,ce,se,wn.data)}}else{Ae?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce,se,K[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,ce,se,K[pe]);for(let Qe=0;Qe<Oe.length;Qe++){const Mt=Oe[Qe];Ae?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe+1,0,0,ce,se,Mt.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Qe+1,oe,ce,se,Mt.image[pe])}}}M(S)&&S.mipmapsAutoUpdate===!0&&E(s.TEXTURE_CUBE_MAP),re.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function lt(w,S,B,te,J,re){const he=a.convert(B.format,B.colorSpace),$=a.convert(B.type),q=T(B.internalFormat,he,$,B.normalized,B.colorSpace),le=n.get(S),C=n.get(B);if(C.__renderTarget=S,!le.__hasExternalTextures){const K=Math.max(1,S.width>>re),W=Math.max(1,S.height>>re);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,re,q,K,W,S.depth,0,he,$,null):t.texImage2D(J,re,q,K,W,0,he,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),fe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,J,C.__webglTexture,0,ot(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,J,C.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function rn(w,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),S.depthBuffer){const te=S.depthTexture,J=te&&te.isDepthTexture?te.type:null,re=d(S.stencilBuffer,J),he=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;fe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(S),re,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(S),re,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,re,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,w)}else{const te=S.textures;for(let J=0;J<te.length;J++){const re=te[J],he=a.convert(re.format,re.colorSpace),$=a.convert(re.type),q=T(re.internalFormat,he,$,re.normalized,re.colorSpace);fe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(S),q,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(S),q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(w,S,B){const te=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(S.depthTexture);J.__renderTarget=S;const re=te?S.depthTexture.image[0]:S.depthTexture.image;(!J.__webglTexture||re.width!==S.width||re.height!==S.height)&&(re.width=S.width,re.height=S.height,S.depthTexture.needsUpdate=!0),te?_e(S.depthTexture,0):ge(S.depthTexture,0);const he=J.__webglTexture,$=ot(S),q=te?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,le=S.depthTexture.format===Bn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===Hn)fe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,q,he,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,le,q,he,0);else if(S.depthTexture.format===Bn)fe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,q,he,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,le,q,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(w){const S=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const te=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",J)};te.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=te}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let te=0;te<6;te++)xt(S.__webglFramebuffer[te],w,te);else w.texture.mipmaps.length>0?xt(S.__webglFramebuffer[0],w,0):xt(S.__webglFramebuffer,w,0);else if(B){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=s.createRenderbuffer(),rn(S.__webglDepthbuffer[te],w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,re)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),rn(S.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(w,S,B){const te=n.get(w);S!==void 0&&lt(te.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Xt(w)}function qt(w){const S=w.texture,B=n.get(w),te=n.get(S);w.addEventListener("dispose",N),L(w);const J=w.textures,re=w.isWebGLCubeRenderTarget===!0,he=J.length>1;if(he||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=S.version,r.memory.textures++),re){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let q=0;q<S.mipmaps.length;q++)B.__webglFramebuffer[$][q]=s.createFramebuffer()}else B.__webglFramebuffer[$]=s.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)B.__webglFramebuffer[$]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(he)for(let $=0,q=J.length;$<q;$++){const le=n.get(J[$]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),r.memory.textures++)}if(w.samples>0&&fe(w)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){const q=J[$];B.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[$]);const le=a.convert(q.format,q.colorSpace),C=a.convert(q.type),K=T(q.internalFormat,le,C,q.normalized,q.colorSpace,w.isXRRenderTarget===!0),W=ot(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,W,K,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,B.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),rn(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),Je(s.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps.length>0)for(let q=0;q<S.mipmaps.length;q++)lt(B.__webglFramebuffer[$][q],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,q);else lt(B.__webglFramebuffer[$],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);M(S)?E(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(he){for(let $=0,q=J.length;$<q;$++){const le=J[$],C=n.get(le);let K=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,C.__webglTexture),Je(K,le),lt(B.__webglFramebuffer,w,le,s.COLOR_ATTACHMENT0+$,K,0),M(le)&&E(K)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,te.__webglTexture),Je($,S),S.mipmaps.length>0)for(let q=0;q<S.mipmaps.length;q++)lt(B.__webglFramebuffer[q],w,S,s.COLOR_ATTACHMENT0,$,q);else lt(B.__webglFramebuffer,w,S,s.COLOR_ATTACHMENT0,$,0);M(S)?E($):S.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Xt(w)}function U(w){const S=w.textures;for(let B=0,te=S.length;B<te;B++){const J=S[B];if(M(J)&&J.mipmapsAutoUpdate===!0){const re=A(w),he=n.get(J).__webglTexture;t.bindTexture(re,he),E(re),t.unbindTexture()}}}const Yt=[];function rt(w){if(w.samples>0){if(fe(w)===!1){const S=w.textures,B=w.width,te=w.height;let J=s.COLOR_BUFFER_BIT;const re=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(w),$=S.length>1;if($)for(let le=0;le<S.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let le=0;le<S.length;le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[le]);const C=n.get(S[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,B,te,0,0,B,te,J,s.NEAREST),l===!0&&(Yt.length=0,Yt.push(s.COLOR_ATTACHMENT0+le),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Yt.push(re),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<S.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,he.__webglColorRenderbuffer[le]);const C=n.get(S[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,C,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const S=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ot(w){return Math.min(i.maxSamples,w.samples)}function fe(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(w){const S=r.render.frame;p.get(w)!==S&&(p.set(w,S),w.update())}function Ce(w,S){const B=w.colorSpace,te=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Cs&&B!==Fn&&($e.getTransfer(B)===je?(te!==hn||J!==Wt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",B)),S}function Ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=j,this.getTextureUnits=ee,this.setTextureUnits=be,this.setTexture2D=ge,this.setTexture2DArray=Se,this.setTexture3D=Re,this.setTextureCube=_e,this.rebindTextures=$t,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=fe,this.dispose=H}function Yp(s,e){function t(n,i=Fn){let a;const r=$e.getTransfer(i);if(n===Wt)return s.UNSIGNED_BYTE;if(n===dr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===hr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===il)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===el)return s.BYTE;if(n===tl)return s.SHORT;if(n===Oi)return s.UNSIGNED_SHORT;if(n===cr)return s.INT;if(n===fn)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===pn)return s.HALF_FLOAT;if(n===sl)return s.ALPHA;if(n===al)return s.RGB;if(n===hn)return s.RGBA;if(n===Hn)return s.DEPTH_COMPONENT;if(n===Bn)return s.DEPTH_STENCIL;if(n===rl)return s.RED;if(n===ur)return s.RED_INTEGER;if(n===Jn)return s.RG;if(n===fr)return s.RG_INTEGER;if(n===pr)return s.RGBA_INTEGER;if(n===Ss||n===ys||n===Es||n===bs)if(r===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ss)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ss)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===wa||n===Ra||n===Ca)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Aa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Ia||n===Da||n===Na||n===ws||n===Ua)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Pa||n===La)return r===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ia)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return a.COMPRESSED_R11_EAC;if(n===Na)return a.COMPRESSED_SIGNED_R11_EAC;if(n===ws)return a.COMPRESSED_RG11_EAC;if(n===Ua)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===Ga||n===ka||n===Ha||n===za||n===Va||n===Wa||n===Xa||n===$a||n===qa||n===Ya||n===Ka)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Fa)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return r===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===Ja||n===Qa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Za)return r===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ja||n===er||n===Rs||n===tr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ja)return a.COMPRESSED_RED_RGTC1_EXT;if(n===er)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zp=`
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

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:Kp,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qp extends jn{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,p=null,g=null,h=null,m=null,x=null;const b=typeof XRWebGLBinding<"u",f=new Jp,u={},_=t.getContextAttributes();let M=null,E=null;const A=[],T=[],d=new ze;let v=null,L=null;const R=new Jt;R.viewport=new ht;const P=new Jt;P.viewport=new ht;const N=[R,P],z=new cd;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ge=A[Y];return ge===void 0&&(ge=new Qs,A[Y]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Y){let ge=A[Y];return ge===void 0&&(ge=new Qs,A[Y]=ge),ge.getGripSpace()},this.getHand=function(Y){let ge=A[Y];return ge===void 0&&(ge=new Qs,A[Y]=ge),ge.getHandSpace()};function Z(Y){const ge=T.indexOf(Y.inputSource);if(ge===-1)return;const Se=A[ge];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,c||r),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<A.length;Y++){const ge=T[Y];ge!==null&&(T[Y]=null,A[Y].disconnect(ge))}I=null,H=null,f.reset();for(const Y in u)delete u[Y];if(e.setRenderTarget(M),m=null,h=null,g=null,i=null,E=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(d.width,d.height,!1),L!==null){const Y=L.camera;Y.fov=L.fov,Y.zoom=L.zoom,Y.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(i,t)),g},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",k),i.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(d),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Re=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=_.stencil?Bn:Hn,Re=_.stencil?vi:fn);const Ue={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};g=this.getBinding(),h=g.createProjectionLayer(Ue),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new un(h.textureWidth,h.textureHeight,{format:hn,type:Wt,depthTexture:new xi(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new un(m.framebufferWidth,m.framebufferHeight,{format:hn,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),De.setContext(i),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(Y){for(let ge=0;ge<Y.removed.length;ge++){const Se=Y.removed[ge],Re=T.indexOf(Se);Re>=0&&(T[Re]=null,A[Re].disconnect(Se))}for(let ge=0;ge<Y.added.length;ge++){const Se=Y.added[ge];let Re=T.indexOf(Se);if(Re===-1){for(let Ue=0;Ue<A.length;Ue++)if(Ue>=T.length){T.push(Se),Re=Ue;break}else if(T[Ue]===null){T[Ue]=Se,Re=Ue;break}if(Re===-1)break}const _e=A[Re];_e&&_e.connect(Se)}}function X(Y,ge){ge===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ge.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ge=Y.near,Se=Y.far;f.texture!==null&&(f.depthNear>0&&(ge=f.depthNear),f.depthFar>0&&(Se=f.depthFar)),z.near=P.near=R.near=ge,z.far=P.far=R.far=Se,(I!==z.near||H!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,H=z.far),z.layers.mask=Y.layers.mask|6,R.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;const Re=Y.parent,_e=z.cameras;X(z,Re);for(let Ue=0;Ue<_e.length;Ue++)X(_e[Ue],Re);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&Y.isPerspectiveCamera&&(L={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,z,Re)};function j(Y,ge,Se){Se===null?Y.matrix.copy(ge.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ge.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ge.projectionMatrix),Y.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ir*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(z)},this.getCameraTexture=function(Y){return u[Y]};let ee=null;function be(Y,ge){if(p=ge.getViewerPose(c||r),x=ge,p!==null){const Se=p.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Re=!1;Se.length!==z.cameras.length&&(z.cameras.length=0,Re=!0);for(let Pe=0;Pe<Se.length;Pe++){const Je=Se[Pe];let tt=null;if(m!==null)tt=m.getViewport(Je);else{const At=g.getViewSubImage(h,Je);tt=At.viewport,Pe===0&&(e.setRenderTargetTextures(E,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(E))}let Ve=N[Pe];Ve===void 0&&(Ve=new Jt,Ve.layers.enable(Pe),Ve.viewport=new ht,N[Pe]=Ve),Ve.matrix.fromArray(Je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(tt.x,tt.y,tt.width,tt.height),Pe===0&&(z.matrix.copy(Ve.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Re===!0&&z.cameras.push(Ve)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){g=n.getBinding();const Pe=g.getDepthInformation(Se[0]);Pe&&Pe.isValid&&Pe.texture&&f.init(Pe,i.renderState)}if(_e&&_e.includes("camera-access")&&b){e.state.unbindTexture(),g=n.getBinding();for(let Pe=0;Pe<Se.length;Pe++){const Je=Se[Pe].camera;if(Je){let tt=u[Je];tt||(tt=new xl,u[Je]=tt);const Ve=g.getCameraImage(Je);tt.sourceTexture=Ve}}}}for(let Se=0;Se<A.length;Se++){const Re=T[Se],_e=A[Se];Re!==null&&_e!==void 0&&_e.update(Re,ge,c||r)}ee&&ee(Y,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),x=null}const De=new bl;De.setAnimationLoop(be),this.setAnimationLoop=function(Y){ee=Y},this.dispose=function(){}}}const jp=new at,Nl=new Fe;Nl.set(-1,0,0,0,1,0,0,0,1);function em(s,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Ml(s)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function i(f,u,_,M,E){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?a(f,u):u.isMeshLambertMaterial?(a(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(a(f,u),g(f,u)):u.isMeshPhongMaterial?(a(f,u),p(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(a(f,u),h(f,u),u.isMeshPhysicalMaterial&&m(f,u,E)):u.isMeshMatcapMaterial?(a(f,u),x(f,u)):u.isMeshDepthMaterial?a(f,u):u.isMeshDistanceMaterial?(a(f,u),b(f,u)):u.isMeshNormalMaterial?a(f,u):u.isLineBasicMaterial?(r(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,_,M):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===kt&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===kt&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const _=e.get(u),M=_.envMap,E=_.envMapRotation;M&&(f.envMap.value=M,f.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(E)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Nl),f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function r(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,_,M){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*_,f.scale.value=M*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function p(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function g(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function h(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,_){f.ior.value=u.ior,u.diffuseRoughness>0&&(f.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===kt&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.retroreflectivity>0&&(f.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,u){u.matcap&&(f.matcap.value=u.matcap)}function b(f,u){const _=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tm(s,e,t,n){let i={},a={};function r(_,M){const E=M.program;n.uniformBlockBinding(_,E,i[_.id])}function o(_,M){let E=i[_.id];E===void 0&&(x(_),E=l(_),i[_.id]=E,_.addEventListener("dispose",f));const A=M.program;n.updateUBOMapping(_,A);const T=e.render.frame;a[_.id]!==T&&(c(_),a[_.id]=T)}function l(_){const M=s.createBuffer(),E=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(_){const M=i[_.id],E=_.uniforms,A=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let T=0,d=E.length;T<d;T++){const v=E[T];if(Array.isArray(v))for(let L=0,R=v.length;L<R;L++)p(v[L],T,L,A);else p(v,T,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,M,E,A){if(h(_,M,E,A)===!0){const T=_.__offset,d=_.value;if(Array.isArray(d)){let v=0;for(let L=0;L<d.length;L++){const R=d[L],P=b(R,!0);g(R,_.__data,v),v+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else g(d,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,_.__data)}}function g(_,M,E){typeof _=="number"||typeof _=="boolean"?M[E]=_:_.isMatrix3?(M[E]=_.elements[0],M[E+1]=_.elements[1],M[E+2]=_.elements[2],M[E+3]=0,M[E+4]=_.elements[3],M[E+5]=_.elements[4],M[E+6]=_.elements[5],M[E+7]=0,M[E+8]=_.elements[6],M[E+9]=_.elements[7],M[E+10]=_.elements[8],M[E+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-E),E):_.toArray(M,E)}function h(_,M,E,A){const T=_.value,d=M+"_"+E;if(Array.isArray(T)){A[d]===void 0&&(A[d]=[]);const v=A[d];let L=!1;for(let R=0;R<T.length;R++)m(T[R],v,R)===!0&&(L=!0);return L}return m(T,A,d)}function m(_,M,E){if(M[E]===void 0)return typeof _=="number"||typeof _=="boolean"?M[E]=_:ArrayBuffer.isView(_)?M[E]=_.slice():M[E]=_.clone(),!0;{const A=M[E];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return M[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function x(_){const M=_.uniforms;let E=0;const A=16;for(let d=0,v=M.length;d<v;d++){const L=Array.isArray(M[d])?M[d]:[M[d]];for(let R=0,P=L.length;R<P;R++){const N=L[R],z=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(M[d])||Array.isArray(N.value);let H=E;for(let k=0,ne=z.length;k<ne;k++){const X=z[k],j=b(X,I),ee=E%A,be=ee%j.boundary,De=ee+be;E+=be,De!==0&&A-De<j.storage&&(E+=A-De),k===0&&(H=E),E+=j.storage}const Z=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new Z((E-H)/Float32Array.BYTES_PER_ELEMENT),N.__offset=H}}const T=E%A;return T>0&&(E+=A-T),_.__size=E,_.__cache={},this}function b(_,M){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=16,E.storage=48):_.isMatrix4?(E.boundary=16,E.storage=64):_.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function f(_){const M=_.target;M.removeEventListener("dispose",f),s.deleteBuffer(i[M.id]),delete i[M.id],delete a[M.id]}function u(){for(const _ in i)s.deleteBuffer(i[_]);i={},a={}}return{bind:r,update:o,dispose:u}}const nm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ln=null;function im(){return ln===null&&(ln=new Kc(nm,16,16,Jn,pn),ln.name="DFG_LUT",ln.minFilter=Gt,ln.magFilter=Gt,ln.wrapS=En,ln.wrapT=En,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}class sm{constructor(e={}){const{canvas:t=Sc(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Wt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=r;const b=m,f=new Set([pr,fr,ur]),u=new Set([Wt,fn,Oi,vi,dr,hr]),_=new Uint32Array(4),M=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const d=[],v=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,N=null,z=null,I=null,H=null;this._outputColorSpace=Zt;let Z=0,k=0,ne=null,X=-1,j=null;const ee=new ht,be=new ht;let De=null;const Y=new ke(0);let ge=0,Se=t.width,Re=t.height,_e=1,Ue=null,ut=null;const Pe=new ht(0,0,Se,Re),Je=new ht(0,0,Se,Re);let tt=!1;const Ve=new Gi,At=new xr;let mt=!1,Bt=!1;const lt=new at,rn=new F,xt=new ht,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function qt(){return ne===null?_e:1}let U=n;function Yt(y,D){return t.getContext(y,D)}let rt,ot,fe,gt,Ce,Ie,w,S,B,te,J,re,he,$,q,le,C,K,W,ce,se,oe,Ae;try{const y={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lr}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){const D="webgl2";if(U=Yt(D,y),U===null)throw Yt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(y){throw t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ze("WebGLRenderer: "+y.message),y}function Be(){rt=new of(U),rt.init(),se=new Yp(U,rt),ot=new Ku(U,rt,e,se),fe=new $p(U,rt),ot.reversedDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),z=U.createFramebuffer(),I=U.createFramebuffer(),H=U.createFramebuffer(),gt=new df(U),Ce=new Ip,Ie=new qp(U,rt,fe,Ce,ot,se,gt),w=new rf(R),S=new hd(U),oe=new qu(U,S),B=new lf(U,S,gt,oe),te=new uf(U,B,S,oe,gt),K=new hf(U,ot,Ie),q=new Zu(Ce),J=new Lp(R,w,rt,ot,oe,q),re=new em(R,Ce),he=new Np,$=new kp(rt),C=new $u(R,w,fe,te,x,l),le=new Xp(R,te,ot),Ae=new tm(U,gt,ot,fe),W=new Yu(U,rt,gt),ce=new cf(U,rt,gt),gt.programs=J.programs,R.capabilities=ot,R.extensions=rt,R.properties=Ce,R.renderLists=he,R.shadowMap=le,R.state=fe,R.info=gt}b!==Wt&&(L=new pf(b,t.width,t.height,o,i,a));const ie=new Qp(R,U);this.xr=ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=rt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=rt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(y){y!==void 0&&(_e=y,this.setSize(Se,Re,!1))},this.getSize=function(y){return y.set(Se,Re)},this.setSize=function(y,D,V=!0){if(ie.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=y,Re=D,t.width=Math.floor(y*_e),t.height=Math.floor(D*_e),V===!0&&(t.style.width=y+"px",t.style.height=D+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(Se*_e,Re*_e).floor()},this.setDrawingBufferSize=function(y,D,V){Se=y,Re=D,_e=V,t.width=Math.floor(y*V),t.height=Math.floor(D*V),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(b===Wt){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ee)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,D,V,O){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,D,V,O),fe.viewport(ee.copy(Pe).multiplyScalar(qt()).round())},this.getScissor=function(y){return y.copy(Je)},this.setScissor=function(y,D,V,O){y.isVector4?Je.set(y.x,y.y,y.z,y.w):Je.set(y,D,V,O),fe.scissor(be.copy(Je).multiplyScalar(qt()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(y){fe.setScissorTest(tt=y)},this.setOpaqueSort=function(y){Ue=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,V=!0){let O=0;if(y){let G=!1;if(ne!==null){const ue=ne.texture.format;G=f.has(ue)}if(G){const ue=ne.texture.type,xe=u.has(ue),de=C.getClearColor(),ve=C.getClearAlpha(),Te=de.r,Ne=de.g,We=de.b;xe?(_[0]=Te,_[1]=Ne,_[2]=We,_[3]=ve,U.clearBufferuiv(U.COLOR,0,_)):(M[0]=Te,M[1]=Ne,M[2]=We,M[3]=ve,U.clearBufferiv(U.COLOR,0,M))}else O|=U.COLOR_BUFFER_BIT}D&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),C.dispose(),he.dispose(),$.dispose(),Ie.dispose(),Ce.dispose(),w.dispose(),te.dispose(),B.dispose(),oe.dispose(),Ae.dispose(),J.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ar),ie.removeEventListener("sessionend",wr),Vn.stop()};function we(y){y.preventDefault(),Vr("WebGLRenderer: Context Lost."),P=!0}function Oe(){Vr("WebGLRenderer: Context Restored."),P=!1;const y=gt.autoReset,D=le.enabled,V=le.autoUpdate,O=le.needsUpdate,G=le.type;Be(),gt.autoReset=y,le.enabled=D,le.autoUpdate=V,le.needsUpdate=O,le.type=G}function pe(y){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Qe(y){const D=y.target;D.removeEventListener("dispose",Qe),Mt(D)}function Mt(y){wn(y),Ce.remove(y)}function wn(y){const D=Ce.get(y).programs;D!==void 0&&(D.forEach(function(V){J.releaseProgram(V)}),y.isShaderMaterial&&J.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,V,O,G,ue){D===null&&(D=Xt);const xe=G.isMesh&&G.matrixWorld.determinantAffine()<0,de=Bl(y,D,V,O,G);fe.setMaterial(O,xe);let ve=V.index,Te=1;if(O.wireframe===!0){if(ve=B.getWireframeAttribute(V),ve===void 0)return;Te=2}const Ne=V.drawRange,We=V.attributes.position;let ye=Ne.start*Te,Xe=(Ne.start+Ne.count)*Te;ue!==null&&(ye=Math.max(ye,ue.start*Te),Xe=Math.min(Xe,(ue.start+ue.count)*Te)),ve!==null?(ye=Math.max(ye,0),Xe=Math.min(Xe,ve.count)):We!=null&&(ye=Math.max(ye,0),Xe=Math.min(Xe,We.count));const ft=Xe-ye;if(ft<0||ft===1/0)return;oe.setup(G,O,de,V,ve);let it,nt=W;if(ve!==null&&(it=S.get(ve),nt=ce,nt.setIndex(it)),G.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*qt()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(G.isLine){let Lt=O.linewidth;Lt===void 0&&(Lt=1),fe.setLineWidth(Lt*qt()),G.isLineSegments?nt.setMode(U.LINES):G.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else G.isPoints?nt.setMode(U.POINTS):G.isSprite&&nt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,Ee=G._multiDrawCounts,Ut=G._multiDrawCount,Ke=ve?S.get(ve).bytesPerElement:1,Wn=Ce.get(O).currentProgram.getUniforms();for(let It=0;It<Ut;It++)Wn.setValue(U,"_gl_DrawID",It),nt.render(Lt[It]/Ke,Ee[It])}else if(G.isInstancedMesh)nt.renderInstances(ye,ft,G.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ee=Math.min(V.instanceCount,Lt);nt.renderInstances(ye,ft,Ee)}else nt.render(ye,ft)};function Tr(y,D,V,O){N!==null&&y.isNodeMaterial&&N.setObject(O,y),mt===!0&&q.setState(y,V,!1),y.transparent===!0&&y.side===Vt&&y.forceSinglePass===!1?(y.side=kt,y.needsUpdate=!0,Ei(y,D,O),y.side=Zn,y.needsUpdate=!0,Ei(y,D,O),y.side=Vt):Ei(y,D,O)}this.compile=function(y,D,V=null){V===null&&(V=y),N!==null&&N.renderStart(y,D,V),T=$.get(V),T.init(D),v.push(T),V.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),y!==V&&y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Bt=this.localClippingEnabled,mt=q.init(this.clippingPlanes,Bt),mt===!0&&q.setGlobalState(this.clippingPlanes,D),N!==null&&le.render(T.state.shadowsArray,V,D);const O=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const de=ue[xe];Tr(de,V,D,G),O.add(de)}else Tr(ue,V,D,G),O.add(ue)}),T=v.pop(),N!==null&&N.renderEnd(),O},this.compileAsync=function(y,D,V=null){const O=this.compile(y,D,V);return new Promise(G=>{function ue(){if(O.forEach(function(xe){const ve=Ce.get(xe).currentProgram;(ve===void 0||ve.isReady())&&O.delete(xe)}),O.size===0){G(y);return}setTimeout(ue,10)}rt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Bs=null;function Fl(y){Bs&&Bs(y)}function Ar(){Vn.stop()}function wr(){Vn.start()}const Vn=new bl;Vn.setAnimationLoop(Fl),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(y){Bs=y,ie.setAnimationLoop(y),y===null?Vn.stop():Vn.start()},ie.addEventListener("sessionstart",Ar),ie.addEventListener("sessionend",wr),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(y,D);const V=ie.enabled===!0&&ie.isPresenting===!0,O=L!==null&&(ne===null||V)&&L.begin(R,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(D),D=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,D,ne),T=$.get(y,v.length),T.init(D),T.state.textureUnits=Ie.getTextureUnits(),v.push(T),lt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?At.setFromArrayCamera(D):Ve.setFromProjectionMatrix(lt,an,D.reversedDepth),Bt=this.localClippingEnabled,mt=q.init(this.clippingPlanes,Bt),A=he.get(y,d.length),A.init(),d.push(A),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){const xe=R.xr.getDepthSensingMesh();xe!==null&&Gs(xe,D,-1/0,R.sortObjects)}Gs(y,D,0,R.sortObjects),A.finish(),N!==null&&N.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(Ue,ut),$t=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,$t&&C.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),mt===!0&&q.beginShadows();const G=T.state.shadowsArray;if(le.render(G,y,D),mt===!0&&q.endShadows(),(O&&L.hasRenderPass())===!1){const xe=A.opaque,de=A.transmissive;if(T.setupLights(),D.isArrayCamera){const ve=D.cameras;if(de.length>0)for(let Te=0,Ne=ve.length;Te<Ne;Te++){const We=ve[Te];Cr(xe,de,y,We)}$t&&C.render(y);for(let Te=0,Ne=ve.length;Te<Ne;Te++){const We=ve[Te];Rr(A,y,We,We.viewport)}}else de.length>0&&Cr(xe,de,y,D),$t&&C.render(y),Rr(A,y,D)}ne!==null&&k===0&&(Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne)),O&&L.end(R),y.isScene===!0&&y.onAfterRender(R,y,D),oe.resetDefaultState(),X=-1,j=null,v.pop(),v.length>0?(T=v[v.length-1],Ie.setTextureUnits(T.state.textureUnits),mt===!0&&q.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,d.pop(),d.length>0?A=d[d.length-1]:A=null,N!==null&&N.renderEnd()};function Gs(y,D,V,O){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){const xe=D.isArrayCamera?At:Ve;if(!y.frustumCulled||y.intersectsFrustum(xe)){O&&xt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(lt);const de=te.update(y),ve=y.material;ve.visible&&A.push(y,de,ve,V,xt.z,null,D)}}else if(y.isMesh||y.isLine||y.isPoints){const xe=D.isArrayCamera?At:Ve;if(!y.frustumCulled||y.intersectsFrustum(xe)){const de=te.update(y),ve=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),xt.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),xt.copy(de.boundingSphere.center)),xt.applyMatrix4(y.matrixWorld).applyMatrix4(lt)),Array.isArray(ve)){const Te=de.groups;for(let Ne=0,We=Te.length;Ne<We;Ne++){const ye=Te[Ne],Xe=ve[ye.materialIndex];Xe&&Xe.visible&&A.push(y,de,Xe,V,xt.z,ye,D)}}else ve.visible&&A.push(y,de,ve,V,xt.z,null,D)}}}const ue=y.children;for(let xe=0,de=ue.length;xe<de;xe++)Gs(ue[xe],D,V,O)}function Rr(y,D,V,O){const{opaque:G,transmissive:ue,transparent:xe}=y;T.setupLightsView(V),mt===!0&&q.setGlobalState(R.clippingPlanes,V),O&&fe.viewport(ee.copy(O)),G.length>0&&$i(G,D,V),ue.length>0&&$i(ue,D,V),xe.length>0&&$i(xe,D,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Cr(y,D,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const ye=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new un(1,1,{generateMipmaps:!0,type:ye?pn:Wt,minFilter:On,samples:Math.max(4,ot.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const ue=T.state.transmissionRenderTarget[O.id],xe=O.viewport||ee;ue.setSize(xe.z*R.transmissionResolutionScale,xe.w*R.transmissionResolutionScale);const de=R.getRenderTarget(),ve=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(Y),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),$t&&C.render(V);const Ne=R.toneMapping;R.toneMapping=bn;const We=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),mt===!0&&q.setGlobalState(R.clippingPlanes,O),$i(y,V,O),Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Xe=0,ft=D.length;Xe<ft;Xe++){const it=D[Xe],{object:nt,geometry:Lt,material:Ee,group:Ut}=it;if(Ee.side===Vt&&nt.layers.test(O.layers)){const Ke=Ee.side;Ee.side=kt,Ee.needsUpdate=!0,Pr(nt,V,O,Lt,Ee,Ut),Ee.side=Ke,Ee.needsUpdate=!0,ye=!0}}ye===!0&&(Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue))}R.setRenderTarget(de,ve,Te),R.setClearColor(Y,ge),We!==void 0&&(O.viewport=We),R.toneMapping=Ne}function $i(y,D,V){const O=D.isScene===!0?D.overrideMaterial:null;for(let G=0,ue=y.length;G<ue;G++){const xe=y[G],{object:de,geometry:ve,group:Te}=xe;let Ne=xe.material;Ne.allowOverride===!0&&O!==null&&(Ne=O),de.layers.test(V.layers)&&Pr(de,D,V,ve,Ne,Te)}}function Pr(y,D,V,O,G,ue){N!==null&&G.isNodeMaterial&&N.setObject(y,G),y.onBeforeRender(R,D,V,O,G,ue),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(R,D,V,O,y,ue),G.transparent===!0&&G.side===Vt&&G.forceSinglePass===!1?(G.side=kt,G.needsUpdate=!0,R.renderBufferDirect(V,D,O,G,y,ue),G.side=Zn,G.needsUpdate=!0,R.renderBufferDirect(V,D,O,G,y,ue),G.side=Vt):R.renderBufferDirect(V,D,O,G,y,ue),y.onAfterRender(R,D,V,O,G,ue)}function Lr(y){let D=0;for(const V of y)V.texture!==null&&D++;return D}function Ei(y,D,V){D.isScene!==!0&&(D=Xt);const O=Ce.get(y),G=T.state.lights,ue=T.state.shadowsArray,xe=G.state.version,de=J.getParameters(y,G.state,ue,D,V,T.state.lightProbeGridArray),ve=J.getProgramCacheKey(de);let Te=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,O.fog=D.fog;const Ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=w.get(y.envMap||O.environment,Ne),O.envMapRotation=O.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",Qe),Te=new Map,O.programs=Te,O.programVariants=new Map);let We=Te.get(ve);if(We!==void 0){if(O.currentProgram===We&&O.lightsStateVersion===xe)return Dr(y,de),We}else de.uniforms=J.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,V,de),y.onBeforeCompile(de,R),We=J.acquireProgram(de,ve),Te.set(ve,We),O.uniforms=de.uniforms;const ye=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ye.clippingPlanes=q.uniform),Dr(y,de),O.needsLights=kl(y),O.lightsStateVersion=xe,O.needsLights&&(ye.ambientLightColor.value=G.state.ambient,ye.lightProbe.value=G.state.probe,ye.sunLights.value=G.state.sun,ye.sunLightShadows.value=G.state.sunShadow,ye.directionalLights.value=G.state.directional,ye.directionalLightShadows.value=G.state.directionalShadow,ye.spotLights.value=G.state.spot,ye.spotLightShadows.value=G.state.spotShadow,ye.rectAreaLights.value=G.state.rectArea,ye.ltc_1.value=G.state.rectAreaLTC1,ye.ltc_2.value=G.state.rectAreaLTC2,ye.pointLights.value=G.state.point,ye.pointLightShadows.value=G.state.pointShadow,ye.hemisphereLights.value=G.state.hemi,ye.sunShadowMatrix.value=G.state.sunShadowMatrix,ye.sunShadowCascade.value=G.state.sunShadowCascade,ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ye.spotLightMatrix.value=G.state.spotLightMatrix,ye.spotLightMap.value=G.state.spotLightMap,ye.pointShadowMatrix.value=G.state.pointShadowMatrix),O.numLightProbeGrids=Lr(T.state.lightProbeGridArray),O.currentProgram=We,O.uniformsList=null,We}function Ol(y,D,V,O,G){const ue=Ce.get(y),xe=ue.currentProgram.id+","+O+","+G;let de=ue.programVariants.get(xe);return de===void 0?(de=Ei(y,D,V),ue.programVariants.set(xe,de)):(ue.currentProgram=de,ue.uniformsList=null,ue.outputColorSpace=O,ue.toneMapping=G),de}function Ir(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=As.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Dr(y,D){const V=Ce.get(y);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Bl(y,D,V,O,G){D.isScene!==!0&&(D=Xt),Ie.resetTextureUnits();const ue=D.fog,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?D.environment:null,de=ne===null?R.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$e.workingColorSpace,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Te=w.get(O.envMap||xe,ve),Ne=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,We=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ye=!!V.morphAttributes.position,Xe=!!V.morphAttributes.normal,ft=!!V.morphAttributes.color;let it=bn;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(it=R.toneMapping);const nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Lt=nt!==void 0?nt.length:0,Ee=Ce.get(O),Ut=T.state.lights;if(mt===!0&&(Bt===!0||y!==j)){const ct=y===j&&O.id===X;q.setState(O,y,ct)}let Ke=!1,Wn=!1;O.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Ut.state.version||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==Te||O.fog===!0&&Ee.fog!==ue||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==q.numPlanes||Ee.numIntersection!==q.numIntersection)||Ee.vertexAlphas!==Ne||Ee.vertexTangents!==We||Ee.morphTargets!==ye||Ee.morphNormals!==Xe||Ee.morphColors!==ft||Ee.morphTargetsCount!==Lt||Ee.numLightProbeGrids!==Lr(T.state.lightProbeGridArray)?Ke=!0:(Ee.outputColorSpace!==de||Ee.toneMapping!==it)&&(Wn=!0):(Ke=!0,Ee.__version=O.version);let It=Ee.currentProgram;(Ke===!0||Wn===!0)&&(It=Wn===!0?Ol(O,D,G,de,it):Ei(O,D,G),N&&O.isNodeMaterial&&N.onUpdateProgram(O,It,Ee));let qi=!1,Rn=!1,Xn=!1;const Ye=It.getUniforms(),wt=Ee.uniforms;if(fe.useProgram(It.program)&&(qi=!0,Rn=!0,Xn=!0),O.id!==X&&(X=O.id,Rn=!0),qi||j!==y){fe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ye.setValue(U,"projectionMatrix",y.projectionMatrix),Ye.setValue(U,"viewMatrix",y.matrixWorldInverse);const St=Ye.map.cameraPosition;St!==void 0&&St.setValue(U,rn.setFromMatrixPosition(y.matrixWorld)),ot.logarithmicDepthBuffer&&Ye.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ye.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,Rn=!0,Xn=!0)}if(Ee.needsLights&&(Ut.state.sunShadowMap.length>0&&Ye.setValue(U,"sunShadowMap",Ut.state.sunShadowMap,Ie),Ut.state.directionalShadowMap.length>0&&Ye.setValue(U,"directionalShadowMap",Ut.state.directionalShadowMap,Ie),Ut.state.spotShadowMap.length>0&&Ye.setValue(U,"spotShadowMap",Ut.state.spotShadowMap,Ie),Ut.state.pointShadowMap.length>0&&Ye.setValue(U,"pointShadowMap",Ut.state.pointShadowMap,Ie)),G.isSkinnedMesh){Ye.setOptional(U,G,"bindMatrix"),Ye.setOptional(U,G,"bindMatrixInverse");const ct=G.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),Ye.setValue(U,"boneTexture",ct.boneTexture,Ie))}G.isBatchedMesh&&(Ye.setOptional(U,G,"batchingTexture"),Ye.setValue(U,"batchingTexture",G._matricesTexture,Ie),Ye.setOptional(U,G,"batchingIdTexture"),Ye.setValue(U,"batchingIdTexture",G._indirectTexture,Ie),Ye.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&Ye.setValue(U,"batchingColorTexture",G._colorsTexture,Ie));const Qt=V.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&K.update(G,V,It),(Rn||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,Ye.setValue(U,"receiveShadow",G.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&D.environment!==null&&(wt.envMapIntensity.value=D.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=im()),Rn){if(Ye.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ee.needsLights&&Gl(wt,Xn),ue&&O.fog===!0&&re.refreshFogUniforms(wt,ue),re.refreshMaterialUniforms(wt,O,_e,Re,T.state.transmissionRenderTarget[y.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const ct=E;let St=0;for(const mn of T.state.lightProbeGridArray)mn.texture!==null&&(ct.textures[St]=mn.texture,ct.min[St]=mn.boundingBox.min,ct.max[St]=mn.boundingBox.max,ct.resolution[St]=mn.resolution,St++);for(const mn in ct)ct[mn].length=St;wt.probesSH.value=ct.textures,wt.probesMin.value=ct.min,wt.probesMax.value=ct.max,wt.probesResolution.value=ct.resolution}As.upload(U,Ir(Ee),wt,Ie)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(As.upload(U,Ir(Ee),wt,Ie),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ye.setValue(U,"center",G.center),Ye.setValue(U,"modelViewMatrix",G.modelViewMatrix),Ye.setValue(U,"normalMatrix",G.normalMatrix),Ye.setValue(U,"modelMatrix",G.matrixWorld),O.uniformsGroups!==void 0){const ct=O.uniformsGroups;for(let St=0,mn=ct.length;St<mn;St++){const Ur=ct[St];Ae.update(Ur,It),Ae.bind(Ur,It)}}return It}function Gl(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function kl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,D,V){const O=Ce.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ce.get(y.texture).__webglTexture=D,Ce.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){const V=Ce.get(y);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,V=0){ne=y,Z=D,k=V;let O=null,G=!1,ue=!1;if(y){const de=Ce.get(y);if(de.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),ee.copy(y.viewport),be.copy(y.scissor),De=y.scissorTest,fe.viewport(ee),fe.scissor(be),fe.setScissorTest(De),X=-1;return}else if(de.__webglFramebuffer===void 0)Ie.setupRenderTarget(y);else if(de.__hasExternalTextures)Ie.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ne=y.depthTexture;if(de.__boundDepthTexture!==Ne){if(Ne!==null&&Ce.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(y)}}const ve=y.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ue=!0);const Te=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[D])?O=Te[D][V]:O=Te[D],G=!0):y.samples>0&&Ie.useMultisampledRTT(y)===!1?O=Ce.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[V]:O=Te,ee.copy(y.viewport),be.copy(y.scissor),De=y.scissorTest}else ee.copy(Pe).multiplyScalar(_e).floor(),be.copy(Je).multiplyScalar(_e).floor(),De=tt;if(V!==0&&(O=z),fe.bindFramebuffer(U.FRAMEBUFFER,O)&&fe.drawBuffers(y,O),fe.viewport(ee),fe.scissor(be),fe.setScissorTest(De),G){const de=Ce.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,de.__webglTexture,V)}else if(ue){const de=D;for(let ve=0;ve<y.textures.length;ve++){const Te=Ce.get(y.textures[ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ve,Te.__webglTexture,V,de)}}else if(y!==null&&V!==0){const de=Ce.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,V)}X=-1};function Nr(y){const D=Ce.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=ot.textureFormatReadable(y.format),D.__typeReadable=ot.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,V,O,G,ue,xe,de=0){if(!(y&&y.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe],Array.isArray(ve)&&(ve=ve[0])),ve){fe.bindFramebuffer(U.FRAMEBUFFER,ve);try{const Te=y.textures[de],Ne=Te.format,We=Te.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);const ye=Nr(Te);if(ye.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-O&&V>=0&&V<=y.height-G&&U.readPixels(D,V,O,G,se.convert(Ne),se.convert(We),ue)}finally{const Te=ne!==null?Ce.get(ne).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,D,V,O,G,ue,xe,de=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe],Array.isArray(ve)&&(ve=ve[0])),ve)if(D>=0&&D<=y.width-O&&V>=0&&V<=y.height-G){fe.bindFramebuffer(U.FRAMEBUFFER,ve);const Te=y.textures[de],Ne=Te.format,We=Te.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);const ye=Nr(Te);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(D,V,O,G,se.convert(Ne),se.convert(We),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const ft=ne!==null?Ce.get(ne).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,ft);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await yc(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Xe),U.deleteSync(it),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,V=0){const O=Math.pow(2,-V),G=Math.floor(y.image.width*O),ue=Math.floor(y.image.height*O),xe=D!==null?D.x:0,de=D!==null?D.y:0;Ie.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,xe,de,G,ue),fe.unbindTexture()},this.copyTextureToTexture=function(y,D,V=null,O=null,G=0,ue=0){let xe,de,ve,Te,Ne,We,ye,Xe,ft;const it=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(V!==null)xe=V.max.x-V.min.x,de=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Te=V.min.x,Ne=V.min.y,We=V.isBox3?V.min.z:0;else{const Ye=Math.pow(2,-G);xe=Math.floor(it.width*Ye),de=Math.floor(it.height*Ye),y.isDataArrayTexture?ve=it.depth:y.isData3DTexture?ve=Math.floor(it.depth*Ye):ve=1,Te=0,Ne=0,We=0}O!==null?(ye=O.x,Xe=O.y,ft=O.z):(ye=0,Xe=0,ft=0);const nt=se.convert(D.format),Lt=se.convert(D.type);let Ee;D.isData3DTexture?(Ie.setTexture3D(D,0),Ee=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ie.setTexture2DArray(D,0),Ee=U.TEXTURE_2D_ARRAY):(Ie.setTexture2D(D,0),Ee=U.TEXTURE_2D),fe.activeTexture(U.TEXTURE0),fe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),fe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),fe.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Ut=fe.getParameter(U.UNPACK_ROW_LENGTH),Ke=fe.getParameter(U.UNPACK_IMAGE_HEIGHT),Wn=fe.getParameter(U.UNPACK_SKIP_PIXELS),It=fe.getParameter(U.UNPACK_SKIP_ROWS),qi=fe.getParameter(U.UNPACK_SKIP_IMAGES);fe.pixelStorei(U.UNPACK_ROW_LENGTH,it.width),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it.height),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),fe.pixelStorei(U.UNPACK_SKIP_ROWS,Ne),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,We);const Rn=y.isDataArrayTexture||y.isData3DTexture,Xn=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const Ye=Ce.get(y),wt=Ce.get(D),Qt=Ce.get(Ye.__renderTarget),ct=Ce.get(wt.__renderTarget);fe.bindFramebuffer(U.READ_FRAMEBUFFER,Qt.__webglFramebuffer),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let St=0;St<ve;St++)Rn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,G,We+St),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(D).__webglTexture,ue,ft+St)),U.blitFramebuffer(Te,Ne,Te+xe,Ne+de,ye,Xe,ye+xe,Xe+de,U.DEPTH_BUFFER_BIT,U.NEAREST);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||Ce.has(y)){const Ye=Ce.get(y),wt=Ce.get(D);fe.bindFramebuffer(U.READ_FRAMEBUFFER,I),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let Qt=0;Qt<ve;Qt++)Rn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ye.__webglTexture,G,We+Qt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ye.__webglTexture,G),Xn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,ue,ft+Qt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,ue),G!==0?U.blitFramebuffer(Te,Ne,Te+xe,Ne+de,ye,Xe,ye+xe,Xe+de,U.COLOR_BUFFER_BIT,U.NEAREST):Xn?U.copyTexSubImage3D(Ee,ue,ye,Xe,ft+Qt,Te,Ne,xe,de):U.copyTexSubImage2D(Ee,ue,ye,Xe,Te,Ne,xe,de);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Xn?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Ee,ue,ye,Xe,ft,xe,de,ve,nt,Lt,it.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,ue,ye,Xe,ft,xe,de,ve,nt,it.data):U.texSubImage3D(Ee,ue,ye,Xe,ft,xe,de,ve,nt,Lt,it):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,ye,Xe,xe,de,nt,Lt,it.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,ye,Xe,it.width,it.height,nt,it.data):U.texSubImage2D(U.TEXTURE_2D,ue,ye,Xe,xe,de,nt,Lt,it);fe.pixelStorei(U.UNPACK_ROW_LENGTH,Ut),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Wn),fe.pixelStorei(U.UNPACK_SKIP_ROWS,It),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,qi),ue===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&U.generateMipmap(Ee),fe.unbindTexture()},this.initRenderTarget=function(y){Ce.get(y).__webglFramebuffer===void 0&&Ie.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ie.setTextureCube(y,0):y.isData3DTexture?Ie.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ie.setTexture2DArray(y,0):Ie.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){Z=0,k=0,ne=null,fe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const zo=["Common","Uncommon","Rare","Epic","Legendary"],Us=["#94a3b8","#22c55e","#3b82f6","#a855f7","#f59e0b"],Gn={plasma:{id:"plasma",name:"Plasma Blaster",icon:"⚡",description:"Rapid-fire high-velocity energy bolts at the nearest target.",baseDamage:18,baseCooldown:.48,range:330,baseCost:25,color:"#38bdf8"},tesla:{id:"tesla",name:"Tesla Arc Coil",icon:"🌩️",description:"Chain lightning that arcs across multiple nearby enemies.",baseDamage:24,baseCooldown:.85,range:280,baseCost:35,color:"#c084fc"},frost:{id:"frost",name:"Cryo Nova Emitter",icon:"❄️",description:"Emits freezing shockwaves that damage and slow enemies by 50%.",baseDamage:20,baseCooldown:1.35,range:195,baseCost:35,color:"#67e8f9"},sawblade:{id:"sawblade",name:"Kinetic Ripper",icon:"⚙️",description:"Fires piercing cyber-sawblades that slice through lines of foes.",baseDamage:30,baseCooldown:.9,range:350,baseCost:40,color:"#f43f5e"},missile:{id:"missile",name:"Hellfire Launcher",icon:"🚀",description:"Launches explosive splash-damage rockets with heavy impact.",baseDamage:48,baseCooldown:1.4,range:400,baseCost:50,color:"#fb923c"}};class kn{static MAX_EQUIPPED=6;static MAX_BENCH=6;equipped=[null,null,null,null,null,null];bench=[null,null,null,null,null,null];uidCounter=1;constructor(){this.resetForNewRun()}resetForNewRun(){this.equipped=[null,null,null,null,null,null],this.bench=[null,null,null,null,null,null],this.equipped[0]=this.createWeapon("plasma",1),this.equipped[1]=this.createWeapon("plasma",1)}createWeapon(e,t=1){return{uid:`wpn_${this.uidCounter++}_${Date.now()}`,archetype:e,tier:Math.max(1,Math.min(5,t)),cooldownTimer:0,orbitAngle:0}}static getDamage(e,t){const n=Gn[e.archetype],i=Math.pow(2.15,e.tier-1);return Math.round(n.baseDamage*i*t)}static getCooldown(e,t){const n=Gn[e.archetype],i=1+(e.tier-1)*.12;return n.baseCooldown/(i*t)}addWeaponToAvailableSlot(e){for(let t=0;t<kn.MAX_EQUIPPED;t++)if(!this.equipped[t])return this.equipped[t]=e,!0;for(let t=0;t<kn.MAX_BENCH;t++)if(!this.bench[t])return this.bench[t]=e,!0;return!1}hasFreeSlot(){return this.equipped.some(e=>e===null)||this.bench.some(e=>e===null)}interactSlots(e,t,n,i){if(e===n&&t===i)return{action:"none"};const a=e==="equipped"?this.equipped:this.bench,r=n==="equipped"?this.equipped:this.bench,o=a[t],l=r[i];if(!o)return{action:"none"};if(l&&o.archetype===l.archetype&&o.tier===l.tier&&o.tier<5){const c=this.createWeapon(o.archetype,o.tier+1);return r[i]=c,a[t]=null,He.getInstance().recordMerge(1),Me.getInstance().playMerge(c.tier),{action:"merged",newTier:c.tier}}return r[i]=o,a[t]=l,Me.getInstance().playClick(),{action:"swapped"}}autoMergeAll(){let e=0,t=!0;for(;t;){t=!1;const n=[];this.equipped.forEach((i,a)=>n.push({group:"equipped",index:a,item:i})),this.bench.forEach((i,a)=>n.push({group:"bench",index:a,item:i}));for(let i=0;i<n.length;i++){const a=n[i];if(!(!a.item||a.item.tier>=5)){for(let r=i+1;r<n.length;r++){const o=n[r];if(o.item&&a.item.archetype===o.item.archetype&&a.item.tier===o.item.tier){this.interactSlots(o.group,o.index,a.group,a.index),e++,t=!0;break}}if(t)break}}}for(let n=0;n<kn.MAX_EQUIPPED;n++)if(!this.equipped[n]){const i=this.bench.findIndex(a=>a!==null);i!==-1&&(this.equipped[n]=this.bench[i],this.bench[i]=null)}return e}sellWeapon(e,t){const n=e==="equipped"?this.equipped:this.bench,i=n[t];if(!i)return 0;let a=0;for(let l=0;l<this.equipped.length;l++)this.equipped[l]!==null&&a++;for(let l=0;l<this.bench.length;l++)this.bench[l]!==null&&a++;if(a<=1)return 0;const r=Gn[i.archetype],o=Math.floor(r.baseCost*Math.pow(1.8,i.tier-1)*.65);return n[t]=null,Me.getInstance().playCoin(),o}}class am{renderer;scene;camera;worldSize;camTarget=new F(1100,0,1100);projVec=new F;dirLight;backLight;reactorRings=[];reactorPulseRing;reactorCoreMat;barrierBeamMat;pylonRings=[];holoSkyscraperRings=[];dustPoints;playerGroup=new dt;playerChassisMat;playerSecondaryMat;playerGlowMat;playerTurretGroup=new dt;playerThrusterMesh;playerLight;commanderAttachments={vanguard:new dt,valkyrie:new dt,tesla_engineer:new dt,void_phantom:new dt};weaponPods=[];geoLoot=new Un(9,0);geoProjSphere=new yr(6,8,8);geoProjSaw=new Rt(16,16,3,16);geoParticle=new st(5,5,5);geoFrostRing=new Ni(.88,1,36);enemyMeshes=new Map;lootPool=[];projPool=[];particlePool=[];frostPool=[];lightningLines=[];constructor(e,t){this.worldSize=t,this.renderer=new sm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.id="webgl-canvas",e.parentElement?.insertBefore(this.renderer.domElement,e),this.scene=new Hc,this.scene.background=new ke(263953),this.scene.fog=new _r(263953,32e-5),this.camera=new Jt(46,window.innerWidth/window.innerHeight,10,7e3),this.camera.position.set(t/2,540,t/2+440),this.camera.lookAt(t/2,0,t/2),this.geoFrostRing.rotateX(-Math.PI/2);const n=new ld(3359061,2.3);this.scene.add(n),this.dirLight=new vo(14742270,2.5),this.dirLight.position.set(t/2+450,950,t/2+350),this.scene.add(this.dirLight),this.backLight=new vo(11032055,1.3),this.backLight.position.set(t/2-550,650,t/2-550),this.scene.add(this.backLight),this.buildCyberMegacityAndArena(),this.buildPlayerMech(),this.buildWeaponDronePods()}resize(e,t){this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}buildCyberMegacityAndArena(){const e=this.worldSize/2,t=new Float32Array(1600*3);for(let A=0;A<1600;A++)t[A*3]=e+(Math.random()-.5)*5600,t[A*3+1]=-300+Math.random()*1400,t[A*3+2]=e+(Math.random()-.5)*5600;const n=new Tt;n.setAttribute("position",new An(t,3));const i=new sr({color:9684477,size:6,transparent:!0,opacity:.75});this.scene.add(new ho(n,i));const a=new Float32Array(260*3);for(let A=0;A<260;A++)a[A*3]=Math.random()*this.worldSize,a[A*3+1]=8+Math.random()*140,a[A*3+2]=Math.random()*this.worldSize;const r=new Tt;r.setAttribute("position",new An(a,3));const o=new sr({color:3718648,size:4.5,transparent:!0,opacity:.65});this.dustPoints=new ho(r,o),this.scene.add(this.dustPoints);const l=new Wi(this.worldSize+2400,this.worldSize+2400);l.rotateX(-Math.PI/2);const c=new Sn({color:395796,metalness:.78,roughness:.32}),p=new ae(l,c);p.position.set(e,-1,e),this.scene.add(p);const g=new xo(this.worldSize,44,1976635,988970);g.position.set(e,.1,e);const h=new xo(this.worldSize,11,3718648,1920728);h.position.set(e,.25,e),this.scene.add(g,h),this.reactorCoreMat=new Et({color:3718648});const m=new ae(new Rt(45,55,4,8),this.reactorCoreMat);m.position.set(e,1,e),this.scene.add(m),[78,125,175].forEach((A,T)=>{const d=new Ni(A-4,A,T===1?6:24);d.rotateX(-Math.PI/2);const v=new Et({color:T%2===0?3718648:11032055,side:Vt,transparent:!0,opacity:.75}),L=new ae(d,v);L.position.set(e,.6+T*.2,e),this.scene.add(L),this.reactorRings.push(L)});const b=new Ni(24,30,32);b.rotateX(-Math.PI/2),this.reactorPulseRing=new ae(b,new Et({color:3718648,transparent:!0,opacity:.8,side:Vt})),this.reactorPulseRing.position.set(e,1.2,e),this.scene.add(this.reactorPulseRing),this.barrierBeamMat=new Et({color:3718648});const f=new Sn({color:988970,emissive:165063,emissiveIntensity:.45,metalness:.8,roughness:.2}),u=[10,22,34];for(const A of u){const T=new st(this.worldSize,2.2,2.2),d=new st(2.2,2.2,this.worldSize),v=new ae(T,this.barrierBeamMat);v.position.set(e,A,0);const L=new ae(T,this.barrierBeamMat);L.position.set(e,A,this.worldSize);const R=new ae(d,this.barrierBeamMat);R.position.set(0,A,e);const P=new ae(d,this.barrierBeamMat);P.position.set(this.worldSize,A,e),this.scene.add(v,L,R,P)}const _=new Rt(20,28,125,6),M=[[0,0],[this.worldSize,0],[0,this.worldSize],[this.worldSize,this.worldSize]];for(const[A,T]of M){const d=new ae(_,f);d.position.set(A,62.5,T),this.scene.add(d);const v=new ae(new nn(32,3,8,20),this.barrierBeamMat);v.rotation.x=Math.PI/2,v.position.set(A,105,T),this.scene.add(v),this.pylonRings.push(v)}const E=new Sn({color:461593,emissive:988970,metalness:.85,roughness:.25});for(let A=0;A<24;A++){const T=A/24*Math.PI*2,d=this.worldSize*.82+A%3*180,v=e+Math.cos(T)*d,L=e+Math.sin(T)*d,R=280+A%5*110,P=65+A%3*20,N=new ae(new st(P,R,P),E);N.position.set(v,R/2-40,L),this.scene.add(N);const z=A%2===0?3718648:11032055,I=new ae(new st(P+4,R*.85,4),new Et({color:z}));if(I.position.set(v,R/2-40,L),this.scene.add(I),A%3===0){const H=new ae(new nn(P*.85,3,6,18),new Et({color:z,wireframe:!0}));H.rotation.x=Math.PI/2,H.position.set(v,R-25,L),this.scene.add(H),this.holoSkyscraperRings.push(H)}}}buildPlayerMech(){this.playerChassisMat=new Sn({color:959977,emissive:959977,emissiveIntensity:.45,metalness:.72,roughness:.22}),this.playerSecondaryMat=new Sn({color:1976635,metalness:.85,roughness:.25}),this.playerGlowMat=new Et({color:3718648});const e=new yn(11,18,8);e.rotateX(Math.PI),this.playerThrusterMesh=new ae(e,this.playerGlowMat),this.playerThrusterMesh.position.y=6,this.playerGroup.add(this.playerThrusterMesh);const t=new nn(23,2.2,8,24);t.rotateX(Math.PI/2);const n=new ae(t,this.playerGlowMat);n.position.y=8,this.playerGroup.add(n);const i=new ae(new Rt(16,20,12,6),this.playerSecondaryMat);i.position.y=13,this.playerGroup.add(i);const a=new ae(new Rt(15,13,14,6),this.playerChassisMat);this.playerTurretGroup.add(a);const r=new ae(new Un(6,0),this.playerGlowMat);r.position.set(13,1,0),this.playerTurretGroup.add(r);const o=new st(14,10,11),l=new ae(o,this.playerChassisMat);l.position.set(0,5,-16),l.rotation.x=.2;const c=new ae(o,this.playerChassisMat);c.position.set(0,5,16),c.rotation.x=-.2,this.playerTurretGroup.add(l,c);const p=new ae(new Di(9,0),this.playerSecondaryMat);p.position.set(2,11,0);const g=new ae(new st(8,3.5,13),this.playerGlowMat);g.position.set(7,11,0),this.playerTurretGroup.add(p,g);const h=new Rt(2.6,2.6,22,8);h.rotateZ(Math.PI/2);const m=new ae(h,this.playerSecondaryMat);m.position.set(14,1,-14);const x=new ae(h,this.playerSecondaryMat);x.position.set(14,1,14),this.playerTurretGroup.add(m,x);const b=new st(8,22,4),f=new ae(b,this.playerChassisMat);f.position.set(-12,8,-14),f.rotation.z=-.3;const u=new ae(b,this.playerChassisMat);u.position.set(-12,8,14),u.rotation.z=-.3,this.commanderAttachments.vanguard.add(f,u);const _=new Et({color:2282478,side:Vt}),M=new st(20,4,2);for(let N=0;N<3;N++){const z=new ae(M,_);z.position.set(-14-N*3,12-N*5,-16-N*5),z.rotation.y=-.5,z.rotation.z=.35-N*.15;const I=new ae(M,_);I.position.set(-14-N*3,12-N*5,16+N*5),I.rotation.y=.5,I.rotation.z=.35-N*.15,this.commanderAttachments.valkyrie.add(z,I)}const E=new ae(new nn(13,1.5,6,20),_);E.rotation.x=Math.PI/2,E.position.set(0,22,0),this.commanderAttachments.valkyrie.add(E);const A=new Rt(4,5,24,8),T=new ae(A,this.playerChassisMat);T.position.set(-12,14,-11);const d=new ae(A,this.playerChassisMat);d.position.set(-12,14,11);const v=new ae(new nn(18,1.8,6,20),this.playerGlowMat);v.position.set(-12,24,0),this.commanderAttachments.tesla_engineer.add(T,d,v);const L=new yn(6,30,4);L.rotateZ(Math.PI*.65);const R=new ae(L,this.playerChassisMat);R.position.set(-16,10,-18),R.rotation.y=-.4;const P=new ae(L,this.playerChassisMat);P.position.set(-16,10,18),P.rotation.y=.4,this.commanderAttachments.void_phantom.add(R,P);for(const N of Object.values(this.commanderAttachments))this.playerTurretGroup.add(N);this.playerTurretGroup.position.y=24,this.playerGroup.add(this.playerTurretGroup),this.playerLight=new rd(3718648,3.8,460,1.5),this.playerLight.position.set(0,48,0),this.playerGroup.add(this.playerLight),this.scene.add(this.playerGroup)}buildWeaponDronePods(){for(let e=0;e<6;e++){const t=new dt,n=new Sn({color:3718648,emissive:3718648,emissiveIntensity:.5,metalness:.7,roughness:.25}),i=new Et({color:16777215}),a=new dt,r=new ae(new Un(7,0),n),o=new Rt(1.6,1.6,14,6);o.rotateZ(Math.PI/2);const l=new ae(o,i);l.position.set(6,0,-3);const c=new ae(o,i);c.position.set(6,0,3),a.add(r,l,c);const p=new dt,g=new ae(new Rt(3,6,16,8),n),h=new ae(new nn(9,1.4,6,16),i);h.rotation.x=Math.PI/2,h.position.y=5,p.add(g,h);const m=new dt,x=new ae(new Un(8,0),i),b=new ae(new nn(11,1.5,4,6),n);b.rotation.x=Math.PI/2,m.add(x,b);const f=new dt,u=new ae(new Rt(11,11,2.2,12),n),_=new ae(new Rt(4,4,4,8),i);f.add(u,_);const M=new dt,E=new ae(new st(12,9,10),n),A=new ae(new yn(4,5,8),i);A.position.y=7,M.add(E,A);const T={plasma:a,tesla:p,frost:m,sawblade:f,missile:M};for(const z of Object.values(T))t.add(z);const d=new dt,v=new st(4,2,16),L=new ae(v,n);d.add(L),t.add(d);const R=new ae(new nn(13,1.2,6,20),i);R.rotation.x=Math.PI/2,t.add(R);const P=new dt,N=new Et({color:16436245});for(let z=0;z<4;z++){const I=z/4*Math.PI*2,H=new ae(new Un(3,0),N);H.position.set(Math.cos(I)*14,6,Math.sin(I)*14),P.add(H)}t.add(P),t.visible=!1,this.scene.add(t),this.weaponPods.push({root:t,archetypeGroups:T,tierWings:d,tierRing:R,tierCrown:P,primaryMat:n,emissiveMat:i})}}worldToScreen(e,t,n=0){this.projVec.set(e,n,t),this.projVec.project(this.camera);const i=window.innerWidth/2,a=window.innerHeight/2;return{x:this.projVec.x*i+i,y:-this.projVec.y*a+a,visible:this.projVec.z<1}}renderScene(e){const t=performance.now()*.001,{player:n,equippedWeapons:i,enemies:a,projectiles:r,lootDrops:o,frostRings:l,lightningBolts:c,particles:p,screenShake:g,bossRageStage:h}=e,m=(Math.random()-.5)*g*1.4,x=(Math.random()-.5)*g*1.4;this.camTarget.x+=(n.x-this.camTarget.x)*.18,this.camTarget.z+=(n.y-this.camTarget.z)*.18,this.camera.position.set(this.camTarget.x+m,535,this.camTarget.z+435+x),this.camera.lookAt(this.camTarget.x+m*.3,0,this.camTarget.z+x*.3),this.reactorRings.forEach((T,d)=>{T.rotation.z=t*(d%2===0?.45:-.65)});const b=1+t%1.8*3.8;this.reactorPulseRing.scale.setScalar(b),this.reactorPulseRing.material.opacity=Math.max(0,.75-t%1.8*.4);for(const T of this.pylonRings)T.rotation.z=t*2.2;for(const T of this.holoSkyscraperRings)T.rotation.z=-t*.8;if(this.dustPoints.position.y=Math.sin(t*1.5)*6,h>0){const T=.5+.5*Math.sin(t*(4+h*3));this.barrierBeamMat.color.setHex(T>.5?16007006:16436245),this.reactorCoreMat.color.setHex(16007006),this.backLight.color.setHex(15680580),this.backLight.intensity=2+h*.5}else this.barrierBeamMat.color.setHex(3718648),this.reactorCoreMat.color.setHex(3718648),this.backLight.color.setHex(11032055),this.backLight.intensity=1.3;const f=He.getInstance().data.selectedCommander,u={vanguard:{primary:959977,glow:3718648},valkyrie:{primary:15485081,glow:2282478},tesla_engineer:{primary:11032055,glow:16436245},void_phantom:{primary:14753096,glow:16007006}},_=u[f]||u.vanguard,M=n.invulnTimer>0&&Math.floor(performance.now()/60)%2===0;this.playerChassisMat.color.setHex(M?16777215:_.primary),this.playerChassisMat.emissive.setHex(M?16777215:_.primary),this.playerGlowMat.color.setHex(_.glow),this.playerLight.color.setHex(_.glow);for(const[T,d]of Object.entries(this.commanderAttachments))d.visible=T===f;const E=Math.sin(t*6)*2.5;this.playerGroup.position.set(n.x,E,n.y),this.playerTurretGroup.rotation.y=-n.angle,this.playerThrusterMesh.scale.y=.85+Math.sin(t*28)*.25;for(let T=0;T<6;T++){const d=i[T],v=this.weaponPods[T];if(!d){v.root.visible=!1;continue}v.root.visible=!0;for(const[z,I]of Object.entries(v.archetypeGroups))I.visible=z===d.archetype;v.tierWings.visible=d.tier>=2,v.tierRing.visible=d.tier>=3,v.tierCrown.visible=d.tier>=5,v.tierCrown.rotation.y=t*3.5;const L=n.x+Math.cos(d.orbitAngle)*52,R=n.y+Math.sin(d.orbitAngle)*52,P=.85+d.tier*.14;v.root.position.set(L,20+Math.sin(t*7+T)*2.5,R),v.root.scale.setScalar(P),v.root.rotation.y=t*(d.archetype==="sawblade"?12:3.2)+T;const N=new ke(Us[d.tier-1]||"#38bdf8");v.primaryMat.color.copy(N),v.primaryMat.emissive.copy(N)}const A=new Set;for(let T=0;T<a.length;T++){const d=a[T];A.add(d.id);let v=this.enemyMeshes.get(d.id);v||(v=this.createEnemyMesh(d),this.enemyMeshes.set(d.id,v),this.scene.add(v.group));const L=Math.atan2(n.y-d.y,n.x-d.x),R=Math.sin(t*7+d.id)*2.2;if(v.group.position.set(d.x,d.radius*.85+R,d.y),d.type==="swarmer")v.group.rotation.y=-L,v.legs&&v.legs.forEach((P,N)=>{P.rotation.z=Math.sin(t*20+N%2*Math.PI)*.35}),v.abdomen&&v.abdomen.scale.setScalar(1+Math.sin(t*10+d.id)*.12);else if(d.type==="speedster"){if(v.group.rotation.y=-L,v.group.rotation.x=Math.sin(t*9+d.id)*.22,v.flames){const P=.75+Math.sin(t*35+d.id)*.35;v.flames.forEach(N=>N.scale.y=P)}}else if(d.type==="charger")v.group.rotation.y=-L,v.group.rotation.z=-.22;else if(d.type==="tank")v.group.rotation.y=-L,v.turret&&(v.turret.rotation.y=Math.sin(t*2.5+d.id)*.35),v.wheels&&v.wheels.forEach(P=>P.rotation.z-=.08);else if(d.type==="boss"){const P=1+h*.1;v.group.scale.setScalar(P);const N=1+h*.55;v.group.rotation.y+=.02*N,v.ringX&&(v.ringX.rotation.x+=.045*N),v.ringY&&(v.ringY.rotation.y-=.055*N),v.ringZ&&(v.ringZ.rotation.z+=.05*N),v.shieldsGroup&&(v.shieldsGroup.rotation.y-=.035*N),v.innerStar&&v.innerStar.scale.setScalar(1+Math.sin(t*(6+h*4))*.18)}d.hitFlash>0?(v.mainMat.color.setHex(16777215),v.mainMat.emissive.setHex(16777215),v.mainMat.emissiveIntensity=1):d.slowTimer>0?(v.mainMat.color.setHex(6809849),v.mainMat.emissive.setHex(165063),v.mainMat.emissiveIntensity=.65):(v.mainMat.color.set(d.color),v.mainMat.emissive.set(d.color),v.mainMat.emissiveIntensity=d.type==="boss"?.6+h*.2:.38)}for(const[T,d]of this.enemyMeshes.entries())A.has(T)||(this.scene.remove(d.group),d.mainMat.dispose(),d.accentMat.dispose(),this.enemyMeshes.delete(T));this.syncProjectiles(r),this.syncLootDrops(o,t),this.syncFrostRings(l),this.syncLightningBolts(c),this.syncParticles(p),this.renderer.render(this.scene,this.camera)}createEnemyMesh(e){const t=new dt,n=new Sn({color:e.color,emissive:e.color,emissiveIntensity:.4,metalness:.6,roughness:.28}),i=new Et({color:16436245}),a=new Sn({color:988970,metalness:.85,roughness:.3});if(e.type==="swarmer"){const b=new ae(new Un(10,0),a),f=new ae(new Di(11,0),n);f.position.set(-10,2,0);const u=new ae(new st(3,3,3),i);u.position.set(8,3,-4);const _=new ae(new st(3,3,3),i);_.position.set(8,3,4);const M=[],E=new st(3,14,3);for(let A=0;A<6;A++){const T=A<3?-1:1,d=A%3,v=new ae(E,n);v.position.set((d-1)*7,-4,T*11),v.rotation.x=T*.45,t.add(v),M.push(v)}return t.add(b,f,u,_),{type:e.type,group:t,mainMat:n,accentMat:i,legs:M,abdomen:f}}if(e.type==="speedster"){const b=new yn(8,30,5);b.rotateZ(-Math.PI/2);const f=new ae(b,n),u=new st(14,2,32),_=new ae(u,a);_.position.set(-4,0,0);const M=new ae(new st(10,4,5),new Et({color:3718648}));M.position.set(2,4,0);const E=new yn(4,14,6);E.rotateZ(Math.PI/2);const A=new Et({color:16347926}),T=new ae(E,A);T.position.set(-19,0,-5);const d=new ae(E,A);return d.position.set(-19,0,5),t.add(f,_,M,T,d),{type:e.type,group:t,mainMat:n,accentMat:i,flames:[T,d]}}if(e.type==="charger"){const b=new ae(new st(24,20,22),n),f=new ae(new st(8,16,26),a);f.position.set(13,-2,0);const u=new yn(4.5,22,5);u.rotateZ(-Math.PI/2);const _=new ae(u,i);_.position.set(18,5,-11);const M=new ae(u,i);return M.position.set(18,5,11),t.add(b,f,_,M),{type:e.type,group:t,mainMat:n,accentMat:i}}if(e.type==="tank"){const b=new ae(new st(34,18,28),n),f=new st(38,12,8),u=new ae(f,a);u.position.set(0,-4,-17);const _=new ae(f,a);_.position.set(0,-4,17);const M=[],E=new Rt(5,5,10,8);E.rotateX(Math.PI/2);for(const R of[-12,0,12]){const P=new ae(E,i);P.position.set(R,-4,-17);const N=new ae(E,i);N.position.set(R,-4,17),t.add(P,N),M.push(P,N)}const A=new dt,T=new ae(new Rt(12,14,10,8),a),d=new Rt(2.8,2.8,26,8);d.rotateZ(Math.PI/2);const v=new ae(d,n);v.position.set(14,1,-5);const L=new ae(d,n);return L.position.set(14,1,5),A.add(T,v,L),A.position.y=13,t.add(b,u,_,A),{type:e.type,group:t,mainMat:n,accentMat:i,turret:A,wheels:M}}const r=new ae(new Sr(26,1),new Et({color:16777215})),o=new ae(new Di(42,0),n),l=new nn(58,3.2,8,32),c=new ae(l,i),p=new ae(l,n);p.rotation.x=Math.PI/2;const g=new ae(l,i);g.rotation.y=Math.PI/2;const h=new dt,m=new st(10,34,24);for(let b=0;b<4;b++){const f=b/4*Math.PI*2,u=new ae(m,a);u.position.set(Math.cos(f)*68,0,Math.sin(f)*68),u.rotation.y=-f,h.add(u)}const x=new ae(new yn(14,38,6),i);return x.position.y=54,t.add(r,o,c,p,g,h,x),{type:e.type,group:t,mainMat:n,accentMat:i,ringX:c,ringY:p,ringZ:g,shieldsGroup:h,innerStar:r}}syncProjectiles(e){for(;this.projPool.length<e.length;){const t=new Et({color:3718648}),n=new ae(this.geoProjSphere,t);this.scene.add(n),this.projPool.push(n)}for(let t=0;t<this.projPool.length;t++){const n=this.projPool[t];if(t>=e.length){n.visible=!1;continue}const i=e[t];if(n.visible=!0,n.geometry=i.isSawblade?this.geoProjSaw:this.geoProjSphere,n.material.color.set(i.color),n.position.set(i.x,18,i.y),i.isSawblade){const a=i.radius/16;n.scale.set(a,1,a),n.rotation.y=i.rotation||0}else{const a=i.radius/6;n.scale.setScalar(a)}}}syncLootDrops(e,t){for(;this.lootPool.length<e.length;){const n=new Sn({color:16436245,emissive:16436245,emissiveIntensity:.65,metalness:.7,roughness:.2}),i=new ae(this.geoLoot,n);this.scene.add(i),this.lootPool.push(i)}for(let n=0;n<this.lootPool.length;n++){const i=this.lootPool[n];if(n>=e.length){i.visible=!1;continue}const a=e[n];i.visible=!0;const r=a.type==="gold"?16436245:a.type==="gem"?3718648:4906624,o=i.material;o.color.setHex(r),o.emissive.setHex(r),i.position.set(a.x,10+Math.sin(t*5+n)*3,a.y),i.rotation.y=t*3+n}}syncFrostRings(e){for(;this.frostPool.length<e.length;){const t=new Et({color:6809849,transparent:!0,opacity:.8,side:Vt}),n=new ae(this.geoFrostRing,t);this.scene.add(n),this.frostPool.push(n)}for(let t=0;t<this.frostPool.length;t++){const n=this.frostPool[t];if(t>=e.length){n.visible=!1;continue}const i=e[t];n.visible=!0,n.position.set(i.x,3,i.y),n.scale.setScalar(Math.max(1,i.currentRadius));const a=n.material;a.color.set(i.color),a.opacity=Math.max(0,i.alpha)}}syncLightningBolts(e){for(const t of this.lightningLines)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.lightningLines=[];for(const t of e){if(t.points.length<2)continue;const n=t.points.map(o=>new F(o.x,22,o.y)),i=new Tt().setFromPoints(n),a=new Mr({color:t.color,transparent:!0,opacity:Math.max(0,t.alpha)}),r=new gl(i,a);this.scene.add(r),this.lightningLines.push(r)}}syncParticles(e){for(;this.particlePool.length<e.length;){const t=new Et({color:16777215,transparent:!0,opacity:1}),n=new ae(this.geoParticle,t);this.scene.add(n),this.particlePool.push(n)}for(let t=0;t<this.particlePool.length;t++){const n=this.particlePool[t];if(t>=e.length){n.visible=!1;continue}const i=e[t];n.visible=!0,n.position.set(i.x,12+i.alpha*14,i.y),n.rotation.x+=.15,n.rotation.y+=.15,n.scale.setScalar(i.radius/3);const a=n.material;a.color.set(i.color),a.opacity=Math.max(0,i.alpha)}}}const rm=[{id:"overclock",icon:"⚡",titleEn:"Overclocked Barrels",titleTr:"Aşırtılmış Namlular",descEn:"+20% Attack Speed for all orbital weapons this run",descTr:"Bu tur tüm yörünge silahları için +%20 Saldırı Hızı",color:"#38bdf8"},{id:"crit_matrix",icon:"🎯",titleEn:"Critical Matrix",titleTr:"Kritik Matris",descEn:"+15% Critical Hit Chance (2x Damage) & +10% Base Damage",descTr:"+%15 Kritik Vuruş Şansı (2x Hasar) & +%10 Temel Hasar",color:"#f43f5e"},{id:"nanite_hull",icon:"🛡️",titleEn:"Nanite Hull Plating",titleTr:"Nanit Zırh Kaplaması",descEn:"+40 Max HP & Immediately Restore 50 HP",descTr:"+40 Maksimum Can & Anında 50 Can Yenileme",color:"#22c55e"},{id:"scrap_harvester",icon:"🪙",titleEn:"Scrap Harvester",titleTr:"Hurda Toplayıcı",descEn:"+30% Gold Dropped from Enemies + Instant +80 Gold",descTr:"Düşmanlardan +%30 Daha Fazla Altın + Anında +80 Altın",color:"#facc15"},{id:"grav_magnet",icon:"🧲",titleEn:"Graviton Magnet",titleTr:"Graviton Mıknatısı",descEn:"+50% Loot Pickup Radius & +12% Move Speed",descTr:"+%50 Ganimet Çekim Alanı & +%12 Hareket Hızı",color:"#a855f7"},{id:"plasma_core",icon:"🔥",titleEn:"Superheated Core",titleTr:"Aşırı Isınmış Çekirdek",descEn:"+25% All Weapon Damage this run",descTr:"Bu turda tüm silahlar için +%25 Hasar Bonusu",color:"#fb923c"}];class om{canvas;ctx;renderer3d;weapons;state="MENU";worldSize=2200;player={x:1100,y:1100,radius:20,hp:100,maxHp:100,speed:245,invulnTimer:0,angle:0,level:1,xp:0,xpToNext:50};runBuffs={damageMult:0,attackSpeedMult:0,critChance:0,goldMult:0,magnetMult:0,moveSpeedMult:0};currentWave=1;waveTimer=25;waveDuration=25;bossElapsedTime=0;bossRageStage=0;runGoldEarned=0;waveGoldEarned=0;runKills=0;runScore=0;revivedThisRun=!1;gameSpeedMultiplier=1;tempAdSpeedWave=!1;enemies=[];projectiles=[];lightningBolts=[];frostRings=[];lootDrops=[];particles=[];floatingTexts=[];spawnTimer=0;enemyIdCounter=1;screenShake=0;isPausedBySdk=!1;keys=new Set;joyActive=!1;joyOriginX=0;joyOriginY=0;joyCurrentX=0;joyCurrentY=0;JOY_DEADZONE=8;JOY_MAX_RADIUS=52;onHudUpdate;onLevelUp;onWaveComplete;onPlayerDeath;lastFrameTime=performance.now();constructor(e){this.canvas=e;const t=e.getContext("2d");if(!t)throw new Error("Canvas 2D context not supported");this.ctx=t,this.weapons=new kn,this.renderer3d=new am(e,this.worldSize),this.handleResize(),window.addEventListener("resize",()=>this.handleResize()),this.bindInputs(),requestAnimationFrame(n=>this.loop(n))}handleResize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.renderer3d?.resize(window.innerWidth,window.innerHeight)}bindInputs(){window.addEventListener("keydown",t=>{const n=t.target?.tagName;n==="INPUT"||n==="TEXTAREA"||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),this.keys.add(t.code))}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),this.canvas.addEventListener("pointerdown",t=>{this.joyActive=!0,this.joyOriginX=t.clientX,this.joyOriginY=t.clientY,this.joyCurrentX=t.clientX,this.joyCurrentY=t.clientY}),window.addEventListener("pointermove",t=>{if(this.joyActive){this.joyCurrentX=t.clientX,this.joyCurrentY=t.clientY;const n=this.joyCurrentX-this.joyOriginX,i=this.joyCurrentY-this.joyOriginY,a=Math.hypot(n,i),r=this.JOY_MAX_RADIUS*1.45;if(a>r){const o=a-r;this.joyOriginX+=n/a*o,this.joyOriginY+=i/a*o}}});const e=()=>{this.joyActive=!1};window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e)}setSdkPause(e){this.isPausedBySdk=e,this.lastFrameTime=performance.now()}startNewRun(){const e=He.getInstance(),t=e.data.selectedCommander;this.weapons.equipped=[null,null,null,null,null,null],this.weapons.bench=[null,null,null,null,null,null],this.runBuffs={damageMult:0,attackSpeedMult:t==="valkyrie"?.15:0,critChance:t==="void_phantom"?.2:0,goldMult:0,magnetMult:0,moveSpeedMult:t==="void_phantom"?.3:t==="valkyrie"?.12:0},t==="valkyrie"?(this.weapons.equipped[0]=this.weapons.createWeapon("frost",1),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)):t==="tesla_engineer"?(this.weapons.equipped[0]=this.weapons.createWeapon("tesla",2),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)):t==="void_phantom"?(this.weapons.equipped[0]=this.weapons.createWeapon("sawblade",2),this.weapons.equipped[1]=this.weapons.createWeapon("missile",1)):(this.weapons.equipped[0]=this.weapons.createWeapon("plasma",1),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)),e.data.starterPackBought&&this.weapons.addWeaponToAvailableSlot(this.weapons.createWeapon("plasma",3)),this.player.level=1,this.player.xp=0,this.player.xpToNext=45,this.currentWave=1,this.runGoldEarned=0,this.runKills=0,this.runScore=0,this.revivedThisRun=!1,e.addGold(e.getStartingWaveGold()),this.startWave(1)}applyTacticalCard(e){const t=He.getInstance();switch(e){case"overclock":this.runBuffs.attackSpeedMult+=.2;break;case"crit_matrix":this.runBuffs.critChance=Math.min(.85,this.runBuffs.critChance+.15),this.runBuffs.damageMult+=.1;break;case"nanite_hull":this.player.maxHp+=40,this.player.hp=Math.min(this.player.maxHp,this.player.hp+50);break;case"scrap_harvester":this.runBuffs.goldMult+=.3,t.addGold(80),this.runGoldEarned+=80,this.waveGoldEarned+=80;break;case"grav_magnet":this.runBuffs.magnetMult+=.5,this.runBuffs.moveSpeedMult+=.12;break;case"plasma_core":this.runBuffs.damageMult+=.25;break}this.onHudUpdate?.()}startWave(e){const t=He.getInstance();this.currentWave=e;const n=e%5===0;this.waveDuration=n?45:Math.min(40,22+e*2),this.waveTimer=this.waveDuration,this.waveGoldEarned=0,this.player.x=this.worldSize/2,this.player.y=this.worldSize/2;const i=100+t.getBonusMaxHp()+(e-1)*12;if(this.player.maxHp=Math.max(this.player.maxHp,i),this.player.hp=this.player.maxHp,this.player.invulnTimer=1,this.enemies=[],this.projectiles=[],this.lightningBolts=[],this.frostRings=[],this.lootDrops=[],this.bossElapsedTime=0,this.bossRageStage=0,!t.data.vipUnlocked&&!this.tempAdSpeedWave&&(this.gameSpeedMultiplier=1),n){this.spawnEnemy("boss");for(let a=0;a<4;a++)this.spawnWaveEnemy()}this.state="PLAYING",this.onHudUpdate?.()}revivePlayerWithNuke(){this.revivedThisRun=!0,this.player.hp=this.player.maxHp,this.player.invulnTimer=3,this.screenShake=18,this.bossElapsedTime=0,this.bossRageStage=0,Me.getInstance().playExplosion();let e=0;for(let t=0;t<this.enemies.length;t++){const n=this.enemies[t];this.spawnParticles(n.x,n.y,n.color,14),n.type==="boss"&&(n.hp=Math.max(1,n.hp*.5),this.enemies[e++]=n)}this.enemies.length=e,this.state="PLAYING",this.onHudUpdate?.()}loop(e){const t=Math.min(.05,(e-this.lastFrameTime)/1e3);if(this.lastFrameTime=e,!this.isPausedBySdk&&this.state==="PLAYING"){const n=t*this.gameSpeedMultiplier;this.update(n)}this.render(),requestAnimationFrame(n=>this.loop(n))}update(e){const t=He.getInstance();let n=null;for(let _=0;_<this.enemies.length;_++)if(this.enemies[_].type==="boss"){n=this.enemies[_];break}if(this.waveTimer-=e,n){this.waveTimer<0&&(this.waveTimer=0),this.bossElapsedTime+=e;const _=Math.min(3,Math.floor(this.bossElapsedTime/10));if(_>this.bossRageStage){this.bossRageStage=_,n.damage=Math.round(n.damage*1.35),n.speed=Math.round(n.speed*1.18),n.radius=Math.round(n.radius*1.08),this.screenShake=15,Me.getInstance().playExplosion();const M=Q.getLang()==="tr"?`🔥 BOSS ÖFKE EVRESİ ${this.bossRageStage}! (+%35 HASAR)`:`🔥 BOSS RAGE STAGE ${this.bossRageStage}! (+35% DMG)`;this.spawnFloatingText(n.x,n.y-30,M,"#f97316",1.45)}if(this.bossElapsedTime>=34){this.screenShake=35,Me.getInstance().playExplosion(),this.spawnParticles(n.x,n.y,"#ef4444",45),this.spawnParticles(this.player.x,this.player.y,"#facc15",40);const M=Q.getLang()==="tr"?"💥 ARENA İNFİLAK ETTİ! (34sn SÜRE DOLDU)":"💥 ARENA DETONATED! (34s LIMIT)";this.spawnFloatingText(this.player.x,this.player.y-30,M,"#ef4444",1.55),this.player.hp=0,this.handlePlayerDeath();return}}else if(this.bossRageStage=0,this.waveTimer<=0){this.waveTimer=0,this.completeWave();return}let i=0,a=0;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(a-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(a+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(i-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(i+=1),i===0&&a===0&&this.joyActive){const _=this.joyCurrentX-this.joyOriginX,M=this.joyCurrentY-this.joyOriginY,E=Math.hypot(_,M);E>this.JOY_DEADZONE&&(i=_/E,a=M/E)}else if(i!==0||a!==0){const _=Math.hypot(i,a);i/=_,a/=_}const r=this.player.speed*(1+this.runBuffs.moveSpeedMult);if(this.player.x=Math.max(40,Math.min(this.worldSize-40,this.player.x+i*r*e)),this.player.y=Math.max(40,Math.min(this.worldSize-40,this.player.y+a*r*e)),(i!==0||a!==0)&&(this.player.angle=Math.atan2(a,i)),this.player.invulnTimer>0&&(this.player.invulnTimer-=e),this.screenShake>0&&(this.screenShake=Math.max(0,this.screenShake-e*35)),this.spawnTimer-=e,this.spawnTimer<=0){const _=Math.max(.22,1.15-this.currentWave*.065);this.spawnTimer=_,this.spawnWaveEnemy()}const o=t.getDamageMultiplier()*(1+this.runBuffs.damageMult),l=t.getAttackSpeedMultiplier()*(1+this.runBuffs.attackSpeedMult),c=this.weapons.equipped;for(let _=0;_<c.length;_++){const M=c[_];if(!M)continue;const E=_/kn.MAX_EQUIPPED*Math.PI*2;M.orbitAngle=E+performance.now()*.0018,M.cooldownTimer-=e;const A=this.player.x+Math.cos(M.orbitAngle)*48,T=this.player.y+Math.sin(M.orbitAngle)*48;M.cooldownTimer<=0&&(this.fireWeapon(M,A,T,o)?M.cooldownTimer=kn.getCooldown(M,l):M.cooldownTimer=.1)}let p=0;for(let _=0;_<this.projectiles.length;_++){const M=this.projectiles[_];M.x+=M.vx*e,M.y+=M.vy*e,M.life-=e,M.rotation!==void 0&&(M.rotation+=e*16);let E=M.life>0;if(E)for(let A=this.enemies.length-1;A>=0;A--){const T=this.enemies[A];if(M.hitEnemyIds.has(T.id))continue;if(Math.hypot(M.x-T.x,M.y-T.y)<=M.radius+T.radius)if(M.hitEnemyIds.add(T.id),M.splashRadius>0?this.triggerExplosionSplash(M.x,M.y,M.splashRadius,M.damage,M.color):this.damageEnemy(T,M.damage,M.color),M.pierce>0)M.pierce-=1;else{E=!1;break}}E&&(this.projectiles[p++]=M)}this.projectiles.length=p;for(let _=0;_<this.enemies.length;_++){const M=this.enemies[_];M.hitFlash>0&&(M.hitFlash-=e),M.slowTimer>0&&(M.slowTimer-=e);const E=Math.atan2(this.player.y-M.y,this.player.x-M.x),A=M.slowTimer>0?.5:1;if(M.x+=Math.cos(E)*M.speed*A*e,M.y+=Math.sin(E)*M.speed*A*e,Math.hypot(this.player.x-M.x,this.player.y-M.y)<this.player.radius+M.radius&&this.player.invulnTimer<=0&&(this.player.hp-=M.damage,this.player.invulnTimer=.45,this.screenShake=10,Me.getInstance().playHit(),this.spawnFloatingText(this.player.x,this.player.y-25,`-${M.damage} HP`,"#ef4444",1.25),this.player.hp<=0)){this.player.hp=0,this.handlePlayerDeath();return}}const g=t.getMagnetRadius()*(1+this.runBuffs.magnetMult);let h=!1,m=0;for(let _=0;_<this.lootDrops.length;_++){const M=this.lootDrops[_],E=Math.hypot(this.player.x-M.x,this.player.y-M.y);if(E<g){const d=Math.atan2(this.player.y-M.y,this.player.x-M.x);M.x+=Math.cos(d)*450*e,M.y+=Math.sin(d)*450*e}let A=!1;if(E<this.player.radius+M.radius+8){if(A=!0,M.type==="gold"){const T=Math.max(1,Math.round(M.value*(1+this.runBuffs.goldMult)));t.addGold(T),this.runGoldEarned+=T,this.waveGoldEarned+=T,this.spawnFloatingText(M.x,M.y,`+${T}g`,"#facc15",.95)}else M.type==="gem"?(t.addGems(M.value),this.spawnFloatingText(M.x,M.y,`+${M.value} 💎`,"#38bdf8",1.15)):M.type==="heal"&&(this.player.hp=Math.min(this.player.maxHp,this.player.hp+M.value),this.spawnFloatingText(M.x,M.y,`+${M.value} HP`,"#4ade80",1.1));M.xpValue>0&&(this.player.xp+=M.xpValue,this.player.xp>=this.player.xpToNext&&(this.player.xp-=this.player.xpToNext,this.player.level+=1,this.player.xpToNext=Math.round(this.player.xpToNext*1.38+20),t.recordLevelUp(1),h=!0)),Me.getInstance().playCoin()}A||(this.lootDrops[m++]=M)}this.lootDrops.length=m;let x=0;for(let _=0;_<this.lightningBolts.length;_++){const M=this.lightningBolts[_];M.alpha-=e*4.5,M.alpha>0&&(this.lightningBolts[x++]=M)}this.lightningBolts.length=x;let b=0;for(let _=0;_<this.frostRings.length;_++){const M=this.frostRings[_];M.currentRadius+=(M.maxRadius-M.currentRadius)*e*10,M.alpha-=e*2.5,M.alpha>0&&(this.frostRings[b++]=M)}this.frostRings.length=b;let f=0;for(let _=0;_<this.particles.length;_++){const M=this.particles[_];M.x+=M.vx*e,M.y+=M.vy*e,M.alpha-=M.decay*e,M.alpha>0&&(this.particles[f++]=M)}this.particles.length=f;let u=0;for(let _=0;_<this.floatingTexts.length;_++){const M=this.floatingTexts[_];M.y+=M.vy*e,M.alpha-=e*1.4,M.alpha>0&&(this.floatingTexts[u++]=M)}this.floatingTexts.length=u,this.onHudUpdate?.(),h&&(this.state="LEVEL_UP",Me.getInstance().playMerge(4),this.onLevelUp?.())}fireWeapon(e,t,n,i){const a=Gn[e.archetype];let r=kn.getDamage(e,i);const o=Math.random()<this.runBuffs.critChance;o&&(r=Math.round(r*2));let l=null,c=a.range;for(const h of this.enemies){const m=Math.hypot(h.x-t,h.y-n);m<=c&&(c=m,l=h)}if(!l)return!1;const p=Math.atan2(l.y-n,l.x-t),g=Us[e.tier-1]||a.color;if(e.archetype==="plasma")return this.projectiles.push({x:t,y:n,vx:Math.cos(p)*640,vy:Math.sin(p)*640,radius:5+e.tier,damage:r,color:o?"#facc15":a.color,pierce:e.tier>=4?1:0,splashRadius:0,life:1.2,hitEnemyIds:new Set}),Me.getInstance().playShoot(e.tier),!0;if(e.archetype==="sawblade")return this.projectiles.push({x:t,y:n,vx:Math.cos(p)*460,vy:Math.sin(p)*460,radius:12+e.tier*2,damage:r,color:o?"#facc15":g,pierce:2+e.tier*2,splashRadius:0,life:1.6,isSawblade:!0,rotation:0,hitEnemyIds:new Set}),Me.getInstance().playShoot(e.tier-2),!0;if(e.archetype==="missile")return this.projectiles.push({x:t,y:n,vx:Math.cos(p)*420,vy:Math.sin(p)*420,radius:8+e.tier,damage:r,color:a.color,pierce:0,splashRadius:65+e.tier*14,life:1.5,hitEnemyIds:new Set}),Me.getInstance().playShoot(-2),!0;if(e.archetype==="tesla"){const h=2+e.tier,m=new Set,x=[{x:t,y:n}];let b=t,f=n;for(let u=0;u<h;u++){let _=null,M=220;for(const E of this.enemies){if(m.has(E.id))continue;const A=Math.hypot(E.x-b,E.y-f);A<=M&&(M=A,_=E)}if(!_)break;m.add(_.id),x.push({x:_.x,y:_.y}),b=_.x,f=_.y,this.damageEnemy(_,r,a.color)}return this.lightningBolts.push({points:x,color:a.color,alpha:1}),Me.getInstance().playLightning(),!0}if(e.archetype==="frost"){const h=a.range+e.tier*18;for(let m=this.enemies.length-1;m>=0;m--){const x=this.enemies[m];Math.hypot(x.x-this.player.x,x.y-this.player.y)<=h&&(x.slowTimer=2.5+e.tier*.4,this.damageEnemy(x,r,a.color))}return this.frostRings.push({x:this.player.x,y:this.player.y,currentRadius:20,maxRadius:h,color:a.color,alpha:.9}),Me.getInstance().playShoot(3),!0}return!1}triggerExplosionSplash(e,t,n,i,a){this.screenShake=Math.max(this.screenShake,5),this.spawnParticles(e,t,a,16),Me.getInstance().playExplosion();for(let r=this.enemies.length-1;r>=0;r--){const o=this.enemies[r];Math.hypot(o.x-e,o.y-t)<=n+o.radius&&this.damageEnemy(o,i,a)}}damageEnemy(e,t,n){if(e.hp-=t,e.hitFlash=.1,this.spawnFloatingText(e.x+(Math.random()-.5)*16,e.y-e.radius,`${t}`,n,e.type==="boss"?1.2:.95),e.hp<=0){const i=this.enemies.indexOf(e);if(i!==-1){const a=this.enemies.pop();i<this.enemies.length&&a&&(this.enemies[i]=a)}this.runKills+=1,He.getInstance().recordKill(1),this.runScore+=e.goldValue*10,this.spawnParticles(e.x,e.y,e.color,e.type==="boss"?30:8),this.lootDrops.push({x:e.x,y:e.y,vx:0,vy:0,value:e.goldValue,xpValue:e.type==="boss"?80:12,type:"gold",radius:7}),e.type==="boss"||Math.random()<.04?this.lootDrops.push({x:e.x+12,y:e.y+8,vx:0,vy:0,value:e.type==="boss"?10:1,xpValue:15,type:"gem",radius:9}):Math.random()<.035&&this.lootDrops.push({x:e.x-10,y:e.y,vx:0,vy:0,value:20,xpValue:5,type:"heal",radius:8})}}spawnWaveEnemy(){const e=Math.random();this.currentWave>=4&&e<.14?this.spawnEnemy("tank"):this.currentWave>=3&&e<.32?this.spawnEnemy("charger"):this.currentWave>=2&&e<.55?this.spawnEnemy("speedster"):this.spawnEnemy("swarmer")}spawnEnemy(e){const t=Math.random()*Math.PI*2,n=560+Math.random()*160,i=Math.max(50,Math.min(this.worldSize-50,this.player.x+Math.cos(t)*n)),a=Math.max(50,Math.min(this.worldSize-50,this.player.y+Math.sin(t)*n)),r=Math.pow(1.24,this.currentWave-1),l={swarmer:{type:"swarmer",radius:14,hp:Math.round(28*r),maxHp:Math.round(28*r),speed:115,damage:Math.round(9*r),color:"#f43f5e",goldValue:Math.round(4+this.currentWave*1.5)},speedster:{type:"speedster",radius:11,hp:Math.round(19*r),maxHp:Math.round(19*r),speed:185,damage:Math.round(8*r),color:"#fbbf24",goldValue:Math.round(5+this.currentWave*1.8)},charger:{type:"charger",radius:17,hp:Math.round(52*r),maxHp:Math.round(52*r),speed:145,damage:Math.round(14*r),color:"#ec4899",goldValue:Math.round(8+this.currentWave*2.2)},tank:{type:"tank",radius:24,hp:Math.round(135*r),maxHp:Math.round(135*r),speed:78,damage:Math.round(20*r),color:"#a855f7",goldValue:Math.round(15+this.currentWave*3)},boss:{type:"boss",radius:48,hp:Math.round(3200*r),maxHp:Math.round(3200*r),speed:96,damage:Math.round(38*r),color:"#ef4444",goldValue:Math.round(250+this.currentWave*45)}}[e];this.enemies.push({id:this.enemyIdCounter++,x:i,y:a,slowTimer:0,hitFlash:0,...l})}completeWave(){const e=He.getInstance();for(const n of this.lootDrops)n.type==="gold"?(e.addGold(n.value),this.runGoldEarned+=n.value,this.waveGoldEarned+=n.value):n.type==="gem"&&e.addGems(n.value);this.lootDrops=[];const t=25+this.currentWave*15;e.addGold(t),this.waveGoldEarned+=t,this.runGoldEarned+=t,this.currentWave>e.data.highestWave&&(e.data.highestWave=this.currentWave),this.runScore>e.data.highScore&&(e.data.highScore=this.runScore),e.save(),this.tempAdSpeedWave=!1,this.state="SHOP",Me.getInstance().playWaveComplete(),this.onWaveComplete?.()}handlePlayerDeath(){const e=He.getInstance();this.runScore>e.data.highScore&&(e.data.highScore=this.runScore,e.save()),this.state=this.revivedThisRun?"GAMEOVER":"REVIVE_PROMPT",Me.getInstance().playExplosion(),this.onPlayerDeath?.()}spawnParticles(e,t,n,i){for(let a=0;a<i;a++){const r=Math.random()*Math.PI*2,o=40+Math.random()*190;this.particles.push({x:e,y:t,vx:Math.cos(r)*o,vy:Math.sin(r)*o,radius:2+Math.random()*3.5,color:n,alpha:1,decay:1.5+Math.random()*1.5})}}spawnFloatingText(e,t,n,i,a=1){this.floatingTexts.push({x:e,y:t,text:n,color:i,alpha:1,vy:-48,scale:a})}render(){this.renderer3d.renderScene({player:this.player,equippedWeapons:this.weapons.equipped,enemies:this.enemies,projectiles:this.projectiles,lootDrops:this.lootDrops,frostRings:this.frostRings,lightningBolts:this.lightningBolts,particles:this.particles,screenShake:this.screenShake,bossRageStage:this.bossRageStage});const e=this.ctx,t=this.canvas.width,n=this.canvas.height;e.clearRect(0,0,t,n);let i=null;for(let a=0;a<this.enemies.length;a++){const r=this.enemies[a];if(r.type==="boss"&&(i=r),r.hp<r.maxHp||r.type==="boss"){const o=this.renderer3d.worldToScreen(r.x,r.y,r.radius*2+12);if(!o.visible)continue;const l=r.type==="boss"?96:Math.max(32,r.radius*2.2),c=r.type==="boss"?8:5,p=o.x-l/2,g=o.y-c/2;e.fillStyle="rgba(2, 6, 23, 0.8)",e.fillRect(p-1,g-1,l+2,c+2),e.fillStyle=r.type==="boss"?"#f43f5e":"#22c55e",e.fillRect(p,g,l*Math.max(0,r.hp/r.maxHp),c)}}if(i&&this.state==="PLAYING"){const a=Math.min(560,t*.84),r=22,o=(t-a)/2,l=72,c=Math.max(0,i.hp/i.maxHp),p=Math.max(0,34-this.bossElapsedTime);e.save(),e.fillStyle="rgba(15, 23, 42, 0.92)",e.strokeStyle=p<10?"#facc15":"#f43f5e",e.lineWidth=2,e.fillRect(o,l,a,r),e.strokeRect(o,l,a,r),e.fillStyle=this.bossRageStage>0?"#f97316":"#e11d48",e.fillRect(o+2,l+2,(a-4)*c,r-4),e.font="700 11px Orbitron, sans-serif",e.fillStyle="#ffffff",e.textAlign="center";const g=this.bossRageStage>0?` • 🔥 RAGE ${this.bossRageStage}/3`:"",h=Q.getLang()==="tr"?`⚠️ BOSS (HP ${Math.ceil(i.hp)}/${i.maxHp})${g} • 💥 İNFİLAK: ${p.toFixed(1)}sn`:`⚠️ BOSS (HP ${Math.ceil(i.hp)}/${i.maxHp})${g} • 💥 DETONATION: ${p.toFixed(1)}s`;e.fillText(h,t/2,l+15),e.restore()}for(let a=0;a<this.floatingTexts.length;a++){const r=this.floatingTexts[a],o=(1-r.alpha)*42,l=this.renderer3d.worldToScreen(r.x,r.y,28+o);l.visible&&(e.save(),e.globalAlpha=Math.max(0,r.alpha),e.font=`700 ${Math.round(15*r.scale)}px Orbitron, sans-serif`,e.fillStyle=r.color,e.strokeStyle="rgba(0,0,0,0.75)",e.lineWidth=3,e.textAlign="center",e.strokeText(r.text,l.x,l.y),e.fillText(r.text,l.x,l.y),e.restore())}this.joyActive&&this.state==="PLAYING"&&this.drawVirtualJoystick(e)}drawVirtualJoystick(e){const t=this.joyCurrentX-this.joyOriginX,n=this.joyCurrentY-this.joyOriginY,i=Math.hypot(t,n),a=Math.min(i,this.JOY_MAX_RADIUS),r=Math.atan2(n,t),o=this.joyOriginX+(i>0?Math.cos(r)*a:0),l=this.joyOriginY+(i>0?Math.sin(r)*a:0);e.save(),e.beginPath(),e.arc(this.joyOriginX,this.joyOriginY,this.JOY_MAX_RADIUS,0,Math.PI*2),e.fillStyle="rgba(56, 189, 248, 0.12)",e.fill(),e.lineWidth=2.5,e.strokeStyle="rgba(56, 189, 248, 0.55)",e.stroke(),i>this.JOY_DEADZONE&&(e.beginPath(),e.moveTo(this.joyOriginX,this.joyOriginY),e.lineTo(o,l),e.strokeStyle="rgba(56, 189, 248, 0.35)",e.lineWidth=2,e.stroke()),e.beginPath(),e.arc(o,l,20,0,Math.PI*2),e.fillStyle="#38bdf8",e.shadowColor="#38bdf8",e.shadowBlur=12,e.fill(),e.lineWidth=2.5,e.strokeStyle="#ffffff",e.stroke(),e.restore()}}const Ul=[{id:"starter_pack",title:"Cyber Starter Bundle",description:"+1,500 Gold, +100 Gems & Instant Tier-3 Epic Plasma Blaster",priceUsd:1.99,badge:"BEST VALUE"},{id:"vip_speed",title:"VIP Overclock Pass",description:"Permanently Unlock 2x Turbo Game Speed + +500 Gems + No Forced Interstitials",priceUsd:4.99,badge:"MOST POPULAR"},{id:"gem_vault_small",title:"Neon Gem Pouch",description:"+150 Cyber Gems for Legendary Crates & Instant Merges",priceUsd:.99},{id:"gem_vault_mega",title:"Quantum Gem Vault",description:"+1,000 Cyber Gems + 5,000 Bonus Gold",priceUsd:7.99,badge:"WHALE PACK"}];class Ct{static instance;activePlatform="Simulator";overlayContainer=null;onPauseGame;onResumeGame;constructor(){this.detectPlatform()}static getInstance(){return Ct.instance||(Ct.instance=new Ct),Ct.instance}bindEngineCallbacks(e,t){this.onPauseGame=e,this.onResumeGame=t,this.overlayContainer=document.getElementById("sdk-overlay")}detectPlatform(){typeof window<"u"&&(window.PokiSDK?(this.activePlatform="Poki",window.PokiSDK.init().catch(()=>{})):window.CrazyGames?.SDK?this.activePlatform="CrazyGames":this.activePlatform="Simulator")}async showRewardedAd(e){if(this.onPauseGame?.(),Me.getInstance().setAdMuted(!0),window.PokiSDK?.gameplayStop?.(),this.activePlatform==="Poki"&&window.PokiSDK)try{const t=await window.PokiSDK.rewardedBreak();return Me.getInstance().setAdMuted(!1),window.PokiSDK.gameplayStart?.(),t&&(He.getInstance().recordAdRevenue("rewarded",25),Me.getInstance().playCashRegister()),this.onResumeGame?.(),t}catch{return Me.getInstance().setAdMuted(!1),this.onResumeGame?.(),!1}return this.activePlatform==="CrazyGames"&&window.CrazyGames?.SDK?.ad?new Promise(t=>{window.CrazyGames.SDK.ad.requestAd("rewarded",{adFinished:()=>{Me.getInstance().setAdMuted(!1),He.getInstance().recordAdRevenue("rewarded",25),Me.getInstance().playCashRegister(),this.onResumeGame?.(),t(!0)},adError:()=>{Me.getInstance().setAdMuted(!1),this.onResumeGame?.(),t(!1)}})}):this.runSimulatedRewardedAd(e)}async showInterstitialAd(e){if(!He.getInstance().data.vipUnlocked){if(this.onPauseGame?.(),this.activePlatform==="Poki"&&window.PokiSDK){await window.PokiSDK.commercialBreak(),He.getInstance().recordAdRevenue("interstitial",12),this.onResumeGame?.();return}await this.runSimulatedInterstitialAd(e)}}async purchaseProduct(e){const t=Ul.find(i=>i.id===e);if(!t)return!1;this.onPauseGame?.();const n=await this.runSimulatedStripeCheckout(t);return this.onResumeGame?.(),n&&(He.getInstance().recordIapRevenue(t.priceUsd),Me.getInstance().playCashRegister()),n}runSimulatedRewardedAd(e){return new Promise(t=>{if(!this.overlayContainer){this.onResumeGame?.(),t(!0);return}let n=3;this.overlayContainer.innerHTML=`
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
      `;const i=document.getElementById("sdk-ad-timer"),a=document.getElementById("sdk-claim-ad"),r=document.getElementById("sdk-cancel-ad"),o=window.setInterval(()=>{n-=1,n>0?(i&&(i.textContent=`Reward in ${n}s...`),a&&(a.textContent=`Wait ${n}s...`)):(window.clearInterval(o),i&&(i.textContent="REWARD GRANTED ✓"),a&&(a.disabled=!1,a.textContent="CLAIM REWARD (+Revenue)",a.classList.add("pulse-glow")))},850),l=c=>{window.clearInterval(o),this.overlayContainer&&(this.overlayContainer.innerHTML=""),Me.getInstance().setAdMuted(!1),c&&(He.getInstance().recordAdRevenue("rewarded",25),Me.getInstance().playCashRegister()),this.onResumeGame?.(),t(c)};a?.addEventListener("click",()=>l(!0)),r?.addEventListener("click",()=>l(!1))})}runSimulatedInterstitialAd(e){return new Promise(t=>{if(!this.overlayContainer){this.onResumeGame?.(),t();return}this.overlayContainer.innerHTML=`
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
      `,document.getElementById("sdk-close-interstitial")?.addEventListener("click",()=>{this.overlayContainer&&(this.overlayContainer.innerHTML=""),Me.getInstance().setAdMuted(!1),He.getInstance().recordAdRevenue("interstitial",12),Me.getInstance().playCashRegister(),this.onResumeGame?.(),t()})})}runSimulatedStripeCheckout(e){return new Promise(t=>{if(!this.overlayContainer){t(!0);return}this.overlayContainer.innerHTML=`
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
      `;const n=i=>{this.overlayContainer&&(this.overlayContainer.innerHTML=""),t(i)};document.getElementById("sdk-confirm-iap")?.addEventListener("click",()=>n(!0)),document.getElementById("sdk-cancel-iap")?.addEventListener("click",()=>n(!1))})}}const lm=[{name:"NEXUS_OVERLORD",wave:38,score:194500,vip:!0},{name:"VALKYRIE_X9",wave:34,score:162800,vip:!0},{name:"KRONOS_PRIME",wave:30,score:138400,vip:!0},{name:"CYBER_SHOGUN",wave:27,score:112900,vip:!1},{name:"ZERO_COOL_US",wave:24,score:94200,vip:!0},{name:"NOVA_STRIKER",wave:21,score:78500,vip:!1},{name:"AETHER_WOLF",wave:18,score:61400,vip:!0},{name:"VOLT_HUNTER",wave:15,score:45200,vip:!1},{name:"PHANTOM_BLADE",wave:12,score:31800,vip:!1},{name:"OMEGA_DRIFTER",wave:10,score:22400,vip:!1},{name:"BYTE_RANGER",wave:8,score:14900,vip:!1},{name:"NEON_ROOKIE",wave:5,score:7600,vip:!1},{name:"SCRAP_PILOT",wave:3,score:3200,vip:!1}];class cm{engine;uiLayer;selectedSlot=null;shopOffers=[];draftedLevelCards=[];waveBonusDoubled=!1;showDevMetrics=typeof window<"u"&&window.location.search.includes("dev=1");hudEls=null;constructor(e){this.engine=e;const t=document.getElementById("ui-layer");if(!t)throw new Error("#ui-layer not found");this.uiLayer=t,this.engine.onHudUpdate=()=>this.updateTopHudValues(),this.engine.onLevelUp=()=>this.openLevelUpModal(),this.engine.onWaveComplete=()=>this.openBetweenWaveWorkshop(),this.engine.onPlayerDeath=()=>this.openDeathModal(),He.getInstance().onChange(()=>this.updateTopHudValues()),window.addEventListener("keydown",n=>{if(n.code==="F9"){this.showDevMetrics=!this.showDevMetrics;const i=document.getElementById("hud-rev");i&&(i.style.display=this.showDevMetrics?"flex":"none");const a=document.getElementById("menu-dev-rev");a&&(a.style.display=this.showDevMetrics?"flex":"none")}}),this.renderMainMenu()}resetToInGameHud(){this.uiLayer.innerHTML=this.renderTopHud(),this.bindTopHudEvents()}cacheHudElements(){this.hudEls={hpFill:document.getElementById("hud-hp-fill"),hpText:document.getElementById("hud-hp-text"),xpFill:document.getElementById("hud-xp-fill"),lvlText:document.getElementById("hud-lvl-text"),waveNum:document.getElementById("hud-wave-num"),waveTimer:document.getElementById("hud-wave-timer"),gold:document.getElementById("hud-gold"),gems:document.getElementById("hud-gems"),rev:document.getElementById("hud-revenue"),speedBtn:document.getElementById("btn-speed-toggle")}}renderTopHud(){const e=He.getInstance().data,t=this.engine.player,n=Math.max(0,Math.min(100,t.hp/t.maxHp*100)),i=Math.max(0,Math.min(100,t.xp/t.xpToNext*100)),a=this.engine.gameSpeedMultiplier===2,r=e.language==="tr"?"🌐 TR | EN":"🌐 EN | TR";return`
      <header class="top-hud">
        <div class="hud-left">
          <div class="hp-bar-wrap">
            <div id="hud-hp-fill" class="hp-bar-fill" style="width: ${n}%"></div>
            <span id="hud-hp-text" class="hp-bar-label">HP ${Math.ceil(t.hp)} / ${t.maxHp}</span>
          </div>
          <div class="xp-bar-wrap" title="In-Run Tactical XP">
            <div id="hud-xp-fill" class="xp-bar-fill" style="width: ${i}%"></div>
            <span id="hud-lvl-text" class="hp-bar-label">${Q.t("lvl_label")} ${t.level}</span>
          </div>
          <div class="wave-pill">
            <span id="hud-wave-num">${Q.t("wave_label")} ${this.engine.currentWave}</span>
            <strong id="hud-wave-timer">${Math.ceil(this.engine.waveTimer)}s</strong>
          </div>
        </div>

        <div class="hud-center">
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
          <button id="btn-speed-toggle" class="btn-hud ${a?"active-speed":""}">
            ⚡ ${a?Q.t("speed_2x_on"):Q.t("speed_1x_btn")}
          </button>
          <button id="btn-open-crates" class="btn-hud">
            🎁 ${Q.t("hud_crates_btn")}
          </button>
          <button id="btn-open-missions" class="btn-hud">
            📋 ${Q.t("hud_missions_btn")}
          </button>
          <button id="btn-open-ranks" class="btn-hud">
            🏆 ${Q.t("hud_ranks_btn")}
          </button>
          <button id="btn-open-store" class="btn-hud btn-vip">
            💎 ${Q.t("vip_store_btn")}
          </button>
          <button id="btn-lang-toggle" class="btn-hud" title="Switch Language (Default: English)">
            ${r}
          </button>
          <button id="btn-sound-toggle" class="btn-hud">
            ${e.soundEnabled?"🔊":"🔇"}
          </button>
        </div>
      </header>
    `}bindTopHudEvents(){this.cacheHudElements(),document.getElementById("btn-speed-toggle")?.addEventListener("click",async()=>{Me.getInstance().playClick();const e=He.getInstance();if(this.engine.gameSpeedMultiplier===2){this.engine.gameSpeedMultiplier=1,this.updateTopHudValues();return}e.data.vipUnlocked||this.engine.tempAdSpeedWave?(this.engine.gameSpeedMultiplier=2,this.updateTopHudValues()):await Ct.getInstance().showRewardedAd("Unlock 2x Turbo Speed (Current Wave)")&&(this.engine.tempAdSpeedWave=!0,this.engine.gameSpeedMultiplier=2,this.updateTopHudValues())}),document.getElementById("btn-open-crates")?.addEventListener("click",()=>{Me.getInstance().playClick(),this.openCratesModal()}),document.getElementById("btn-open-missions")?.addEventListener("click",()=>{Me.getInstance().playClick(),this.openMissionsModal()}),document.getElementById("btn-open-ranks")?.addEventListener("click",()=>{Me.getInstance().playClick(),this.openLeaderboardModal()}),document.getElementById("btn-open-store")?.addEventListener("click",()=>{Me.getInstance().playClick(),this.openStoreModal()}),document.getElementById("btn-lang-toggle")?.addEventListener("click",()=>{Me.getInstance().playClick(),He.getInstance().toggleLanguage(),this.engine.state==="MENU"?this.renderMainMenu():this.engine.state==="SHOP"?this.renderWorkshopModal():this.engine.state==="LEVEL_UP"?this.renderLevelUpModal():this.engine.state==="REVIVE_PROMPT"||this.engine.state==="GAMEOVER"?this.openDeathModal():this.resetToInGameHud()}),document.getElementById("btn-sound-toggle")?.addEventListener("click",e=>{const t=He.getInstance();t.data.soundEnabled=!t.data.soundEnabled,t.save(),e.currentTarget.textContent=t.data.soundEnabled?"🔊":"🔇"})}updateHUD(){this.updateTopHudValues()}updateTopHudValues(){(!this.hudEls||!this.hudEls.hpFill)&&this.cacheHudElements();const e=this.hudEls;if(!e||!e.hpFill)return;const t=He.getInstance().data,n=this.engine.player,i=`${Math.max(0,Math.min(100,n.hp/n.maxHp*100))}%`;e.hpFill.style.width!==i&&(e.hpFill.style.width=i);const a=`HP ${Math.ceil(n.hp)} / ${n.maxHp}`;e.hpText&&e.hpText.textContent!==a&&(e.hpText.textContent=a);const r=`${Math.max(0,Math.min(100,n.xp/n.xpToNext*100))}%`;e.xpFill&&e.xpFill.style.width!==r&&(e.xpFill.style.width=r);const o=`${Q.t("lvl_label")} ${n.level}`;e.lvlText&&e.lvlText.textContent!==o&&(e.lvlText.textContent=o);const l=`${Q.t("wave_label")} ${this.engine.currentWave}`;e.waveNum&&e.waveNum.textContent!==l&&(e.waveNum.textContent=l);const c=`${Math.ceil(this.engine.waveTimer)}s`;e.waveTimer&&e.waveTimer.textContent!==c&&(e.waveTimer.textContent=c);const p=t.gold.toLocaleString();e.gold&&e.gold.textContent!==p&&(e.gold.textContent=p);const g=t.gems.toLocaleString();e.gems&&e.gems.textContent!==g&&(e.gems.textContent=g);const h=`$${t.totalRevenueSimulated.toFixed(2)}`;if(e.rev&&e.rev.textContent!==h&&(e.rev.textContent=h),e.speedBtn){const m=this.engine.gameSpeedMultiplier===2,x=`⚡ ${m?Q.t("speed_2x_on"):Q.t("speed_1x_btn")}`;e.speedBtn.textContent!==x&&(e.speedBtn.textContent=x,e.speedBtn.classList.toggle("active-speed",m))}}renderMainMenu(){const e=He.getInstance(),t=e.data,n=t.language==="tr";this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel main-menu-panel">
          <div class="menu-top-row">
            <div class="hero-badge">${Q.t("hero_badge")}</div>
            <div class="lang-switch-group" role="group" aria-label="Language Selector">
              <button id="btn-menu-lang-en" class="btn-lang-pill ${n?"":"active-lang"}">🇬🇧 ENGLISH (EN)</button>
              <button id="btn-menu-lang-tr" class="btn-lang-pill ${n?"active-lang":""}">🇹🇷 TÜRKÇE (TR)</button>
            </div>
          </div>
          <h1 class="game-title">NEXUS SURVIVORS<span>${Q.t("game_subtitle")}</span></h1>
          <p class="hero-subtitle">${Q.t("hero_desc")}</p>

          <div class="stats-banner">
            <div><span>${Q.t("stat_highest_wave")}</span><strong>${Q.t("wave_label")} ${t.highestWave}</strong></div>
            <div><span>${Q.t("stat_high_score")}</span><strong>${t.highScore.toLocaleString()}</strong></div>
            <div><span>${Q.t("stat_ads_watched")}</span><strong>${t.rewardedAdsWatched+t.interstitialAdsWatched}</strong></div>
            <div id="menu-dev-rev" style="display: ${this.showDevMetrics?"flex":"none"}"><span>${Q.t("stat_sim_rev")}</span><strong class="text-green">$${t.totalRevenueSimulated.toFixed(2)}</strong></div>
          </div>

          <div class="workshop-section">
            <h3>${Q.t("commanders_title")}</h3>
            <div class="commanders-grid">
              ${this.renderCommanderCard("vanguard","🤖",Q.t("cmd_vanguard_name"),Q.t("cmd_vanguard_role"),Q.t("cmd_vanguard_desc"),"#0ea5e9",!1,0)}
              ${this.renderCommanderCard("valkyrie","🪽",Q.t("cmd_valkyrie_name"),Q.t("cmd_valkyrie_role"),Q.t("cmd_valkyrie_desc"),"#ec4899",!1,0)}
              ${this.renderCommanderCard("tesla_engineer","🌩️",Q.t("cmd_tesla_name"),Q.t("cmd_tesla_role"),Q.t("cmd_tesla_desc"),"#a855f7",!0,180)}
              ${this.renderCommanderCard("void_phantom","🥷",Q.t("cmd_phantom_name"),Q.t("cmd_phantom_role"),Q.t("cmd_phantom_desc"),"#f43f5e",!0,250)}
            </div>
          </div>

          <div class="meta-upgrades-grid">
            ${this.renderMetaUpgradeCard("damageLevel",Q.t("meta_dmg_title"),Q.t("meta_dmg_desc"))}
            ${this.renderMetaUpgradeCard("maxHpLevel",Q.t("meta_hp_title"),Q.t("meta_hp_desc"))}
            ${this.renderMetaUpgradeCard("attackSpeedLevel",Q.t("meta_spd_title"),Q.t("meta_spd_desc"))}
            ${this.renderMetaUpgradeCard("startingGoldLevel",Q.t("meta_gold_title"),Q.t("meta_gold_desc"))}
          </div>

          <div class="menu-actions">
            <button id="btn-start-run" class="btn-primary btn-xl pulse-glow">${Q.t("btn_start_run")}</button>
            <button id="btn-free-gold-ad" class="btn-ad">${Q.t("btn_free_gold_ad")}</button>
            <button id="btn-menu-crates" class="btn-gold">🎁 ${Q.t("hud_crates_btn")}</button>
            <button id="btn-menu-missions" class="btn-secondary">📋 ${Q.t("hud_missions_btn")}</button>
            <button id="btn-menu-ranks" class="btn-secondary">🏆 ${Q.t("hud_ranks_btn")}</button>
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),document.getElementById("btn-menu-lang-en")?.addEventListener("click",()=>{Me.getInstance().playClick(),e.setLanguage("en"),this.renderMainMenu()}),document.getElementById("btn-menu-lang-tr")?.addEventListener("click",()=>{Me.getInstance().playClick(),e.setLanguage("tr"),this.renderMainMenu()}),document.getElementById("btn-start-run")?.addEventListener("click",()=>{Me.getInstance().playClick(),this.resetToInGameHud(),this.engine.startNewRun()}),document.getElementById("btn-free-gold-ad")?.addEventListener("click",async()=>{Me.getInstance().playClick(),await Ct.getInstance().showRewardedAd("Menu Free Gold & Gem Drop")&&(e.addGold(250),e.addGems(10),this.renderMainMenu())}),document.getElementById("btn-menu-crates")?.addEventListener("click",()=>{Me.getInstance().playClick(),this.openCratesModal()}),document.getElementById("btn-menu-missions")?.addEventListener("click",()=>{Me.getInstance().playClick(),this.openMissionsModal()}),document.getElementById("btn-menu-ranks")?.addEventListener("click",()=>{Me.getInstance().playClick(),this.openLeaderboardModal()}),this.uiLayer.querySelectorAll("[data-cmd-select]").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.cmdSelect,r=i.dataset.cmdMode;if(r==="select")e.data.selectedCommander=a,e.save(),Me.getInstance().playClick(),this.renderMainMenu();else if(r==="vip")Me.getInstance().playClick(),this.openStoreModal();else if(r==="gems"){const o=a==="tesla_engineer"?180:250;e.spendGems(o)?(e.unlockCommander(a),Me.getInstance().playMerge(4),this.renderMainMenu()):this.openStoreModal()}})}),this.uiLayer.querySelectorAll("[data-meta-buy]").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.metaBuy;e.buyMetaUpgrade(a)?(Me.getInstance().playMerge(2),this.renderMainMenu()):Me.getInstance().playHit()})})}renderCommanderCard(e,t,n,i,a,r,o,l){const c=He.getInstance(),p=c.isCommanderUnlocked(e),g=c.data.selectedCommander===e;let h="";return p?h=`
        <button data-cmd-select="${e}" data-cmd-mode="select" class="${g?"btn-gold":"btn-primary"}">
          ${g?Q.t("cmd_selected"):Q.t("cmd_select")}
        </button>
      `:h=`
        <div class="cmd-unlock-btns">
          <button data-cmd-select="${e}" data-cmd-mode="vip" class="btn-buy">${Q.t("cmd_unlock_vip")}</button>
          <button data-cmd-select="${e}" data-cmd-mode="gems" class="btn-ad">${Q.t("cmd_unlock_gems",{gems:l})}</button>
        </div>
      `,`
      <div class="commander-card ${g?"cmd-active":""}" style="border-color: ${g?r:"rgba(148,163,184,0.25)"}">
        <div class="cmd-top">
          <span class="cmd-icon" style="background: ${r}22; border-color: ${r}">${t}</span>
          <div>
            <span class="lvl-tag" style="margin-left:0; color: ${o?"#facc15":"#38bdf8"}">${i}</span>
            <h4>${n}</h4>
            <p>${a}</p>
          </div>
        </div>
        ${h}
      </div>
    `}renderMetaUpgradeCard(e,t,n){const i=He.getInstance(),a=i.data.meta[e],r=i.getMetaUpgradeCost(e),o=i.data.gold>=r;return`
      <div class="meta-card">
        <div class="meta-info">
          <h4>${t} <span class="lvl-tag">Lv.${a}</span></h4>
          <p>${n}</p>
        </div>
        <button data-meta-buy="${e}" class="btn-buy ${o?"":"disabled"}" ${o?"":"disabled"}>
          🪙 ${r}
        </button>
      </div>
    `}openLevelUpModal(){const e=[...rm].sort(()=>Math.random()-.5);this.draftedLevelCards=e.slice(0,3),this.renderLevelUpModal()}renderLevelUpModal(){const e=Q.getLang()==="tr";this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel levelup-panel">
          <div class="workshop-header">
            <div>
              <h2>${Q.t("levelup_title",{level:this.engine.player.level})}</h2>
              <p>${Q.t("levelup_sub")}</p>
            </div>
            <button id="btn-take-all-cards-ad" class="btn-ad pulse-glow">${Q.t("btn_take_all_3")}</button>
          </div>

          <div class="tactical-cards-grid">
            ${this.draftedLevelCards.map((t,n)=>`
              <div class="tactical-card" style="border-color: ${t.color}" data-pick-card="${n}">
                <div class="tactical-icon">${t.icon}</div>
                <h3>${e?t.titleTr:t.titleEn}</h3>
                <p>${e?t.descTr:t.descEn}</p>
                <button class="btn-primary">${Q.t("btn_select_card")}</button>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),this.uiLayer.querySelectorAll("[data-pick-card]").forEach(t=>{t.addEventListener("click",()=>{const n=Number(t.dataset.pickCard),i=this.draftedLevelCards[n];i&&(Me.getInstance().playClick(),this.engine.applyTacticalCard(i.id),this.resetToInGameHud(),this.engine.state="PLAYING")})}),document.getElementById("btn-take-all-cards-ad")?.addEventListener("click",async()=>{if(Me.getInstance().playClick(),await Ct.getInstance().showRewardedAd("Take All 3 Level-Up Tactical Cards")){for(const n of this.draftedLevelCards)this.engine.applyTacticalCard(n.id);this.resetToInGameHud(),this.engine.state="PLAYING"}})}openBetweenWaveWorkshop(){this.selectedSlot=null,this.waveBonusDoubled=!1,this.rollShopOffers(),this.renderWorkshopModal()}rollShopOffers(){const e=Object.keys(Gn);this.shopOffers=[];for(let t=0;t<3;t++){const n=e[Math.floor(Math.random()*e.length)],i=Gn[n],a=this.engine.currentWave>=4&&Math.random()<.3?2:1,r=Math.round((i.baseCost+this.engine.currentWave*6)*Math.pow(2,a-1));this.shopOffers.push({archetype:n,tier:a,cost:r,purchased:!1})}}renderWorkshopModal(){const e=He.getInstance(),t=e.getDamageMultiplier()*(1+this.engine.runBuffs.damageMult),n=(i,a,r)=>{const o=this.selectedSlot?.group===a&&this.selectedSlot?.index===r;if(!i)return`
          <div class="weapon-slot empty-slot ${o?"selected-slot":""}" data-slot-group="${a}" data-slot-idx="${r}">
            <span class="slot-placeholder">${a==="equipped"?"EQUIP SLOT":"BENCH"}</span>
          </div>
        `;const l=Gn[i.archetype],c=Us[i.tier-1],p=Math.round(l.baseDamage*Math.pow(2.15,i.tier-1)*t);return`
        <div class="weapon-slot filled-slot ${o?"selected-slot":""}"
             style="border-color: ${c}; box-shadow: 0 0 12px ${c}33"
             data-slot-group="${a}" data-slot-idx="${r}">
          <div class="slot-tier-badge" style="background: ${c}">T${i.tier} ${zo[i.tier-1]}</div>
          <div class="slot-icon">${l.icon}</div>
          <div class="slot-name">${l.name}</div>
          <div class="slot-dmg">⚔️ ${p} DMG</div>
          <button class="btn-sell-slot" data-sell-group="${a}" data-sell-idx="${r}" title="Sell Weapon">🪙 Sell</button>
        </div>
      `};this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel workshop-panel">
          <div class="workshop-header">
            <div>
              <h2>${Q.t("workshop_title",{wave:this.engine.currentWave})}</h2>
              <p>${Q.t("workshop_sub")}</p>
            </div>
            <div class="workshop-header-btns">
              <button id="btn-auto-merge" class="btn-gold">${Q.t("btn_auto_merge")}</button>
              ${this.waveBonusDoubled?`<span class="badge-claimed">${Q.t("badge_bonus_claimed")}</span>`:`<button id="btn-double-wave-ad" class="btn-ad">${Q.t("btn_double_wave_ad",{gold:this.engine.waveGoldEarned})}</button>`}
            </div>
          </div>

          <div class="workshop-section">
            <h3>${Q.t("active_slots_title")}</h3>
            <div class="slots-grid">
              ${this.engine.weapons.equipped.map((i,a)=>n(i,"equipped",a)).join("")}
            </div>
          </div>

          <div class="workshop-section">
            <h3>${Q.t("bench_slots_title")}</h3>
            <div class="slots-grid">
              ${this.engine.weapons.bench.map((i,a)=>n(i,"bench",a)).join("")}
            </div>
          </div>

          <div class="workshop-section shop-offers-section">
            <div class="shop-bar-header">
              <h3>${Q.t("armory_title")}</h3>
              <div class="shop-reroll-btns">
                <button id="btn-reroll-gold" class="btn-secondary">${Q.t("btn_reroll_gold")}</button>
                <button id="btn-reroll-ad" class="btn-ad">${Q.t("btn_reroll_ad")}</button>
              </div>
            </div>
            <div class="shop-offers-grid">
              ${this.shopOffers.map((i,a)=>{const r=Gn[i.archetype],o=Us[i.tier-1],l=!i.purchased&&e.data.gold>=i.cost&&this.engine.weapons.hasFreeSlot();return`
                    <div class="shop-offer-card ${i.purchased?"sold-out":""}" style="border-color: ${o}">
                      <div class="slot-tier-badge" style="background: ${o}">T${i.tier} ${zo[i.tier-1]}</div>
                      <div class="offer-main">
                        <span class="offer-icon">${r.icon}</span>
                        <div>
                          <h4>${r.name}</h4>
                          <p>${r.description}</p>
                        </div>
                      </div>
                      <button data-buy-offer="${a}" class="btn-primary ${l?"":"disabled"}" ${l?"":"disabled"}>
                        ${i.purchased?"PURCHASED ✓":`BUY • 🪙 ${i.cost}`}
                      </button>
                    </div>
                  `}).join("")}
            </div>
          </div>

          <div class="workshop-footer">
            <button id="btn-Menu-return" class="btn-secondary">${Q.t("btn_main_menu")}</button>
            <button id="btn-next-wave" class="btn-primary btn-xl pulse-glow">${Q.t("btn_next_wave",{wave:this.engine.currentWave+1})}</button>
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),this.bindWorkshopEvents()}bindWorkshopEvents(){const e=He.getInstance();this.uiLayer.querySelectorAll("[data-slot-group]").forEach(t=>{t.addEventListener("click",n=>{if(n.target.hasAttribute("data-sell-group"))return;const i=t.dataset.slotGroup,a=Number(t.dataset.slotIdx);this.selectedSlot?(this.engine.weapons.interactSlots(this.selectedSlot.group,this.selectedSlot.index,i,a),this.selectedSlot=null,this.renderWorkshopModal()):(i==="equipped"&&this.engine.weapons.equipped[a]||i==="bench"&&this.engine.weapons.bench[a])&&(this.selectedSlot={group:i,index:a},Me.getInstance().playClick(),this.renderWorkshopModal())})}),this.uiLayer.querySelectorAll("[data-sell-group]").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const i=t.dataset.sellGroup,a=Number(t.dataset.sellIdx),r=this.engine.weapons.sellWeapon(i,a);r>0&&(e.addGold(r),this.renderWorkshopModal())})}),document.getElementById("btn-auto-merge")?.addEventListener("click",()=>{this.engine.weapons.autoMergeAll(),this.renderWorkshopModal()}),document.getElementById("btn-double-wave-ad")?.addEventListener("click",async()=>{await Ct.getInstance().showRewardedAd("2x Wave Clear Gold Bonus")&&!this.waveBonusDoubled&&(this.waveBonusDoubled=!0,e.addGold(this.engine.waveGoldEarned),this.renderWorkshopModal())}),this.uiLayer.querySelectorAll("[data-buy-offer]").forEach(t=>{t.addEventListener("click",()=>{const n=Number(t.dataset.buyOffer),i=this.shopOffers[n];if(!(!i||i.purchased)&&this.engine.weapons.hasFreeSlot()&&e.spendGold(i.cost)){i.purchased=!0;const a=this.engine.weapons.createWeapon(i.archetype,i.tier);this.engine.weapons.addWeaponToAvailableSlot(a),Me.getInstance().playCoin(),this.renderWorkshopModal()}})}),document.getElementById("btn-reroll-gold")?.addEventListener("click",()=>{e.spendGold(25)&&(Me.getInstance().playClick(),this.rollShopOffers(),this.renderWorkshopModal())}),document.getElementById("btn-reroll-ad")?.addEventListener("click",async()=>{await Ct.getInstance().showRewardedAd("Free Armory Reroll + High Tier Crate")&&(this.rollShopOffers(),this.shopOffers[1]&&(this.shopOffers[1].tier=Math.min(4,this.shopOffers[1].tier+1)),this.renderWorkshopModal())}),document.getElementById("btn-Menu-return")?.addEventListener("click",()=>{this.engine.state="MENU",this.renderMainMenu()}),document.getElementById("btn-next-wave")?.addEventListener("click",async()=>{Me.getInstance().playClick(),this.engine.currentWave%3===0&&await Ct.getInstance().showInterstitialAd(`Between Wave ${this.engine.currentWave} & ${this.engine.currentWave+1}`),this.resetToInGameHud(),this.engine.startWave(this.engine.currentWave+1)})}openDeathModal(){const e=He.getInstance(),t=this.engine.state==="REVIVE_PROMPT",n=Math.max(100,Math.floor(this.engine.runGoldEarned*.5));this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel death-panel">
          <h2 class="death-title">${t?Q.t("death_revive_title"):Q.t("death_over_title")}</h2>
          <p>${Q.t("death_summary",{wave:this.engine.currentWave,kills:this.engine.runKills})}</p>

          <div class="stats-banner">
            <div><span>${Q.t("wave_label")}</span><strong>${this.engine.currentWave}</strong></div>
            <div><span>GOLD</span><strong>🪙 ${this.engine.runGoldEarned}</strong></div>
            <div><span>SCORE</span><strong>${this.engine.runScore.toLocaleString()}</strong></div>
          </div>

          <div class="death-actions">
            ${t?`<button id="btn-revive-ad" class="btn-ad btn-xl pulse-glow">${Q.t("btn_revive_ad")}</button>`:""}
            <button id="btn-claim-2x-end" class="btn-gold">${Q.t("btn_claim_end_ad",{gold:n})}</button>
            <button id="btn-return-menu" class="btn-secondary">${Q.t("btn_return_hub")}</button>
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
    `,this.uiLayer.appendChild(o);const l=()=>{o.remove(),this.engine.setSdkPause(!1),r==="MENU"?this.renderMainMenu():r==="SHOP"?this.renderWorkshopModal():r==="LEVEL_UP"?this.renderLevelUpModal():this.updateTopHudValues()};document.getElementById(`btn-close-${e}`)?.addEventListener("click",l),a(o,l)}openCratesModal(e){const t=He.getInstance(),n=t.data.techShards,i=`
      <div class="shards-banner">${Q.t("tech_shards_banner",{shards:n,bonus:n*3})}</div>
      ${e?`
        <div class="crate-loot-reveal pulse-glow">
          <h4>${Q.t("crate_rewards_header")}</h4>
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
          <h3>${Q.t("crate_free_title")}</h3>
          <p>${Q.t("crate_free_desc")}</p>
          <button id="btn-open-ad-crate" class="btn-ad">${Q.t("crate_free_btn")}</button>
        </div>
        <div class="iap-card">
          <div class="crate-big-icon">🎁</div>
          <h3>${Q.t("crate_1x_title")}</h3>
          <p>${Q.t("crate_1x_desc")}</p>
          <button id="btn-open-1x-crate" class="btn-primary">${Q.t("crate_1x_btn")}</button>
        </div>
        <div class="iap-card">
          <span class="iap-badge">JACKPOT VALUE</span>
          <div class="crate-big-icon">🌌</div>
          <h3>${Q.t("crate_10x_title")}</h3>
          <p>${Q.t("crate_10x_desc")}</p>
          <button id="btn-open-10x-crate" class="btn-gold">${Q.t("crate_10x_btn")}</button>
        </div>
      </div>
    `;this.openSubModal("crates-modal",Q.t("crates_modal_title"),Q.t("crates_modal_sub"),i,(a,r)=>{document.getElementById("btn-open-ad-crate")?.addEventListener("click",async()=>{if(await Ct.getInstance().showRewardedAd("Open Free Cyber Supply Crate")){const l=t.rollSupplyCrate(1,!1);Me.getInstance().playMerge(5),this.openCratesModal(l)}}),document.getElementById("btn-open-1x-crate")?.addEventListener("click",()=>{if(t.spendGems(80)){const o=t.rollSupplyCrate(1,!0);Me.getInstance().playMerge(4),this.openCratesModal(o)}else r(),this.openStoreModal()}),document.getElementById("btn-open-10x-crate")?.addEventListener("click",()=>{if(t.spendGems(700)){const o=t.rollSupplyCrate(10,!0);Me.getInstance().playMerge(5),this.openCratesModal(o)}else r(),this.openStoreModal()})})}openMissionsModal(){const e=He.getInstance(),t=e.data,n=[{tierKey:"killsTier",title:Q.t("mission_kill_title"),desc:Q.t("mission_kill_desc",{target:t.missionTiers.killsTier*60}),current:t.totalKills,target:t.missionTiers.killsTier*60,rewardGold:250*t.missionTiers.killsTier,rewardGems:20},{tierKey:"mergesTier",title:Q.t("mission_merge_title"),desc:Q.t("mission_merge_desc",{target:t.missionTiers.mergesTier*4}),current:t.totalMerges,target:t.missionTiers.mergesTier*4,rewardGold:300*t.missionTiers.mergesTier,rewardGems:25},{tierKey:"waveTier",title:Q.t("mission_wave_title"),desc:Q.t("mission_wave_desc",{target:t.missionTiers.waveTier*3}),current:t.highestWave,target:t.missionTiers.waveTier*3,rewardGold:400*t.missionTiers.waveTier,rewardGems:35},{tierKey:"levelUpsTier",title:Q.t("mission_lvl_title"),desc:Q.t("mission_lvl_desc",{target:t.missionTiers.levelUpsTier*3}),current:t.totalLevelUps,target:t.missionTiers.levelUpsTier*3,rewardGold:250*t.missionTiers.levelUpsTier,rewardGems:20}],i=`
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
                      <button data-claim-idx="${r}" data-claim-mult="1" class="btn-primary">${Q.t("btn_claim_mission")}</button>
                      <button data-claim-idx="${r}" data-claim-mult="2" class="btn-ad">${Q.t("btn_claim_2x_ad")}</button>
                    </div>
                  `:`<button class="btn-secondary" disabled>${Q.t("mission_in_progress")}</button>`}
                </div>
              </div>
            `}).join("")}
      </div>
    `;this.openSubModal("missions-modal",Q.t("missions_modal_title"),Q.t("missions_modal_sub"),i,a=>{a.querySelectorAll("[data-claim-idx]").forEach(r=>{r.addEventListener("click",async()=>{const o=Number(r.dataset.claimIdx),l=Number(r.dataset.claimMult),c=n[o];!c||c.current<c.target||l===2&&!await Ct.getInstance().showRewardedAd(`2x Mission Bounty: ${c.title}`)||(e.addGold(c.rewardGold*l),e.addGems(c.rewardGems*l),e.data.missionTiers[c.tierKey]+=1,e.save(),Me.getInstance().playCashRegister(),this.openMissionsModal())})})})}openLeaderboardModal(){const e=He.getInstance(),t=e.data,n=[...lm,{name:t.playerName||"CYBER_COMMANDER",wave:t.highestWave,score:t.highScore,vip:t.vipUnlocked,isPlayer:!0}].sort((a,r)=>r.score-a.score||r.wave-a.wave),i=`
      <div class="callsign-bar">
        <label for="input-callsign">${Q.t("callsign_label")}</label>
        <input id="input-callsign" type="text" maxlength="18" value="${t.playerName}" />
        <button id="btn-save-callsign" class="btn-primary">${Q.t("btn_save_callsign")}</button>
      </div>

      <div class="leaderboard-table-wrap">
        <table class="leaderboard-table">
          <thead>
            <tr>
              <th>${Q.t("col_rank")}</th>
              <th>${Q.t("col_commander")}</th>
              <th>${Q.t("col_wave")}</th>
              <th>${Q.t("col_score")}</th>
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
                <td>${Q.t("wave_label")} ${a.wave}</td>
                <td><strong>${a.score.toLocaleString()}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;this.openSubModal("leaderboard-modal",Q.t("leaderboard_title"),Q.t("leaderboard_sub"),i,()=>{document.getElementById("btn-save-callsign")?.addEventListener("click",()=>{const r=(document.getElementById("input-callsign")?.value||"").trim().toUpperCase().slice(0,18);r&&(e.data.playerName=r,e.save(),Me.getInstance().playClick(),this.openLeaderboardModal())})})}openStoreModal(){const e=He.getInstance(),t=`
      <div class="iap-grid">
        ${Ul.map(n=>{const i=n.id==="vip_speed"&&e.data.vipUnlocked||n.id==="starter_pack"&&e.data.starterPackBought;return`
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
    `;this.openSubModal("vip-store-modal","💎 NEXUS CYBER STORE & IAP SANDBOX","Test high-converting In-App Purchases (Stripe/Portal SDK) and Gem Crates. All transactions increment your Simulated Revenue counter!",t,(n,i)=>{n.querySelectorAll("[data-iap-id]").forEach(a=>{a.addEventListener("click",async()=>{const r=a.dataset.iapId;await Ct.getInstance().purchaseProduct(r)&&(r==="starter_pack"?(e.data.starterPackBought=!0,e.addGold(1500),e.addGems(100),this.engine.weapons.addWeaponToAvailableSlot(this.engine.weapons.createWeapon("plasma",3))):r==="vip_speed"?(e.data.vipUnlocked=!0,e.unlockCommander("tesla_engineer"),e.unlockCommander("void_phantom"),e.addGems(500),this.engine.gameSpeedMultiplier=2):r==="gem_vault_small"?e.addGems(150):r==="gem_vault_mega"&&(e.addGems(1e3),e.addGold(5e3)),e.save(),i())})}),document.getElementById("btn-spend-gems")?.addEventListener("click",()=>{e.spendGems(50)&&(e.addGold(1e3),Me.getInstance().playCashRegister(),this.updateTopHudValues())})})}}window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("game-canvas");if(!s)throw new Error("Missing #game-canvas element");const e=new om(s);Ct.getInstance().bindEngineCallbacks(()=>e.setSdkPause(!0),()=>e.setSdkPause(!1)),new cm(e)});
