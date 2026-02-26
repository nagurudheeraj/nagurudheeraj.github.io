import isu from "@/public/images/isu.jpg";
import yellow from "@/public/images/yellow.jpeg";
import infosys from "@/public/images/infosys.png";

export const about = {
  experience: {
    jobs: [
      {
        role: "Founder & Full Stack Engineer",
        company: "Draz (draz.chat)",
        startDate: "Dec 2025",
        endDate: "Present",
        logo: "https://cdn.yellowmessenger.com/TrqdzA2PTO8x1761533383113.png", // add your logo import
        url: "https://draz.chat",
        description:
          "Architected and built an AI-powered conversational platform end-to-end. Designed scalable microservices for agents, chat orchestration, workflows, knowledge base integration, and human-in-the-loop support. Implemented modular backend services using Node.js, Socket.IO, and Express, with a custom React frontend.",
      },
      {
        role: "Technology Analyst",
        company: "Infosys",
        startDate: "Oct 2024",
        endDate: "Present",
        logo: infosys,
        url: "https://www.infosys.com/",
      },
      {
        role: "Web Developer",
        company: "Indiana State University",
        startDate: "Aug 2022",
        endDate: "May 2024",
        logo: isu,
        url: "https://indianastate.edu/",
      },
      {
        role: "Software Engineer",
        company: "Yellow.ai",
        startDate: "Dec 2019",
        endDate: "July 2022",
        logo: yellow,
        url: "https://yellow.ai/",
      },
    ],
  },
  education: {
    schools: [
      {
        degree: "Master's in Computer Science",
        institution: "Indiana State University",
        startDate: "Jan 2020",
        endDate: "Dec 2021",
        logo: isu,
        url: "https://jntuacep.ac.in/",
      },
      {
        degree: "Bachelor's in Computer Science",
        institution: "JNTUA College of Engineering",
        startDate: "Aug 2016",
        endDate: "May 2020",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWAnUmdjBIuM7pshy50DDlfAfWTeXgQAoGw&s",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWAnUmdjBIuM7pshy50DDlfAfWTeXgQAoGw&s",
      },
    ],
  },
};
