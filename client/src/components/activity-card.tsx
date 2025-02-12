import { Activity } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

export default function ActivityCard({ activity, index }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <Card>
        <div className="aspect-video relative overflow-hidden">
          <img
            src={activity.image}
            alt={activity.name}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2">{activity.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
          <p className="text-sm text-primary">{activity.duration}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
