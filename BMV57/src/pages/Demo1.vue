<template>
  <div id="main">
    <MyFormItem
      v-if="value_a.display"
      label="A"
      :required="value_a.required"
      :isValid="value_a.isValid"
      :errMsg="value_a.errMsg"
    >
      <el-radio-group v-model="value_a.value">
        <el-radio :label="true">true</el-radio>
        <el-radio :label="false">false</el-radio>
      </el-radio-group>
    </MyFormItem>
    <MyFormItem
      v-if="value_b.display"
      label="B"
      :required="value_b.required"
      :isValid="value_b.isValid"
      :errMsg="value_b.errMsg"
    >
      <el-input
        size="small"
        v-model:value="value_b.value"
        type="text"
        @clear="onClear"
        clearable
      />
    </MyFormItem>
    <MyFormItem
      v-if="value_c.display"
      label="C"
      :required="value_c.required"
      :isValid="value_c.isValid"
      :errMsg="value_c.errMsg"
    >
      <el-input-number size="small" v-model:value="value_c.value" />
    </MyFormItem>
    <MyFormItem
      v-if="value_d.display"
      label="D"
      :required="value_d.required"
      :isValid="value_d.isValid"
      :errMsg="value_d.errMsg"
    >
      <el-input-number size="small" v-model:value="value_d.value[0]" />
      <span style="margin: 0 10px">~</span>
      <el-input-number size="small" v-model:value="value_d.value[1]" />
    </MyFormItem>
    <MyFormItem
      v-if="value_e.display"
      label="E"
      :required="value_e.required"
      :isValid="value_e.isValid"
      :errMsg="value_e.errMsg"
    >
      <el-input size="small" v-model:value="value_e.value" type="text" />
    </MyFormItem>
    <el-button @click="onSubmit">Submit</el-button>
  </div>
</template>

<script>
import MyFormItem from "../components/MyFormItem.vue";

export default {
  name: "Demo1",
  props: {
    model: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    MyFormItem,
  },
  data() {
    return {
      value_a: {},
      value_b: {},
      value_c: {},
      value_d: {},
      value_e: {},
    };
  },
  created() {},
  mounted() {},
  computed: {},
  beforeMount() {
    this.setData(this.model);
  },
  watch: {
    model: function (newVal) {
      this.setData(newVal);
    },
  },
  methods: {
    setData(val) {
      const keys = Object.keys(val);
      keys.forEach((key) => {
        this[key] = val[key];
      });
    },
    onSubmit() {
      const keys = Object.keys(this.model);
      const valid = keys.every((key) => {
        const { display, isValid, required, value } = this.model[key];
        if (!display) {
          return true;
        } else {
          return this.model[key].isValid !== false;
        }
      });
      if (valid) {
        if (this.value_b.value === "i_find_bug") {
          this.$message.error("you find bug");
          return;
        }
        this.$message.success("valid");
      } else {
        this.$message.error("invalid");
      }
    },
    onClear() {
      this.value_b.value = "";
      this.value_e.value = "";
    },
  },
};
</script>
<style lang="less">
#main {
  width: 50%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .form-item-wrap {
    margin-bottom: 10px;
  }
}
</style>
