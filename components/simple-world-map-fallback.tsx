"use client"

interface SimpleWorldMapFallbackProps {
  selectedCountries: string[]
  onCountryClick: (country: string) => void
}

const SimpleWorldMapFallback = ({ selectedCountries, onCountryClick }: SimpleWorldMapFallbackProps) => {
  return (
    <div className="w-full h-full relative bg-gray-800/20 rounded-2xl overflow-hidden">
      <svg viewBox="0 0 1000 500" className="w-full h-full">
        <defs>
          <linearGradient id="selectedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f8f9fa" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#374151" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4B5563" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1169F3" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C11DFF" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Simplified world map - major continents */}

        {/* North America */}
        <path
          d="M50 90 L300 85 L380 100 L390 120 L385 140 L360 165 L280 180 L190 185 L100 170 L50 125 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* USA */}
        <path
          d="M80 160 L340 170 L370 185 L375 200 L360 235 L280 255 L190 260 L100 245 L70 220 L70 180 Z"
          fill={selectedCountries.includes("USA") ? "url(#selectedGradient)" : "url(#defaultGradient)"}
          stroke={selectedCountries.includes("USA") ? "#ffffff" : "#6B7280"}
          strokeWidth="1.5"
          className="cursor-pointer transition-all duration-300 hover:fill-[url(#hoverGradient)]"
          onClick={() => onCountryClick("USA")}
        />

        {/* South America */}
        <path
          d="M220 315 L380 375 L390 400 L375 445 L320 460 L265 445 L220 385 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Europe */}
        <path
          d="M420 140 L530 125 L540 165 L515 185 L475 185 L440 180 L415 160 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Africa */}
        <path
          d="M420 240 L600 255 L605 275 L600 355 L585 375 L530 390 L480 375 L420 275 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Asia */}
        <path
          d="M530 105 L920 145 L925 165 L900 195 L780 190 L680 180 L540 165 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* China */}
        <path
          d="M720 180 L860 200 L870 225 L850 270 L780 285 L710 270 L705 225 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* India */}
        <path
          d="M680 255 L770 280 L775 305 L750 345 L675 330 L670 280 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Bangladesh */}
        <path
          d="M750 280 L780 285 L775 300 L755 300 L750 290 Z"
          fill={selectedCountries.includes("Bangladesh") ? "url(#selectedGradient)" : "url(#defaultGradient)"}
          stroke={selectedCountries.includes("Bangladesh") ? "#ffffff" : "#6B7280"}
          strokeWidth="1.5"
          className="cursor-pointer transition-all duration-300 hover:fill-[url(#hoverGradient)]"
          onClick={() => onCountryClick("Bangladesh")}
        />

        {/* UAE */}
        <path
          d="M650 300 L675 305 L670 315 L650 315 Z"
          fill={selectedCountries.includes("UAE") ? "url(#selectedGradient)" : "url(#defaultGradient)"}
          stroke={selectedCountries.includes("UAE") ? "#ffffff" : "#6B7280"}
          strokeWidth="1.5"
          className="cursor-pointer transition-all duration-300 hover:fill-[url(#hoverGradient)]"
          onClick={() => onCountryClick("UAE")}
        />

        {/* Malaysia */}
        <path
          d="M790 370 L830 390 L825 400 L795 400 L785 380 Z"
          fill={selectedCountries.includes("Malaysia") ? "url(#selectedGradient)" : "url(#defaultGradient)"}
          stroke={selectedCountries.includes("Malaysia") ? "#ffffff" : "#6B7280"}
          strokeWidth="1.5"
          className="cursor-pointer transition-all duration-300 hover:fill-[url(#hoverGradient)]"
          onClick={() => onCountryClick("Malaysia")}
        />

        {/* Australia */}
        <path
          d="M790 420 L920 435 L930 455 L905 485 L800 480 L775 445 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Office markers */}
        {selectedCountries.includes("USA") && (
          <g>
            <circle cx="200" cy="225" r="10" fill="#1169F3" className="animate-pulse" opacity="0.9" />
            <circle cx="200" cy="225" r="5" fill="#ffffff" />
            <text x="200" y="250" textAnchor="middle" className="text-sm fill-white font-semibold">
              USA Office
            </text>
          </g>
        )}

        {selectedCountries.includes("UAE") && (
          <g>
            <circle cx="660" cy="310" r="10" fill="#1169F3" className="animate-pulse" opacity="0.9" />
            <circle cx="660" cy="310" r="5" fill="#ffffff" />
            <text x="660" y="335" textAnchor="middle" className="text-sm fill-white font-semibold">
              UAE Office
            </text>
          </g>
        )}

        {selectedCountries.includes("Bangladesh") && (
          <g>
            <circle cx="765" cy="290" r="10" fill="#1169F3" className="animate-pulse" opacity="0.9" />
            <circle cx="765" cy="290" r="5" fill="#ffffff" />
            <text x="765" y="315" textAnchor="middle" className="text-sm fill-white font-semibold">
              Bangladesh HQ
            </text>
          </g>
        )}

        {selectedCountries.includes("Malaysia") && (
          <g>
            <circle cx="810" cy="385" r="10" fill="#1169F3" className="animate-pulse" opacity="0.9" />
            <circle cx="810" cy="385" r="5" fill="#ffffff" />
            <text x="810" y="410" textAnchor="middle" className="text-sm fill-white font-semibold">
              Malaysia Office
            </text>
          </g>
        )}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-white mb-2">Mindnetik Offices</h4>
        <div className="space-y-2">
          {[
            { key: "USA", label: "USA Office" },
            { key: "UAE", label: "UAE Office" },
            { key: "Bangladesh", label: "Bangladesh HQ" },
            { key: "Malaysia", label: "Malaysia Office" },
          ].map((office) => (
            <div key={office.key} className="flex items-center space-x-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  selectedCountries.includes(office.key) ? "bg-primary animate-pulse" : "bg-gray-500"
                }`}
              />
              <span className="text-xs text-gray-300">{office.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimpleWorldMapFallback
