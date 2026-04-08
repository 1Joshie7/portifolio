import React from 'react';
import { Download } from 'lucide-react';
import { AnimatedBorderButton } from './AnimatedBorderButton';

export const DownloadCVButton = ({ variant = "animated", className = "" }) => {
  const handleDownload = () => {
    const cvContent = `JOSHUA TEVERA CV
Software Engineering Student & Full-Stack Developer

================================================================================

CONTACT INFORMATION
--------------------------------------------------------------------------------
📍 Location: Harare, Zimbabwe
📞 Phone: +263 777 056 234
📧 Email: joshuatevera@gmail.com
🌐 Portfolio: https://portifolio-qj5k.vercel.app
💻 GitHub: https://github.com/1Joshie7

================================================================================

PROFILE
--------------------------------------------------------------------------------
Software Engineering student and full-stack developer with hands-on experience 
building production-ready web applications using Django, Node.js, React and 
React Native. Experienced in RESTful API development, AI-assisted systems and 
database driven platforms. Passionate about solving real-world problems.

================================================================================

TECHNICAL SKILLS
--------------------------------------------------------------------------------

LANGUAGES:
• Python
• JavaScript
• Java
• HTML/CSS

FRAMEWORKS & LIBRARIES:
• Django
• Django REST Framework
• Node.js
• Express.js
• React
• React Native

DATABASES:
• SQLite
• MySQL
• Firebase
• PostgreSQL

TOOLS & PLATFORMS:
• Git
• GitHub
• Docker

DOMAIN:
• Full-Stack Web Development

================================================================================

PROJECT EXPERIENCE
--------------------------------------------------------------------------------

1.) FULL STACK ECOMMERCE PLATFORM WITH AI INTEGRATION
Tech: Django | React | TypeScript | PostgreSQL | Google Gemini API

• Developed complete online store with user authentication, shopping cart 
  and payment processing
• Integrated Google Gemini AI to generate dynamic product descriptions 
  automatically
• Built responsive React frontend with TypeScript and Django REST API backend
• Implemented JWT authentication, PostgreSQL database and admin dashboard
• Containerized with Docker for deployment consistency

--------------------------------------------------------------------------------

2.) MEET THE DOCTOR ONLINE (AI Doctor & Booking Platform)
Live: https://mtd-zufy.onrender.com
Tech: Django, Django REST Framework, Python

Developed an online healthcare platform that allows users to interact with an 
AI-powered doctor for preliminary health guidance and book consultation sessions 
with medical professionals. Designed and implemented backend APIs for session 
management, user authentication, and appointment scheduling.

IMPACT: Improves access to healthcare services by providing virtual medical 
assistance and streamlined doctor booking.

--------------------------------------------------------------------------------

3.) U-FINDER LOCATION-BASED MARKETPLACE
Tech: Node.js, Express, React, JavaScript

Built a marketplace platform that enables users to search for products, identify 
the nearest sellers based on location, and purchase items efficiently. Implemented 
backend services for product listings, search functionality, and location-based 
filtering.

IMPACT: Connects buyers with nearby sellers, reducing delivery time and improving 
local commerce.

--------------------------------------------------------------------------------

4.) AI-POWERED EXAM MARKER
Tech: React, Django REST Framework, Docker, Sentence-Transformers

Built an AI-powered exam marking platform that evaluates student answers using 
semantic similarity (Sentence-BERT), providing instant, accurate scores and 
feedback. Features include role-based dashboards, RESTful APIs, and asynchronous 
grading workflows.

IMPACT: Reducing lecturer workload by 80% while enhancing student learning through 
immediate feedback.

================================================================================

EDUCATION
--------------------------------------------------------------------------------
Bachelor of Science in Software Engineering
University of Zimbabwe (Ongoing)
Level: 2
Expected Graduation: 2028

================================================================================

ACHIEVEMENTS & INVOLVEMENT
--------------------------------------------------------------------------------
• Collaborated on real-world AI and full-stack development projects addressing 
  healthcare, agriculture and e-commerce challenges
• Strong experience working with modern web technologies and REST-based architectures
• Actively building practical systems beyond coursework to enhance industry readiness

================================================================================

INTERESTS
--------------------------------------------------------------------------------
Artificial Intelligence | HealthTech | AgriTech | Software Innovation | Problem Solving

================================================================================
`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Joshua_Tevera_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (variant === "animated") {
    return (
      <AnimatedBorderButton onClick={handleDownload} className={className}>
        <Download size={18} />
        Download CV
      </AnimatedBorderButton>
    );
  }

  return (
    <button
      onClick={handleDownload}
      className={`btn-primary flex items-center gap-2 ${className}`}
    >
      <Download size={18} />
      Download CV
    </button>
  );
};