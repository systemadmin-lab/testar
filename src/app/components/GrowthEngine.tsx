"use client";

import { motion } from "framer-motion";
import { Briefcase, Cpu, LineChart, Monitor, Palette, UserCheck } from "lucide-react";

// Helper to calculate position on a circle
// Angles for 6 items: 30, 90, 150, 210, 270, 330 degrees to distribute them?
// Actually looking at the image:
// Top Left: Digital Marketing (~225 deg? No, let's say "North West")
// Top Right: Creative & Design ("North East")
// Right: Strategy & Planning ("East")
// Bottom Right: Traditional Marketing ("South East")
// Bottom Left: Marketing Technology ("South West")
// Left: Customer Experience ("West")

// Let's use a explicit grid or absolute positioning based on the visual.
// Center: Growth Engine
// Nodes:
// 1. Digital Marketing (Top Left)
// 2. Creative & Design (Top Right)
// 3. Strategy & Planning (Right)
// 4. Traditional Marketing (Bottom Right)
// 5. Marketing Technology (Bottom Left)
// 6. Customer Experience (Left)

const nodes = [
  { 
    id: "digital-marketing", 
    label: "Digital Marketing", 
    icon: Monitor, 
    color: "#2563EB", 
    position: { x: -300, y: -180 }, // Top Left
    lineStart: { x: -100, y: -60 } 
  },
  { 
    id: "creative-design", 
    label: "Creative & Design", 
    icon: Palette, 
    color: "#9333EA", 
    position: { x: 300, y: -180 }, // Top Right
    lineStart: { x: 100, y: -60 }
  },
  { 
    id: "strategy-planning", 
    label: "Strategy & Planning", 
    icon: LineChart, 
    color: "#F97316", 
    position: { x: 450, y: 0 }, // Right
    lineStart: { x: 120, y: 0 }
  },
  { 
    id: "traditional-marketing", 
    label: "Traditional Marketing", 
    icon: Briefcase, 
    color: "#EF4444", 
    position: { x: 300, y: 220 }, // Bottom Right
    lineStart: { x: 100, y: 60 }
  },
  { 
    id: "martech", 
    label: "Marketing Technology", 
    icon: Cpu, 
    color: "#14B8A6", 
    position: { x: -300, y: 220 }, // Bottom Left
    lineStart: { x: -100, y: 60 }
  },
  { 
    id: "customer-experience", 
    label: "Customer Experience", 
    icon: UserCheck, 
    color: "#10B981", 
    position: { x: -450, y: 0 }, // Left
    lineStart: { x: -120, y: 0 }
  },
];

export default function GrowthEngine() {
  return (
    <section className="w-full py-40 flex flex-col items-center bg-black overflow-hidden relative">
      <div className="w-full max-w-[1560px] relative h-[800px] flex items-center justify-center">
        
        {/* Title */}
        <div className="absolute top-0 left-0">
          <h2 className="text-[40px] font-semibold text-white mb-4" style={{ fontFamily: 'Aileron, sans-serif' }}>
            Build Your System
          </h2>
          <div className="w-[120px] h-1 bg-[#B59F7A]" />
        </div>

        {/* Center Node: Growth Engine */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute z-20 flex items-center justify-center w-48 h-48 rounded-full bg-black border border-red-900/50 shadow-[0_0_60px_rgba(139,0,0,0.4)]"
        >
            <div className="text-center">
                <div className="text-xs font-bold tracking-widest text-white/50 mb-1">GROWTH</div>
                <div className="text-xl font-bold text-white tracking-wider">ENGINE</div>
            </div>
        </motion.div>

        {/* Single SVG for all connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
          <g style={{ transform: "translate(50%, 50%)" }}>
            {nodes.map((node, i) => (
              <motion.line
                key={`line-${node.id}`}
                x1={0}
                y1={0}
                x2={node.position.x}
                y2={node.position.y}
                stroke="#DA1316"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }} // Increased opacity to 1 for visibility
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 + (i * 0.1), ease: "easeInOut" }}
              />
            ))}
          </g>
        </svg>

        {/* Node Cards */}
        {nodes.map((node, i) => (
            <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.5 + (i * 0.1) }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 px-6 py-4 bg-[#0A0A0A] border border-white/10 rounded-lg shadow-lg whitespace-nowrap z-30" // Added z-30
                style={{ 
                    marginLeft: `${node.position.x}px`, 
                    marginTop: `${node.position.y}px`,
                    boxShadow: `0 0 20px ${node.color}20`,
                    borderColor: `${node.color}40`
                }}
            >
                <node.icon className="w-6 h-6" style={{ color: node.color }} />
                <span className="text-white font-medium text-lg">{node.label}</span>
            </motion.div>
        ))}
      </div>
    </section>
  );
}
