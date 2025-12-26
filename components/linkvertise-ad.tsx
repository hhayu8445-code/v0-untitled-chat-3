"use client"

export function LinkvertiseAd() {
  return (
    <div className="flex justify-center my-6">
      <div style={{ position: "relative" }}>
        <iframe
          src="https://publisher.linkvertise.com/cdn/ads/LV-468x60/index.html"
          frameBorder="0"
          height="60"
          width="468"
          title="Advertisement"
        />
        <a
          href="https://publisher.linkvertise.com/ac/1461354"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          aria-label="Advertisement"
        />
      </div>
    </div>
  )
}
