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
    youtubeId: "rF3viEQlD0A",
    githubUrl: "https://github.com/1Joshie7/online-shop",
    liveUrl: null,
    status: "completed",
    category: "full-stack",
    images: ["/assets/images/projects/p1.jpg", "/assets/images/projects/p2.jpg"],
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
    title: "AI Marking Assistant",
    subtitle: "Online AI Exam and Test Marking Assistant",
    description: "Helps lecturers and teachers in setting exam questions and marking them and grading.",
    longDescription: "Built an online platform which allows lecturers and teachers to create account, set exams/tests and give answers and tells AI to mark according answers which are relevant to the given ones then marks and assesses the student's performance and publishes it to his/her dashboard.",
    techStack: ["React.js", "Django", "Django REST Framework", "Sentence-Transformers AI", "SQLite", "Material-UI", "JWT Authentication", "Docker"],
    features: [
      "AI-Powered Exam Grading - Automatically evaluates student answers using semantic similarity",
      "Role-Based Dashboards - Separate interfaces for Students and Lecturers with JWT authentication",
      "Exam Creation & Management - Lecturers can create, edit, publish exams",
      "Secure Enrollment - Students enroll in exams using unique access codes",
      "Real-Time Exam Taking - Timer, auto-save, and progress tracking",
      "Instant Feedback - Students receive AI-generated scores and detailed feedback",
      "Manual Grade Override - Lecturers can review, adjust marks",
      "Results Dashboard - View detailed performance analytics"
    ],
    images: ["/assets/images/projects/j1.jpg", "/assets/images/projects/j2.jpg"],
    youtubeId: "It2QFkw2sOI",
    liveUrl: "",
    githubUrl: "https://github.com/1Joshie7/ai-exam-marker",
    status: "completed",
    category: "full-stack",
    date: "Jan 2026",
    challenges: ["Implementing semantic similarity for accurate grading", "Managing concurrent exam sessions"],
    role: "Full-stack Developer"
  },
    {
    id: 3,
    title: "Online Chat Store",
    subtitle: "Online Chat Store",
    description: "Platform connecting buyers and sellers using a WhatsApp chat feature.",
    longDescription: "Built an online platform for connecting buyers and sellers enabling them to communicate using a WhatsApp chat feature.",
    techStack: ["Django templates", "Django", "Django REST Framework"],
    features: [
      "Online store",
      "Seller registration and management",
      "Product listings with images",
      "User authentication",
      "WhatsApp chat feature",
      "Add, delete, update products"
    ],
    images: [],
    youtubeId: "wD0CYkX2Tdo",
    liveUrl: "",
    githubUrl: "https://github.com/1Joshie7/online-chat-store",
    status: "nearly completed",
    category: "full-stack",
    date: "Nov 2024",
    challenges: ["Integrating WhatsApp API", "Managing real-time chat sessions"],
    role: "Full-stack Developer"
  },
  {
    id: 4,
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
    images: [],
    youtubeId: "",
    liveUrl: "https://u-find.vercel.app/seller/login",
    githubUrl: "https://github.com/desmondkwaramba1-png/U-FIND/tree/latest-so-far",
    status: "completed adding more features",
    category: "full-stack",
    date: "Dec 2024",
    challenges: ["Implementing accurate location-based filtering", "Optimizing search performance"],
    role: "Full-stack Developer"
  },

  {
    id: 5,
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
    images: [],
    youtubeId: "",
    liveUrl: "https://mtd-zufy.onrender.com",
    githubUrl: "https://github.com/1Joshie7/meet-the-doctor",
    status: "progress",
    category: "full-stack",
    date: "Dec 2024",
    challenges: ["Integrating AI health consultation", "Managing appointment scheduling"],
    role: "Full-stack Developer"
  }
];