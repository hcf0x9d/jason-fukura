import React from 'react';
import './scss/style.css';
import { Routes, Route } from 'react-router-dom'
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";

const cases = [
  {
    id: 'retireMyWay',
    title: 'Retire MyWay',
    company: 'Capital One Investing',
    images: {
      gallery: ['/jason-fukura/retireMyWay.png', 'bottom'],
      key: ['/jason-fukura/retireMyWay-full.png', '18rem'],
      details: ['/jason-fukura/rmw_RetirementPreview.png', '/jason-fukura/rmw_Slider.png']
    },
    summary: 'Updating a bleak, outdated marketing tool with a more friendly user experience.',
    tags: ['JavaScript', 'UX Design', 'User Research'],
    content: {
      brief: 'The Capital One Investing Retire MyWay web application was very outdated. As a stepping stone towards revamping this site, and as a part of a marketing campaign built around retirement planning, the request was made to re-envision the application and build something that was more user-friendly, on brand and informational. For this project, I was acting as designer (User Experience and User Interface), as well as developer.',
      introduction: `<p>Armed with a knowledge of User Experience guidelines--including the books, and ISO standards that I had available--I researched what competitors were doing, especially around one specific part of the equation: estimating the age of death for the user.</p>
      <p>Many sites were asking the user to estimate an age of death, and some were coming up with a random age based on gender--which was the suggestion of the strategists I was working with. Instead, I suggested we simply use the Social Security Administration's Actuary table. By asking the user what age and gender they currently are, we were able to estimate an age of death for the user without them thinking about it.</p>
      <p>Other problems were solved in a similar fashion by keeping in mind that this tool was not an actual retirement calculator, but more of an estimation to see if the user is on track.</p>
      <p>After coming up with a base user flow and then wireframe, I generated a quick HTML prototype that would walk the user through the process and show them a real number.</p>
      <p>Following user-testing, slight modifications were made to the application and the CSS and JavaScript were bundled into a widget that could easily be added to any project.</p>
      <p>All calculations were handled "on-the-fly" and the complex, compound-interest formula was thoroughly reviewed prior to launch.</p>`,
      details: `<h3 class="heading-3">Rating: 82%</h3>
      <ul>
        <li>4 users rated the widget as a 10/10</li>
        <li>1 user rated the widget as 9/10</li>
        <li>1 user rated the widget as 0/10</li>
      </ul>
      <h4 class="heading-4">A quick note on the 0/10 rating:</h4>
      <p>The assumption is that this user was misreading or misunderstanding the purpose of this widget. In their initial interview they mentioned the following expectations:</p>
      <ul>
        <li>Will show metrics, statistics and a graph of retirement account growth over time</li>
        <li>Tool should provide breakdown of accounts</li>
        <li>In general, looking for a full application experience like that being developed by another team</li>
      </ul>
      <p>Obviously, these points fall well outside the scope of a small marketing widget. Functionality like this would require connection to the user's accounts, which requires deeper levels of integration and security.</p>
      <h3 class="heading-3">Things that were successful</h3>
      <ul>
        <li>Navigation was well received (ISO 9241-151 8.4.2)</li>
        <li>Most found the layout simple to understand by using a conversational approach (ISO 9241-110 4.5.1, 4.5.4)</li>
        <li>By breaking the up the layout into small chunks we were able to keep distractions down (ISO 9241-110 4.3.2, 4.4.1)</li>
        <li>We should continue to prefill the retirement age at 65 or 67 (ISO 9241-110 4.3.2, 4.3.4)</li>
        <li>Estimating the age of death was a big win for simplicity (ISO 9241-110 4.3.2, 4.3.4-5)</li>
      </ul>
      <h3 class="heading-3">Things that needed to be fixed</h3>
      <ul>
        <li>Implementing the ability to go to any step (knowingly omitted from the experience) (ISO 9241-151 8.4.13)</li>
        <li>Show links that pop-out and links that perform in-page tasks (ISO 9241-151 9.4.10-12)</li>
        <li>Finish implementing proper validation (ISO 9241-151 10.3.1-2, ISO 9241-110 4.8.1-2, 4.8.8)</li>
        <li>Intro screen should show more than just disclosures, but also the information needed. (9241-110 4.2)</li>
        <li>Consider how we structure the information on the "Investing Style" page</li>
      </ul>`,
      conclusion: `<p>The final project was developed using a mix of jQuery, Vanilla (Object Oriented) JavaScript, SASS/SCSS and HTML5. All parts of the web application were designed to be fully responsive, and we included the jQuery Touch Punch library to assist with making the jQuery UI slider elements touch friendly.</p>
      <p>Based on Object-Oriented principles, the widget can easily be moved between projects, and the SCSS files can be embedded into other projects as partials as well.</p>`
    }
  },
//   {
//     id: 'plantPad',
//     title: 'Plant Pad',
//     company: 'Kitsap Roots',
//     images: {
//       gallery: ['/jason-fukura/plantpad_ipad.png', 'bottom'],
//       key: ['/jason-fukura/plantpad_full.png', '18rem']
//     },
//     summary: 'Tracking your garden through the seasons, with an expert Garden Coach.',
//     tags: ['React', 'UX Design', 'Python'],
//     content: {
//       brief: 'In an effort to provide clients with a more in-depth garden coaching experience, I was tasked with creating an application that could be used to share notes and educational content.',
//       introduction: `<p>The hypothesis behind the Plant Pad application is that a gardener who is seeking assistance from a garden coach would have a single location where they could learn the details about the plants in their garden, how to care for them, as well as communicate directly with the coach in one place.</p>`,
//       details: `<p>This application encompasses three primary pieces:</p>
//         <ol>
//           <li>A journal that where the user can attach images as well as share specific entries with the garden coach. The coach can then respond directly in the entry.</li>
//           <li>A list of plants that the user has in their garden with all of the content needed to understand the plant's environmental requirements as well as a calendar for scheduling the sowing timeline, harvest windows, and other key checkpoints.</li>
//           <li>A task list based on the plants that exist in the garden.</li>
//         </ol>
// `,
//       conclusion: `<p>While the project is temporarily on hold, the designs and codebase still exist and are prepared to be picked back up once some key user and market research is completed.</p>`
//     }
//   },
//   {
//     id: 'financialFitness',
//     title: 'Financial Fitness Landing Page',
//     company: 'Capital One Investing',
//     images: {
//       gallery: ['/jason-fukura/financialfitness-browser.png', 'bottom'],
//       key: ['/jason-fukura/financialfitness-full.png', '10rem']
//     },
//     summary: 'Visualizing where you are in retirement, but not with a graph.',
//     tags: ['JavaScript'],
//     content: {
//       brief: 'While not a mind-blowing application, we managed to create an experience for consumers that helped give an idea of where they were in their retirement planning, without resorting to a boring graph.',
//       introduction: `<p>The designer I was working with had come up with the idea of a "race," and visualizing where you were at in the pack as you prepare for retirement. The idea of a survey of sorts came up and there was a wish that we could show the data some other way.</p>
//       <p>As a Design Technologist, it was my duty to help guide the crossover of design and development. Designers aren't always aware of what is capable and how much effort different ideas take to implement.</p>`,
//       details: `<p>The goal was to make the experience as interactive as possible, so I suggested animating SVGs to make the bicyclists actually race each other, with our protagonist in a different color in order to stand-out.</p>
//       <p>The question of feasibility was discussed, and I offered to make a prototype to test the theory out and make sure that I could complete the project on our tight timeline, as well as find any learnings from cross-platform testing.</p>
//       <p>Working closely with our UX designer and Illustrator, I was given SVGs for each component and cut them up so there were joints where needed, then I created the animation flow for each of the layers.</p>
//       <p>The final task was working in the logic so that as a user selected the checkboxes, the protagonist would move through the peloton. Also included was a "quiz" module.</p>`,
//       conclusion: `<p>Everyone in the whole team was truly ecstatic about the final results. The landing page and controls were a huge success.</p>
//       <p><b>A working example can be seen <a href="https://jfukura.github.io/financial-fitness/" target="_blank">here</a>.</b></p>`
//     }
//   },
  {
    id: 'ottoBox',
    title: 'ottoBox',
    company: 'otto',
    images: {
      gallery: ['/jason-fukura/ottobox.png', 'bottom'],
      key: ['/jason-fukura/ottobox-full.png', '14rem'],
    },
    summary: 'Making runtime web security a little more friendly.',
    tags: ['JavaScript', 'Elixir', 'UX Design', 'User Research'],
    content: {
      brief: 'Presented with the question of "how do we best show a user what their websites are doing on the client-side interactions," there are many ways to move forward. Finding the sweet-spot of actionable information and "too much noise" can be a challenge.',
      introduction: `<p>The goal of the user experience for ottoBox was to make the application as simple to work with as an email client, which we opted to keep as a visual metaphor while designing and developing the first version of this product.</p>
      <p></p>`,
      details: `<p>Of primary importance is the fact that the user may not always understand what it is they are looking at, so providing them with the most rich data possible is key. Another important factor is understanding that the product sometimes works silently. It is a good thing to be able to login and not see anything in the inbox, but how do we show that we are still providing value led us to adding a "pageviews" count and keeping the items that were automatically blocked by the system in a separate "drawer."  When the user logs in, they can see that we are still monitoring and have provided value by blocking known issues without the user doing anything.</p>
        <p>Another complex issue we wanted to solve was dealing with Content Security Policies. CSPs can be a headache to manage, especially on larger websites that make hundereds or thousands of 3rd party web requests. The platform was designed to make managing and deploying CSPs easy and seamless. The user is given a simple visual layout of the CSP rules, making it easy to add found violations to the policy, quickly save, preview and deploy.</p>`,
      conclusion: `<p>Taking complex, high risk issues like cybersecurity and turning them into pleasant and simple user experiences has taken a lot of research, conceptualizing, and revision to get us to a place where we have a deployable product that is delighting users already.</p>`
    }
  },
  {
    id: 'musicLms',
    title: 'Music LMS Work',
    company: 'Music Prodigy',
    images: {
      gallery: ['/jason-fukura/lms.png', 'top'],
      key: ['/jason-fukura/retireMyWay-full.png', '18rem'],
      details: ['/jason-fukura/mp_CopyClassContent.png', '/jason-fukura/mp_TeacherOnboarding.png']
    },
    summary: 'Taking a product from "minimum viable" to "usable."',
    tags: ['LMS', 'UX Design'],
    content: {
      brief: 'The hallmark of many startups is the desire to move fast enough to completely skip design. Then there\'s tech-debt to be dealt with.',
      introduction: `<p>I was brought in to Music Prodigy to take their initial, developer-built application and begin turning it into something that was more than just "functional," but hopefully pleasant and easy to use. As a designer who was splitting his time as one of the few front-end focused web developers who was also designing the UX and UI of a complex product, while also redesigning and developing the company website and updating the branding, this was no small feat.</p>`,
      details: `<p>The product can be described as "Guitar Hero" for wind and orchestral instruments. For those familiar with Yousician, it's a similar concept. The student can be assigned something from their teacher and then play along with the assignment on their phone, tablet, or computer. The application grades them, sending that back to the teacher and an audio recording of the capture.</p>
        <p>The specific task that is called out in these early diagrams and wireframes is assigning something new to a class, from a "grade book view," which we were in the process of designing and developing. There are many steps involved in creating a new assignment. I was able to recall my experience as a public school music teacher to help inform some of the requirements and design concepts. Using best practices and ISO standards, we refined the process into something elegant and simple for the teacher to navigate.</p>`,
      conclusion: `<p>Ultimately, the company scrapped this part of the project, and I left the company before its implementation. I assisted in preparing a full workflow that could be revisited and assessed at a later date. All of my workflow diagrams include annotations so that anybody who takes a project over that has been shelved for a while will be able to see where we last left off and what we were thinking.</p>`
    }
  },
]

function App() {
  return (
    <Routes>
      <Route path="/jason-fukura" element={<Index data={cases} />} />
      <Route path="/jason-fukura/case-study/:caseId" element={<CaseStudy data={cases} />} />
    </Routes>
  );
}

export default App;
