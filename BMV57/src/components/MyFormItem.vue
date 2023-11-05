<template>
  <div class="form-item-wrap">
    <span :class="requiredClass">*</span>
    <span class="form-item-label">{{ label }}:</span>
    <slot class="form-item" />
    <span v-if="!isValid" class="form-item-error-message">{{ errMsg }}</span>
  </div>
</template>

<script>
export default {
  name: "MyFormItem",
  props: {
    label: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    errMsg: {
      type: String,
      default: "",
    },
    isValid: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    requiredClass() {
      return this.required ? "form-item-required" : "form-item-not-required";
    },
  },
  watch: {},
  methods: {},
};
</script>
<style lang="less">
.form-item-wrap {
  display: flex;
  align-items: baseline;
  .form-item-required {
    color: red;
    margin-right: 5px;
  }
  .form-item-not-required {
    opacity: 0;
    margin-right: 5px;
  }
  .form-item-label {
    margin-right: 10px;
  }
  .form-item-error-message {
    color: red;
    margin-left: 20px;
  }
}
</style>
