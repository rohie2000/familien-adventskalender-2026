const people=['Lena','Celine','Leon'];
// Die 8 Geschenke pro Person entsprechen jeweils ihrem 1. bis 8. Türchen.
const gifts={
 Lena:[
 ['🌿','Gutschein ebl','was gesundes? dann ab zu ebl - da findest du bestimmt was schmackhaftes'],
 ['🍽️','Wunschessen in den Stadtwiesen 15','Ein Wunschessen in den Stadtwiesen 15. Du entscheidest, was auf den Tisch kommt!'],
 ['⛽','Tankgutschein','30 Euro für deine nächste Tankfüllung. Gute Fahrt!'],
 ['🥣','5 Müsliriegel à la Rolfy','Fünf hausgemachte Müsliriegel à la Rolfy – natürlich mit deiner Wunschmischung!'],
 ['🏆','DER ABSOLUTE TOP-PREIS!','Trommelwirbel! Du darfst Conny EINE GANZE NACHT mitnehmen! Ja, richtig gelesen. Ein sensationeller Hauptgewinn – zumindest behauptet das die Preisjury. 😂 Reklamationen ausgeschlossen!'],
 ['🎄','Dein Weihnachtswitz','Was macht ein Keks unter einem Weihnachtsbaum? Krümel!'],
 ['🍦','Eiszeit mit MEDICON-Talern','Ab Frühjahr: zwei Kugeln Eis in der Eisboutique mit MEDICON-Talern – und 15 Taler auf die Hand zur freien Verfügung!'],
 ['🍪','Echter Elisenlebkuchen','Ein echter Elisenlebkuchen wartet auf dich – abzuholen in den Stadtwiesen!']
 ],
 Celine:[
 ['☕','Gutschein Café & Restaurant Bambusgarten','Ein Tässchen Kaffee oder Latte nach bummeln in der Garten und Accessoires Welt - vielleicht für die neue Wohnung?'],
 ['🍽️','Wunschessen in den Stadtwiesen 15','Dein Wunschessen in den Stadtwiesen 15: Du wünschst, wir kümmern uns darum!'],
 ['⛽','Tankgutschein','30 Euro Tankgutschein für unterwegs – viel Freude damit!'],
 ['🥣','5 Müsliriegel à la Rolfy','Fünf Müsliriegel aus Rolfys Manufaktur, frisch und mit deiner Wunschmischung!'],
 ['🏆','DER ABSOLUTE TOP-PREIS!','Herzlichen Glückwunsch! Du darfst Conny EINE GANZE NACHT mitnehmen! Die Jury nennt es den Hauptgewinn. Ob du das genauso siehst? 😂 Umtausch ausgeschlossen!'],
 ['🎄','Dein Weihnachtswitz','Was sagt ein Schneemann zum anderen? Riechst du auch Karotten?'],
 ['🍦','Eiszeit mit MEDICON-Talern','Ab Frühjahr: zwei Kugeln Eis in der Eisboutique mit MEDICON-Talern – plus 15 Taler auf die Hand zur freien Verfügung!'],
 ['🍪','Echter Elisenlebkuchen','Ein echter Elisenlebkuchen für dich – bitte in den Stadtwiesen abholen!']
 ],
 Leon:[
 ['☕','Gutschein Café & Restaurant Bambusgarten','Ein Tässchen Kaffee oder Latte nach bummeln in der Garten und Accessoires Welt - vielleicht findet man ein schönes Geschenk oder was nettes für ....'],
 ['🍽️','Wunschessen in den Stadtwiesen 15','Ein Wunschessen in den Stadtwiesen 15 – du sagst, was du gerne essen möchtest!'],
 ['⛽','Tankgutschein','30 Euro Tankgutschein. Für den nächsten Ausflug oder die Fahrt zu deinen Freunden!'],
 ['🥣','5 Müsliriegel à la Rolfy','Fünf Müsliriegel à la Rolfy, handgemacht mit deiner Wunschmischung!'],
 ['🏆','DER ABSOLUTE TOP-PREIS!','Unglaublich, aber wahr: Du darfst Conny EINE GANZE NACHT mitnehmen! Ein Preis, um den dich alle beneiden werden … oder auch nicht. 😂 Viel Glück mit deinem Gewinn!'],
 ['🎄','Dein Weihnachtswitz','Warum spielt der Weihnachtsmann so schlecht Fußball? Weil er immer nur Geschenke verteilt!'],
 ['🍦','Eiszeit mit MEDICON-Talern','Ab Frühjahr: zwei Kugeln Eis in der Eisboutique mit MEDICON-Talern und 15 Taler auf die Hand zur freien Verfügung!'],
 ['🍪','Echter Elisenlebkuchen','Ein echter Elisenlebkuchen liegt für dich in den Stadtwiesen bereit. Guten Appetit!']
 ]
};
const now=new Date();
const preview=new URLSearchParams(location.search).get('vorschau')==='1';
const current=now.getFullYear()>2026?24:now.getFullYear()===2026&&now.getMonth()===11?Math.min(24,now.getDate()):0;
const doors=document.getElementById('doors');
document.getElementById('today').textContent=preview?'Vorschau – alle Türchen offen':current===0?'Ab 1. Dezember 2026':`Heute: ${current}. Dezember`;
const viewed=new Set();
for(let day=1;day<=24;day++){
 const owner=people[(day-1)%3],unlocked=preview||day<=current;
 const button=document.createElement('button');button.className=`door door--${owner.toLowerCase()}`+(unlocked?' opened':'');button.disabled=!unlocked;
 button.innerHTML=`<span class="number">${day}</span><span class="owner">${owner.toUpperCase()}</span><span class="state">${unlocked?'✉ Öffnen':'🔒 Verschlossen'}</span>`;
 button.addEventListener('click',()=>showDoor(day,owner));doors.append(button);
}
let spoken='';const dialog=document.getElementById('giftDialog');const content=document.getElementById('giftContent');
const read=document.getElementById('read');const stopButton=document.getElementById('stop');
function stopSpeech(){if('speechSynthesis' in window)speechSynthesis.cancel()}
function wireClickToPlay(videoId,source){
 const video=document.getElementById(videoId);if(!video)return;
 video.src=source;
 const button=document.querySelector(`[data-video-target="${videoId}"]`);
 const toggle=()=>{if(video.paused)video.play().catch(()=>{});else video.pause()};
 video.addEventListener('click',toggle);button?.addEventListener('click',toggle);
 video.addEventListener('play',()=>{if(button)button.textContent='❚❚ Video pausieren'});
 video.addEventListener('pause',()=>{if(button)button.textContent='▶ Adventsgrüße starten'});
}
wireClickToPlay('headerVideo',KOPF_VIDEO);
wireClickToPlay('footerVideo',ABSCHLUSS_VIDEO);
function showDoor(day,owner){
 stopSpeech();spoken='';read.hidden=true;stopButton.hidden=true;
 const [emoji,title,body]=gifts[owner][Math.floor((day-1)/3)];
 const media=TUERCHEN_MEDIEN[day]||{};
 content.replaceChildren();
 const heading=document.createElement('div');heading.className='gift-top';heading.textContent=`${day}. DEZEMBER · FÜR ${owner.toUpperCase()}`;content.append(heading);
 const intro=document.createElement('p');intro.className='media-intro';intro.textContent='Deine Erinnerung wartet! Tippe auf das Foto oder Video, um dein Geschenk zu entdecken.';content.append(intro);
 const reveal=document.createElement('button');reveal.className='reveal-media';reveal.type='button';reveal.setAttribute('aria-label','Geschenk aufdecken');
 if(media.typ==='video'&&media.datei){
  const video=document.createElement('video');video.src=media.datei;video.controls=true;video.playsInline=true;video.preload='metadata';if(media.poster)video.poster=media.poster;
  reveal.append(video);const hint=document.createElement('span');hint.textContent='🎬 Geschenk entdecken';reveal.append(hint);
  video.addEventListener('click',e=>e.stopPropagation());
 }else if(media.datei){
  const img=document.createElement('img');img.src=media.datei;img.alt=`Erinnerungsfoto für den ${day}. Dezember`;img.onerror=()=>{img.remove();reveal.classList.add('missing');reveal.prepend(document.createTextNode('♡ Dein Foto folgt noch'))};reveal.append(img);
 }else{reveal.classList.add('missing');reveal.textContent='♡ Dein Foto oder Video folgt noch';}
 content.append(reveal);
 const gift=document.createElement('div');gift.className='gift-reveal';gift.hidden=true;
 const icon=document.createElement('div');icon.className='gift-icon';icon.textContent=emoji;
 const h=document.createElement('h2');h.className='gift-title';h.textContent=title;
 const p=document.createElement('p');p.className='gift-text';p.textContent=body;
 gift.append(icon,h,p);content.append(gift);
 reveal.addEventListener('click',()=>{
  if(!gift.hidden)return;
  gift.hidden=false;intro.textContent='Deine Überraschung:';reveal.classList.add('revealed');
  read.hidden=false;stopButton.hidden=false;
  spoken=`${day}. Dezember. Für ${owner}. ${title}. ${body}`;
  gift.scrollIntoView({block:'nearest',behavior:'smooth'});
 });
 dialog.showModal();
}
document.getElementById('close').onclick=()=>{stopSpeech();dialog.close()};dialog.addEventListener('close',()=>{stopSpeech();content.querySelectorAll('video').forEach(v=>v.pause())});
read.onclick=()=>{stopSpeech();if('speechSynthesis' in window){const u=new SpeechSynthesisUtterance(spoken);u.lang='de-DE';u.rate=.93;speechSynthesis.speak(u)}};
stopButton.onclick=stopSpeech;
// Kontinuierliches Fotolaufband; doppelte Liste für nahtlose Schleife.
const track=document.getElementById('photoTrack');
if(LAUFBAND_FOTOS.length){
 track.style.setProperty('--scroll-duration',`${Math.max(65,LAUFBAND_FOTOS.length*4)}s`);
 for(let copy=0;copy<2;copy++){
  const group=document.createElement('div');group.className='track-group';if(copy===1)group.setAttribute('aria-hidden','true');
  LAUFBAND_FOTOS.forEach((path,i)=>{const frame=document.createElement('figure');frame.className='track-photo';const img=document.createElement('img');img.src=path;img.loading='lazy';img.alt=copy===0?`Familienerinnerung ${i+1}`:'';frame.append(img);group.append(frame)});
  track.append(group);
 }
}else{document.getElementById('photoStrip').hidden=true}
