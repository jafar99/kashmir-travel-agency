import { useRoute } from "wouter";
import { packages } from "@/data/data";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import BookingForm from "@/components/booking-form";
import ActivityCard from "@/components/activity-card";

export default function PackageDetails() {
  const [, params] = useRoute("/package/:id");
  const pkg = packages.find((p) => p.id === params?.id);

  if (!pkg) {
    return <div>Package not found</div>;
  }

  return (
    <div className="min-h-screen pt-20">
      <div
        className="h-[60vh] relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${pkg.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80"
        >
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">{pkg.name}</h1>
            <p className="text-xl">{pkg.duration}</p>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose max-w-none"
            >
              <h2>About this Package</h2>
              <p className="text-lg">{pkg.description}</p>

              <h2>Hotel Details</h2>
              <div className="not-prose">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={pkg.hotel.image}
                    alt={pkg.hotel.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{pkg.hotel.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1">{pkg.hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{pkg.hotel.description}</p>
                  </div>
                </div>
              </div>

              <h2>Included Activities</h2>
              <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
                {pkg.activities.map((activity, index) => (
                  <ActivityCard
                    key={activity.name}
                    activity={activity}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Book this Package</h2>
              <BookingForm pkg={pkg} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
