import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import Image from "next/image";

function FeedbackCard({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) {
  return (
    <motion.section
      variants={textVariant()}
      className="bg-black-200 p-10 rounded-3xl xs:w-[450px] w-full"
    >
      <p className="text-white font-black text-[48px]">&quot;</p>

      <div className="mt-1">
        <p className="text-purple tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@ {" " + name}</span>
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <div className="w-[100px] h-[100px] relative flex flex-row items-center group cursor-pointer">
            <Image
              src={image}
              alt={`feedback_by-${name}`}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              className="w-9 h-9 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Feedback() {
  return (
	// mt-12 bg-black-100 rounded-[20px]
    <section className="w-full h-fit p-8 mt-20" id="feedback">
      <motion.div variants={textVariant()} initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={"sectionSubText"}>What others say (based on linkedin , medium or other platform)</p>
        <h2 className={"sectionHeadText"}>Testimonials.</h2>
      </motion.div>
      <div
        className={`mt-20 flex flex-co`}
		style={{ overflowY : "scroll", overflowX: "scroll" }}
      >
		 {testimonials.map((testimonial, index) => (
		<div style={{ marginRight: "100px", width: "25%", display: "block"}} key={testimonial.name}>
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
		</div>
        ))}
      </div>
    </section>
  );
}

export default SectionWrapper(Feedback, "feedback");
