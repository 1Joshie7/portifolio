export const projects = [
  {
    id: 1,
    title: "Full-Stack Ecommerce Platform",
    subtitle: "AI-Powered Online Store",
    description: "Complete ecommerce solution with AI-generated product descriptions, user authentication, and payment processing.",
    longDescription: "Built a production-ready online store integrating Google Gemini AI for dynamic content creation. Features include JWT authentication, real-time cart updates, admin dashboard, and secure payment integration.",
    techStack: ["Django", "React", "JavaScript", "PostgreSQL", "TailwindCSS", "JWT", "Google Gemini AI"],
    features: [
      "User authentication & authorization",
      "AI-powered product descriptions",
      "Shopping cart & checkout flow",
      "Payment processing integration",
      "Admin dashboard for management",
      "Responsive mobile-first design"
    ],
    youtubeId: "rF3viEQlD0A", // YouTube video ID
    githubUrl: "https://github.com/1Joshie7/online-shop",
    liveUrl: null,
    status: "completed",
    category: "full-stack",
    images: [
      "/assets/images/projects/p1.jpg",
      "/assets/images/projects/p2.jpg",
      "/assets/images/projects/p3.jpg",
       "/assets/images/projects/p4.jpg",
      "/assets/images/projects/p5.jpg",
      "/assets/images/projects/p6.jpg",
       "/assets/images/projects/p7.jpg",
    ],
    challenges: [
      "Integrated AI API while maintaining fast page loads",
      "Implemented secure payment flow without storing sensitive data",
      "Managed real-time cart updates across user sessions"
    ],
    role: "Full-stack Developer",
    date: "Jan 2025"
  },
  {
    id: 2,
    title: "Meet the Doctor Online",
    subtitle: "AI Doctor & Booking Platform",
    description: "Healthcare platform with AI-powered doctor consultations and appointment booking.",
    longDescription: "Developed an online healthcare platform that allows users to interact with an AI-powered doctor for preliminary health guidance and book consultation sessions with medical professionals.",
    techStack: ["Django", "Python", "Django REST Framework"],
    features: [
      "AI-powered health consultations",
      "Doctor appointment booking",
      "User authentication",
      "Session management",
      "Admin dashboard"
    ],
    images: [

    ],
    youtubeId: "", // YouTube video ID
    liveUrl: "https://mtd-zufy.onrender.com",
    githubUrl: "https://github.com/1Joshie7/meet-the-doctor",
    status: "progress",
    category: "full-stack",
    date: "Dec 2024"
  },
  {
    id: 3,
    title: "U-Finder Marketplace",
    subtitle: "Location-Based Marketplace",
    description: "Platform connecting buyers with nearby sellers using location-based filtering.",
    longDescription: "Built a marketplace platform that enables users to search for products, identify the nearest sellers based on location, and purchase items efficiently.",
    techStack: ["Node.js", "Express", "React", "JavaScript", "PostgreSQL"],
    features: [
      "Location-based product search",
      "Seller registration and management",
      "Product listings with images",
      "User authentication",
      "Real-time notifications"
    ],
    images: [], // Add images if you have more
    youtubeId: "", // YouTube video ID
    liveUrl: "https://u-find.vercel.app/seller/login",
    githubUrl: "https://github.com/1Joshie7/u-finder",
    status: "completed adding more features",
    category: "full-stack",
    date: "dec 2024"
  },

  {
    id: 4,
    title: "store",
    subtitle: "online chat store",
    description: "Platform connecting buyers  sellers using and enabling them to communicate with each other using a whatsapp chat feature.",
    longDescription: "Built an online platform for  connecting buyers  sellers using and enabling them to communicate with each other using a whatsapp chat feature.",
    techStack: ["Django templates", "Django " , "Django_rest_framework"],
    features: [
      "online store",
      "Seller registration and management",
      "Product listings with images",
      "User authentication",
      "whatsapp chat feature",
      "add , delete, update products",
    ],
    images: [], // Add images if you have more
    youtubeId: "", // YouTube video ID
    liveUrl: "",
    githubUrl: "",
    status: " nearly completed",
    category: "full-stack",
    date: "Nov 2024"
},

  {
    id: 5,
    title: "ai marking assistant",
    subtitle: "online ai exam and test marking assistant",
    description: "helps lecturers and teacher in setting exam questions and marking them and grading. ",
    longDescription: "Built an online platform which allows lecturers and teacher to create account, set exams/test and give answers and tells ai to mark according answers which are relevent to the given ones then marks and asses the student's performance and publishes it to his/her dashboard.",
    techStack: ["React","chatgpt api","sqllite database", "Django " , "Django_rest_framework"],
    features: [
      "online ai_exam_marker",
      "profile creation student / lecturer",
      "User authentication",
      "set exams / test and publish them",
      "Enroll to the exam / test ",
      "add , delete, update exam",
    ],
    images: [], // Add images if you have more
    youtubeId: "", // YouTube video ID
    liveUrl: "",
    githubUrl: "",
    status: "progress",
    category: "full-stack",
    date: "jan 2026"
}
];