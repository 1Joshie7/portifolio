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
    youtubeId: "Oa_RSwwpPaA", // YouTube video ID
    githubUrl: "https://github.com/1Joshie7/online-shop",
    liveUrl: null,
    status: "completed",
    category: "full-stack",
    images: [
      "/assets/images/projects/p1.jpg",
      "/assets/images/projects/p2.jpg",
      "/assets/images/projects/p3.jpg"
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
      "/assets/images/projects/p4.jpg"
    ],
    youtubeId: "I-QfPUz1es8", // YouTube video ID
    liveUrl: "https://mtd-zufy.onrender.com",
    githubUrl: "https://github.com/1Joshie7/meet-the-doctor",
    status: "completed",
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
    youtubeId: "ShZ978fBl6Y", // YouTube video ID
    liveUrl: "https://u-find.vercel.app/seller/login",
    githubUrl: "https://github.com/1Joshie7/u-finder",
    status: "completed",
    category: "full-stack",
    date: "Nov 2024"
  }
];