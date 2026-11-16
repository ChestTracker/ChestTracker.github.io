(function(){
var box=document.getElementById("upgrade"); if(!box) return;
var T={
en:["Upgrade your plan","Already have Normal or Pro? Pay only the difference minus €2. On our Discord, write /upgrade with your licence key and the bot gives you your personal upgrade link.","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Open Discord"],
it:["Passa a un piano superiore","Hai già Normal o Pro? Paghi solo la differenza meno 2 €. Sul nostro Discord scrivi /upgrade con la tua chiave di licenza e il bot ti dà il tuo link personale.","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Apri Discord"],
es:["Mejora tu plan","¿Ya tienes Normal o Pro? Paga solo la diferencia menos 2 €. En nuestro Discord escribe /upgrade con tu clave de licencia y el bot te da tu enlace personal.","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Abrir Discord"],
fr:["Passez à un plan supérieur","Vous avez déjà Normal ou Pro ? Payez seulement la différence moins 2 €. Sur notre Discord, écrivez /upgrade avec votre clé de licence et le bot vous donne votre lien personnel.","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Ouvrir Discord"],
de:["Plan upgraden","Du hast schon Normal oder Pro? Du zahlst nur die Differenz minus 2 €. Schreibe auf unserem Discord /upgrade mit deinem Lizenzschlüssel, der Bot gibt dir deinen persönlichen Link.","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Discord öffnen"],
pt:["Faça upgrade do seu plano","Já tem Normal ou Pro? Pague só a diferença menos 2 €. No nosso Discord escreva /upgrade com a sua chave de licença e o bot dá-lhe o seu link pessoal.","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Abrir Discord"],
ru:["Повысить тариф","Уже есть Normal или Pro? Платите только разницу минус 2 €. На нашем Discord напишите /upgrade с вашим лицензионным ключом, и бот пришлёт личную ссылку.","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Открыть Discord"],
zh:["升级你的方案","已经有 Normal 或 Pro？只需补差价再减 2 欧元。在我们的 Discord 里输入 /upgrade 和你的授权密钥，机器人会给你专属升级链接。","Normal → Pro","Normal → Ultimate","Pro → Ultimate","打开 Discord"],
ja:["プランをアップグレード","Normal または Pro をお持ちですか？差額から 2 € 引きでアップグレードできます。Discord で /upgrade とライセンスキーを送ると、専用リンクが届きます。","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Discord を開く"],
ko:["플랜 업그레이드","이미 Normal 또는 Pro 가 있나요? 차액에서 2 € 를 뺀 금액만 내세요. Discord 에서 /upgrade 와 라이선스 키를 입력하면 전용 링크를 받습니다.","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Discord 열기"],
tr:["Planını yükselt","Zaten Normal veya Pro mu var? Sadece farkı eksi 2 € ödersin. Discord'umuzda lisans anahtarınla /upgrade yaz, bot sana kişisel bağlantını verir.","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Discord'u aç"],
pl:["Ulepsz swój plan","Masz już Normal lub Pro? Płacisz tylko różnicę minus 2 €. Na naszym Discordzie napisz /upgrade z kluczem licencji, a bot da Ci osobisty link.","Normal → Pro","Normal → Ultimate","Pro → Ultimate","Otwórz Discord"]
};
var seg=(location.pathname.split("/")[1]||"").toLowerCase(), t=T[seg]||T.en;
var row=function(a,p){return '<div style="flex:1;min-width:150px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,.06);border:1px solid var(--line)"><div style="color:var(--muted);font-size:13px">'+a+'</div><div style="font-size:26px;font-weight:800;color:var(--gold)">€'+p+'</div></div>';};
box.className="card";box.style.cssText="margin-top:20px";
box.innerHTML='<h2 style="margin:0 0 6px">⬆ '+t[0]+'</h2><p style="color:var(--muted);margin:0 0 14px">'+t[1]+'</p><div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:14px">'+row(t[2],3)+row(t[3],8)+row(t[4],3)+'</div><a class="btn lg" href="https://discord.gg/uJuVQ3FyYH" target="_blank" rel="noopener" style="text-decoration:none">'+t[5]+'</a>';
})();
