import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    
    projectId: "nv83pd",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseURL: 'http://localhost:4200',
    experimentalRunAllSpecs : true,
    experimentalStudio:true,
    experimentalWebKitSupport:true,

  },
});
