import { motion } from "framer-motion";
import { Package } from "@/data/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface PackageCardProps {
  pkg: Package;
  index: number;
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="object-cover w-full h-full transform transition hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
          <p className="text-gray-600 mb-4">{pkg.description}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">{pkg.duration}</p>
              <p className="text-xl font-bold">${pkg.price}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link href={`/package/${pkg.id}`}>
            <Button className="w-full">View Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
