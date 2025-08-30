import { ref, computed, watch } from 'vue'

export function useTimer(defaultTime = '10:00') {
  const timeInput = ref(defaultTime)
  const running = ref(false)
  const totalSeconds = ref(600)
  const secondsLeft = ref(600)
  let interval = null

  function parseTime(str) {
    const [min, sec] = str.split(':').map(Number)
    return (isNaN(min) ? 0 : min) * 60 + (isNaN(sec) ? 0 : sec)
  }

  function formatTime(s) {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
  }

  function startTimer(onEnd) {
    totalSeconds.value = parseTime(timeInput.value)
    secondsLeft.value = totalSeconds.value
    if (secondsLeft.value <= 0) return
    running.value = true
    clearInterval(interval)
    interval = setInterval(() => {
      if (secondsLeft.value > 0) {
        secondsLeft.value--
      } else {
        running.value = false
        clearInterval(interval)
        if (onEnd) onEnd()
      }
    }, 1000)
  }

  function stopTimer() {
    running.value = false
    clearInterval(interval)
    secondsLeft.value = totalSeconds.value
  }

  const progress = computed(() =>
    totalSeconds.value > 0 ? secondsLeft.value / totalSeconds.value : 1
  )

  watch(timeInput, (val) => {
    if (!running.value) {
      totalSeconds.value = parseTime(val)
      secondsLeft.value = totalSeconds.value
    }
  })

  return {
    timeInput,
    running,
    totalSeconds,
    secondsLeft,
    progress,
    parseTime,
    formatTime,
    startTimer,
    stopTimer,
  }
}
