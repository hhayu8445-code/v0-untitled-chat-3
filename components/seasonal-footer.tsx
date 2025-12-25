"use client"

import { useEffect, useState } from "react"
import { getCurrentHoliday } from "@/lib/holiday-theme"
import { Heart, Github, MessageCircle } from "lucide-react"
import Link from "next/link"

export function SeasonalFooter() {
  const [holiday, setHoliday] = useState(getCurrentHoliday())

  useEffect(() => {
    setHoliday(getCurrentHoliday())
  }, [])

  const color = holiday ? holiday.theme.primary : "oklch(0.75 0.15 180)"
  const seasonalMessage = holiday ? holiday.name : "FiveM Tools V7"

  return (
    <>
      <footer className="seasonal-footer" style={{ "--footer-color": color } as any}>
        {/* Seasonal Banner */}
        {holiday && (
          <div className="seasonal-banner">
            <span className="seasonal-text">{seasonalMessage}</span>
          </div>
        )}

        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-section">
              <div className="footer-brand">
                <div className="brand-icon">FT</div>
                <span className="brand-text">FiveM Tools V7</span>
              </div>
              <p className="footer-desc">
                #1 FiveM Resource Hub for Scripts, MLO, Vehicles & More
              </p>
            </div>

            {/* Links */}
            <div className="footer-section">
              <h4 className="footer-title">Resources</h4>
              <ul className="footer-links">
                <li><Link href="/scripts">Scripts</Link></li>
                <li><Link href="/mlo">MLO Maps</Link></li>
                <li><Link href="/vehicles">Vehicles</Link></li>
                <li><Link href="/clothing">Clothing</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Community</h4>
              <ul className="footer-links">
                <li><Link href="/forum">Forum</Link></li>
                <li><Link href="/discord">Discord</Link></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div className="footer-section">
              <h4 className="footer-title">Connect</h4>
              <div className="social-links">
                <a href="https://github.com" target="_blank" className="social-btn">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://discord.gg/tZXg4GVRM5" target="_blank" className="social-btn">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="copyright">© 2025 FiveM Tools V7. All rights reserved.</p>
            <div className="made-with">
              <span>Made with</span>
              <Heart className="heart-icon" />
              <span>by FiveM Community</span>
            </div>
          </div>
        </div>

        {/* Animated Background */}
        <div className="footer-bg-glow" />
      </footer>

      <style jsx>{`
        .seasonal-footer {
          position: relative;
          margin-top: 80px;
          background: radial-gradient(
              47.2% 50% at 50.39% 88.37%,
              rgba(255, 255, 255, 0.06) 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .seasonal-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px;
          background: linear-gradient(90deg, transparent, var(--footer-color), transparent);
          opacity: 0.3;
          animation: pulse 3s ease-in-out infinite;
        }

        .seasonal-text {
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 0 20px var(--footer-color);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .footer-content {
          padding: 48px 24px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          margin-bottom: 32px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .brand-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--footer-color), transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          box-shadow: 0 0 20px var(--footer-color);
        }

        .brand-text {
          font-weight: 700;
          font-size: 18px;
          background: linear-gradient(135deg, var(--footer-color), rgba(255, 255, 255, 0.9));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .footer-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }

        .footer-title {
          font-weight: 600;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 4px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: rgba(255, 255, 255, 0.9);
          padding-left: 4px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--footer-color);
          color: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--footer-color);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }

        .made-with {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }

        .heart-icon {
          width: 16px;
          height: 16px;
          color: var(--footer-color);
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .footer-bg-glow {
          position: absolute;
          inset: -200px;
          background: radial-gradient(circle at 50% 100%, var(--footer-color) 0%, transparent 50%);
          opacity: 0.1;
          z-index: -1;
          filter: blur(60px);
          animation: glow-pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
