import { DraggableWrapper } from "@/components/blocks/Utility/DraggableWrapper";

export function Hero4_Easy(props: any) {
  return (
    <DraggableWrapper
      className="bg-gradient-to-br from-orange-50 to-pink-50"
      enableAutoConversion={true}
      hasOverlay={false}
      contentPadding="px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Create. Launch.
            <span className="text-orange-600"> Succeed.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of entrepreneurs who've built their dream websites
            with our platform. No technical skills needed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
            Start Building Free
          </button>
          <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
            Watch Demo
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Build and deploy in minutes, not hours
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Beautiful Designs
            </h3>
            <p className="text-gray-600">Professional templates that convert</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Mobile Ready</h3>
            <p className="text-gray-600">Responsive on every device</p>
          </div>
        </div>
      </div>
    </DraggableWrapper>
  );
}

Hero4_Easy.craft = {
  displayName: "Hero 4 Easy",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
