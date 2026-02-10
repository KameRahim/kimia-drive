export interface Vehicle {
  id: string;
  name: string;
  type: string;
  category: string;
  capacity: number;
  luggage: number;
  price: number;
  image: string;
  plateNumber?: string;
}

export interface Driver {
  id: string;
  name: string;
  rating: number;
  trips: number;
  status: 'Available' | 'On Trip' | 'Resting';
  eta?: string;
  image: string;
  recommended?: boolean;
}

export interface ScheduleItem {
  id: string;
  destination: string;
  date: string;
  time: string;
  status: 'CONFIRMED' | 'PENDING';
  driver: Driver;
}

export interface AssetTimeline {
  id: string;
  name: string;
  status: 'On Duty' | 'Off Duty' | 'Service' | 'Ready';
  events: TimelineEvent[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  startHour: number; // 0-24
  duration: number; // in hours
  type: 'active' | 'maintenance' | 'resting' | 'reserved';
}