import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";

import { gear } from "@/data/gear";

// A reusable component for rendering each gear item
const GearItem = ({ name, url, description, image }) => (
  <Link
    href={url}
    className="flex items-center gap-4 hover:text-white group"
    aria-label={`Link to ${name}`}
  >
    <div>
      <Image
        src={image}
        alt={name}
        className="rounded-lg"
        width={75}
        height={75}
      />
    </div>
    <div>
      <p className="font-semibold">{name}</p>
      <p className=" pt-1">{description}</p>
    </div>
  </Link>
);

const Page = () => {
  return (
    <div className="text-white lg:w-[70%] mx-auto py-20 mb-20">
      <header>
        <h1 className="text-5xl font-bold font-neuzeit bg-gradient-to-r from-yellow-600 to-green-500 text-transparent bg-clip-text">
          The Gear I Use
        </h1>
        <p className="text-slate-500 mt-2">
          Here's a curated list of the tools, software, and hardware that power
          my daily workflow. This is a living document — I update it whenever I
          switch things up.
        </p>

        {gear?.map((list, index) => (
          <div key={index}>
            <h2 className="mt-16 text-lg font-bold mb-3">{list?.name}</h2>
            <ul className="list-disc pl-8 space-y-3">
              {list?.items?.map((item, index) => (
                <li className=" cursor-pointer hover:text-white" key={index}>
                  <div className="text-neutral-500 dark:text-neutral-400">
                    <LinkPreview
                      url={item.image}
                      href={item.url}
                      className="font-bold border-b border-gray-400 pb-0.5"
                    >
                      {item.name}
                    </LinkPreview>{" "}
                    - {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </header>
    </div>
  );
};

export default Page;
