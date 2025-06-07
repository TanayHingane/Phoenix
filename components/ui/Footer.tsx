import { ArrowUpRightIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const year = new Date().getFullYear();

const links = [
  {
    href: "https://www.linkedin.com/in/vedant-bhor-39287828b/",
    label: "LinkedIn",
  },
  { href: "https://x.com/arsenic_dev", label: "Twitter" },
  { href: "https://github.com/Arsenic-01", label: "GitHub" },
  { href: "https://discordapp.com/users/862682607162359819", label: "Discord" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip z-10">
      <div className="container">
        <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-neutral-700 ">
            <a
              href="https://www.linkedin.com/in/vedant-bhor-39287828b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline text-base font-pre"
            >
              <Avatar>
                <AvatarImage src="favicon.ico" />
                <AvatarFallback>TH</AvatarFallback>
              </Avatar>{" "}
              Tanay Hingane
            </a>
          </div>
          <div className="text-neutral-700 ">
            &copy; {year}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
