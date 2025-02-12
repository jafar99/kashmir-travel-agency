import { useRoute } from "wouter";
import { packages } from "@/data/data";
import { motion } from "framer-motion";
import { Star, Calendar } from "lucide-react";
import BookingForm from "@/components/booking-form";
import ActivityCard from "@/components/activity-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ImageGallery from "@/components/image-gallery";

export default function PackageDetails() {
  const [, params] = useRoute("/package/:id");
  const pkg = packages.find((p) => p.id === params?.id);

  if (!pkg) {
    return <div>Package not found</div>;
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero section with main image */}
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
              {/* Image Gallery */}
              <div className="not-prose mb-8">
                <ImageGallery images={pkg.gallery} />
              </div>

              {/* Package Description */}
              <h2 className="text-3xl font-bold">About this Package</h2>
              <p className="text-lg text-gray-600">{pkg.description}</p>

              {/* Day-wise Itinerary */}
              <h2 className="text-3xl font-bold mt-12">Day-wise Itinerary</h2>
              <div className="not-prose mb-8">
                <Accordion type="single" collapsible className="w-full">
                  {pkg.itinerary.map((day) => (
                    <AccordionItem key={day.day} value={`day-${day.day}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div className="text-left">
                            <p className="font-semibold">Day {day.day}</p>
                            <p className="text-sm text-gray-600">{day.title}</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-4 pb-2 px-4">
                          <p className="text-gray-600 mb-4">{day.description}</p>
                          <div className="space-y-2">
                            {day.activities.map((activity, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <div className="w-2 h-2 rounded-full bg-primary/60" />
                                {activity}
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Hotel Details */}
              <h2 className="text-3xl font-bold mt-12">Accommodation</h2>
              <div className="not-prose">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
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
                </motion.div>
              </div>

              {/* Activities */}
              <h2 className="text-3xl font-bold mt-12">Included Activities</h2>
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

          {/* Booking Form */}
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