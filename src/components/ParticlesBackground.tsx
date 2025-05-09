import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import { useEffect, useState } from "react";

const ParticlesBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: Add any initialization after particles are loaded
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10">
      {/* @ts-ignore */}
      <tsparticles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          fpsLimit: 120,
          particles: {
            groups: {
              z5000: {
                number: {
                  value: 70
                },
                zIndex: {
                  value: 5000
                }
              },
              z7500: {
                number: {
                  value: 30
                },
                zIndex: {
                  value: 75
                }
              },
              z2500: {
                number: {
                  value: 50
                },
                zIndex: {
                  value: 25
                }
              },
              z1000: {
                number: {
                  value: 40
                },
                zIndex: {
                  value: 10
                }
              }
            },
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#FFD700", "#FFA500", "#FF4500"],
              animation: {
                enable: true,
                speed: 20,
                sync: true
              }
            },
            shape: {
              type: ["circle", "triangle", "star"],
            },
            opacity: {
              value: 1,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
              }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#FFD700",
              opacity: 0.4,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.1
              }
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out"
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            },
            rotate: {
              value: {
                min: 0,
                max: 360
              },
              direction: "random",
              animation: {
                enable: true,
                speed: 30
              }
            },
            tilt: {
              direction: "random",
              enable: true,
              value: {
                min: 0,
                max: 360
              },
              animation: {
                enable: true,
                speed: 30
              }
            },
            roll: {
              darken: {
                enable: true,
                value: 25
              },
              enable: true,
              speed: {
                min: 15,
                max: 25
              }
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                min: -15,
                max: 15
              }
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: ["grab", "bubble"]
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.8
                }
              },
              bubble: {
                distance: 200,
                size: 6,
                duration: 0.3,
                opacity: 0.8
              },
              push: {
                quantity: 4,
                groups: ["z5000", "z7500", "z2500", "z1000"]
              }
            }
          },
          background: {
            color: "transparent",
          },
          zLayers: 100
        }}
      />
    </div>
  );
};

export default ParticlesBackground;