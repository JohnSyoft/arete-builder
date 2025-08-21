export const NFTHero1 = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Discover Rare
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  Digital Art
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Explore, collect, and trade extraordinary NFTs from the world's most talented digital artists.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all">
                Explore Collection
              </button>
              <button className="border-2 border-white/20 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
                Create NFT
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-gray-400">Artworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5K+</div>
                <div className="text-gray-400">Artists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2K+</div>
                <div className="text-gray-400">Collections</div>
              </div>
            </div>
          </div>

          {/* NFT Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:scale-105 transition-transform"
                >
                  <img
                    src={`/placeholder.svg?height=200&width=200&query=NFT digital art ${i}`}
                    alt={`NFT ${i}`}
                    className="w-full aspect-square object-cover rounded-lg mb-3"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold">Digital Art #{i}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">0.{i}5 ETH</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Available</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
