<template>
  <div class="home">
    <h1 ref="appTitleRef">Vue3</h1>
    <h3>Vue4</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const appTitleRef = ref(null)
const counter = ref(0)
const counterData = [{
  count: 0,
  title: "My Counter"
}]

const increaseCounter = () => {
  counter.value++
}

const decreaseCounter = () => {
  counter.value--
}

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth}  px`)
  // console.log(appTitleRef.value.offsetWidth)

})
</script>

<!--
<script>
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }

    const decreaseCounter = () => {
      counter.value--
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
}
</script>
-->

<!--
<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
}
</script>
-->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
</style>