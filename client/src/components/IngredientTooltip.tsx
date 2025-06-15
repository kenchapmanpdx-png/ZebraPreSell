import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IngredientTooltipProps {
  ingredient: {
    name: string;
    dosage: string;
    description: string;
    benefits?: string[];
    researchNotes?: string;
    timing?: string;
  };
  children: React.ReactNode;
  colorScheme: 'orange' | 'forest';
}

export default function IngredientTooltip({ ingredient, children, colorScheme }: IngredientTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const getColorClasses = () => {
    return {
      bg: 'bg-earth-cream',
      border: 'border-terra/20',
      accent: 'text-forest',
      tag: 'bg-terra-light text-terra-dark'
    };
  };

  const colors = getColorClasses();

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cursor-help transition-all duration-200 hover:scale-[1.02]"
      >
        {children}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ 
              duration: 0.2, 
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="fixed z-50 pointer-events-none"
            style={{
              left: mousePosition.x + 15,
              top: mousePosition.y - 10,
              maxWidth: '320px',
            }}
          >
            <div className={`${colors.bg} ${colors.border} border rounded-xl shadow-xl p-2 backdrop-blur-sm`}>
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h4 className={`font-black text-lg ${colors.accent}`}>
                  {ingredient.name}
                </h4>
                <span className={`text-sm font-bold px-2 py-1 rounded-md ${colors.tag}`}>
                  {ingredient.dosage}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-forest font-semibold mb-3 leading-relaxed">
                {ingredient.description}
              </p>

              {/* Benefits */}
              {ingredient.benefits && ingredient.benefits.length > 0 && (
                <div className="mb-3">
                  <h5 className={`text-sm font-medium ${colors.accent} mb-2`}>
                    Key Benefits:
                  </h5>
                  <ul className="space-y-1">
                    {ingredient.benefits.map((benefit, index) => (
                      <li key={index} className="text-2xl text-neutral-dark/70 flex items-start">
                        <span className={`${colors.accent} mr-2 mt-1`}>•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Timing */}
              {ingredient.timing && (
                <div className="mb-3">
                  <span className={`text-xs font-medium ${colors.accent}`}>Best Time: </span>
                  <span className="text-xs text-neutral-dark/70">{ingredient.timing}</span>
                </div>
              )}

              {/* Research Notes */}
              {ingredient.researchNotes && (
                <div className="pt-2 border-t border-neutral-200/50">
                  <p className="text-xs text-neutral-dark/60 italic">
                    {ingredient.researchNotes}
                  </p>
                </div>
              )}

              {/* Arrow indicator */}
              <div className={`absolute -left-2 top-6 w-4 h-4 ${colors.bg} ${colors.border} border-l border-b transform rotate-45 z-[-1]`}></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}