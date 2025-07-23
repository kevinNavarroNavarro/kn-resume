<template>
  <div class="resume-container">
    <div class="header">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="text-left mb-0">Kevin Navarro</h1>
            <p class="text-left mb-0" style="color: white; opacity: 0.9;">Software Engineer</p>
          </div>
          <div class="col-md-6 text-end">
            <a
              href="https://drive.google.com/file/d/1fPqug2Bs3K_-inxIjmO1VAX21WYz8Uo0/view?usp=sharing"
              target="_blank"
              title="Download PDF"
              ><img src="../assets/pdf.png" alt="PDF Icon" style="width: 35px"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="main-div">
      <div class="row">
        <div class="col-md-5 card">
          <div class="mt-2">
            <div>
              <div class="mt-1 personal-information">
                <img src="/profile.jpeg" alt="Kevin Navarro" 
                     style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; 
                            margin-bottom: 1rem; border: 4px solid var(--primary-color); 
                            box-shadow: 0 0 20px var(--glow-color), 0 4px 15px rgba(0,0,0,0.3);" />
                <h1 class="mt-2">Kevin Navarro</h1>
                <p class="mb-3" style="font-size: 1.125rem; color: var(--secondary-color); font-weight: 500;">
                  <font-awesome-icon icon="briefcase" class="text-teal" />
                  Software Engineer
                </p>
                <p>
                  <font-awesome-icon icon="envelope" class="text-teal" />
                  <a href="mailto:ken314588@gmail.com" style="color: inherit; text-decoration: none;">ken314588@gmail.com</a>
                </p>
                <p>
                  <font-awesome-icon icon="phone" class="text-teal" /> 
                  <a href="tel:+50685970967" style="color: inherit; text-decoration: none;">+506 8597-0967</a>
                </p>
                <p>
                  <font-awesome-icon icon="globe" class="text-teal" /> 
                  <a href="https://linkedin.com/in/kevin-navarro" target="_blank" style="color: inherit; text-decoration: none;">LinkedIn Profile</a>
                </p>
              </div>

              <hr />
              <h3 class="mb-3" style="display: flex; align-items: center; gap: 0.5rem;">
                <font-awesome-icon icon="book" class="text-teal" style="font-size: 1.25rem;" />
                <span>Profile</span>
              </h3>
              <p class="justify-text m-4 mt-2">
                Passionate Software Engineer with 3+ years of experience leading backend initiatives and delivering full-stack solutions.
                Specializes in Java Spring Boot for building robust APIs and integrating with SQL databases and cloud platforms. Also
                brings full-stack skills with Python and React, enhanced by AI tools like Claude. Continuously driven by curiosity,
                stays up-to-date with emerging technologies to create scalable and modern software solutions.
              </p>
              <hr />

              <h3 class="mb-3" style="display: flex; align-items: center; gap: 0.5rem;">
                <font-awesome-icon icon="clipboard-check" class="text-teal" style="font-size: 1.25rem;" />
                <span>Technical Skills</span>
              </h3>
              <div class="skills-section">
                <h6><strong>Programming Languages:</strong></h6>
                <ul class="justify-text m-2 mb-3">
                  <div class="row">
                    <div class="col-md-6">
                      <li>Java</li>
                      <li>Python</li>
                    </div>
                    <div class="col-md-6">
                      <li>JavaScript</li>
                    </div>
                  </div>
                </ul>
                
                <h6><strong>Frameworks/Libraries:</strong></h6>
                <ul class="justify-text m-2 mb-3">
                  <div class="row">
                    <div class="col-md-6">
                      <li>Spring Boot</li>
                      <li>Flask</li>
                      <li>FastAPI</li>
                    </div>
                    <div class="col-md-6">
                      <li>React</li>
                      <li>Vue.js</li>
                    </div>
                  </div>
                </ul>
                
                <h6><strong>Databases:</strong></h6>
                <ul class="justify-text m-2 mb-3">
                  <div class="row">
                    <div class="col-md-6">
                      <li>MSSQL</li>
                      <li>MongoDB</li>
                    </div>
                    <div class="col-md-6">
                      <li>MySQL</li>
                    </div>
                  </div>
                </ul>
                
                <h6><strong>Tools/Platforms:</strong></h6>
                <ul class="justify-text m-2">
                  <div class="row">
                    <div class="col-md-6">
                      <li>Docker</li>
                      <li>Azure DevOps</li>
                      <li>Git</li>
                    </div>
                    <div class="col-md-6">
                      <li>Claude</li>
                      <li>Cursor</li>
                    </div>
                  </div>
                </ul>
              </div>
              <hr />

              <h3 class="mb-3" style="display: flex; align-items: center; gap: 0.5rem;">
                <font-awesome-icon icon="circle-plus" class="text-teal" style="font-size: 1.25rem;" />
                <span>Soft Skills</span>
              </h3>
              <ul class="justify-text m-2">
                <div class="row">
                  <div class="col-md-6">
                    <li>Communication</li>
                    <li>Problem-solving</li>
                    <li>Self-learning</li>
                  </div>
                  <div class="col-md-6">
                    <li>Leadership</li>
                    <li>Teamwork</li>
                  </div>
                </div>
              </ul>
              <hr />

              <h3 class="mb-3" style="display: flex; align-items: center; gap: 0.5rem;">
                <font-awesome-icon icon="globe" class="text-teal" style="font-size: 1.25rem;" />
                <span>Languages</span>
              </h3>
              <ul class="justify-text m-2">
                <div class="row">
                  <div class="col-md-6">
                    <li>Spanish: Native</li>
                  </div>
                  <div class="col-md-6">
                    <li>English: B2</li>
                  </div>
                </div>
              </ul>
              <br />
            </div>
          </div>
        </div>

        <div class="col-md-6 card">
          <div>
            <h2 class="mt-2">
              <font-awesome-icon
                icon="suitcase"
                class="text-teal"
                style="font-size: 25px"
              />
              Work Experience
            </h2>
            <div>
              <h5 class="wrapper">
                <b> Nearlinx Software Engineer - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                Jul 2022 -
                <span class="tag teal">Current</span>
              </h5>
              <p class="m-0">Software Engineer - Remote</p>
              <ul class="justify-text m-2 mt-1">
                <li>Led backend projects using Java Spring Boot, integrating with relational databases and implementing unit/integration tests with JUnit to deliver robust, scalable APIs.</li>
                <li>Managed API integrations between internal/external platforms, enabling seamless communication between systems.</li>
                <li>Led full database migration impacting 5+ services, improving query performance, and ensuring long-term scalability.</li>
                <li>Worked as a full-stack developer using Python (Flask/FastAPI) and React, supported by Claude AI to enhance development productivity and code quality.</li>
              </ul>
            </div>
            <div>
              <h5 class="wrapper">
                <b> Nearlinx Software Developer - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                Nov 2021 - Mar 2023
              </h5>
              <p class="m-0">Software Developer - Remote</p>
              <ul class="justify-text m-2 mt-2">
                <li>Designed Java Spring Boot solutions according to the client's needs.</li>
                <li>Collaborated with the front-end team to ship intuitive, user-friendly features to enhance the user experience.</li>
              </ul>
            </div>
          </div>

          <hr />
          <div>
            <h2 class="mt-2">
              <font-awesome-icon
                icon="graduation-cap"
                class="text-teal"
                style="font-size: 25px"
              />
              Education
            </h2>
            <div>
              <h5 class="wrapper">
                <b>Bachelor of Business Informatics - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                2018 - 2022
              </h5>
              <p>University of Costa Rica</p>
            </div>
          </div>

          <hr />
          <div>
            <h2 class="mt-2">
              <font-awesome-icon
                icon="code"
                class="text-teal"
                style="font-size: 25px"
              />
              Personal Projects
            </h2>
            <div>
              <h5 class="wrapper">
                <b>Wedding Manager App - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                2025
              </h5>
              <p class="m-0"><strong>Tech Stack:</strong> Java Spring Boot · React · MongoDB · DigitalOcean · GitFlow · CI/CD</p>
              <ul class="justify-text m-2 mt-2">
                <li>Developed a full-stack web application as the digital invitation to my own wedding.</li>
                <li>Enabled RSVP (accept/decline) functionality, with data stored in MongoDB via a Spring Boot REST API.</li>
                <li>Implemented real-time guest management features to monitor responses.</li>
                <li>Deployed on DigitalOcean with a custom domain and CI/CD pipeline for auto-redeployment via GitFlow.</li>
                <li>Delivered a stable, mobile-first solution that simplified guest tracking and improved UX.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <h4 class="pt-1">Find me on</h4>
      <div class="wrapper">
        <a
          href="https://www.linkedin.com/in/kevinnavarronavarro"
          target="_blank"><img src="../assets/linkedIn.png" alt="LinkedIn Icon" class="icon"
        /></a>
        <a href="https://github.com/kevinNavarroNavarro" target="_blank"
          ><img src="../assets/github.png" alt="LinkedIn Icon" class="icon"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBriefcase,
  faHome,
  faEnvelope,
  faPhone,
  faAsterisk,
  faBook,
  faClipboardCheck,
  faCirclePlus,
  faGlobe,
  faCalendar,
  faSuitcase,
  faGraduationCap,
  faCertificate,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faBriefcase,
  faHome,
  faEnvelope,
  faPhone,
  faAsterisk,
  faBook,
  faClipboardCheck,
  faCirclePlus,
  faGlobe,
  faSuitcase,
  faCalendar,
  faGraduationCap,
  faCertificate,
  faCode
);

export default {
  name: "kn-resume",
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
/* Component-specific styles - CSS variables are now global in App.vue */

/* Modern Typography */
h1 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.875rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 0.5rem;
  letter-spacing: -0.025em;
  text-shadow: 0 0 10px var(--glow-color);
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-shadow: 0 0 8px var(--glow-color);
}

h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

b {
  font-weight: 600;
  color: var(--text-primary);
}

p {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

li {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

ul li {
  position: relative;
  padding-left: 1.5rem;
}

ul li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: 600;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-primary) 50%, var(--bg-accent) 100%);
  border-bottom: 2px solid var(--primary-color);
  color: white;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-lg), 0 2px 15px var(--glow-color);
  backdrop-filter: blur(15px);
  transition: var(--transition-base);
}

.header h1 {
  color: white;
  margin-bottom: 0;
}

.header a img {
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease;
}

.header a:hover img {
  transform: translateY(-2px);
}

/* Main Content Area */
.resume-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: transparent;
}

.main-div {
  max-width: 1400px;
  margin: 1.5rem auto;
  padding: 0 0.5rem;
}

/* Card Styles */
.card {
  background: var(--bg-primary);
  background-image: linear-gradient(145deg, rgba(34, 211, 238, 0.03), rgba(139, 92, 246, 0.03));
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  margin: 0.75rem;
  box-shadow: var(--shadow-md), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: var(--transition-base);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
  transform: scaleX(0);
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px var(--primary-color);
}

.card:hover {
  box-shadow: var(--shadow-xl), var(--shadow-glow), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  border-color: var(--primary-color);
}

.card:hover::before {
  transform: scaleX(1);
}

/* Personal Information Section */
.personal-information {
  text-align: center;
  padding: 1rem 0;
}

.personal-information h1 {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 8px var(--glow-color));
}

.personal-information p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
}

/* Section Dividers */
hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  margin: 2.5rem 0;
  opacity: 0.6;
  box-shadow: 0 0 4px var(--primary-color);
}

/* Icon Styles */
.text-teal {
  color: var(--secondary-color);
  transition: color 0.3s ease;
}

.card:hover .text-teal {
  color: var(--accent-color);
}

/* Tag Styles */
.tag {
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  color: white;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}

.tag:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

/* Work Experience Timeline */
.wrapper {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1.5rem;
}

.wrapper::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--secondary-color), transparent);
}

.wrapper::after {
  content: "";
  position: absolute;
  left: -4px;
  top: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--secondary-color);
  box-shadow: 0 0 0 4px var(--bg-primary), 0 0 0 6px var(--secondary-color), 0 0 10px var(--secondary-color);
}

/* Skills Grid Enhancement */
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.col-md-6 {
  flex: 1;
  min-width: 150px;
}

/* Footer Styles */
.footer {
  margin-top: auto;
  background: linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-primary) 50%, var(--bg-accent) 100%);
  border-top: 2px solid var(--primary-color);
  color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.3), 0 -2px 15px var(--glow-color);
}

.footer h4 {
  color: white;
  margin-bottom: 1rem;
}

.footer .wrapper {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0;
}

.footer .wrapper::before,
.footer .wrapper::after {
  display: none;
}

.icon {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: brightness(0) invert(1);
}

.icon:hover {
  transform: translateY(-3px) scale(1.1);
  filter: brightness(0) invert(1) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.card:nth-child(1) {
  animation-delay: 0.1s;
}

.card:nth-child(2) {
  animation-delay: 0.2s;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-div {
    max-width: 100%;
    margin: 0.5rem auto;
    padding: 0 0.25rem;
  }
  
  .card {
    margin: 0.5rem;
    padding: 1.5rem;
  }
  
  .personal-information p {
    font-size: 0.875rem;
  }
  
  .personal-information img {
    width: 120px !important;
    height: 120px !important;
  }
  
  .row {
    flex-direction: column;
  }
  
  .wrapper {
    padding-left: 1.5rem;
  }
}

/* Print Styles */
@media print {
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #ffffff;
    --text-primary: #000000;
    --text-secondary: #333333;
    --border-color: #cccccc;
  }
  
  .header,
  .footer {
    display: none;
  }
  
  .card {
    box-shadow: none;
    border: 1px solid #ddd;
    page-break-inside: avoid;
    background: white;
  }
  
  #app {
    background: white;
  }
  
  .main-div {
    max-width: 100%;
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #000000 !important;
    text-shadow: none !important;
  }
  
  p, li {
    color: #333333 !important;
  }
}

/* Skills Section Enhancements */
.skills-section h6 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-weight: 600;
}

.skills-section h6:first-child {
  margin-top: 0;
}

/* Utility Classes */
.text-left {
  text-align: left;
}

.justify-text {
  text-align: justify;
  text-justify: inter-word;
}

.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.m-0 { margin: 0; }
.m-2 { margin: 0.5rem; }
.m-4 { margin: 1rem; }
.mb-2 { margin-bottom: 0.5rem; }
.p-0 { padding: 0; }
.pt-1 { padding-top: 0.25rem; }
</style>
