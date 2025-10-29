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

  // clamp(min, preferred, max) -> responsive font size
  const style: React.CSSProperties = {
    fontSize: "clamp(1rem, 2.2vw, 1.4rem)", // adjust values to taste
    lineHeight: 1.08,
    marginTop: "1rem",
    textAlign: "center",
    fontWeight: 500,
  };

  const accentStyle: React.CSSProperties = {
    color: "var(--accent, #60a5fa)" // uses CSS var if available otherwise fallback
  };

  return (
    <h1 style={style}>
      I’m <span style={accentStyle}>{text}</span>
      <span style={{ marginLeft: 6 }} className="animate-pulse">|</span>
    </h1>
  );
}
