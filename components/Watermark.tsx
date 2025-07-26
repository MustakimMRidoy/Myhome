import React, { useState, useEffect, useMemo } from 'react';

// Injects custom keyframe animations required for the watermark effect.
const AnimationStyles = () => (
  <style>
    {`
      @keyframes rainbow-glass {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(-2deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }
      @keyframes text-form {
        from {
          clip-path: inset(45% 45% 45% 45% round 50%);
          transform: scale(0.8);
          opacity: 0;
        }
        to {
          clip-path: inset(0% 0% 0% 0% round 0%);
          transform: scale(1);
          opacity: 1;
        }
      }
      @keyframes text-dissolve {
        from {
          clip-path: inset(0% 0% 0% 0% round 0%);
          transform: scale(1);
          opacity: 1;
        }
        to {
          clip-path: inset(45% 45% 45% 45% round 50%);
          transform: scale(0.8);
          opacity: 0;
        }
      }
      .anim-rainbow-glass {
        background-size: 300% 300%;
        animation: rainbow-glass 6s linear infinite;
      }
      .anim-float {
        animation: float 5s ease-in-out infinite;
      }
      .anim-text-form {
         animation: text-form 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
      }
      .anim-text-dissolve {
         animation: text-dissolve 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
      }
    `}
  </style>
);

// Configuration for color "snakes" that fly in.
const snakes = [
  { id: 1, gradient: 'from-cyan-400', initialTransform: 'rotate(0deg) translateX(200px)' },
  { id: 2, gradient: 'from-red-500', initialTransform: 'rotate(30deg) translateX(200px)' },
  { id: 3, gradient: 'from-green-500', initialTransform: 'rotate(60deg) translateX(200px)' },
  { id: 4, gradient: 'from-yellow-400', initialTransform: 'rotate(90deg) translateX(200px)' },
  { id: 5, gradient: 'from-purple-500', initialTransform: 'rotate(120deg) translateX(200px)' },
  { id: 6, gradient: 'from-pink-400', initialTransform: 'rotate(150deg) translateX(200px)' },
  { id: 7, gradient: 'from-orange-500', initialTransform: 'rotate(180deg) translateX(200px)' },
  { id: 8, gradient: 'from-indigo-500', initialTransform: 'rotate(210deg) translateX(200px)' },
  { id: 9, gradient: 'from-teal-400', initialTransform: 'rotate(240deg) translateX(200px)' },
  { id: 10, gradient: 'from-lime-400', initialTransform: 'rotate(270deg) translateX(200px)' },
  { id: 11, gradient: 'from-fuchsia-500', initialTransform: 'rotate(300deg) translateX(200px)' },
  { id: 12, gradient: 'from-sky-500', initialTransform: 'rotate(330deg) translateX(200px)' },
];

type AnimationPhase = 'idle' | 'gathering' | 'forming' | 'displaying' | 'dissolving' | 'dispersing';

const Watermark: React.FC = () => {
  const [phase, setPhase] = useState<AnimationPhase>('idle');

  // Configuration for colorful balls that disperse out.
  const balls = useMemo(() => Array.from({ length: 30 }).map((_, i) => {
    const angle = Math.random() * 360;
    const distance = 150 + Math.random() * 150;
    const colorClasses = ['bg-cyan-400', 'bg-red-500', 'bg-green-500', 'bg-yellow-400', 'bg-purple-500', 'bg-pink-400', 'bg-orange-500', 'bg-indigo-500', 'bg-teal-400', 'bg-lime-400', 'bg-fuchsia-500', 'bg-sky-500'];
    return {
        id: i,
        color: colorClasses[i % colorClasses.length],
        transform: `rotate(${angle}deg) translateX(${distance}px) scale(0)`,
        size: 8 + Math.random() * 16,
    };
  }), []);

  useEffect(() => {
    const timeouts: number[] = [];
  
    const cycle = () => {
      setPhase('gathering');
  
      timeouts.push(setTimeout(() => {
        setPhase('forming');
  
        timeouts.push(setTimeout(() => {
          setPhase('displaying');
  
          timeouts.push(setTimeout(() => {
            setPhase('dissolving');
  
            timeouts.push(setTimeout(() => {
              setPhase('dispersing');

              timeouts.push(setTimeout(() => {
                setPhase('idle');
                timeouts.push(setTimeout(cycle, 1000));
              }, 2300)); // Dispersing duration
            }, 1000)); // Dissolve duration
          }, 5000)); // Display duration
        }, 1000)); // Form duration
      }, 2300)); // Gather duration
    };
  
    // Start the first cycle
    const initialTimeout = setTimeout(cycle, 500);
    timeouts.push(initialTimeout);
  
    return () => {
      timeouts.forEach(clearTimeout);
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isTextVisible = phase === 'forming' || phase === 'displaying' || phase === 'dissolving';
  const isAnimationActive = phase !== 'idle';

  return (
    <>
      <AnimationStyles />
      {/* This container now acts as a full-screen dialog overlay during the animation */}
      <div
        className={`
          fixed inset-0 flex items-center justify-center 
          z-[10000] transition-all duration-500
          ${isAnimationActive ? 'opacity-100 bg-black/85 pointer-events-auto' : 'opacity-0 bg-transparent pointer-events-none'}
        `}
      >
        {/* The animation content is only rendered when the dialog is active to improve performance */}
        {isAnimationActive && (
          <>
            {/* Color Snakes for Gathering */}
            <div className="absolute inset-0 flex items-center justify-center">
              {snakes.map((s, i) => {
                 const isGathering = phase === 'gathering';
                return (
                  <div
                    key={s.id}
                    className={`
                      absolute h-3 w-80 md:h-4 md:w-96 rounded-full filter blur-xl
                      bg-gradient-to-l ${s.gradient} to-transparent
                      transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)]
                    `}
                    style={{
                      transitionDelay: `${i * 80}ms`,
                      transform: isGathering ? 'translateX(0) scale(1)' : s.initialTransform,
                      opacity: isGathering ? 0.9 : 0,
                    }}
                  />
                )
               }
              )}
            </div>

            {/* Color Balls for Dispersing */}
            <div className="absolute inset-0 flex items-center justify-center">
                {balls.map((ball, i) => {
                    const isDissolving = phase === 'dissolving';
                    const isDispersing = phase === 'dispersing';
                    const areBallsActive = isDissolving || isDispersing;

                    return (
                        <div
                            key={ball.id}
                            className={`absolute rounded-full filter blur-md ${ball.color}`}
                            style={{
                                width: ball.size,
                                height: ball.size,
                                transition: 'transform 1.2s cubic-bezier(0.5, 0, 0.75, 0), opacity 1.2s ease-out',
                                transitionDelay: isDispersing ? `${i * 20}ms` : '0ms',
                                transform: areBallsActive ? (isDispersing ? ball.transform : 'scale(1)') : 'scale(0)',
                                opacity: isDispersing ? 0 : (isDissolving ? 1 : 0),
                            }}
                        />
                    );
                })}
            </div>

            {/* Watermark Text */}
            <div
              className={`
                absolute
                transition-all duration-1000
                ${phase === 'forming' ? 'anim-text-form' : ''}
                ${phase === 'dissolving' ? 'anim-text-dissolve' : ''}
                ${isTextVisible ? 'opacity-100' : 'opacity-0'}
                ${phase === 'displaying' ? 'scale-100 anim-float' : ''}
                ${(phase === 'gathering' || phase === 'dispersing') ? 'scale-75 opacity-0' : ''}
              `}
            >
                <div className={`
                    font-extrabold bg-clip-text text-transparent
                    bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-500
                    ${phase === 'displaying' ? 'anim-rainbow-glass' : ''}
                `}>
                    <h2 className="text-6xl md:text-7xl text-center">© RidoyKhan</h2>
                    <p className="text-3xl md:text-4xl mt-2 text-left">MR Mustakim</p>
                </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Watermark;
