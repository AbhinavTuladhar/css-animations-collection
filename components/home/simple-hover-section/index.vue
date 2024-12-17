<template>
  <div class="simple-hovers">
    <h2>Simple button hovers</h2>
    <p>Some very simplistic button hovers to use in your own projects.</p>
    <div class="button-container">
      <button class="btn scale-up">Scale up</button>
      <button class="btn scale-down">Scale down</button>
      <button class="btn float">Float</button>
      <button class="btn fade-in">Fade in</button>
      <button class="btn slide slide-left">
        <span> Slide left </span>
      </button>
      <button class="btn slide slide-right">
        <span> Slide right </span>
      </button>
      <button class="btn slide slide-up">
        <span> Slide up </span>
      </button>
      <button class="btn slide slide-down">
        <span> Slide down </span>
      </button>
      <button class="btn slide slide-fancy">
        <span> Slide fancy </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.simple-hovers {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.btn {
  position: relative;
  padding: 1em 1.5em;
  background-color: #16161d;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.4s ease-out;
  cursor: pointer;
}

.scale {
  &-up:hover {
    transform: scale(1.05);
  }

  &-down:hover {
    transform: scale(0.95);
  }
}

.float:hover {
  transform: translateY(-4px);
}

.fade-in:hover {
  background-color: royalblue;
  color: white;
}

// Common styles for all the 'slide' buttons
.slide {
  span {
    position: relative;
    z-index: 5;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: royalblue;
    transition: all 0.4s ease-out;
    z-index: 0;
    border-radius: 4px;
  }
}

.slide-left {
  &::before {
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
  }

  &:hover::before {
    transform: scaleX(1);
  }
}

.slide-right {
  &::before {
    top: 0;
    right: 0;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover::before {
    transform: scaleX(1);
  }
}

.slide-up {
  &::before {
    top: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: top;
  }

  &:hover::before {
    transform: scaleY(1);
  }
}

.slide-down {
  &::before {
    bottom: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: bottom;
  }

  &:hover::before {
    transform: scaleY(1);
  }
}

.slide-fancy {
  &::before {
    left: 0;
    top: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease-out;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>
