"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Tab = {
  id: string;
  label: string;
};

const tabs: Tab[] = [
  { id: "about", label: "About Me" },
  { id: "experiences", label: "Experiences" },
  { id: "recommended", label: "Recommended" },
];

export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id); 
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
  
    <div className="flex space-x-1 rounded-xl bg-secondary p-1 shadow-black shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          onMouseEnter={() => setHoveredTab(tab.id)}
          onMouseLeave={() => setHoveredTab(null)}
          className="relative rounded-xl cursor-pointer px-5 py-2.5 text-sm font-medium text-foreground shadow-black shadow-2xl transition-colors duration-300 focus-visible:outline-2"
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {/* Hover Animation Background */}
          {hoveredTab === tab.id && (
            <motion.div
              layoutId="hover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4 } }}
              className="absolute inset-0 z-10 rounded-xl bg-white/5"
            />
          )}

          {/* Active Tab Background */}
          {activeTab === tab.id && (
            <motion.div
              layoutId="bubble"
           
              className="absolute inset-0 z-20 bg-primary shadow-black shadow-xl"
              style={{ borderRadius: 10 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          
          
          <span className={`relative z-30 ${activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground"}`}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}