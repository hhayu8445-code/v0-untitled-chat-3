"use client"

export function SnowPile() {
  return (
    <>
      <div className="snow-pile-container">
        {/* Snow pile images */}
        <div className="snow-pile left">
          <img 
            src="https://media.tenor.com/images/snow-pile.gif" 
            alt="Snow" 
            className="snow-img"
          />
        </div>
        <div className="snow-pile right">
          <img 
            src="https://media.tenor.com/images/snow-pile.gif" 
            alt="Snow" 
            className="snow-img"
          />
        </div>
        <div className="snow-pile center">
          <img 
            src="https://media.tenor.com/images/snow-pile.gif" 
            alt="Snow" 
            className="snow-img"
          />
        </div>
      </div>

      <style jsx>{`
        .snow-pile-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          pointer-events: none;
          z-index: 40;
          overflow: hidden;
        }

        .snow-pile {
          position: absolute;
          bottom: 0;
          height: 100%;
          opacity: 0.7;
        }

        .snow-pile.left {
          left: 0;
          width: 300px;
        }

        .snow-pile.right {
          right: 0;
          width: 300px;
          transform: scaleX(-1);
        }

        .snow-pile.center {
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
        }

        .snow-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(1.2);
        }

        @media (max-width: 768px) {
          .snow-pile-container {
            height: 80px;
          }

          .snow-pile.left,
          .snow-pile.right {
            width: 200px;
          }

          .snow-pile.center {
            width: 250px;
          }
        }
      `}</style>
    </>
  )
}
