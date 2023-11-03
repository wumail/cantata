<template>
  <div class="main">
    <MyFormItem label="display B">
      <n-space>
        <n-radio
          :checked="value_a === 'true'"
          value="true"
          @change="handleAChange"
        >
          true
        </n-radio>
        <n-radio
          :checked="value_a === 'false'"
          value="false"
          @change="handleAChange"
        >
          false
        </n-radio>
      </n-space>
    </MyFormItem>
    <MyFormItem label="B">
      <n-input v-model:value="value_b" type="text" placeholder="" />
    </MyFormItem>
    <MyFormItem label="days">
      <n-input-number v-model:value="value_c" clearable />
    </MyFormItem>
    <MyFormItem label="date range">
      <n-date-picker v-model:value="value_d" type="daterange" clearable />
    </MyFormItem>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MyFormItem from "../components/FormItem.vue";
const value_a = ref<string | null>(null);
const value_b = ref<string | null>(null);
const value_c = ref<number>(0);
const value_d = ref<[number, number] | null>(null);

const handleAChange = (e: Event) => {
  value_a.value = (e.target as HTMLInputElement).value;
};     

</script>
<style lang="less">
.main {
  width: 50%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .form-item-wrap {
    margin-bottom: 10px
  }
}
</style>
