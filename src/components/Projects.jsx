import React, { useEffect, useState } from "react"
import { Star, GitFork, ExternalLink, FolderGit2 } from "lucide-react"
import useReveal from "../hooks/useReveal"
import { githubUsername, pinnedRepos } from "../data/content"

const LANGUAGE_COLORS = {
  JavaScript: "#eab308",
  TypeScript: "#3b82f6",
  Java: "#f97316",
  Python: "#22c55e",
  HTML: "#f43f5e",
  CSS: "#8b5cf6",
  "C#": "#a855f7",
  Swift: "#f97316",
  Shell: "#64748b",
}

// GitHub's per-repo REST endpoint is CORS-enabled (unlike third-party pinned
// scrapers), so each hardcoded pinned repo gets refreshed live stats here.
// A failed fetch just keeps the static fallback for that one card.
async function withLiveStats(repo) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${githubUsername}/${repo.name}`
    )
    if (!res.ok) throw new Error("not ok")
    const data = await res.json()
    return {
      name: repo.name,
      description: data.description || repo.description,
      language: data.language || repo.language,
      url: data.html_url || `https://github.com/${githubUsername}/${repo.name}`,
      stars: data.stargazers_count ?? null,
      forks: data.forks_count ?? null,
    }
  } catch {
    return {
      name: repo.name,
      description: repo.description,
      language: repo.language,
      url: `https://github.com/${githubUsername}/${repo.name}`,
      stars: null,
      forks: null,
    }
  }
}

function ProjectCard({ repo, index }) {
  const [ref, visible] = useReveal()
  return (
    <a
      ref={ref}
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
      className={
        "group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg dark:border-slate-800 dark:bg-white/[0.03] dark:hover:border-emerald-400/60 " +
        (visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")
      }
    >
      <div>
        <div className="flex items-start justify-between">
          <FolderGit2 className="text-emerald-500" size={22} />
          <ExternalLink
            size={16}
            className="text-slate-300 transition group-hover:text-emerald-500 dark:text-slate-600"
          />
        </div>
        <h3 className="mt-3 truncate font-mono text-base font-semibold text-slate-900 dark:text-white">
          {repo.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {repo.description || "No description provided."}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: LANGUAGE_COLORS[repo.language] || "#94a3b8",
              }}
            />
            {repo.language}
          </span>
        )}
        {repo.stars !== null && (
          <span className="flex items-center gap-1">
            <Star size={13} /> {repo.stars}
          </span>
        )}
        {repo.forks !== null && (
          <span className="flex items-center gap-1">
            <GitFork size={13} /> {repo.forks}
          </span>
        )}
      </div>
    </a>
  )
}

function SkeletonCard() {
  return (
    <div className="h-48 animate-pulse rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-white/5" />
  )
}

export default function Projects() {
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    let cancelled = false
    Promise.all(pinnedRepos.map(withLiveStats)).then(list => {
      if (!cancelled) setRepos(list)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="section-heading">Projects</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Things I've built
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500 dark:text-slate-400">
            My pinned repos on{" "}
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-emerald-500 hover:underline"
            >
              github.com/{githubUsername}
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos === null
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : repos.map((repo, i) => (
                <ProjectCard key={repo.name} repo={repo} index={i} />
              ))}
        </div>
      </div>
    </section>
  )
}
