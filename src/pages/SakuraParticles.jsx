import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function SakuraParticles() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#f9f9f9", 
          },
        },
        particles: {
          color: {
            value: "#f1c6c6", 
          },
          move: {
            enable: true,
            speed: 2, 
            direction: "bottom",
            random: true,
            straight: false,
            outModes: {
              bottom: "out",
            },
          },
          number: {
            density: {
              enable: true,
              area: 800, // Area density
            },
            value: 80, // Adjust particle count (fewer particles for cleaner look)
          },
          opacity: {
            value: 0.7,
            random: true,
            animation: {
              enable: true,
              speed: 2, // Adjust opacity change speed for smoother transitions
              minimumValue: 0.1,
            },
          },
          shape: {
            type: "image",
            image: {
              src: "/images/sakura-flower.png", // Make sure path is correct
              width: 20,
              height: 20,
            },
          },
          size: {
            value: 5,
            random: true,
            animation: {
              enable: true,
              speed: 3, // Speed up particle size transition for a lively effect
              minimumValue: 2,
            },
          },
        },
      }}
    />
  );
}

export default SakuraParticles;
