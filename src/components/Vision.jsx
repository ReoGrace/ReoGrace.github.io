import React from "react";
import line from "../assets/images/line.png";
import { useInView } from "../hooks/useInView";

export default function Vision() {
  
  const [refHeadline, inHeadline]   = useInView({ threshold: 0.3 });
  const [refCatch,    inCatch]      = useInView({ threshold: 0.3 });
  const [refText,     inText]       = useInView({ threshold: 0.01 });

  return (
    <div className="Vision">
      <div className="Vision-inner">

        {/* Headline */}
        <h1
          ref={refHeadline}
          className={`Vision-headline ${inHeadline ? "animate-headline" : ""}`}
        >
          <span className="Vision-headline-V">V</span>ISION
        </h1>

        {/* Catchphrase */}
        <div
          ref={refCatch}
          className={`Vision-catchphrase ${inCatch ? "animate-catch" : ""}`}
        >
          <p>What Can I Do</p>
          <p>
            to <span className="Vision-catchphrase-Save">Save</span> More{" "}
            <span className="Vision-catchphrase-Lives">Lives</span> ?
          </p>
        </div>

        <img className="Vision-line" src={line} alt="decorative line" />

        {/* Text */}
        <div
          ref={refText}
          className={`Vision-text ${inText ? "animate-text" : ""}`}
        >
          <p>
            There are still countless people around the world without access to
            medical care. Even today, despite remarkable advances in medicine,
            many patients remain beyond help. I aim to harness not only
            conventional medicine but also information engineering—such as AI—
            and preventive medicine to save as many lives as possible.
          </p>
        </div>

      </div>
    </div>
  );
}

