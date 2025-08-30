<script setup>
import { computed } from 'vue'
import { useTimer } from '@/composables/useTimer'
import { useBeep } from '@/composables/useBeep'
import { useResponsiveRadius } from '@/composables/useResponsiveRadius'

const { timeInput, running, secondsLeft, progress, parseTime, formatTime, startTimer, stopTimer } = useTimer()
const { playBeep } = useBeep()
const { svgSize, radius } = useResponsiveRadius()

const svgCenter = computed(() => svgSize.value / 2)
const fontSize = computed(() => svgSize.value * 0.18) // Dynamisch, ca. 18% der SVG-Größe
const circumference = computed(() => 2 * Math.PI * radius.value)
const dashoffset = computed(() => circumference.value * (1 - progress.value))

function startTimerWithBeep() {
  startTimer(playBeep)
}
</script>

<template>
  <div class="v-box">
    <svg :viewBox="`0 0 ${svgSize} ${svgSize}`" :width="svgSize" :height="svgSize">
      <circle class="circle-bg" :cx="svgCenter" :cy="svgCenter" :r="radius"/>
      <circle class="circle-progress" :cx="svgCenter" :cy="svgCenter" :r="radius"
        :stroke-dasharray="circumference" :stroke-dashoffset="dashoffset" />
      <text :x="svgCenter" :y="svgCenter + svgSize*0.05" text-anchor="middle" alignment-baseline="middle"
        class="svg-time-text" :font-size="fontSize">
        {{ formatTime(secondsLeft) }}
      </text>
    </svg>
    <div class="btn-row">
      <label for="timeInput" class="svg-time-label">Focus time</label>
      <input class="svg-time-input" type="text" :disabled="running" v-model="timeInput" placeholder="MM:SS" />
      <button class="timer-btn" @click="startTimerWithBeep" :disabled="running || parseTime(timeInput) <= 0">Start</button>
      <button class="timer-btn stop" @click="stopTimer" :disabled="!running">Stop</button>
    </div>
  </div>
</template>

<style scoped>
.v-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: var(--color-bg);
  padding: 2rem 0;
}

svg {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 25vw;
  height: auto;
}

@media (max-width: 1200px) {
  svg {
    max-width: 45vw;
  }
}

.circle-bg {
  fill: var(--color-surface-alt);
  stroke: var(--color-surface-alt);
  stroke-width: 4;
}

.circle-progress {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 4;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.5s linear;
}

.svg-time-label {
    font-size: 1.2rem;
    color: var(--color-text);
    margin-right: 0.5rem;
    align-content: center;
}

.svg-time-input {
    width: 150px;
    font-size: 1.2rem;
    text-align: center;
    border: none;
    background: transparent;
    color: var(--color-text);
    box-shadow: 0 0 6px 1px var(--color-accent-light);
    border-radius: 4px;
    transition: box-shadow 0.3s;
    font-weight: bold;
}

.svg-time-input:focus {
  box-shadow: 0 0 12px 3px var(--color-accent);
  outline: none;
}

.svg-time-text {
  fill: var(--color-text);
  font-family: inherit;
  pointer-events: none;
  /* font-size wird jetzt dynamisch per :font-size gesetzt */
  user-select: none;
  font-weight: bold;
}

.btn-row {
  display: flex;
  gap: 1rem;
}


.timer-btn.stop {
  background: var(--color-accent-light);
  color: var(--color-accent);
}

.timer-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>