<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

/*
    Klarheit entsteht, wenn der Geist still wird.
    Ein ruhiger Atem führt zu einem ruhigen Geist.
    Konzentration ist die Kunst, alles Unwesentliche loszulassen.
    Wer den Moment beherrscht, beherrscht den Fokus.
    Stille ist die stärkste Form der Aufmerksamkeit.
    Fokus wächst, wenn Ablenkung verschwindet.
    Zen bedeutet, ganz im Jetzt zu sein.
    Ein klarer Geist sieht den Weg ohne Anstrengung.
    Konzentriere dich auf weniger, erreiche mehr.
    Ruhe ist die Grundlage jeder Konzentration.
    Fokussieren heißt, das Wichtige zu erkennen.
    Gedanken kommen und gehen – bleib bei der Mitte.
    Zen ist Einfachheit in Bewegung.
    Ein Augenblick voller Achtsamkeit verändert alles.
    Wer innerlich still ist, arbeitet am stärksten.
*/

const texts = [
    "Klarheit entsteht, wenn der Geist still wird.",
    "Ein ruhiger Atem führt zu einem ruhigen Geist.",
    "Konzentration ist die Kunst, alles Unwesentliche loszulassen.",
    "Wer den Moment beherrscht, beherrscht den Fokus.",
    "Stille ist die stärkste Form der Aufmerksamkeit.",
    "Fokus wächst, wenn Ablenkung verschwindet.",
    "Zen bedeutet, ganz im Jetzt zu sein.",
    "Ein klarer Geist sieht den Weg ohne Anstrengung.",
    "Konzentriere dich auf weniger, erreiche mehr.",
    "Ruhe ist die Grundlage jeder Konzentration.",
    "Fokussieren heißt, das Wichtige zu erkennen.",
    "Gedanken kommen und gehen – bleib bei der Mitte.",
    "Zen ist Einfachheit in Bewegung.",
    "Ein Augenblick voller Achtsamkeit verändert alles.",
    "Wer innerlich still ist, arbeitet am stärksten."
]
let index = ref(0)
const currentText = computed(() => texts[index.value])
let intervalId = null
onMounted(() => {
    intervalId = setInterval(() => {
        index.value = (index.value + 1) % texts.length
        console.log("Rotated to text:", currentText.value)
        console.log("Rotated to index:", index.value)
    }, 7500)
})

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId)
    }
})
</script>

<template>
    <div class="zen-text">
        <transition name="fade" mode="out-in">
            <h1 :key="index"> {{ currentText }} </h1>
        </transition>
    </div>
</template>

<style scoped>
.zen-text {
    color: var(--text-color);
    text-align: center;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.7s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
</style>