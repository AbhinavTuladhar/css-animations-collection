<template>
  <header class="header content-grid">
    <div class="header-container content">
      <h1>CSS Animations</h1>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  padding-block: 1rem;
  backdrop-filter: blur(5px);
  background-color: royalblue;

  &-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
