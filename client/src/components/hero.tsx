import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1646204894165-95ed03d988ad)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Discover the Paradise on Earth
          </motion.h1>

          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience the breathtaking beauty of Kashmir with our curated travel packages. 
            From serene lakes to majestic mountains, create memories that last a lifetime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/packages">
              <Button size="lg" className="text-lg group">
                Explore Packages
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/packages">
              <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/20">
                View Special Offers
              </Button>
            </Link>
          </motion.div>

          {/* Floating highlights */}
          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              "Luxury Hotels",
              "Expert Guides",
              "Safe Travel",
              "Best Prices"
            ].map((highlight, index) => (
              <div key={highlight} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white font-medium">{highlight}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}