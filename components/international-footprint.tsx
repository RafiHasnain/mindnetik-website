export const InternationalFootprint = () => {

    return(
        <section className="py-32 bg-purple-900/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-manrope">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                  Our International
                </span>
                <br />
                <span className="text-white">Footprint</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  {/* <h3 className="text-6xl font-bold text-white">🇧🇩</h3> */}
                  <img src="/images/dhaka.svg" alt="BN" className="w-32 h-auto" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Bangladesh
                    </h3>
                    <p className="text-gray-400 text-sm">HEADQUARTER</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {/* <h3 className="text-6xl font-bold text-white">🇦🇪</h3> */}
                  <img src="/images/dubai.svg" alt="UAE" className="w-32 h-auto" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">UAE</h3>
                    <p className="text-gray-400 text-sm">MIDDLE EAST HUB</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {/* <h3 className="text-6xl font-bold text-white">🇲🇾</h3> */}
                  <img src="/images/malaysia.svg" alt="MY" className="w-32 h-auto" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Malaysia</h3>
                    <p className="text-gray-400 text-sm">
                      ASIA-PACIFIC OPERATIONS
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {/* <h3 className="text-6xl font-bold text-white">🇺🇸</h3> */}
                  <img src="/images/usa.svg" alt="USA" className="w-32 h-auto" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">USA</h3>
                    <p className="text-gray-400 text-sm">
                      North America Office
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Static World Map Image */}
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              {/* Subtle primary color hue behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary/25 via-primary/15 to-transparent rounded-full blur-3xl"></div>
              </div>

              {/* Main Map Image */}
              <div className="relative z-10">
                <img
                  src="/images/world map.png"
                  alt="Mindnetik International Footprint Map"
                  className="w-full h-auto object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}