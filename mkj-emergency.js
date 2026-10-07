/* MOR KHAO JAI — Immediate urgent-symptom alert */
(function () {
  const urgent = {
    sChest: { th: "เจ็บหน้าอก", en: "Chest pain" },
    sBreathing: { th: "หายใจลำบาก", en: "Difficulty breathing" }
  };
  const page = document.querySelector(".history-page");
  if (!page) return;

  let lastSignature = "";

  const style = document.createElement("style");
  style.textContent = `
    .mkj-urgent-modal{position:fixed;inset:0;z-index:100000;display:grid;place-items:center;padding:20px;background:rgba(20,38,42,.58);backdrop-filter:blur(7px);animation:mkjUrgentFade .2s ease}
    .mkj-urgent-box{width:min(560px,100%);background:#fff;border-radius:28px;padding:28px;box-shadow:0 25px 70px rgba(15,50,55,.28);border:2px solid #F2B5B8;animation:mkjUrgentPop .25s cubic-bezier(.2,.8,.2,1)}
    .mkj-urgent-icon{width:58px;height:58px;border-radius:18px;display:grid;place-items:center;background:#FFF0F1;color:#B3261E;font-size:28px;margin-bottom:14px}
    .mkj-urgent-box h2{margin:0 0 8px;color:#9F2524;font-size:26px;line-height:1.3;font-family:Sarabun,sans-serif}
    .mkj-urgent-box p{margin:0 0 10px;color:#4D5E63;font-size:17px;line-height:1.7}
    .mkj-urgent-list{margin:12px 0 20px;padding-left:22px;color:#34484D;font-size:17px;line-height:1.8}
    .mkj-urgent-actions{display:flex;gap:10px;flex-wrap:wrap}
    .mkj-urgent-actions button{border:0;border-radius:15px;padding:13px 18px;font:700 16px Sarabun,sans-serif;cursor:pointer}
    .mkj-urgent-primary{background:#C6535B;color:#fff !important;box-shadow:0 8px 20px rgba(198,83,91,.22)}
    .mkj-urgent-secondary{background:#147B75;color:#fff !important;box-shadow:0 8px 20px rgba(20,123,117,.18)}
    @keyframes mkjUrgentFade{from{opacity:0}to{opacity:1}}
    @keyframes mkjUrgentPop{from{opacity:0;transform:translateY(16px) scale(.97)}to{opacity:1;transform:none}}
    .mkj-urgent-fullscreen{position:fixed;inset:0;z-index:100001;background:#0E5E67;display:grid;place-items:center;padding:24px;color:#fff;text-align:center}.mkj-urgent-fullscreen-card{width:min(900px,100%);padding:clamp(28px,6vw,70px);border-radius:36px;background:linear-gradient(145deg,#147B75,#2476A8);box-shadow:0 30px 90px rgba(0,0,0,.28)}.mkj-urgent-big-icon{font-size:56px}.mkj-urgent-small{font-size:15px;letter-spacing:.12em;font-weight:800;opacity:.85;margin-top:12px}.mkj-urgent-fullscreen h1{font:800 clamp(32px,6vw,64px)/1.15 Sarabun,sans-serif;margin:18px 0}.mkj-urgent-fullscreen p{font:600 clamp(18px,3vw,26px)/1.6 Sarabun,sans-serif;color:#fff !important}.mkj-fullscreen-close{margin-top:28px;border:0;border-radius:16px;padding:13px 28px;background:#fff;color:#18545B !important;font:700 17px Sarabun,sans-serif;cursor:pointer}@media(max-width:560px){.mkj-urgent-box{padding:22px;border-radius:22px}.mkj-urgent-actions button{width:100%}}
  `;
  document.head.appendChild(style);

  const bar = document.createElement("div");
  bar.className = "mkj-alert";
  bar.setAttribute("role", "alert");
  bar.hidden = true;
  bar.innerHTML = '<strong>⚠️ อาการที่ควรได้รับการประเมินเร่งด่วน</strong><span>หากมีอาการรุนแรงหรือไม่แน่ใจ ให้ขอความช่วยเหลือทันที ไม่ต้องรอกรอกฟอร์มให้เสร็จ</span>';
  const header = page.querySelector(".page-header");
  page.insertBefore(bar, header ? header.nextSibling : page.firstChild);

  function selected() {
    return Object.keys(urgent).filter(id => {
      const el = document.getElementById(id);
      return el && el.checked;
    });
  }

  function showModal(ids) {
    if (!ids.length) return;
    const lang = localStorage.getItem("morkaojai-language") === "en" ? "en" : "th";
    const labels = ids.map(id => urgent[id][lang]);
    const old = document.querySelector(".mkj-urgent-modal");
    if (old) old.remove();
    const o = document.createElement("div");
    o.className = "mkj-urgent-modal";
    o.setAttribute("role", "dialog");
    o.setAttribute("aria-modal", "true");
    o.innerHTML = `
      <div class="mkj-urgent-box">
        <div class="mkj-urgent-icon">!</div>
        <h2>${lang === "en" ? "Please pay attention to this symptom" : "โปรดสังเกตอาการนี้เป็นพิเศษ"}</h2>
        <p>${lang === "en" ? "You selected a symptom that may need urgent assessment." : "คุณเลือกอาการที่อาจต้องได้รับการประเมินอย่างเร่งด่วน"}</p>
        <ul class="mkj-urgent-list">${labels.map(x => `<li>${x}</li>`).join("")}</ul>
        <p>${lang === "en" ? "If the symptom is severe, sudden, or getting worse, seek urgent medical help." : "หากอาการรุนแรง เกิดขึ้นฉับพลัน หรือแย่ลง ให้ขอความช่วยเหลือทางการแพทย์ทันที"}</p>
        <div class="mkj-urgent-actions">
          <button type="button" class="mkj-urgent-secondary" data-close>${lang === "en" ? "I understand" : "ฉันเข้าใจแล้ว"}</button>
          <button type="button" class="mkj-urgent-primary" data-fullscreen>${lang === "en" ? "Show to healthcare staff" : "ยื่นให้บุคลากรดูแบบเต็มหน้าจอ"}</button>
        </div>
      </div>`;
    o.addEventListener("click", e => {
      if (e.target === o || e.target.hasAttribute("data-close")) o.remove();
      if (e.target.hasAttribute("data-fullscreen")) {
        showUrgentFullscreen(ids, lang);
        o.remove();
      }
    });
    document.body.appendChild(o);
    o.querySelector("[data-close]").focus();
  }

  function showUrgentFullscreen(ids, lang) {
    const labels = ids.map(id => urgent[id][lang]);
    const o = document.createElement("div");
    o.className = "mkj-urgent-fullscreen";
    o.innerHTML = `
      <div class="mkj-urgent-fullscreen-card">
        <div class="mkj-urgent-big-icon">⚠️</div>
        <div class="mkj-urgent-small">${lang === "en" ? "URGENT SYMPTOM" : "อาการที่ต้องให้ความสนใจ"}</div>
        <h1>${labels.join(" · ")}</h1>
        <p>${lang === "en" ? "Please help me get medical attention." : "กรุณาช่วยฉันแจ้งบุคลากรทางการแพทย์และประเมินอาการนี้ด้วย"}</p>
        <button type="button" class="mkj-fullscreen-close">${lang === "en" ? "Close" : "ปิด"}</button>
      </div>`;
    document.body.appendChild(o);
    o.querySelector(".mkj-fullscreen-close").onclick=()=>o.remove();
  }

  function refresh(show=true) {
    const ids = selected();
    bar.hidden = ids.length === 0;
    if (show && ids.length) {
      const sig = ids.join("|");
      if (sig !== lastSignature) {
        lastSignature = sig;
        showModal(ids);
      }
    } else if (!ids.length) {
      lastSignature = "";
    }
  }

  Object.keys(urgent).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", () => refresh(true));
  });

  const clr = document.getElementById("clearBtn");
  if (clr) clr.addEventListener("click", () => setTimeout(() => refresh(false), 0));

  const create = document.getElementById("createHistory");
  if (create) create.addEventListener("click", () => {
    const ids = selected();
    if (ids.length) setTimeout(() => showModal(ids), 150);
  });
})();
