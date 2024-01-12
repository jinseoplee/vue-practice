import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import i18nPlugin from "./plugins/i18n";

const i18nStrings = {
  en: {
    hi: "Hello!",
  },
  ko: {
    hi: "안녕하세요!",
  },
};

createApp(App)
  .use(router)
  .use(i18nPlugin, i18nStrings)
  .mixin(mixins)
  .mount("#app");
