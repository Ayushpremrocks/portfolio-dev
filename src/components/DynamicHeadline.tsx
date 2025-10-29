'use client';
import { useState, useEffect } from "react";

const roles = [
  "a Full-Stack Developer",
  "a Machine Learning Enthusiast",
  "a Pre-final Year Student at Chandigarh University",
  "a Problem Solver",
  "a Competitive Programmer",
  "an Open Source Contributor"
];

export default function DynamicHeadline() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= roles.length) setIndex(0);

    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(prev => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    setText(roles[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <h1 className="!text-base sm:!text-lg md:!text-xl lg:!text-2xl font-semibold text-center mt-4 md:mt-6 text-white leading-tight tracking-tight">
        I’m <span className="text-blue-400">{text}</span>
        <span className="border-r-2 border-blue-400 ml-1 animate-pulse"></span>
    </h1>

    );

}
