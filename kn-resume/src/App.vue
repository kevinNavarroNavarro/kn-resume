<template>
  <Resume :translations="currentTranslations" :theme="theme" @toggleTheme="toggleTheme" @toggleLanguage="toggleLanguage" :language="language" />
</template>

<script>
import Resume from "./components/Resume.vue";
import translations from "./locales/index.js";

export default {
  name: "App",
  components: {
    Resume,
  },
  data() {
    return {
      theme: localStorage.getItem('theme') || 'dark',
      language: localStorage.getItem('language') || 'en',
      translations
    };
  },
  computed: {
    currentTranslations() {
      return this.translations[this.language];
    }
  },
  mounted() {
    this.applyTheme();
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', this.theme);
      this.applyTheme();
    },
    toggleLanguage() {
      this.language = this.language === 'en' ? 'es' : 'en';
      localStorage.setItem('language', this.language);
    },
    applyTheme() {
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700&display=swap');

/* Dark Theme CSS Variables */
html[data-theme="dark"] {
  --primary-color: #22d3ee;
  --secondary-color: #3b82f6;
  --accent-color: #8b5cf6;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --text-light: #94a3b8;
  --bg-primary: #334155;
  --bg-secondary: #0f172a;
  --bg-accent: #1e293b;
  --border-color: #475569;
  --glow-color: rgba(34, 211, 238, 0.3);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
  --shadow-glow: 0 0 20px rgba(34, 211, 238, 0.2);
  --transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Light Theme CSS Variables */
html[data-theme="light"] {
  --primary-color: #0ea5e9;
  --secondary-color: #2563eb;
  --accent-color: #7c3aed;
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --text-light: #64748b;
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-accent: #f1f5f9;
  --border-color: #e2e8f0;
  --glow-color: rgba(14, 165, 233, 0.1);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-glow: 0 0 20px rgba(14, 165, 233, 0.1);
  --transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Global styles */
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Inter', sans-serif;
  color: var(--text-primary);
}

body {
  background: var(--bg-secondary);
}

html[data-theme="dark"] body {
  background-color: var(--bg-secondary);
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
}

html[data-theme="light"] body {
  background-color: var(--bg-secondary);
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 60%),
    radial-gradient(circle at 40% 40%, rgba(124, 58, 237, 0.03) 0%, transparent 70%);
}

#app {
  min-height: 100vh;
  background: transparent;
}
</style>
