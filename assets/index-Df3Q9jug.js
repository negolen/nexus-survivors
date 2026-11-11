var O=Object.defineProperty;var W=(M,e,t)=>e in M?O(M,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):M[e]=t;var u=(M,e,t)=>W(M,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const $={en:{hero_badge:"HTML5 • MONETIZATION-READY • 60FPS ROGUELITE",game_subtitle:"MERGE & CONQUER",hero_desc:"Survive relentless cyber-swarms, merge identical weapons up to Tier-5 Legendary, and draft roguelite upgrades.",stat_highest_wave:"HIGHEST WAVE",stat_high_score:"HIGH SCORE",stat_ads_watched:"ADS WATCHED",stat_sim_rev:"SIMULATED REV",wave_label:"WAVE",lvl_label:"LVL",speed_2x_on:"2x TURBO ON",speed_1x_btn:"1x SPEED (2x AD/VIP)",vip_store_btn:"VIP STORE",hud_crates_btn:"CRATES",hud_missions_btn:"MISSIONS",hud_ranks_btn:"RANKS",commanders_title:"SELECT CYBER COMMANDER",cmd_vanguard_name:"Vanguard MK-I",cmd_vanguard_desc:"+10% Max Hull HP • Starts with Dual Plasma Blasters",cmd_tesla_name:"Tesla Engineer",cmd_tesla_desc:"+20% All Weapon Damage • Starts with Tesla Arc Coil",cmd_phantom_name:"Void Phantom",cmd_phantom_desc:"+25% Move Speed & +15% Crit Chance • Starts w/ Tier-2 Ripper",cmd_selected:"SELECTED ✓",cmd_select:"SELECT",cmd_unlock_gold:"Unlock (1,500 🪙)",cmd_unlock_gems:"Unlock ({gems} 💎)",meta_dmg_title:"⚔️ Weapon Damage",meta_dmg_desc:"+15% All Damage / Lv",meta_hp_title:"🛡️ Hull Integrity",meta_hp_desc:"+30 Max HP / Lv",meta_spd_title:"⚡ Fire Rate Overclock",meta_spd_desc:"+8% Attack Speed / Lv",meta_gold_title:"🪙 Venture Capital",meta_gold_desc:"+25 Starting Gold / Lv",btn_start_run:"🚀 DEPLOY TO ARENA (START RUN)",btn_free_gold_ad:"🎬 Watch Rewarded Ad (+250 Gold & +10 💎)",workshop_title:"WAVE {wave} CLEARED! • MERGE WORKSHOP",workshop_sub:"Click two identical weapons of the same Tier to MERGE them into Tier+1 (2.15x Damage)!",btn_auto_merge:"✨ AUTO-MERGE ALL",btn_double_wave_ad:"🎬 2x Wave Gold (+{gold}g)",badge_bonus_claimed:"2x BONUS CLAIMED ✓",active_slots_title:"ACTIVE ORBITAL SLOTS (6 MAX)",bench_slots_title:"WORKSHOP BENCH (STORAGE)",armory_title:"ARMORY REQUISITION",btn_reroll_gold:"🎲 Reroll (25 🪙)",btn_reroll_ad:"🎬 Free Reroll + Rare Chance (Ad)",btn_main_menu:"🏠 Main Menu",btn_next_wave:"⚔️ START WAVE {wave} ▶",levelup_title:"⚡ TACTICAL LEVEL UP! (LEVEL {level})",levelup_sub:"Select 1 combat augmentation for this run — or claim ALL 3 via Rewarded Ad!",btn_take_all_3:"🎬 TAKE ALL 3 UPGRADES (Watch Ad)",btn_select_card:"SELECT AUGMENT",death_revive_title:"⚠️ HULL CRITICAL — REVIVE AVAILABLE!",death_over_title:"💀 RUN TERMINATED",death_summary:"You reached Wave {wave} and eliminated {kills} hostiles.",btn_revive_ad:"🎬 Watch Ad to REVIVE (100% HP + Tactical Nuke)",btn_claim_end_ad:"🎬 Watch Ad: Claim +{gold} Bonus Gold & Exit",btn_return_hub:"Return to Upgrade Hub",crates_modal_title:"🎁 CYBER SUPPLY CRATES (GACHA LAB)",crates_modal_sub:"Open encrypted supply pods for Gold, Gems, and Permanent Tech Shards (+3% All Weapon Damage per Shard)!",tech_shards_banner:"⚡ Permanent Tech Shards Owned: {shards} (+{bonus}% Global Weapon Damage)",crate_free_title:"Encrypted Ad Pod",crate_free_desc:"Contains 250–600 Gold, 15–35 Gems, or Tech Shards!",crate_free_btn:"🎬 OPEN FREE CRATE (Watch Ad)",crate_1x_title:"Quantum Supply Crate",crate_1x_desc:"Guaranteed High Gold + Gems + 1–3 Permanent Tech Shards!",crate_1x_btn:"OPEN 1x CRATE (80 💎)",crate_10x_title:"10x Mega Armada Vault",crate_10x_desc:"10x Quantum Crates with Bonus Jackpot Shards & Gold (Save 100 💎)!",crate_10x_btn:"OPEN 10x MEGA VAULT (700 💎)",crate_rewards_header:"🎉 SUPPLY DROP UNLOCKED!",missions_modal_title:"📋 DAILY OPERATIONS & BOUNTIES",missions_modal_sub:"Complete combat milestones to earn Gems and Gold. Watch an Ad on claim to DOUBLE your bounty!",mission_kill_title:"Exterminator Protocol",mission_kill_desc:"Eliminate {target} hostile cyber-units",mission_merge_title:"Master Synthesizer",mission_merge_desc:"Merge identical orbital weapons {target} times",mission_wave_title:"Deep Arena Survivor",mission_wave_desc:"Reach Wave {target} in the Cyber Arena",mission_lvl_title:"Tactical Overclocker",mission_lvl_desc:"Level up {target} times during arena runs",btn_claim_mission:"CLAIM",btn_claim_2x_ad:"🎬 2x CLAIM (Ad)",mission_in_progress:"IN PROGRESS",leaderboard_title:"🏆 GLOBAL ARENA LEADERBOARD",leaderboard_sub:"Top Cyber Commanders ranked by Arena High Score & Highest Wave survived.",callsign_label:"YOUR CALLSIGN:",btn_save_callsign:"SAVE NAME",col_rank:"RANK",col_commander:"COMMANDER",col_wave:"MAX WAVE",col_score:"HIGH SCORE"},tr:{hero_badge:"HTML5 • GELİR MODELİ HAZIR • 60FPS ROGUELITE",game_subtitle:"BİRLEŞTİR & FETHET",hero_desc:"Siber sürülerden sağ çık, aynı silahları Seviye-5 Efsaneviye birleştir ve roguelite güçlendirmeleri seç.",stat_highest_wave:"EN YÜKSEK DALGA",stat_high_score:"REKOR SKOR",stat_ads_watched:"İZLENEN REKLAM",stat_sim_rev:"SİMÜLE GELİR",wave_label:"DALGA",lvl_label:"SV",speed_2x_on:"2x TURBO AÇIK",speed_1x_btn:"1x HIZ (2x REKLAM/VIP)",vip_store_btn:"VIP MAĞAZA",hud_crates_btn:"KASALAR",hud_missions_btn:"GÖREVLER",hud_ranks_btn:"LİDERLİK",commanders_title:"SİBER KOMUTAN SEÇİMİ",cmd_vanguard_name:"Öncü MK-I",cmd_vanguard_desc:"+%10 Maks Can • Çift Plazma Silahı ile başlar",cmd_tesla_name:"Tesla Mühendisi",cmd_tesla_desc:"+%20 Tüm Silah Hasarı • Tesla Bobini ile başlar",cmd_phantom_name:"Hiçlik Hayaleti",cmd_phantom_desc:"+%25 Hareket Hızı & +%15 Kritik Şansı • Sv-2 Testere ile başlar",cmd_selected:"SEÇİLDİ ✓",cmd_select:"SEÇ",cmd_unlock_gold:"Aç (1,500 🪙)",cmd_unlock_gems:"Aç ({gems} 💎)",meta_dmg_title:"⚔️ Silah Hasarı",meta_dmg_desc:"+%15 Tüm Hasar / Sv",meta_hp_title:"🛡️ Zırh Bütünlüğü",meta_hp_desc:"+30 Maks Can / Sv",meta_spd_title:"⚡ Atış Hızı Aşırtma",meta_spd_desc:"+%8 Saldırı Hızı / Sv",meta_gold_title:"🪙 Başlangıç Sermayesi",meta_gold_desc:"+25 Başlangıç Altını / Sv",btn_start_run:"🚀 ARENAYA İNİŞ YAP (BAŞLA)",btn_free_gold_ad:"🎬 Ödüllü Reklam İzle (+250 Altın & +10 💎)",workshop_title:"DALGA {wave} TEMİZLENDİ! • BİRLEŞTİRME ATÖLYESİ",workshop_sub:"Aynı tür ve seviyedeki iki silaha tıklayarak Seviye+1 (2.15x Hasar) olarak BİRLEŞTİR!",btn_auto_merge:"✨ TÜMÜNÜ OTOMATİK BİRLEŞTİR",btn_double_wave_ad:"🎬 2x Dalga Altını (+{gold}g)",badge_bonus_claimed:"2x BONUS ALINDI ✓",active_slots_title:"AKTİF YÖRÜNGE SİLAHLARI (MAKS 6)",bench_slots_title:"ATÖLYE DEPOSU (YEDEK)",armory_title:"CEPHANELİK TEDARİĞİ",btn_reroll_gold:"🎲 Yenile (25 🪙)",btn_reroll_ad:"🎬 Ücretsiz Yenile + Nadir Şansı (Reklam)",btn_main_menu:"🏠 Ana Menü",btn_next_wave:"⚔️ DALGA {wave} BAŞLAT ▶",levelup_title:"⚡ TAKTİKSEL SEVİYE ATLAMA! (SEVİYE {level})",levelup_sub:"Bu tur için 1 savaş güçlendirmesi seç — veya Reklam izleyerek 3 KARTIN TÜMÜNÜ AL!",btn_take_all_3:"🎬 3 KARTIN TÜMÜNÜ AL (Reklam İzle)",btn_select_card:"GÜÇLENDİRMEYİ SEÇ",death_revive_title:"⚠️ ZIRH KRİTİK — DİRİLME MEVCUT!",death_over_title:"💀 OPERASYON SONA ERDİ",death_summary:"Dalga {wave} seviyesine ulaştın ve {kills} düşmanı yok ettin.",btn_revive_ad:"🎬 Reklam İzle ve DİRİL (%100 Can + Nükleer Dalga)",btn_claim_end_ad:"🎬 Reklam İzle: +{gold} Bonus Altın Al & Çık",btn_return_hub:"Geliştirme Merkezine Dön",crates_modal_title:"🎁 SİBER İKMAL KASALARI (GACHA)",crates_modal_sub:"Altın, Elmas ve Kalıcı Teknoloji Parçaları (Parça başına +%3 Silah Hasarı) için kasaları aç!",tech_shards_banner:"⚡ Kalıcı Teknoloji Parçası: {shards} (+%{bonus} Genel Silah Hasarı)",crate_free_title:"Şifreli Reklam Kapsülü",crate_free_desc:"250–600 Altın, 15–35 Elmas veya Teknoloji Parçası içerir!",crate_free_btn:"🎬 ÜCRETSİZ KASA AÇ (Reklam İzle)",crate_1x_title:"Kuantum İkmal Kasası",crate_1x_desc:"Garantili Yüksek Altın + Elmas + 1–3 Kalıcı Teknoloji Parçası!",crate_1x_btn:"1x KASA AÇ (80 💎)",crate_10x_title:"10x Mega Armada Kasası",crate_10x_desc:"10x Kuantum Kasası + Jackpot Teknoloji Parçaları (100 💎 Tasarruf)!",crate_10x_btn:"10x MEGA KASA AÇ (700 💎)",crate_rewards_header:"🎉 İKMAL KAPSÜLÜ AÇILDI!",missions_modal_title:"📋 GÜNLÜK GÖREVLER & ÖDÜLLER",missions_modal_sub:"Elmas ve Altın kazanmak için hedefleri tamamla. Reklam izleyerek ödülü 2 KATINA çıkar!",mission_kill_title:"İmha Protokolü",mission_kill_desc:"{target} düşman siber birimini yok et",mission_merge_title:"Usta Sentezci",mission_merge_desc:"Aynı silahları {target} kez birleştir",mission_wave_title:"Arena Hayatta Kalanı",mission_wave_desc:"Siber Arenada Dalga {target} seviyesine ulaş",mission_lvl_title:"Taktiksel Aşırtıcı",mission_lvl_desc:"Arena turlarında {target} kez seviye atla",btn_claim_mission:"AL",btn_claim_2x_ad:"🎬 2x AL (Reklam)",mission_in_progress:"DEVAM EDİYOR",leaderboard_title:"🏆 KÜRESEL ARENA LİDERLİK TABLOSU",leaderboard_sub:"En yüksek skor ve ulaşılan dalgaya göre sıralanan Siber Komutanlar.",callsign_label:"KOMUTAN ADIN:",btn_save_callsign:"KAYDET",col_rank:"SIRA",col_commander:"KOMUTAN",col_wave:"MAKS DALGA",col_score:"REKOR SKOR"}};class l{static getLang(){return this.currentLang}static setLang(e){this.currentLang=e==="tr"?"tr":"en"}static t(e,t){let s=($[this.currentLang]||$.en)[e]||$.en[e]||e;if(t)for(const[n,r]of Object.entries(t))s=s.replace(`{${n}}`,String(r));return s}}u(l,"currentLang","en");const B="nexus_survivors_save_v1",C={language:"en",playerName:"CYBER_COMMANDER",selectedCommander:"vanguard",unlockedCommanders:["vanguard"],gold:150,gems:25,techShards:0,highScore:0,highestWave:1,totalKills:0,totalMerges:0,totalLevelUps:0,missionTiers:{killsTier:1,mergesTier:1,waveTier:1,levelUpsTier:1},vipUnlocked:!1,starterPackBought:!1,totalRevenueSimulated:0,rewardedAdsWatched:0,interstitialAdsWatched:0,iapPurchasesCount:0,soundEnabled:!0,meta:{damageLevel:0,maxHpLevel:0,startingGoldLevel:0,magnetLevel:0,attackSpeedLevel:0}},S=class S{constructor(){u(this,"data");u(this,"listeners",[]);this.data=this.load(),l.setLang(this.data.language||"en")}static getInstance(){return S.instance||(S.instance=new S),S.instance}load(){try{const e=localStorage.getItem(B);if(!e)return structuredClone(C);const t=JSON.parse(e);return{...structuredClone(C),...t,language:t.language==="tr"?"tr":"en",unlockedCommanders:Array.isArray(t.unlockedCommanders)?t.unlockedCommanders:["vanguard"],missionTiers:{...C.missionTiers,...t.missionTiers||{}},meta:{...C.meta,...t.meta||{}}}}catch{return structuredClone(C)}}save(){try{localStorage.setItem(B,JSON.stringify(this.data)),this.notify()}catch(e){console.warn("Could not persist save data:",e)}}setLanguage(e){this.data.language=e,l.setLang(e),this.save()}toggleLanguage(){const e=this.data.language==="en"?"tr":"en";return this.setLanguage(e),e}isCommanderUnlocked(e){return e==="void_phantom"&&this.data.vipUnlocked?!0:this.data.unlockedCommanders.includes(e)}unlockCommander(e){this.data.unlockedCommanders.includes(e)||this.data.unlockedCommanders.push(e),this.data.selectedCommander=e,this.save()}recordKill(e=1){this.data.totalKills+=e,this.save()}recordMerge(e=1){this.data.totalMerges+=e,this.save()}recordLevelUp(e=1){this.data.totalLevelUps+=e,this.save()}rollSupplyCrate(e,t){let a=0,s=0,n=0;for(let r=0;r<e;r++){const d=t?400+Math.floor(Math.random()*550):250+Math.floor(Math.random()*350),i=t?15+Math.floor(Math.random()*35):15+Math.floor(Math.random()*25),c=t?1+Math.floor(Math.random()*3):Math.random()<.65?1:0;a+=d,s+=i,n+=c}return this.data.gold+=a,this.data.gems+=s,this.data.techShards+=n,this.save(),{gold:a,gems:s,techShards:n}}onChange(e){this.listeners.push(e)}notify(){for(const e of this.listeners)e()}addGold(e){this.data.gold=Math.max(0,Math.floor(this.data.gold+e)),this.save()}spendGold(e){return this.data.gold<e?!1:(this.data.gold-=e,this.save(),!0)}addGems(e){this.data.gems=Math.max(0,Math.floor(this.data.gems+e)),this.save()}spendGems(e){return this.data.gems<e?!1:(this.data.gems-=e,this.save(),!0)}recordAdRevenue(e,t){e==="rewarded"?this.data.rewardedAdsWatched+=1:this.data.interstitialAdsWatched+=1,this.data.totalRevenueSimulated=Number((this.data.totalRevenueSimulated+t/1e3).toFixed(4)),this.save()}recordIapRevenue(e){this.data.iapPurchasesCount+=1,this.data.totalRevenueSimulated=Number((this.data.totalRevenueSimulated+e).toFixed(4)),this.save()}getMetaUpgradeCost(e){const t=this.data.meta[e];return Math.floor(100*Math.pow(1.55,t))}buyMetaUpgrade(e){const t=this.getMetaUpgradeCost(e);return this.spendGold(t)?(this.data.meta[e]+=1,this.save(),!0):!1}getDamageMultiplier(){const e=this.data.selectedCommander==="tesla_engineer"?.2:0,t=this.data.techShards*.03;return 1+this.data.meta.damageLevel*.15+e+t}getBonusMaxHp(){const e=this.data.selectedCommander==="vanguard"?20:0;return this.data.meta.maxHpLevel*30+e}getStartingWaveGold(){return 40+this.data.meta.startingGoldLevel*25}getMagnetRadius(){return 100+this.data.meta.magnetLevel*25}getAttackSpeedMultiplier(){return 1+this.data.meta.attackSpeedLevel*.08}resetSave(){this.data=structuredClone(C),l.setLang("en"),this.save()}};u(S,"instance");let b=S;const A=class A{constructor(){u(this,"ctx",null);u(this,"adMuted",!1)}static getInstance(){return A.instance||(A.instance=new A),A.instance}setAdMuted(e){this.adMuted=e}ensureContext(){if(this.adMuted||!b.getInstance().data.soundEnabled)return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}playShoot(e=0){const t=this.ensureContext();if(!t)return;const a=t.currentTime,s=t.createOscillator(),n=t.createGain();s.type="triangle";const r=520+e*60;s.frequency.setValueAtTime(r,a),s.frequency.exponentialRampToValueAtTime(140,a+.09),n.gain.setValueAtTime(.08,a),n.gain.exponentialRampToValueAtTime(.001,a+.09),s.connect(n),n.connect(t.destination),s.start(a),s.stop(a+.09)}playLightning(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,a=e.createOscillator(),s=e.createGain();a.type="sawtooth",a.frequency.setValueAtTime(920,t),a.frequency.linearRampToValueAtTime(320,t+.06),a.frequency.linearRampToValueAtTime(750,t+.12),s.gain.setValueAtTime(.06,t),s.gain.exponentialRampToValueAtTime(.001,t+.12),a.connect(s),s.connect(e.destination),a.start(t),a.stop(t+.12)}playHit(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,a=e.createOscillator(),s=e.createGain();a.type="square",a.frequency.setValueAtTime(190,t),a.frequency.exponentialRampToValueAtTime(55,t+.06),s.gain.setValueAtTime(.05,t),s.gain.exponentialRampToValueAtTime(.001,t+.06),a.connect(s),s.connect(e.destination),a.start(t),a.stop(t+.06)}playCoin(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,a=e.createOscillator(),s=e.createGain();a.type="sine",a.frequency.setValueAtTime(987.77,t),a.frequency.setValueAtTime(1318.51,t+.05),s.gain.setValueAtTime(.06,t),s.gain.exponentialRampToValueAtTime(.001,t+.14),a.connect(s),s.connect(e.destination),a.start(t),a.stop(t+.14)}playMerge(e){const t=this.ensureContext();if(!t)return;const a=t.currentTime,s=[440,554.37,659.25,880,1108.73],n=1+(e-1)*.12;s.forEach((r,d)=>{const i=t.createOscillator(),c=t.createGain();i.type="triangle",i.frequency.setValueAtTime(r*n,a+d*.045),c.gain.setValueAtTime(.11,a+d*.045),c.gain.exponentialRampToValueAtTime(.001,a+d*.045+.2),i.connect(c),c.connect(t.destination),i.start(a+d*.045),i.stop(a+d*.045+.2)})}playExplosion(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,a=e.sampleRate*.25,s=e.createBuffer(1,a,e.sampleRate),n=s.getChannelData(0);for(let c=0;c<a;c++)n[c]=Math.random()*2-1;const r=e.createBufferSource();r.buffer=s;const d=e.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(420,t),d.frequency.exponentialRampToValueAtTime(60,t+.25);const i=e.createGain();i.gain.setValueAtTime(.15,t),i.gain.exponentialRampToValueAtTime(.001,t+.25),r.connect(d),d.connect(i),i.connect(e.destination),r.start(t),r.stop(t+.25)}playWaveComplete(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,n)=>{const r=e.createOscillator(),d=e.createGain();r.type="sine",r.frequency.setValueAtTime(s,t+n*.08),d.gain.setValueAtTime(.1,t+n*.08),d.gain.exponentialRampToValueAtTime(.001,t+n*.08+.35),r.connect(d),d.connect(e.destination),r.start(t+n*.08),r.stop(t+n*.08+.35)})}playCashRegister(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[1046.5,1318.5,1567.98,2093].forEach((s,n)=>{const r=e.createOscillator(),d=e.createGain();r.type="sine",r.frequency.setValueAtTime(s,t+n*.055),d.gain.setValueAtTime(.14,t+n*.055),d.gain.exponentialRampToValueAtTime(.001,t+n*.055+.24),r.connect(d),d.connect(e.destination),r.start(t+n*.055),r.stop(t+n*.055+.24)})}playClick(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,a=e.createOscillator(),s=e.createGain();a.type="sine",a.frequency.setValueAtTime(680,t),a.frequency.exponentialRampToValueAtTime(340,t+.03),s.gain.setValueAtTime(.06,t),s.gain.exponentialRampToValueAtTime(.001,t+.03),a.connect(s),s.connect(e.destination),a.start(t),a.stop(t+.03)}};u(A,"instance");let m=A;const H=["Common","Uncommon","Rare","Epic","Legendary"],I=["#94a3b8","#22c55e","#3b82f6","#a855f7","#f59e0b"],k={plasma:{id:"plasma",name:"Plasma Blaster",icon:"⚡",description:"Rapid-fire high-velocity energy bolts at the nearest target.",baseDamage:18,baseCooldown:.48,range:330,baseCost:25,color:"#38bdf8"},tesla:{id:"tesla",name:"Tesla Arc Coil",icon:"🌩️",description:"Chain lightning that arcs across multiple nearby enemies.",baseDamage:24,baseCooldown:.85,range:280,baseCost:35,color:"#c084fc"},frost:{id:"frost",name:"Cryo Nova Emitter",icon:"❄️",description:"Emits freezing shockwaves that damage and slow enemies by 50%.",baseDamage:20,baseCooldown:1.35,range:195,baseCost:35,color:"#67e8f9"},sawblade:{id:"sawblade",name:"Kinetic Ripper",icon:"⚙️",description:"Fires piercing cyber-sawblades that slice through lines of foes.",baseDamage:30,baseCooldown:.9,range:350,baseCost:40,color:"#f43f5e"},missile:{id:"missile",name:"Hellfire Launcher",icon:"🚀",description:"Launches explosive splash-damage rockets with heavy impact.",baseDamage:48,baseCooldown:1.4,range:400,baseCost:50,color:"#fb923c"}},T=class T{constructor(){u(this,"equipped",[null,null,null,null,null,null]);u(this,"bench",[null,null,null,null,null,null]);u(this,"uidCounter",1);this.resetForNewRun()}resetForNewRun(){this.equipped=[null,null,null,null,null,null],this.bench=[null,null,null,null,null,null],this.equipped[0]=this.createWeapon("plasma",1),this.equipped[1]=this.createWeapon("plasma",1)}createWeapon(e,t=1){return{uid:`wpn_${this.uidCounter++}_${Date.now()}`,archetype:e,tier:Math.max(1,Math.min(5,t)),cooldownTimer:0,orbitAngle:0}}static getDamage(e,t){const a=k[e.archetype],s=Math.pow(2.15,e.tier-1);return Math.round(a.baseDamage*s*t)}static getCooldown(e,t){const a=k[e.archetype],s=1+(e.tier-1)*.12;return a.baseCooldown/(s*t)}addWeaponToAvailableSlot(e){for(let t=0;t<T.MAX_EQUIPPED;t++)if(!this.equipped[t])return this.equipped[t]=e,!0;for(let t=0;t<T.MAX_BENCH;t++)if(!this.bench[t])return this.bench[t]=e,!0;return!1}hasFreeSlot(){return this.equipped.some(e=>e===null)||this.bench.some(e=>e===null)}interactSlots(e,t,a,s){if(e===a&&t===s)return{action:"none"};const n=e==="equipped"?this.equipped:this.bench,r=a==="equipped"?this.equipped:this.bench,d=n[t],i=r[s];if(!d)return{action:"none"};if(i&&d.archetype===i.archetype&&d.tier===i.tier&&d.tier<5){const c=this.createWeapon(d.archetype,d.tier+1);return r[s]=c,n[t]=null,b.getInstance().recordMerge(1),m.getInstance().playMerge(c.tier),{action:"merged",newTier:c.tier}}return r[s]=d,n[t]=i,m.getInstance().playClick(),{action:"swapped"}}autoMergeAll(){let e=0,t=!0;for(;t;){t=!1;const a=[];this.equipped.forEach((s,n)=>a.push({group:"equipped",index:n,item:s})),this.bench.forEach((s,n)=>a.push({group:"bench",index:n,item:s}));for(let s=0;s<a.length;s++){const n=a[s];if(!(!n.item||n.item.tier>=5)){for(let r=s+1;r<a.length;r++){const d=a[r];if(d.item&&n.item.archetype===d.item.archetype&&n.item.tier===d.item.tier){this.interactSlots(d.group,d.index,n.group,n.index),e++,t=!0;break}}if(t)break}}}for(let a=0;a<T.MAX_EQUIPPED;a++)if(!this.equipped[a]){const s=this.bench.findIndex(n=>n!==null);s!==-1&&(this.equipped[a]=this.bench[s],this.bench[s]=null)}return e}sellWeapon(e,t){const a=e==="equipped"?this.equipped:this.bench,s=a[t];if(!s||this.equipped.filter(i=>i!==null).length+this.bench.filter(i=>i!==null).length<=1)return 0;const r=k[s.archetype],d=Math.floor(r.baseCost*Math.pow(1.8,s.tier-1)*.65);return a[t]=null,m.getInstance().playCoin(),d}};u(T,"MAX_EQUIPPED",6),u(T,"MAX_BENCH",6);let L=T;const N=[{id:"overclock",icon:"⚡",titleEn:"Overclocked Barrels",titleTr:"Aşırtılmış Namlular",descEn:"+20% Attack Speed for all orbital weapons this run",descTr:"Bu tur tüm yörünge silahları için +%20 Saldırı Hızı",color:"#38bdf8"},{id:"crit_matrix",icon:"🎯",titleEn:"Critical Matrix",titleTr:"Kritik Matris",descEn:"+15% Critical Hit Chance (2x Damage) & +10% Base Damage",descTr:"+%15 Kritik Vuruş Şansı (2x Hasar) & +%10 Temel Hasar",color:"#f43f5e"},{id:"nanite_hull",icon:"🛡️",titleEn:"Nanite Hull Plating",titleTr:"Nanit Zırh Kaplaması",descEn:"+40 Max HP & Immediately Restore 50 HP",descTr:"+40 Maksimum Can & Anında 50 Can Yenileme",color:"#22c55e"},{id:"scrap_harvester",icon:"🪙",titleEn:"Scrap Harvester",titleTr:"Hurda Toplayıcı",descEn:"+30% Gold Dropped from Enemies + Instant +80 Gold",descTr:"Düşmanlardan +%30 Daha Fazla Altın + Anında +80 Altın",color:"#facc15"},{id:"grav_magnet",icon:"🧲",titleEn:"Graviton Magnet",titleTr:"Graviton Mıknatısı",descEn:"+50% Loot Pickup Radius & +12% Move Speed",descTr:"+%50 Ganimet Çekim Alanı & +%12 Hareket Hızı",color:"#a855f7"},{id:"plasma_core",icon:"🔥",titleEn:"Superheated Core",titleTr:"Aşırı Isınmış Çekirdek",descEn:"+25% All Weapon Damage this run",descTr:"Bu turda tüm silahlar için +%25 Hasar Bonusu",color:"#fb923c"}];class U{constructor(e){u(this,"canvas");u(this,"ctx");u(this,"weapons");u(this,"state","MENU");u(this,"worldSize",2200);u(this,"player",{x:1100,y:1100,radius:20,hp:100,maxHp:100,speed:245,invulnTimer:0,angle:0,level:1,xp:0,xpToNext:50});u(this,"runBuffs",{damageMult:0,attackSpeedMult:0,critChance:0,goldMult:0,magnetMult:0,moveSpeedMult:0});u(this,"currentWave",1);u(this,"waveTimer",25);u(this,"waveDuration",25);u(this,"runGoldEarned",0);u(this,"waveGoldEarned",0);u(this,"runKills",0);u(this,"runScore",0);u(this,"revivedThisRun",!1);u(this,"gameSpeedMultiplier",1);u(this,"tempAdSpeedWave",!1);u(this,"enemies",[]);u(this,"projectiles",[]);u(this,"lightningBolts",[]);u(this,"frostRings",[]);u(this,"lootDrops",[]);u(this,"particles",[]);u(this,"floatingTexts",[]);u(this,"spawnTimer",0);u(this,"enemyIdCounter",1);u(this,"screenShake",0);u(this,"isPausedBySdk",!1);u(this,"keys",new Set);u(this,"pointerActive",!1);u(this,"pointerScreenX",0);u(this,"pointerScreenY",0);u(this,"onHudUpdate");u(this,"onLevelUp");u(this,"onWaveComplete");u(this,"onPlayerDeath");u(this,"lastFrameTime",performance.now());this.canvas=e;const t=e.getContext("2d");if(!t)throw new Error("Canvas 2D context not supported");this.ctx=t,this.weapons=new L,this.handleResize(),window.addEventListener("resize",()=>this.handleResize()),this.bindInputs(),requestAnimationFrame(a=>this.loop(a))}handleResize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}bindInputs(){window.addEventListener("keydown",e=>{var a;const t=(a=e.target)==null?void 0:a.tagName;t==="INPUT"||t==="TEXTAREA"||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code))}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),this.canvas.addEventListener("pointerdown",e=>{this.pointerActive=!0,this.pointerScreenX=e.clientX,this.pointerScreenY=e.clientY}),window.addEventListener("pointermove",e=>{this.pointerActive&&(this.pointerScreenX=e.clientX,this.pointerScreenY=e.clientY)}),window.addEventListener("pointerup",()=>{this.pointerActive=!1})}setSdkPause(e){this.isPausedBySdk=e,this.lastFrameTime=performance.now()}startNewRun(){const e=b.getInstance(),t=e.data.selectedCommander;this.weapons.equipped=[null,null,null,null,null,null],this.weapons.bench=[null,null,null,null,null,null],this.runBuffs={damageMult:0,attackSpeedMult:0,critChance:t==="void_phantom"?.15:0,goldMult:0,magnetMult:0,moveSpeedMult:t==="void_phantom"?.25:0},t==="tesla_engineer"?(this.weapons.equipped[0]=this.weapons.createWeapon("tesla",1),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)):t==="void_phantom"?(this.weapons.equipped[0]=this.weapons.createWeapon("sawblade",2),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)):(this.weapons.equipped[0]=this.weapons.createWeapon("plasma",1),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)),e.data.starterPackBought&&this.weapons.addWeaponToAvailableSlot(this.weapons.createWeapon("plasma",3)),this.player.level=1,this.player.xp=0,this.player.xpToNext=45,this.currentWave=1,this.runGoldEarned=0,this.runKills=0,this.runScore=0,this.revivedThisRun=!1,e.addGold(e.getStartingWaveGold()),this.startWave(1)}applyTacticalCard(e){var a;const t=b.getInstance();switch(e){case"overclock":this.runBuffs.attackSpeedMult+=.2;break;case"crit_matrix":this.runBuffs.critChance=Math.min(.85,this.runBuffs.critChance+.15),this.runBuffs.damageMult+=.1;break;case"nanite_hull":this.player.maxHp+=40,this.player.hp=Math.min(this.player.maxHp,this.player.hp+50);break;case"scrap_harvester":this.runBuffs.goldMult+=.3,t.addGold(80),this.runGoldEarned+=80,this.waveGoldEarned+=80;break;case"grav_magnet":this.runBuffs.magnetMult+=.5,this.runBuffs.moveSpeedMult+=.12;break;case"plasma_core":this.runBuffs.damageMult+=.25;break}(a=this.onHudUpdate)==null||a.call(this)}startWave(e){var s;const t=b.getInstance();this.currentWave=e,this.waveDuration=Math.min(45,22+e*2),this.waveTimer=this.waveDuration,this.waveGoldEarned=0,this.player.x=this.worldSize/2,this.player.y=this.worldSize/2;const a=100+t.getBonusMaxHp()+(e-1)*12;this.player.maxHp=Math.max(this.player.maxHp,a),this.player.hp=this.player.maxHp,this.player.invulnTimer=1,this.enemies=[],this.projectiles=[],this.lightningBolts=[],this.frostRings=[],this.lootDrops=[],!t.data.vipUnlocked&&!this.tempAdSpeedWave&&(this.gameSpeedMultiplier=1),e%5===0&&this.spawnEnemy("boss"),this.state="PLAYING",(s=this.onHudUpdate)==null||s.call(this)}revivePlayerWithNuke(){var e;this.revivedThisRun=!0,this.player.hp=this.player.maxHp,this.player.invulnTimer=3,this.screenShake=18,m.getInstance().playExplosion();for(let t=this.enemies.length-1;t>=0;t--){const a=this.enemies[t];this.spawnParticles(a.x,a.y,a.color,14),a.type==="boss"?a.hp=Math.max(1,a.hp*.5):this.enemies.splice(t,1)}this.state="PLAYING",(e=this.onHudUpdate)==null||e.call(this)}loop(e){const t=Math.min(.05,(e-this.lastFrameTime)/1e3);if(this.lastFrameTime=e,!this.isPausedBySdk&&this.state==="PLAYING"){const a=t*this.gameSpeedMultiplier;this.update(a)}this.render(),requestAnimationFrame(a=>this.loop(a))}update(e){var g,v;const t=b.getInstance();if(this.waveTimer-=e,this.waveTimer<=0){this.waveTimer=0,this.completeWave();return}let a=0,s=0;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(s-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(s+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(a-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(a+=1),a===0&&s===0&&this.pointerActive){const p=this.canvas.width/2,o=this.canvas.height/2,_=this.pointerScreenX-p,f=this.pointerScreenY-o,y=Math.hypot(_,f);y>14&&(a=_/y,s=f/y)}else if(a!==0||s!==0){const p=Math.hypot(a,s);a/=p,s/=p}const n=this.player.speed*(1+this.runBuffs.moveSpeedMult);if(this.player.x=Math.max(40,Math.min(this.worldSize-40,this.player.x+a*n*e)),this.player.y=Math.max(40,Math.min(this.worldSize-40,this.player.y+s*n*e)),(a!==0||s!==0)&&(this.player.angle=Math.atan2(s,a)),this.player.invulnTimer>0&&(this.player.invulnTimer-=e),this.screenShake>0&&(this.screenShake=Math.max(0,this.screenShake-e*35)),this.spawnTimer-=e,this.spawnTimer<=0){const p=Math.max(.22,1.15-this.currentWave*.065);this.spawnTimer=p,this.spawnWaveEnemy()}const r=t.getDamageMultiplier()*(1+this.runBuffs.damageMult),d=t.getAttackSpeedMultiplier()*(1+this.runBuffs.attackSpeedMult),i=this.weapons.equipped;for(let p=0;p<i.length;p++){const o=i[p];if(!o)continue;const _=p/L.MAX_EQUIPPED*Math.PI*2;o.orbitAngle=_+performance.now()*.0018,o.cooldownTimer-=e;const f=this.player.x+Math.cos(o.orbitAngle)*48,y=this.player.y+Math.sin(o.orbitAngle)*48;o.cooldownTimer<=0&&(this.fireWeapon(o,f,y,r)?o.cooldownTimer=L.getCooldown(o,d):o.cooldownTimer=.1)}for(let p=this.projectiles.length-1;p>=0;p--){const o=this.projectiles[p];o.x+=o.vx*e,o.y+=o.vy*e,o.life-=e,o.rotation!==void 0&&(o.rotation+=e*16);let _=!1;for(let f=this.enemies.length-1;f>=0;f--){const y=this.enemies[f];if(o.hitEnemyIds.has(y.id))continue;if(Math.hypot(o.x-y.x,o.y-y.y)<=o.radius+y.radius)if(o.hitEnemyIds.add(y.id),o.splashRadius>0?this.triggerExplosionSplash(o.x,o.y,o.splashRadius,o.damage,o.color):this.damageEnemy(y,o.damage,o.color),o.pierce>0)o.pierce-=1;else{this.projectiles.splice(p,1),_=!0;break}}!_&&o.life<=0&&this.projectiles.splice(p,1)}for(let p=this.enemies.length-1;p>=0;p--){const o=this.enemies[p];o.hitFlash>0&&(o.hitFlash-=e),o.slowTimer>0&&(o.slowTimer-=e);const _=Math.atan2(this.player.y-o.y,this.player.x-o.x),f=o.slowTimer>0?.5:1;if(o.x+=Math.cos(_)*o.speed*f*e,o.y+=Math.sin(_)*o.speed*f*e,Math.hypot(this.player.x-o.x,this.player.y-o.y)<this.player.radius+o.radius&&this.player.invulnTimer<=0&&(this.player.hp-=o.damage,this.player.invulnTimer=.45,this.screenShake=10,m.getInstance().playHit(),this.spawnFloatingText(this.player.x,this.player.y-25,`-${o.damage} HP`,"#ef4444",1.25),this.player.hp<=0)){this.player.hp=0,this.handlePlayerDeath();return}}const c=t.getMagnetRadius()*(1+this.runBuffs.magnetMult);let h=!1;for(let p=this.lootDrops.length-1;p>=0;p--){const o=this.lootDrops[p],_=Math.hypot(this.player.x-o.x,this.player.y-o.y);if(_<c){const y=Math.atan2(this.player.y-o.y,this.player.x-o.x);o.x+=Math.cos(y)*450*e,o.y+=Math.sin(y)*450*e}if(_<this.player.radius+o.radius+8){if(o.type==="gold"){const f=Math.max(1,Math.round(o.value*(1+this.runBuffs.goldMult)));t.addGold(f),this.runGoldEarned+=f,this.waveGoldEarned+=f,this.spawnFloatingText(o.x,o.y,`+${f}g`,"#facc15",.95)}else o.type==="gem"?(t.addGems(o.value),this.spawnFloatingText(o.x,o.y,`+${o.value} 💎`,"#38bdf8",1.15)):o.type==="heal"&&(this.player.hp=Math.min(this.player.maxHp,this.player.hp+o.value),this.spawnFloatingText(o.x,o.y,`+${o.value} HP`,"#4ade80",1.1));o.xpValue>0&&(this.player.xp+=o.xpValue,this.player.xp>=this.player.xpToNext&&(this.player.xp-=this.player.xpToNext,this.player.level+=1,this.player.xpToNext=Math.round(this.player.xpToNext*1.38+20),t.recordLevelUp(1),h=!0)),m.getInstance().playCoin(),this.lootDrops.splice(p,1)}}for(let p=this.lightningBolts.length-1;p>=0;p--)this.lightningBolts[p].alpha-=e*4.5,this.lightningBolts[p].alpha<=0&&this.lightningBolts.splice(p,1);for(let p=this.frostRings.length-1;p>=0;p--){const o=this.frostRings[p];o.currentRadius+=(o.maxRadius-o.currentRadius)*e*10,o.alpha-=e*2.5,o.alpha<=0&&this.frostRings.splice(p,1)}for(let p=this.particles.length-1;p>=0;p--){const o=this.particles[p];o.x+=o.vx*e,o.y+=o.vy*e,o.alpha-=o.decay*e,o.alpha<=0&&this.particles.splice(p,1)}for(let p=this.floatingTexts.length-1;p>=0;p--){const o=this.floatingTexts[p];o.y+=o.vy*e,o.alpha-=e*1.4,o.alpha<=0&&this.floatingTexts.splice(p,1)}(g=this.onHudUpdate)==null||g.call(this),h&&(this.state="LEVEL_UP",m.getInstance().playMerge(4),(v=this.onLevelUp)==null||v.call(this))}fireWeapon(e,t,a,s){const n=k[e.archetype];let r=L.getDamage(e,s);const d=Math.random()<this.runBuffs.critChance;d&&(r=Math.round(r*2));let i=null,c=n.range;for(const v of this.enemies){const p=Math.hypot(v.x-t,v.y-a);p<=c&&(c=p,i=v)}if(!i)return!1;const h=Math.atan2(i.y-a,i.x-t),g=I[e.tier-1]||n.color;if(e.archetype==="plasma")return this.projectiles.push({x:t,y:a,vx:Math.cos(h)*640,vy:Math.sin(h)*640,radius:5+e.tier,damage:r,color:d?"#facc15":n.color,pierce:e.tier>=4?1:0,splashRadius:0,life:1.2,hitEnemyIds:new Set}),m.getInstance().playShoot(e.tier),!0;if(e.archetype==="sawblade")return this.projectiles.push({x:t,y:a,vx:Math.cos(h)*460,vy:Math.sin(h)*460,radius:12+e.tier*2,damage:r,color:d?"#facc15":g,pierce:2+e.tier*2,splashRadius:0,life:1.6,isSawblade:!0,rotation:0,hitEnemyIds:new Set}),m.getInstance().playShoot(e.tier-2),!0;if(e.archetype==="missile")return this.projectiles.push({x:t,y:a,vx:Math.cos(h)*420,vy:Math.sin(h)*420,radius:8+e.tier,damage:r,color:n.color,pierce:0,splashRadius:65+e.tier*14,life:1.5,hitEnemyIds:new Set}),m.getInstance().playShoot(-2),!0;if(e.archetype==="tesla"){const v=2+e.tier,p=new Set,o=[{x:t,y:a}];let _=t,f=a;for(let y=0;y<v;y++){let w=null,P=220;for(const R of this.enemies){if(p.has(R.id))continue;const G=Math.hypot(R.x-_,R.y-f);G<=P&&(P=G,w=R)}if(!w)break;p.add(w.id),o.push({x:w.x,y:w.y}),_=w.x,f=w.y,this.damageEnemy(w,r,n.color)}return this.lightningBolts.push({points:o,color:n.color,alpha:1}),m.getInstance().playLightning(),!0}if(e.archetype==="frost"){const v=n.range+e.tier*18;for(let p=this.enemies.length-1;p>=0;p--){const o=this.enemies[p];Math.hypot(o.x-this.player.x,o.y-this.player.y)<=v&&(o.slowTimer=2.5+e.tier*.4,this.damageEnemy(o,r,n.color))}return this.frostRings.push({x:this.player.x,y:this.player.y,currentRadius:20,maxRadius:v,color:n.color,alpha:.9}),m.getInstance().playShoot(3),!0}return!1}triggerExplosionSplash(e,t,a,s,n){this.screenShake=Math.max(this.screenShake,5),this.spawnParticles(e,t,n,16),m.getInstance().playExplosion();for(let r=this.enemies.length-1;r>=0;r--){const d=this.enemies[r];Math.hypot(d.x-e,d.y-t)<=a+d.radius&&this.damageEnemy(d,s,n)}}damageEnemy(e,t,a){if(e.hp-=t,e.hitFlash=.1,this.spawnFloatingText(e.x+(Math.random()-.5)*16,e.y-e.radius,`${t}`,a,e.type==="boss"?1.2:.95),e.hp<=0){const s=this.enemies.indexOf(e);s!==-1&&this.enemies.splice(s,1),this.runKills+=1,b.getInstance().recordKill(1),this.runScore+=e.goldValue*10,this.spawnParticles(e.x,e.y,e.color,e.type==="boss"?30:8),this.lootDrops.push({x:e.x,y:e.y,vx:0,vy:0,value:e.goldValue,xpValue:e.type==="boss"?80:12,type:"gold",radius:7}),e.type==="boss"||Math.random()<.04?this.lootDrops.push({x:e.x+12,y:e.y+8,vx:0,vy:0,value:e.type==="boss"?10:1,xpValue:15,type:"gem",radius:9}):Math.random()<.035&&this.lootDrops.push({x:e.x-10,y:e.y,vx:0,vy:0,value:20,xpValue:5,type:"heal",radius:8})}}spawnWaveEnemy(){const e=Math.random();this.currentWave>=4&&e<.14?this.spawnEnemy("tank"):this.currentWave>=3&&e<.32?this.spawnEnemy("charger"):this.currentWave>=2&&e<.55?this.spawnEnemy("speedster"):this.spawnEnemy("swarmer")}spawnEnemy(e){const t=Math.random()*Math.PI*2,a=560+Math.random()*160,s=Math.max(50,Math.min(this.worldSize-50,this.player.x+Math.cos(t)*a)),n=Math.max(50,Math.min(this.worldSize-50,this.player.y+Math.sin(t)*a)),r=Math.pow(1.24,this.currentWave-1),i={swarmer:{type:"swarmer",radius:14,hp:Math.round(28*r),maxHp:Math.round(28*r),speed:115,damage:Math.round(9*r),color:"#f43f5e",goldValue:Math.round(4+this.currentWave*1.5)},speedster:{type:"speedster",radius:11,hp:Math.round(19*r),maxHp:Math.round(19*r),speed:185,damage:Math.round(8*r),color:"#fbbf24",goldValue:Math.round(5+this.currentWave*1.8)},charger:{type:"charger",radius:17,hp:Math.round(52*r),maxHp:Math.round(52*r),speed:145,damage:Math.round(14*r),color:"#ec4899",goldValue:Math.round(8+this.currentWave*2.2)},tank:{type:"tank",radius:24,hp:Math.round(135*r),maxHp:Math.round(135*r),speed:78,damage:Math.round(20*r),color:"#a855f7",goldValue:Math.round(15+this.currentWave*3)},boss:{type:"boss",radius:42,hp:Math.round(950*r),maxHp:Math.round(950*r),speed:92,damage:Math.round(32*r),color:"#ef4444",goldValue:Math.round(120+this.currentWave*25)}}[e];this.enemies.push({id:this.enemyIdCounter++,x:s,y:n,slowTimer:0,hitFlash:0,...i})}completeWave(){var a;const e=b.getInstance();for(const s of this.lootDrops)s.type==="gold"?(e.addGold(s.value),this.runGoldEarned+=s.value,this.waveGoldEarned+=s.value):s.type==="gem"&&e.addGems(s.value);this.lootDrops=[];const t=25+this.currentWave*15;e.addGold(t),this.waveGoldEarned+=t,this.runGoldEarned+=t,this.currentWave>e.data.highestWave&&(e.data.highestWave=this.currentWave),this.runScore>e.data.highScore&&(e.data.highScore=this.runScore),e.save(),this.tempAdSpeedWave=!1,this.state="SHOP",m.getInstance().playWaveComplete(),(a=this.onWaveComplete)==null||a.call(this)}handlePlayerDeath(){var t;const e=b.getInstance();this.runScore>e.data.highScore&&(e.data.highScore=this.runScore,e.save()),this.state=this.revivedThisRun?"GAMEOVER":"REVIVE_PROMPT",m.getInstance().playExplosion(),(t=this.onPlayerDeath)==null||t.call(this)}spawnParticles(e,t,a,s){for(let n=0;n<s;n++){const r=Math.random()*Math.PI*2,d=40+Math.random()*190;this.particles.push({x:e,y:t,vx:Math.cos(r)*d,vy:Math.sin(r)*d,radius:2+Math.random()*3.5,color:a,alpha:1,decay:1.5+Math.random()*1.5})}}spawnFloatingText(e,t,a,s,n=1){this.floatingTexts.push({x:e,y:t,text:a,color:s,alpha:1,vy:-48,scale:n})}render(){const e=this.ctx,t=this.canvas.width,a=this.canvas.height;e.fillStyle="#070a14",e.fillRect(0,0,t,a),e.save();const s=(Math.random()-.5)*this.screenShake,n=(Math.random()-.5)*this.screenShake,r=t/2-this.player.x+s,d=a/2-this.player.y+n;e.translate(r,d),this.drawArenaGrid(e);for(const i of this.frostRings)e.save(),e.globalAlpha=Math.max(0,i.alpha),e.strokeStyle=i.color,e.lineWidth=4,e.beginPath(),e.arc(i.x,i.y,i.currentRadius,0,Math.PI*2),e.stroke(),e.restore();for(const i of this.lootDrops)e.save(),e.beginPath(),i.type==="gold"?(e.fillStyle="#facc15",e.shadowColor="#facc15"):i.type==="gem"?(e.fillStyle="#38bdf8",e.shadowColor="#38bdf8"):(e.fillStyle="#4ade80",e.shadowColor="#4ade80"),e.shadowBlur=10,e.arc(i.x,i.y,i.radius,0,Math.PI*2),e.fill(),e.restore();for(const i of this.enemies){if(e.save(),e.beginPath(),e.fillStyle=i.hitFlash>0?"#ffffff":i.slowTimer>0?"#67e8f9":i.color,e.shadowColor=i.color,e.shadowBlur=i.type==="boss"?20:8,e.arc(i.x,i.y,i.radius,0,Math.PI*2),e.fill(),e.strokeStyle="#0f172a",e.lineWidth=2.5,e.stroke(),i.hp<i.maxHp||i.type==="boss"){const c=i.radius*2.2,h=i.type==="boss"?7:4,g=i.x-c/2,v=i.y-i.radius-12;e.fillStyle="rgba(0,0,0,0.65)",e.fillRect(g,v,c,h),e.fillStyle=i.type==="boss"?"#f43f5e":"#22c55e",e.fillRect(g,v,c*Math.max(0,i.hp/i.maxHp),h)}e.restore()}this.drawPlayerAndWeapons(e);for(const i of this.projectiles)e.save(),e.translate(i.x,i.y),i.isSawblade&&i.rotation!==void 0?(e.rotate(i.rotation),e.strokeStyle=i.color,e.lineWidth=3,e.beginPath(),e.arc(0,0,i.radius,0,Math.PI*2),e.stroke()):(e.fillStyle=i.color,e.shadowColor=i.color,e.shadowBlur=12,e.beginPath(),e.arc(0,0,i.radius,0,Math.PI*2),e.fill()),e.restore();for(const i of this.lightningBolts)if(!(i.points.length<2)){e.save(),e.globalAlpha=Math.max(0,i.alpha),e.strokeStyle=i.color,e.shadowColor=i.color,e.shadowBlur=14,e.lineWidth=3,e.beginPath(),e.moveTo(i.points[0].x,i.points[0].y);for(let c=1;c<i.points.length;c++)e.lineTo(i.points[c].x,i.points[c].y);e.stroke(),e.restore()}for(const i of this.particles)e.save(),e.globalAlpha=Math.max(0,i.alpha),e.fillStyle=i.color,e.beginPath(),e.arc(i.x,i.y,i.radius,0,Math.PI*2),e.fill(),e.restore();for(const i of this.floatingTexts)e.save(),e.globalAlpha=Math.max(0,i.alpha),e.font=`700 ${Math.round(15*i.scale)}px Orbitron, sans-serif`,e.fillStyle=i.color,e.textAlign="center",e.fillText(i.text,i.x,i.y),e.restore();e.restore()}drawArenaGrid(e){e.strokeStyle="rgba(56, 189, 248, 0.08)",e.lineWidth=1,e.beginPath();for(let a=0;a<=this.worldSize;a+=80)e.moveTo(a,0),e.lineTo(a,this.worldSize);for(let a=0;a<=this.worldSize;a+=80)e.moveTo(0,a),e.lineTo(this.worldSize,a);e.stroke(),e.strokeStyle="#38bdf8",e.lineWidth=4,e.strokeRect(0,0,this.worldSize,this.worldSize)}drawPlayerAndWeapons(e){e.save();const t=b.getInstance().data.selectedCommander,a=t==="tesla_engineer"?"#a855f7":t==="void_phantom"?"#f43f5e":"#0ea5e9";e.beginPath(),e.fillStyle=this.player.invulnTimer>0&&Math.floor(performance.now()/60)%2===0?"#ffffff":a,e.shadowColor=a,e.shadowBlur=18,e.arc(this.player.x,this.player.y,this.player.radius,0,Math.PI*2),e.fill(),e.lineWidth=3,e.strokeStyle="#e0f2fe",e.stroke();for(const s of this.weapons.equipped){if(!s)continue;const n=this.player.x+Math.cos(s.orbitAngle)*48,r=this.player.y+Math.sin(s.orbitAngle)*48,d=I[s.tier-1];e.beginPath(),e.fillStyle=d,e.shadowColor=d,e.shadowBlur=12,e.arc(n,r,8+s.tier*1.4,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke()}e.restore()}}const D=[{id:"starter_pack",title:"Cyber Starter Bundle",description:"+1,500 Gold, +100 Gems & Instant Tier-3 Epic Plasma Blaster",priceUsd:1.99,badge:"BEST VALUE"},{id:"vip_speed",title:"VIP Overclock Pass",description:"Permanently Unlock 2x Turbo Game Speed + +500 Gems + No Forced Interstitials",priceUsd:4.99,badge:"MOST POPULAR"},{id:"gem_vault_small",title:"Neon Gem Pouch",description:"+150 Cyber Gems for Legendary Crates & Instant Merges",priceUsd:.99},{id:"gem_vault_mega",title:"Quantum Gem Vault",description:"+1,000 Cyber Gems + 5,000 Bonus Gold",priceUsd:7.99,badge:"WHALE PACK"}],x=class x{constructor(){u(this,"activePlatform","Simulator");u(this,"overlayContainer",null);u(this,"onPauseGame");u(this,"onResumeGame");this.detectPlatform()}static getInstance(){return x.instance||(x.instance=new x),x.instance}bindEngineCallbacks(e,t){this.onPauseGame=e,this.onResumeGame=t,this.overlayContainer=document.getElementById("sdk-overlay")}detectPlatform(){var e;typeof window<"u"&&(window.PokiSDK?(this.activePlatform="Poki",window.PokiSDK.init().catch(()=>{})):(e=window.CrazyGames)!=null&&e.SDK?this.activePlatform="CrazyGames":this.activePlatform="Simulator")}async showRewardedAd(e){var t,a,s,n,r,d,i,c,h;if((t=this.onPauseGame)==null||t.call(this),m.getInstance().setAdMuted(!0),(s=(a=window.PokiSDK)==null?void 0:a.gameplayStop)==null||s.call(a),this.activePlatform==="Poki"&&window.PokiSDK)try{const g=await window.PokiSDK.rewardedBreak();return m.getInstance().setAdMuted(!1),(r=(n=window.PokiSDK).gameplayStart)==null||r.call(n),g&&(b.getInstance().recordAdRevenue("rewarded",25),m.getInstance().playCashRegister()),(d=this.onResumeGame)==null||d.call(this),g}catch{return m.getInstance().setAdMuted(!1),(i=this.onResumeGame)==null||i.call(this),!1}return this.activePlatform==="CrazyGames"&&((h=(c=window.CrazyGames)==null?void 0:c.SDK)!=null&&h.ad)?new Promise(g=>{window.CrazyGames.SDK.ad.requestAd("rewarded",{adFinished:()=>{var v;m.getInstance().setAdMuted(!1),b.getInstance().recordAdRevenue("rewarded",25),m.getInstance().playCashRegister(),(v=this.onResumeGame)==null||v.call(this),g(!0)},adError:()=>{var v;m.getInstance().setAdMuted(!1),(v=this.onResumeGame)==null||v.call(this),g(!1)}})}):this.runSimulatedRewardedAd(e)}async showInterstitialAd(e){var t,a;if(!b.getInstance().data.vipUnlocked){if((t=this.onPauseGame)==null||t.call(this),this.activePlatform==="Poki"&&window.PokiSDK){await window.PokiSDK.commercialBreak(),b.getInstance().recordAdRevenue("interstitial",12),(a=this.onResumeGame)==null||a.call(this);return}await this.runSimulatedInterstitialAd(e)}}async purchaseProduct(e){var s,n;const t=D.find(r=>r.id===e);if(!t)return!1;(s=this.onPauseGame)==null||s.call(this);const a=await this.runSimulatedStripeCheckout(t);return(n=this.onResumeGame)==null||n.call(this),a&&(b.getInstance().recordIapRevenue(t.priceUsd),m.getInstance().playCashRegister()),a}runSimulatedRewardedAd(e){return new Promise(t=>{var c;if(!this.overlayContainer){(c=this.onResumeGame)==null||c.call(this),t(!0);return}let a=3;this.overlayContainer.innerHTML=`
        <div class="sdk-modal-backdrop">
          <div class="sdk-ad-box">
            <div class="sdk-ad-header">
              <span class="sdk-badge">REWARDED VIDEO AD • eCPM $25.00</span>
              <span id="sdk-ad-timer" class="sdk-timer">Reward in ${a}s...</span>
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
              <button id="sdk-claim-ad" class="btn-primary" disabled>Wait ${a}s...</button>
            </div>
          </div>
        </div>
      `;const s=document.getElementById("sdk-ad-timer"),n=document.getElementById("sdk-claim-ad"),r=document.getElementById("sdk-cancel-ad"),d=window.setInterval(()=>{a-=1,a>0?(s&&(s.textContent=`Reward in ${a}s...`),n&&(n.textContent=`Wait ${a}s...`)):(window.clearInterval(d),s&&(s.textContent="REWARD GRANTED ✓"),n&&(n.disabled=!1,n.textContent="CLAIM REWARD (+Revenue)",n.classList.add("pulse-glow")))},850),i=h=>{var g;window.clearInterval(d),this.overlayContainer&&(this.overlayContainer.innerHTML=""),m.getInstance().setAdMuted(!1),h&&(b.getInstance().recordAdRevenue("rewarded",25),m.getInstance().playCashRegister()),(g=this.onResumeGame)==null||g.call(this),t(h)};n==null||n.addEventListener("click",()=>i(!0)),r==null||r.addEventListener("click",()=>i(!1))})}runSimulatedInterstitialAd(e){return new Promise(t=>{var a,s;if(!this.overlayContainer){(a=this.onResumeGame)==null||a.call(this),t();return}this.overlayContainer.innerHTML=`
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
      `,(s=document.getElementById("sdk-close-interstitial"))==null||s.addEventListener("click",()=>{var n;this.overlayContainer&&(this.overlayContainer.innerHTML=""),m.getInstance().setAdMuted(!1),b.getInstance().recordAdRevenue("interstitial",12),m.getInstance().playCashRegister(),(n=this.onResumeGame)==null||n.call(this),t()})})}runSimulatedStripeCheckout(e){return new Promise(t=>{var s,n;if(!this.overlayContainer){t(!0);return}this.overlayContainer.innerHTML=`
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
      `;const a=r=>{this.overlayContainer&&(this.overlayContainer.innerHTML=""),t(r)};(s=document.getElementById("sdk-confirm-iap"))==null||s.addEventListener("click",()=>a(!0)),(n=document.getElementById("sdk-cancel-iap"))==null||n.addEventListener("click",()=>a(!1))})}};u(x,"instance");let E=x;const V=[{name:"NEXUS_OVERLORD",wave:38,score:194500,vip:!0},{name:"VALKYRIE_X9",wave:34,score:162800,vip:!0},{name:"KRONOS_PRIME",wave:30,score:138400,vip:!0},{name:"CYBER_SHOGUN",wave:27,score:112900,vip:!1},{name:"ZERO_COOL_US",wave:24,score:94200,vip:!0},{name:"NOVA_STRIKER",wave:21,score:78500,vip:!1},{name:"AETHER_WOLF",wave:18,score:61400,vip:!0},{name:"VOLT_HUNTER",wave:15,score:45200,vip:!1},{name:"PHANTOM_BLADE",wave:12,score:31800,vip:!1},{name:"OMEGA_DRIFTER",wave:10,score:22400,vip:!1},{name:"BYTE_RANGER",wave:8,score:14900,vip:!1},{name:"NEON_ROOKIE",wave:5,score:7600,vip:!1},{name:"SCRAP_PILOT",wave:3,score:3200,vip:!1}];class K{constructor(e){u(this,"engine");u(this,"uiLayer");u(this,"selectedSlot",null);u(this,"shopOffers",[]);u(this,"draftedLevelCards",[]);u(this,"waveBonusDoubled",!1);this.engine=e;const t=document.getElementById("ui-layer");if(!t)throw new Error("#ui-layer not found");this.uiLayer=t,this.engine.onHudUpdate=()=>this.updateTopHudValues(),this.engine.onLevelUp=()=>this.openLevelUpModal(),this.engine.onWaveComplete=()=>this.openBetweenWaveWorkshop(),this.engine.onPlayerDeath=()=>this.openDeathModal(),b.getInstance().onChange(()=>this.updateTopHudValues()),this.renderMainMenu()}renderTopHud(){const e=b.getInstance().data,t=this.engine.player,a=Math.max(0,Math.min(100,t.hp/t.maxHp*100)),s=Math.max(0,Math.min(100,t.xp/t.xpToNext*100)),n=this.engine.gameSpeedMultiplier===2,r=e.language==="tr"?"🌐 TR | EN":"🌐 EN | TR";return`
      <header class="top-hud">
        <div class="hud-left">
          <div class="hp-bar-wrap">
            <div id="hud-hp-fill" class="hp-bar-fill" style="width: ${a}%"></div>
            <span id="hud-hp-text" class="hp-bar-label">HP ${Math.ceil(t.hp)} / ${t.maxHp}</span>
          </div>
          <div class="xp-bar-wrap" title="In-Run Tactical XP">
            <div id="hud-xp-fill" class="xp-bar-fill" style="width: ${s}%"></div>
            <span id="hud-lvl-text" class="hp-bar-label">${l.t("lvl_label")} ${t.level}</span>
          </div>
          <div class="wave-pill">
            <span id="hud-wave-num">${l.t("wave_label")} ${this.engine.currentWave}</span>
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
          <div class="currency-pill revenue-pill" title="Simulated Publisher Ad + IAP Revenue Tracker">
            <span>📈 REV:</span>
            <strong id="hud-revenue">$${e.totalRevenueSimulated.toFixed(2)}</strong>
          </div>
        </div>

        <div class="hud-right">
          <button id="btn-speed-toggle" class="btn-hud ${n?"active-speed":""}">
            ⚡ ${n?l.t("speed_2x_on"):l.t("speed_1x_btn")}
          </button>
          <button id="btn-open-crates" class="btn-hud">
            🎁 ${l.t("hud_crates_btn")}
          </button>
          <button id="btn-open-missions" class="btn-hud">
            📋 ${l.t("hud_missions_btn")}
          </button>
          <button id="btn-open-ranks" class="btn-hud">
            🏆 ${l.t("hud_ranks_btn")}
          </button>
          <button id="btn-open-store" class="btn-hud btn-vip">
            💎 ${l.t("vip_store_btn")}
          </button>
          <button id="btn-lang-toggle" class="btn-hud" title="Switch Language (Default: English)">
            ${r}
          </button>
          <button id="btn-sound-toggle" class="btn-hud">
            ${e.soundEnabled?"🔊":"🔇"}
          </button>
        </div>
      </header>
    `}bindTopHudEvents(){var e,t,a,s,n,r,d;(e=document.getElementById("btn-speed-toggle"))==null||e.addEventListener("click",async()=>{m.getInstance().playClick();const i=b.getInstance();if(this.engine.gameSpeedMultiplier===2){this.engine.gameSpeedMultiplier=1,this.updateTopHudValues();return}i.data.vipUnlocked||this.engine.tempAdSpeedWave?(this.engine.gameSpeedMultiplier=2,this.updateTopHudValues()):await E.getInstance().showRewardedAd("Unlock 2x Turbo Speed (Current Wave)")&&(this.engine.tempAdSpeedWave=!0,this.engine.gameSpeedMultiplier=2,this.updateTopHudValues())}),(t=document.getElementById("btn-open-crates"))==null||t.addEventListener("click",()=>{m.getInstance().playClick(),this.openCratesModal()}),(a=document.getElementById("btn-open-missions"))==null||a.addEventListener("click",()=>{m.getInstance().playClick(),this.openMissionsModal()}),(s=document.getElementById("btn-open-ranks"))==null||s.addEventListener("click",()=>{m.getInstance().playClick(),this.openLeaderboardModal()}),(n=document.getElementById("btn-open-store"))==null||n.addEventListener("click",()=>{m.getInstance().playClick(),this.openStoreModal()}),(r=document.getElementById("btn-lang-toggle"))==null||r.addEventListener("click",()=>{m.getInstance().playClick(),b.getInstance().toggleLanguage(),this.engine.state==="MENU"?this.renderMainMenu():this.engine.state==="SHOP"?this.renderWorkshopModal():this.engine.state==="LEVEL_UP"?this.renderLevelUpModal():this.engine.state==="REVIVE_PROMPT"||this.engine.state==="GAMEOVER"?this.openDeathModal():(this.uiLayer.innerHTML=this.renderTopHud(),this.bindTopHudEvents())}),(d=document.getElementById("btn-sound-toggle"))==null||d.addEventListener("click",i=>{const c=b.getInstance();c.data.soundEnabled=!c.data.soundEnabled,c.save(),i.currentTarget.textContent=c.data.soundEnabled?"🔊":"🔇"})}updateTopHudValues(){const e=b.getInstance().data,t=this.engine.player,a=document.getElementById("hud-hp-fill"),s=document.getElementById("hud-hp-text"),n=document.getElementById("hud-xp-fill"),r=document.getElementById("hud-lvl-text"),d=document.getElementById("hud-wave-num"),i=document.getElementById("hud-wave-timer"),c=document.getElementById("hud-gold"),h=document.getElementById("hud-gems"),g=document.getElementById("hud-revenue"),v=document.getElementById("btn-speed-toggle");if(a&&(a.style.width=`${Math.max(0,Math.min(100,t.hp/t.maxHp*100))}%`),s&&(s.textContent=`HP ${Math.ceil(t.hp)} / ${t.maxHp}`),n&&(n.style.width=`${Math.max(0,Math.min(100,t.xp/t.xpToNext*100))}%`),r&&(r.textContent=`${l.t("lvl_label")} ${t.level}`),d&&(d.textContent=`${l.t("wave_label")} ${this.engine.currentWave}`),i&&(i.textContent=`${Math.ceil(this.engine.waveTimer)}s`),c&&(c.textContent=e.gold.toLocaleString()),h&&(h.textContent=e.gems.toLocaleString()),g&&(g.textContent=`$${e.totalRevenueSimulated.toFixed(2)}`),v){const p=this.engine.gameSpeedMultiplier===2;v.textContent=`⚡ ${p?l.t("speed_2x_on"):l.t("speed_1x_btn")}`,v.classList.toggle("active-speed",p)}}renderMainMenu(){var a,s,n,r,d;const e=b.getInstance(),t=e.data;this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel main-menu-panel">
          <div class="hero-badge">${l.t("hero_badge")}</div>
          <h1 class="game-title">NEXUS SURVIVORS<span>${l.t("game_subtitle")}</span></h1>
          <p class="hero-subtitle">${l.t("hero_desc")}</p>

          <div class="stats-banner">
            <div><span>${l.t("stat_highest_wave")}</span><strong>${l.t("wave_label")} ${t.highestWave}</strong></div>
            <div><span>${l.t("stat_high_score")}</span><strong>${t.highScore.toLocaleString()}</strong></div>
            <div><span>${l.t("stat_ads_watched")}</span><strong>${t.rewardedAdsWatched+t.interstitialAdsWatched}</strong></div>
            <div><span>${l.t("stat_sim_rev")}</span><strong class="text-green">$${t.totalRevenueSimulated.toFixed(2)}</strong></div>
          </div>

          <div class="workshop-section">
            <h3>${l.t("commanders_title")}</h3>
            <div class="commanders-grid">
              ${this.renderCommanderCard("vanguard","🤖",l.t("cmd_vanguard_name"),l.t("cmd_vanguard_desc"),"#0ea5e9",0,0)}
              ${this.renderCommanderCard("tesla_engineer","🌩️",l.t("cmd_tesla_name"),l.t("cmd_tesla_desc"),"#a855f7",1500,100)}
              ${this.renderCommanderCard("void_phantom","🥷",l.t("cmd_phantom_name"),l.t("cmd_phantom_desc"),"#f43f5e",0,250)}
            </div>
          </div>

          <div class="meta-upgrades-grid">
            ${this.renderMetaUpgradeCard("damageLevel",l.t("meta_dmg_title"),l.t("meta_dmg_desc"))}
            ${this.renderMetaUpgradeCard("maxHpLevel",l.t("meta_hp_title"),l.t("meta_hp_desc"))}
            ${this.renderMetaUpgradeCard("attackSpeedLevel",l.t("meta_spd_title"),l.t("meta_spd_desc"))}
            ${this.renderMetaUpgradeCard("startingGoldLevel",l.t("meta_gold_title"),l.t("meta_gold_desc"))}
          </div>

          <div class="menu-actions">
            <button id="btn-start-run" class="btn-primary btn-xl pulse-glow">${l.t("btn_start_run")}</button>
            <button id="btn-free-gold-ad" class="btn-ad">${l.t("btn_free_gold_ad")}</button>
            <button id="btn-menu-crates" class="btn-gold">🎁 ${l.t("hud_crates_btn")}</button>
            <button id="btn-menu-missions" class="btn-secondary">📋 ${l.t("hud_missions_btn")}</button>
            <button id="btn-menu-ranks" class="btn-secondary">🏆 ${l.t("hud_ranks_btn")}</button>
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),(a=document.getElementById("btn-start-run"))==null||a.addEventListener("click",()=>{m.getInstance().playClick(),this.uiLayer.innerHTML=this.renderTopHud(),this.bindTopHudEvents(),this.engine.startNewRun()}),(s=document.getElementById("btn-free-gold-ad"))==null||s.addEventListener("click",async()=>{m.getInstance().playClick(),await E.getInstance().showRewardedAd("Menu Free Gold & Gem Drop")&&(e.addGold(250),e.addGems(10),this.renderMainMenu())}),(n=document.getElementById("btn-menu-crates"))==null||n.addEventListener("click",()=>{m.getInstance().playClick(),this.openCratesModal()}),(r=document.getElementById("btn-menu-missions"))==null||r.addEventListener("click",()=>{m.getInstance().playClick(),this.openMissionsModal()}),(d=document.getElementById("btn-menu-ranks"))==null||d.addEventListener("click",()=>{m.getInstance().playClick(),this.openLeaderboardModal()}),this.uiLayer.querySelectorAll("[data-cmd-select]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.cmdSelect,h=i.dataset.cmdMode;if(h==="select")e.data.selectedCommander=c,e.save(),m.getInstance().playClick(),this.renderMainMenu();else if(h==="gold"&&c==="tesla_engineer")e.spendGold(1500)&&(e.unlockCommander(c),m.getInstance().playMerge(3),this.renderMainMenu());else if(h==="gems"){const g=c==="tesla_engineer"?100:250;e.spendGems(g)?(e.unlockCommander(c),m.getInstance().playMerge(4),this.renderMainMenu()):this.openStoreModal()}})}),this.uiLayer.querySelectorAll("[data-meta-buy]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.metaBuy;e.buyMetaUpgrade(c)?(m.getInstance().playMerge(2),this.renderMainMenu()):m.getInstance().playHit()})})}renderCommanderCard(e,t,a,s,n,r,d){const i=b.getInstance(),c=i.isCommanderUnlocked(e),h=i.data.selectedCommander===e;let g="";return c?g=`
        <button data-cmd-select="${e}" data-cmd-mode="select" class="${h?"btn-gold":"btn-primary"}">
          ${h?l.t("cmd_selected"):l.t("cmd_select")}
        </button>
      `:g=`
        <div class="cmd-unlock-btns">
          ${r>0?`<button data-cmd-select="${e}" data-cmd-mode="gold" class="btn-buy">${l.t("cmd_unlock_gold")}</button>`:""}
          <button data-cmd-select="${e}" data-cmd-mode="gems" class="btn-ad">${l.t("cmd_unlock_gems",{gems:d})}</button>
        </div>
      `,`
      <div class="commander-card ${h?"cmd-active":""}" style="border-color: ${h?n:"rgba(148,163,184,0.25)"}">
        <div class="cmd-top">
          <span class="cmd-icon" style="background: ${n}22; border-color: ${n}">${t}</span>
          <div>
            <h4>${a}</h4>
            <p>${s}</p>
          </div>
        </div>
        ${g}
      </div>
    `}renderMetaUpgradeCard(e,t,a){const s=b.getInstance(),n=s.data.meta[e],r=s.getMetaUpgradeCost(e),d=s.data.gold>=r;return`
      <div class="meta-card">
        <div class="meta-info">
          <h4>${t} <span class="lvl-tag">Lv.${n}</span></h4>
          <p>${a}</p>
        </div>
        <button data-meta-buy="${e}" class="btn-buy ${d?"":"disabled"}" ${d?"":"disabled"}>
          🪙 ${r}
        </button>
      </div>
    `}openLevelUpModal(){const e=[...N].sort(()=>Math.random()-.5);this.draftedLevelCards=e.slice(0,3),this.renderLevelUpModal()}renderLevelUpModal(){var t;const e=l.getLang()==="tr";this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel levelup-panel">
          <div class="workshop-header">
            <div>
              <h2>${l.t("levelup_title",{level:this.engine.player.level})}</h2>
              <p>${l.t("levelup_sub")}</p>
            </div>
            <button id="btn-take-all-cards-ad" class="btn-ad pulse-glow">${l.t("btn_take_all_3")}</button>
          </div>

          <div class="tactical-cards-grid">
            ${this.draftedLevelCards.map((a,s)=>`
              <div class="tactical-card" style="border-color: ${a.color}" data-pick-card="${s}">
                <div class="tactical-icon">${a.icon}</div>
                <h3>${e?a.titleTr:a.titleEn}</h3>
                <p>${e?a.descTr:a.descEn}</p>
                <button class="btn-primary">${l.t("btn_select_card")}</button>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),this.uiLayer.querySelectorAll("[data-pick-card]").forEach(a=>{a.addEventListener("click",()=>{const s=Number(a.dataset.pickCard),n=this.draftedLevelCards[s];n&&(m.getInstance().playClick(),this.engine.applyTacticalCard(n.id),this.uiLayer.innerHTML=this.renderTopHud(),this.bindTopHudEvents(),this.engine.state="PLAYING")})}),(t=document.getElementById("btn-take-all-cards-ad"))==null||t.addEventListener("click",async()=>{if(m.getInstance().playClick(),await E.getInstance().showRewardedAd("Take All 3 Level-Up Tactical Cards")){for(const s of this.draftedLevelCards)this.engine.applyTacticalCard(s.id);this.uiLayer.innerHTML=this.renderTopHud(),this.bindTopHudEvents(),this.engine.state="PLAYING"}})}openBetweenWaveWorkshop(){this.selectedSlot=null,this.waveBonusDoubled=!1,this.rollShopOffers(),this.renderWorkshopModal()}rollShopOffers(){const e=Object.keys(k);this.shopOffers=[];for(let t=0;t<3;t++){const a=e[Math.floor(Math.random()*e.length)],s=k[a],n=this.engine.currentWave>=4&&Math.random()<.3?2:1,r=Math.round((s.baseCost+this.engine.currentWave*6)*Math.pow(2,n-1));this.shopOffers.push({archetype:a,tier:n,cost:r,purchased:!1})}}renderWorkshopModal(){const e=b.getInstance(),t=e.getDamageMultiplier()*(1+this.engine.runBuffs.damageMult),a=(s,n,r)=>{var g,v;const d=((g=this.selectedSlot)==null?void 0:g.group)===n&&((v=this.selectedSlot)==null?void 0:v.index)===r;if(!s)return`
          <div class="weapon-slot empty-slot ${d?"selected-slot":""}" data-slot-group="${n}" data-slot-idx="${r}">
            <span class="slot-placeholder">${n==="equipped"?"EQUIP SLOT":"BENCH"}</span>
          </div>
        `;const i=k[s.archetype],c=I[s.tier-1],h=Math.round(i.baseDamage*Math.pow(2.15,s.tier-1)*t);return`
        <div class="weapon-slot filled-slot ${d?"selected-slot":""}"
             style="border-color: ${c}; box-shadow: 0 0 12px ${c}33"
             data-slot-group="${n}" data-slot-idx="${r}">
          <div class="slot-tier-badge" style="background: ${c}">T${s.tier} ${H[s.tier-1]}</div>
          <div class="slot-icon">${i.icon}</div>
          <div class="slot-name">${i.name}</div>
          <div class="slot-dmg">⚔️ ${h} DMG</div>
          <button class="btn-sell-slot" data-sell-group="${n}" data-sell-idx="${r}" title="Sell Weapon">🪙 Sell</button>
        </div>
      `};this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel workshop-panel">
          <div class="workshop-header">
            <div>
              <h2>${l.t("workshop_title",{wave:this.engine.currentWave})}</h2>
              <p>${l.t("workshop_sub")}</p>
            </div>
            <div class="workshop-header-btns">
              <button id="btn-auto-merge" class="btn-gold">${l.t("btn_auto_merge")}</button>
              ${this.waveBonusDoubled?`<span class="badge-claimed">${l.t("badge_bonus_claimed")}</span>`:`<button id="btn-double-wave-ad" class="btn-ad">${l.t("btn_double_wave_ad",{gold:this.engine.waveGoldEarned})}</button>`}
            </div>
          </div>

          <div class="workshop-section">
            <h3>${l.t("active_slots_title")}</h3>
            <div class="slots-grid">
              ${this.engine.weapons.equipped.map((s,n)=>a(s,"equipped",n)).join("")}
            </div>
          </div>

          <div class="workshop-section">
            <h3>${l.t("bench_slots_title")}</h3>
            <div class="slots-grid">
              ${this.engine.weapons.bench.map((s,n)=>a(s,"bench",n)).join("")}
            </div>
          </div>

          <div class="workshop-section shop-offers-section">
            <div class="shop-bar-header">
              <h3>${l.t("armory_title")}</h3>
              <div class="shop-reroll-btns">
                <button id="btn-reroll-gold" class="btn-secondary">${l.t("btn_reroll_gold")}</button>
                <button id="btn-reroll-ad" class="btn-ad">${l.t("btn_reroll_ad")}</button>
              </div>
            </div>
            <div class="shop-offers-grid">
              ${this.shopOffers.map((s,n)=>{const r=k[s.archetype],d=I[s.tier-1],i=!s.purchased&&e.data.gold>=s.cost&&this.engine.weapons.hasFreeSlot();return`
                    <div class="shop-offer-card ${s.purchased?"sold-out":""}" style="border-color: ${d}">
                      <div class="slot-tier-badge" style="background: ${d}">T${s.tier} ${H[s.tier-1]}</div>
                      <div class="offer-main">
                        <span class="offer-icon">${r.icon}</span>
                        <div>
                          <h4>${r.name}</h4>
                          <p>${r.description}</p>
                        </div>
                      </div>
                      <button data-buy-offer="${n}" class="btn-primary ${i?"":"disabled"}" ${i?"":"disabled"}>
                        ${s.purchased?"PURCHASED ✓":`BUY • 🪙 ${s.cost}`}
                      </button>
                    </div>
                  `}).join("")}
            </div>
          </div>

          <div class="workshop-footer">
            <button id="btn-Menu-return" class="btn-secondary">${l.t("btn_main_menu")}</button>
            <button id="btn-next-wave" class="btn-primary btn-xl pulse-glow">${l.t("btn_next_wave",{wave:this.engine.currentWave+1})}</button>
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),this.bindWorkshopEvents()}bindWorkshopEvents(){var t,a,s,n,r,d;const e=b.getInstance();this.uiLayer.querySelectorAll("[data-slot-group]").forEach(i=>{i.addEventListener("click",c=>{if(c.target.hasAttribute("data-sell-group"))return;const h=i.dataset.slotGroup,g=Number(i.dataset.slotIdx);this.selectedSlot?(this.engine.weapons.interactSlots(this.selectedSlot.group,this.selectedSlot.index,h,g),this.selectedSlot=null,this.renderWorkshopModal()):(h==="equipped"&&this.engine.weapons.equipped[g]||h==="bench"&&this.engine.weapons.bench[g])&&(this.selectedSlot={group:h,index:g},m.getInstance().playClick(),this.renderWorkshopModal())})}),this.uiLayer.querySelectorAll("[data-sell-group]").forEach(i=>{i.addEventListener("click",c=>{c.stopPropagation();const h=i.dataset.sellGroup,g=Number(i.dataset.sellIdx),v=this.engine.weapons.sellWeapon(h,g);v>0&&(e.addGold(v),this.renderWorkshopModal())})}),(t=document.getElementById("btn-auto-merge"))==null||t.addEventListener("click",()=>{this.engine.weapons.autoMergeAll(),this.renderWorkshopModal()}),(a=document.getElementById("btn-double-wave-ad"))==null||a.addEventListener("click",async()=>{await E.getInstance().showRewardedAd("2x Wave Clear Gold Bonus")&&!this.waveBonusDoubled&&(this.waveBonusDoubled=!0,e.addGold(this.engine.waveGoldEarned),this.renderWorkshopModal())}),this.uiLayer.querySelectorAll("[data-buy-offer]").forEach(i=>{i.addEventListener("click",()=>{const c=Number(i.dataset.buyOffer),h=this.shopOffers[c];if(!(!h||h.purchased)&&this.engine.weapons.hasFreeSlot()&&e.spendGold(h.cost)){h.purchased=!0;const g=this.engine.weapons.createWeapon(h.archetype,h.tier);this.engine.weapons.addWeaponToAvailableSlot(g),m.getInstance().playCoin(),this.renderWorkshopModal()}})}),(s=document.getElementById("btn-reroll-gold"))==null||s.addEventListener("click",()=>{e.spendGold(25)&&(m.getInstance().playClick(),this.rollShopOffers(),this.renderWorkshopModal())}),(n=document.getElementById("btn-reroll-ad"))==null||n.addEventListener("click",async()=>{await E.getInstance().showRewardedAd("Free Armory Reroll + High Tier Crate")&&(this.rollShopOffers(),this.shopOffers[1]&&(this.shopOffers[1].tier=Math.min(4,this.shopOffers[1].tier+1)),this.renderWorkshopModal())}),(r=document.getElementById("btn-Menu-return"))==null||r.addEventListener("click",()=>{this.engine.state="MENU",this.renderMainMenu()}),(d=document.getElementById("btn-next-wave"))==null||d.addEventListener("click",async()=>{m.getInstance().playClick(),this.engine.currentWave%3===0&&await E.getInstance().showInterstitialAd(`Between Wave ${this.engine.currentWave} & ${this.engine.currentWave+1}`),this.uiLayer.innerHTML=this.renderTopHud(),this.bindTopHudEvents(),this.engine.startWave(this.engine.currentWave+1)})}openDeathModal(){var s,n,r;const e=b.getInstance(),t=this.engine.state==="REVIVE_PROMPT",a=Math.max(100,Math.floor(this.engine.runGoldEarned*.5));this.uiLayer.innerHTML=`
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel death-panel">
          <h2 class="death-title">${t?l.t("death_revive_title"):l.t("death_over_title")}</h2>
          <p>${l.t("death_summary",{wave:this.engine.currentWave,kills:this.engine.runKills})}</p>

          <div class="stats-banner">
            <div><span>${l.t("wave_label")}</span><strong>${this.engine.currentWave}</strong></div>
            <div><span>GOLD</span><strong>🪙 ${this.engine.runGoldEarned}</strong></div>
            <div><span>SCORE</span><strong>${this.engine.runScore.toLocaleString()}</strong></div>
          </div>

          <div class="death-actions">
            ${t?`<button id="btn-revive-ad" class="btn-ad btn-xl pulse-glow">${l.t("btn_revive_ad")}</button>`:""}
            <button id="btn-claim-2x-end" class="btn-gold">${l.t("btn_claim_end_ad",{gold:a})}</button>
            <button id="btn-return-menu" class="btn-secondary">${l.t("btn_return_hub")}</button>
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),(s=document.getElementById("btn-revive-ad"))==null||s.addEventListener("click",async()=>{await E.getInstance().showRewardedAd("Emergency Revive + Tactical Nuke")&&(this.uiLayer.innerHTML=this.renderTopHud(),this.bindTopHudEvents(),this.engine.revivePlayerWithNuke())}),(n=document.getElementById("btn-claim-2x-end"))==null||n.addEventListener("click",async()=>{await E.getInstance().showRewardedAd("End-of-Run Bonus Gold Multiplier")&&e.addGold(a),this.engine.state="MENU",this.renderMainMenu()}),(r=document.getElementById("btn-return-menu"))==null||r.addEventListener("click",()=>{this.engine.state="MENU",this.renderMainMenu()})}openCratesModal(e){var d,i,c,h,g;(d=document.getElementById("crates-modal"))==null||d.remove();const t=b.getInstance(),a=this.engine.state;this.engine.setSdkPause(!0);const s=document.createElement("div");s.id="crates-modal",s.className="modal-backdrop";const n=t.data.techShards;s.innerHTML=`
      <div class="cyber-panel store-panel">
        <div class="workshop-header">
          <div>
            <h2>${l.t("crates_modal_title")}</h2>
            <p>${l.t("crates_modal_sub")}</p>
          </div>
          <button id="btn-close-crates" class="btn-secondary">✕ Close</button>
        </div>

        <div class="shards-banner">
          ${l.t("tech_shards_banner",{shards:n,bonus:n*3})}
        </div>

        ${e?`
          <div class="crate-loot-reveal pulse-glow">
            <h4>${l.t("crate_rewards_header")}</h4>
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
            <h3>${l.t("crate_free_title")}</h3>
            <p>${l.t("crate_free_desc")}</p>
            <button id="btn-open-ad-crate" class="btn-ad">${l.t("crate_free_btn")}</button>
          </div>

          <div class="iap-card">
            <div class="crate-big-icon">🎁</div>
            <h3>${l.t("crate_1x_title")}</h3>
            <p>${l.t("crate_1x_desc")}</p>
            <button id="btn-open-1x-crate" class="btn-primary">${l.t("crate_1x_btn")}</button>
          </div>

          <div class="iap-card">
            <span class="iap-badge">JACKPOT VALUE</span>
            <div class="crate-big-icon">🌌</div>
            <h3>${l.t("crate_10x_title")}</h3>
            <p>${l.t("crate_10x_desc")}</p>
            <button id="btn-open-10x-crate" class="btn-gold">${l.t("crate_10x_btn")}</button>
          </div>
        </div>
      </div>
    `,this.uiLayer.appendChild(s);const r=()=>{s.remove(),this.engine.setSdkPause(!1),a==="MENU"?this.renderMainMenu():a==="SHOP"?this.renderWorkshopModal():this.updateTopHudValues()};(i=document.getElementById("btn-close-crates"))==null||i.addEventListener("click",r),(c=document.getElementById("btn-open-ad-crate"))==null||c.addEventListener("click",async()=>{if(await E.getInstance().showRewardedAd("Open Free Cyber Supply Crate")){const p=t.rollSupplyCrate(1,!1);m.getInstance().playMerge(5),this.openCratesModal(p)}}),(h=document.getElementById("btn-open-1x-crate"))==null||h.addEventListener("click",()=>{if(t.spendGems(80)){const v=t.rollSupplyCrate(1,!0);m.getInstance().playMerge(4),this.openCratesModal(v)}else s.remove(),this.openStoreModal()}),(g=document.getElementById("btn-open-10x-crate"))==null||g.addEventListener("click",()=>{if(t.spendGems(700)){const v=t.rollSupplyCrate(10,!0);m.getInstance().playMerge(5),this.openCratesModal(v)}else s.remove(),this.openStoreModal()})}openMissionsModal(){var d,i;(d=document.getElementById("missions-modal"))==null||d.remove();const e=b.getInstance(),t=e.data,a=this.engine.state;this.engine.setSdkPause(!0);const s=[{tierKey:"killsTier",title:l.t("mission_kill_title"),desc:l.t("mission_kill_desc",{target:t.missionTiers.killsTier*60}),current:t.totalKills,target:t.missionTiers.killsTier*60,rewardGold:250*t.missionTiers.killsTier,rewardGems:20},{tierKey:"mergesTier",title:l.t("mission_merge_title"),desc:l.t("mission_merge_desc",{target:t.missionTiers.mergesTier*4}),current:t.totalMerges,target:t.missionTiers.mergesTier*4,rewardGold:300*t.missionTiers.mergesTier,rewardGems:25},{tierKey:"waveTier",title:l.t("mission_wave_title"),desc:l.t("mission_wave_desc",{target:t.missionTiers.waveTier*3}),current:t.highestWave,target:t.missionTiers.waveTier*3,rewardGold:400*t.missionTiers.waveTier,rewardGems:35},{tierKey:"levelUpsTier",title:l.t("mission_lvl_title"),desc:l.t("mission_lvl_desc",{target:t.missionTiers.levelUpsTier*3}),current:t.totalLevelUps,target:t.missionTiers.levelUpsTier*3,rewardGold:250*t.missionTiers.levelUpsTier,rewardGems:20}],n=document.createElement("div");n.id="missions-modal",n.className="modal-backdrop",n.innerHTML=`
      <div class="cyber-panel store-panel">
        <div class="workshop-header">
          <div>
            <h2>${l.t("missions_modal_title")}</h2>
            <p>${l.t("missions_modal_sub")}</p>
          </div>
          <button id="btn-close-missions" class="btn-secondary">✕ Close</button>
        </div>

        <div class="missions-list">
          ${s.map((c,h)=>{const g=Math.min(100,Math.round(c.current/c.target*100)),v=c.current>=c.target;return`
                <div class="mission-row ${v?"mission-ready":""}">
                  <div class="mission-details">
                    <h4>${c.title} <span class="lvl-tag">Tier ${t.missionTiers[c.tierKey]}</span></h4>
                    <p>${c.desc} (${Math.min(c.current,c.target)} / ${c.target})</p>
                    <div class="mission-prog-wrap">
                      <div class="mission-prog-fill" style="width: ${g}%"></div>
                    </div>
                  </div>
                  <div class="mission-rewards">
                    <span class="reward-tag">🪙 ${c.rewardGold} + 💎 ${c.rewardGems}</span>
                    ${v?`
                      <div class="mission-claim-btns">
                        <button data-claim-idx="${h}" data-claim-mult="1" class="btn-primary">${l.t("btn_claim_mission")}</button>
                        <button data-claim-idx="${h}" data-claim-mult="2" class="btn-ad">${l.t("btn_claim_2x_ad")}</button>
                      </div>
                    `:`<button class="btn-secondary" disabled>${l.t("mission_in_progress")}</button>`}
                  </div>
                </div>
              `}).join("")}
        </div>
      </div>
    `,this.uiLayer.appendChild(n);const r=()=>{n.remove(),this.engine.setSdkPause(!1),a==="MENU"?this.renderMainMenu():a==="SHOP"?this.renderWorkshopModal():this.updateTopHudValues()};(i=document.getElementById("btn-close-missions"))==null||i.addEventListener("click",r),n.querySelectorAll("[data-claim-idx]").forEach(c=>{c.addEventListener("click",async()=>{const h=Number(c.dataset.claimIdx),g=Number(c.dataset.claimMult),v=s[h];!v||v.current<v.target||g===2&&!await E.getInstance().showRewardedAd(`2x Mission Bounty: ${v.title}`)||(e.addGold(v.rewardGold*g),e.addGems(v.rewardGems*g),e.data.missionTiers[v.tierKey]+=1,e.save(),m.getInstance().playCashRegister(),this.openMissionsModal())})})}openLeaderboardModal(){var d,i,c;(d=document.getElementById("leaderboard-modal"))==null||d.remove();const e=b.getInstance(),t=e.data,a=this.engine.state;this.engine.setSdkPause(!0);const s=[...V,{name:t.playerName||"CYBER_COMMANDER",wave:t.highestWave,score:t.highScore,vip:t.vipUnlocked,isPlayer:!0}].sort((h,g)=>g.score-h.score||g.wave-h.wave),n=document.createElement("div");n.id="leaderboard-modal",n.className="modal-backdrop",n.innerHTML=`
      <div class="cyber-panel store-panel">
        <div class="workshop-header">
          <div>
            <h2>${l.t("leaderboard_title")}</h2>
            <p>${l.t("leaderboard_sub")}</p>
          </div>
          <button id="btn-close-ranks" class="btn-secondary">✕ Close</button>
        </div>

        <div class="callsign-bar">
          <label for="input-callsign">${l.t("callsign_label")}</label>
          <input id="input-callsign" type="text" maxlength="18" value="${t.playerName}" />
          <button id="btn-save-callsign" class="btn-primary">${l.t("btn_save_callsign")}</button>
        </div>

        <div class="leaderboard-table-wrap">
          <table class="leaderboard-table">
            <thead>
              <tr>
                <th>${l.t("col_rank")}</th>
                <th>${l.t("col_commander")}</th>
                <th>${l.t("col_wave")}</th>
                <th>${l.t("col_score")}</th>
              </tr>
            </thead>
            <tbody>
              ${s.map((h,g)=>`
                <tr class="${h.isPlayer?"player-rank-row":""}">
                  <td><strong>#${g+1}</strong></td>
                  <td>
                    ${h.name}
                    ${h.vip?'<span class="vip-tag">VIP</span>':""}
                    ${h.isPlayer?'<span class="you-tag">YOU</span>':""}
                  </td>
                  <td>${l.t("wave_label")} ${h.wave}</td>
                  <td><strong>${h.score.toLocaleString()}</strong></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,this.uiLayer.appendChild(n);const r=()=>{n.remove(),this.engine.setSdkPause(!1),a==="MENU"?this.renderMainMenu():a==="SHOP"?this.renderWorkshopModal():this.updateTopHudValues()};(i=document.getElementById("btn-close-ranks"))==null||i.addEventListener("click",r),(c=document.getElementById("btn-save-callsign"))==null||c.addEventListener("click",()=>{const h=document.getElementById("input-callsign"),g=((h==null?void 0:h.value)||"").trim().toUpperCase().slice(0,18);g&&(e.data.playerName=g,e.save(),m.getInstance().playClick(),this.openLeaderboardModal())})}openStoreModal(){var n,r,d;(n=document.getElementById("vip-store-modal"))==null||n.remove();const e=b.getInstance(),t=this.engine.state;this.engine.setSdkPause(!0);const a=document.createElement("div");a.id="vip-store-modal",a.className="modal-backdrop",a.innerHTML=`
      <div class="cyber-panel store-panel">
        <div class="workshop-header">
          <div>
            <h2>💎 NEXUS CYBER STORE & IAP SANDBOX</h2>
            <p>Test high-converting In-App Purchases (Stripe/Portal SDK) and Gem Crates. All transactions increment your Simulated Revenue counter!</p>
          </div>
          <button id="btn-close-store" class="btn-secondary">✕ Close</button>
        </div>

        <div class="iap-grid">
          ${D.map(i=>{const c=i.id==="vip_speed"&&e.data.vipUnlocked||i.id==="starter_pack"&&e.data.starterPackBought;return`
              <div class="iap-card">
                ${i.badge?`<span class="iap-badge">${i.badge}</span>`:""}
                <h3>${i.title}</h3>
                <p>${i.description}</p>
                <button data-iap-id="${i.id}" class="btn-gold ${c?"disabled":""}" ${c?"disabled":""}>
                  ${c?"UNLOCKED ✓":`BUY $${i.priceUsd.toFixed(2)}`}
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
      </div>
    `,this.uiLayer.appendChild(a);const s=()=>{a.remove(),this.engine.setSdkPause(!1),t==="MENU"?this.renderMainMenu():t==="SHOP"?this.renderWorkshopModal():t==="LEVEL_UP"?this.renderLevelUpModal():this.updateTopHudValues()};(r=document.getElementById("btn-close-store"))==null||r.addEventListener("click",s),a.querySelectorAll("[data-iap-id]").forEach(i=>{i.addEventListener("click",async()=>{const c=i.dataset.iapId;await E.getInstance().purchaseProduct(c)&&(c==="starter_pack"?(e.data.starterPackBought=!0,e.addGold(1500),e.addGems(100),this.engine.weapons.addWeaponToAvailableSlot(this.engine.weapons.createWeapon("plasma",3))):c==="vip_speed"?(e.data.vipUnlocked=!0,e.unlockCommander("void_phantom"),e.addGems(500),this.engine.gameSpeedMultiplier=2):c==="gem_vault_small"?e.addGems(150):c==="gem_vault_mega"&&(e.addGems(1e3),e.addGold(5e3)),e.save(),s())})}),(d=document.getElementById("btn-spend-gems"))==null||d.addEventListener("click",()=>{e.spendGems(50)&&(e.addGold(1e3),m.getInstance().playCashRegister(),this.updateTopHudValues())})}}window.addEventListener("DOMContentLoaded",()=>{const M=document.getElementById("game-canvas");if(!M)throw new Error("Missing #game-canvas element");const e=new U(M);E.getInstance().bindEngineCallbacks(()=>e.setSdkPause(!0),()=>e.setSdkPause(!1)),new K(e)});
