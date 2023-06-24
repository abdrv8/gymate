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
  client1,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  pricingImg1,
  pricingImg2,
  pricingImg3,
} from "../assets";

export const aboutGallery = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 4, img: img4 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
];

export const recentBlogs = [
  {
    id: 1,
    title: "Yoga For Everyone in 2023",
    excerpt:
      "This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.",
    date: "22.03.2022",
  },
  {
    id: 2,
    title: "Getting Back Into CrossFit After Vacation",
    excerpt:
      "Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.",
    date: "13.09.2022",
  },
  {
    id: 3,
    title: "Meet Fitness Ambassador Grace",
    excerpt:
      "Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.",
    date: "28.06.2022",
  },
];

export const pricingPlans = [
  {
    id: 1,
    title: "Beginner",
    price: 39,
    features: [
      "Free Hand",
      "Gym Fitness",
      "Weight Loss",
      "Personal Trainer",
      "Cycling",
    ],
    img: pricingImg1,
  },
  {
    id: 2,
    title: "Intermediate",
    price: 65,
    features: [
      "Free Hand",
      "Gym Fitness",
      "Weight Loss",
      "Personal Trainer",
      "Cycling",
    ],
    img: pricingImg2,
  },
  {
    id: 3,
    title: "Advance",
    price: 100,
    features: [
      "Free Hand",
      "Gym Fitness",
      "Weight Loss",
      "Personal Trainer",
      "Cycling",
    ],
    img: pricingImg3,
  },
];

export const galleryImages = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Melinda Smith",
    image: client1,
    position: "CEO",
    company: "Hogwarts",
    message:
      "I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.",
  },
];

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
