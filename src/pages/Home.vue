<script setup lang="ts">
import { ref } from 'vue'
let count = ref<number>(0)
</script>
<template>
  <h1>Harder Better Faster Stronger - engineering for vue</h1>
  <button :class="['p-3', 'border-2', 'rounded-lg']" @click="count++">
    click {{ count }} times already.
  </button>
  <h3 :class="['text-xl', 'text-blue-400']">i18n</h3>
  <button
    :class="['p-3', 'border-2', 'rounded-lg']"
    @click="$i18n.locale = 'cn'"
  >
    cn
  </button>
  <button
    :class="['p-3', 'border-2', 'rounded-lg']"
    @click="$i18n.locale = 'en'"
  >
    en
  </button>
  <p>{{ $t('test') }}</p>
  <h3 :class="['text-xl', 'text-blue-400']">normal font family test</h3>
  <p class="font-thin">100 thin</p>
  <p class="font-extralight">200 extralight</p>
  <p class="font-light">300 light</p>
  <p class="font-normal">400 normal</p>
  <p class="font-medium">500 medium</p>
  <p class="font-semibold">600 semibold</p>
  <p class="font-bold">700 bold</p>
  <p class="font-extrabold">800 extrabold</p>
  <p class="font-black">900 black</p>
  <hr />
  <h3 :class="['text-xl', 'text-blue-400']" class="mono">
    mono font family test
  </h3>
  <p class="mono font-thin">100 thin</p>
  <p class="mono font-thin italic">100 thin italic</p>
  <p class="mono font-extralight">200 extralight</p>
  <p class="mono font-extralight italic">200 extralight italic</p>
  <p class="mono font-light">300 light</p>
  <p class="mono font-light italic">300 light italic</p>
  <p class="mono font-normal">400 normal</p>
  <p class="mono font-normal italic">400 normal italic</p>
  <p class="mono font-medium">500 medium</p>
  <p class="mono font-medium italic">500 medium italic</p>
  <p class="mono font-semibold">600 semibold</p>
  <p class="mono font-semibold italic">600 semibold italic</p>
  <p class="mono font-bold">700 bold</p>
  <p class="mono font-bold italic">700 bold italic</p>
  <p class="mono font-extrabold">800 extrabold</p>
  <p class="mono font-extrabold italic">800 extrabold italic</p>
  <p class="mono font-black">900 black</p>
  <p class="mono font-black italic">900 black italic</p>
  <hr />
  <h3 :class="['text-xl', 'text-blue-400']">material icons test</h3>
  <span class="material-regular text-red-500 text-2xl">settings</span>
  <span class="material-outlined text-green-500 text-3xl">settings</span>
  <span class="material-round text-blue-500 text-4xl">settings</span>
  <span class="material-sharp text-black text-6xl">settings</span>
  <h3 :class="['text-xl', 'text-blue-400']">simple icons</h3>
  <p>
    <i class="text-4xl si si-html5 si--color"></i>
    <i class="text-4xl si si-css3 si--color"></i>
    <i class="text-4xl si si-sass si--color"></i>
    <i class="text-4xl si si-javascript si--color"></i>
    <i class="text-4xl si si-typescript si--color"></i>
    <i class="text-4xl si si-pnpm si--color"></i>
    <i class="text-4xl si si-vite si--color"></i>
    <i class="text-4xl si si-eslint si--color"></i>
    <i class="text-4xl si si-stylelint si--color"></i>
    <i class="text-4xl si si-prettier si--color"></i>
    <i class="text-4xl si si-yaml si--color"></i>
    <i class="text-4xl si si-vuedotjs si--color"></i>
    <i class="text-4xl si si-d3dotjs si--color"></i>
    <i class="text-4xl si si-reactivex si--color"></i>
    <i class="text-4xl si si-threedotjs si--color"></i>
    <i class="text-4xl si si-webgl si--color"></i>
    <i class="text-4xl si si-nodedotjs si--color"></i>
    <i class="text-4xl si si-nestjs si--color"></i>
    <i class="text-4xl si si-webassembly si--color"></i>
    <i class="text-4xl si si-dart si--color"></i>
    <i class="text-4xl si si-flutter si--color"></i>
    <i class="text-4xl si si-go si--color"></i>
    <i class="text-4xl si si-rust si--color"></i>
    <i class="text-4xl si si-gnubash si--color"></i>
    <i class="text-4xl si si-linux si--color"></i>
    <i class="text-4xl si si-visualstudiocode si--color"></i>
    <i class="text-4xl si si-vim si--color"></i>
  </p>
</template>
<style scoped lang="scss">
h1 {
  @apply text-4xl;
}

h3 {
  @apply text-2xl;
}
</style>
