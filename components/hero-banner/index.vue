<template>
  <div class="hero-banner">
    <h1 class="title">
      <span> A Collection of Cool CSS </span>
      <span>A</span>
      <span>n</span>
      <span>i</span>
      <span>m</span>
      <span>a</span>
      <span>t</span>
      <span>i</span>
      <span>o</span>
      <span>n</span>
      <span>s</span>
    </h1>
    <div>Enhance Your Site's Appeal with Eye-Catching Transitions</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero-banner {
  display: grid;
  place-items: center;
  gap: 1rem;
  margin-top: -5rem;
  padding-top: 15rem;
}

.title {
  font-size: clamp(1.5rem, 0.833rem + 2.963vw, 3.5rem);
  max-width: 600px;
  text-align: center;
}

// Select all spans of the h1 tag except the first one
.title span:not(:first-child) {
  display: inline-flex;
  animation: rotating-text 4s ease-in-out infinite both;
}

@for $index from 2 through 11 {
  .title span:nth-child(#{$index}) {
    animation-delay: 0.2s * ($index);
  }
}

@keyframes rotating-text {
  0%,
  80% {
    transform: rotateY(360deg);
  }

  80% {
    color: royalblue;
  }
}
</style>
