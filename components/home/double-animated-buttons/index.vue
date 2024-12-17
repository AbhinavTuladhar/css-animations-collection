<template>
  <section>
    <h2>Double animated buttons</h2>
    <div class="button-container">
      <button class="btn btn--top">From top</button>
      <button class="btn btn--right">From right</button>
      <button class="btn btn--bottom">From bottom</button>
      <button class="btn btn--left">From left</button>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
section > * + * {
  margin-top: 1rem;
}

.button-container {
  display: grid;
  gap: 2rem;
  width: fit-content;
  margin-inline: auto;
}

.btn {
  position: relative;
  letter-spacing: 0.3875em;
  text-transform: uppercase;
  position: relative;
  padding: 1em 5em;

  &:hover {
    &::after {
      transition-delay: 0.35s;
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: all 0.4s ease-out;
    z-index: -1;
    transition-delay: 0s;
  }

  &::after {
    background-color: royalblue;
  }

  &--top {
    &::before {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0%;
      border: 1px solid royalblue;
      border-bottom: 0;
      border-top: 0;
    }

    &::after {
      top: 0;
      left: 0;
      width: calc(100% + 1px);
      height: 0%;
      background-color: royalblue;
    }

    &:hover {
      &::before,
      &::after {
        height: 100%;
      }
    }
  }

  &--right {
    &::before {
      left: 0;
      top: 0;
      width: 0%;
      height: 100%;
      border: 1px solid royalblue;
      border-left: none;
      border-right: none;
    }

    &::after {
      top: 0;
      right: 0;
      background-color: royalblue;
      width: 0%;
      height: calc(100% + 1px);
    }

    &:hover {
      &::before,
      &::after {
        width: 100%;
      }
    }
  }

  &--bottom {
    &::before {
      top: 0;
      left: 0;
      width: 100%;
      height: 0%;
      border: 1px solid royalblue;
      border-bottom: none;
      border-top: none;
    }

    &::after {
      left: 0;
      bottom: 0;
      width: calc(100% + 1px);
      height: 0;
      background-color: royalblue;
    }

    &:hover {
      &::before,
      &::after {
        height: 100%;
      }
    }
  }

  &--left {
    &::before {
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      border: 1px solid royalblue;
      border-left: none;
      border-right: none;
    }

    &::after {
      left: 0;
      top: 0;
      width: 0%;
      height: calc(100% + 1px);
      background-color: royalblue;
    }

    &:hover {
      &::before,
      &::after {
        width: 100%;
      }
    }
  }
}
</style>
