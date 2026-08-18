import React from "react"
import { MapPin } from "lucide-react"
import useReveal from "../hooks/useReveal"
import { experience } from "../data/content"

// Gatsby (webpack) doesn't support Vite's import.meta.glob, so logos are
// resolved with a plain require, same as the old ExperienceCard component.
function logoFor(filename) {
  return require("../assets/img/" + filename)
}

function ExperienceItem({ item, index }) {
  const [ref, visible] = useReveal()
  const isLast = index === experience.length - 1

  return (
    <div ref={ref} className="relative flex gap-6 pb-12 last:pb-0">
      {/* Rail */}
      <div className="flex flex-col items-center">
        <div
          className={
            "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-white shadow-md transition-all duration-500 dark:bg-ink-900 " +
            (item.current
              ? "border-emerald-400"
              : "border-slate-200 dark:border-slate-700") +
            (visible ? " scale-100 opacity-100" : " scale-75 opacity-0")
          }
        >
          <img
            src={logoFor(item.image)}
            alt={item.company}
            className="h-full w-full object-contain p-1.5"
          />
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700" />
        )}
      </div>

      {/* Content */}
      <div
        className={
          "flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-700 dark:border-slate-800 dark:bg-white/[0.03] " +
          (visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")
        }
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {item.position}
            </h3>
            <p className="font-medium text-emerald-600 dark:text-emerald-400">
              {item.company}
            </p>
          </div>
          <div className="text-right">
            <div className="font-mono text-sm text-slate-500 dark:text-slate-400">
              {item.timeline}
            </div>
            <div className="mt-1 flex items-center justify-end gap-1 text-xs text-slate-400 dark:text-slate-500">
              <MapPin size={12} />
              {item.location}
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            {item.type}
          </span>
          {item.current && (
            <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white dark:bg-white dark:text-ink-950">
              Current
            </span>
          )}
        </div>

        <ul className="mt-4 space-y-2">
          {item.roles.map((role, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
              {role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative bg-slate-50 py-28 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <p className="section-heading">Career</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Where I've worked
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500 dark:text-slate-400">
            From the plant floor to production engineering at Microsoft — the
            path so far.
          </p>
        </div>

        <div>
          {experience.map((item, index) => (
            <ExperienceItem key={`${item.company}-${item.timeline}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
