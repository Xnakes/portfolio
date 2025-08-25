"use client";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");

  const navItems = [
    { href: "#home", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skill" },
    { href: "#projects", label: "MyProjects" },
    { href: "#contact", label: "Contact" },
  ];

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      ) as HTMLElement[];

      const current = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveSection(`#${current.id}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-sm border border-gray-200 px-8 py-4 rounded-lg flex gap-10 text-lg font-semibold z-50">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`relative transition-colors ${
            activeSection === item.href
              ? "text-green-700 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-green-700 after:left-0 after:-bottom-1 after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              : "text-gray-700 hover:text-green-600 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-green-700 after:left-0 after:-bottom-1 after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
          }`}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
