import { ref, onMounted, onUnmounted } from 'vue'

export function useResponsiveRadius() {
  const svgSize = ref(300)
  const radius = ref(100)

  function updateRadius() {
    const h = window.innerWidth
    svgSize.value = Math.floor(h * 0.6)
    radius.value = Math.floor(svgSize.value / 2)
  }

  onMounted(() => {
    updateRadius()
    window.addEventListener('resize', updateRadius)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', updateRadius)
  })

  return { svgSize, radius }
}
