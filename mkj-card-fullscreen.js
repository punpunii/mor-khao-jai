/* ใส่ใน communicationcard.html ก่อน </body>:  <script src="mkj-card-fullscreen.js"></script>
   เพิ่มปุ่ม "แสดงเต็มจอ" ให้ยื่นมือถือให้เจ้าหน้าที่อ่านได้ชัด */
(function () {
  const actions = document.querySelector(".preview-actions");
  const card = document.querySelector(".communication-card");
  if (!actions || !card) return;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "preview-btn";
  btn.textContent = "📱 แสดงเต็มจอให้เจ้าหน้าที่";
  actions.appendChild(btn);

  btn.addEventListener("click", function () {
    const items = [...document.querySelectorAll(".option input:checked")].map(i => i.value);
    if (!items.length) return;                     // ยังไม่ได้สร้างบัตร
    const o = document.createElement("div");
    o.className = "mkj-overlay";
    o.setAttribute("role", "dialog");
    const big = document.createElement("div");
    big.className = "mkj-big";
    big.textContent = "ฉันมีปัญหาการได้ยิน กรุณาสื่อสารกับฉันโดย";
    const list = document.createElement("div");
    list.className = "mkj-sub";
    items.forEach(t => { const p = document.createElement("div"); p.textContent = "• " + t; list.appendChild(p); });
    const close = document.createElement("button");
    close.className = "mkj-close";
    close.type = "button";
    close.textContent = "ปิด";
    close.onclick = () => o.remove();
    o.append(big, list, close);
    document.body.appendChild(o);
  });
})();
