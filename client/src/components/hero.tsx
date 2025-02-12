import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1646204894165-95ed03d988ad)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Paradise on Earth
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the breathtaking beauty of Kashmir with our curated travel packages
          </p>
          <Link href="/packages">
            <Button size="lg" className="text-lg">
              Explore Packages
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
