<template>
  <div class="landing-page">
    <section v-if="showHero">
      <HeroBanner />
    </section>
    <section class="content-grid">
      <div class="simple-hovers">
        <HomeSimpleHoverSection />
      </div>
      <div class="animated-borders">
        <HomeAnimatedBorderGradient />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const showHero = ref(false);
</script>

<style scoped lang="scss">
.simple-hovers,
.animated-borders {
  grid-column: content;
}
</style>
