"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import ConnectButton from "@/components/ui/connect-button";

export function TracingBeamSection() {
  return (
    <TracingBeam className="p-6">
      <div className="max-w-2xl mx-auto antialiased py-4 relative text-white my-[10rem]">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-emerald-400 text-black font-semibold rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl md:text-4xl mb-4">
              {item.title}
            </p>

            <div className="text-md md:text-lg  prose prose-invert">
              {item.description}
            </div>
          </div>
        ))}
        <ConnectButton text="Get Started" href="https://calendly.com/argupta_/30min" />
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "About Docen",
    description: (
      <>
        <p>
          Docen is your intelligent learning partner, revolutionizing employee training through AI-powered assessment and microlearning. We specialize in identifying and addressing knowledge gaps in real-time, ensuring your workforce maintains peak competency.
        </p>
        <br />
        <p>
          Our platform seamlessly integrates with your existing Learning Management System to deliver weekly, bite-sized quiz questions that evaluate employee knowledge. Through sophisticated AI analysis, we identify areas where skills or understanding may be lacking.
        </p>
        <br />
        <p>
          Based on these insights, Docen automatically generates personalized microlearning paths and refresher content, ensuring efficient and targeted learning interventions that maximize training effectiveness while minimizing time investment.
        </p>
        <br />
        <p>
          Whether you&apos;re a training provider or corporation, Docen helps you optimize training outcomes, boost revenue, and reduce costs while maintaining high performance standards.
        </p>
      </>
    ),
    badge: "Docen",
  },
  {
    title: "Our Mission",
    description: (
      <>
        <p>
          Docen&apos;s mission is to eliminate training waste and guesswork by providing data-driven insights into employee knowledge gaps. We&apos;re committed to making continuous learning effortless and effective, ensuring organizations can maintain a highly competent workforce through targeted, personalized training interventions.
        </p>
      </>
    ),
    badge: "Smart Learning",
  },
  {
    title: "Get in Touch",
    description: (
      <>
        <p>
          Ready to transform your training approach with AI-powered assessment and microlearning? Contact us today to learn how Docen can optimize your training strategy and boost workforce competency.
        </p>
      </>
    ),
    badge: "Connect",
  },
];
