<script setup lang="ts"></script>

<template>
  <section :class="['my-2', 'p-2', 'shadow-md']">navigator</section>
  <suspense>
    <router-view></router-view>
  </suspense>
</template>

<style lang="scss" scoped></style>
