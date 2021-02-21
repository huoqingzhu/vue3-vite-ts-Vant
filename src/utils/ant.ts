import {Button} from 'vant'
const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
  }) {
    Vue.component(Button.name, Button);
   
  }
};
export default ant;
