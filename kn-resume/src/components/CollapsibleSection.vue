<template>
  <section class="collapsible" :class="{ 'is-open': open }">
    <h2 class="collapsible-heading" :class="`variant-${variant}`">
      <button
        type="button"
        class="collapsible-toggle"
        :aria-expanded="open ? 'true' : 'false'"
        :aria-controls="bodyId"
        @click="open = !open"
      >
        <font-awesome-icon v-if="icon" :icon="icon" class="heading-icon" />
        <span class="heading-text">{{ title }}</span>
        <font-awesome-icon icon="chevron-down" class="chevron" aria-hidden="true" />
      </button>
    </h2>
    <div
      :id="bodyId"
      class="collapsible-body"
      :class="{ 'is-collapsed': !open }"
      :inert="!open || null"
    >
      <div class="collapsible-inner">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "CollapsibleSection",
  components: {
    FontAwesomeIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    // "compact" matches the left card headings, "large" the right card ones
    variant: {
      type: String,
      default: "compact",
      validator: (value) => ["compact", "large"].includes(value),
    },
    defaultOpen: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      open: this.defaultOpen,
    };
  },
  computed: {
    bodyId() {
      return `section-${this.id}-body`;
    },
  },
};
</script>

<style scoped>
.collapsible-heading {
  margin: 0;
}

.collapsible-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.25rem 0;
  border: none;
  background: none;
  color: var(--text-primary);
  font: inherit;
  letter-spacing: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
}

.collapsible-toggle:hover .heading-text {
  color: var(--primary-color);
}

.heading-text {
  flex: 1;
  transition: color 0.2s ease;
}

.heading-icon {
  color: var(--secondary-color);
  transition: color 0.3s ease;
}

:global(.card:hover) .heading-icon {
  color: var(--accent-color);
}

/* Left card: same type as the old compact section headings */
.variant-compact {
  font-family: "Inter", sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  font-weight: 600;
  line-height: 1.4;
}

.variant-compact .heading-icon {
  font-size: 1.25rem;
}

/* Right card: same type as the old large section titles */
.variant-large {
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.02em;
  text-shadow: 0 0 8px var(--glow-color);
}

.variant-large .heading-icon {
  font-size: 25px;
}

.chevron {
  font-size: 0.8em;
  color: var(--text-light);
  transition: transform 0.3s ease, color 0.2s ease;
}

.collapsible-toggle:hover .chevron {
  color: var(--primary-color);
}

.is-open .chevron {
  transform: rotate(180deg);
}

/* Height animation without measuring: the grid row goes from 1fr to 0fr */
.collapsible-body {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.3s ease, visibility 0.3s;
}

.collapsible-body.is-collapsed {
  grid-template-rows: 0fr;
  visibility: hidden;
}

/* The negative margin gives the timeline dots and their glow room before the clip */
.collapsible-inner {
  min-height: 0;
  overflow: hidden;
  padding: 0.75rem 1rem 0.25rem;
  margin: 0 -1rem;
  transition: padding 0.3s ease;
}

.is-collapsed .collapsible-inner {
  padding-top: 0;
  padding-bottom: 0;
}

/* Paper always shows everything, and the toggle affordance is meaningless */
@media print {
  .collapsible-body,
  .collapsible-body.is-collapsed {
    grid-template-rows: 1fr;
    visibility: visible;
    transition: none;
  }

  .collapsible-inner,
  .is-collapsed .collapsible-inner {
    overflow: visible;
    padding: 0.75rem 1rem 0.25rem;
  }

  .chevron {
    display: none;
  }

  .collapsible-toggle {
    color: #000000 !important;
    text-shadow: none !important;
  }

  .variant-large {
    text-shadow: none;
  }
}
</style>
