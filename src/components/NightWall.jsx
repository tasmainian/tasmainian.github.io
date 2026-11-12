import React, { useEffect, useMemo, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import resume from "../assets/pdf/resume.pdf"
import climbing from "../assets/img/climbing.jpg"
import hiking from "../assets/img/hiking.jpg"
import snowboarding from "../assets/img/snowboarding.jpg"
import { pitches, rack, links } from "../data/nightWall"

const C = {
  bg: "#101329",
  ink: "#ECEBFF",
  soft: "#C5C8EE",
  muted: "#8E93C9",
  line: "#2F3570",
  coral: "#FF8364",
  coralText: "#FF9A80",
  mint: "#7CF5C4",
}
const archivo = "Archivo, sans-serif"
const mono = "'JetBrains Mono', monospace"

const photos = [
  { src: climbing, cap: "climbing", alt: "Tasmiha belaying at the top of a granite climb above a river canyon" },
  { src: hiking, cap: "hiking", alt: "Tasmiha standing on a rocky summit above lakes and forest" },
  { src: snowboarding, cap: "snowboarding", alt: "Tasmiha smiling on a snowy slope with her snowboard and mountain peaks behind" },
]

const box = {
  flex: "0 0 30px",
  height: 30,
  border: `1.5px solid ${C.ink}`,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

function Topo() {
  return (
    <svg viewBox="0 0 1440 960" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
      <g fill="none" stroke="#2A2F63" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
        <path d="M-20,760 L180,700 L260,560 L420,520 L520,380 L700,330 L780,180 L960,120 L1100,-20" />
        <path d="M120,980 L240,800 L420,770 L560,640 L760,610 L880,470 L1080,430 L1200,280 L1460,220" />
        <path d="M-20,420 L140,380 L220,250 L400,210 L470,90 L640,40 L700,-20" />
        <path d="M600,980 L720,820 L900,800 L1010,680 L1220,650 L1320,520 L1460,500" />
        <path d="M260,560 L330,600 L420,770" />
        <path d="M700,330 L760,400 L760,610" />
        <path d="M1080,430 L1040,330 L960,120" />
        <path d="M1000,980 L1120,880 L1300,860 L1460,760" />
      </g>
      <g fill="none" stroke="#1E2250" strokeWidth="1" vectorEffect="non-scaling-stroke">
        <path d="M-20,600 L120,560 L200,440 L360,400 L440,270 L610,220 L680,90 L840,30 L900,-20" />
        <path d="M340,980 L460,840 L640,810 L760,700 L960,670 L1080,540 L1280,500 L1380,360 L1460,340" />
        <path d="M-20,900 L100,860 L180,780" />
      </g>
      <g fill="#4B51A0">
        {[[120, 80], [340, 140], [860, 60], [1240, 110], [1360, 300], [60, 300], [1180, 780], [520, 900]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.5" />
        ))}
      </g>
    </svg>
  )
}

// First-load route animation: the line is traced pitch by pitch from the ground up,
// at a climber's pace — pull up on the move, settle into the next belay.
const PITCH_STAGGER = 900
const TRACE_MS = 740
const TRACE_EASE = "cubic-bezier(0.5, 0.05, 0.3, 1)"
const SETTLE_EASE = "cubic-bezier(0.22, 0.9, 0.3, 1)"

// The route is drawn as individual dashes rather than a stroke-dasharray line,
// so the glow can walk it one dash at a time. DASH_PITCH is the spacing in px.
const DASH_PITCH = 9

// Click glow: each dash takes GLOW_MS to come up and the next one starts
// GLOW_STEP later, so the light crawls the route dash by dash.
const GLOW_STEP = 17
const GLOW_MS = 520
const GLOW_EASE = "cubic-bezier(0.4, 0, 0.3, 1)"

// Measured in px, because evenly spaced dashes need real geometry — the wall is
// sized by flex and is not square, so percentages would bunch them up.
function useWallSize(ref) {
  const [size, setSize] = useState({ w: 0, h: 0 })
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const read = () => setSize({ w: el.clientWidth, h: el.clientHeight })
    read()
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", read)
      return () => window.removeEventListener("resize", read)
    }
    const ro = new ResizeObserver(read)
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])
  return size
}

// One entry per dash, ordered from the ground up: seg is the pitch it climbs to,
// f how far along that pitch it sits.
function buildDashes(w, h) {
  if (!w || !h) return []
  const pts = pitches.map(p => ({ x: (parseFloat(p.x) / 100) * w, y: (parseFloat(p.y) / 100) * h }))
  const out = []
  for (let seg = 1; seg < pts.length; seg += 1) {
    const a = pts[seg - 1]
    const b = pts[seg]
    const steps = Math.max(1, Math.round(Math.hypot(b.x - a.x, b.y - a.y) / DASH_PITCH))
    for (let k = 1; k <= steps; k += 1) {
      const f = k / steps
      out.push({ x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f, seg, f })
    }
  }
  return out
}

// Returns how many pitches have been reached so far; jumps straight to the top
// for visitors who ask for reduced motion.
function useRouteReveal(count) {
  const [revealed, setRevealed] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setRevealed(count)
      return undefined
    }
    let at = 1
    setRevealed(at)
    const id = setInterval(() => {
      at += 1
      setRevealed(at)
      if (at >= count) clearInterval(id)
    }, PITCH_STAGGER)
    return () => clearInterval(id)
  }, [count])
  return revealed
}

function Wall({ picked, onPick }) {
  const revealed = useRouteReveal(pitches.length)
  const done = revealed >= pitches.length
  const lead = pitches[revealed - 1] || pitches[0]
  // Everything climbed up to the picked pitch lights up; the rest stays cold.
  const pickedAt = pitches.findIndex(p => p.id === picked)
  const wall = useRef(null)
  const { w, h } = useWallSize(wall)
  const dashes = useMemo(() => buildDashes(w, h), [w, h])

  // The glow starts where the route actually changes, not at the ground —
  // extending up from a lit pitch should light the next dash right away.
  const prevPick = useRef(pickedAt)
  useEffect(() => {
    prevPick.current = pickedAt
  }, [pickedAt])
  const from = Math.min(prevPick.current, pickedAt)
  const lead0 = useMemo(() => dashes.filter(d => d.seg <= from).length, [dashes, from])

  return (
    <div ref={wall} className="relative min-w-0" style={{ flex: "1 1 440px", minHeight: 820 }}>
      <div className="absolute left-0 top-0" style={{ fontSize: 11, color: C.muted, lineHeight: 1.7 }}>
        49°16'N 123°07'W<br />topo · not to scale<br />start bottom-left ↗
      </div>
      <svg viewBox={`0 0 ${w || 1} ${h || 1}`} className="absolute inset-0 w-full h-full" aria-hidden="true">
        {dashes.map((d, g) => {
          const shown = revealed >= d.seg + 1
          const lit = d.seg <= pickedAt
          // On load a dash waits its turn within the move it belongs to; after the
          // route is up, the glow runs dash by dash from wherever it left off.
          const delay = done ? (lit ? Math.max(0, g - lead0) * GLOW_STEP : 0) : Math.round(d.f * TRACE_MS)
          return (
            <circle
              key={`${d.seg}-${g}`}
              cx={d.x} cy={d.y} r="1.1"
              fill={lit ? C.coralText : C.coral}
              stroke={lit ? C.coralText : C.coral}
              strokeWidth={lit ? 1.1 : 0}
              style={{
                opacity: shown ? (lit ? 1 : 0.42) : 0,
                filter: lit ? "drop-shadow(0 0 3px rgba(255,154,128,0.95)) drop-shadow(0 0 7px rgba(255,131,100,0.55))" : "none",
                transition: [
                  `opacity ${done ? GLOW_MS : TRACE_MS}ms ${GLOW_EASE} ${delay}ms`,
                  `fill ${GLOW_MS}ms ${GLOW_EASE} ${delay}ms`,
                  `stroke-width ${GLOW_MS}ms ${GLOW_EASE} ${delay}ms`,
                  `filter ${GLOW_MS}ms ${GLOW_EASE} ${delay}ms`,
                ].join(", "),
              }}
            />
          )
        })}
      </svg>
      {pitches.map((p, i) => {
        const on = p.id === picked
        const up = revealed > i
        // Bolts clip in as the climber arrives, so they wait out the move below them.
        const arrive = i === 0 || !up ? 0 : TRACE_MS
        return (
          <React.Fragment key={p.id}>
            <button
              type="button"
              onClick={() => onPick(p.id)}
              aria-label={`pitch ${p.num}: ${p.title}`}
              aria-pressed={on}
              className="absolute rounded-full cursor-pointer"
              style={{
                left: p.x, top: p.y, width: 48, height: 48, margin: "-24px 0 0 -24px",
                border: `2px solid ${C.mint}`,
                background: on ? C.mint : C.bg,
                color: on ? C.bg : C.mint,
                font: `700 13px ${mono}`,
                boxShadow: on ? "0 0 0 9px rgba(124,245,196,0.16), 0 0 0 20px rgba(124,245,196,0.07)" : "none",
                opacity: up ? 1 : 0,
                transform: up ? "scale(1)" : "scale(0.6)",
                transition: `opacity 440ms ease ${arrive}ms, transform 620ms ${SETTLE_EASE} ${arrive}ms, background 300ms ease, color 300ms ease, box-shadow 400ms ease`,
              }}
            >
              {p.n}
            </button>
            <div className="absolute whitespace-nowrap" aria-hidden="true"
              style={{
                left: p.x, top: p.y, margin: "-16px 0 0 40px", fontSize: 12, lineHeight: 1.5,
                opacity: up ? 1 : 0,
                transform: up ? "none" : "translateX(-8px)",
                transition: `opacity 560ms ease ${arrive + 180}ms, transform 560ms ${SETTLE_EASE} ${arrive + 180}ms`,
              }}>
              <span style={{ color: C.ink }}>{p.tag}</span><br />
              <span style={{ color: C.muted }}>{p.grade} <span style={{ color: C.coralText }}>{p.stars}</span></span>
            </div>
          </React.Fragment>
        )
      })}
      <div
        className="absolute rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          left: lead.x, top: lead.y, width: 54, height: 54, margin: "-27px 0 0 -27px",
          border: `2px solid ${C.coral}`,
          boxShadow: "0 0 0 8px rgba(255,131,100,0.14)",
          opacity: revealed > 0 && !done ? 1 : 0,
          // Hold on until the last move has landed, then let go of the route.
          transition: `left ${TRACE_MS}ms ${TRACE_EASE}, top ${TRACE_MS}ms ${TRACE_EASE}, opacity 700ms ease ${done ? TRACE_MS + 320 : 0}ms`,
        }}
      />
      <div className="absolute left-0 bottom-0" style={{ fontSize: 11, color: C.muted }}>ground · hamilton, on</div>
    </div>
  )
}

function PitchCard({ p }) {
  return (
    <section className="flex flex-col" style={{ border: `1px solid ${C.line}`, borderRadius: 16, padding: 22, gap: 14 }}>
      <div className="flex items-start" style={{ gap: 12 }}>
        <span className="rounded-full flex items-center justify-center"
          style={{ flex: "0 0 30px", height: 30, background: C.coral, color: C.bg, fontWeight: 700, fontSize: 13 }}>
          {p.num}
        </span>
        <div className="min-w-0" style={{ flex: "1 1 0" }}>
          <h2 style={{ margin: 0, fontFamily: archivo, fontWeight: 800, fontSize: 24, lineHeight: 1.15 }}>
            {p.title}{" "}
            <span style={{ fontWeight: 500, fontSize: 18, color: C.soft }}>{p.grade}</span>{" "}
            <span style={{ fontSize: 16, color: C.coralText, letterSpacing: "0.08em" }} aria-label={`${p.stars.length} stars`}>{p.stars}</span>
          </h2>
          <div style={{ marginTop: 4, fontSize: 13, color: C.muted }}>{p.where}</div>
        </div>
        <span style={box} role="img" aria-label={p.kind}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={p.icon} /></svg>
        </span>
        <span style={box} role="img" aria-label={p.sent ? "sent" : "not sent yet"}>
          {p.sent && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.mint} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-11" /></svg>
          )}
        </span>
      </div>
      <div className="flex flex-col" style={{ gap: 10 }}>
        {p.beta.map(t => (
          <div key={t} className="flex" style={{ gap: 12, fontSize: 13.5, lineHeight: 1.6 }}>
            <span style={{ color: C.coralText }} aria-hidden="true">×</span><span>{t}</span>
          </div>
        ))}
      </div>
      {p.photos && (
        <div className="grid grid-cols-3" style={{ gap: 8 }}>
          {photos.map(ph => (
            <figure key={ph.cap} className="m-0 flex flex-col" style={{ gap: 6 }}>
              <img src={ph.src} alt={ph.alt} className="block w-full object-cover" style={{ aspectRatio: "4 / 5", borderRadius: 10 }} />
              <figcaption style={{ fontSize: 11, color: C.muted }}>{ph.cap}</figcaption>
            </figure>
          ))}
        </div>
      )}
      <div style={{ fontSize: 12, fontStyle: "italic", color: C.muted, lineHeight: 1.6 }}>
        <span style={{ fontStyle: "normal", fontWeight: 700, color: C.soft }}>Gear:</span> {p.gear}
      </div>
    </section>
  )
}

const pill = {
  display: "inline-flex", alignItems: "center", minHeight: 46, padding: "0 20px",
  borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: "none",
}

export default function NightWall() {
  const [picked, setPicked] = useState("p5")
  const cur = pitches.find(p => p.id === picked)

  return (
    <>
      <Helmet>
        <title>Tasmiha Hassan · Software Engineer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,500;100..125,800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="night-wall relative min-h-screen box-border overflow-hidden"
        style={{ background: C.bg, color: C.ink, fontFamily: `'JetBrains Mono', ui-monospace, monospace`, padding: "28px 24px 40px" }}>
        <Topo />
        <div className="relative mx-auto flex flex-wrap items-stretch" style={{ maxWidth: 1240, gap: 32 }}>
          <Wall picked={picked} onPick={setPicked} />

          <div className="min-w-0 self-start flex flex-col"
            style={{ flex: "1 1 420px", maxWidth: 560, gap: 24, padding: 28, background: "rgba(16,19,41,0.88)", border: `1px solid ${C.line}`, borderRadius: 20 }}>
            <header className="flex flex-col" style={{ gap: 10 }}>
              <div style={{ fontSize: 13, color: C.muted }}>guidebook · software engineer</div>
              <h1 className="uppercase" style={{ margin: 0, fontFamily: archivo, fontStretch: "125%", fontWeight: 800, fontSize: "clamp(38px, 4.8vw, 64px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                Tasmiha Hassan
              </h1>
              <div className="flex flex-wrap" style={{ gap: "8px 20px", fontSize: 14, color: C.soft }}>
                <span>5 pitches</span><span>grade 5.12a</span><span>first ascent ongoing</span>
                <span style={{ color: C.mint }}>next pitch: open</span>
              </div>
            </header>

            <PitchCard p={cur} />

            <section className="flex flex-col" style={{ gap: 8 }}>
              <div style={{ fontSize: 12, letterSpacing: "0.1em", color: C.muted }}>RACK (GEAR)</div>
              <div style={{ fontSize: 13, lineHeight: 1.8 }}>{rack.join(" · ")}</div>
            </section>

            <nav className="flex flex-wrap" style={{ gap: 10 }}>
              <a href={resume} target="_blank" rel="noopener noreferrer" style={{ ...pill, background: C.coral, color: C.bg }}>résumé (pdf)</a>
              <a href={links.linkedin} style={{ ...pill, border: `1px solid ${C.coral}`, color: C.coralText }}>linkedin</a>
              <a href={links.github} style={{ ...pill, border: `1px solid ${C.coral}`, color: C.coralText }}>github</a>
              <a href={links.v1} style={{ ...pill, padding: "0 8px", fontWeight: 400, fontSize: 13, color: C.muted, textDecoration: "underline" }}>old route (v1)</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
