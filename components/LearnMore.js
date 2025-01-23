"use client";
import React from 'react';

export default function LearnMore() {
  const links = [
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Something Else", href: "/something-else" },
    { title: "TBD", href: "/tbd" },
  ];

  return (
    <section className="px-4 mb-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Learn more</h2>
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="p-6 rounded-xl text-white font-medium text-center bg-cover bg-center bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500"
              style={{
                backgroundImage: "url('/images/learn-more.png')",
                boxShadow: "0px 4px 16px 0px #00000014",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                backgroundBlendMode: "overlay",
              }}
            >
              {link.title}
            </a>
          ))}
        </div>
        
        <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="p-6 rounded-xl text-white font-medium text-center bg-cover bg-center min-w-[280px] snap-start bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500"
              style={{
                backgroundImage: "url('/images/learn-more.png')",
                boxShadow: "0px 4px 16px 0px #00000014",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                backgroundBlendMode: "overlay",
              }}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}