// import React from "react";

// class Top extends React.Component {
//   render() {
//     return (
//       <div className="Top">
//         <div className="Top-inner">
//           <p> REO OBI's </p>
//           <p> HOMEPAGE </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Top;



import React from "react";
import { useInView } from "../hooks/useInView";

export default function Top() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div className="Top">
      <div className="Top-inner" ref={ref}>
        <p className={inView ? "animate-catch" : ""}>REO OBI’s</p>
        <p className={inView ? "animate-catch delay" : ""}>HOMEPAGE</p>
      </div>
    </div>
  );
}
