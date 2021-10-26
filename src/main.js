import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.config.productionTip = false

Vue.use( CKEditor );

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
