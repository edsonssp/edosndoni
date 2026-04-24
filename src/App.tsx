/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Layers, Smartphone, Cpu, MousePointer2 } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Design Superior",
      desc: "Interfaces limpas, tipografia refinada e interações fluidas.",
      icon: <Layers className="w-5 h-5" />,
    },
    {
      title: "Performance Nativa",
      desc: "Código otimizado para uma experiência suave em qualquer dispositivo.",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      title: "IA Integrada",
      desc: "Potencializado por modelos de linguagem de última geração.",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen selection:bg-black selection:text-white overflow-hidden">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center fixed top-0 w-full z-10">
        <div className="flex items-center gap-2 font-medium tracking-tight">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          Visionary.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Work</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Philosophy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-transform cursor-pointer">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-semibold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              PRONTO PARA CONSTRUIR O MELHOR
            </div>
            
            <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8 text-balance">
              Seu próximo <br /> 
              <span className="text-neutral-400">grande projeto</span> <br />
              começa aqui.
            </h1>
            
            <p className="text-lg text-neutral-500 max-w-md mb-10 leading-relaxed">
              Você tem a ideia, eu tenho as ferramentas. Vamos transformar seu app atual em algo verdadeiramente extraordinário com design de classe mundial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-2xl font-medium group hover:bg-neutral-800 transition-colors">
                Me mostre seu app
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-neutral-200 font-medium hover:bg-neutral-50 transition-colors">
                Ver Portfólio
              </button>
            </div>
          </motion.div>

          {/* Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-neutral-100 rounded-[3rem] overflow-hidden">
               {/* Abstract decorative elements */}
               <div className="absolute top-1/4 left-1/4 w-[200%] h-[200%] border border-neutral-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
               <div className="absolute top-1/4 left-1/4 w-[150%] h-[150%] border border-neutral-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
               
               {/* Feature Cards Showcase */}
               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="grid grid-cols-1 gap-4 w-full">
                    {features.map((f, i) => (
                      <motion.div
                        key={i}
                        onHoverStart={() => setHoveredFeature(i)}
                        onHoverEnd={() => setHoveredFeature(null)}
                        className={`p-6 rounded-3xl transition-all duration-500 cursor-default ${
                          hoveredFeature === i 
                            ? "bg-white shadow-2xl shadow-neutral-200 -translate-y-2 scale-105 z-10" 
                            : "bg-white/50 backdrop-blur-sm border border-white/50 opacity-80"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-2xl ${hoveredFeature === i ? "bg-black text-white" : "bg-neutral-200 text-neutral-500"} transition-colors`}>
                            {f.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{f.title}</h3>
                            <p className="text-sm text-neutral-500 mt-1">{f.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
               </div>

               {/* Cursor effect */}
               <motion.div 
                 animate={{
                   x: hoveredFeature !== null ? 0 : 50,
                   y: hoveredFeature !== null ? 0 : 50,
                 }}
                 className="absolute bottom-12 right-12 text-black pointer-events-none"
               >
                 <MousePointer2 className="w-8 h-8 fill-white stroke-[1.5]" />
               </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating elements to emphasize "Better" */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32 border-t border-neutral-100 pt-12">
          {["Clean Code", "UX First", "Motion Design", "Responsive"].map((text) => (
            <div key={text} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <div className="w-1 h-1 bg-neutral-400 rounded-full" />
              {text}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-12 text-center text-sm text-neutral-400 border-t border-neutral-50 bg-neutral-50/30">
        &copy; 2026 Visionary App Studio. Built with intentionality.
      </footer>
    </div>
  );
}
