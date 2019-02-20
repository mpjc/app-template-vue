<template>
  <transition name="Modal">
    <div class="Modal-background" @click.self="tryClose">
      <div class="Modal-wrapper">
        <div class="Modal-container">
          <div v-if="showClose" class="Modal-close" @click="close">
            <i class="fas fa-times fa-lg"></i>
          </div>
          <div class="Modal-header">
            <slot name="header"></slot>
          </div>
          <div class="Modal-content">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
  @Prop() showClose!: boolean;
  @Prop() closeOnBgClick!: boolean;
  @Emit() close() { return; }

  tryClose() {
    if (this.closeOnBgClick) {
      this.close();
    }
  }
}
</script>

<style scoped lang="scss">
.Modal {
  &-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1000;
    transition: opacity 0.2s ease;
  }
  &-wrapper {
    width: 80%;
  }
  &-container {
    position: relative;
    margin: 0 auto;
    max-width: 800px;
    padding: 20px 20px;
    background-color: var(--bg-color-1);
    border: 1px solid var(--color-1);
    border-radius: 6px;
    transition: all 0.2s ease;
  }
  &-close {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  &-header {
    font-size: 1.1em;
    text-align: left;
    margin-bottom: 16px;
  }
  // Transition
  &-enter {
    opacity: 0;
  }
  &-leave-active {
    opacity: 0;
  }
  &-enter &-container,
  &-leave-active &-container {
    transform: scale(1.1);
  }
}
</style>
