<template>
  <div id="app">
    <Demo1 :model="model" />
  </div>
</template>

<script>
import Demo1 from "./pages/Demo1.vue";
import {
  model1,
  //  model2, model3
} from "./data";

export default {
  name: "App",
  components: {
    Demo1,
  },
  date() {
    return {
      model: {},
    };
  },
  beforeMount() {
    this.model = model1;
  },
  watch: {},
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
