import React from "react";
import Pronunciation from "@/components/Pronunciation";
import Gallery from "@/components/ui/Gallery";
import Link from "next/link";

import Image from "next/image";

import { about } from "@/data/about";
import { bio } from "@/data/bio";
const Section = ({ title, content }) => (
  <div className="py-16 flex flex-row justify-start">
    <div className="w-1/4 font-bold text-gray-500 mt-1">{title}</div>
    <div className="flex-1 space-y-4">{content}</div>
  </div>
);

const JobItem = ({ logo, role, company, startDate, endDate, url }) => (
  <Link href={url} target="_blank">
    <div className="group flex items-center pt-8 hover:text-white">
      <div className="">
        <Image
          src={logo}
          alt={`${company} logo`}
          width={100}
          height={100}
          className="w-16 h-16 p-2 shadow-sm rounded-full object-contain"
        />
      </div>
      <div className="flex flex-1 justify-between ml-6">
        <div className="space-y-1">
          <p className="font-bold text-lg group-hover:text-white">{role}</p>
          <p className="group-hover:text-white">{company}</p>
        </div>
        <div className="flex-shrink-0">
          <p className="text-gray-400 text-sm group-hover:text-gray-200">{`${startDate} - ${endDate}`}</p>
        </div>
      </div>
    </div>
  </Link>
);

const EducationItem = ({
  degree,
  institution,
  startDate,
  endDate,
  logo,
  url,
}) => (
  <Link href={url} target="_blank">
    <div className="group flex items-center pt-8 hover:text-white">
      <div>
        <Image
          src={logo}
          alt={`${institution} logo`}
          width={100}
          height={100}
          className="w-16 h-16 p-2 shadow-sm rounded-full object-contain"
        />
      </div>
      <div className="flex flex-1 justify-between ml-6">
        <div className="space-y-1 ">
          <p className="font-bold text-lg group-hover:text-white">{degree}</p>
          <p className="group-hover:text-white">{institution}</p>
        </div>
        <div className="flex-shrink-0">
          <p className="text-gray-400 text-sm group-hover:text-white">{`${startDate} - ${endDate}`}</p>
        </div>
      </div>
    </div>
  </Link>
);

const page = () => {
  return (
    <div className="">
      <div className="text-white lg:w-2/3 mx-auto py-20">
        <p className="text-5xl font-bold font-neuzeit bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
          Get to Know Me
        </p>
        <div className="my-16">
          <Gallery />
        </div>

        <div className="py-16 flex flex-row justify-start">
          <div className="w-1/4 font-bold text-gray-500">Bio</div>

          <div className="flex-1 space-y-4 grid-cols-2">
            <p>
              <span className="font-bold text-white">
                Hey, I'm Dheeraj Naguru
              </span>{" "}
              {bio?.pronunciation && <Pronunciation url={bio?.pronunciation} />}{" "}
              I started my career in December 2019 as a software engineer at
              Yellow.ai, diving into the world of full-stack web development.
            </p>
            <p>
              Currently, I work as a{" "}
              <span className="font-bold text-white">
                Technology Analyst at Infosys
              </span>
              , based in{" "}
              <span className="font-bold text-white">Richardson, Texas</span>.
              where I lead frontend and backend development projects.
            </p>
            <p>
              I'm passionate about crafting seamless web experiences and
              tackling complex technical challenges. When I'm not coding, I
              enjoy exploring new technologies, spending time with family, and
              staying active outdoors.
            </p>
          </div>
        </div>

        {/* Work Experience Section */}
        {about.experience && (
          <Section
            title="Work"
            content={
              <>
                <p>
                  I specialize in{" "}
                  <span className="font-bold text-white">
                    frontend and backend web development
                  </span>{" "}
                  using JavaScript, TypeScript, C++, Python, and Go, with
                  expertise in frameworks and libraries like React.js, Node.js,
                  Next.js, Express.js and Vue.js
                </p>
                <p>
                  Skilled in building scalable systems, I focus on delivering
                  high-quality, efficient web solutions. But I am always love to
                  learn new things. Here are some of the places I have worked.
                </p>
                {about.experience.jobs.map((job, index) => (
                  <JobItem key={index} {...job} />
                ))}
              </>
            }
          />
        )}

        {/* Education Section */}
        {about.education && (
          <Section
            title="Education"
            content={
              <>
                <p>
                  My academic experiences have been instrumental in shaping my
                  technical skills and passion for problem-solving.
                </p>
                {about.education.schools.map((school, index) => (
                  <EducationItem key={index} {...school} />
                ))}
              </>
            }
          />
        )}
      </div>
    </div>
  );
};

export default page;
