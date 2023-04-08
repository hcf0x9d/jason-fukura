import React from 'react';
import './scss/style.css';
import { Routes, Route } from 'react-router-dom'
import Index from "./pages/Index";
// import CaseStudy from "./pages/CaseStudy";
import { ReactComponent as FigmaLogo } from "./img/Figma-logo.svg"
import { ReactComponent as XdLogo } from "./img/Adobe_XD_CC_icon.svg"
import { ReactComponent as IllustratorLogo } from "./img/Adobe_Illustrator_CC_icon.svg"
import { ReactComponent as WebstormLogo } from "./img/WebStorm_Icon.svg"

// export type caseStudyType = {
//   id: string,
//   title: string,
//   intro: string,
//   keyImage: {
//     url: string,
//     alt: string
//   },
//   images: [
//     {
//       url: string,
//       alt: string
//     }
//   ],
//   overview: {
//     company: string,
//     role: string,
//     type: string
//   },
//   content: {
//     summary: string,
//     challenge: string,
//     solution: string,
//     results: string
//   }
// }

// const cases = [
//   {
//     id: "retirement-calculator",
//     title: "Reimagining a simple retirement calculator",
//     intro: "Turning an awkward web application into a practical, embeddable widget.",
//     keyImage: {
//         url: rmw1,
//         alt: "Retire MyWay Application"
//     },
//     images: [
//       { url: rmw1, alt: "Initial questionnaire" },
//       { url: rmw2, alt: "Investing profile slider" },
//       { url: rmw3, alt: "Final summary with investing target" },
//     ],
//     overview: {
//       company: "Capital One Investing",
//       role: "UX Designer & Developer",
//       type: "Marketing"
//     },
//     content: {
//       summary: "<p>The Capital One Investing Retire MyWay web application needed to be updated. As a stepping stone towards revamping the site and as a part of a marketing campaign built around retirement planning, the request was made to re-envision the application and create something more user-friendly, on-brand, and informational.</p>",
//       challenge: "<p>While nobody expects to get accurate, fully detailed retirement planning advice from a site not attached to your accounts and monitoring your elections, it should be possible to get a simple, high-level view of your path. The final application must acquire enough information to provide a mildly accurate result but shouldn’t ask for so much that users will ignore it. As this is a marketing tool, users won’t likely stick around for an overly long form and involved process.</p>" +
//         "<p>One of the issues with getting an accurate retirement plan is understanding the length of time the user will need to draw from their account—in other words, how long after retirement will they live? The original Retire MyWay application handled this in the most simplistic manner possible: ask the user to provide an age of death. Unfortunately, this question alone could be the reason for the low adoption of the application.</p>",
//       solution: "<p>After discussing the requirements and potential solutions with my Project Manager, I did a competitive landscape analysis. I went looking for any and every retirement calculator that existed on the internet. Most of them had the same features:</p>" +
//         "<ul><li>A simple form</li><li>An investing profile</li><li>The results</li></ul>" +
//         "<p>The issue we wanted to solve was that a basic form is uninviting and can feel too “technical.” With that in mind, we created a natural language form that behaves more like Madlibs than a form. We also wanted to limit the number of questions asked since more questions will often lead to fewer responses in any form.</p>" +
//         "<p>Another barrier to entry we wanted to eliminate was the form asking the user for their “death age.” This question obviously will cause many users to stumble and potentially drop out. Understanding this, we used the Social Security Administration’s Actuary Table to identify an approximate “age of death” for the user based on their gender response (using female for “decline to identify”) and age response.</p>" +
//         "<p>The final key point for this application is that it must be portable and be able to be installed on any web page that the business deems valuable. With this in mind, the final application was turned into a jQuery plugin that required instantiation into a parent container but nothing else.</p>",
//       results: "<p>After doing some internal reviews, the application was quickly built into a prototype and passed into UserTesting.com to be tested with people fitting our target demographics.</p>" +
//         "<p>What was successful:</p>" +
//         "<ul><li>Navigation was well received (ISO 9241-151 8.4.2)</li><li>Most found the layout simple to understand by using a conversational approach (ISO 9241-110 4.5.1, 4.5.4)</li><li>By breaking the up the layout into small chunks, we were able to keep distractions down (ISO 9241-110 4.3.2, 4.4.1)</li><li>We should continue to prefill the retirement age at 65 or 67 (ISO 9241-110 4.3.2, 4.3.4)</li><li>Estimating the age of death was a big win for simplicity (ISO 9241-110 4.3.2, 4.3.4-5)</li></ul>" +
//         "<p>Things that need to be fixed:</p>" +
//         "<ul><li>Implementing the ability to go to any step (ISO 9241-151 8.4.13)</li><li>Show a difference between links that pop out and links that perform in-page tasks (ISO 9241-151 9.4.10-12)</li><li>Finish implementing proper validation (ISO 9241-151 10.3.1-2, ISO 9241-110 4.8.1-2, 4.8.8)</li><li>The intro screen should show more than just disclosures but also the information needed. (9241-110 4.2)</li><li>Consider how we structure the information on the “Investing Style” page</li></ul>" +
//         "<p>The “Preview Screen” was the view with the most changes to be made. That would be to consider changing the size of the footnote text explaining the 70%-90% section of the slider. We made no other changes since most users could figure the slider out with minimal effort. We also removed the map pin in favor of a “ghosted” slider knob on the slider to reduce visual clutter (ISO 9241-151 9.3.17, 9.6.1-9.6.2).</p>" +
//         "<p>While the final project was completed and packaged up into a jQuery plugin, as desired, the division was ultimately shuttered before the application could be tested thoroughly with a more extensive set of users.</p>",
//       pullQuote: "This site is nice and easy to use. Asks for only basic info, but provides links for more info if needed. Nice that all that info is not on the page to add clutter. I would bookmark a site like this and refer to it often."
//     }
//   },
//   {
//     id: "cybersecurity-ux",
//     title: "Cyber security UX",
//     intro: "Making runtime web security for large sites a little more user friendly.",
//     keyImage: {
//       url: rmw1,
//       alt: "Retire MyWay Application"
//     },
//     images: [
//       { url: rmw1, alt: "Initial questionnaire" },
//     ],
//     overview: {
//       company: "CI Security",
//       role: "UX Designer",
//       type: "Product"
//     },
//     content: {
//       summary: "<p>I was initially hired by CI Security (Critical Informatics, at the time) as a contractor to design the first version of their web-based dashboard for clients to view.</p>",
//       challenge: "<p>In the world of cybersecurity, most of the work that happens is behind the scenes and hard to visualize. Things like analysts monitoring packet data, investigating anomalies, and machines that ingest terabytes of data per month.</p>" +
//         "<p>The lack of a portal creates a disparity between the client and the company. A communication issue can arise quickly. Conversely, the clients mostly don't want to be digging through data and trying to understand it. That is what they pay us to do. How do you show enough data to not make the client concerned while showing enough data to understand our company is working on things behind-the-scenes?</p>",
//       solution: "<p>The goal was to move quickly, as the product was already in-flight and needed a dashboard ASAP. Because of this limitation, I worked very quickly through some wireframes after doing competitive research. There were many things that the stakeholders didn't want to be incorporated into the design that I needed to be aware of. After a couple of meetings with stakeholders, I began the process and pushed out a very early draft to get a feel for which dataset needed the most \"weight.\"</p>" +
//         "<p>Through that initial concept, we were able to pivot quickly to a more refined view. In the end, we ended up modifying the charts to take up less space, utilizing a 2-D heat map concept to show a relative \"activity level.\" Again, a key aspect of this project was that we did not want to give so much data that the client felt they needed to investigate.</p>" +
//         "<p>During this project, I also designed a little Kraken logo, just as a fun thing. The company liked it so much that several employees have it tattooed on their bodies somewhere.</p>",
//       results: "<p>After completing the rounds of design and feedback, I developed a prototype built with HTML, CSS3 (SCSS), and D3.js. The prototype used scrubbed production data in the JSON formatting that the final development environment would be gathering, which meant I first needed to learn the custom API response that our company was creating, then figuring out how to apply that large dataset to multiple graphs, charts, and tables in the final output.</p>" +
//         "<p>The final product passed to development was a fully-functional front-end adjusted to work in the production environment.</p>",
//       pullQuote: ""
//     }
//   },
//   {
//     id: "javascript-security",
//     title: "JavaScript Security Monitoring",
//     intro: "Making runtime web security a little more friendly.",
//     keyImage: {
//       url: ottoBox,
//       alt: "ottoBox"
//     },
//     images: [
//       { url: ottoBox, alt: "ottoBox" },
//     ],
//     overview: {
//       company: "Capital One Investing",
//       role: "UX Designer & Developer",
//       type: "Marketing"
//     },
//     content: {
//       summary: "<p>Monitoring runtime security of a web application or website can be challenging endeavor, otto wants to change that.</p>",
//       challenge: "<p>The goal of the user experience for ottoBox was to make the application as simple to work with as an email client, which we opted to keep as a visual metaphor while designing and developing the first version of this product.</p>",
//       solution: "<p>Of primary importance is the fact that the user may not always understand what it is they are looking at, so providing them with the most rich data possible is key. Another important factor is understanding that the product sometimes works silently. It is a good thing to be able to login and not see anything in the inbox, but how do we show that we are still providing value led us to adding a \"pageviews\" count and keeping the items that were automatically blocked by the system in a separate \"drawer.\"  When the user logs in, they can see that we are still monitoring and have provided value by blocking known issues without the user doing anything.</p>" +
//         "<p>Another complex issue we wanted to solve was dealing with Content Security Policies. CSPs can be a headache to manage, especially on larger websites that make hundereds or thousands of 3rd party web requests. The platform was designed to make managing and deploying CSPs easy and seamless. The user is given a simple visual layout of the CSP rules, making it easy to add found violations to the policy, quickly save, preview and deploy.</p>",
//       results: "<p>Taking complex, high risk issues like Cyber Security and turning them into pleasant and simple user experiences has taken a lot of research, conceptualizing, and revision to get us to a place where we have a deployable product that is delighting users already.</p>",
//       pullQuote: ""
//     }
//   },
// ]
// const companies = [
//   {name: "NAME", icon: "ICON"}
// ]
const education = [
  { certification: "Certified Usability Analyst", institution: "Human Factors International", year: "2023"},
  { certification: "Nanodegree: Full-Stack Dev", institution: "Central Washington University", year: "2017" },
  { certification: "Nanodegree: Front-End Web", institution: "Central Washington University", year: "2016" },
  { certification: "BA Music Education", institution: "Central Washington University", year: "2005" }
]
const skills = ['UX Design','Information Architecture','User Task Mapping','Product Design','Rapid Prototyping','Usability Testing','Design Systems']
const tools = [
  { name: "Figma", icon: <FigmaLogo /> },
  { name: "Adobe XD", icon: <XdLogo /> },
  { name: "Adobe Illustrator", icon: <IllustratorLogo /> },
  { name: "Jetbrains Webstorm", icon: <WebstormLogo /> },
]

function App() {
  return (
    <Routes>
      <Route path="/jason-fukura" element={<Index education={education} skills={skills} tools={tools} />} />
      {/*<Route path="/jason-fukura/case-study/:caseId" element={<CaseStudy data={cases} />} />*/}
    </Routes>
  );
}

export default App;
