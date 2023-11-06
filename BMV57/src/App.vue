<template>
  <div id="app">
    <!-- <Demo1 :model="model" /> -->
    <!-- <Demo2 class="demo2" :data="data" /> -->
    <Demo3 class="demo3" :data="data" />
  </div>
</template>

<script>
import Demo1 from "./pages/Demo1.vue";
import Demo2 from "./pages/Demo2.vue";
import Demo3 from "./pages/Demo3.vue";
import { model1, model2, data } from "./model";

export default {
  name: "App",
  components: {
    Demo1,
    Demo2,
    Demo3
  },
  data() {
    return {
      // model: {},
      // model: model1,
      // data: data,
      data: {},
    };
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
.demo2, .demo3 {
  width: 30%;
  margin: auto;
  margin-top: 15%;
}
</style>
