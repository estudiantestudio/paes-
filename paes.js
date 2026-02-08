const LS_KEY = "paes_only_progress_v1";
const LS_THEME = "paes_only_theme_v1";

const $ = (s) => document.querySelector(s);

initTheme();

const SECTIONS = [
  {
    id: "rules",
    title: "1) Primero: entiende la PAES como un “juego con reglas”",
    tag: "Estrategia",
    html: `
      <p>
        La PAES no premia al que “sabe más”, premia al que:
      </p>
      <ul>
        <li>entiende lo que le están preguntando</li>
        <li>sabe resolver rápido</li>
        <li>evita errores típicos</li>
        <li>maneja bien el tiempo</li>
        <li>practica con formato PAES real</li>
      </ul>
      <p><b>Tu estudio tiene 3 capas:</b></p>
      <ul>
        <li><b>Contenido</b> (aprender)</li>
        <li><b>Habilidades</b> (cómo responder)</li>
        <li><b>Entrenamiento</b> (ensayos + corrección)</li>
      </ul>
    `
  },
  {
    id: "cycle",
    title: "2) La fórmula que SIEMPRE funciona (para cualquier materia)",
    tag: "Método",
    html: `
      <p>Cada tema se estudia con este ciclo:</p>

      <ul>
        <li><b>Paso A: Diagnóstico rápido (5–10 min)</b><br/>
          ¿Lo sé? ¿Lo entiendo? ¿Lo puedo aplicar? <br/>
          Si fallas en “aplicar”, ese tema <b>no está dominado</b>.
        </li>

        <li><b>Paso B: Aprende “lo mínimo útil” (30–60 min)</b><br/>
          Aprende: definición, idea central, pasos, errores típicos, 2–3 ejemplos.
        </li>

        <li><b>Paso C: Practica inmediato (30–60 min)</b><br/>
          10–20 preguntas PAES del mismo tema, con cronómetro.
        </li>

        <li><b>Paso D: Corrección inteligente (lo más importante)</b><br/>
          Clasifica por: contenido / interpretación / tiempo / cálculo / fórmula.<br/>
          Busca patrones repetidos.
        </li>

        <li><b>Paso E: Repetición espaciada</b><br/>
          Repasa: 1 día, 3 días, 7 días después (pocas preguntas, constante).
        </li>
      </ul>
    `
  },
  {
    id: "language",
    title: "3A) Lenguaje / Competencia Lectora",
    tag: "Lenguaje",
    html: `
      <p><b>Secreto:</b> no es leer mucho. Es <b>leer con intención</b>.</p>
      <ul>
        <li>intención del texto</li>
        <li>idea principal</li>
        <li>opinión vs hecho</li>
        <li>evidencia textual</li>
        <li>tipos de preguntas</li>
      </ul>

      <p><b>Rutina súper efectiva:</b></p>
      <ul>
        <li>1 texto corto + 8 preguntas al día</li>
        <li>corrección profunda</li>
        <li>anotar “trampas” típicas</li>
        <li>en corrección: subraya la frase exacta que prueba la respuesta</li>
      </ul>
    `
  },
  {
    id: "m1",
    title: "3B) Matemática M1 (base + velocidad)",
    tag: "M1",
    html: `
      <p>M1 suele incluir: álgebra base, porcentajes, ecuaciones, geometría básica, prob/estadística básica y gráficos.</p>
      <p><b>Cómo estudiarla (por etapas):</b></p>
      <ul>
        <li><b>Etapa 1:</b> fracciones, potencias, raíces, despejes, proporcionalidad y porcentajes</li>
        <li><b>Etapa 2:</b> ejercicios PAES + reconocer el tipo rápido</li>
      </ul>
      <p><b>Regla:</b> M1 mejora con repetición + velocidad.</p>
      <ul>
        <li>20 ejercicios diarios (mezclados)</li>
        <li>corrige y anota el error típico</li>
      </ul>
    `
  },
  {
    id: "m2",
    title: "3C) Matemática M2 (profundidad + modelación)",
    tag: "M2",
    html: `
      <p>M2 es más profunda: funciones, trigonometría, geometría analítica, modelación y análisis.</p>
      <ul>
        <li>primero entiendes concepto con ejemplos</li>
        <li>luego haces ejercicios PAES que mezclan temas</li>
        <li>entrenas identificación rápida</li>
      </ul>
      <p><b>Lo que más sube puntaje:</b></p>
      <ul>
        <li>funciones + gráficos</li>
        <li>trigonometría aplicada</li>
        <li>modelar (texto → ecuación)</li>
      </ul>
    `
  },
  {
    id: "science",
    title: "3D) Ciencias (Bio / Química / Física)",
    tag: "Ciencias",
    html: `
      <p>Ciencias PAES premia aplicar, interpretar gráficos/tablas, conectar conceptos.</p>
      <p><b>Método universal:</b></p>
      <ul>
        <li>Aprende proceso (qué pasa y por qué)</li>
        <li>Haz un esquema simple (a mano)</li>
        <li>Practica preguntas con gráficos</li>
        <li>Corrige buscando el “dato clave” del enunciado</li>
      </ul>
      <p><b>Tips rápidos:</b></p>
      <ul>
        <li><b>Biología:</b> active recall (¿qué pasa si…?)</li>
        <li><b>Química:</b> procedimientos + práctica (si no practicas, se olvida)</li>
        <li><b>Física:</b> dibuja esquema, escribe datos, fórmula al final</li>
      </ul>
    `
  },
  {
    id: "history",
    title: "3E) Historia",
    tag: "Historia",
    html: `
      <p>Historia PAES premia comprensión de procesos, causa–consecuencia, comparación y lectura de fuentes.</p>
      <ul>
        <li>línea de tiempo por unidad</li>
        <li>causa → desarrollo → consecuencias</li>
        <li>conceptos clave (Estado, democracia, dictadura, modelos económicos)</li>
        <li>práctica con fuentes: ¿qué muestra y por qué importa?</li>
      </ul>
      <p><b>Tip:</b> 70% comprensión/relaciones + 30% memoria (fechas y nombres).</p>
    `
  },
  {
    id: "multi",
    title: "4) Cómo organizarte si estudias todas las materias",
    tag: "Organización",
    html: `
      <p>No estudies 6 materias todos los días. Te revienta.</p>
      <p><b>Sistema eficiente:</b></p>
      <ul>
        <li>2 materias fuertes por día</li>
        <li>1 mini repaso (15–20 min)</li>
        <li>Ejemplo: 60–90 min Matemática + 60–90 min Ciencias/Lenguaje + 20 min repaso</li>
      </ul>
    `
  },
  {
    id: "mock",
    title: "5) Ensayos: cómo usarlos SIN perder tiempo",
    tag: "Ensayos",
    html: `
      <p>Los ensayos sirven si los <b>corriges</b>.</p>
      <p><b>Regla 80/20:</b> 20% hacer ensayo, 80% corrección + cuaderno de errores.</p>
      <p><b>Tu cuaderno de errores:</b></p>
      <ul>
        <li>pregunta</li>
        <li>por qué fallé</li>
        <li>qué concepto faltó</li>
        <li>cómo lo resuelvo bien</li>
        <li>mini ejercicio parecido</li>
      </ul>
    `
  },
  {
    id: "mindset",
    title: "6) La parte mental: cómo no rendirte",
    tag: "Mental",
    html: `
      <ul>
        <li>No esperes motivación → crea rutina</li>
        <li>Los malos resultados al inicio son normales</li>
        <li>Progreso real = menos errores repetidos + más velocidad + más seguridad</li>
      </ul>
    `
  },
  {
    id: "plan",
    title: "7) Plan base (simple y potente)",
    tag: "Plan",
    html: `
      <p><b>Todos los días:</b></p>
      <ul>
        <li>30 min Matemática (ejercicios)</li>
        <li>30 min Lenguaje (1 texto + preguntas)</li>
        <li>30–60 min Ciencias o Historia (alternando)</li>
        <li>15 min repaso (errores o flashcards)</li>
      </ul>
      <p><b>2–3 veces por semana:</b> 1 ensayo parcial o completo + corrección.</p>

      <div class="planChecks" id="planChecks"></div>
    `
  }
];

const state = load(LS_KEY) || { done: {}, lastId: "rules", plan: {} };

renderNav();
renderSections();
wireSearch();
wireContinue();
wireReset();
updateStats();

function renderNav(){
  const nav = $("#nav");
  nav.innerHTML = SECTIONS.map(s => `
    <a href="#${s.id}" data-id="${s.id}">
      <span>${s.title}</span>
      <span class="tag">${s.tag}</span>
    </a>
  `).join("");

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      state.lastId = a.dataset.id;
      save(LS_KEY, state);
    });
  });
}

function renderSections(){
  const wrap = $("#sections");
  wrap.innerHTML = SECTIONS.map(s => {
    const checked = !!state.done[s.id];
    return `
      <section class="sectionCard" id="${s.id}" data-title="${escape(stripHtml(s.title + " " + s.tag))}">
        <div class="sectionHead">
          <div>
            <h2 class="sectionTitle">${s.title}</h2>
            <div class="sectionMeta">${s.tag}</div>
          </div>
          <label class="check">
            <input type="checkbox" data-done="${s.id}" ${checked ? "checked" : ""}/>
            <span>Marcar como completado</span>
          </label>
        </div>
        <div class="sectionBody">${s.html}</div>
      </section>
    `;
  }).join("");

  // checkbox done
  wrap.querySelectorAll("input[type='checkbox'][data-done]").forEach(cb => {
    cb.addEventListener("change", () => {
      const id = cb.dataset.done;
      state.done[id] = cb.checked;
      state.lastId = id;
      save(LS_KEY, state);
      updateStats();
    });
  });

  renderPlanChecks();
}

function renderPlanChecks(){
  const box = $("#planChecks");
  if(!box) return;

  const items = [
    ["math","30 min Matemática (ejercicios)"],
    ["lang","30 min Lenguaje (1 texto + preguntas)"],
    ["scihis","30–60 min Ciencias o Historia (alternando)"],
    ["review","15 min repaso (errores/flashcards)"],
    ["mock","2–3 veces/semana: ensayo + corrección"],
  ];

  box.innerHTML = items.map(([k,label]) => `
    <label class="check" style="margin-top:8px;">
      <input type="checkbox" data-plan="${k}" ${state.plan?.[k] ? "checked" : ""}/>
      <span>${label}</span>
    </label>
  `).join("");

  box.querySelectorAll("input[data-plan]").forEach(cb => {
    cb.addEventListener("change", () => {
      const k = cb.dataset.plan;
      state.plan[k] = cb.checked;
      save(LS_KEY, state);
    });
  });
}

function wireSearch(){
  const input = $("#searchInput");
  input.addEventListener("input", () => {
    const q = (input.value || "").trim().toLowerCase();
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if(!el) return;
      const hay = (el.dataset.title || "").toLowerCase();
      // También buscamos dentro del texto visible
      const text = (el.innerText || "").toLowerCase();
      const show = !q || hay.includes(q) || text.includes(q);
      el.style.display = show ? "" : "none";
    });
  });
}

function wireContinue(){
  $("#continueBtn").addEventListener("click", () => {
    const id = state.lastId || "rules";
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior:"smooth", block:"start" });
  });

  // guardar último leído por scroll (simple)
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b)=> b.intersectionRatio - a.intersectionRatio)[0];
    if(visible?.target?.id){
      state.lastId = visible.target.id;
      save(LS_KEY, state);
    }
  }, { threshold: [0.3, 0.6, 0.9] });

  SECTIONS.forEach(s => {
    const el = document.getElementById(s.id);
    if(el) observer.observe(el);
  });
}

function wireReset(){
  $("#resetBtn").addEventListener("click", () => {
    if(!confirm("¿Reiniciar progreso de esta guía?")) return;
    localStorage.removeItem(LS_KEY);
    location.reload();
  });
}

/* --------- THEME --------- */
function initTheme(){
  const saved = load(LS_THEME)?.theme || "dark";
  document.documentElement.dataset.theme = saved;
  $("#themeIcon").textContent = (saved === "light") ? "☀️" : "🌙";

  $("#themeBtn").addEventListener("click", () => {
    const next = (document.documentElement.dataset.theme === "light") ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    $("#themeIcon").textContent = (next === "light") ? "☀️" : "🌙";
    save(LS_THEME, { theme: next });
  });
}

/* --------- STATS --------- */
function updateStats(){
  const total = SECTIONS.length;
  const doneCount = SECTIONS.reduce((acc, s) => acc + (state.done[s.id] ? 1 : 0), 0);
  const pct = total ? Math.round((doneCount/total)*100) : 0;

  $("#progressVal").textContent = `${pct}%`;
  $("#doneVal").textContent = `${doneCount}/${total}`;
}

/* --------- HELPERS --------- */
function save(key, obj){ localStorage.setItem(key, JSON.stringify(obj)); }
function load(key){
  try{ return JSON.parse(localStorage.getItem(key) || "null"); }
  catch{ return null; }
}

function escape(s){
  return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
}
function stripHtml(s){ return String(s).replace(/<[^>]*>/g, " "); }
