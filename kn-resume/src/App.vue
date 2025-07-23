<template>
  <Resume />
</template>

<script>
import Resume from "./components/Resume.vue";

export default {
  name: "App",
  components: {
    Resume,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700&display=swap');

/* Global Dark Theme CSS Variables */
:root {
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

/* Global Dark Background */
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: var(--bg-secondary);
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
  font-family: 'Inter', sans-serif;
  color: var(--text-primary);
}

#app {
  min-height: 100vh;
  background: transparent;
}
</style>
