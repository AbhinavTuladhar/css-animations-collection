<template>
  <div class="following-borders">
    <h2>Animated Border Gradient</h2>
    <button class="animated-gradient">
      <span class="top" />
      <span class="right" />
      <span class="bottom" />
      <span class="left" />
      <span> BUTTON </span>
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
$other-colour: hsl(225, 73%, 20%);

.following-borders {
  padding-block: 2rem;

  > * + * {
    margin-top: 1rem;
  }
}

.animated-gradient {
  position: relative;
  padding: 3rem 7.5rem;
  letter-spacing: 0.375em;
  font-size: 2rem;
  overflow: hidden;
}

.top,
.bottom,
.left,
.right {
  position: absolute;
}

.top,
.bottom {
  width: 100%;
  height: 3px;
}

.left,
.right {
  height: 100%;
  width: 3px;
}

.top {
  background: linear-gradient(to right, $other-colour, royalblue);
  top: 0;
  left: 0;
  animation: top-animation 2s linear infinite;
}

.bottom {
  background: linear-gradient(to left, $other-colour, royalblue);
  bottom: 0;
  left: 0;
  animation: bottom-animation 2s linear infinite;
}

.left {
  background: linear-gradient(to top, $other-colour, royalblue);
  top: 0;
  left: 0;
  animation: left-animation 2s linear infinite;
  animation-delay: 1s;
}

.right {
  background: linear-gradient(to bottom, $other-colour, royalblue);
  top: 0;
  right: 0;
  animation: right-animation 2s linear infinite;
  animation-delay: 1s;
}

@keyframes top-animation {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes bottom-animation {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}

@keyframes left-animation {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes right-animation {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(100%);
  }
}
</style>
