"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

export function WorldMap({
  dots = [
    // North America to South America
    { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: -34.6037, lng: -58.3816 } },

    // North America to Europe
    { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: 48.8566, lng: 2.3522 } },

    // Europe to Asia
    { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 35.6895, lng: 139.6917 } },

    // Asia to Africa
    { start: { lat: 35.6895, lng: 139.6917 }, end: { lat: -1.286389, lng: 36.817223 } },

    // Africa to South America
    { start: { lat: -1.286389, lng: 36.817223 }, end: { lat: -34.6037, lng: -58.3816 } },

    // Oceania to North America
    { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 34.0522, lng: -118.2437 } },

    // Asia to Oceania
    { start: { lat: 35.6895, lng: 139.6917 }, end: { lat: -33.8688, lng: 151.2093 } },
  ],
  lineColor = "#003366", // Default line color
  dotSize = 3, // Custom dot size
  pathDelay = 0.9, // Custom animation delay for paths
}) {
  const svgRef = useRef(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000080",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-[96%] mx-auto aspect-[2/1] bg-white rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: [0, 1],  // Animate path from 0 to full length
                }}
                transition={{
                  duration: 2, // Increase duration to make the movement smoother
                  repeat: Infinity, // Loop the animation indefinitely
                  repeatType: "loop", // Continuously loop the path animation
                  delay: pathDelay * i, // Staggered delay for each path
                  ease: "easeInOut", // Smoother easing
                }}
                key={`path-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            {/* Start Dot */}
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r={dotSize}
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r={dotSize}
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from={dotSize}
                  to={dotSize * 2}
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            {/* End Dot */}
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r={dotSize}
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r={dotSize}
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from={dotSize}
                  to={dotSize * 2}
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
