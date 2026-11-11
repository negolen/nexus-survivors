(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const P={hero_badge:["HTML5 • MONETIZATION-READY • 60FPS ROGUELITE","HTML5 • GELİR MODELİ HAZIR • 60FPS ROGUELITE"],game_subtitle:["MERGE & CONQUER","BİRLEŞTİR & FETHET"],hero_desc:["Survive relentless cyber-swarms, merge identical weapons up to Tier-5 Legendary, and draft roguelite upgrades.","Siber sürülerden sağ çık, aynı silahları Seviye-5 Efsaneviye birleştir ve roguelite güçlendirmeleri seç."],stat_highest_wave:["HIGHEST WAVE","EN YÜKSEK DALGA"],stat_high_score:["HIGH SCORE","REKOR SKOR"],stat_ads_watched:["ADS WATCHED","İZLENEN REKLAM"],stat_sim_rev:["SIMULATED REV","SİMÜLE GELİR"],wave_label:["WAVE","DALGA"],lvl_label:["LVL","SV"],speed_2x_on:["2x TURBO ON","2x TURBO AÇIK"],speed_1x_btn:["1x SPEED (2x AD/VIP)","1x HIZ (2x REKLAM/VIP)"],vip_store_btn:["VIP STORE","VIP MAĞAZA"],hud_crates_btn:["CRATES","KASALAR"],hud_missions_btn:["MISSIONS","GÖREVLER"],hud_ranks_btn:["RANKS","LİDERLİK"],commanders_title:["SELECT CYBER COMMANDER","SİBER KOMUTAN SEÇİMİ"],cmd_vanguard_name:["Vanguard MK-I","Öncü MK-I"],cmd_vanguard_desc:["+10% Max Hull HP • Starts with Dual Plasma Blasters","+%10 Maks Can • Çift Plazma Silahı ile başlar"],cmd_tesla_name:["Tesla Engineer","Tesla Mühendisi"],cmd_tesla_desc:["+20% All Weapon Damage • Starts with Tesla Arc Coil","+%20 Tüm Silah Hasarı • Tesla Bobini ile başlar"],cmd_phantom_name:["Void Phantom","Hiçlik Hayaleti"],cmd_phantom_desc:["+25% Move Speed & +15% Crit Chance • Starts w/ Tier-2 Ripper","+%25 Hareket Hızı & +%15 Kritik Şansı • Sv-2 Testere ile başlar"],cmd_selected:["SELECTED ✓","SEÇİLDİ ✓"],cmd_select:["SELECT","SEÇ"],cmd_unlock_gold:["Unlock (1,500 🪙)","Aç (1,500 🪙)"],cmd_unlock_gems:["Unlock ({gems} 💎)","Aç ({gems} 💎)"],meta_dmg_title:["⚔️ Weapon Damage","⚔️ Silah Hasarı"],meta_dmg_desc:["+15% All Damage / Lv","+%15 Tüm Hasar / Sv"],meta_hp_title:["🛡️ Hull Integrity","🛡️ Zırh Bütünlüğü"],meta_hp_desc:["+30 Max HP / Lv","+30 Maks Can / Sv"],meta_spd_title:["⚡ Fire Rate Overclock","⚡ Atış Hızı Aşırtma"],meta_spd_desc:["+8% Attack Speed / Lv","+%8 Saldırı Hızı / Sv"],meta_gold_title:["🪙 Venture Capital","🪙 Başlangıç Sermayesi"],meta_gold_desc:["+25 Starting Gold / Lv","+25 Başlangıç Altını / Sv"],btn_start_run:["🚀 DEPLOY TO ARENA (START RUN)","🚀 ARENAYA İNİŞ YAP (BAŞLA)"],btn_free_gold_ad:["🎬 Watch Rewarded Ad (+250 Gold & +10 💎)","🎬 Ödüllü Reklam İzle (+250 Altın & +10 💎)"],workshop_title:["WAVE {wave} CLEARED! • MERGE WORKSHOP","DALGA {wave} TEMİZLENDİ! • BİRLEŞTİRME ATÖLYESİ"],workshop_sub:["Click two identical weapons of the same Tier to MERGE them into Tier+1 (2.15x Damage)!","Aynı tür ve seviyedeki iki silaha tıklayarak Seviye+1 (2.15x Hasar) olarak BİRLEŞTİR!"],btn_auto_merge:["✨ AUTO-MERGE ALL","✨ TÜMÜNÜ OTOMATİK BİRLEŞTİR"],btn_double_wave_ad:["🎬 2x Wave Gold (+{gold}g)","🎬 2x Dalga Altını (+{gold}g)"],badge_bonus_claimed:["2x BONUS CLAIMED ✓","2x BONUS ALINDI ✓"],active_slots_title:["ACTIVE ORBITAL SLOTS (6 MAX)","AKTİF YÖRÜNGE SİLAHLARI (MAKS 6)"],bench_slots_title:["WORKSHOP BENCH (STORAGE)","ATÖLYE DEPOSU (YEDEK)"],armory_title:["ARMORY REQUISITION","CEPHANELİK TEDARİĞİ"],btn_reroll_gold:["🎲 Reroll (25 🪙)","🎲 Yenile (25 🪙)"],btn_reroll_ad:["🎬 Free Reroll + Rare Chance (Ad)","🎬 Ücretsiz Yenile + Nadir Şansı (Reklam)"],btn_main_menu:["🏠 Main Menu","🏠 Ana Menü"],btn_next_wave:["⚔️ START WAVE {wave} ▶","⚔️ DALGA {wave} BAŞLAT ▶"],levelup_title:["⚡ TACTICAL LEVEL UP! (LEVEL {level})","⚡ TAKTİKSEL SEVİYE ATLAMA! (SEVİYE {level})"],levelup_sub:["Select 1 combat augmentation for this run — or claim ALL 3 via Rewarded Ad!","Bu tur için 1 savaş güçlendirmesi seç — veya Reklam izleyerek 3 KARTIN TÜMÜNÜ AL!"],btn_take_all_3:["🎬 TAKE ALL 3 UPGRADES (Watch Ad)","🎬 3 KARTIN TÜMÜNÜ AL (Reklam İzle)"],btn_select_card:["SELECT AUGMENT","GÜÇLENDİRMEYİ SEÇ"],death_revive_title:["⚠️ HULL CRITICAL — REVIVE AVAILABLE!","⚠️ ZIRH KRİTİK — DİRİLME MEVCUT!"],death_over_title:["💀 RUN TERMINATED","💀 OPERASYON SONA ERDİ"],death_summary:["You reached Wave {wave} and eliminated {kills} hostiles.","Dalga {wave} seviyesine ulaştın ve {kills} düşmanı yok ettin."],btn_revive_ad:["🎬 Watch Ad to REVIVE (100% HP + Tactical Nuke)","🎬 Reklam İzle ve DİRİL (%100 Can + Nükleer Dalga)"],btn_claim_end_ad:["🎬 Watch Ad: Claim +{gold} Bonus Gold & Exit","🎬 Reklam İzle: +{gold} Bonus Altın Al & Çık"],btn_return_hub:["Return to Upgrade Hub","Geliştirme Merkezine Dön"],crates_modal_title:["🎁 CYBER SUPPLY CRATES (GACHA LAB)","🎁 SİBER İKMAL KASALARI (GACHA)"],crates_modal_sub:["Open encrypted supply pods for Gold, Gems, and Permanent Tech Shards (+3% All Weapon Damage per Shard)!","Altın, Elmas ve Kalıcı Teknoloji Parçaları (Parça başına +%3 Silah Hasarı) için kasaları aç!"],tech_shards_banner:["⚡ Permanent Tech Shards Owned: {shards} (+{bonus}% Global Weapon Damage)","⚡ Kalıcı Teknoloji Parçası: {shards} (+%{bonus} Genel Silah Hasarı)"],crate_free_title:["Encrypted Ad Pod","Şifreli Reklam Kapsülü"],crate_free_desc:["Contains 250–600 Gold, 15–35 Gems, or Tech Shards!","250–600 Altın, 15–35 Elmas veya Teknoloji Parçası içerir!"],crate_free_btn:["🎬 OPEN FREE CRATE (Watch Ad)","🎬 ÜCRETSİZ KASA AÇ (Reklam İzle)"],crate_1x_title:["Quantum Supply Crate","Kuantum İkmal Kasası"],crate_1x_desc:["Guaranteed High Gold + Gems + 1–3 Permanent Tech Shards!","Garantili Yüksek Altın + Elmas + 1–3 Kalıcı Teknoloji Parçası!"],crate_1x_btn:["OPEN 1x CRATE (80 💎)","1x KASA AÇ (80 💎)"],crate_10x_title:["10x Mega Armada Vault","10x Mega Armada Kasası"],crate_10x_desc:["10x Quantum Crates with Bonus Jackpot Shards & Gold (Save 100 💎)!","10x Kuantum Kasası + Jackpot Teknoloji Parçaları (100 💎 Tasarruf)!"],crate_10x_btn:["OPEN 10x MEGA VAULT (700 💎)","10x MEGA KASA AÇ (700 💎)"],crate_rewards_header:["🎉 SUPPLY DROP UNLOCKED!","🎉 İKMAL KAPSÜLÜ AÇILDI!"],missions_modal_title:["📋 DAILY OPERATIONS & BOUNTIES","📋 GÜNLÜK GÖREVLER & ÖDÜLLER"],missions_modal_sub:["Complete combat milestones to earn Gems and Gold. Watch an Ad on claim to DOUBLE your bounty!","Elmas ve Altın kazanmak için hedefleri tamamla. Reklam izleyerek ödülü 2 KATINA çıkar!"],mission_kill_title:["Exterminator Protocol","İmha Protokolü"],mission_kill_desc:["Eliminate {target} hostile cyber-units","{target} düşman siber birimini yok et"],mission_merge_title:["Master Synthesizer","Usta Sentezci"],mission_merge_desc:["Merge identical orbital weapons {target} times","Aynı silahları {target} kez birleştir"],mission_wave_title:["Deep Arena Survivor","Arena Hayatta Kalanı"],mission_wave_desc:["Reach Wave {target} in the Cyber Arena","Siber Arenada Dalga {target} seviyesine ulaş"],mission_lvl_title:["Tactical Overclocker","Taktiksel Aşırtıcı"],mission_lvl_desc:["Level up {target} times during arena runs","Arena turlarında {target} kez seviye atla"],btn_claim_mission:["CLAIM","AL"],btn_claim_2x_ad:["🎬 2x CLAIM (Ad)","🎬 2x AL (Reklam)"],mission_in_progress:["IN PROGRESS","DEVAM EDİYOR"],leaderboard_title:["🏆 GLOBAL ARENA LEADERBOARD","🏆 KÜRESEL ARENA LİDERLİK TABLOSU"],leaderboard_sub:["Top Cyber Commanders ranked by Arena High Score & Highest Wave survived.","En yüksek skor ve ulaşılan dalgaya göre sıralanan Siber Komutanlar."],callsign_label:["YOUR CALLSIGN:","KOMUTAN ADIN:"],btn_save_callsign:["SAVE NAME","KAYDET"],col_rank:["RANK","SIRA"],col_commander:["COMMANDER","KOMUTAN"],col_wave:["MAX WAVE","MAKS DALGA"],col_score:["HIGH SCORE","REKOR SKOR"]};class l{static currentLang="en";static getLang(){return this.currentLang}static setLang(e){this.currentLang=e==="tr"?"tr":"en"}static t(e,t){const a=P[e];let s=a?this.currentLang==="tr"?a[1]:a[0]:e;if(t)for(const[n,i]of Object.entries(t))s=s.replace(`{${n}}`,String(i));return s}}const I="nexus_survivors_save_v1",S={language:"en",playerName:"CYBER_COMMANDER",selectedCommander:"vanguard",unlockedCommanders:["vanguard"],gold:150,gems:25,techShards:0,highScore:0,highestWave:1,totalKills:0,totalMerges:0,totalLevelUps:0,missionTiers:{killsTier:1,mergesTier:1,waveTier:1,levelUpsTier:1},vipUnlocked:!1,starterPackBought:!1,totalRevenueSimulated:0,rewardedAdsWatched:0,interstitialAdsWatched:0,iapPurchasesCount:0,soundEnabled:!0,meta:{damageLevel:0,maxHpLevel:0,startingGoldLevel:0,magnetLevel:0,attackSpeedLevel:0}};class u{static instance;data;listeners=[];constructor(){this.data=this.load(),l.setLang(this.data.language||"en")}static getInstance(){return u.instance||(u.instance=new u),u.instance}load(){try{const e=localStorage.getItem(I);if(!e)return structuredClone(S);const t=JSON.parse(e);return{...structuredClone(S),...t,language:t.language==="tr"?"tr":"en",unlockedCommanders:Array.isArray(t.unlockedCommanders)?t.unlockedCommanders:["vanguard"],missionTiers:{...S.missionTiers,...t.missionTiers||{}},meta:{...S.meta,...t.meta||{}}}}catch{return structuredClone(S)}}save(){try{localStorage.setItem(I,JSON.stringify(this.data)),this.notify()}catch(e){console.warn("Could not persist save data:",e)}}setLanguage(e){this.data.language=e,l.setLang(e),this.save()}toggleLanguage(){const e=this.data.language==="en"?"tr":"en";return this.setLanguage(e),e}isCommanderUnlocked(e){return e==="void_phantom"&&this.data.vipUnlocked?!0:this.data.unlockedCommanders.includes(e)}unlockCommander(e){this.data.unlockedCommanders.includes(e)||this.data.unlockedCommanders.push(e),this.data.selectedCommander=e,this.save()}recordKill(e=1){this.data.totalKills+=e,this.save()}recordMerge(e=1){this.data.totalMerges+=e,this.save()}recordLevelUp(e=1){this.data.totalLevelUps+=e,this.save()}rollSupplyCrate(e,t){let a=0,s=0,n=0;for(let i=0;i<e;i++){const d=t?400+Math.floor(Math.random()*550):250+Math.floor(Math.random()*350),r=t?15+Math.floor(Math.random()*35):15+Math.floor(Math.random()*25),h=t?1+Math.floor(Math.random()*3):Math.random()<.65?1:0;a+=d,s+=r,n+=h}return this.data.gold+=a,this.data.gems+=s,this.data.techShards+=n,this.save(),{gold:a,gems:s,techShards:n}}onChange(e){this.listeners.push(e)}notify(){for(const e of this.listeners)e()}addGold(e){this.data.gold=Math.max(0,Math.floor(this.data.gold+e)),this.save()}spendGold(e){return this.data.gold<e?!1:(this.data.gold-=e,this.save(),!0)}addGems(e){this.data.gems=Math.max(0,Math.floor(this.data.gems+e)),this.save()}spendGems(e){return this.data.gems<e?!1:(this.data.gems-=e,this.save(),!0)}recordAdRevenue(e,t){e==="rewarded"?this.data.rewardedAdsWatched+=1:this.data.interstitialAdsWatched+=1,this.data.totalRevenueSimulated=Number((this.data.totalRevenueSimulated+t/1e3).toFixed(4)),this.save()}recordIapRevenue(e){this.data.iapPurchasesCount+=1,this.data.totalRevenueSimulated=Number((this.data.totalRevenueSimulated+e).toFixed(4)),this.save()}getMetaUpgradeCost(e){const t=this.data.meta[e];return Math.floor(100*Math.pow(1.55,t))}buyMetaUpgrade(e){const t=this.getMetaUpgradeCost(e);return this.spendGold(t)?(this.data.meta[e]+=1,this.save(),!0):!1}getDamageMultiplier(){const e=this.data.selectedCommander==="tesla_engineer"?.2:0,t=this.data.techShards*.03;return 1+this.data.meta.damageLevel*.15+e+t}getBonusMaxHp(){const e=this.data.selectedCommander==="vanguard"?20:0;return this.data.meta.maxHpLevel*30+e}getStartingWaveGold(){return 40+this.data.meta.startingGoldLevel*25}getMagnetRadius(){return 100+this.data.meta.magnetLevel*25}getAttackSpeedMultiplier(){return 1+this.data.meta.attackSpeedLevel*.08}resetSave(){this.data=structuredClone(S),l.setLang("en"),this.save()}}class c{static instance;ctx=null;adMuted=!1;constructor(){}static getInstance(){return c.instance||(c.instance=new c),c.instance}setAdMuted(e){this.adMuted=e}ensureContext(){if(this.adMuted||!u.getInstance().data.soundEnabled)return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}playShoot(e=0){const t=this.ensureContext();if(!t)return;const a=t.currentTime,s=t.createOscillator(),n=t.createGain();s.type="triangle";const i=520+e*60;s.frequency.setValueAtTime(i,a),s.frequency.exponentialRampToValueAtTime(140,a+.09),n.gain.setValueAtTime(.08,a),n.gain.exponentialRampToValueAtTime(.001,a+.09),s.connect(n),n.connect(t.destination),s.start(a),s.stop(a+.09)}playLightning(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,a=e.createOscillator(),s=e.createGain();a.type="sawtooth",a.frequency.setValueAtTime(920,t),a.frequency.linearRampToValueAtTime(320,t+.06),a.frequency.linearRampToValueAtTime(750,t+.12),s.gain.setValueAtTime(.06,t),s.gain.exponentialRampToValueAtTime(.001,t+.12),a.connect(s),s.connect(e.destination),a.start(t),a.stop(t+.12)}playHit(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,a=e.createOscillator(),s=e.createGain();a.type="square",a.frequency.setValueAtTime(190,t),a.frequency.exponentialRampToValueAtTime(55,t+.06),s.gain.setValueAtTime(.05,t),s.gain.exponentialRampToValueAtTime(.001,t+.06),a.connect(s),s.connect(e.destination),a.start(t),a.stop(t+.06)}playCoin(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,a=e.createOscillator(),s=e.createGain();a.type="sine",a.frequency.setValueAtTime(987.77,t),a.frequency.setValueAtTime(1318.51,t+.05),s.gain.setValueAtTime(.06,t),s.gain.exponentialRampToValueAtTime(.001,t+.14),a.connect(s),s.connect(e.destination),a.start(t),a.stop(t+.14)}playMerge(e){const t=this.ensureContext();if(!t)return;const a=t.currentTime,s=[440,554.37,659.25,880,1108.73],n=1+(e-1)*.12;s.forEach((i,d)=>{const r=t.createOscillator(),h=t.createGain();r.type="triangle",r.frequency.setValueAtTime(i*n,a+d*.045),h.gain.setValueAtTime(.11,a+d*.045),h.gain.exponentialRampToValueAtTime(.001,a+d*.045+.2),r.connect(h),h.connect(t.destination),r.start(a+d*.045),r.stop(a+d*.045+.2)})}playExplosion(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,a=e.sampleRate*.25,s=e.createBuffer(1,a,e.sampleRate),n=s.getChannelData(0);for(let h=0;h<a;h++)n[h]=Math.random()*2-1;const i=e.createBufferSource();i.buffer=s;const d=e.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(420,t),d.frequency.exponentialRampToValueAtTime(60,t+.25);const r=e.createGain();r.gain.setValueAtTime(.15,t),r.gain.exponentialRampToValueAtTime(.001,t+.25),i.connect(d),d.connect(r),r.connect(e.destination),i.start(t),i.stop(t+.25)}playWaveComplete(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,n)=>{const i=e.createOscillator(),d=e.createGain();i.type="sine",i.frequency.setValueAtTime(s,t+n*.08),d.gain.setValueAtTime(.1,t+n*.08),d.gain.exponentialRampToValueAtTime(.001,t+n*.08+.35),i.connect(d),d.connect(e.destination),i.start(t+n*.08),i.stop(t+n*.08+.35)})}playCashRegister(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[1046.5,1318.5,1567.98,2093].forEach((s,n)=>{const i=e.createOscillator(),d=e.createGain();i.type="sine",i.frequency.setValueAtTime(s,t+n*.055),d.gain.setValueAtTime(.14,t+n*.055),d.gain.exponentialRampToValueAtTime(.001,t+n*.055+.24),i.connect(d),d.connect(e.destination),i.start(t+n*.055),i.stop(t+n*.055+.24)})}playClick(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,a=e.createOscillator(),s=e.createGain();a.type="sine",a.frequency.setValueAtTime(680,t),a.frequency.exponentialRampToValueAtTime(340,t+.03),s.gain.setValueAtTime(.06,t),s.gain.exponentialRampToValueAtTime(.001,t+.03),a.connect(s),s.connect(e.destination),a.start(t),a.stop(t+.03)}}const L=["Common","Uncommon","Rare","Epic","Legendary"],R=["#94a3b8","#22c55e","#3b82f6","#a855f7","#f59e0b"],_={plasma:{id:"plasma",name:"Plasma Blaster",icon:"⚡",description:"Rapid-fire high-velocity energy bolts at the nearest target.",baseDamage:18,baseCooldown:.48,range:330,baseCost:25,color:"#38bdf8"},tesla:{id:"tesla",name:"Tesla Arc Coil",icon:"🌩️",description:"Chain lightning that arcs across multiple nearby enemies.",baseDamage:24,baseCooldown:.85,range:280,baseCost:35,color:"#c084fc"},frost:{id:"frost",name:"Cryo Nova Emitter",icon:"❄️",description:"Emits freezing shockwaves that damage and slow enemies by 50%.",baseDamage:20,baseCooldown:1.35,range:195,baseCost:35,color:"#67e8f9"},sawblade:{id:"sawblade",name:"Kinetic Ripper",icon:"⚙️",description:"Fires piercing cyber-sawblades that slice through lines of foes.",baseDamage:30,baseCooldown:.9,range:350,baseCost:40,color:"#f43f5e"},missile:{id:"missile",name:"Hellfire Launcher",icon:"🚀",description:"Launches explosive splash-damage rockets with heavy impact.",baseDamage:48,baseCooldown:1.4,range:400,baseCost:50,color:"#fb923c"}};class A{static MAX_EQUIPPED=6;static MAX_BENCH=6;equipped=[null,null,null,null,null,null];bench=[null,null,null,null,null,null];uidCounter=1;constructor(){this.resetForNewRun()}resetForNewRun(){this.equipped=[null,null,null,null,null,null],this.bench=[null,null,null,null,null,null],this.equipped[0]=this.createWeapon("plasma",1),this.equipped[1]=this.createWeapon("plasma",1)}createWeapon(e,t=1){return{uid:`wpn_${this.uidCounter++}_${Date.now()}`,archetype:e,tier:Math.max(1,Math.min(5,t)),cooldownTimer:0,orbitAngle:0}}static getDamage(e,t){const a=_[e.archetype],s=Math.pow(2.15,e.tier-1);return Math.round(a.baseDamage*s*t)}static getCooldown(e,t){const a=_[e.archetype],s=1+(e.tier-1)*.12;return a.baseCooldown/(s*t)}addWeaponToAvailableSlot(e){for(let t=0;t<A.MAX_EQUIPPED;t++)if(!this.equipped[t])return this.equipped[t]=e,!0;for(let t=0;t<A.MAX_BENCH;t++)if(!this.bench[t])return this.bench[t]=e,!0;return!1}hasFreeSlot(){return this.equipped.some(e=>e===null)||this.bench.some(e=>e===null)}interactSlots(e,t,a,s){if(e===a&&t===s)return{action:"none"};const n=e==="equipped"?this.equipped:this.bench,i=a==="equipped"?this.equipped:this.bench,d=n[t],r=i[s];if(!d)return{action:"none"};if(r&&d.archetype===r.archetype&&d.tier===r.tier&&d.tier<5){const h=this.createWeapon(d.archetype,d.tier+1);return i[s]=h,n[t]=null,u.getInstance().recordMerge(1),c.getInstance().playMerge(h.tier),{action:"merged",newTier:h.tier}}return i[s]=d,n[t]=r,c.getInstance().playClick(),{action:"swapped"}}autoMergeAll(){let e=0,t=!0;for(;t;){t=!1;const a=[];this.equipped.forEach((s,n)=>a.push({group:"equipped",index:n,item:s})),this.bench.forEach((s,n)=>a.push({group:"bench",index:n,item:s}));for(let s=0;s<a.length;s++){const n=a[s];if(!(!n.item||n.item.tier>=5)){for(let i=s+1;i<a.length;i++){const d=a[i];if(d.item&&n.item.archetype===d.item.archetype&&n.item.tier===d.item.tier){this.interactSlots(d.group,d.index,n.group,n.index),e++,t=!0;break}}if(t)break}}}for(let a=0;a<A.MAX_EQUIPPED;a++)if(!this.equipped[a]){const s=this.bench.findIndex(n=>n!==null);s!==-1&&(this.equipped[a]=this.bench[s],this.bench[s]=null)}return e}sellWeapon(e,t){const a=e==="equipped"?this.equipped:this.bench,s=a[t];if(!s)return 0;let n=0;for(let r=0;r<this.equipped.length;r++)this.equipped[r]!==null&&n++;for(let r=0;r<this.bench.length;r++)this.bench[r]!==null&&n++;if(n<=1)return 0;const i=_[s.archetype],d=Math.floor(i.baseCost*Math.pow(1.8,s.tier-1)*.65);return a[t]=null,c.getInstance().playCoin(),d}}const G=[{id:"overclock",icon:"⚡",titleEn:"Overclocked Barrels",titleTr:"Aşırtılmış Namlular",descEn:"+20% Attack Speed for all orbital weapons this run",descTr:"Bu tur tüm yörünge silahları için +%20 Saldırı Hızı",color:"#38bdf8"},{id:"crit_matrix",icon:"🎯",titleEn:"Critical Matrix",titleTr:"Kritik Matris",descEn:"+15% Critical Hit Chance (2x Damage) & +10% Base Damage",descTr:"+%15 Kritik Vuruş Şansı (2x Hasar) & +%10 Temel Hasar",color:"#f43f5e"},{id:"nanite_hull",icon:"🛡️",titleEn:"Nanite Hull Plating",titleTr:"Nanit Zırh Kaplaması",descEn:"+40 Max HP & Immediately Restore 50 HP",descTr:"+40 Maksimum Can & Anında 50 Can Yenileme",color:"#22c55e"},{id:"scrap_harvester",icon:"🪙",titleEn:"Scrap Harvester",titleTr:"Hurda Toplayıcı",descEn:"+30% Gold Dropped from Enemies + Instant +80 Gold",descTr:"Düşmanlardan +%30 Daha Fazla Altın + Anında +80 Altın",color:"#facc15"},{id:"grav_magnet",icon:"🧲",titleEn:"Graviton Magnet",titleTr:"Graviton Mıknatısı",descEn:"+50% Loot Pickup Radius & +12% Move Speed",descTr:"+%50 Ganimet Çekim Alanı & +%12 Hareket Hızı",color:"#a855f7"},{id:"plasma_core",icon:"🔥",titleEn:"Superheated Core",titleTr:"Aşırı Isınmış Çekirdek",descEn:"+25% All Weapon Damage this run",descTr:"Bu turda tüm silahlar için +%25 Hasar Bonusu",color:"#fb923c"}];class B{canvas;ctx;weapons;state="MENU";worldSize=2200;player={x:1100,y:1100,radius:20,hp:100,maxHp:100,speed:245,invulnTimer:0,angle:0,level:1,xp:0,xpToNext:50};runBuffs={damageMult:0,attackSpeedMult:0,critChance:0,goldMult:0,magnetMult:0,moveSpeedMult:0};currentWave=1;waveTimer=25;waveDuration=25;runGoldEarned=0;waveGoldEarned=0;runKills=0;runScore=0;revivedThisRun=!1;gameSpeedMultiplier=1;tempAdSpeedWave=!1;enemies=[];projectiles=[];lightningBolts=[];frostRings=[];lootDrops=[];particles=[];floatingTexts=[];spawnTimer=0;enemyIdCounter=1;screenShake=0;isPausedBySdk=!1;keys=new Set;joyActive=!1;joyOriginX=0;joyOriginY=0;joyCurrentX=0;joyCurrentY=0;JOY_DEADZONE=8;JOY_MAX_RADIUS=52;onHudUpdate;onLevelUp;onWaveComplete;onPlayerDeath;lastFrameTime=performance.now();constructor(e){this.canvas=e;const t=e.getContext("2d");if(!t)throw new Error("Canvas 2D context not supported");this.ctx=t,this.weapons=new A,this.handleResize(),window.addEventListener("resize",()=>this.handleResize()),this.bindInputs(),requestAnimationFrame(a=>this.loop(a))}handleResize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}bindInputs(){window.addEventListener("keydown",t=>{const a=t.target?.tagName;a==="INPUT"||a==="TEXTAREA"||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),this.keys.add(t.code))}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),this.canvas.addEventListener("pointerdown",t=>{this.joyActive=!0,this.joyOriginX=t.clientX,this.joyOriginY=t.clientY,this.joyCurrentX=t.clientX,this.joyCurrentY=t.clientY}),window.addEventListener("pointermove",t=>{if(this.joyActive){this.joyCurrentX=t.clientX,this.joyCurrentY=t.clientY;const a=this.joyCurrentX-this.joyOriginX,s=this.joyCurrentY-this.joyOriginY,n=Math.hypot(a,s),i=this.JOY_MAX_RADIUS*1.45;if(n>i){const d=n-i;this.joyOriginX+=a/n*d,this.joyOriginY+=s/n*d}}});const e=()=>{this.joyActive=!1};window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e)}setSdkPause(e){this.isPausedBySdk=e,this.lastFrameTime=performance.now()}startNewRun(){const e=u.getInstance(),t=e.data.selectedCommander;this.weapons.equipped=[null,null,null,null,null,null],this.weapons.bench=[null,null,null,null,null,null],this.runBuffs={damageMult:0,attackSpeedMult:0,critChance:t==="void_phantom"?.15:0,goldMult:0,magnetMult:0,moveSpeedMult:t==="void_phantom"?.25:0},t==="tesla_engineer"?(this.weapons.equipped[0]=this.weapons.createWeapon("tesla",1),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)):t==="void_phantom"?(this.weapons.equipped[0]=this.weapons.createWeapon("sawblade",2),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)):(this.weapons.equipped[0]=this.weapons.createWeapon("plasma",1),this.weapons.equipped[1]=this.weapons.createWeapon("plasma",1)),e.data.starterPackBought&&this.weapons.addWeaponToAvailableSlot(this.weapons.createWeapon("plasma",3)),this.player.level=1,this.player.xp=0,this.player.xpToNext=45,this.currentWave=1,this.runGoldEarned=0,this.runKills=0,this.runScore=0,this.revivedThisRun=!1,e.addGold(e.getStartingWaveGold()),this.startWave(1)}applyTacticalCard(e){const t=u.getInstance();switch(e){case"overclock":this.runBuffs.attackSpeedMult+=.2;break;case"crit_matrix":this.runBuffs.critChance=Math.min(.85,this.runBuffs.critChance+.15),this.runBuffs.damageMult+=.1;break;case"nanite_hull":this.player.maxHp+=40,this.player.hp=Math.min(this.player.maxHp,this.player.hp+50);break;case"scrap_harvester":this.runBuffs.goldMult+=.3,t.addGold(80),this.runGoldEarned+=80,this.waveGoldEarned+=80;break;case"grav_magnet":this.runBuffs.magnetMult+=.5,this.runBuffs.moveSpeedMult+=.12;break;case"plasma_core":this.runBuffs.damageMult+=.25;break}this.onHudUpdate?.()}startWave(e){const t=u.getInstance();this.currentWave=e,this.waveDuration=Math.min(45,22+e*2),this.waveTimer=this.waveDuration,this.waveGoldEarned=0,this.player.x=this.worldSize/2,this.player.y=this.worldSize/2;const a=100+t.getBonusMaxHp()+(e-1)*12;this.player.maxHp=Math.max(this.player.maxHp,a),this.player.hp=this.player.maxHp,this.player.invulnTimer=1,this.enemies=[],this.projectiles=[],this.lightningBolts=[],this.frostRings=[],this.lootDrops=[],!t.data.vipUnlocked&&!this.tempAdSpeedWave&&(this.gameSpeedMultiplier=1),e%5===0&&this.spawnEnemy("boss"),this.state="PLAYING",this.onHudUpdate?.()}revivePlayerWithNuke(){this.revivedThisRun=!0,this.player.hp=this.player.maxHp,this.player.invulnTimer=3,this.screenShake=18,c.getInstance().playExplosion();let e=0;for(let t=0;t<this.enemies.length;t++){const a=this.enemies[t];this.spawnParticles(a.x,a.y,a.color,14),a.type==="boss"&&(a.hp=Math.max(1,a.hp*.5),this.enemies[e++]=a)}this.enemies.length=e,this.state="PLAYING",this.onHudUpdate?.()}loop(e){const t=Math.min(.05,(e-this.lastFrameTime)/1e3);if(this.lastFrameTime=e,!this.isPausedBySdk&&this.state==="PLAYING"){const a=t*this.gameSpeedMultiplier;this.update(a)}this.render(),requestAnimationFrame(a=>this.loop(a))}update(e){const t=u.getInstance();if(this.waveTimer-=e,this.waveTimer<=0){this.waveTimer=0,this.completeWave();return}let a=0,s=0;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(s-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(s+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(a-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(a+=1),a===0&&s===0&&this.joyActive){const p=this.joyCurrentX-this.joyOriginX,o=this.joyCurrentY-this.joyOriginY,v=Math.hypot(p,o);v>this.JOY_DEADZONE&&(a=p/v,s=o/v)}else if(a!==0||s!==0){const p=Math.hypot(a,s);a/=p,s/=p}const n=this.player.speed*(1+this.runBuffs.moveSpeedMult);if(this.player.x=Math.max(40,Math.min(this.worldSize-40,this.player.x+a*n*e)),this.player.y=Math.max(40,Math.min(this.worldSize-40,this.player.y+s*n*e)),(a!==0||s!==0)&&(this.player.angle=Math.atan2(s,a)),this.player.invulnTimer>0&&(this.player.invulnTimer-=e),this.screenShake>0&&(this.screenShake=Math.max(0,this.screenShake-e*35)),this.spawnTimer-=e,this.spawnTimer<=0){const p=Math.max(.22,1.15-this.currentWave*.065);this.spawnTimer=p,this.spawnWaveEnemy()}const i=t.getDamageMultiplier()*(1+this.runBuffs.damageMult),d=t.getAttackSpeedMultiplier()*(1+this.runBuffs.attackSpeedMult),r=this.weapons.equipped;for(let p=0;p<r.length;p++){const o=r[p];if(!o)continue;const v=p/A.MAX_EQUIPPED*Math.PI*2;o.orbitAngle=v+performance.now()*.0018,o.cooldownTimer-=e;const b=this.player.x+Math.cos(o.orbitAngle)*48,y=this.player.y+Math.sin(o.orbitAngle)*48;o.cooldownTimer<=0&&(this.fireWeapon(o,b,y,i)?o.cooldownTimer=A.getCooldown(o,d):o.cooldownTimer=.1)}let h=0;for(let p=0;p<this.projectiles.length;p++){const o=this.projectiles[p];o.x+=o.vx*e,o.y+=o.vy*e,o.life-=e,o.rotation!==void 0&&(o.rotation+=e*16);let v=o.life>0;if(v)for(let b=this.enemies.length-1;b>=0;b--){const y=this.enemies[b];if(o.hitEnemyIds.has(y.id))continue;if(Math.hypot(o.x-y.x,o.y-y.y)<=o.radius+y.radius)if(o.hitEnemyIds.add(y.id),o.splashRadius>0?this.triggerExplosionSplash(o.x,o.y,o.splashRadius,o.damage,o.color):this.damageEnemy(y,o.damage,o.color),o.pierce>0)o.pierce-=1;else{v=!1;break}}v&&(this.projectiles[h++]=o)}this.projectiles.length=h;for(let p=0;p<this.enemies.length;p++){const o=this.enemies[p];o.hitFlash>0&&(o.hitFlash-=e),o.slowTimer>0&&(o.slowTimer-=e);const v=Math.atan2(this.player.y-o.y,this.player.x-o.x),b=o.slowTimer>0?.5:1;if(o.x+=Math.cos(v)*o.speed*b*e,o.y+=Math.sin(v)*o.speed*b*e,Math.hypot(this.player.x-o.x,this.player.y-o.y)<this.player.radius+o.radius&&this.player.invulnTimer<=0&&(this.player.hp-=o.damage,this.player.invulnTimer=.45,this.screenShake=10,c.getInstance().playHit(),this.spawnFloatingText(this.player.x,this.player.y-25,`-${o.damage} HP`,"#ef4444",1.25),this.player.hp<=0)){this.player.hp=0,this.handlePlayerDeath();return}}const m=t.getMagnetRadius()*(1+this.runBuffs.magnetMult);let M=!1,g=0;for(let p=0;p<this.lootDrops.length;p++){const o=this.lootDrops[p],v=Math.hypot(this.player.x-o.x,this.player.y-o.y);if(v<m){const x=Math.atan2(this.player.y-o.y,this.player.x-o.x);o.x+=Math.cos(x)*450*e,o.y+=Math.sin(x)*450*e}let b=!1;if(v<this.player.radius+o.radius+8){if(b=!0,o.type==="gold"){const y=Math.max(1,Math.round(o.value*(1+this.runBuffs.goldMult)));t.addGold(y),this.runGoldEarned+=y,this.waveGoldEarned+=y,this.spawnFloatingText(o.x,o.y,`+${y}g`,"#facc15",.95)}else o.type==="gem"?(t.addGems(o.value),this.spawnFloatingText(o.x,o.y,`+${o.value} 💎`,"#38bdf8",1.15)):o.type==="heal"&&(this.player.hp=Math.min(this.player.maxHp,this.player.hp+o.value),this.spawnFloatingText(o.x,o.y,`+${o.value} HP`,"#4ade80",1.1));o.xpValue>0&&(this.player.xp+=o.xpValue,this.player.xp>=this.player.xpToNext&&(this.player.xp-=this.player.xpToNext,this.player.level+=1,this.player.xpToNext=Math.round(this.player.xpToNext*1.38+20),t.recordLevelUp(1),M=!0)),c.getInstance().playCoin()}b||(this.lootDrops[g++]=o)}this.lootDrops.length=g;let E=0;for(let p=0;p<this.lightningBolts.length;p++){const o=this.lightningBolts[p];o.alpha-=e*4.5,o.alpha>0&&(this.lightningBolts[E++]=o)}this.lightningBolts.length=E;let w=0;for(let p=0;p<this.frostRings.length;p++){const o=this.frostRings[p];o.currentRadius+=(o.maxRadius-o.currentRadius)*e*10,o.alpha-=e*2.5,o.alpha>0&&(this.frostRings[w++]=o)}this.frostRings.length=w;let T=0;for(let p=0;p<this.particles.length;p++){const o=this.particles[p];o.x+=o.vx*e,o.y+=o.vy*e,o.alpha-=o.decay*e,o.alpha>0&&(this.particles[T++]=o)}this.particles.length=T;let C=0;for(let p=0;p<this.floatingTexts.length;p++){const o=this.floatingTexts[p];o.y+=o.vy*e,o.alpha-=e*1.4,o.alpha>0&&(this.floatingTexts[C++]=o)}this.floatingTexts.length=C,this.onHudUpdate?.(),M&&(this.state="LEVEL_UP",c.getInstance().playMerge(4),this.onLevelUp?.())}fireWeapon(e,t,a,s){const n=_[e.archetype];let i=A.getDamage(e,s);const d=Math.random()<this.runBuffs.critChance;d&&(i=Math.round(i*2));let r=null,h=n.range;for(const g of this.enemies){const E=Math.hypot(g.x-t,g.y-a);E<=h&&(h=E,r=g)}if(!r)return!1;const m=Math.atan2(r.y-a,r.x-t),M=R[e.tier-1]||n.color;if(e.archetype==="plasma")return this.projectiles.push({x:t,y:a,vx:Math.cos(m)*640,vy:Math.sin(m)*640,radius:5+e.tier,damage:i,color:d?"#facc15":n.color,pierce:e.tier>=4?1:0,splashRadius:0,life:1.2,hitEnemyIds:new Set}),c.getInstance().playShoot(e.tier),!0;if(e.archetype==="sawblade")return this.projectiles.push({x:t,y:a,vx:Math.cos(m)*460,vy:Math.sin(m)*460,radius:12+e.tier*2,damage:i,color:d?"#facc15":M,pierce:2+e.tier*2,splashRadius:0,life:1.6,isSawblade:!0,rotation:0,hitEnemyIds:new Set}),c.getInstance().playShoot(e.tier-2),!0;if(e.archetype==="missile")return this.projectiles.push({x:t,y:a,vx:Math.cos(m)*420,vy:Math.sin(m)*420,radius:8+e.tier,damage:i,color:n.color,pierce:0,splashRadius:65+e.tier*14,life:1.5,hitEnemyIds:new Set}),c.getInstance().playShoot(-2),!0;if(e.archetype==="tesla"){const g=2+e.tier,E=new Set,w=[{x:t,y:a}];let T=t,C=a;for(let p=0;p<g;p++){let o=null,v=220;for(const b of this.enemies){if(E.has(b.id))continue;const y=Math.hypot(b.x-T,b.y-C);y<=v&&(v=y,o=b)}if(!o)break;E.add(o.id),w.push({x:o.x,y:o.y}),T=o.x,C=o.y,this.damageEnemy(o,i,n.color)}return this.lightningBolts.push({points:w,color:n.color,alpha:1}),c.getInstance().playLightning(),!0}if(e.archetype==="frost"){const g=n.range+e.tier*18;for(let E=this.enemies.length-1;E>=0;E--){const w=this.enemies[E];Math.hypot(w.x-this.player.x,w.y-this.player.y)<=g&&(w.slowTimer=2.5+e.tier*.4,this.damageEnemy(w,i,n.color))}return this.frostRings.push({x:this.player.x,y:this.player.y,currentRadius:20,maxRadius:g,color:n.color,alpha:.9}),c.getInstance().playShoot(3),!0}return!1}triggerExplosionSplash(e,t,a,s,n){this.screenShake=Math.max(this.screenShake,5),this.spawnParticles(e,t,n,16),c.getInstance().playExplosion();for(let i=this.enemies.length-1;i>=0;i--){const d=this.enemies[i];Math.hypot(d.x-e,d.y-t)<=a+d.radius&&this.damageEnemy(d,s,n)}}damageEnemy(e,t,a){if(e.hp-=t,e.hitFlash=.1,this.spawnFloatingText(e.x+(Math.random()-.5)*16,e.y-e.radius,`${t}`,a,e.type==="boss"?1.2:.95),e.hp<=0){const s=this.enemies.indexOf(e);if(s!==-1){const n=this.enemies.pop();s<this.enemies.length&&n&&(this.enemies[s]=n)}this.runKills+=1,u.getInstance().recordKill(1),this.runScore+=e.goldValue*10,this.spawnParticles(e.x,e.y,e.color,e.type==="boss"?30:8),this.lootDrops.push({x:e.x,y:e.y,vx:0,vy:0,value:e.goldValue,xpValue:e.type==="boss"?80:12,type:"gold",radius:7}),e.type==="boss"||Math.random()<.04?this.lootDrops.push({x:e.x+12,y:e.y+8,vx:0,vy:0,value:e.type==="boss"?10:1,xpValue:15,type:"gem",radius:9}):Math.random()<.035&&this.lootDrops.push({x:e.x-10,y:e.y,vx:0,vy:0,value:20,xpValue:5,type:"heal",radius:8})}}spawnWaveEnemy(){const e=Math.random();this.currentWave>=4&&e<.14?this.spawnEnemy("tank"):this.currentWave>=3&&e<.32?this.spawnEnemy("charger"):this.currentWave>=2&&e<.55?this.spawnEnemy("speedster"):this.spawnEnemy("swarmer")}spawnEnemy(e){const t=Math.random()*Math.PI*2,a=560+Math.random()*160,s=Math.max(50,Math.min(this.worldSize-50,this.player.x+Math.cos(t)*a)),n=Math.max(50,Math.min(this.worldSize-50,this.player.y+Math.sin(t)*a)),i=Math.pow(1.24,this.currentWave-1),r={swarmer:{type:"swarmer",radius:14,hp:Math.round(28*i),maxHp:Math.round(28*i),speed:115,damage:Math.round(9*i),color:"#f43f5e",goldValue:Math.round(4+this.currentWave*1.5)},speedster:{type:"speedster",radius:11,hp:Math.round(19*i),maxHp:Math.round(19*i),speed:185,damage:Math.round(8*i),color:"#fbbf24",goldValue:Math.round(5+this.currentWave*1.8)},charger:{type:"charger",radius:17,hp:Math.round(52*i),maxHp:Math.round(52*i),speed:145,damage:Math.round(14*i),color:"#ec4899",goldValue:Math.round(8+this.currentWave*2.2)},tank:{type:"tank",radius:24,hp:Math.round(135*i),maxHp:Math.round(135*i),speed:78,damage:Math.round(20*i),color:"#a855f7",goldValue:Math.round(15+this.currentWave*3)},boss:{type:"boss",radius:42,hp:Math.round(950*i),maxHp:Math.round(950*i),speed:92,damage:Math.round(32*i),color:"#ef4444",goldValue:Math.round(120+this.currentWave*25)}}[e];this.enemies.push({id:this.enemyIdCounter++,x:s,y:n,slowTimer:0,hitFlash:0,...r})}completeWave(){const e=u.getInstance();for(const a of this.lootDrops)a.type==="gold"?(e.addGold(a.value),this.runGoldEarned+=a.value,this.waveGoldEarned+=a.value):a.type==="gem"&&e.addGems(a.value);this.lootDrops=[];const t=25+this.currentWave*15;e.addGold(t),this.waveGoldEarned+=t,this.runGoldEarned+=t,this.currentWave>e.data.highestWave&&(e.data.highestWave=this.currentWave),this.runScore>e.data.highScore&&(e.data.highScore=this.runScore),e.save(),this.tempAdSpeedWave=!1,this.state="SHOP",c.getInstance().playWaveComplete(),this.onWaveComplete?.()}handlePlayerDeath(){const e=u.getInstance();this.runScore>e.data.highScore&&(e.data.highScore=this.runScore,e.save()),this.state=this.revivedThisRun?"GAMEOVER":"REVIVE_PROMPT",c.getInstance().playExplosion(),this.onPlayerDeath?.()}spawnParticles(e,t,a,s){for(let n=0;n<s;n++){const i=Math.random()*Math.PI*2,d=40+Math.random()*190;this.particles.push({x:e,y:t,vx:Math.cos(i)*d,vy:Math.sin(i)*d,radius:2+Math.random()*3.5,color:a,alpha:1,decay:1.5+Math.random()*1.5})}}spawnFloatingText(e,t,a,s,n=1){this.floatingTexts.push({x:e,y:t,text:a,color:s,alpha:1,vy:-48,scale:n})}render(){const e=this.ctx,t=this.canvas.width,a=this.canvas.height;e.fillStyle="#070a14",e.fillRect(0,0,t,a),e.save();const s=(Math.random()-.5)*this.screenShake,n=(Math.random()-.5)*this.screenShake,i=t/2-this.player.x+s,d=a/2-this.player.y+n;e.translate(i,d),this.drawArenaGrid(e);for(const r of this.frostRings)e.save(),e.globalAlpha=Math.max(0,r.alpha),e.strokeStyle=r.color,e.lineWidth=4,e.beginPath(),e.arc(r.x,r.y,r.currentRadius,0,Math.PI*2),e.stroke(),e.restore();for(const r of this.lootDrops)e.save(),e.beginPath(),r.type==="gold"?(e.fillStyle="#facc15",e.shadowColor="#facc15"):r.type==="gem"?(e.fillStyle="#38bdf8",e.shadowColor="#38bdf8"):(e.fillStyle="#4ade80",e.shadowColor="#4ade80"),e.shadowBlur=10,e.arc(r.x,r.y,r.radius,0,Math.PI*2),e.fill(),e.restore();for(const r of this.enemies){if(e.save(),e.beginPath(),e.fillStyle=r.hitFlash>0?"#ffffff":r.slowTimer>0?"#67e8f9":r.color,e.shadowColor=r.color,e.shadowBlur=r.type==="boss"?20:8,e.arc(r.x,r.y,r.radius,0,Math.PI*2),e.fill(),e.strokeStyle="#0f172a",e.lineWidth=2.5,e.stroke(),r.hp<r.maxHp||r.type==="boss"){const h=r.radius*2.2,m=r.type==="boss"?7:4,M=r.x-h/2,g=r.y-r.radius-12;e.fillStyle="rgba(0,0,0,0.65)",e.fillRect(M,g,h,m),e.fillStyle=r.type==="boss"?"#f43f5e":"#22c55e",e.fillRect(M,g,h*Math.max(0,r.hp/r.maxHp),m)}e.restore()}this.drawPlayerAndWeapons(e);for(const r of this.projectiles)e.save(),e.translate(r.x,r.y),r.isSawblade&&r.rotation!==void 0?(e.rotate(r.rotation),e.strokeStyle=r.color,e.lineWidth=3,e.beginPath(),e.arc(0,0,r.radius,0,Math.PI*2),e.stroke()):(e.fillStyle=r.color,e.shadowColor=r.color,e.shadowBlur=12,e.beginPath(),e.arc(0,0,r.radius,0,Math.PI*2),e.fill()),e.restore();for(const r of this.lightningBolts)if(!(r.points.length<2)){e.save(),e.globalAlpha=Math.max(0,r.alpha),e.strokeStyle=r.color,e.shadowColor=r.color,e.shadowBlur=14,e.lineWidth=3,e.beginPath(),e.moveTo(r.points[0].x,r.points[0].y);for(let h=1;h<r.points.length;h++)e.lineTo(r.points[h].x,r.points[h].y);e.stroke(),e.restore()}for(const r of this.particles)e.save(),e.globalAlpha=Math.max(0,r.alpha),e.fillStyle=r.color,e.beginPath(),e.arc(r.x,r.y,r.radius,0,Math.PI*2),e.fill(),e.restore();for(const r of this.floatingTexts)e.save(),e.globalAlpha=Math.max(0,r.alpha),e.font=`700 ${Math.round(15*r.scale)}px Orbitron, sans-serif`,e.fillStyle=r.color,e.textAlign="center",e.fillText(r.text,r.x,r.y),e.restore();e.restore(),this.joyActive&&this.state==="PLAYING"&&this.drawVirtualJoystick(e)}drawVirtualJoystick(e){const t=this.joyCurrentX-this.joyOriginX,a=this.joyCurrentY-this.joyOriginY,s=Math.hypot(t,a),n=Math.min(s,this.JOY_MAX_RADIUS),i=Math.atan2(a,t),d=this.joyOriginX+(s>0?Math.cos(i)*n:0),r=this.joyOriginY+(s>0?Math.sin(i)*n:0);e.save(),e.beginPath(),e.arc(this.joyOriginX,this.joyOriginY,this.JOY_MAX_RADIUS,0,Math.PI*2),e.fillStyle="rgba(56, 189, 248, 0.12)",e.fill(),e.lineWidth=2.5,e.strokeStyle="rgba(56, 189, 248, 0.55)",e.stroke(),s>this.JOY_DEADZONE&&(e.beginPath(),e.moveTo(this.joyOriginX,this.joyOriginY),e.lineTo(d,r),e.strokeStyle="rgba(56, 189, 248, 0.35)",e.lineWidth=2,e.stroke()),e.beginPath(),e.arc(d,r,20,0,Math.PI*2),e.fillStyle="#38bdf8",e.shadowColor="#38bdf8",e.shadowBlur=12,e.fill(),e.lineWidth=2.5,e.strokeStyle="#ffffff",e.stroke(),e.restore()}drawArenaGrid(e){e.strokeStyle="rgba(56, 189, 248, 0.08)",e.lineWidth=1,e.beginPath();for(let a=0;a<=this.worldSize;a+=80)e.moveTo(a,0),e.lineTo(a,this.worldSize);for(let a=0;a<=this.worldSize;a+=80)e.moveTo(0,a),e.lineTo(this.worldSize,a);e.stroke(),e.strokeStyle="#38bdf8",e.lineWidth=4,e.strokeRect(0,0,this.worldSize,this.worldSize)}drawPlayerAndWeapons(e){e.save();const t=u.getInstance().data.selectedCommander,a=t==="tesla_engineer"?"#a855f7":t==="void_phantom"?"#f43f5e":"#0ea5e9";e.beginPath(),e.fillStyle=this.player.invulnTimer>0&&Math.floor(performance.now()/60)%2===0?"#ffffff":a,e.shadowColor=a,e.shadowBlur=18,e.arc(this.player.x,this.player.y,this.player.radius,0,Math.PI*2),e.fill(),e.lineWidth=3,e.strokeStyle="#e0f2fe",e.stroke();for(const s of this.weapons.equipped){if(!s)continue;const n=this.player.x+Math.cos(s.orbitAngle)*48,i=this.player.y+Math.sin(s.orbitAngle)*48,d=R[s.tier-1];e.beginPath(),e.fillStyle=d,e.shadowColor=d,e.shadowBlur=12,e.arc(n,i,8+s.tier*1.4,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke()}e.restore()}}const $=[{id:"starter_pack",title:"Cyber Starter Bundle",description:"+1,500 Gold, +100 Gems & Instant Tier-3 Epic Plasma Blaster",priceUsd:1.99,badge:"BEST VALUE"},{id:"vip_speed",title:"VIP Overclock Pass",description:"Permanently Unlock 2x Turbo Game Speed + +500 Gems + No Forced Interstitials",priceUsd:4.99,badge:"MOST POPULAR"},{id:"gem_vault_small",title:"Neon Gem Pouch",description:"+150 Cyber Gems for Legendary Crates & Instant Merges",priceUsd:.99},{id:"gem_vault_mega",title:"Quantum Gem Vault",description:"+1,000 Cyber Gems + 5,000 Bonus Gold",priceUsd:7.99,badge:"WHALE PACK"}];class f{static instance;activePlatform="Simulator";overlayContainer=null;onPauseGame;onResumeGame;constructor(){this.detectPlatform()}static getInstance(){return f.instance||(f.instance=new f),f.instance}bindEngineCallbacks(e,t){this.onPauseGame=e,this.onResumeGame=t,this.overlayContainer=document.getElementById("sdk-overlay")}detectPlatform(){typeof window<"u"&&(window.PokiSDK?(this.activePlatform="Poki",window.PokiSDK.init().catch(()=>{})):window.CrazyGames?.SDK?this.activePlatform="CrazyGames":this.activePlatform="Simulator")}async showRewardedAd(e){if(this.onPauseGame?.(),c.getInstance().setAdMuted(!0),window.PokiSDK?.gameplayStop?.(),this.activePlatform==="Poki"&&window.PokiSDK)try{const t=await window.PokiSDK.rewardedBreak();return c.getInstance().setAdMuted(!1),window.PokiSDK.gameplayStart?.(),t&&(u.getInstance().recordAdRevenue("rewarded",25),c.getInstance().playCashRegister()),this.onResumeGame?.(),t}catch{return c.getInstance().setAdMuted(!1),this.onResumeGame?.(),!1}return this.activePlatform==="CrazyGames"&&window.CrazyGames?.SDK?.ad?new Promise(t=>{window.CrazyGames.SDK.ad.requestAd("rewarded",{adFinished:()=>{c.getInstance().setAdMuted(!1),u.getInstance().recordAdRevenue("rewarded",25),c.getInstance().playCashRegister(),this.onResumeGame?.(),t(!0)},adError:()=>{c.getInstance().setAdMuted(!1),this.onResumeGame?.(),t(!1)}})}):this.runSimulatedRewardedAd(e)}async showInterstitialAd(e){if(!u.getInstance().data.vipUnlocked){if(this.onPauseGame?.(),this.activePlatform==="Poki"&&window.PokiSDK){await window.PokiSDK.commercialBreak(),u.getInstance().recordAdRevenue("interstitial",12),this.onResumeGame?.();return}await this.runSimulatedInterstitialAd(e)}}async purchaseProduct(e){const t=$.find(s=>s.id===e);if(!t)return!1;this.onPauseGame?.();const a=await this.runSimulatedStripeCheckout(t);return this.onResumeGame?.(),a&&(u.getInstance().recordIapRevenue(t.priceUsd),c.getInstance().playCashRegister()),a}runSimulatedRewardedAd(e){return new Promise(t=>{if(!this.overlayContainer){this.onResumeGame?.(),t(!0);return}let a=3;this.overlayContainer.innerHTML=`
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
      `;const s=document.getElementById("sdk-ad-timer"),n=document.getElementById("sdk-claim-ad"),i=document.getElementById("sdk-cancel-ad"),d=window.setInterval(()=>{a-=1,a>0?(s&&(s.textContent=`Reward in ${a}s...`),n&&(n.textContent=`Wait ${a}s...`)):(window.clearInterval(d),s&&(s.textContent="REWARD GRANTED ✓"),n&&(n.disabled=!1,n.textContent="CLAIM REWARD (+Revenue)",n.classList.add("pulse-glow")))},850),r=h=>{window.clearInterval(d),this.overlayContainer&&(this.overlayContainer.innerHTML=""),c.getInstance().setAdMuted(!1),h&&(u.getInstance().recordAdRevenue("rewarded",25),c.getInstance().playCashRegister()),this.onResumeGame?.(),t(h)};n?.addEventListener("click",()=>r(!0)),i?.addEventListener("click",()=>r(!1))})}runSimulatedInterstitialAd(e){return new Promise(t=>{if(!this.overlayContainer){this.onResumeGame?.(),t();return}this.overlayContainer.innerHTML=`
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
      `,document.getElementById("sdk-close-interstitial")?.addEventListener("click",()=>{this.overlayContainer&&(this.overlayContainer.innerHTML=""),c.getInstance().setAdMuted(!1),u.getInstance().recordAdRevenue("interstitial",12),c.getInstance().playCashRegister(),this.onResumeGame?.(),t()})})}runSimulatedStripeCheckout(e){return new Promise(t=>{if(!this.overlayContainer){t(!0);return}this.overlayContainer.innerHTML=`
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
      `;const a=s=>{this.overlayContainer&&(this.overlayContainer.innerHTML=""),t(s)};document.getElementById("sdk-confirm-iap")?.addEventListener("click",()=>a(!0)),document.getElementById("sdk-cancel-iap")?.addEventListener("click",()=>a(!1))})}}const O=[{name:"NEXUS_OVERLORD",wave:38,score:194500,vip:!0},{name:"VALKYRIE_X9",wave:34,score:162800,vip:!0},{name:"KRONOS_PRIME",wave:30,score:138400,vip:!0},{name:"CYBER_SHOGUN",wave:27,score:112900,vip:!1},{name:"ZERO_COOL_US",wave:24,score:94200,vip:!0},{name:"NOVA_STRIKER",wave:21,score:78500,vip:!1},{name:"AETHER_WOLF",wave:18,score:61400,vip:!0},{name:"VOLT_HUNTER",wave:15,score:45200,vip:!1},{name:"PHANTOM_BLADE",wave:12,score:31800,vip:!1},{name:"OMEGA_DRIFTER",wave:10,score:22400,vip:!1},{name:"BYTE_RANGER",wave:8,score:14900,vip:!1},{name:"NEON_ROOKIE",wave:5,score:7600,vip:!1},{name:"SCRAP_PILOT",wave:3,score:3200,vip:!1}];class D{engine;uiLayer;selectedSlot=null;shopOffers=[];draftedLevelCards=[];waveBonusDoubled=!1;hudEls=null;constructor(e){this.engine=e;const t=document.getElementById("ui-layer");if(!t)throw new Error("#ui-layer not found");this.uiLayer=t,this.engine.onHudUpdate=()=>this.updateTopHudValues(),this.engine.onLevelUp=()=>this.openLevelUpModal(),this.engine.onWaveComplete=()=>this.openBetweenWaveWorkshop(),this.engine.onPlayerDeath=()=>this.openDeathModal(),u.getInstance().onChange(()=>this.updateTopHudValues()),this.renderMainMenu()}resetToInGameHud(){this.uiLayer.innerHTML=this.renderTopHud(),this.bindTopHudEvents()}cacheHudElements(){this.hudEls={hpFill:document.getElementById("hud-hp-fill"),hpText:document.getElementById("hud-hp-text"),xpFill:document.getElementById("hud-xp-fill"),lvlText:document.getElementById("hud-lvl-text"),waveNum:document.getElementById("hud-wave-num"),waveTimer:document.getElementById("hud-wave-timer"),gold:document.getElementById("hud-gold"),gems:document.getElementById("hud-gems"),rev:document.getElementById("hud-revenue"),speedBtn:document.getElementById("btn-speed-toggle")}}renderTopHud(){const e=u.getInstance().data,t=this.engine.player,a=Math.max(0,Math.min(100,t.hp/t.maxHp*100)),s=Math.max(0,Math.min(100,t.xp/t.xpToNext*100)),n=this.engine.gameSpeedMultiplier===2,i=e.language==="tr"?"🌐 TR | EN":"🌐 EN | TR";return`
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
            ${i}
          </button>
          <button id="btn-sound-toggle" class="btn-hud">
            ${e.soundEnabled?"🔊":"🔇"}
          </button>
        </div>
      </header>
    `}bindTopHudEvents(){this.cacheHudElements(),document.getElementById("btn-speed-toggle")?.addEventListener("click",async()=>{c.getInstance().playClick();const e=u.getInstance();if(this.engine.gameSpeedMultiplier===2){this.engine.gameSpeedMultiplier=1,this.updateTopHudValues();return}e.data.vipUnlocked||this.engine.tempAdSpeedWave?(this.engine.gameSpeedMultiplier=2,this.updateTopHudValues()):await f.getInstance().showRewardedAd("Unlock 2x Turbo Speed (Current Wave)")&&(this.engine.tempAdSpeedWave=!0,this.engine.gameSpeedMultiplier=2,this.updateTopHudValues())}),document.getElementById("btn-open-crates")?.addEventListener("click",()=>{c.getInstance().playClick(),this.openCratesModal()}),document.getElementById("btn-open-missions")?.addEventListener("click",()=>{c.getInstance().playClick(),this.openMissionsModal()}),document.getElementById("btn-open-ranks")?.addEventListener("click",()=>{c.getInstance().playClick(),this.openLeaderboardModal()}),document.getElementById("btn-open-store")?.addEventListener("click",()=>{c.getInstance().playClick(),this.openStoreModal()}),document.getElementById("btn-lang-toggle")?.addEventListener("click",()=>{c.getInstance().playClick(),u.getInstance().toggleLanguage(),this.engine.state==="MENU"?this.renderMainMenu():this.engine.state==="SHOP"?this.renderWorkshopModal():this.engine.state==="LEVEL_UP"?this.renderLevelUpModal():this.engine.state==="REVIVE_PROMPT"||this.engine.state==="GAMEOVER"?this.openDeathModal():this.resetToInGameHud()}),document.getElementById("btn-sound-toggle")?.addEventListener("click",e=>{const t=u.getInstance();t.data.soundEnabled=!t.data.soundEnabled,t.save(),e.currentTarget.textContent=t.data.soundEnabled?"🔊":"🔇"})}updateHUD(){this.updateTopHudValues()}updateTopHudValues(){(!this.hudEls||!this.hudEls.hpFill)&&this.cacheHudElements();const e=this.hudEls;if(!e||!e.hpFill)return;const t=u.getInstance().data,a=this.engine.player,s=`${Math.max(0,Math.min(100,a.hp/a.maxHp*100))}%`;e.hpFill.style.width!==s&&(e.hpFill.style.width=s);const n=`HP ${Math.ceil(a.hp)} / ${a.maxHp}`;e.hpText&&e.hpText.textContent!==n&&(e.hpText.textContent=n);const i=`${Math.max(0,Math.min(100,a.xp/a.xpToNext*100))}%`;e.xpFill&&e.xpFill.style.width!==i&&(e.xpFill.style.width=i);const d=`${l.t("lvl_label")} ${a.level}`;e.lvlText&&e.lvlText.textContent!==d&&(e.lvlText.textContent=d);const r=`${l.t("wave_label")} ${this.engine.currentWave}`;e.waveNum&&e.waveNum.textContent!==r&&(e.waveNum.textContent=r);const h=`${Math.ceil(this.engine.waveTimer)}s`;e.waveTimer&&e.waveTimer.textContent!==h&&(e.waveTimer.textContent=h);const m=t.gold.toLocaleString();e.gold&&e.gold.textContent!==m&&(e.gold.textContent=m);const M=t.gems.toLocaleString();e.gems&&e.gems.textContent!==M&&(e.gems.textContent=M);const g=`$${t.totalRevenueSimulated.toFixed(2)}`;if(e.rev&&e.rev.textContent!==g&&(e.rev.textContent=g),e.speedBtn){const E=this.engine.gameSpeedMultiplier===2,w=`⚡ ${E?l.t("speed_2x_on"):l.t("speed_1x_btn")}`;e.speedBtn.textContent!==w&&(e.speedBtn.textContent=w,e.speedBtn.classList.toggle("active-speed",E))}}renderMainMenu(){const e=u.getInstance(),t=e.data;this.uiLayer.innerHTML=`
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
    `,this.bindTopHudEvents(),document.getElementById("btn-start-run")?.addEventListener("click",()=>{c.getInstance().playClick(),this.resetToInGameHud(),this.engine.startNewRun()}),document.getElementById("btn-free-gold-ad")?.addEventListener("click",async()=>{c.getInstance().playClick(),await f.getInstance().showRewardedAd("Menu Free Gold & Gem Drop")&&(e.addGold(250),e.addGems(10),this.renderMainMenu())}),document.getElementById("btn-menu-crates")?.addEventListener("click",()=>{c.getInstance().playClick(),this.openCratesModal()}),document.getElementById("btn-menu-missions")?.addEventListener("click",()=>{c.getInstance().playClick(),this.openMissionsModal()}),document.getElementById("btn-menu-ranks")?.addEventListener("click",()=>{c.getInstance().playClick(),this.openLeaderboardModal()}),this.uiLayer.querySelectorAll("[data-cmd-select]").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.cmdSelect,n=a.dataset.cmdMode;if(n==="select")e.data.selectedCommander=s,e.save(),c.getInstance().playClick(),this.renderMainMenu();else if(n==="gold"&&s==="tesla_engineer")e.spendGold(1500)&&(e.unlockCommander(s),c.getInstance().playMerge(3),this.renderMainMenu());else if(n==="gems"){const i=s==="tesla_engineer"?100:250;e.spendGems(i)?(e.unlockCommander(s),c.getInstance().playMerge(4),this.renderMainMenu()):this.openStoreModal()}})}),this.uiLayer.querySelectorAll("[data-meta-buy]").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.metaBuy;e.buyMetaUpgrade(s)?(c.getInstance().playMerge(2),this.renderMainMenu()):c.getInstance().playHit()})})}renderCommanderCard(e,t,a,s,n,i,d){const r=u.getInstance(),h=r.isCommanderUnlocked(e),m=r.data.selectedCommander===e;let M="";return h?M=`
        <button data-cmd-select="${e}" data-cmd-mode="select" class="${m?"btn-gold":"btn-primary"}">
          ${m?l.t("cmd_selected"):l.t("cmd_select")}
        </button>
      `:M=`
        <div class="cmd-unlock-btns">
          ${i>0?`<button data-cmd-select="${e}" data-cmd-mode="gold" class="btn-buy">${l.t("cmd_unlock_gold")}</button>`:""}
          <button data-cmd-select="${e}" data-cmd-mode="gems" class="btn-ad">${l.t("cmd_unlock_gems",{gems:d})}</button>
        </div>
      `,`
      <div class="commander-card ${m?"cmd-active":""}" style="border-color: ${m?n:"rgba(148,163,184,0.25)"}">
        <div class="cmd-top">
          <span class="cmd-icon" style="background: ${n}22; border-color: ${n}">${t}</span>
          <div>
            <h4>${a}</h4>
            <p>${s}</p>
          </div>
        </div>
        ${M}
      </div>
    `}renderMetaUpgradeCard(e,t,a){const s=u.getInstance(),n=s.data.meta[e],i=s.getMetaUpgradeCost(e),d=s.data.gold>=i;return`
      <div class="meta-card">
        <div class="meta-info">
          <h4>${t} <span class="lvl-tag">Lv.${n}</span></h4>
          <p>${a}</p>
        </div>
        <button data-meta-buy="${e}" class="btn-buy ${d?"":"disabled"}" ${d?"":"disabled"}>
          🪙 ${i}
        </button>
      </div>
    `}openLevelUpModal(){const e=[...G].sort(()=>Math.random()-.5);this.draftedLevelCards=e.slice(0,3),this.renderLevelUpModal()}renderLevelUpModal(){const e=l.getLang()==="tr";this.uiLayer.innerHTML=`
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
            ${this.draftedLevelCards.map((t,a)=>`
              <div class="tactical-card" style="border-color: ${t.color}" data-pick-card="${a}">
                <div class="tactical-icon">${t.icon}</div>
                <h3>${e?t.titleTr:t.titleEn}</h3>
                <p>${e?t.descTr:t.descEn}</p>
                <button class="btn-primary">${l.t("btn_select_card")}</button>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,this.bindTopHudEvents(),this.uiLayer.querySelectorAll("[data-pick-card]").forEach(t=>{t.addEventListener("click",()=>{const a=Number(t.dataset.pickCard),s=this.draftedLevelCards[a];s&&(c.getInstance().playClick(),this.engine.applyTacticalCard(s.id),this.resetToInGameHud(),this.engine.state="PLAYING")})}),document.getElementById("btn-take-all-cards-ad")?.addEventListener("click",async()=>{if(c.getInstance().playClick(),await f.getInstance().showRewardedAd("Take All 3 Level-Up Tactical Cards")){for(const a of this.draftedLevelCards)this.engine.applyTacticalCard(a.id);this.resetToInGameHud(),this.engine.state="PLAYING"}})}openBetweenWaveWorkshop(){this.selectedSlot=null,this.waveBonusDoubled=!1,this.rollShopOffers(),this.renderWorkshopModal()}rollShopOffers(){const e=Object.keys(_);this.shopOffers=[];for(let t=0;t<3;t++){const a=e[Math.floor(Math.random()*e.length)],s=_[a],n=this.engine.currentWave>=4&&Math.random()<.3?2:1,i=Math.round((s.baseCost+this.engine.currentWave*6)*Math.pow(2,n-1));this.shopOffers.push({archetype:a,tier:n,cost:i,purchased:!1})}}renderWorkshopModal(){const e=u.getInstance(),t=e.getDamageMultiplier()*(1+this.engine.runBuffs.damageMult),a=(s,n,i)=>{const d=this.selectedSlot?.group===n&&this.selectedSlot?.index===i;if(!s)return`
          <div class="weapon-slot empty-slot ${d?"selected-slot":""}" data-slot-group="${n}" data-slot-idx="${i}">
            <span class="slot-placeholder">${n==="equipped"?"EQUIP SLOT":"BENCH"}</span>
          </div>
        `;const r=_[s.archetype],h=R[s.tier-1],m=Math.round(r.baseDamage*Math.pow(2.15,s.tier-1)*t);return`
        <div class="weapon-slot filled-slot ${d?"selected-slot":""}"
             style="border-color: ${h}; box-shadow: 0 0 12px ${h}33"
             data-slot-group="${n}" data-slot-idx="${i}">
          <div class="slot-tier-badge" style="background: ${h}">T${s.tier} ${L[s.tier-1]}</div>
          <div class="slot-icon">${r.icon}</div>
          <div class="slot-name">${r.name}</div>
          <div class="slot-dmg">⚔️ ${m} DMG</div>
          <button class="btn-sell-slot" data-sell-group="${n}" data-sell-idx="${i}" title="Sell Weapon">🪙 Sell</button>
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
              ${this.shopOffers.map((s,n)=>{const i=_[s.archetype],d=R[s.tier-1],r=!s.purchased&&e.data.gold>=s.cost&&this.engine.weapons.hasFreeSlot();return`
                    <div class="shop-offer-card ${s.purchased?"sold-out":""}" style="border-color: ${d}">
                      <div class="slot-tier-badge" style="background: ${d}">T${s.tier} ${L[s.tier-1]}</div>
                      <div class="offer-main">
                        <span class="offer-icon">${i.icon}</span>
                        <div>
                          <h4>${i.name}</h4>
                          <p>${i.description}</p>
                        </div>
                      </div>
                      <button data-buy-offer="${n}" class="btn-primary ${r?"":"disabled"}" ${r?"":"disabled"}>
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
    `,this.bindTopHudEvents(),this.bindWorkshopEvents()}bindWorkshopEvents(){const e=u.getInstance();this.uiLayer.querySelectorAll("[data-slot-group]").forEach(t=>{t.addEventListener("click",a=>{if(a.target.hasAttribute("data-sell-group"))return;const s=t.dataset.slotGroup,n=Number(t.dataset.slotIdx);this.selectedSlot?(this.engine.weapons.interactSlots(this.selectedSlot.group,this.selectedSlot.index,s,n),this.selectedSlot=null,this.renderWorkshopModal()):(s==="equipped"&&this.engine.weapons.equipped[n]||s==="bench"&&this.engine.weapons.bench[n])&&(this.selectedSlot={group:s,index:n},c.getInstance().playClick(),this.renderWorkshopModal())})}),this.uiLayer.querySelectorAll("[data-sell-group]").forEach(t=>{t.addEventListener("click",a=>{a.stopPropagation();const s=t.dataset.sellGroup,n=Number(t.dataset.sellIdx),i=this.engine.weapons.sellWeapon(s,n);i>0&&(e.addGold(i),this.renderWorkshopModal())})}),document.getElementById("btn-auto-merge")?.addEventListener("click",()=>{this.engine.weapons.autoMergeAll(),this.renderWorkshopModal()}),document.getElementById("btn-double-wave-ad")?.addEventListener("click",async()=>{await f.getInstance().showRewardedAd("2x Wave Clear Gold Bonus")&&!this.waveBonusDoubled&&(this.waveBonusDoubled=!0,e.addGold(this.engine.waveGoldEarned),this.renderWorkshopModal())}),this.uiLayer.querySelectorAll("[data-buy-offer]").forEach(t=>{t.addEventListener("click",()=>{const a=Number(t.dataset.buyOffer),s=this.shopOffers[a];if(!(!s||s.purchased)&&this.engine.weapons.hasFreeSlot()&&e.spendGold(s.cost)){s.purchased=!0;const n=this.engine.weapons.createWeapon(s.archetype,s.tier);this.engine.weapons.addWeaponToAvailableSlot(n),c.getInstance().playCoin(),this.renderWorkshopModal()}})}),document.getElementById("btn-reroll-gold")?.addEventListener("click",()=>{e.spendGold(25)&&(c.getInstance().playClick(),this.rollShopOffers(),this.renderWorkshopModal())}),document.getElementById("btn-reroll-ad")?.addEventListener("click",async()=>{await f.getInstance().showRewardedAd("Free Armory Reroll + High Tier Crate")&&(this.rollShopOffers(),this.shopOffers[1]&&(this.shopOffers[1].tier=Math.min(4,this.shopOffers[1].tier+1)),this.renderWorkshopModal())}),document.getElementById("btn-Menu-return")?.addEventListener("click",()=>{this.engine.state="MENU",this.renderMainMenu()}),document.getElementById("btn-next-wave")?.addEventListener("click",async()=>{c.getInstance().playClick(),this.engine.currentWave%3===0&&await f.getInstance().showInterstitialAd(`Between Wave ${this.engine.currentWave} & ${this.engine.currentWave+1}`),this.resetToInGameHud(),this.engine.startWave(this.engine.currentWave+1)})}openDeathModal(){const e=u.getInstance(),t=this.engine.state==="REVIVE_PROMPT",a=Math.max(100,Math.floor(this.engine.runGoldEarned*.5));this.uiLayer.innerHTML=`
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
    `,this.bindTopHudEvents(),document.getElementById("btn-revive-ad")?.addEventListener("click",async()=>{await f.getInstance().showRewardedAd("Emergency Revive + Tactical Nuke")&&(this.resetToInGameHud(),this.engine.revivePlayerWithNuke())}),document.getElementById("btn-claim-2x-end")?.addEventListener("click",async()=>{await f.getInstance().showRewardedAd("End-of-Run Bonus Gold Multiplier")&&e.addGold(a),this.engine.state="MENU",this.renderMainMenu()}),document.getElementById("btn-return-menu")?.addEventListener("click",()=>{this.engine.state="MENU",this.renderMainMenu()})}openSubModal(e,t,a,s,n){document.getElementById(e)?.remove();const i=this.engine.state;this.engine.setSdkPause(!0);const d=document.createElement("div");d.id=e,d.className="modal-backdrop",d.innerHTML=`
      <div class="cyber-panel store-panel">
        <div class="workshop-header">
          <div>
            <h2>${t}</h2>
            <p>${a}</p>
          </div>
          <button id="btn-close-${e}" class="btn-secondary">✕ Close</button>
        </div>
        ${s}
      </div>
    `,this.uiLayer.appendChild(d);const r=()=>{d.remove(),this.engine.setSdkPause(!1),i==="MENU"?this.renderMainMenu():i==="SHOP"?this.renderWorkshopModal():i==="LEVEL_UP"?this.renderLevelUpModal():this.updateTopHudValues()};document.getElementById(`btn-close-${e}`)?.addEventListener("click",r),n(d,r)}openCratesModal(e){const t=u.getInstance(),a=t.data.techShards,s=`
      <div class="shards-banner">${l.t("tech_shards_banner",{shards:a,bonus:a*3})}</div>
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
    `;this.openSubModal("crates-modal",l.t("crates_modal_title"),l.t("crates_modal_sub"),s,(n,i)=>{document.getElementById("btn-open-ad-crate")?.addEventListener("click",async()=>{if(await f.getInstance().showRewardedAd("Open Free Cyber Supply Crate")){const r=t.rollSupplyCrate(1,!1);c.getInstance().playMerge(5),this.openCratesModal(r)}}),document.getElementById("btn-open-1x-crate")?.addEventListener("click",()=>{if(t.spendGems(80)){const d=t.rollSupplyCrate(1,!0);c.getInstance().playMerge(4),this.openCratesModal(d)}else i(),this.openStoreModal()}),document.getElementById("btn-open-10x-crate")?.addEventListener("click",()=>{if(t.spendGems(700)){const d=t.rollSupplyCrate(10,!0);c.getInstance().playMerge(5),this.openCratesModal(d)}else i(),this.openStoreModal()})})}openMissionsModal(){const e=u.getInstance(),t=e.data,a=[{tierKey:"killsTier",title:l.t("mission_kill_title"),desc:l.t("mission_kill_desc",{target:t.missionTiers.killsTier*60}),current:t.totalKills,target:t.missionTiers.killsTier*60,rewardGold:250*t.missionTiers.killsTier,rewardGems:20},{tierKey:"mergesTier",title:l.t("mission_merge_title"),desc:l.t("mission_merge_desc",{target:t.missionTiers.mergesTier*4}),current:t.totalMerges,target:t.missionTiers.mergesTier*4,rewardGold:300*t.missionTiers.mergesTier,rewardGems:25},{tierKey:"waveTier",title:l.t("mission_wave_title"),desc:l.t("mission_wave_desc",{target:t.missionTiers.waveTier*3}),current:t.highestWave,target:t.missionTiers.waveTier*3,rewardGold:400*t.missionTiers.waveTier,rewardGems:35},{tierKey:"levelUpsTier",title:l.t("mission_lvl_title"),desc:l.t("mission_lvl_desc",{target:t.missionTiers.levelUpsTier*3}),current:t.totalLevelUps,target:t.missionTiers.levelUpsTier*3,rewardGold:250*t.missionTiers.levelUpsTier,rewardGems:20}],s=`
      <div class="missions-list">
        ${a.map((n,i)=>{const d=Math.min(100,Math.round(n.current/n.target*100)),r=n.current>=n.target;return`
              <div class="mission-row ${r?"mission-ready":""}">
                <div class="mission-details">
                  <h4>${n.title} <span class="lvl-tag">Tier ${t.missionTiers[n.tierKey]}</span></h4>
                  <p>${n.desc} (${Math.min(n.current,n.target)} / ${n.target})</p>
                  <div class="mission-prog-wrap">
                    <div class="mission-prog-fill" style="width: ${d}%"></div>
                  </div>
                </div>
                <div class="mission-rewards">
                  <span class="reward-tag">🪙 ${n.rewardGold} + 💎 ${n.rewardGems}</span>
                  ${r?`
                    <div class="mission-claim-btns">
                      <button data-claim-idx="${i}" data-claim-mult="1" class="btn-primary">${l.t("btn_claim_mission")}</button>
                      <button data-claim-idx="${i}" data-claim-mult="2" class="btn-ad">${l.t("btn_claim_2x_ad")}</button>
                    </div>
                  `:`<button class="btn-secondary" disabled>${l.t("mission_in_progress")}</button>`}
                </div>
              </div>
            `}).join("")}
      </div>
    `;this.openSubModal("missions-modal",l.t("missions_modal_title"),l.t("missions_modal_sub"),s,n=>{n.querySelectorAll("[data-claim-idx]").forEach(i=>{i.addEventListener("click",async()=>{const d=Number(i.dataset.claimIdx),r=Number(i.dataset.claimMult),h=a[d];!h||h.current<h.target||r===2&&!await f.getInstance().showRewardedAd(`2x Mission Bounty: ${h.title}`)||(e.addGold(h.rewardGold*r),e.addGems(h.rewardGems*r),e.data.missionTiers[h.tierKey]+=1,e.save(),c.getInstance().playCashRegister(),this.openMissionsModal())})})})}openLeaderboardModal(){const e=u.getInstance(),t=e.data,a=[...O,{name:t.playerName||"CYBER_COMMANDER",wave:t.highestWave,score:t.highScore,vip:t.vipUnlocked,isPlayer:!0}].sort((n,i)=>i.score-n.score||i.wave-n.wave),s=`
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
            ${a.map((n,i)=>`
              <tr class="${n.isPlayer?"player-rank-row":""}">
                <td><strong>#${i+1}</strong></td>
                <td>
                  ${n.name}
                  ${n.vip?'<span class="vip-tag">VIP</span>':""}
                  ${n.isPlayer?'<span class="you-tag">YOU</span>':""}
                </td>
                <td>${l.t("wave_label")} ${n.wave}</td>
                <td><strong>${n.score.toLocaleString()}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;this.openSubModal("leaderboard-modal",l.t("leaderboard_title"),l.t("leaderboard_sub"),s,()=>{document.getElementById("btn-save-callsign")?.addEventListener("click",()=>{const i=(document.getElementById("input-callsign")?.value||"").trim().toUpperCase().slice(0,18);i&&(e.data.playerName=i,e.save(),c.getInstance().playClick(),this.openLeaderboardModal())})})}openStoreModal(){const e=u.getInstance(),t=`
      <div class="iap-grid">
        ${$.map(a=>{const s=a.id==="vip_speed"&&e.data.vipUnlocked||a.id==="starter_pack"&&e.data.starterPackBought;return`
            <div class="iap-card">
              ${a.badge?`<span class="iap-badge">${a.badge}</span>`:""}
              <h3>${a.title}</h3>
              <p>${a.description}</p>
              <button data-iap-id="${a.id}" class="btn-gold ${s?"disabled":""}" ${s?"disabled":""}>
                ${s?"UNLOCKED ✓":`BUY $${a.priceUsd.toFixed(2)}`}
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
    `;this.openSubModal("vip-store-modal","💎 NEXUS CYBER STORE & IAP SANDBOX","Test high-converting In-App Purchases (Stripe/Portal SDK) and Gem Crates. All transactions increment your Simulated Revenue counter!",t,(a,s)=>{a.querySelectorAll("[data-iap-id]").forEach(n=>{n.addEventListener("click",async()=>{const i=n.dataset.iapId;await f.getInstance().purchaseProduct(i)&&(i==="starter_pack"?(e.data.starterPackBought=!0,e.addGold(1500),e.addGems(100),this.engine.weapons.addWeaponToAvailableSlot(this.engine.weapons.createWeapon("plasma",3))):i==="vip_speed"?(e.data.vipUnlocked=!0,e.unlockCommander("void_phantom"),e.addGems(500),this.engine.gameSpeedMultiplier=2):i==="gem_vault_small"?e.addGems(150):i==="gem_vault_mega"&&(e.addGems(1e3),e.addGold(5e3)),e.save(),s())})}),document.getElementById("btn-spend-gems")?.addEventListener("click",()=>{e.spendGems(50)&&(e.addGold(1e3),c.getInstance().playCashRegister(),this.updateTopHudValues())})})}}window.addEventListener("DOMContentLoaded",()=>{const k=document.getElementById("game-canvas");if(!k)throw new Error("Missing #game-canvas element");const e=new B(k);f.getInstance().bindEngineCallbacks(()=>e.setSdkPause(!0),()=>e.setSdkPause(!1)),new D(e)});
