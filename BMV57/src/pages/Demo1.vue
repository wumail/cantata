<template>
  <div id="main">
    <MyFormItem
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
      label="B"
      :required="value_b.required"
      :isValid="value_b.isValid"
      :errMsg="value_b.errMsg"
    >
      <el-input size="small" v-model:value="value_b.value" type="text" />
    </MyFormItem>
    <MyFormItem
      label="C"
      :required="value_c.required"
      :isValid="value_c.isValid"
      :errMsg="value_c.errMsg"
    >
      <el-input-number size="small" v-model:value="value_c.value" />
    </MyFormItem>
    <MyFormItem
      label="D"
      :required="value_d.required"
      :isValid="value_d.isValid"
      :errMsg="value_d.errMsg"
    >
      <el-input-number size="small" v-model:value="value_d.value[0]" />
      <span style="margin: 0 10px">~</span>
      <el-input-number size="small" v-model:value="value_d.value[1]" />
    </MyFormItem>
    <el-button @click="validateForm">Submit</el-button>
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
    this.setData(this.model)
  },
  watch: {
    'model': function (newVal) {
      this.setData(newVal)
    },
  },
  methods: {
    setData(val){
      const keys = Object.keys(val);
      keys.forEach((key) => {
        this[key] = val[key];
      });
    },
    validateForm() {
      const keys = Object.keys(this.model);
      const result = !keys.some((key) =>
        this.model[key].isValid !== true
      );
      if(result){
        this.$message.success('valid')
      }else {
        this.$message.error('invalid')
      }
    }
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
