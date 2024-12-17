<template>
  <div class="landing-page">
    <section v-if="showHero">
      <HeroBanner />
    </section>
    <section class="content-grid">
      <div class="content">
        <HomeSimpleHoverSection />
      </div>
      <div class="content">
        <HomeAnimatedBorderGradient />
      </div>
      <div class="content">
        <HomeDoubleAnimatedButtons />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const showHero = ref(false);
</script>

<style lang="scss">
.landing-page {
  padding-bottom: 1rem;
}
</style>
