import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, ChevronDown, Star, Heart, Eye, ArrowUpDown } from 'lucide-react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const carData = [
    {
        id: 1,
        make: "Audi",
        model: "A4 Quattro",
        year: 2024,
        price: 45000,
        mileage: 12000,
        fuel: "Gasoline",
        transmission: "Automatic",
        bodyType: "Sedan",
        color: "Black",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
        rating: 4.8,
        features: ["Navigation", "Leather Seats", "Sunroof", "Bluetooth"]
    },
    {
        id: 2,
        make: "BMW",
        model: "M3 Competition",
        year: 2024,
        price: 72000,
        mileage: 5000,
        fuel: "Gasoline",
        transmission: "Automatic",
        bodyType: "Sedan",
        color: "White",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        rating: 4.9,
        features: ["Sport Mode", "Premium Audio", "Adaptive Cruise", "Parking Assist"]
    },
    {
        id: 3,
        make: "Mercedes",
        model: "C-Class AMG",
        year: 2023,
        price: 58000,
        mileage: 8000,
        fuel: "Gasoline",
        transmission: "Automatic",
        bodyType: "Sedan",
        color: "Silver",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
        rating: 4.7,
        features: ["AMG Package", "Massage Seats", "360 Camera", "Wireless Charging"]
    },
    {
        id: 4,
        make: "Tesla",
        model: "Model S",
        year: 2024,
        price: 89000,
        mileage: 2000,
        fuel: "Electric",
        transmission: "Automatic",
        bodyType: "Sedan",
        color: "Red",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop",
        rating: 4.6,
        features: ["Autopilot", "Supercharging", "Glass Roof", "Premium Interior"]
    },
    {
        id: 5,
        make: "Porsche",
        model: "911 Carrera",
        year: 2023,
        price: 125000,
        mileage: 3000,
        fuel: "Gasoline",
        transmission: "Manual",
        bodyType: "Coupe",
        color: "Blue",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
        rating: 4.9,
        features: ["Sport Chrono", "Carbon Fiber", "Track Mode", "Bose Audio"]
    },
    {
        id: 6,
        make: "Lamborghini",
        model: "Huracan",
        year: 2023,
        price: 250000,
        mileage: 1500,
        fuel: "Gasoline",
        transmission: "Automatic",
        bodyType: "Coupe",
        color: "Orange",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
        rating: 4.8,
        features: ["V10 Engine", "Carbon Fiber", "Track Package", "Alcantara Interior"]
    }
];

const makes = [...new Set(carData.map(car => car.make))];
const models = [...new Set(carData.map(car => car.model))];
const bodyTypes = [...new Set(carData.map(car => car.bodyType))];
const fuelTypes = [...new Set(carData.map(car => car.fuel))];

// function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//         setIsScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
//         }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
//             <div className="flex-shrink-0">
//                 <h1 className={`text-2xl font-bold italic ${
//                 isScrolled ? 'text-gray-900' : 'text-white'
//                 }`}>
//                 TheCarDealers
//                 </h1>
//             </div>
            
//             <div className="hidden md:flex items-center space-x-8">
//                 <a href="#home" className={`hover:text-blue-600 transition-colors ${
//                 isScrolled ? 'text-gray-700' : 'text-white'
//                 }`}>Home</a>
//                 <a href="#inventory" className={`hover:text-blue-600 transition-colors ${
//                 isScrolled ? 'text-gray-700' : 'text-white'
//                 }`}>Inventory</a>
//                 <a href="#financing" className={`hover:text-blue-600 transition-colors ${
//                 isScrolled ? 'text-gray-700' : 'text-white'
//                 }`}>Financing</a>
//                 <a href="#contact" className={`hover:text-blue-600 transition-colors ${
//                 isScrolled ? 'text-gray-700' : 'text-white'
//                 }`}>Contact</a>
//             </div>

//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium">
//                 Book Test Drive
//             </button>
//             </div>
//         </div>
//         </nav>
//     );
// }

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
            <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Our Premium
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Inventory
                </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Discover our curated collection of premium vehicles. From luxury sedans to high-performance sports cars, find your perfect match.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105">
                Browse Collection
                </button>
            </div>

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

function FilterSection({ filters, setFilters, filteredCars, viewMode, setViewMode, sortBy, setSortBy }) {
    const [showFilters, setShowFilters] = useState(false);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        setFilters({
        make: '',
        model: '',
        bodyType: '',
        fuel: '',
        priceRange: [0, 300000],
        search: ''
        });
    };

    return (
        <div className="bg-white sticky top-16 z-40 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Mobile Filter Toggle */}
            <div className="flex items-center justify-between mb-4 md:hidden">
            <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
            >
                <Filter className="w-4 h-4" />
                Filters
            </button>
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{filteredCars.length} cars</span>
                <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
                </button>
            </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Vehicle Inventory</h2>
            <div className="flex items-center gap-4">
                <span className="text-gray-600">{filteredCars.length} vehicles found</span>
                <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="year-desc">Year: Newest First</option>
                <option value="mileage-asc">Mileage: Low to High</option>
                <option value="rating-desc">Rating: High to Low</option>
                </select>
                <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
                </button>
            </div>
            </div>

            {/* Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                {/* Search */}
                <div className="lg:col-span-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                    type="text"
                    placeholder="Search by make, model..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                </div>

                {/* Make */}
                <div>
                <select
                    value={filters.make}
                    onChange={(e) => handleFilterChange('make', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="">All Makes</option>
                    {makes.map(make => (
                    <option key={make} value={make}>{make}</option>
                    ))}
                </select>
                </div>

                {/* Model */}
                <div>
                <select
                    value={filters.model}
                    onChange={(e) => handleFilterChange('model', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="">All Models</option>
                    {models.map(model => (
                    <option key={model} value={model}>{model}</option>
                    ))}
                </select>
                </div>

                {/* Body Type */}
                <div>
                <select
                    value={filters.bodyType}
                    onChange={(e) => handleFilterChange('bodyType', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="">All Types</option>
                    {bodyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                    ))}
                </select>
                </div>

                {/* Fuel Type */}
                <div>
                <select
                    value={filters.fuel}
                    onChange={(e) => handleFilterChange('fuel', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="">All Fuel Types</option>
                    {fuelTypes.map(fuel => (
                    <option key={fuel} value={fuel}>{fuel}</option>
                    ))}
                </select>
                </div>
            </div>

            {/* Price Range */}
            <div className="mt-4 flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Price Range:</span>
                <div className="flex items-center gap-2">
                <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceRange[0]}
                    onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value) || 0, filters.priceRange[1]])}
                    className="w-24 px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="text-gray-500">-</span>
                <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value) || 300000])}
                    className="w-24 px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                </div>
                <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                Clear All
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}

function CarCard({ car, viewMode }) {
    const [isLiked, setIsLiked] = useState(false);

    if (viewMode === 'list') {
        return (
        <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
                <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
            </div>
            <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                    {car.year} {car.make} {car.model}
                </h3>
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors ${
                    isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                    }`}
                >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                </div>
                
                <div className="flex items-center mb-3">
                <div className="flex items-center text-yellow-500 mr-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{car.rating}</span>
                </div>
                <span className="text-sm text-gray-500">• {car.color}</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                <div>
                    <span className="font-medium">Mileage:</span>
                    <p>{car.mileage.toLocaleString()} miles</p>
                </div>
                <div>
                    <span className="font-medium">Fuel:</span>
                    <p>{car.fuel}</p>
                </div>
                <div>
                    <span className="font-medium">Transmission:</span>
                    <p>{car.transmission}</p>
                </div>
                <div>
                    <span className="font-medium">Body Type:</span>
                    <p>{car.bodyType}</p>
                </div>
                </div>

                <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-blue-600">
                    ${car.price.toLocaleString()}
                </span>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                    View Details
                    </button>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Test Drive
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 group">
        <div className="relative overflow-hidden">
            <img
            src={car.image}
            alt={`${car.make} ${car.model}`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <button
            onClick={() => setIsLiked(!isLiked)}
            className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors ${
                isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
            >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {car.year}
            </div>
        </div>
        
        <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
            {car.make} {car.model}
            </h3>
            
            <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-blue-600">
                ${car.price.toLocaleString()}
            </span>
            <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{car.rating}</span>
            </div>
            </div>

            <div className="space-y-1 text-sm text-gray-600 mb-4">
            <div className="flex justify-between">
                <span>Mileage:</span>
                <span>{car.mileage.toLocaleString()} miles</span>
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

            <div className="flex gap-2">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                Details
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                Test Drive
            </button>
            </div>
        </div>
        </div>
    );
}

export default function Inventory() {
    const [filters, setFilters] = useState({
        make: '',
        model: '',
        bodyType: '',
        fuel: '',
        priceRange: [0, 300000],
        search: ''
    });
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('price-asc');

    // Filter cars based on current filters
    const filteredCars = carData.filter(car => {
        const matchesMake = !filters.make || car.make === filters.make;
        const matchesModel = !filters.model || car.model === filters.model;
        const matchesBodyType = !filters.bodyType || car.bodyType === filters.bodyType;
        const matchesFuel = !filters.fuel || car.fuel === filters.fuel;
        const matchesPrice = car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1];
        const matchesSearch = !filters.search || 
        car.make.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.model.toLowerCase().includes(filters.search.toLowerCase());

        return matchesMake && matchesModel && matchesBodyType && matchesFuel && matchesPrice && matchesSearch;
    });

    // Sort cars based on selected sort option
    const sortedCars = [...filteredCars].sort((a, b) => {
        switch (sortBy) {
        case 'price-asc':
            return a.price - b.price;
        case 'price-desc':
            return b.price - a.price;
        case 'year-desc':
            return b.year - a.year;
        case 'mileage-asc':
            return a.mileage - b.mileage;
        case 'rating-desc':
            return b.rating - a.rating;
        default:
            return 0;
        }
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Hero />
            
            <FilterSection 
                filters={filters}
                setFilters={setFilters}
                filteredCars={filteredCars}
                viewMode={viewMode}
                setViewMode={setViewMode}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            {/* Car Grid/List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {sortedCars.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                    <Search className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No vehicles found</h3>
                    <p className="text-gray-600">Try adjusting your filters to see more results.</p>
                </div>
                ) : (
                <div className={`${
                    viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-4'
                }`}>
                    {sortedCars.map(car => (
                    <CarCard key={car.id} car={car} viewMode={viewMode} />
                    ))}
                </div>
                )}
            </div>

            {/* Load More Button */}
            {sortedCars.length > 0 && (
                <div className="text-center pb-12">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    Load More Vehicles
                </button>
                </div>
            )}
            <Footer />
        </div>
    );
}