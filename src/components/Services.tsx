import { Award, Car, Shield, Users } from "lucide-react";

const services = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "Premium Selection",
    description: "Curated collection of luxury and performance vehicles"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Warranty Protection",
    description: "Comprehensive coverage for peace of mind"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Expert Service",
    description: "Professional maintenance and repair services"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Customer First",
    description: "Dedicated support throughout your journey"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our comprehensive automotive services and customer-first approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}