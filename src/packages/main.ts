/**
 * EXPORT COMPONENTS
 */
export { default as borderBox1 } from '@/components/BorderBox1/index.vue'
export { default as borderBox2 } from '@/components/BorderBox2/index.vue'
export { default as borderBox3 } from '@/components/BorderBox3/index.vue'
export { default as borderBox4 } from '@/components/BorderBox4/index.vue'
export { default as borderBox5 } from '@/components/BorderBox5/index.vue'
export { default as borderBox6 } from '@/components/BorderBox6/index.vue'


/**
 * IMPORT COMPONENTS
 */
import type { App } from 'vue'
import BorderBox1 from '@/components/BorderBox1/index.vue'
import BorderBox2 from '@/components/BorderBox2/index.vue'
import BorderBox3 from '@/components/BorderBox3/index.vue'
import BorderBox4 from '@/components/BorderBox4/index.vue'
import BorderBox5 from '@/components/BorderBox5/index.vue'
import BorderBox6 from '@/components/BorderBox6/index.vue'
const view = {
  install: (app: App<Element>) => {
    app.component('DvBorderBox1', BorderBox1)
    app.component('DvBorderBox2', BorderBox2)
    app.component('DvBorderBox3', BorderBox3)
    app.component('DvBorderBox4', BorderBox4)
    app.component('DvBorderBox5', BorderBox5)
    app.component('DvBorderBox6', BorderBox6)
  }
}
export default view