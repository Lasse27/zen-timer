export function useBeep() {
  function playBeep(count = 3, interval = 180) {
    let i = 0
    function singleBeep() {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'square'
      osc.frequency.value = 1200
      gain.gain.value = 0.4
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      setTimeout(() => { osc.frequency.value = 1800 }, 60)
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.18)
      osc.stop(ctx.currentTime + 0.2)
      osc.onended = () => ctx.close()
    }
    function beepSequence() {
      if (i < count) {
        singleBeep()
        i++
        setTimeout(beepSequence, interval)
      }
    }
    beepSequence()
  }
  return { playBeep }
}
