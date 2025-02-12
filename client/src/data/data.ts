export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  hotel: Hotel;
  activities: Activity[];
  itinerary: DayItinerary[];
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
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
  },
  {
    name: "Houseboat Palace",
    description: "Luxury houseboat experience on Dal Lake",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099",
    rating: 4.5
  },
  {
    name: "Pine View Resort Gulmarg",
    description: "Ski-in/ski-out resort with mountain views",
    image: "https://images.unsplash.com/photo-1575728252059-8a0f82976fd7",
    rating: 4.2
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
  },
  {
    name: "Mughal Gardens Tour",
    description: "Visit the famous Nishat and Shalimar gardens",
    image: "https://images.unsplash.com/photo-1651325276807-82f5782a4088",
    duration: "4 hours"
  },
  {
    name: "Sonamarg Glacier Visit",
    description: "Visit the majestic Thajiwas Glacier",
    image: "https://images.unsplash.com/photo-1651325276807-82f5782a4088",
    duration: "5 hours"
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
    activities: [activities[0], activities[3]],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        description: "Arrive in Srinagar and transfer to the luxury hotel. Evening welcome dinner.",
        activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
      },
      {
        day: 2,
        title: "Dal Lake Exploration",
        description: "Full day exploring Dal Lake and its floating markets",
        activities: ["Morning Shikara ride", "Floating market visit", "Garden tour"]
      },
      {
        day: 3,
        title: "Mughal Gardens Tour",
        description: "Visit the famous Mughal Gardens of Kashmir",
        activities: ["Nishat Garden visit", "Shalimar Garden tour", "Evening tea ceremony"]
      },
      {
        day: 4,
        title: "Local Culture & Crafts",
        description: "Immerse in local culture and traditional crafts",
        activities: ["Handicraft workshop", "Local market visit", "Cultural show"]
      },
      {
        day: 5,
        title: "Departure",
        description: "Leisurely breakfast and departure",
        activities: ["Souvenir shopping", "Airport transfer"]
      }
    ]
  },
  {
    id: "gulmarg-adventure",
    name: "Gulmarg Adventure Package",
    description: "Perfect winter getaway with skiing and gondola rides",
    price: 1499,
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1664212008987-705d2ec758e7",
    hotel: hotels[4],
    activities: [activities[1], activities[2]],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Gulmarg",
        description: "Arrive in Gulmarg and settle into your mountain resort",
        activities: ["Transfer to Gulmarg", "Resort check-in", "Evening orientation"]
      },
      {
        day: 2,
        title: "Skiing Adventure",
        description: "Full day of skiing with professional instructors",
        activities: ["Ski lessons", "Equipment fitting", "Slope practice"]
      },
      {
        day: 3,
        title: "Gondola & Exploration",
        description: "Experience the world's highest gondola ride",
        activities: ["Gondola ride", "Mountain viewpoint visit", "Snow activities"]
      },
      {
        day: 4,
        title: "Departure Day",
        description: "Morning activities and departure",
        activities: ["Morning photography", "Departure preparation", "Transfer to airport"]
      }
    ]
  },
  {
    id: "pahalgam-serenity",
    name: "Pahalgam Serenity Tour",
    description: "Peaceful retreat in the valley of shepherds",
    price: 1299,
    duration: "3 days",
    image: "https://images.unsplash.com/photo-1664212249973-be78ca5261bc",
    hotel: hotels[2],
    activities: [activities[2], activities[4]],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Pahalgam",
        description: "Journey to the valley of shepherds",
        activities: ["Scenic drive to Pahalgam", "Hotel check-in", "Evening valley walk"]
      },
      {
        day: 2,
        title: "Valley Exploration",
        description: "Explore the beautiful valleys and streams",
        activities: ["Betaab Valley visit", "River side picnic", "Local interaction"]
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning activities and return journey",
        activities: ["Morning nature walk", "Souvenir shopping", "Return transfer"]
      }
    ]
  },
  {
    id: "houseboat-experience",
    name: "Dal Lake Houseboat Stay",
    description: "Unique experience of living on Dal Lake in a luxury houseboat",
    price: 1799,
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099",
    hotel: hotels[3],
    activities: [activities[0], activities[3]],
    itinerary: [
      {
        day: 1,
        title: "Houseboat Welcome",
        description: "Check-in to your floating paradise",
        activities: ["Houseboat check-in", "Welcome tea", "Sunset Shikara ride"]
      },
      {
        day: 2,
        title: "Lake Life",
        description: "Experience the unique lifestyle of Dal Lake",
        activities: ["Floating market visit", "Fishing experience", "Evening cultural show"]
      },
      {
        day: 3,
        title: "Local Exploration",
        description: "Explore nearby attractions",
        activities: ["Garden visits", "Handicraft shopping", "Cooking demonstration"]
      },
      {
        day: 4,
        title: "Farewell",
        description: "Final morning on the lake and departure",
        activities: ["Sunrise photography", "Breakfast on deck", "Departure"]
      }
    ]
  },
  {
    id: "kashmir-complete",
    name: "Complete Kashmir Experience",
    description: "Comprehensive tour covering all major attractions",
    price: 2499,
    duration: "7 days",
    image: "https://images.unsplash.com/photo-1664212008987-705d2ec758e7",
    hotel: hotels[1],
    activities: [activities[0], activities[1], activities[2]],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Kashmir",
        description: "Begin your comprehensive Kashmir journey",
        activities: ["Airport welcome", "Hotel check-in", "Trip briefing"]
      },
      {
        day: 2,
        title: "Srinagar Exploration",
        description: "Discover the beauty of Srinagar",
        activities: ["Mughal Gardens tour", "Local market visit", "Evening Shikara ride"]
      },
      {
        day: 3,
        title: "Gulmarg Adventure",
        description: "Experience the snow paradise",
        activities: ["Gondola ride", "Snow activities", "Mountain photography"]
      },
      {
        day: 4,
        title: "Pahalgam Journey",
        description: "Visit the valley of shepherds",
        activities: ["Scenic drive", "Valley exploration", "River side camping"]
      },
      {
        day: 5,
        title: "Sonamarg Discovery",
        description: "Explore the meadow of gold",
        activities: ["Thajiwas Glacier visit", "Pony ride", "Nature walks"]
      },
      {
        day: 6,
        title: "Cultural Immersion",
        description: "Deep dive into Kashmiri culture",
        activities: ["Craft workshops", "Traditional lunch", "Folk performance"]
      },
      {
        day: 7,
        title: "Farewell Day",
        description: "Final day in paradise",
        activities: ["Last minute shopping", "Farewell dinner", "Airport transfer"]
      }
    ]
  }
];