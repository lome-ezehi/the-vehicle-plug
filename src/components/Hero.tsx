export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
            <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Your Number
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    #1 Car Plug
                </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Discover premium vehicles with unmatched quality, exceptional service, and competitive pricing. Your dream car awaits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105">
                    Browse Inventory
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-200">
                    Schedule Visit
                </button>
                </div>
            </div>

            {/* Car Image */}
            <div className="relative">
                <div className="relative z-10">
                <img
                    src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop"
                    alt="Luxury car showcase"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                />
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            </div>
            </div>
        </div>
        </section>
    );
}