// Performance Optimization Utilities

// Debounce function for search and input
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for scroll and resize events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Lazy load images
export function lazyLoadImage(img: HTMLImageElement) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLImageElement
        target.src = target.dataset.src || ""
        target.classList.add("loaded")
        observer.unobserve(target)
      }
    })
  })
  observer.observe(img)
}

// Preload critical resources
export function preloadResource(href: string, as: string) {
  const link = document.createElement("link")
  link.rel = "preload"
  link.href = href
  link.as = as
  document.head.appendChild(link)
}

// Memory cleanup for animations
export function cleanupAnimation(animationId: number) {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
}

// Optimize canvas rendering
export function optimizeCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d", {
    alpha: true,
    desynchronized: true, // Better performance
    willReadFrequently: false
  })
  return ctx
}

// Check if reduced motion is preferred
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Adaptive performance based on device
export function getPerformanceLevel(): "high" | "medium" | "low" {
  const memory = (performance as any).memory
  const cores = navigator.hardwareConcurrency || 2

  if (memory && memory.jsHeapSizeLimit < 1000000000) return "low"
  if (cores < 4) return "medium"
  return "high"
}

// Optimize snow particles based on performance
export function getOptimalSnowflakeCount(): number {
  const level = getPerformanceLevel()
  const reduced = prefersReducedMotion()

  if (reduced) return 0
  if (level === "low") return 50
  if (level === "medium") return 100
  return 150
}

// Request idle callback wrapper
export function runWhenIdle(callback: () => void) {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(callback)
  } else {
    setTimeout(callback, 1)
  }
}

// Batch DOM updates
export function batchDOMUpdates(updates: (() => void)[]) {
  requestAnimationFrame(() => {
    updates.forEach((update) => update())
  })
}

// Memoize expensive calculations
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map()
  return ((...args: any[]) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)
    const result = fn(...args)
    cache.set(key, result)
    return result
  }) as T
}

// Virtual scrolling helper
export function calculateVisibleItems(
  scrollTop: number,
  itemHeight: number,
  containerHeight: number,
  totalItems: number
) {
  const startIndex = Math.floor(scrollTop / itemHeight)
  const endIndex = Math.min(
    Math.ceil((scrollTop + containerHeight) / itemHeight),
    totalItems
  )
  return { startIndex, endIndex }
}

// Image optimization
export function getOptimizedImageUrl(
  url: string,
  width: number,
  quality: number = 80
): string {
  // Add your CDN optimization parameters
  return `${url}?w=${width}&q=${quality}&auto=format`
}

// Preconnect to external domains
export function preconnectDomain(domain: string) {
  const link = document.createElement("link")
  link.rel = "preconnect"
  link.href = domain
  document.head.appendChild(link)
}

// Monitor performance metrics
export function monitorPerformance() {
  if ("PerformanceObserver" in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          console.log("LCP:", entry.startTime)
        }
        if (entry.entryType === "first-input") {
          console.log("FID:", (entry as any).processingStart - entry.startTime)
        }
      }
    })
    observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] })
  }
}

// Cleanup event listeners
export function cleanupEventListeners(
  element: HTMLElement | Window,
  events: { type: string; handler: EventListener }[]
) {
  events.forEach(({ type, handler }) => {
    element.removeEventListener(type, handler)
  })
}
