export interface EventCard {
  id: string;
  title: string;
  category: string;
  image: string;
  price: number;
  timeRange: string;
  guests: number;
  location: string;
  startsIn: string;
}

export const eventCards: EventCard[] = [
  {
    id: '1',
    title: 'Live show event updated',
    category: 'Pet Love',
    image: 'https://images.unsplash.com/photo-1569930784237-ea65a2f40a83?q=80&w=2802&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 100.0,
    timeRange: '23:59-0:0',
    guests: 24,
    location: 'Indore, Madhya radesh, IN',
    startsIn: '7 hrs'
  },
  {
    id: '2',
    title: 'Yoga and Meditation',
    category: 'Wellness',
    image: 'https://images.pexels.com/photos/8436589/pexels-photo-8436589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 75.0,
    timeRange: '10:00-12:00',
    guests: 15,
    location: 'Pune, Maharashtra, IN',
    startsIn: '2 days'
  },
  {
    id: '3',
    title: 'Cooking Workshop',
    category: 'Food',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 150.0,
    timeRange: '18:00-20:00',
    guests: 10,
    location: 'Mumbai, Maharashtra, IN',
    startsIn: '3 days'
  },
  {
    id: '4',
    title: 'Tech Meetup',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/7163953/pexels-photo-7163953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 0,
    timeRange: '14:00-17:00',
    guests: 50,
    location: 'Bangalore, Karnataka, IN',
    startsIn: '1 week'
  }
];