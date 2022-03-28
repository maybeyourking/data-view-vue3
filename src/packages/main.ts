/**
 * EXPORT COMPONENTS
 */
export { default as borderBox1 } from '@/components/BorderBox1/index.vue'
export { default as borderBox2 } from '@/components/BorderBox2/index.vue'
export { default as borderBox3 } from '@/components/BorderBox3/index.vue'
export { default as borderBox4 } from '@/components/BorderBox4/index.vue'


/**
 * IMPORT COMPONENTS
 */
import type { App } from 'vue'
import BorderBox1 from '@/components/BorderBox1/index.vue'
import BorderBox2 from '@/components/BorderBox2/index.vue'
import BorderBox3 from '@/components/BorderBox3/index.vue'
import BorderBox4 from '@/components/BorderBox4/index.vue'
const view = {
  install: (app: App<Element>) => {
    app.component('DvBorderBox1', BorderBox1)
    app.component('DvBorderBox2', BorderBox2)
    app.component('DvBorderBox3', BorderBox3)
    app.component('DvBorderBox4', BorderBox4)
  }
}
export default view