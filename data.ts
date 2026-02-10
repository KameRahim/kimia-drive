import { Vehicle, Driver, ScheduleItem, AssetTimeline } from './types';

export const currentUser = {
  name: "Mr. Alexander",
  role: "Corporate Portal",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGFezotdBxcHby7sKCfPRTxekHs3LRnKet1p1GkAO1xZG2cKwPADQxZHawZMcvU3_vkKWeD164CdrtkceHU1qcmUBabV8ia9q03Nn59yqYWQcFyuElmAk4BabOCJLczoTqrnoJ6Pm8vSdbBq00-3UjLhhEL_oNtqc2olRKqmBZUqZc3-GpVDeOFA3aOV3wfhb8Uz7aFooYoZwkkx9u_h7k1Ag8zvIIkqJ92_ffIlkPqowzYhRO9fAAff-qGeFS9XZQ_5FyZsWVh1Ep"
};

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    name: "Toyota Fortuner",
    type: "Luxury off-road experience for corporate site visits.",
    category: "Premium SUV",
    capacity: 7,
    luggage: 4,
    price: 124.50,
    plateNumber: "WXV 8892",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqUn9wK_EAq-Tt9Ipg_d0wL1Tim79Zj0kY9tvdEbZCQch6kXLF1cNreqbAF4pnMXthi8hC_DIOwdqcYDQhgiJZca0QgaFgvYPZ5DLa3KouPzUn7fUrR-qX6SLXcKoL33AdwF841RKZXAdwF4eW87MaD4creh8JwsriPdhozZ3X5FPFdT0U8845t3VWrO7Q5Jg0W6NIwz_mhC-BC9ThwUPjchvhnEyB73TC87b0fHZeDm1E34qHfgIHtXpTf2iyBedzDBIw9x44WX_i"
  },
  {
    id: "v2",
    name: "Honda Odyssey",
    type: "First-class comfort for airport transfers and meetings.",
    category: "Executive MPV",
    capacity: 6,
    luggage: 6,
    price: 145.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmxuhgpRQlEGv2-OPjn3hIcZjGZMIYQvCY7SA3cr-JJ6Kj3Z39ovXlAHrtjAywVYcT1BUbCDgHNLY_NH2vZ2yxZCL-MtAycUdHQyM3kV0oEBsKnhCUa2OhC69_cTjc4AbpSA_aKfVRDHTVhf5fRdhrHjirpw4uNZc0klrbxfKGeKyjkQrN0SZ4bWGdW7OowfaMMKeEagENgevrmgovF9kZIRJ5dzizXfYn2b7pEbBn8DRGwC83Xb2CIdfKo6mc-w9-yiG-f7me6FXi"
  }
];

export const drivers: Driver[] = [
  {
    id: "d1",
    name: "Michael Chen",
    rating: 4.9,
    trips: 842,
    status: "Available",
    recommended: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOCwTXnUGoRXY80ryy80QdeRfI0YE5-r-DZKQsBI6ps_0aZO7QyvMW3pn2W3QbWwbv2fbcdhadzT3X7o44sgJtGgm55fye0Az6Nu30olJAdrfW4tS4jwTP9vIz2pWZzlhD2uklt3iqPxzu0UY95sT4O1JdZiPgZYW8hEjz7vIVehESD6ERr4g3UXK7brZqZBtrz8gSTtKTflvtzdSgMQJwxN_ZDmU_kRph7gr2GagtUfKlo8ECMVpceYxQ6-RZMoaT28FVyOHiplf8"
  },
  {
    id: "d2",
    name: "Sarah Jenkins",
    rating: 4.8,
    trips: 1200,
    status: "On Trip",
    eta: "15m",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMKAuT8HtBt99MlMk1VYorFR0dfTORvoEZZFEevboBSQASr36iSVEPYvd7i_8cr9Uz5NLPO2HSUDYJzU2ZQ9hXBMI5z-znL2UVYUWxZt3IdEe3CyDKLqbbFyJk4rNvEsxkY7wsyEdcxTDvrTGKT9ipw6alGa9C0im3vCT0J8JY0ki3J7sMpWI7IM0maoG5wd3I4RsMWcDBBAA_s1vAy1_WLJIfcL0tex0idBprIIv6GrpCSnBJERzKNXWZd-HjPez-tjzh8bvYv5S4"
  },
  {
    id: "d3",
    name: "David Wilson",
    rating: 5.0,
    trips: 310,
    status: "Available",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJMHnD8s_inz2FN_nyvKPg1q4tD83K7bGnu9y5I54TysfNH5M2q6MJUnpPYjXiXEvYkPRXUXtxQrnlEV0jfj9mNK-9mbLnw5np8fFJ5juqMV8QSAvunyXg0q63Xiz6PVBIjI8l5Bnwk3swijLOxHlmgbKIbaYZoPJvpYJqd2X-GBDF7KF5VktTwfxiWgrkyFQHe3kus6Jo_xFMeEdEJzTlflsLH4P9LPJBZs2ccz3LQ4_gKGh4E7cs6ft4Wn28N2BusopAbXunG_8W"
  },
  {
    id: "d4",
    name: "Iqbal Hakim",
    rating: 4.9,
    trips: 1240,
    status: "Available",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkn3elZtj484dv7zYQe_srzWfJd7UD9NDHIu7xCklCiaXnydzU52HtH7LapRjnFj8tkoS-IqI2DVCAeRlqHdRafvMDnXmeKg-AqNNgAvsfVfRfJ5ziBCZrxT50YXfWLDl4RbT3TESBFcRMoVeJGGoNNMGbiiqf65xePYAOY-vxuMcGe5TmpgHAXXNhNKJ3dCzHR5IKmpet6ZTyNw33ybsG16icvEFzJNVLlkntldIAozh538vnv_0xwnlfclW_MLY8IMO5zQwLQoWq"
  }
];

export const upcomingSchedule: ScheduleItem[] = [
  {
    id: "s1",
    destination: "KLIA Airport T1",
    date: "Tomorrow",
    time: "08:30 AM",
    status: "CONFIRMED",
    driver: drivers[3] // Iqbal Hakim
  }
];

export const availabilityTimeline: AssetTimeline[] = [
  {
    id: "a1",
    name: "John Smith",
    status: "On Duty",
    events: [
      { id: "e1", title: "CORPORATE HUB", startHour: 9, duration: 3, type: "active" },
      { id: "e2", title: "AIRPORT X-2", startHour: 14, duration: 2, type: "active" }
    ]
  },
  {
    id: "a2",
    name: "Sarah Connor",
    status: "Off Duty",
    events: [
      { id: "e3", title: "MANDATORY REST", startHour: 8, duration: 4, type: "resting" }
    ]
  },
  {
    id: "a3",
    name: "Michael Ross",
    status: "On Duty",
    events: [
      { id: "e4", title: "EXEC TRANSIT", startHour: 10, duration: 5, type: "active" }
    ]
  },
  {
    id: "a4",
    name: "Audi A8 - BZ",
    status: "Service",
    events: [
      { id: "e5", title: "SCHEDULED SERVICE", startHour: 9, duration: 7, type: "maintenance" }
    ]
  },
  {
    id: "a5",
    name: "Tesla Model S",
    status: "Ready",
    events: [
      { id: "e6", title: "RESERVED", startHour: 12, duration: 3, type: "reserved" }
    ]
  },
  {
    id: "a6",
    name: "Mercedes S500",
    status: "Ready",
    events: [
      { id: "e7", title: "VIP TRAVEL", startHour: 16, duration: 4, type: "active" }
    ]
  }
];