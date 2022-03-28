import { debounce, observerDomResize } from '@/utils/index'
import { ref, onMounted, onBeforeUnmount, nextTick, Ref } from 'vue'

export default function(refDom: Ref<any>, onResize?: () => void, afterAutoResizeMixinInit?: () => void) {
  let dom = ref<any>()
  const width = ref<number>(0)
  const height = ref<number>(0)
  // eslint-disable-next-line no-empty-function
  let debounceInitWHFun:()=>void = () => {}
  let domObserver:any = null
  
  const autoResizeMixinInit = async() => {
    await initWH(false)
    getDebounceInitWHFun()
    bindDomResizeCallback()
    if (typeof afterAutoResizeMixinInit === 'function') {
      afterAutoResizeMixinInit()
    }
  }
  const initWH = (resize = true) => {
    return new Promise<void>(resolve => {
      nextTick(() => {
        dom = refDom
        width.value = dom.value ? dom.value.clientWidth : 0
        height.value = dom.value ? dom.value.clientHeight : 0
        if (!dom.value) {
          console.warn('DataV: Failed to get dom node, component rendering may be abnormal!')
        } else if (!width.value || !height.value) {
          console.warn('DataV: Component width or height is 0px, rendering abnormality may occur!')
        }

        if (typeof onResize === 'function' && resize) {
          onResize()
        }

        resolve()
      })
    })
  }
  const getDebounceInitWHFun = () => {
    debounceInitWHFun = debounce(100, initWH)
  }
  const bindDomResizeCallback = () => {
    domObserver = observerDomResize(dom.value, debounceInitWHFun)
    window.addEventListener('resize', debounceInitWHFun)
  }
  const unbindDomResizeCallback = () => {
    if (!domObserver) {
      return
    }

    domObserver.disconnect()
    domObserver.takeRecords()
    domObserver = null

    window.removeEventListener('resize', debounceInitWHFun)
  }

  onMounted(() => {
    autoResizeMixinInit()
  })
  onBeforeUnmount(() => {
    unbindDomResizeCallback()
  })
  return {
    dom,
    width,
    height,
    debounceInitWHFun,
    domObserver
  }
}