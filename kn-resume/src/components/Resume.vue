<template>
  <div class="resume-container">
    <header class="header">
      <div class="header-content">
        <span class="header-title">{{ translations.resume }}</span>
        <div class="header-buttons">
          <a
            :href="contact.resumePdf"
            target="_blank"
            rel="noopener noreferrer"
            class="pdf-link"
            :aria-label="translations.downloadResumeAria"
          >
            <font-awesome-icon icon="file-pdf" class="pdf-icon" />
            <span class="pdf-label">{{ translations.downloadResume }}</span>
          </a>
          <button
            type="button"
            @click="toggleLanguage"
            class="toggle-btn language-toggle"
            :title="translations.switchLanguage"
            :aria-label="translations.switchLanguage"
            :lang="language === 'en' ? 'es' : 'en'"
          >
            {{ language === 'en' ? 'ES' : 'EN' }}
          </button>
          <button
            type="button"
            @click="toggleTheme"
            class="toggle-btn theme-toggle"
            :title="themeToggleLabel"
            :aria-label="themeToggleLabel"
          >
            <font-awesome-icon :icon="theme === 'dark' ? 'sun' : 'moon'" />
          </button>
        </div>
      </div>
    </header>

    <main class="main-div">
      <div class="row">
        <div class="col-md-5 card">
          <div class="mt-2">
            <section class="mt-1 personal-information">
              <img
                src="/profile.jpeg"
                :alt="contact.name"
                class="profile-photo"
                width="150"
                height="150"
              />
              <h1 class="mt-2">{{ contact.name }}</h1>
              <p class="mb-3 headline">
                <font-awesome-icon icon="briefcase" class="text-teal" />
                {{ translations.headline }}
              </p>
              <p>
                <font-awesome-icon icon="envelope" class="text-teal" />
                <a :href="`mailto:${contact.email}`" class="contact-link">{{ contact.email }}</a>
              </p>
              <p>
                <font-awesome-icon icon="phone" class="text-teal" />
                <a :href="contact.phoneHref" class="contact-link">{{ contact.phone }}</a>
              </p>
              <p>
                <font-awesome-icon icon="globe" class="text-teal" />
                <a
                  :href="contact.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-link"
                  >{{ translations.linkedinProfile }}</a
                >
              </p>
            </section>

            <hr />
            <collapsible-section id="profile" :title="translations.profile" icon="book">
              <p class="justify-text m-4 mt-0">
                {{ translations.profileText }}
              </p>
            </collapsible-section>
            <hr />

            <collapsible-section
              id="technical-skills"
              :title="translations.technicalSkills"
              icon="clipboard-check"
            >
              <div class="skills-section">
                <template v-for="group in skillGroups" :key="group.labelKey">
                  <h3 class="skill-group-title">{{ translations[group.labelKey] }}:</h3>
                  <ul class="two-col m-2 mb-3">
                    <li v-for="item in group.items" :key="item">{{ item }}</li>
                  </ul>
                </template>
              </div>
            </collapsible-section>
            <hr />

            <collapsible-section id="soft-skills" :title="translations.softSkills" icon="circle-plus">
              <ul class="two-col m-2">
                <li v-for="skill in translations.softSkillsList" :key="skill">{{ skill }}</li>
              </ul>
            </collapsible-section>
            <hr />

            <collapsible-section id="languages" :title="translations.languages" icon="globe">
              <ul class="two-col m-2 mb-3">
                <li v-for="lang in translations.spokenLanguages" :key="lang.name">
                  {{ lang.name }}: {{ lang.level }}
                </li>
              </ul>
            </collapsible-section>
          </div>
        </div>

        <div class="col-md-6 card">
          <collapsible-section
            id="experience"
            :title="translations.workExperience"
            icon="suitcase"
            variant="large"
          >
            <ol class="timeline">
              <li
                v-for="job in translations.experience"
                :key="job.company"
                class="timeline-company"
                :class="{ 'is-grouped': job.roles.length > 1 }"
              >
                <h3 class="company-name">
                  {{ job.company
                  }}<span v-if="job.location" class="company-location"> · {{ job.location }}</span>
                </h3>
                <ol class="timeline-roles">
                  <li
                    v-for="role in job.roles"
                    :key="role.title + role.start"
                    class="timeline-role"
                  >
                    <h4 class="role-title">{{ role.title }}</h4>
                    <p class="role-dates">
                      <font-awesome-icon icon="calendar" class="text-teal date-icon" />
                      {{ role.start }} –
                      <span v-if="role.current" class="tag">{{ translations.current }}</span>
                      <template v-else>{{ role.end }}</template>
                    </p>
                    <ul class="justify-text m-2 mt-1">
                      <li v-for="(bullet, index) in role.bullets" :key="index">
                        {{ bullet }}
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ol>
          </collapsible-section>

          <hr />
          <collapsible-section
            id="education"
            :title="translations.education"
            icon="graduation-cap"
            variant="large"
          >
            <div v-for="edu in translations.educationList" :key="edu.degree" class="entry">
              <h3 class="wrapper entry-title">
                <b>{{ edu.degree }} - </b>
                <font-awesome-icon icon="calendar" class="text-teal date-icon" />
                {{ edu.dates }}
              </h3>
              <p>{{ edu.school }}</p>
            </div>
          </collapsible-section>

          <hr />
          <collapsible-section
            id="certificates"
            :title="translations.certificates"
            icon="certificate"
            variant="large"
          >
            <div v-for="cert in translations.certificateList" :key="cert.name" class="entry">
              <h3 class="wrapper entry-title">
                <a
                  v-if="cert.url"
                  :href="cert.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="plain-link"
                  :aria-label="`${cert.name} (${translations.verifyCredential})`"
                  ><b>{{ cert.name }}</b></a
                >
                <b v-else>{{ cert.name }}</b>
                <template v-if="cert.date">
                  <b> - </b>
                  <font-awesome-icon icon="calendar" class="text-teal date-icon" />
                  {{ translations.issued }} {{ cert.date }}
                </template>
              </h3>
              <p>
                {{ cert.issuer
                }}<template v-if="cert.credentialId">
                  | {{ translations.credentialId }} {{ cert.credentialId }}</template
                >
              </p>
            </div>
          </collapsible-section>

          <hr />
          <collapsible-section
            id="projects"
            :title="translations.personalProjects"
            icon="code"
            variant="large"
            :default-open="false"
          >
            <div v-for="project in translations.projects" :key="project.name" class="entry">
              <h3 class="wrapper entry-title">
                <b>{{ project.name }} - </b>
                <font-awesome-icon icon="calendar" class="text-teal date-icon" />
                {{ project.year }}
              </h3>
              <p class="m-0">
                <strong class="job-subtitle">{{ translations.techStack }}:</strong>
                {{ project.stack.join(' · ') }}
              </p>
              <ul class="justify-text m-2 mt-2">
                <li v-for="(bullet, index) in project.bullets" :key="index">
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </collapsible-section>
        </div>
      </div>
    </main>

    <footer class="footer">
      <h2 class="footer-title pt-1">{{ translations.findMeOn }}</h2>
      <div class="wrapper">
        <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer"
          ><img src="../assets/linkedIn.png" alt="LinkedIn" class="icon" width="40" height="40"
        /></a>
        <a :href="contact.github" target="_blank" rel="noopener noreferrer"
          ><img src="../assets/github.png" alt="GitHub" class="icon" width="40" height="40"
        /></a>
      </div>
    </footer>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faPhone,
  faBook,
  faClipboardCheck,
  faCirclePlus,
  faGlobe,
  faCalendar,
  faSuitcase,
  faGraduationCap,
  faCertificate,
  faChevronDown,
  faCode,
  faFilePdf,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { contact, skillGroups } from "../data/profile.js";
import CollapsibleSection from "./CollapsibleSection.vue";

library.add(
  faBriefcase,
  faEnvelope,
  faPhone,
  faBook,
  faClipboardCheck,
  faCirclePlus,
  faGlobe,
  faSuitcase,
  faCalendar,
  faGraduationCap,
  faCertificate,
  faChevronDown,
  faCode,
  faFilePdf,
  faSun,
  faMoon
);

export default {
  name: "kn-resume",
  components: {
    FontAwesomeIcon,
    CollapsibleSection,
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
  emits: ["toggleTheme", "toggleLanguage"],
  data() {
    return {
      contact,
      skillGroups
    };
  },
  computed: {
    themeToggleLabel() {
      return this.theme === "dark"
        ? this.translations.switchToLight
        : this.translations.switchToDark;
    }
  },
  methods: {
    toggleTheme() {
      this.$emit("toggleTheme");
    },
    toggleLanguage() {
      this.$emit("toggleLanguage");
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
h6,
h2.footer-title {
  font-family: "Inter", sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 0.5rem;
  letter-spacing: normal;
  text-shadow: none;
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

ul,
ol {
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

/* Section heading styles live in CollapsibleSection.vue */
.date-icon {
  font-size: 85%;
}

.contact-link,
.plain-link {
  color: inherit;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.plain-link:hover b {
  color: var(--primary-color);
}

.two-col {
  columns: 2;
  column-gap: 1rem;
}

.two-col li {
  break-inside: avoid;
}

/* Header */
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

.header-title {
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.875rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  letter-spacing: -0.025em;
  text-shadow: 0 0 10px var(--glow-color);
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
  min-height: 40px;
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

.pdf-icon {
  font-size: 1.5rem;
  color: #ef4444;
  transition: transform 0.3s ease;
}

.header a.pdf-link:hover .pdf-icon {
  transform: scale(1.1);
}

.pdf-label {
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

/* Bootstrap's negative row gutters were 4px wider than the padding, causing a sideways scroll */
.main-div > .row {
  margin-left: 0;
  margin-right: 0;
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

/* Profile block */
.personal-information {
  text-align: center;
  padding: 1rem 0;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid var(--primary-color);
  box-shadow: 0 0 20px var(--glow-color), 0 4px 15px rgba(0, 0, 0, 0.3);
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

.personal-information p.headline {
  font-size: 1.125rem;
  color: var(--secondary-color);
  font-weight: 500;
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
  padding: 0.125rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
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

/* Education / certificate / project entries */
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

.entry + .entry .entry-title {
  margin-top: 1rem;
}

/* Experience timeline */
.timeline-company {
  position: relative;
  padding-left: 2rem;
  padding-bottom: 0.75rem;
  margin-bottom: 0.5rem;
}

.timeline-company::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.75rem;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--secondary-color), transparent);
}

.timeline-company::after {
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

.company-name {
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.3rem);
  margin-bottom: 0.5rem;
}

.company-location {
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  font-style: italic;
  color: var(--text-light);
}

.timeline-role {
  position: relative;
  margin-bottom: 0.75rem;
}

/* Hollow sub-dots when several roles share one company */
.is-grouped .timeline-role::before {
  content: "";
  position: absolute;
  left: calc(-2rem - 4px);
  top: 0.45rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--secondary-color);
  background: var(--bg-primary);
}

.role-title {
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  margin-bottom: 0.15rem;
}

.role-dates {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 0.25rem;
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

.footer .footer-title {
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

.footer a {
  border-radius: 6px;
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

  /* Keep the stacked cards inside the viewport (no horizontal scroll) */
  .main-div > .row {
    margin-left: 0;
    margin-right: 0;
  }

  .card {
    width: auto;
    margin: 0.5rem;
    padding: 1.5rem;
  }

  .personal-information p {
    font-size: 0.875rem;
  }

  .profile-photo {
    width: 120px;
    height: 120px;
  }

  /* Justified text leaves large gaps in narrow columns */
  .justify-text {
    text-align: left;
  }

  .row {
    flex-direction: column;
  }

  .wrapper,
  .timeline-company {
    padding-left: 1.5rem;
  }

  .is-grouped .timeline-role::before {
    left: calc(-1.5rem - 4px);
  }
}

@media (max-width: 576px) {
  .header {
    padding: 1rem 0;
  }

  .header-content {
    padding: 0 1rem;
  }

  .header-title {
    font-size: clamp(1.25rem, 6vw, 1.5rem);
  }

  .header-buttons {
    gap: 0.5rem;
    flex-shrink: 0;
  }

  /* Icon-only download button on phones; the link keeps its aria-label */
  .pdf-label {
    display: none;
  }

  .header a.pdf-link {
    padding: 0.5rem 0.75rem;
  }
}

/* Respect users who ask for less motion */
@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
  }

  .card:hover,
  .toggle-btn:hover,
  .header a.pdf-link:hover,
  .header a.pdf-link:hover .pdf-icon,
  .icon:hover,
  .tag:hover {
    transform: none;
  }

  .card::before {
    transition: none;
  }
}

@media print {
  .header,
  .footer {
    display: none;
  }

  .main-div {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  /* Stack the two cards full width on paper */
  .main-div > .row {
    display: block;
  }

  .card {
    width: 100%;
    max-width: 100%;
    margin: 0 0 1rem;
    /* Side padding keeps the timeline dots from being clipped at the page edge */
    padding: 1rem 0.75rem;
    box-shadow: none;
    border: none;
    border-radius: 0;
    background: white;
    backdrop-filter: none;
    animation: none;
    overflow: visible;
  }

  .card::before {
    display: none;
  }

  .profile-photo {
    width: 100px;
    height: 100px;
    box-shadow: none;
  }

  .personal-information h1 {
    background: none;
    -webkit-text-fill-color: #000000;
    filter: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b,
  .header-title {
    color: #000000 !important;
    text-shadow: none !important;
  }

  p,
  li,
  .company-location,
  .role-dates {
    color: #333333 !important;
  }

  hr {
    box-shadow: none;
    background: #cccccc;
  }

  .tag {
    background: none;
    color: #000000;
    border: 1px solid #999999;
    box-shadow: none;
  }

  .timeline-role,
  .entry {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  h2,
  h3,
  h4 {
    break-after: avoid;
    page-break-after: avoid;
  }
}

.skills-section .skill-group-title {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1rem;
}

.skills-section .skill-group-title:first-child {
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
.mb-3 {
  margin-bottom: 1rem;
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
  gap: 0.75rem;
  padding: 0 1.5rem;
  max-width: 100%;
}

.header-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
