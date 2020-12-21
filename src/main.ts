import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Icon from '@/components/Icon.vue';
import Layout from '@/components/Layout.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Icon', Icon);
Vue.component('Layout', Layout)

window.recordList = recordListModel.fetch()
window.createRecord = (record: RecordItem) => {
  recordListModel.create(record)
}

window.tagList = tagListModel.fetch()
window.findTag = (id: string) => {
  return window.tagList.filter(t => t.id === id)[0];
}
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    window.alert('你丫重复了');
  } else if (message === 'success') {
    window.alert('添加成功');
  }
}
window.removeTag = (id: string) => {
  return tagListModel.remove(id);
}
window.updateTag = (id: string, name: string) => {
  return tagListModel.update(id, name)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
