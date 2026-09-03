import React from 'react';

export function Logo({
  className = "h-12 w-auto",
  showText = true,
  inverted = false // For dark backgrounds like footer
}) {
  const primaryColor = inverted ? "#ffffff" : "#002a3c";
  const grayColor = inverted ? "#9ccdeb" : "#5a6578";
  const accentColor = inverted ? "#feae2c" : "#002a3c";
  const subtitleColor = inverted ? "#c4e7ff" : "#4a5568";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem */}
      <svg
        viewBox="0 0 240 180"
        className="h-full w-auto max-h-14 flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter M */}
        <path
          d="M16 116V22H36L58 76L80 22H100V116H82V54L63 98H53L34 54V116H16Z"
          fill={primaryColor}
        />

        {/* Letter S (Layered background curve) */}
        <path
          d="M65 64C65 42 82 30 110 30C132 30 148 38 154 55L136 63C132 53 124 47 110 47C96 47 84 53 84 64C84 76 94 82 116 88C142 94 158 103 158 126C158 152 136 164 108 164C82 164 64 152 56 134L76 124C82 136 92 146 108 146C124 146 138 138 138 126C138 112 126 107 106 100C80 94 65 84 65 64Z"
          fill={grayColor}
          opacity="0.9"
        />

        {/* Letter P */}
        <path
          d="M130 22H174C196 22 212 37 212 60C212 84 196 99 174 99H152V116H130V22ZM152 38V83H172C184 83 191 74 191 60C191 47 184 38 172 38H152Z"
          fill={primaryColor}
        />

        {/* Architectural Pillars inside P loop */}
        <path d="M158 82V48L166 43V82H158Z" fill={grayColor} />
        <path d="M168 82V38L176 33V82H168Z" fill={primaryColor} />
        <path d="M178 82V44L185 41V82H178Z" fill={grayColor} />

        {/* Arched Sweeping Bridge */}
        <path
          d="M68 122C106 98 160 95 214 118C202 103 156 88 110 102C92 108 78 115 68 122Z"
          fill={accentColor}
        />
        <path
          d="M84 135C120 115 170 112 220 130C206 120 166 107 124 118C108 123 94 129 84 135Z"
          fill={grayColor}
        />
      </svg>

      {/* Typography Label */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className="font-headline font-black text-xl md:text-2xl tracking-wider leading-none"
            style={{ color: primaryColor }}
          >
            MSP
          </span>
          <span
            className="text-[9px] md:text-[10px] tracking-[0.16em] uppercase font-bold mt-1 whitespace-nowrap"
            style={{ color: subtitleColor }}
          >
            Engineering Consultant
          </span>
        </div>
      )}
    </div>
  );
}
