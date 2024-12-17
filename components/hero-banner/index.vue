<template>
  <div class="hero-banner">
    <h1 class="title">
      <span> A Collection of </span>
      <span class="gradient-text"> Cool </span>
      <span> CSS </span>
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
    <div>Enhance your Site's Appeal with Eye-Catching Transitions!</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero-banner {
  display: grid;
  place-items: center;
  gap: 1rem;
  margin-top: -5rem;
  padding-block: 15rem 10rem;
}

.title {
  font-size: clamp(1.5rem, 0.833rem + 2.963vw, 3.5rem);
  line-height: 1.25em;
  max-width: 600px;
  text-align: center;

  span:not(:first-child, :nth-child(2), :nth-child(3)) {
    display: inline-flex;
    animation: rotating-text 4s ease-in-out infinite both;
  }

  @for $index from 4 through 13 {
    span:nth-child(#{$index}) {
      animation-delay: 0.2s * ($index);
    }
  }
}

.gradient-text {
  background: linear-gradient(to right, hsl(225, 73%, 37%), hsl(229, 89%, 77%));
  color: transparent;
  background-clip: text;
}

.glow {
  text-shadow:
    0 0 20px #fff,
    0 0 30px hsl(225, 73%, 37%),
    0 0 40px hsl(225, 73%, 37%),
    0 0 50px hsl(225, 73%, 37%);
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
