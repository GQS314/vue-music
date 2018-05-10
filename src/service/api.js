
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import { utils } from '../../static/js/utils'

const URL_GET_BAIDU_MUSIC = 'http://tingapi.ting.baidu.com/v1/restserver/ting/?';
const api = {
  getNewMusicList(context, parameter) {
    return new Promise((resolve, reject) => {
      context.$http.jsonp(URL_GET_BAIDU_MUSIC, {params: parameter})
        .then((response) => {
            resolve(response);
          }).catch((response) => {
            reject(response);
          });
    });
  }
}
export default api
