import HeaderBar from './HeaderBar';
import DButton from './DButton';
import Error from './error';
import Loading from './loading';
import Scroll from './scroll';
import Check from './check'
import changeConut from './changeConut'
export default {
    install (Vue){
        const Components = {
            HeaderBar,
            DButton,
            Scroll,
            Check,
            changeConut
        }
        for(let key in Components){
            Vue.component(key,Components[key])
        }
        Vue.prototype.$error = (msg) => {
            const ErrorClass = Vue.extend(Error);
            const ErrorComponents = new ErrorClass();
            ErrorComponents.$mount();
            document.body.appendChild(ErrorComponents.$el);
            ErrorComponents.show(msg)
        }
        const creatLoading = () => {
            const LoadingClass = Vue.extend(Loading)
            const LoadingComponent = new LoadingClass()
            LoadingComponent.$mount()
            document.body.appendChild(LoadingComponent.$el)
            return LoadingComponent
        }
        Vue.prototype.$loading = {
            loading: '',
            show () {
              if (!this.loading) {
                this.loading = creatLoading()
              }
              this.loading.show()
            },
            hide () {
              this.loading.hide()
            }
          }
    }
}