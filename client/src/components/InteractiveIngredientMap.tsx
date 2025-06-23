import { useEffect, useRef } from 'react';

export default function InteractiveIngredientMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const connections = [
    { from: '#ing-alcar', to: ['#issue-energy', '#issue-cognitive', '#issue-mitochondria', '#issue-nerve'] },
    { from: '#ing-astaxanthin', to: ['#issue-antioxidant', '#issue-mcas'] },
    { from: '#ing-benfotiamine', to: ['#issue-energy', '#issue-autonomic', '#issue-nerve'] },
    { from: '#ing-tmg', to: ['#issue-methylation', '#issue-cardio'] },
    { from: '#ing-biotin', to: ['#issue-collagen', '#issue-methylation'] },
    { from: '#ing-boron', to: ['#issue-collagen', '#issue-immune'] },
    { from: '#ing-cdp-choline', to: ['#issue-cognitive', '#issue-nerve'] },
    { from: '#ing-chromium', to: ['#issue-immune', '#issue-energy'] },
    { from: '#ing-coq10', to: ['#issue-energy', '#issue-mitochondria', '#issue-cardio', '#issue-antioxidant'] },
    { from: '#ing-copper', to: ['#issue-collagen', '#issue-immune'] },
    { from: '#ing-folate', to: ['#issue-methylation', '#issue-autonomic', '#issue-nerve'] },
    { from: '#ing-ha', to: ['#issue-joint'] },
    { from: '#ing-iodine', to: ['#issue-immune'] },
    { from: '#ing-proline', to: ['#issue-collagen'] },
    { from: '#ing-theanine', to: ['#issue-calm'] },
    { from: '#ing-magnesium-glycinate', to: ['#issue-calm', '#issue-muscle', '#issue-autonomic'] },
    { from: '#ing-magnesium-malate', to: ['#issue-energy', '#issue-muscle', '#issue-calm'] },
    { from: '#ing-manganese', to: ['#issue-collagen', '#issue-antioxidant'] },
    { from: '#ing-molybdenum', to: ['#issue-mcas'] },
    { from: '#ing-niacinamide', to: ['#issue-energy', '#issue-methylation'] },
    { from: '#ing-pea', to: ['#issue-mcas', '#issue-calm', '#issue-antioxidant'] },
    { from: '#ing-pantothenic-acid', to: ['#issue-energy', '#issue-calm'] },
    { from: '#ing-pc', to: ['#issue-cognitive', '#issue-calm', '#issue-nerve'] },
    { from: '#ing-potassium', to: ['#issue-cardio', '#issue-autonomic', '#issue-muscle'] },
    { from: '#ing-pqq', to: ['#issue-energy', '#issue-mitochondria', '#issue-cognitive'] },
    { from: '#ing-riboflavin', to: ['#issue-energy', '#issue-methylation', '#issue-mitochondria'] },
    { from: '#ing-selenium', to: ['#issue-antioxidant', '#issue-immune'] },
    { from: '#ing-silicon', to: ['#issue-collagen'] },
    { from: '#ing-taurine', to: ['#issue-autonomic', '#issue-calm', '#issue-mcas', '#issue-cardio'] },
    { from: '#ing-thiamine-hcl', to: ['#issue-energy', '#issue-autonomic', '#issue-nerve'] },
    { from: '#ing-vit-a', to: ['#issue-immune', '#issue-antioxidant'] },
    { from: '#ing-vit-b6', to: ['#issue-energy', '#issue-nerve', '#issue-mcas', '#issue-methylation'] },
    { from: '#ing-vit-b12', to: ['#issue-energy', '#issue-nerve', '#issue-methylation'] },
    { from: '#ing-d3', to: ['#issue-immune', '#issue-collagen', '#issue-cardio'] },
    { from: '#ing-vit-e', to: ['#issue-antioxidant'] },
    { from: '#ing-k2', to: ['#issue-cardio', '#issue-collagen'] },
    { from: '#ing-zinc', to: ['#issue-collagen', '#issue-immune'] },
  ];

  useEffect(() => {
    let isMobile = window.innerWidth < 768;
    let activeElement: HTMLElement | null = null;

    const drawLines = () => {
      if (!svgRef.current || !mapContainerRef.current) return;
      
      const svg = svgRef.current;
      const mapContainer = mapContainerRef.current;
      
      svg.innerHTML = '';
      if (isMobile) return;
      
      const containerRect = mapContainer.getBoundingClientRect();

      connections.forEach(conn => {
        conn.to.forEach(toId => {
          const fromEl = document.querySelector(conn.from);
          const toEl = document.querySelector(toId);

          if (fromEl && toEl) {
            const fromRect = fromEl.getBoundingClientRect();
            const toRect = toEl.getBoundingClientRect();
            
            const fromX = fromRect.right - containerRect.left;
            const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
            
            const toX = toRect.left - containerRect.left;
            const toY = toRect.top - containerRect.top + toRect.height / 2;
            
            const toColor = window.getComputedStyle(toEl).borderLeftColor;

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const controlX1 = fromX + (toX - fromX) * 0.35;
            const controlX2 = fromX + (toX - fromX) * 0.65;
            const d = `M ${fromX} ${fromY} C ${controlX1} ${fromY}, ${controlX2} ${toY}, ${toX} ${toY}`;

            path.setAttribute('d', d);
            path.setAttribute('stroke', toColor);
            path.setAttribute('stroke-width', '1');
            path.setAttribute('fill', 'none');
            path.setAttribute('opacity', '0.3');
            path.setAttribute('data-from', conn.from);
            path.setAttribute('data-to', toId);
            svg.appendChild(path);
          }
        });
      });
    };

    const highlightConnection = (element: HTMLElement, shouldHighlight: boolean) => {
      if (!svgRef.current) return;
      
      if (isMobile && !shouldHighlight) return;

      // Reset all styles
      document.querySelectorAll('.highlighted, .unfocused').forEach(el => {
        el.classList.remove('highlighted', 'unfocused');
        const span = el.querySelector('.font-semibold') as HTMLElement;
        if (span) span.style.color = '';
      });
      
      svgRef.current.querySelectorAll('path').forEach(p => {
        p.setAttribute('stroke-width', '1');
        p.setAttribute('opacity', '0.3');
      });

      if (shouldHighlight) {
        const elementId = '#' + element.id;
        const isIngredient = element.closest('#ingredients-col') !== null;
        let connectedPaths;
        let connectedItems = new Set<HTMLElement>();
        connectedItems.add(element);

        if (isIngredient) {
          connectedPaths = svgRef.current.querySelectorAll(`path[data-from="${elementId}"]`);
        } else {
          connectedPaths = svgRef.current.querySelectorAll(`path[data-to="${elementId}"]`);
        }
        
        element.classList.add('highlighted');
        
        connectedPaths.forEach(path => {
          const fromEl = document.querySelector(path.getAttribute('data-from')!) as HTMLElement;
          const toEl = document.querySelector(path.getAttribute('data-to')!) as HTMLElement;
          if (fromEl && toEl) {
            connectedItems.add(fromEl);
            connectedItems.add(toEl);
            fromEl.classList.add('highlighted');
            toEl.classList.add('highlighted');
            
            path.setAttribute('stroke-width', '3');
            path.setAttribute('opacity', '1');
            
            if (!isIngredient) {
              const span = fromEl.querySelector('.font-semibold') as HTMLElement;
              const goalColor = window.getComputedStyle(toEl).borderLeftColor;
              if(span) span.style.color = goalColor;
            }
          }
        });

        // Fade out non-connected items in BOTH columns
        document.querySelectorAll('.item-card').forEach(card => {
          if (!connectedItems.has(card as HTMLElement)) {
            card.classList.add('unfocused');
          }
        });
      }
    };

    const handleTap = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if (activeElement === target) {
        highlightConnection(target, false);
        activeElement = null;
      } else {
        highlightConnection(target, true);
        activeElement = target;
      }
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      highlightConnection(target, true);
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      highlightConnection(target, false);
    };

    const addEventListeners = () => {
      document.querySelectorAll('.item-card').forEach(card => {
        card.removeEventListener('click', handleTap);
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);

        if (isMobile) {
          card.addEventListener('click', handleTap);
        } else {
          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);
        }
      });
    };

    drawLines();
    addEventListeners();

    const resizeObserver = new ResizeObserver(() => {
      const oldIsMobile = isMobile;
      isMobile = window.innerWidth < 768;
      if(oldIsMobile !== isMobile) {
        drawLines();
        addEventListeners();
      } else {
        drawLines();
      }
    });
    
    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-16 px-8" style={{
      background: 'hsla(33, 34%, 86%, 1)',
      backgroundImage: 'linear-gradient(90deg, hsla(33, 34%, 86%, 1) 0%, hsla(34, 37%, 96%, 1) 52%, hsla(33, 34%, 86%, 1) 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest">ZEBRAWELL™</h2>
          <h3 className="mt-2 text-xl md:text-2xl font-semibold text-sky-600">Ingredient-to-Benefit Map</h3>
          <p className="mt-4 text-forest/80 max-w-3xl mx-auto">
            Hover over (or tap) an ingredient or a health goal to see its specific connections. (Lines are best viewed on desktop).
          </p>
        </div>

        <div id="map-container" ref={mapContainerRef} className="relative w-full">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-8 md:gap-16">

            {/* Column 1: Ingredients */}
            <div id="ingredients-col" className="w-full md:w-5/12 space-y-2">
              <h3 className="text-lg font-bold text-forest text-center md:text-left mb-3">FORMULATION INGREDIENTS</h3>
              <div id="ing-alcar" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Acetyl-L-Carnitine (ALCAR)</span></div>
              <div id="ing-astaxanthin" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Astaxanthin</span></div>
              <div id="ing-benfotiamine" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Benfotiamine (B1)</span></div>
              <div id="ing-tmg" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Betaine (TMG)</span></div>
              <div id="ing-biotin" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Biotin (B7)</span></div>
              <div id="ing-boron" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Boron</span></div>
              <div id="ing-cdp-choline" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">CDP-Choline</span></div>
              <div id="ing-chromium" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Chromium</span></div>
              <div id="ing-coq10" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">CoQ10 (Ubiquinol)</span></div>
              <div id="ing-copper" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Copper</span></div>
              <div id="ing-folate" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Folate (L-5-MTHF)</span></div>
              <div id="ing-ha" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Hyaluronic Acid</span></div>
              <div id="ing-iodine" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Iodine</span></div>
              <div id="ing-proline" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">L-Proline</span></div>
              <div id="ing-theanine" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">L-Theanine</span></div>
              <div id="ing-magnesium-glycinate" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Magnesium Glycinate</span></div>
              <div id="ing-magnesium-malate" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Magnesium Malate</span></div>
              <div id="ing-manganese" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Manganese</span></div>
              <div id="ing-molybdenum" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Molybdenum</span></div>
              <div id="ing-niacinamide" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Niacinamide (B3)</span></div>
              <div id="ing-pea" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Palmitoylethanolamide (PEA)</span></div>
              <div id="ing-pantothenic-acid" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Pantothenic Acid (B5)</span></div>
              <div id="ing-pc" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Phosphatidylcholine</span></div>
              <div id="ing-potassium" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Potassium</span></div>
              <div id="ing-pqq" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">PQQ</span></div>
              <div id="ing-riboflavin" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Riboflavin (B2)</span></div>
              <div id="ing-selenium" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Selenium</span></div>
              <div id="ing-silicon" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Silicon</span></div>
              <div id="ing-taurine" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Taurine</span></div>
              <div id="ing-thiamine-hcl" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Thiamine HCl (B1)</span></div>
              <div id="ing-vit-a" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Vitamin A (from Beta-Carotene)</span></div>
              <div id="ing-vit-b6" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Vitamin B6 (P5P)</span></div>
              <div id="ing-vit-b12" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Vitamin B12 (Methyl & Adeno)</span></div>
              <div id="ing-d3" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Vitamin D3</span></div>
              <div id="ing-vit-e" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Vitamin E</span></div>
              <div id="ing-k2" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Vitamin K2</span></div>
              <div id="ing-zinc" className="item-card bg-white px-3 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"><span className="font-semibold text-forest">Zinc</span></div>
            </div>

            {/* Column 2: Health Goals */}
            <div id="issues-col" className="w-full md:w-5/12 space-y-6">
              <h3 className="text-lg font-bold text-forest text-center md:text-left mb-3">TARGETED HEALTH GOALS</h3>
              <div id="issue-energy" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-red-500 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Fatigue & Energy Production</div>
              <div id="issue-cognitive" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-sky-500 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Cognitive Function & Brain Fog</div>
              <div id="issue-mitochondria" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-yellow-400 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Mitochondrial Health</div>
              <div id="issue-autonomic" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-violet-500 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Autonomic Regulation (POTS)</div>
              <div id="issue-nerve" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-lime-500 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Nerve Health & Protection</div>
              <div id="issue-calm" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-indigo-500 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Neuro-Calming & Stress</div>
              <div id="issue-collagen" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-teal-400 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Collagen & Tissue Strength</div>
              <div id="issue-joint" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-orange-500 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Joint Hydration & Comfort</div>
              <div id="issue-mcas" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-green-500 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Mast Cell Stabilization</div>
              <div id="issue-antioxidant" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-purple-600 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Antioxidant & Inflammation Control</div>
              <div id="issue-cardio" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-rose-500 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Cardiovascular & Heart Health</div>
              <div id="issue-muscle" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-blue-600 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Muscle Comfort & Function</div>
              <div id="issue-methylation" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-cyan-400 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Methylation Support</div>
              <div id="issue-immune" className="item-card issue-card bg-white px-3 py-3 rounded-lg shadow-sm border-l-4 border-pink-500 font-semibold text-forest transition-all duration-200 cursor-pointer hover:scale-105 flex items-center">Hormone & Immune Balance</div>
            </div>
          </div>

          {/* SVG for drawing connecting lines */}
          <svg ref={svgRef} id="connector-svg" className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></svg>
        </div>
      </div>


    </section>
  );
}