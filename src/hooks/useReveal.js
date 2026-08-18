import { useEffect, useRef, useState } from "react"

// Lightweight scroll-reveal hook.
// Returns a ref to attach and a boolean flipped true once the element
// has entered the viewport (stays true — no re-hide on scroll away).
export default function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return [ref, visible]
}
