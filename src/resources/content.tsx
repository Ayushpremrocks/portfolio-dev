import DynamicHeadline from "@/components/DynamicHeadline";

export const home = {
  title: "Ayush Prem | Portfolio",
  description:
    "I’m Ayush Prem, a Full-Stack Developer and Machine Learning enthusiast passionate about building efficient, user-centric products.",
  hero: {
    headlineComponent: DynamicHeadline, // ✅ store component, not JSX
    subheadline:
      "Building scalable web apps, exploring machine learning, and contributing to open source.",
    buttonText: "View My Work",
  },
};

export const about = {
  title: "About Me",
  description:
    "I’m a Pre-final year Computer Science Engineering student at Chandigarh University, specializing in full-stack development, machine learning, and open source.",
  work: {
    title: "Work Experience",
    display: true,
    experiences: [
      {
        company: "EcomLancers Pvt. Ltd.",
        role: "SDE Intern",
        period: "May 2024 – July 2024",
        description:
          "Worked on client and internal projects focusing on scalable and optimized frontend systems.",
      },
    ],
  },
  studies: {
    title: "Education",
    display: true,
    institutions: [
      {
        name: "Chandigarh University",
        degree: "B.E. Computer Science and Engineering",
        period: "2022 – 2026",
      },
    ],
  },
};

export const work = {
  title: "Projects",
  description:
    "A collection of projects showcasing my skills in full-stack development, ML, and software design.",
  projects: [
    {
      name: "WhatsApp Chat Analyzer",
      tech: ["React", "Vite", "JavaScript"],
      link: "https://github.com/Ayushpremrocks/whatsapp-analyzer",
    },
    {
      name: "To-Do List with Email Notifications",
      tech: ["PHP", "MySQL", "PHPMailer"],
      link: "https://github.com/Ayushpremrocks/task-scheduler",
    },
    {
      name: "Data Download Duplication Alert System (DDAS)",
      tech: ["Python", "MongoDB", "Flask"],
      link: "https://github.com/Ayushpremrocks/DDAS",
    },
  ],
};

export const blog = {
  title: "Blog",
  description:
    "Insights, tutorials, and experiences from my learning journey in software development and ML.",
};

export const gallery = {
  title: "Gallery",
  description: "Snapshots of my work, hackathons, and coding life.",
  images: [],
};

export const person = {
  name: "Ayush Prem",
  role: "Full-Stack Developer",
  email: "ayushprem@example.com",
  location: "Chandigarh, India",
  avatar: "/avatar.png",
};

export const social = {
  github: "https://github.com/Ayushpremrocks",
  linkedin: "https://www.linkedin.com/in/ayush-prem/",
  twitter: "https://x.com/ayushpremrocks",
};

export const newsletter = {
  title: "Stay Updated",
  description: "Subscribe to get updates on my latest posts and projects.",
  placeholder: "Enter your email",
  button: "Subscribe",
};

export default {
  home,
  about,
  work,
  blog,
  gallery,
  person,
  social,
  newsletter,
};
