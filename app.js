/* ============================================================
   SILENT EXPLORERS — Application Logic
   NASA Space Apps Challenge 2026
   ============================================================ */

'use strict';

// ══════════════════════════════════════════════════════════════
// STARFIELD CANVAS
// ══════════════════════════════════════════════════════════════
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  let shootingStars = [];
  let raf;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars();
  }

  function createStars() {
    stars = Array.from({ length: 320 }, () => ({
      x:          Math.random() * canvas.width,
      y:          Math.random() * canvas.height,
      r:          Math.random() * 1.4 + 0.3,
      opacity:    Math.random() * 0.6 + 0.2,
      speed:      Math.random() * 0.015 + 0.003,
      dir:        Math.random() > 0.5 ? 1 : -1,
      hue:        Math.random() > 0.85 ? 200 : 0,
      saturation: Math.random() > 0.85 ? 70 : 0
    }));
  }

  function spawnShootingStar() {
    const startX = Math.random() * canvas.width * 0.6;
    const startY = Math.random() * canvas.height * 0.4;
    shootingStars.push({
      x: startX, y: startY,
      tailX: startX, tailY: startY,
      length: Math.random() * 110 + 60,
      speed:  Math.random() * 7 + 5,
      angle:  Math.PI / 4 + (Math.random() - 0.5) * 0.4,
      opacity: 1,
      width:  Math.random() * 1.5 + 0.5
    });
  }

  function drawShootingStar(ss) {
    const tailX = ss.x - Math.cos(ss.angle) * ss.length;
    const tailY = ss.y - Math.sin(ss.angle) * ss.length;
    const grad  = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
    grad.addColorStop(0, `rgba(144, 224, 255, ${ss.opacity})`);
    grad.addColorStop(0.5, `rgba(100, 210, 255, ${ss.opacity * 0.5})`);
    grad.addColorStop(1, 'rgba(100, 210, 255, 0)');
    ctx.save();
    ctx.strokeStyle = grad;
    ctx.lineWidth = ss.width;
    ctx.lineCap  = 'round';
    ctx.beginPath();
    ctx.moveTo(ss.x, ss.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Stars
    stars.forEach(s => {
      s.opacity += s.speed * s.dir;
      if (s.opacity >= 1)   { s.opacity = 1;   s.dir = -1; }
      if (s.opacity <= 0.1) { s.opacity = 0.1; s.dir  = 1; }
      ctx.save();
      ctx.globalAlpha = s.opacity;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${s.hue}, ${s.saturation}%, 90%)`;
      ctx.fill();
      ctx.restore();
    });

    // Shooting stars
    if (Math.random() < 0.002) spawnShootingStar();
    shootingStars = shootingStars.filter(ss => ss.opacity > 0.02);
    shootingStars.forEach(ss => {
      drawShootingStar(ss);
      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.opacity -= 0.025;
    });

    raf = requestAnimationFrame(animate);
  }

  resize();
  animate();
  window.addEventListener('resize', resize);
}

// ══════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════
function getBodyClass(body) {
  return body === 'Deep Space' ? 'deep-space' : body.toLowerCase();
}

function getStatusClass(status) {
  const s = status.toLowerCase();
  if (s.includes('interstellar') || s.includes('drifting')) return 'status-drifting';
  if (s.includes('parked') || s.includes('monument') || s.includes('retired') || s.includes('complete')) return 'status-parked';
  return 'status-dormant';
}

function getBodyEmoji(body) {
  return body === 'Mars' ? '🔴' : body === 'Moon' ? '🌕' : '✨';
}

function elapsedDays(dateStr) {
  try {
    const d = new Date(dateStr);
    return Math.floor((Date.now() - d.getTime()) / 86400000).toLocaleString();
  } catch { return '?'; }
}

// ══════════════════════════════════════════════════════════════
// POPULATE SELECTS
// ══════════════════════════════════════════════════════════════
function populateSelects() {
  const quizSel = document.getElementById('quiz-rover-select');
  const txSel   = document.getElementById('transmission-rover');
  if (!quizSel || !txSel) return;

  const groups = { Mars: [], Moon: [], 'Deep Space': [] };
  artifacts.forEach(a => groups[a.body]?.push(a));

  [quizSel, txSel].forEach(sel => {
    sel.innerHTML = '';
    Object.entries(groups).forEach(([body, list]) => {
      const optGroup = document.createElement('optgroup');
      optGroup.label = `${getBodyEmoji(body)} ${body}`;
      list.forEach(a => {
        const opt = document.createElement('option');
        opt.value = a.id;
        opt.textContent = a.name;
        optGroup.appendChild(opt);
      });
      sel.appendChild(optGroup);
    });
  });
}

// ══════════════════════════════════════════════════════════════
// ARTIFACT GRID
// ══════════════════════════════════════════════════════════════
let currentFilter = 'All';
let searchQuery   = '';

function renderArtifacts() {
  const grid = document.getElementById('artifact-grid');
  if (!grid) return;

  const filtered = artifacts.filter(a => {
    const matchBody   = currentFilter === 'All' || a.body === currentFilter;
    const q           = searchQuery.toLowerCase();
    const matchSearch = !q ||
      a.name.toLowerCase().includes(q) ||
      a.type.toLowerCase().includes(q) ||
      a.location.toLowerCase().includes(q) ||
      a.finalStatus.toLowerCase().includes(q);
    return matchBody && matchSearch;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">No artifacts found. Try a different search or filter.</div>';
    return;
  }

  filtered.forEach((a, i) => {
    // Lifespan bar math
    const isLonger  = a.actualDays > a.plannedDays;
    const maxDays   = Math.max(a.plannedDays, a.actualDays);
    const planPct   = Math.round((a.plannedDays / maxDays) * 100);
    const actPct    = Math.round((a.actualDays  / maxDays) * 100);
    const bodyClass = getBodyClass(a.body);
    const bodyBadge = bodyClass + '-badge';

    const card = document.createElement('div');
    card.className = `artifact-card body-${bodyClass}`;
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="card-header">
        <span class="body-badge ${bodyBadge}">${getBodyEmoji(a.body)} ${a.body}</span>
        <span class="type-badge">${a.type.toUpperCase()}</span>
      </div>
      <div>
        <h3 class="card-name">${a.name}</h3>
        <p class="card-fullname">${a.fullName}</p>
      </div>
      <div class="card-location">
        <span class="location-icon">📍</span>
        <span>${a.location}</span>
      </div>
      <div class="card-coords mono">${a.coordinates}</div>
      <div class="lifespan-section">
        <div class="lifespan-row">
          <span class="lifespan-label">Planned</span>
          <div class="lifespan-bar-container">
            <div class="lifespan-bar planned" style="width:${planPct}%"></div>
          </div>
          <span class="lifespan-value mono">${a.plannedLifespan}</span>
        </div>
        <div class="lifespan-row">
          <span class="lifespan-label">Lasted</span>
          <div class="lifespan-bar-container">
            <div class="lifespan-bar actual" style="width:${actPct}%"></div>
          </div>
          <span class="lifespan-value mono highlight">${a.actualLifespan}</span>
        </div>
      </div>
      <div class="card-status">
        <span class="status-dot ${getStatusClass(a.finalStatus)}"></span>
        <span class="status-text">${a.finalStatus}</span>
      </div>
      <div class="card-dates">
        <span class="date-item"><span class="date-label">Launch</span>${a.launched}</span>
        <span class="date-item"><span class="date-label">Last Signal</span>${a.lastContact}</span>
      </div>
      <button class="open-log-btn" onclick="openModal('${a.id}')">
        <span>Open Explorer's Log</span>
        <span class="btn-icon">→</span>
      </button>
    `;
    grid.appendChild(card);
  });
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderArtifacts();
}

// ══════════════════════════════════════════════════════════════
// TIMELINE
// ══════════════════════════════════════════════════════════════
function renderTimeline() {
  const track = document.getElementById('timeline-track');
  if (!track) return;

  const sorted = [...artifacts].sort((a, b) => {
    return new Date(a.launched.replace(/[a-z]+/gi, '1 $&')) -
           new Date(b.launched.replace(/[a-z]+/gi, '1 $&'));
  });

  sorted.forEach((a, i) => {
    const item = document.createElement('div');
    const bodyClass = getBodyClass(a.body);
    item.className  = `timeline-item body-${bodyClass}`;
    item.style.animationDelay = `${i * 0.06}s`;
    item.innerHTML  = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year mono">${a.launched.slice(-4)}</div>
        <div class="timeline-name">${a.name}</div>
        <div class="timeline-body">${getBodyEmoji(a.body)} ${a.body}</div>
      </div>
    `;
    item.addEventListener('click', () => openModal(a.id));
    track.appendChild(item);
  });
}

// ══════════════════════════════════════════════════════════════
// MODAL
// ══════════════════════════════════════════════════════════════
let currentArtifact = null;
let typeTimeout     = null;

function openModal(id) {
  currentArtifact = artifacts.find(a => a.id === id);
  if (!currentArtifact) return;

  const a = currentArtifact;
  document.getElementById('modal-name').textContent     = a.name;
  document.getElementById('modal-fullname').textContent = a.fullName;
  document.getElementById('modal-type').textContent     = a.type;
  document.getElementById('modal-location').textContent = `📍 ${a.location}`;
  document.getElementById('modal-status').textContent   = `⚫ ${a.finalStatus}`;

  // Set initial tab
  switchTab('log');

  document.getElementById('artifact-modal').classList.add('active');
  document.body.classList.add('modal-open');
}

function closeModal() {
  document.getElementById('artifact-modal').classList.remove('active');
  document.body.classList.remove('modal-open');
  if (typeTimeout) { clearTimeout(typeTimeout); typeTimeout = null; }
}

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  const btn  = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  const pane = document.getElementById(`tab-${tab}`);
  if (btn)  btn.classList.add('active');
  if (pane) pane.classList.add('active');

  if (typeTimeout) { clearTimeout(typeTimeout); typeTimeout = null; }

  switch (tab) {
    case 'log':       renderLogTab();       break;
    case 'legacy':    renderLegacyTab();    break;
    case 'blueprint': renderBlueprintTab(); break;
    case 'terminal':  renderTerminalTab();  break;
  }
}

/* ── Log Tab (Typewriter) ─────────────────────────── */
function renderLogTab() {
  const pane = document.getElementById('tab-log');
  const a    = currentArtifact;
  pane.innerHTML = `
    <div class="log-header">
      <div class="log-icon">${getBodyEmoji(a.body)}</div>
      <div class="log-meta">
        <div class="log-title">Personal Log — ${a.name}</div>
        <div class="log-subtitle mono">LAST SIGNAL: ${a.lastContact.toUpperCase()}</div>
      </div>
    </div>
    <div class="log-text" id="log-output"></div>
  `;

  const el   = document.getElementById('log-output');
  const text = a.narrativeLog;
  let   i    = 0;

  // Cursor
  const cursor = document.createElement('span');
  cursor.className = 'log-cursor';

  function typeNext() {
    if (i < text.length) {
      const ch = text[i++];
      if (ch === '\n') {
        el.appendChild(document.createElement('br'));
      } else {
        el.appendChild(document.createTextNode(ch));
      }
      el.appendChild(cursor);
      el.scrollTop = el.scrollHeight;
      const delay = ch === '.' || ch === '!' || ch === '?' ? 80 : ch === ',' ? 50 : 12;
      typeTimeout = setTimeout(typeNext, delay);
    } else {
      cursor.style.animation = 'blink 1s step-end infinite';
    }
  }
  typeNext();
}

/* ── Legacy Tab ───────────────────────────────────── */
function renderLegacyTab() {
  const pane = document.getElementById('tab-legacy');
  const a    = currentArtifact;
  pane.innerHTML = `
    <h3 class="tab-section-title">Scientific Legacy of ${a.name}</h3>
    <p class="tab-intro">${a.statusDetail}</p>
    <ul class="achievements-list">
      ${a.achievements.map((ach, i) => `
        <li class="achievement-item" style="animation-delay:${i * 0.08}s">
          <span class="achievement-icon">★</span>
          <span>${ach}</span>
        </li>`).join('')}
    </ul>
  `;
}

/* ── Blueprint Tab ────────────────────────────────── */
function renderBlueprintTab() {
  const pane = document.getElementById('tab-blueprint');
  const a    = currentArtifact;
  pane.innerHTML = `
    <h3 class="tab-section-title">Engineering Blueprint: ${a.name}</h3>
    <p style="font-size:0.82rem;color:var(--text-dim);margin-bottom:16px;">
      Instruments and hardware left behind on ${a.body} at ${a.coordinates}
    </p>
    <div class="instruments-grid">
      ${a.instruments.map((inst, i) => `
        <div class="instrument-card" style="animation-delay:${i * 0.08}s">
          <div class="instrument-header">
            <span class="instrument-num">${String(i + 1).padStart(2, '0')}</span>
            <span class="instrument-name">${inst.name}</span>
          </div>
          <p class="instrument-desc">${inst.desc}</p>
        </div>`).join('')}
    </div>
  `;
}

/* ── Terminal Tab ─────────────────────────────────── */
function renderTerminalTab() {
  const pane = document.getElementById('tab-terminal');
  const a    = currentArtifact;
  const t    = a.telemetry;
  pane.innerHTML = `
    <div class="terminal-window">
      <div class="terminal-header">
        <div class="terminal-dots">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <span class="terminal-title">NASA DEEP SPACE NETWORK — ARCHIVED TELEMETRY v2.1</span>
      </div>
      <div class="terminal-body" id="terminal-output"></div>
    </div>
  `;

  const output = document.getElementById('terminal-output');
  const days   = elapsedDays(a.lastContact);
  const lines  = [
    { text: '> INITIALIZING DEEP SPACE NETWORK...', delay: 500, cls: '' },
    { text: '> DSN GOLDSTONE COMPLEX — ANTENNA 34 LOCKED', delay: 300, cls: '' },
    { text: '> SEARCHING ARCHIVED TELEMETRY DATABASE...', delay: 400, cls: '' },
    { text: '> ══════════════════════════════════════════', delay: 150, cls: 'terminal-separator' },
    { text: `> SPACECRAFT:   ${a.name.toUpperCase()} (${a.type.toUpperCase()})`, delay: 100, cls: '' },
    { text: `> MISSION BODY: ${a.body.toUpperCase()}`, delay: 80, cls: '' },
    { text: `> LAUNCHED:     ${a.launched.toUpperCase()}`, delay: 80, cls: '' },
    { text: '> ──────────────────────────────────────────', delay: 80, cls: 'terminal-separator' },
    { text: '> LAST KNOWN POSITION', delay: 80, cls: 'terminal-section' },
    { text: `>   LATITUDE:   ${t.lat}`, delay: 60, cls: '' },
    { text: `>   LONGITUDE:  ${t.lon}`, delay: 60, cls: '' },
    { text: `>   LOCATION:   ${a.location.toUpperCase()}`, delay: 60, cls: '' },
    { text: '> ──────────────────────────────────────────', delay: 80, cls: 'terminal-separator' },
    { text: '> POWER SYSTEMS STATUS', delay: 80, cls: 'terminal-section' },
    { text: `>   BATTERY:    ${t.battery}`, delay: 60, cls: '' },
    { text: `>   POWER OUT:  ${t.signal}`, delay: 60, cls: '' },
    { text: `>   TEMP:       ${t.temp}`, delay: 60, cls: '' },
    { text: '> ──────────────────────────────────────────', delay: 80, cls: 'terminal-separator' },
    { text: '> LAST KNOWN TRANSMISSION', delay: 80, cls: 'terminal-section' },
    { text: `>   TIMESTAMP:  ${t.lastTransmission.toUpperCase()}`, delay: 60, cls: '' },
    { text: `>   DAYS SINCE: ${days} EARTH DAYS`, delay: 60, cls: '' },
    { text: '> ══════════════════════════════════════════', delay: 80, cls: 'terminal-separator' },
    { text: `> CURRENT STATUS: ${t.status}`, delay: 150, cls: 'terminal-error' },
    { text: '> ──────────────────────────────────────────', delay: 80, cls: 'terminal-separator' },
    { text: '> ATTEMPTING CONTACT... ', delay: 600, cls: '' },
    { text: '> ALL FREQUENCIES SCANNED: NO RESPONSE', delay: 200, cls: 'terminal-error' },
    { text: '> SIGNAL POWER RECEIVED: 0.000000 W', delay: 100, cls: 'terminal-error' },
    { text: '> ══════════════════════════════════════════', delay: 100, cls: 'terminal-separator' },
    { text: '> MISSION ARCHIVED. LEGACY PRESERVED.', delay: 100, cls: 'terminal-section' },
    { text: '> AWAITING SIGNAL FROM THE STARS...', delay: 200, cls: 'terminal-section' },
    { text: '> _', delay: 50, cls: '' },
  ];

  let idx = 0;
  function addLine() {
    if (idx >= lines.length) return;
    const { text, delay, cls } = lines[idx++];
    const div = document.createElement('div');
    div.className = `terminal-line${cls ? ' ' + cls : ''}`;
    div.textContent = text;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
    typeTimeout = setTimeout(addLine, delay);
  }
  addLine();
}

// ══════════════════════════════════════════════════════════════
// QUIZ — REVIVE THE ROVER
// ══════════════════════════════════════════════════════════════
let quizState = { artifact: null, q: 0, score: 0 };

function loadQuiz() {
  const sel = document.getElementById('quiz-rover-select');
  if (!sel) return;
  const a = artifacts.find(x => x.id === sel.value);
  if (!a) return;

  quizState = { artifact: a, q: 0, score: 0 };

  // Reset power meter
  const fill   = document.getElementById('power-fill');
  const pctEl  = document.getElementById('power-pct');
  const nameEl = document.getElementById('quiz-rover-name');
  if (fill)   { fill.style.width = '0%'; fill.style.transition = 'none'; }
  if (pctEl)  pctEl.textContent = '0%';
  if (nameEl) nameEl.textContent = a.name;

  renderQuestion();
}

function renderQuestion() {
  const area = document.getElementById('quiz-question-area');
  if (!area) return;
  const { artifact, q } = quizState;
  const question = artifact.quiz[q];

  area.innerHTML = `
    <div class="quiz-progress">Question ${q + 1} of 3 — ${artifact.name}</div>
    <div class="quiz-question">${question.question}</div>
    <div class="quiz-options">
      ${question.options.map((opt, i) => `
        <button class="quiz-option" id="opt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
    </div>
    <div id="quiz-feedback" class="quiz-feedback hidden"></div>
  `;
}

function answerQuiz(selected) {
  const { artifact, q } = quizState;
  const question = artifact.quiz[q];
  const correct  = selected === question.correct;
  if (correct) quizState.score++;

  document.querySelectorAll('.quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === question.correct) btn.classList.add('correct');
    else if (i === selected && !correct) btn.classList.add('wrong');
  });

  const fb = document.getElementById('quiz-feedback');
  fb.classList.remove('hidden');
  fb.className = `quiz-feedback ${correct ? 'correct-feedback' : 'wrong-feedback'}`;

  const isLast = q === 2;
  fb.innerHTML = `
    <strong>${correct ? '✓ Correct!' : '✗ Not quite!'}</strong> ${question.explanation}
    <br>
    <button class="next-q-btn" onclick="${isLast ? 'finishQuiz()' : 'nextQuestion()'}">
      ${isLast ? 'See Results →' : 'Next Question →'}
    </button>
  `;
}

function nextQuestion() {
  quizState.q++;
  renderQuestion();
}

function finishQuiz() {
  const { artifact, score } = quizState;
  const pct = Math.round((score / 3) * 100);

  // Animate power meter
  const fill  = document.getElementById('power-fill');
  const pctEl = document.getElementById('power-pct');
  if (fill) {
    fill.style.transition = 'width 1.5s cubic-bezier(0.4,0,0.2,1)';
    fill.style.width = `${pct}%`;
  }
  let cur = 0;
  const timer = setInterval(() => {
    cur = Math.min(cur + 1, pct);
    if (pctEl) pctEl.textContent = `${cur}%`;
    if (cur >= pct) clearInterval(timer);
  }, 15);

  const area = document.getElementById('quiz-question-area');
  if (!area) return;

  const title  = score === 3 ? '🌟 Fully Revived!'
               : score === 2 ? '⚡ Partial Power Restored'
               : '📡 Signal Detected';
  const desc   = score === 3
    ? `${artifact.name}'s systems are back online! You demonstrated expert knowledge of this historic mission.`
    : score === 2
    ? `${artifact.name} is stirring! Two of three systems restored. One more correct answer would have done it!`
    : `${artifact.name} detected a faint signal. Keep learning about this mission to restore full power!`;

  area.innerHTML = `
    <div class="quiz-results">
      <div class="result-score">${score}/3</div>
      <div class="result-title">${title}</div>
      <div class="result-desc">${desc}</div>
      <button class="next-q-btn" onclick="loadQuiz()">Try Again →</button>
    </div>
  `;
}

// ══════════════════════════════════════════════════════════════
// GUESTBOOK — LEAVE A TRANSMISSION
// ══════════════════════════════════════════════════════════════
const STORAGE_KEY = 'silent-explorers-transmissions';

function loadGuestbook() {
  const wall = document.getElementById('transmission-wall');
  if (!wall) return;
  const messages = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

  if (messages.length === 0) {
    wall.innerHTML = '<div class="no-messages">No transmissions yet. Be the first to send a message to the stars!</div>';
    return;
  }

  wall.innerHTML = [...messages].reverse().slice(0, 25).map(msg => `
    <div class="transmission-item">
      <div class="transmission-header">
        <span class="transmission-to">→ ${msg.rover}</span>
        <span class="transmission-date mono">${msg.date}</span>
      </div>
      <div class="transmission-from">From: ${escapeHtml(msg.name)}</div>
      <div class="transmission-message">${escapeHtml(msg.message)}</div>
    </div>
  `).join('');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function submitTransmission() {
  const roverSel = document.getElementById('transmission-rover');
  const nameEl   = document.getElementById('transmission-name');
  const msgEl    = document.getElementById('transmission-message');
  const btn      = document.getElementById('send-btn');

  if (!roverSel || !msgEl) return;

  const rover   = roverSel.options[roverSel.selectedIndex]?.text || 'Unknown';
  const name    = nameEl?.value.trim() || 'Anonymous Explorer';
  const message = msgEl.value.trim();

  if (!message) {
    msgEl.focus();
    msgEl.style.borderColor = 'rgba(193, 68, 14, 0.5)';
    setTimeout(() => { msgEl.style.borderColor = ''; }, 2000);
    return;
  }

  if (message.length > 280) {
    alert('Keep your transmission under 280 characters!');
    return;
  }

  const messages = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  messages.push({
    rover, name, message,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));

  // Reset form
  if (nameEl) nameEl.value = '';
  msgEl.value = '';
  document.getElementById('char-count').textContent = '0/280';

  // Button feedback
  if (btn) {
    btn.textContent = '✓ Transmission Sent!';
    btn.classList.add('sent');
    setTimeout(() => {
      btn.textContent = 'Send Transmission ↗';
      btn.classList.remove('sent');
    }, 2200);
  }

  loadGuestbook();
}

// ══════════════════════════════════════════════════════════════
// INTERSECTION OBSERVER — section animations
// ══════════════════════════════════════════════════════════════
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.section-animate').forEach(el => observer.observe(el));
}

// ══════════════════════════════════════════════════════════════
// NAVBAR SCROLL EFFECT
// ══════════════════════════════════════════════════════════════
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(10, 11, 16, 0.95)'
      : 'rgba(10, 11, 16, 0.75)';
  }, { passive: true });
}

// ══════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Core
  initStarfield();
  initNavbar();
  initScrollAnimations();
  populateSelects();
  renderArtifacts();
  renderTimeline();
  loadGuestbook();
  loadQuiz();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setFilter(btn.dataset.filter);
      document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value;
      renderArtifacts();
    });
  }

  // Hero chips
  document.querySelectorAll('.hero-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;
      const target = chip.dataset.target;
      if (filter) {
        setFilter(filter);
        document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (target) {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Modal close
  document.getElementById('modal-overlay')?.addEventListener('click', closeModal);
  document.getElementById('modal-close')?.addEventListener('click', closeModal);

  // Modal tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Keyboard escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Quiz rover change
  document.getElementById('quiz-rover-select')?.addEventListener('change', loadQuiz);

  // Guestbook submit
  document.getElementById('send-btn')?.addEventListener('click', submitTransmission);

  // Character counter
  document.getElementById('transmission-message')?.addEventListener('input', e => {
    const counter = document.getElementById('char-count');
    if (counter) counter.textContent = `${e.target.value.length}/280`;
  });

  // Allow Enter in transmission form (Ctrl+Enter)
  document.getElementById('transmission-message')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) submitTransmission();
  });
});
