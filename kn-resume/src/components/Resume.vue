<template>
  <div class="resume-container">
    <div class="header">
      <div class="header-content">
        <h1 class="text-left mb-0">{{ translations.resume }}</h1>
        <div class="header-buttons">
          <a
            href="https://drive.google.com/file/d/12sYeuhqiGnMUlOkr7cALRJZs8Qnsgr8N/view?usp=sharing"
            target="_blank"
            class="pdf-link"
            :title="translations.downloadResume"
            ><img
              src="../assets/pdf.png"
              alt="PDF Icon"
              style="width: 30px; height: auto"
          /></a>
          <button @click="toggleLanguage" class="toggle-btn language-toggle" :title="language === 'en' ? 'Cambiar a Español' : 'Switch to English'">
            {{ language === 'en' ? 'ES' : 'EN' }}
          </button>
          <button @click="toggleTheme" class="toggle-btn theme-toggle" :title="theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <font-awesome-icon :icon="theme === 'dark' ? 'sun' : 'moon'" />
          </button>
        </div>
      </div>
    </div>
    <div class="main-div">
      <div class="row">
        <div class="col-md-5 card">
          <div class="mt-2">
            <div>
              <div class="mt-1 personal-information">
                <img
                  src="/profile.jpeg"
                  alt="Kevin Navarro"
                  style="
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-bottom: 1rem;
                    border: 4px solid var(--primary-color);
                    box-shadow: 0 0 20px var(--glow-color),
                      0 4px 15px rgba(0, 0, 0, 0.3);
                  "
                />
                <h1 class="mt-2">Kevin Navarro</h1>
                <p
                  class="mb-3"
                  style="
                    font-size: 1.125rem;
                    color: var(--secondary-color);
                    font-weight: 500;
                  "
                >
                  <font-awesome-icon icon="briefcase" class="text-teal" />
                  Software Engineer
                </p>
                <p>
                  <font-awesome-icon icon="envelope" class="text-teal" />
                  <a
                    href="mailto:ken314588@gmail.com"
                    style="color: inherit; text-decoration: none"
                    >ken314588@gmail.com</a
                  >
                </p>
                <p>
                  <font-awesome-icon icon="phone" class="text-teal" />
                  <a
                    href="tel:+50685970967"
                    style="color: inherit; text-decoration: none"
                    >+506 8597-0967</a
                  >
                </p>
                <p>
                  <font-awesome-icon icon="globe" class="text-teal" />
                  <a
                    href="https://linkedin.com/in/knavarronavarro"
                    target="_blank"
                    style="color: inherit; text-decoration: none"
                    >LinkedIn Profile</a
                  >
                </p>
              </div>

              <hr />
              <h3
                class="mb-3"
                style="display: flex; align-items: center; gap: 0.5rem"
              >
                <font-awesome-icon
                  icon="book"
                  class="text-teal"
                  style="font-size: 1.25rem"
                />
                <span>{{ translations.profile }}</span>
              </h3>
              <p class="justify-text m-4 mt-2">
                {{ translations.profileText }}
              </p>
              <hr />

              <h3
                class="mb-3"
                style="display: flex; align-items: center; gap: 0.5rem"
              >
                <font-awesome-icon
                  icon="clipboard-check"
                  class="text-teal"
                  style="font-size: 1.25rem"
                />
                <span>{{ translations.technicalSkills }}</span>
              </h3>
              <div class="skills-section">
                <h6><strong>{{ translations.programmingLanguages }}:</strong></h6>
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

                <h6><strong>{{ translations.frameworksLibraries }}:</strong></h6>
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

                <h6><strong>{{ translations.databases }}:</strong></h6>
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

                <h6><strong>{{ translations.toolsPlatforms }}:</strong></h6>
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

              <h3
                class="mb-3"
                style="display: flex; align-items: center; gap: 0.5rem"
              >
                <font-awesome-icon
                  icon="circle-plus"
                  class="text-teal"
                  style="font-size: 1.25rem"
                />
                <span>{{ translations.softSkills }}</span>
              </h3>
              <ul class="justify-text m-2">
                <div class="row">
                  <div class="col-md-6">
                    <li>{{ translations.communication }}</li>
                    <li>{{ translations.problemSolving }}</li>
                    <li>{{ translations.selfLearning }}</li>
                  </div>
                  <div class="col-md-6">
                    <li>{{ translations.leadership }}</li>
                    <li>{{ translations.teamwork }}</li>
                  </div>
                </div>
              </ul>
              <hr />

              <h3
                class="mb-3"
                style="display: flex; align-items: center; gap: 0.5rem"
              >
                <font-awesome-icon
                  icon="globe"
                  class="text-teal"
                  style="font-size: 1.25rem"
                />
                <span>{{ translations.languages }}</span>
              </h3>
              <ul class="justify-text m-2">
                <div class="row">
                  <div class="col-md-6">
                    <li>{{ translations.spanish }}: {{ translations.native }}</li>
                  </div>
                  <div class="col-md-6">
                    <li>{{ translations.english }}: B2</li>
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
                <b>Software Engineer - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                Jul 2022 -
                <span class="tag teal">Current</span>
              </h5>
              <p class="job-subtitle">Nearlinx - {{ translations.remote }}</p>
              <ul class="justify-text m-2 mt-1">
                <li v-for="(desc, index) in translations.jobDesc1" :key="index">
                  {{ desc }}
                </li>
              </ul>
            </div>
            <div>
              <h5 class="wrapper mt-4">
                <b>Software Developer - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                Nov 2021 - Mar 2023
              </h5>
              <p class="job-subtitle">Nearlinx - {{ translations.remote }}</p>
              <ul class="justify-text m-2 mt-2">
                <li v-for="(desc, index) in translations.jobDesc2" :key="index">
                  {{ desc }}
                </li>
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
              {{ translations.education }}
            </h2>
            <div>
              <h5 class="wrapper">
                <b>{{ translations.bachelorDegree }} - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                2018 - 2022
              </h5>
              <p>{{ translations.universityOfCostaRica }}</p>
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
              {{ translations.certificates }}
            </h2>
            <div>
              <h5 class="wrapper">
                <a
                  href="https://www.scrumstudy.com/certification/verify?type=SFC&number=846528"
                  target="_blank"
                  style="color: inherit; text-decoration: none"
                >
                  <b>Scrum Fundamentals Certified (SFC) - </b>
                </a>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                {{ translations.issued }} May, 2021
              </h5>
              <p>
                SCRUMstudy - Accreditation Body for Scrum and Agile | Credential
                ID 846528
              </p>
            </div>
            <div>
              <h5 class="wrapper mt-2">
                <b>{{ translations.personalProductivity }} - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                {{ translations.issued }} Dec, 2020
              </h5>
              <p>Google Actívate | {{ translations.credentialId }} 882 T3J MV4</p>
            </div>
            <div>
              <h5 class="wrapper mt-2">
                <b>{{ translations.developingMobileApps }} - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                {{ translations.issued }} Jul, 2020
              </h5>
              <p>Google Actívate | {{ translations.credentialId }} 2RR 2YX VKB</p>
            </div>
            <div>
              <h5 class="wrapper mt-2">
                <b>IT Essentials: PC Hardware and Software</b>
              </h5>
              <p>Cisco Networking Academy | Credential ID EMCI-158-2015</p>
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
              {{ translations.personalProjects }}
            </h2>
            <div>
              <h5 class="wrapper">
                <b>{{ translations.weddingManagerApp }} - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                2025
              </h5>
              <p class="m-0">
                <strong class="job-subtitle">{{ translations.techStack }}:</strong> Java Spring Boot · React · MongoDB
                · DigitalOcean · GitFlow · CI/CD
              </p>
              <ul class="justify-text m-2 mt-2">
                <li v-for="(desc, index) in translations.projectDesc" :key="index">
                  {{ desc }}
                </li>
              </ul>
            </div>
            <div>
              <h5 class="wrapper mt-4">
                <b>{{ translations.crazyLazySlothGenerator }} - </b>
                <font-awesome-icon
                  icon="calendar"
                  class="text-teal"
                  style="font-size: 85%"
                />
                2021
              </h5>
              <p class="m-0">
                <strong class="job-subtitle">{{ translations.techStack }}:</strong> Python · Custom Algorithm · OpenSea
              </p>
              <ul class="justify-text m-2 mt-2">
                <li v-for="(desc, index) in translations.nftProjectDesc" :key="index">
                  {{ desc }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <h4 class="pt-1">{{ translations.findMeOn }}</h4>
      <div class="wrapper">
        <a href="https://www.linkedin.com/in/knavarronavarro" target="_blank"
          ><img src="../assets/linkedIn.png" alt="LinkedIn Icon" class="icon"
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
  faSun,
  faMoon,
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
  faCode,
  faSun,
  faMoon
);

export default {
  name: "kn-resume",
  components: {
    FontAwesomeIcon,
  },
  props: {
    translations: {
      type: Object,
      required: true
    },
    theme: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    toggleTheme() {
      this.$emit('toggleTheme');
    },
    toggleLanguage() {
      this.$emit('toggleLanguage');
    }
  },
};
</script>

<style scoped>

h1 {
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.875rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 0.5rem;
  letter-spacing: -0.025em;
  text-shadow: 0 0 10px var(--glow-color);
}

h2 {
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-shadow: 0 0 8px var(--glow-color);
}

h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
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
  font-family: "Inter", sans-serif;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

li {
  font-family: "Inter", sans-serif;
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

.header {
  background: linear-gradient(
    135deg,
    var(--bg-accent) 0%,
    var(--bg-primary) 50%,
    var(--bg-accent) 100%
  );
  border-bottom: 2px solid var(--primary-color);
  color: var(--text-primary);
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-lg), 0 2px 15px var(--glow-color);
  backdrop-filter: blur(15px);
  transition: all 0.15s ease;
}

.header h1 {
  color: var(--text-primary);
  margin-bottom: 0;
}

.header a.pdf-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
}

[data-theme="light"] .header a.pdf-link {
  background: rgba(0, 0, 0, 0.05);
}

.header a.pdf-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

[data-theme="light"] .header a.pdf-link:hover {
  background: rgba(0, 0, 0, 0.1);
}

.header a.pdf-link img {
  transition: transform 0.3s ease;
}

.header a.pdf-link:hover img {
  transform: scale(1.1);
}

.header a.pdf-link::after {
  content: attr(title);
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 0.9;
}

.toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 44px;
  height: 40px;
}

[data-theme="light"] .toggle-btn {
  border: 2px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.05);
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

[data-theme="light"] .toggle-btn:hover {
  background: rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.2);
}

.language-toggle {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.05em;
}

.theme-toggle {
  width: 44px;
  padding: 0.5rem;
}

.gap-3 {
  gap: 1rem;
}

[data-theme="light"] .header {
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    var(--bg-accent) 50%,
    var(--bg-primary) 100%
  );
  box-shadow: var(--shadow-md);
}

[data-theme="light"] .footer {
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    var(--bg-accent) 50%,
    var(--bg-primary) 100%
  );
  box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, 0.1);
}

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

.card {
  background: var(--bg-primary);
  background-image: linear-gradient(
    145deg,
    rgba(34, 211, 238, 0.03),
    rgba(139, 92, 246, 0.03)
  );
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  margin: 0.75rem;
  box-shadow: var(--shadow-md), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0s ease;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--primary-color),
    var(--secondary-color),
    var(--accent-color)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px var(--primary-color);
}

.card:hover {
  box-shadow: var(--shadow-xl), var(--shadow-glow),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  border-color: var(--primary-color);
}

.card:hover::before {
  transform: scaleX(1);
}

.personal-information {
  text-align: center;
  padding: 1rem 0;
}

.personal-information h1 {
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color),
    var(--accent-color)
  );
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

hr {
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-color),
    transparent
  );
  margin: 1.5rem 0;
  opacity: 0.6;
  box-shadow: 0 0 4px var(--primary-color);
}

.text-teal {
  color: var(--secondary-color);
  transition: color 0.3s ease;
}

.card:hover .text-teal {
  color: var(--accent-color);
}

.tag {
  background: linear-gradient(
    135deg,
    var(--secondary-color),
    var(--accent-color)
  );
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
  box-shadow: 0 0 0 4px var(--bg-primary), 0 0 0 6px var(--secondary-color),
    0 0 10px var(--secondary-color);
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.col-md-6 {
  flex: 1;
  min-width: 150px;
}

.footer {
  margin-top: auto;
  background: linear-gradient(
    135deg,
    var(--bg-accent) 0%,
    var(--bg-primary) 50%,
    var(--bg-accent) 100%
  );
  border-top: 2px solid var(--primary-color);
  color: var(--text-primary);
  padding: 2rem;
  text-align: center;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.3), 0 -2px 15px var(--glow-color);
  transition: all 0.15s ease;
}

.footer h4 {
  color: var(--text-primary);
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

[data-theme="light"] .icon {
  filter: none;
}

.icon:hover {
  transform: translateY(-3px) scale(1.1);
  filter: brightness(0) invert(1) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

[data-theme="light"] .icon:hover {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000 !important;
    text-shadow: none !important;
  }

  p,
  li {
    color: #333333 !important;
  }
}

.skills-section h6 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-weight: 600;
}

.skills-section h6:first-child {
  margin-top: 0;
}

.text-left {
  text-align: left;
}

.justify-text {
  text-align: justify;
  text-justify: inter-word;
}

.mt-1 {
  margin-top: 0.25rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-5 {
  margin-top: 1.25rem;
}
.m-0 {
  margin: 0;
}
.m-2 {
  margin: 0.5rem;
}
.m-4 {
  margin: 1rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.p-0 {
  padding: 0;
}
.pt-1 {
  padding-top: 0.25rem;
}

.job-subtitle {
  margin: 0;
  margin-top: -0.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  font-size: 0.9rem;
  color: var(--text-light);
  font-style: italic;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  max-width: 100%;
}

.header-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
