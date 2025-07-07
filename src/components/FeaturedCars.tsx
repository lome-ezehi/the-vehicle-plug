import { ChevronRight, Star } from "lucide-react";

const featuredCars = [
    {
        id: 1,
        brand: "Audi",
        model: "A4 Quattro",
        year: 2024,
        price: 45000,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
        mileage: "12,000 miles",
        fuel: "Gasoline",
        transmission: "Automatic"
    },
    {
        id: 2,
        brand: "BMW",
        model: "M3 Competition",
        year: 2024,
        price: 72000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        mileage: "5,000 miles",
        fuel: "Gasoline",
        transmission: "Automatic"
    },
    {
        id: 3,
        brand: "Mercedes",
        model: "C-Class AMG",
        year: 2023,
        price: 58000,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
        mileage: "8,000 miles",
        fuel: "Gasoline",
        transmission: "Automatic"
    }
];

export default function FeaturedCars() {
    return (
        <section id="inventory" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our handpicked selection of premium vehicles, each offering exceptional performance and luxury
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
                <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                    <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {car.year}
                    </div>
                </div>
                
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {car.brand} {car.model}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                        ${car.price.toLocaleString()}
                    </span>
                    <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex justify-between">
                        <span>Mileage:</span>
                        <span>{car.mileage}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Fuel:</span>
                        <span>{car.fuel}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Transmission:</span>
                        <span>{car.transmission}</span>
                    </div>
                    </div>

                    <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center group">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                </div>
                </div>
            ))}
            </div>

            <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200">
                View All Inventory
            </button>
            </div>
        </div>
        </section>
    );
}