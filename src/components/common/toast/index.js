import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  console.log('toast install')
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 2.new，根据组件构造器，创建一个组件对象
  const toast = new toastContrustor()
  // 3.将组件对象挂载到元素上
  toast.$mount(document.createElement('div'))
  // 4.toast.$el对应的是div
  document.body.appendChild(toast.$el)

  
  Vue.prototype.$toast = toast

}

export default obj