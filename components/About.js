// import AboutDropDown from "./AboutDropDown";
// import { useState } from "react";
// import Link from "next/link";

// const About = (props) => {
//   const [hoverEmail, setHoverEmail] = useState(false);

//   const madWords1 = [
//     "full service",
//     "industry leading",
//     "first to market",
//     "plant based",
//     "talent driven",
//   ];
//   const madWords2 = [
//     "good ideas",
//     "commerce experiences",
//     "highly original solutions",
//     "making the world a better place",
//   ];
//   const madWords3 = [
//     "brands",
//     "BMW",
//     "Drake",
//     "Adult Swim",
//     "Balenciaga",
//     "Nike",
//     "Paramount Pictures",
//     "mike's hard lemonade",
//     "Samsung",
//     "Eric Andre",
//     "Magnolia Pictures",
//     "MTV",
//     "Netflix",
//     "Disney",
//   ];
//   const madWords4 = [
//     "content",
//     "commercials",
//     "music videos",
//     "campaigns",
//     "websites",
//     "filters/lenses",
//     "animation",
//     "illustration",
//     "design",
//   ];
//   const madWords5 = [
//     "stuff",
//     "commerce experiences",
//     "cool vids",
//     "snacks",
//     "tiktok dances",
//   ];
//   const madWords6 = [
//     "explores",
//     "inspires",
//     "recontextualizes",
//     "interpolates",
//     "educates",
//     "questions",
//   ];
//   const madWords7 = [
//     "intersection",
//     "relationship",
//     "boundaries",
//     "interplay",
//     "discourse",
//     "potentiality",
//   ];
//   const madWords8 = [
//     "art",
//     "computers",
//     "memes",
//     "instagram",
//     "the internet",
//     "visual experiences",
//     "biodiversity",
//     "complex carbohydrates",
//     "the metaverse",
//   ];
//   const madWords9 = [
//     "technology",
//     "NFTs",
//     "the multiverse",
//     "innovation",
//     "a painting",
//     "oat milk",
//     "experiential marketing",
//     "cool vids",
//   ];

//   return (
//     <>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[75%] leading-[2.4] w-[80vw]  md:w-[60vw] md:leading-[2.2] lg:w-[52vw] lg:leading-[2.1] text-[12px] sm:text-[16px] md:text-[17px] lg:text-[20px] xl:text-[23px] 2xl:text-[23.8px] text-center">
//         <p className="font-[400]">
//           We&apos;re{" "}
//           <img
//             src="/logoShort.png"
//             className="inline w-[61px] sm:w-[75px] md:w-[85px] lg:w-[95px] xl:w-[100px] 2xl:w-[105px] ml-0.5 mr-0.5"
//           />
//           . We&apos;re a <AboutDropDown madWords={madWords1} /> creative studio
//           specializing in <AboutDropDown madWords={madWords2} />. We work with{" "}
//           <AboutDropDown madWords={madWords3} /> to make{" "}
//           <AboutDropDown madWords={madWords4} />. We make work that{" "}
//           <AboutDropDown madWords={madWords6} /> the{" "}
//           <AboutDropDown madWords={madWords7} /> between{" "}
//           <AboutDropDown madWords={madWords8} /> and{" "}
//           <AboutDropDown madWords={madWords9} />.
//         </p>

//         <p className="font-[400] pt-8">
//           We have an{" "}
//           <a
//             href="https://www.instagram.com/real.good.studio/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <span className="insta cursor-pointer inline-block  noselect thumbcursor">
//               <span className="insta1 text-pink-500">i</span>
//               <span className="insta2 text-sky-400">n</span>
//               <span className="insta3 text-yellow-500">s</span>
//               <span className="insta4 text-purple-500">t</span>
//               <span className="insta5 text-pink-500">a</span>
//               <span className="insta6 text-sky-400">g</span>
//               <span className="insta7 text-pink-500">r</span>
//               <span className="insta8 text-yellow-500">a</span>
//               <span className="insta9 text-green-500">m</span>
//             </span>
//           </a>{" "}
//           and{" "}
//           <Link href="/projects" passHref>
//             <a>
//               <span className="insta cursor-pointer inline-block noselect thumbcursor">
//                 <span className="insta1 text-pink-500">p</span>
//                 <span className="insta2 text-sky-400">r</span>
//                 <span className="insta3 text-yellow-500">o</span>
//                 <span className="insta4 text-purple-500">j</span>
//                 <span className="insta5 text-pink-500">e</span>
//                 <span className="insta2 text-sky-400">c</span>
//                 <span className="insta3 text-yellow-500">t</span>
//                 <span className="insta4 text-purple-500">s</span>
//               </span>
//               {/* <img src="work.png" className="w-[1.3em] inline m-2 noselect" /> */}
//             </a>
//           </Link>{" "}
//           with some works, and{" "}
//           <Link href="/store" passHref>
//             <a>
//               <span className="deck inline-block noselect thumbcursor">
//                 <span className="insta1 text-purple-500">s</span>
//                 <span className="insta2 text-yellow-500">t</span>
//                 <span className="insta3 text-sky-400">o</span>
//                 <span className="insta4 text-pink-500">r</span>
//                 <span className="insta5 text-green-500">e</span>
//               </span>
//               {/* <img src="shop.png" className="w-[1.3em] inline m-2 noselect" /> */}
//             </a>
//           </Link>{" "}
//           with our goods.
//         </p>

//         <p className="font-[400] pt-8 select-auto">
//           Currently taking on select projects{" "}
//           <a href="mailto: hi@realgood.tv" target="_blank" rel="noreferrer">
//             <span
//               className="thumbcursor"
//               onMouseEnter={() => setHoverEmail(true)}
//               onMouseLeave={() => setHoverEmail(false)}
//             >
//               <span>hi@realgood.tv</span>
//               {hoverEmail ? (
//                 <img src="send.png" className="w-[1.3em] inline m-2 noselect" />
//               ) : (
//                 <img
//                   src="email.png"
//                   className="w-[1.3em] inline m-2 noselect"
//                 />
//               )}
//             </span>
//           </a>
//         </p>

//         {/* <button className="px-[16%]  mt-16 text-[10px] sm:text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] "></button> */}

//         {/* <button className="bg-white text-gray-800 font-semibold px-[16%] rounded mt-16 text-[10px] sm:text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] thumbcursor submitButton">
//           Submit
//         </button> */}
//       </div>
//     </>
//   );
// };

// export default About;

import AboutDropDown from "./AboutDropDown";
import { useState } from "react";

const About = (props) => {
  const [hoverEmail, setHoverEmail] = useState(false);

  const madWords1 = [
    "full service",
    "premium",
    "interdisciplinary",
    "first to market",
    "plant based",
    "talent driven",
    "industry leading",
  ];
  const madWords2 = [
    "good ideas",
    "commerce experiences",
    "highly original solutions",
    "liminal space",
    "making it pop",
  ];
  const madWords3 = [
    "brands",
    "BMW",
    "Drake",
    "Adult Swim",
    "Balenciaga",
    "Nike",
    "Paramount Pictures",
    "mike's hard lemonade",
    "Samsung",
    "The Eric Andre Show",
    "Magnolia Pictures",
    "MTV",
    "Netflix",
    "Disney",
    "Rick and Morty",
  ];
  const madWords4 = [
    "content",
    "commercials",
    "music videos",
    "campaigns",
    "websites",
    "filters/lenses",
    "animation",
    "illustration",
    "design",
  ];
  const madWords5 = [
    "stuff",
    "commerce experiences",
    "cool vids",
    "snacks",
    "tiktok dances",
  ];
  const madWords6 = [
    "explores",
    "inspires",
    "recontextualizes",
    "interpolates",
    "educates",
    "questions",
    "operates within",
    "elevates",
  ];
  const madWords7 = [
    "intersection",
    "relationship",
    "boundaries",
    "interplay",
    "discourse",
    "potentiality",
    "polarity",
  ];
  const madWords8 = [
    "art",
    "computers",
    "memes",
    "instagram",
    "the internet",
    "visual experiences",
    "biodiversity",
    "tweets",
    "complex carbohydrates",
    "multi level marketing",
    "kim",
    "space",
    "the metaverse",
  ];
  const madWords9 = [
    "technology",
    "NFTs",
    "the multiverse",
    "innovation",
    "a painting",
    "oat milk",
    "experiential marketing",
    "simulacrum",
    "kardashian",
    "time",
    "cool vids",
  ];

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[75%] leading-[2.4] w-[85vw]  md:w-[60vw] md:leading-[2.2] lg:w-[55vw] lg:leading-[2.3] text-[3.2vw] sm:text-[16px] md:text-[17px] lg:text-[20px] xl:text-[23px] 2xl:text-[24.5px] text-center">
      {props.isSmallWidth || props.isSmallHeight ? (
        <>
          <p className="font-[400]">
            We&apos;re{" "}
            <img
              src="/logoShort.png"
              alt="logo"
              className="inline w-[14vw] sm:w-[75px] md:w-[85px] lg:w-[95px] xl:w-[100px] 2xl:w-[107px] ml-0.5 mr-0.5"
            />
            . We&apos;re a <AboutDropDown madWords={madWords1} /> creative
            studio specializing in <AboutDropDown madWords={madWords2} />. We
            work with <AboutDropDown madWords={madWords3} /> to make{" "}
            <AboutDropDown madWords={madWords4} />.
          </p>
          <p className="font-[400] pt-8">
            We have an{" "}
            <a
              href="https://www.instagram.com/real.good.studio/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="insta cursor-pointer inline-block noselect thumbcursor">
                <span className="insta1 text-pink-500">i</span>
                <span className="insta2 text-sky-400">n</span>
                <span className="insta3 text-yellow-500">s</span>
                <span className="insta4 text-purple-500">t</span>
                <span className="insta5 text-pink-500">a</span>
                <span className="insta6 text-sky-400">g</span>
                <span className="insta7 text-pink-500">r</span>
                <span className="insta8 text-yellow-500">a</span>
                <span className="insta9 text-green-500">m</span>
              </span>
            </a>{" "}
            with some work.
          </p>
        </>
      ) : (
        <>
          <p className="font-[400]">
            We&apos;re{" "}
            <img
              src="/logoShort.png"
              alt="logo"
              className="inline w-[14vw] sm:w-[75px] md:w-[85px] lg:w-[95px] xl:w-[100px] 2xl:w-[107px] ml-0.5 mr-0.5"
            />
            . We&apos;re a <AboutDropDown madWords={madWords1} /> creative
            studio specializing in <AboutDropDown madWords={madWords2} />. We
            work with <AboutDropDown madWords={madWords3} /> to make{" "}
            <AboutDropDown madWords={madWords4} />. We make work that{" "}
            <AboutDropDown madWords={madWords6} /> the{" "}
            <AboutDropDown madWords={madWords7} /> between{" "}
            <AboutDropDown madWords={madWords8} /> and{" "}
            <AboutDropDown madWords={madWords9} />.
          </p>
          <p className="font-[400] pt-7">
            We have an{" "}
            <a
              href="https://www.instagram.com/real.good.studio/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="insta cursor-pointer inline-block noselect thumbcursor">
                <span className="insta1 text-pink-500">i</span>
                <span className="insta2 text-sky-400">n</span>
                <span className="insta3 text-yellow-500">s</span>
                <span className="insta4 text-purple-500">t</span>
                <span className="insta5 text-pink-500">a</span>
                <span className="insta6 text-sky-400">g</span>
                <span className="insta7 text-pink-500">r</span>
                <span className="insta8 text-yellow-500">a</span>
                <span className="insta9 text-green-500">m</span>
              </span>
            </a>{" "}
            with some work and a{" "}
            <a
              href="https://realgooddeck.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="deck inline-block noselect thumbcursor">
                <span className="insta1 text-purple-500">d</span>
                <span className="insta2 text-yellow-500">e</span>
                <span className="insta3 text-sky-400">c</span>
                <span className="insta4 text-pink-500">k</span>
              </span>{" "}
            </a>
            with some more work.
          </p>
        </>
      )}

      <p className="font-[400] pt-7 select-auto">
        Currently taking on select projects{" "}
        <a href="mailto: hi@realgood.tv" target="_blank" rel="noreferrer">
          <span
            className="thumbcursor"
            onMouseEnter={() => setHoverEmail(true)}
            onMouseLeave={() => setHoverEmail(false)}
          >
            <span>hi@realgood.tv</span>
            {hoverEmail ? (
              <img
                src="send.png"
                alt="email"
                className="w-[1.3em] inline m-2 noselect"
              />
            ) : (
              <img
                src="email.png"
                alt="email"
                className="w-[1.3em] inline m-2 noselect"
              />
            )}
          </span>
        </a>
      </p>
    </div>
  );
};

export default About;
