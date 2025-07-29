"use client"

import { useState } from "react"

interface InteractiveWorldMapProps {
  selectedCountries: string[]
  onCountryClick: (country: string) => void
}

const InteractiveWorldMap = ({ selectedCountries, onCountryClick }: InteractiveWorldMapProps) => {
  const [hoveredCountry, setHoveredCountry] = useState<string>("")

  // Office locations for markers
  const officeLocations = [
    { key: "USA", x: 200, y: 200, label: "USA Office" },
    { key: "UAE", x: 580, y: 280, label: "UAE Office" },
    { key: "Bangladesh", x: 720, y: 270, label: "Bangladesh HQ" },
    { key: "Malaysia", x: 750, y: 350, label: "Malaysia Office" },
  ]

  const getSelectedOffices = () => {
    return officeLocations.filter((office) => selectedCountries.includes(office.key))
  }

  return (
    <div className="w-full h-full relative bg-gray-800/20 rounded-2xl overflow-hidden">
      <svg viewBox="0 0 900 450" className="w-full h-full">
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
            <stop offset="0%" stopColor="#1169F3" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C11DFF" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1169F3" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#C11DFF" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background ocean */}
        <rect width="100%" height="100%" fill="#1f2937" opacity="0.3" />

        {/* Grid lines for reference */}
        <g opacity="0.1">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#6B7280" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </g>

        {/* NORTH AMERICA */}

        {/* Canada */}
        <path
          d="M50 70 L90 65 L140 60 L180 55 L220 60 L260 65 L300 70 L330 80 L340 100 L335 120 L325 135 L310 145 L290 150 L270 155 L250 160 L230 165 L210 160 L190 155 L170 150 L150 145 L130 140 L110 135 L90 130 L70 120 L55 105 L50 85 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* USA */}
        <path
          d="M70 135 L130 140 L170 150 L210 160 L250 160 L290 150 L330 145 L350 150 L360 160 L365 175 L360 195 L350 210 L330 220 L290 225 L250 230 L210 235 L170 230 L130 225 L90 220 L70 210 L60 195 L55 175 L60 155 Z"
          fill={selectedCountries.includes("USA") ? "url(#selectedGradient)" : "url(#defaultGradient)"}
          stroke={selectedCountries.includes("USA") ? "#ffffff" : "#6B7280"}
          strokeWidth={selectedCountries.includes("USA") ? 2 : 1}
          className="cursor-pointer transition-all duration-300 hover:fill-[url(#hoverGradient)]"
          onClick={() => onCountryClick("USA")}
          onMouseEnter={() => setHoveredCountry("USA")}
          onMouseLeave={() => setHoveredCountry("")}
        />

        {/* Mexico */}
        <path
          d="M90 220 L170 230 L210 235 L250 230 L280 240 L285 255 L280 270 L250 280 L210 285 L170 280 L130 275 L100 260 L90 245 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* SOUTH AMERICA */}

        {/* Brazil */}
        <path
          d="M230 300 L290 295 L330 305 L350 325 L360 350 L355 375 L345 395 L320 405 L290 410 L260 405 L235 395 L220 375 L215 350 L220 325 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Argentina */}
        <path
          d="M235 395 L260 405 L280 415 L290 435 L285 455 L275 470 L260 475 L245 470 L235 455 L230 435 L230 415 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* EUROPE */}

        {/* United Kingdom */}
        <path
          d="M380 120 L400 115 L415 125 L420 140 L415 155 L400 160 L385 155 L375 140 L375 130 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* France */}
        <path
          d="M390 160 L415 155 L435 165 L440 180 L435 195 L415 200 L395 195 L385 180 L385 170 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Germany */}
        <path
          d="M435 145 L455 140 L470 150 L475 165 L470 180 L455 185 L440 180 L435 165 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Scandinavia */}
        <path
          d="M440 80 L460 75 L480 85 L490 105 L485 125 L475 140 L460 145 L445 140 L435 125 L435 105 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* RUSSIA */}
        <path
          d="M490 85 L540 80 L590 85 L640 90 L690 95 L740 100 L790 105 L830 110 L860 120 L865 140 L860 160 L840 170 L790 175 L740 170 L690 165 L640 160 L590 155 L540 150 L490 145 L485 125 L485 105 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* AFRICA */}

        {/* North Africa */}
        <path
          d="M380 200 L440 195 L500 200 L540 205 L560 215 L565 235 L560 255 L540 265 L500 270 L460 265 L420 260 L390 255 L380 235 L380 215 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Central & Southern Africa */}
        <path
          d="M420 260 L500 270 L540 265 L560 275 L565 295 L560 315 L545 335 L520 345 L490 350 L460 345 L430 335 L410 315 L405 295 L410 275 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* MIDDLE EAST */}

        {/* Saudi Arabia & Middle East */}
        <path
          d="M540 205 L580 200 L610 210 L620 230 L615 250 L600 260 L580 265 L560 260 L545 245 L540 225 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* UAE */}
        <path
          d="M610 250 L625 245 L635 255 L630 265 L620 270 L610 265 L605 255 Z"
          fill={selectedCountries.includes("UAE") ? "url(#selectedGradient)" : "url(#defaultGradient)"}
          stroke={selectedCountries.includes("UAE") ? "#ffffff" : "#6B7280"}
          strokeWidth={selectedCountries.includes("UAE") ? 2 : 1}
          className="cursor-pointer transition-all duration-300 hover:fill-[url(#hoverGradient)]"
          onClick={() => onCountryClick("UAE")}
          onMouseEnter={() => setHoveredCountry("UAE")}
          onMouseLeave={() => setHoveredCountry("")}
        />

        {/* ASIA */}

        {/* China */}
        <path
          d="M640 160 L700 155 L750 165 L780 180 L785 200 L780 220 L760 235 L720 240 L680 235 L650 225 L635 205 L635 185 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* India */}
        <path
          d="M620 230 L660 225 L690 235 L710 255 L715 275 L710 295 L690 305 L660 310 L635 305 L615 285 L610 265 L615 245 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Bangladesh */}
        <path
          d="M690 255 L710 250 L720 260 L715 275 L705 280 L695 275 L690 265 Z"
          fill={selectedCountries.includes("Bangladesh") ? "url(#selectedGradient)" : "url(#defaultGradient)"}
          stroke={selectedCountries.includes("Bangladesh") ? "#ffffff" : "#6B7280"}
          strokeWidth={selectedCountries.includes("Bangladesh") ? 2 : 1}
          className="cursor-pointer transition-all duration-300 hover:fill-[url(#hoverGradient)]"
          onClick={() => onCountryClick("Bangladesh")}
          onMouseEnter={() => setHoveredCountry("Bangladesh")}
          onMouseLeave={() => setHoveredCountry("")}
        />

        {/* Southeast Asia */}
        <path
          d="M710 295 L730 290 L745 305 L740 320 L725 325 L710 320 L705 305 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Malaysia */}
        <path
          d="M725 325 L745 320 L760 330 L765 345 L760 360 L745 365 L730 360 L720 345 L720 335 Z"
          fill={selectedCountries.includes("Malaysia") ? "url(#selectedGradient)" : "url(#defaultGradient)"}
          stroke={selectedCountries.includes("Malaysia") ? "#ffffff" : "#6B7280"}
          strokeWidth={selectedCountries.includes("Malaysia") ? 2 : 1}
          className="cursor-pointer transition-all duration-300 hover:fill-[url(#hoverGradient)]"
          onClick={() => onCountryClick("Malaysia")}
          onMouseEnter={() => setHoveredCountry("Malaysia")}
          onMouseLeave={() => setHoveredCountry("")}
        />

        {/* Indonesia */}
        <path
          d="M720 365 L760 360 L790 365 L810 375 L815 390 L810 405 L790 410 L760 405 L730 400 L705 390 L705 375 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Japan */}
        <path
          d="M800 180 L815 175 L825 185 L830 200 L825 220 L815 235 L805 240 L800 225 L800 205 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* AUSTRALIA */}
        <path
          d="M710 380 L770 375 L810 380 L840 395 L850 415 L845 435 L825 445 L790 450 L750 445 L720 435 L700 415 L695 395 Z"
          fill="url(#defaultGradient)"
          stroke="#6B7280"
          strokeWidth="1"
          className="transition-all duration-300 hover:fill-[url(#hoverGradient)]"
        />

        {/* Connection Lines between selected offices */}
        {getSelectedOffices().length > 1 && (
          <g>
            {getSelectedOffices().map((office1, index1) =>
              getSelectedOffices()
                .slice(index1 + 1)
                .map((office2, index2) => (
                  <line
                    key={`${office1.key}-${office2.key}`}
                    x1={office1.x}
                    y1={office1.y}
                    x2={office2.x}
                    y2={office2.y}
                    stroke="url(#connectionGradient)"
                    strokeWidth="3"
                    strokeDasharray="10,5"
                    filter="url(#glow)"
                    opacity="0.8"
                    className="animate-pulse"
                    style={{ animationDelay: `${(index1 + index2) * 0.5}s` }}
                  />
                )),
            )}
          </g>
        )}

        {/* Office Markers */}
        {officeLocations.map((office) => {
          const isSelected = selectedCountries.includes(office.key)
          return (
            <g key={office.key}>
              {isSelected && (
                <>
                  {/* Pulsing outer ring */}
                  <circle cx={office.x} cy={office.y} r="15" fill="#1169F3" opacity="0.3" className="animate-pulse" />
                  {/* Main marker */}
                  <circle cx={office.x} cy={office.y} r="10" fill="#1169F3" stroke="#ffffff" strokeWidth="2" />
                  {/* Inner dot */}
                  <circle cx={office.x} cy={office.y} r="4" fill="#ffffff" />
                  {/* Label */}
                  <text
                    x={office.x}
                    y={office.y + 30}
                    textAnchor="middle"
                    className="text-sm fill-white font-semibold"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "12px",
                      fontWeight: "600",
                      filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
                    }}
                  >
                    {office.label}
                  </text>
                </>
              )}
            </g>
          )
        })}

        {/* Decorative elements */}
        <g opacity="0.1">
          {/* Latitude lines */}
          <line x1="0" y1="112" x2="900" y2="112" stroke="#6B7280" strokeWidth="0.5" strokeDasharray="4,4" />
          <line x1="0" y1="225" x2="900" y2="225" stroke="#6B7280" strokeWidth="0.5" strokeDasharray="4,4" />
          <line x1="0" y1="337" x2="900" y2="337" stroke="#6B7280" strokeWidth="0.5" strokeDasharray="4,4" />

          {/* Longitude lines */}
          <line x1="225" y1="0" x2="225" y2="450" stroke="#6B7280" strokeWidth="0.5" strokeDasharray="4,4" />
          <line x1="450" y1="0" x2="450" y2="450" stroke="#6B7280" strokeWidth="0.5" strokeDasharray="4,4" />
          <line x1="675" y1="0" x2="675" y2="450" stroke="#6B7280" strokeWidth="0.5" strokeDasharray="4,4" />
        </g>
      </svg>

      {/* Hover tooltip */}
      {hoveredCountry && (
        <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 pointer-events-none z-10">
          <p className="text-sm text-white font-medium">
            Click to {selectedCountries.includes(hoveredCountry) ? "deselect" : "select"} {hoveredCountry}
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 z-10">
        <h4 className="text-sm font-semibold text-white mb-2">Mindnetik Offices</h4>
        <div className="space-y-2">
          {officeLocations.map((office) => (
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

      {/* Success indicator */}
      <div className="absolute top-4 right-4 bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-2">
        <p className="text-xs text-green-400 font-medium">✓ Map Loaded Successfully</p>
      </div>
    </div>
  )
}

export default InteractiveWorldMap
