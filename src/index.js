import * as SampleUI from "./components";

// loop to register Vue.component - prepare to be used globally

// vue.component is similar to vue import components like :
/*
import AccordionItem from "./AccordionItem";

export default {
  name: "Accordion",
  components: {
    AccordionItem,
  },
*/
// but defining Vue.component in the parent level, will make it able to be used in components without need to re-import / define

const GlobalVue = {
  install(Vue) {
    Object.values(SampleUI).forEach((Component) => {
      Vue.component(Component.name, Component);
    });
  },
};

export default GlobalVue;
export * from "./components";
