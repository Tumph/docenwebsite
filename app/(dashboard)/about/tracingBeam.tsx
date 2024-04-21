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
    title: "About Pare",
    description: (
      <>
        <p>
            Pare is your ultimate recruiting partner. We specialize in revolutionizing the recruitment process by leveraging cutting-edge technology to simplify and enhance candidate evaluation.
        </p>
        <br />
        <p>
            At Pare, we understand the challenges faced by hiring teams and aim to provide innovative solutions that save time and streamline workflows. Our platform seamlessly integrates with your existing Applicant Tracking System (ATS) to automate resume screening and analyze candidate fit with unprecedented accuracy.
        </p>
        <br />
        <p>
            By harnessing the power of AI and machine learning, Pare crawls personal websites and GitHub repositories to extract invaluable insights, empowering recruiters to make data-driven decisions with confidence.
        </p>
        <br />
        <p>
        Whether you&apos;re a startup or an established enterprise, Pare is committed to transforming the way you hire, ensuring you find the best talent efficiently and effectively.
        </p>
      </>
    ),
    badge: "Pare",
    },
  {
    title: "Our Mission",
    description: (
      <>
        <p>
        Pare&apos;s mission is to empower recruiters with powerful tools that simplify and enhance the hiring process. We strive to bridge the gap between talent and opportunity by providing comprehensive insights and analytics that enable informed hiring decisions.
        </p>
      </>
    ),
    badge: "Recruiters",
    },
  {
    title: "Get in Touch",
    description: (
      <>
        <p>
        Ready to experience the future of recruiting? Contact us today to learn more about Pare and how we can transform your hiring strategy.
        </p>
      </>
    ),
    badge: "Reach Out",
    },
];
