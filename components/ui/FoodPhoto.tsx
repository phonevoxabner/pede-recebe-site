type FoodType = "burger" | "burger-duplo" | "combo" | "pizza" | "drink" | "fries";

interface FoodPhotoProps {
  tipo?: FoodType;
  size?: number;
  bgColor?: string;
  className?: string;
}

function BurgerIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="100%" height="100%">
      {/* top bun — dome */}
      <path d="M9 22 Q9 7 24 7 Q39 7 39 22 Z" fill="rgba(255,255,255,0.88)" />
      {/* sesame seeds */}
      <circle cx="18" cy="13" r="1.5" fill="rgba(255,255,255,0.5)" />
      <circle cx="25" cy="11" r="1.5" fill="rgba(255,255,255,0.5)" />
      <circle cx="32" cy="14" r="1.5" fill="rgba(255,255,255,0.5)" />
      {/* lettuce */}
      <path d="M7 23 Q10 21 13 23 Q16 25 19 23 Q22 21 25 23 Q28 25 31 23 Q34 21 37 23 Q39 25 41 23 L41 25 L7 25 Z" fill="rgba(255,255,255,0.5)" />
      {/* patty */}
      <rect x="8" y="25" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.78)" />
      {/* cheese strip */}
      <rect x="7" y="30" width="34" height="2" rx="1" fill="rgba(255,255,255,0.42)" />
      {/* bottom bun */}
      <path d="M8 32 L40 32 Q40 41 24 41 Q8 41 8 32 Z" fill="rgba(255,255,255,0.82)" />
    </svg>
  );
}

function BurgerDuploIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="100%" height="100%">
      {/* top bun */}
      <path d="M10 18 Q10 7 24 7 Q38 7 38 18 Z" fill="rgba(255,255,255,0.85)" />
      <circle cx="19" cy="12" r="1.5" fill="rgba(255,255,255,0.45)" />
      <circle cx="26" cy="10" r="1.5" fill="rgba(255,255,255,0.45)" />
      <circle cx="31" cy="13" r="1.5" fill="rgba(255,255,255,0.45)" />
      {/* patty 1 */}
      <rect x="9" y="18" width="30" height="4" rx="2" fill="rgba(255,255,255,0.75)" />
      {/* middle bun */}
      <rect x="8" y="22" width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.55)" />
      {/* patty 2 */}
      <rect x="9" y="25" width="30" height="4" rx="2" fill="rgba(255,255,255,0.75)" />
      {/* lettuce */}
      <path d="M8 29 Q11 27.5 14 29 Q17 30.5 20 29 Q23 27.5 26 29 Q29 30.5 32 29 Q35 27.5 38 29 L38 31 L8 31 Z" fill="rgba(255,255,255,0.45)" />
      {/* bottom bun */}
      <path d="M9 31 L39 31 Q39 40 24 40 Q9 40 9 31 Z" fill="rgba(255,255,255,0.80)" />
    </svg>
  );
}

function ComboIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="100%" height="100%">
      {/* burger (left) */}
      <path d="M5 20 Q5 11 15 11 Q25 11 25 20 Z" fill="rgba(255,255,255,0.80)" />
      <rect x="4" y="20" width="22" height="3.5" rx="1.75" fill="rgba(255,255,255,0.70)" />
      <rect x="4" y="23.5" width="22" height="2" rx="1" fill="rgba(255,255,255,0.45)" />
      <path d="M4 25.5 L26 25.5 Q26 33 15 33 Q4 33 4 25.5 Z" fill="rgba(255,255,255,0.75)" />
      {/* fries (right) */}
      <rect x="30" y="18" width="14" height="18" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="32" y="10" width="2.5" height="10" rx="1.25" fill="rgba(255,255,255,0.80)" />
      <rect x="36" y="8" width="2.5" height="12" rx="1.25" fill="rgba(255,255,255,0.80)" />
      <rect x="40" y="10" width="2.5" height="10" rx="1.25" fill="rgba(255,255,255,0.80)" />
      {/* drink straw */}
      <rect x="32" y="30" width="12" height="10" rx="3" fill="rgba(255,255,255,0.30)" />
      <line x1="41" y1="28" x2="41" y2="32" stroke="rgba(255,255,255,0.80)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PizzaIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="100%" height="100%">
      <path d="M24 6 L44 40 Q24 46 4 40 Z" fill="rgba(255,255,255,0.80)" />
      <path d="M24 6 L44 40 Q24 46 4 40 Z" fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="1" />
      <circle cx="24" cy="28" r="2.5" fill="rgba(255,255,255,0.50)" />
      <circle cx="18" cy="34" r="2" fill="rgba(255,255,255,0.50)" />
      <circle cx="31" cy="33" r="2" fill="rgba(255,255,255,0.50)" />
      <circle cx="24" cy="20" r="1.5" fill="rgba(255,255,255,0.50)" />
      <line x1="24" y1="6" x2="24" y2="40" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
    </svg>
  );
}

function DrinkIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="100%" height="100%">
      {/* cup */}
      <path d="M13 14 L16 40 Q24 44 32 40 L35 14 Z" fill="rgba(255,255,255,0.75)" />
      {/* lid */}
      <rect x="11" y="10" width="26" height="5" rx="2.5" fill="rgba(255,255,255,0.85)" />
      {/* dome lid */}
      <path d="M14 10 Q24 4 34 10" fill="rgba(255,255,255,0.60)" />
      {/* straw */}
      <rect x="27" y="3" width="3" height="22" rx="1.5" fill="rgba(255,255,255,0.90)" />
      {/* highlight */}
      <path d="M16 20 L17 36" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FriesIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="100%" height="100%">
      {/* box */}
      <path d="M10 26 L14 42 Q24 46 34 42 L38 26 Z" fill="rgba(255,255,255,0.70)" />
      <path d="M10 26 L38 26" stroke="rgba(255,255,255,0.40)" strokeWidth="1" />
      {/* fries */}
      <rect x="15" y="10" width="3.5" height="18" rx="1.75" fill="rgba(255,255,255,0.90)" />
      <rect x="20" y="7" width="3.5" height="21" rx="1.75" fill="rgba(255,255,255,0.90)" />
      <rect x="25" y="9" width="3.5" height="19" rx="1.75" fill="rgba(255,255,255,0.90)" />
      <rect x="30" y="11" width="3.5" height="17" rx="1.75" fill="rgba(255,255,255,0.90)" />
    </svg>
  );
}

const ICONS: Record<FoodType, React.FC> = {
  burger:       BurgerIcon,
  "burger-duplo": BurgerDuploIcon,
  combo:        ComboIcon,
  pizza:        PizzaIcon,
  drink:        DrinkIcon,
  fries:        FriesIcon,
};

const GRADIENTS: Record<FoodType, string> = {
  burger:         "linear-gradient(135deg, #c8712a 0%, #a0521a 100%)",
  "burger-duplo": "linear-gradient(135deg, #9b4f18 0%, #7a3810 100%)",
  combo:          "linear-gradient(135deg, #b8620a 0%, #8c4808 100%)",
  pizza:          "linear-gradient(135deg, #c44520 0%, #9b3015 100%)",
  drink:          "linear-gradient(135deg, #2a6ea8 0%, #1a4e7a 100%)",
  fries:          "linear-gradient(135deg, #d4a020 0%, #a07810 100%)",
};

export default function FoodPhoto({ tipo = "burger", size = 56, bgColor, className = "" }: FoodPhotoProps) {
  const Icon = ICONS[tipo];
  const bg = bgColor ?? GRADIENTS[tipo];
  const iconSize = Math.round(size * 0.72);
  return (
    <div
      className={`rounded-xl overflow-hidden shrink-0 flex items-center justify-center ${className}`}
      style={{ width: size, height: size, minWidth: size, minHeight: size, background: bg }}
      aria-hidden="true"
    >
      <div style={{ width: iconSize, height: iconSize }}>
        <Icon />
      </div>
    </div>
  );
}
