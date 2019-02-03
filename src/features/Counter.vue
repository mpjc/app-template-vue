<template>
  <div class="Counter">
    <h3>Counter</h3>
    <div class="Counter-controls">
      <div class="Counter-row">
        <div class="Counter-value">Value: {{ value }}</div>
      </div>
      <div class="Counter-row">
        <button class="Counter-control" @click="increment">
          <i class="fas fa-plus"></i>
        </button>
        <button class="Counter-control" @click="decrement">
          <i class="fas fa-minus"></i>
        </button>
      </div>
      <div class="Counter-row">
        <input class="Counter-control" type="number" v-model="inputValue">
        <button class="Counter-control" @click="setValue">Set</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { CounterState } from '@/store/counter';
import { mapGetters, mapActions } from 'vuex';

@Component({
  computed: mapGetters('counter', ['value']),
  methods: mapActions('counter', ['increment', 'decrement', 'set']),
})
export default class Counter extends Vue {
  // State stuff
  value!: number;
  increment!: () => void;
  decrement!: () => void;
  set!: (value: number) => void;

  inputValue: string = '0';

  setValue() {
    const value = parseInt(this.inputValue, 10);
    if (Number.isInteger(value)) {
      this.set(value);
    }
  }
}
</script>

<style scoped lang="scss">
.Counter {
  &-controls {
    font-size: 1.1em;
    padding-top: 20px;
  }
  &-control {
    font-size: 1.1em;
    text-align: center;
    margin: 0 8px;
    width: 60px;
    height: 40px;
    border-radius: 6px;
  }
  &-row {
    margin: 12px;
  }
  &-value {
    font-size: 1.5em;
  }
}
</style>
