(function(){
var CODE="cdras";
var MAPS=[["1910-6433-2507","📦BOX PVP📦"],["6153-4962-3143","🚽SKIBIDI 1V1 - SKIBIDI TOILET FFA 🚽"],["4804-2920-4387","🪐 OG ONLY UP 🔥"],["9037-5963-7150","🏝️ SUMMER 1V1 🏄"],["4486-0870-9096","QUICKFIGHT 1V1"],["5918-2345-5016","👑 PHN 200 HS ONLY 🎯"],["2696-5366-1089","👑 PHAINON ESPORTS 1V1 🏆"],["7212-0617-9460","✏️ [RANKED] EDIT PUMP WARS 🎯"],["1797-6047-5578","🚌 ROSA PARKS 1V1 🚌"],["0226-2144-2280","🎄CHRISTMAS RED VS BLUE 🎅"],["1048-3984-5029","ALEXY 1V1"],["2036-9368-5117","THE BLACK CAT CAFÈ"],["6361-5423-7019","SLIDE & CHILL"],["7044-2452-0827","[RANKED] TILTED TOWERS"],["6112-7960-1824","ORIGINAL ID《الحرب العالميه الرابعه》"],["3322-5995-9845","🐊 BRAINROT ZONEWARS 🌳"],["8576-9963-9087","FFA SQUID GAME"],["5739-5542-6481","🏆 [RANKED] EDIT PUMP WARS [RANKED] 🎯"],["9796-5595-4501","STEAL THE SQUID - [SQUID GAME]"],["8232-4655-0229","GO GOATED HALLOWEEN EDITION"]];
var T={
en:["Support the creator","Made by a Fortnite creator. Use code <b>cdras</b> in the Item Shop (Support-A-Creator) and play my Creative islands, most played right now first.","Creator code","Copy","Copied ✓","Open","playing now","plays/wk"],
it:["Supporta il creator","Fatto da un creator di Fortnite. Usa il codice <b>cdras</b> nello Shop (Supporta un creator) e gioca le mie isole Creative, prima le più giocate adesso.","Codice creator","Copia","Copiato ✓","Apri","in gioco ora","partite/sett."],
es:["Apoya al creador","Hecho por un creador de Fortnite. Usa el código <b>cdras</b> en la Tienda (Apoya a un creador) y juega mis islas Creativas, primero las más jugadas ahora.","Código de creador","Copiar","Copiado ✓","Abrir","jugando ahora","partidas/sem."],
fr:["Soutenir le créateur","Fait par un créateur Fortnite. Utilise le code <b>cdras</b> dans la Boutique (Soutenir un créateur) et joue à mes îles Créatif, les plus jouées en ce moment d'abord.","Code créateur","Copier","Copié ✓","Ouvrir","en jeu","parties/sem."],
de:["Creator unterstützen","Von einem Fortnite-Creator gemacht. Nutze den Code <b>cdras</b> im Item-Shop (Creator unterstützen) und spiele meine Kreativ-Inseln, die gerade meistgespielten zuerst.","Creator-Code","Kopieren","Kopiert ✓","Öffnen","spielen gerade","Spiele/Woche"],
pt:["Apoie o criador","Feito por um criador de Fortnite. Use o código <b>cdras</b> na Loja (Apoie um criador) e jogue minhas ilhas Criativas, as mais jogadas agora primeiro.","Código de criador","Copiar","Copiado ✓","Abrir","jogando agora","partidas/sem."],
ru:["Поддержать автора","Сделано автором Fortnite. Используйте код <b>cdras</b> в магазине (Поддержать автора) и играйте на моих островах в Творческом режиме, сначала самые популярные сейчас.","Код автора","Копировать","Скопировано ✓","Открыть","играют сейчас","игр/нед."],
zh:["支持创作者","由 Fortnite 创作者制作。在道具商店（支持创作者）使用代码 <b>cdras</b>，并游玩我的创意岛屿，当前玩家最多的排在前面。","创作者代码","复制","已复制 ✓","打开","正在游玩","次/周"],
ja:["クリエイターを応援","Fortnite のクリエイターが作りました。アイテムショップ（クリエイターを応援）でコード <b>cdras</b> を使い、私のクリエイティブ島で遊んでください。今プレイ人数が多い順です。","クリエイターコード","コピー","コピーしました ✓","開く","プレイ中","プレイ/週"],
ko:["크리에이터 후원","Fortnite 크리에이터가 만들었습니다. 아이템 샵(크리에이터 후원)에서 코드 <b>cdras</b>를 사용하고 제 크리에이티브 섬을 플레이하세요. 지금 가장 많이 플레이 중인 순서입니다.","크리에이터 코드","복사","복사됨 ✓","열기","플레이 중","플레이/주"],
tr:["Yaratıcıyı destekle","Bir Fortnite yaratıcısı tarafından yapıldı. Mağazada (Yaratıcıyı Destekle) <b>cdras</b> kodunu kullan ve Yaratıcı adalarımı oyna, şu an en çok oynananlar önce.","Yaratıcı kodu","Kopyala","Kopyalandı ✓","Aç","şu an oynuyor","oyun/hafta"],
pl:["Wesprzyj twórcę","Stworzone przez twórcę Fortnite. Użyj kodu <b>cdras</b> w Sklepie (Wesprzyj twórcę) i graj na moich wyspach Kreatywnych, najpierw te najczęściej grane teraz.","Kod twórcy","Kopiuj","Skopiowano ✓","Otwórz","gra teraz","gier/tydz."]
};
var seg=(location.pathname.split("/")[1]||"").toLowerCase();
var t=T[seg]||T.en;
var box=document.getElementById("creator"); if(!box) return;
var live={},week={};
function esc(x){return String(x).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]});}
function btn(txt,extra){return '<button class="btn" style="padding:7px 12px;font-size:13px" '+extra+'>'+txt+'</button>';}
function list(){
  var rows=MAPS.map(function(m,i){return{c:m[0],n:m[1],i:i,l:live[m[0]]||0,w:week[m[0]]||0};});
  rows.sort(function(a,b){return(b.l-a.l)||(b.w-a.w)||(a.i-b.i);});
  return rows.map(function(x){
    var st=x.l>0?'<b style="color:var(--green)">● '+x.l+'</b><div style="font-size:10px;color:var(--muted)">'+t[6]+'</div>':(x.w>0?'<span style="font-size:11px;color:var(--muted)">'+x.w+' '+t[7]+'</span>':'<span style="font-size:11px;color:var(--muted)">–</span>');
    return '<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-top:1px solid var(--line)"><div style="min-width:72px;text-align:right">'+st+'</div><div style="flex:1;min-width:0"><div style="font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(x.n)+'</div><div style="font-size:11px;color:var(--muted)">'+x.c+'</div></div>'+btn(t[3],'data-copy="'+x.c+'"')+'<a class="btn" style="padding:7px 12px;font-size:13px;text-decoration:none" href="https://fortnite.gg/island/'+x.c+'" target="_blank" rel="noopener">'+t[5]+'</a></div>';
  }).join("");
}
function draw(){
  box.innerHTML='<h2 style="margin:0 0 6px">❤ '+t[0]+'</h2><p style="color:var(--muted);margin:0 0 12px">'+t[1]+'</p><div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:10px"><span>'+t[2]+' <b style="font-size:20px;color:var(--gold)">'+CODE+'</b></span>'+btn(t[3],'data-copy="'+CODE+'"')+'<a class="btn buy" style="padding:7px 12px;font-size:13px;text-decoration:none" href="https://www.fortnite.com/item-shop?creator-code=cdras" target="_blank" rel="noopener">Item Shop</a></div><div id="ccl" style="max-height:380px;overflow:auto">'+list()+'</div>';
}
box.addEventListener("click",function(e){
  var b=e.target.closest("[data-copy]"); if(!b) return; var v=b.getAttribute("data-copy"), o=b.getAttribute("data-o")||b.textContent; b.setAttribute("data-o",o);
  var ok=function(){b.textContent=t[4];setTimeout(function(){b.textContent=o;},1400);};
  try{navigator.clipboard.writeText(v).then(ok,ok);}catch(x){var a=document.createElement("textarea");a.value=v;document.body.appendChild(a);a.select();try{document.execCommand("copy");}catch(y){}a.remove();ok();}
});
draw();
Promise.all(MAPS.map(function(m){
  return fetch("https://api.fortnite.com/ecosystem/v1/islands/"+m[0]+"/metrics/minute").then(function(r){return r.json();}).then(function(j){var v=(j.peakCCU||[]).map(function(x){return x.value;}).filter(function(x){return x!=null;});live[m[0]]=v.length?v[v.length-1]:0;}).catch(function(){})
   .then(function(){return fetch("https://api.fortnite.com/ecosystem/v1/islands/"+m[0]+"/metrics/day?interval=week");}).then(function(r){return r.json();}).then(function(j){week[m[0]]=(j.plays||[]).reduce(function(a,x){return a+(x.value||0);},0);}).catch(function(){});
})).then(function(){var l=document.getElementById("ccl"); if(l) l.innerHTML=list();});
})();
