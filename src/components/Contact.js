import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:section:">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> tougther!
              </h2>
            </div>
          </div>
          <form className="flex-1">
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus: border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus: border-accent transition-all"
              type="text"
              placeholder="Your email"
            />
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
