import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  // O caminho relativo da pasta de componentes
  "./components",
  // Se deve ou não olhar subpastas
  true,
  // Expressão regular para localizar nomes de componentes base
  /Base[A-Z]\w+\.(vue)$/
);

requireComponent.keys().forEach((fileName) => {
  // Pega a configuração do componente
  const componentConfig = requireComponent(fileName);

  // Obtém nome em PascalCase do componente
  const componentName = upperFirst(
    camelCase(
      // Obtém o nome do arquivo, independentemente da profundidade da pasta
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Registra o componente globalmente
  Vue.component(
    componentName,
    // Olha para as opções em `.default`, existentes
    // se o componente foi exportado com `export default`,
    // caso contrário usa o módulo raiz.
    componentConfig.default || componentConfig
  );
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
