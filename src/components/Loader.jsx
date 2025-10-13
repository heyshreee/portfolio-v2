// import React from "react";
// import styled from "styled-components";

// const Loader = () => {
//   return (
//     <StyledWrapper>
//       <p className="loader">
//         <span>Scan</span>
//       </p>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: #0f172a; /* Dark background for loader */
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .loader {
//     max-width: fit-content;
//     color: #f2fff0;
//     font-size: 50px;
//     font-family: Arial, sans-serif; /* Replace 'Mine' with safe font */
//     position: relative;
//     font-style: italic;
//     font-weight: 600;
//   }

//   .loader span {
//     animation: cut 2s infinite;
//     transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   }

//   .loader:hover {
//     color: #fcffdf;
//   }

//   .loader::after {
//     position: absolute;
//     content: "";
//     width: 100%;
//     height: 6px;
//     border-radius: 4px;
//     background-color: #ff828291;
//     top: 0px;
//     filter: blur(10px);
//     animation: scan 2s infinite;
//     left: 0;
//     z-index: 0;
//     transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   }

//   .loader::before {
//     position: absolute;
//     content: "";
//     width: 100%;
//     height: 5px;
//     border-radius: 4px;
//     background-color: #ff8282;
//     top: 0px;
//     animation: scan 2s infinite;
//     left: 0;
//     z-index: 1;
//     filter: opacity(0.9);
//     transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   }

//   @keyframes scan {
//     0% {
//       top: 0px;
//     }
//     25% {
//       top: 54px;
//     }
//     50% {
//       top: 0px;
//     }
//     75% {
//       top: 54px;
//     }
//   }

//   @keyframes cut {
//     0% {
//       clip-path: inset(0 0 0 0);
//     }
//     25% {
//       clip-path: inset(100% 0 0 0);
//     }
//     50% {
//       clip-path: inset(0 0 100% 0);
//     }
//     75% {
//       clip-path: inset(0 0 0 0);
//     }
//   }
// `;

// export default Loader;



// import React from 'react';
// import styled from 'styled-components';

// const Loader = () => {
//   return (
//     <StyledWrapper>
//       <div className="loader" />
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .loader {
//    position: relative;
//    width: 2.5em;
//    height: 2.5em;
//    transform: rotate(165deg);
//   }

//   .loader:before, .loader:after {
//    content: "";
//    position: absolute;
//    top: 50%;
//    left: 50%;
//    display: block;
//    width: 0.5em;
//    height: 0.5em;
//    border-radius: 0.25em;
//    transform: translate(-50%, -50%);
//   }

//   .loader:before {
//    animation: before8 2s infinite;
//   }

//   .loader:after {
//    animation: after6 2s infinite;
//   }

//   @keyframes before8 {
//    0% {
//     width: 0.5em;
//     box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
//    }

//    35% {
//     width: 2.5em;
//     box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
//    }

//    70% {
//     width: 0.5em;
//     box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
//    }

//    100% {
//     box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
//    }
//   }

//   @keyframes after6 {
//    0% {
//     height: 0.5em;
//     box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
//    }

//    35% {
//     height: 2.5em;
//     box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
//    }

//    70% {
//     height: 0.5em;
//     box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
//    }

//    100% {
//     box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
//    }
//   }

//   .loader {
//    position: absolute;
//    top: calc(50% - 1.25em);
//    left: calc(50% - 1.25em);
//   }`;

// export default Loader;



import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loading">
        <svg width="64px" height="48px">
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back" />
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front" />
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loading svg polyline {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .loading svg polyline#back {
    fill: none;
    stroke: #ff4d5033;
  }

  .loading svg polyline#front {
    fill: none;
    stroke: #ff4d4f;
    stroke-dasharray: 48, 144;
    stroke-dashoffset: 192;
    animation: dash_682 1.4s linear infinite;
  }

  @keyframes dash_682 {
    72.5% {
      opacity: 0;
    }

    to {
      stroke-dashoffset: 0;
    }
  }`;

export default Loader;
