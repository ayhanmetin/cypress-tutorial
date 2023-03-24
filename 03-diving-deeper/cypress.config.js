import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        seedDatabase() {
          // eg., edit a file here
        }
      })
    },
  },
});
