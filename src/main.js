// imports createApp method from vue
import { createApp } from "vue";
// imports the main app from the root component ./App.vue
import App from "./App.vue";

// creates the App and mounts to the div with id=app in /public/index.html
createApp(App).mount("#app");
