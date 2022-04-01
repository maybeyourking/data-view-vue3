<template>
  <div
    ref="refDom"
    class="dv-border-box-2"
  >
    <svg
      class="dv-border-svg-container"
      :width="width"
      :height="height"
    >
      <polygon
        :fill="backgroundColor"
        :points="`
        7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}
      `"
      />

      <polyline
        :stroke="mergedColor[0]"
        :points="`2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${height - 2} 2, 2`"
      />
      <polyline
        :stroke="mergedColor[1]"
        :points="`6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${height - 6} 6, 6`"
      />
      <circle
        :fill="mergedColor[0]"
        cx="11"
        cy="11"
        r="1"
      />
      <circle
        :fill="mergedColor[0]"
        :cx="width - 11"
        cy="11"
        r="1"
      />
      <circle
        :fill="mergedColor[0]"
        :cx="width - 11"
        :cy="height - 11"
        r="1"
      />
      <circle
        :fill="mergedColor[0]"
        cx="11"
        :cy="height - 11"
        r="1"
      />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, toRef, reactive, watch, onMounted } from 'vue'
  import { deepMerge, deepClone } from '@/utils'
  import useAutoResize from '@/mixins/useAutoResize'

  const props = withDefaults(defineProps<{
    color?: string[]
    backgroundColor?: string
  }>(), {
    color: () => [],
    backgroundColor: 'transparent'
  })

  const refDom = ref()
  const defaultColor = reactive<string[]>(['#fff', 'rgba(255,255,255,.6)'])
  const mergedColor = ref<any>([])

  const { width, height } = useAutoResize(refDom)

  watch(toRef(props, 'color'), (newV) => {
    mergeColor()
  })
  const mergeColor = () => {
    mergedColor.value = deepMerge(deepClone(defaultColor, true), props.color || [])
  }

  onMounted(() => {
    mergeColor()
  })
</script>
<style lang="scss" scoped>
.dv-border-box-2 {
  position: relative;
  width: 100%;
  height: 100%;

  .dv-border-svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;

    & > polyline {
      fill: none;
      stroke-width: 1;
    }
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>