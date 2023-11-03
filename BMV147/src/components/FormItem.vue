<!--  -->
<template>
  <div class="form-item-wrap">
    <span class="form-item-label">{{ props.label }}:</span>
    <slot class="form-item" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  label: string;
}>();
</script>
<style lang="less" scoped>
.form-item-wrap {
  display: flex;
  .form-item-label {
    margin-right: 10px;
  }
}
</style>
