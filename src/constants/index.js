import {
  progression,
  workout,
  nutritions,
  cycling,
  karate,
  power,
  meditation,
  martialArts,
  workoutMan,
  bikeRed,
  bikeWhite,
  boxerRed,
  boxerWhite,
  dumbbellRed,
  dumbbellWhite,
  karateRed,
  karateWhite,
  workoutRed,
  workoutWhite,
  yogaRed,
  yogaWhite,
  trainer1,
  trainer2,
  trainer3,
} from "../assets";

export const trainers = [
  {
    id: "trainer1",
    name: "John Lewis",
    role: "Yoga Trainer",
    image: trainer1,
    handles: {
      facebook: "",
      twitter: "",
      instagram: "",
      email: "",
    },
  },
  {
    id: "trainer2",
    name: "Jonathan Doe",
    role: "Crossfit Trainer",
    image: trainer2,
    handles: {
      facebook: "",
      twitter: "",
      instagram: "",
      email: "",
    },
  },
  {
    id: "trainer3",
    name: "Ana June",
    role: "Personal Trainer",
    image: trainer3,
    handles: {
      facebook: "",
      twitter: "",
      instagram: "",
      email: "",
    },
  },
];

export const featuredClasses = [
  {
    id: "cycling",
    title: "Cycling",
    schedule: "Wednesday: 9:00am - 10:00am",
    background: cycling,
    icons: [bikeWhite, bikeRed],
  },
  {
    id: "karate",
    title: "Karate",
    schedule: "Friday: 10:00am - 11:00am",
    background: karate,
    icons: [karateWhite, karateRed],
  },
  {
    id: "power",
    title: "Power",
    schedule: "Saturday: 9:00am - 10:00am",
    background: power,
    icons: [dumbbellWhite, dumbbellRed],
  },
  {
    id: "meditation",
    title: "Meditation",
    schedule: "Friday: 1:00pm - 2:00pm",
    background: meditation,
    icons: [yogaWhite, yogaRed],
  },
  {
    id: "martial arts",
    title: "Martial Arts",
    schedule: "Sunday: 6:00pm - 7:00pm",
    background: martialArts,
    icons: [boxerWhite, boxerRed],
  },
  {
    id: "workout",
    title: "Workout",
    schedule: "Monday: 4:00pm - 5:00pm",
    background: workoutMan,
    icons: [workoutWhite, workoutRed],
  },
];

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "schedule",
    title: "Schedule",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "classes",
    title: "Classes",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const whoWeAreCards = [
  {
    id: "progression",
    title: "Progression",
    text: "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
    icon: progression,
  },
  {
    id: "workout",
    title: "Workout",
    text: "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
    icon: workout,
  },
  {
    id: "nutritions",
    title: "Nutritions",
    text: "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
    icon: nutritions,
  },
];
