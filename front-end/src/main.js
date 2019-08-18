import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';
import VueSocketIO from 'vue-socket.io';
import socketIO from 'socket.io-client'

Vue.use(new VueSocketIO({
    debug: true,
    connection: socketIO('http://localhost:3000'), //options object is Optional
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
