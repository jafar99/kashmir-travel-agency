export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  hotel: Hotel;
  activities: Activity[];
}

export interface Hotel {
  name: string;
  description: string;
  image: string;
  rating: number;
}

export interface Activity {
  name: string;
  description: string;
  image: string;
  duration: string;
}

export const hotels: Hotel[] = [
  {
    name: "The Lalit Grand Palace",
    description: "Historic luxury palace hotel with stunning Dal Lake views",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
    rating: 5
  },
  {
    name: "Vivanta Dal View",
    description: "Contemporary luxury with panoramic mountain views",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35",
    rating: 4.5
  },
  {
    name: "Kashmir Mahal Resort",
    description: "Traditional Kashmiri architecture with modern amenities",
    image: "https://images.unsplash.com/photo-1526786220381-1d21eedf92bf",
    rating: 4
  }
];

export const activities: Activity[] = [
  {
    name: "Shikara Ride on Dal Lake",
    description: "Peaceful boat ride through the famous Dal Lake",
    image: "https://images.unsplash.com/photo-1651325269829-9dd855bc53fd",
    duration: "2 hours"
  },
  {
    name: "Gulmarg Gondola Ride",
    description: "World's highest cable car with breathtaking views",
    image: "https://images.unsplash.com/photo-1651325238185-7fa24095b290",
    duration: "3 hours"
  },
  {
    name: "Pahalgam Valley Trek",
    description: "Scenic trek through meadows and pine forests",
    image: "https://images.unsplash.com/photo-1651325276807-82f5782a4088",
    duration: "6 hours"
  }
];

export const packages: Package[] = [
  {
    id: "luxury-dal",
    name: "Luxury Dal Lake Retreat",
    description: "Experience the beauty of Dal Lake with luxury accommodations",
    price: 1999,
    duration: "5 days",
    image: "https://images.unsplash.com/photo-1720593445198-f27b3ca8b4e0",
    hotel: hotels[0],
    activities: [activities[0], activities[1]]
  },
  {
    id: "gulmarg-adventure",
    name: "Gulmarg Adventure Package",
    description: "Perfect winter getaway with skiing and gondola rides",
    price: 1499,
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1664212008987-705d2ec758e7",
    hotel: hotels[1],
    activities: [activities[1], activities[2]]
  },
  {
    id: "pahalgam-serenity",
    name: "Pahalgam Serenity Tour",
    description: "Peaceful retreat in the valley of shepherds",
    price: 1299,
    duration: "3 days",
    image: "https://images.unsplash.com/photo-1664212249973-be78ca5261bc",
    hotel: hotels[2],
    activities: [activities[2], activities[0]]
  }
];
