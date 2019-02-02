<template>
  <div class="counter">
    <h3>Counter</h3>
    <div class="controls">
      <div class="row">
        <div class="value">Value: {{ value }}</div>
      </div>
      <div class="row">
        <button class="control" @click="increment">
          <i class="fas fa-plus"></i>
        </button>
        <button class="control" @click="decrement">
          <i class="fas fa-minus"></i>
        </button>
      </div>
      <div class="row">
        <input class="control" type="number" v-model="inputValue">
        <button class="control" @click="setValue">Set</button>
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
.controls {
  font-size: 1.1em;
  padding-top: 20px;
}
.control {
  font-size: 1.2em;
  text-align: center;
  margin: 0 8px;
  width: 80px;
  height: 60px;
  border-radius: 6px;
}
.row {
  margin: 12px;
}
.value {
  font-size: 1.5em;
}
</style>
