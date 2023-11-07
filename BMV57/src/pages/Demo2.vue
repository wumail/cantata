<template>
  <el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px">
    <el-form-item label="A" prop="value_a">
      <el-radio-group v-model="form.value_a">
        <el-radio :label="true">true</el-radio>
        <el-radio :label="false">false</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="B" :required="isBRequired" prop="value_b">
      <el-input
        size="small"
        v-model:value="form.value_b"
        type="text"
        clearable
        @clear="onClear"
      />
    </el-form-item>
    <el-form-item label="C" prop="value_c">
      <el-input-number size="small" v-model:value="form.value_c" />
    </el-form-item>
    <el-form-item label="D" prop="value_d">
      <el-input-number size="small" v-model:value="form.value_d[0]" />
      <span style="margin: 0 10px">~</span>
      <el-input-number size="small" v-model:value="form.value_d[1]" />
    </el-form-item>
    <el-form-item label="E" v-if="form.value_c >= 0" prop="value_e">
      <el-input size="small" v-model:value="form.value_e" type="text" />
    </el-form-item>
    <el-button @click="onSubmit">Submit</el-button>
  </el-form>
</template>
<script>
export default {
  name: "Demo2",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    const validatorOfC = (rule, value, callback) => {
      const { field } = rule;
      if (this.form.value_d[1] - this.form.value_d[0] >= this.form.value_c) {
        callback();
      } else {
        field === "value_c"
          ? callback(new Error("C的值必须小于D两项差值的绝对值"))
          : callback("D两项差值的绝对值必须大于C");
      }
    };

    const validatorOfD = (rule, value, callback) => {
      if (
        !(
          this.form.value_d[0] >= this.dynamicMin &&
          this.form.value_d[1] <= this.dynamicMax
        )
      ) {
        callback(
          new Error(`D值的区间为[${this.dynamicMin},${this.dynamicMax}]`)
        );
      } else {
        validatorOfC(rule, value, callback);
      }
    };

    return {
      form: {
        value_a: null,
        value_b: null,
        value_c: null,
        value_d: [null, null],
        value_e: null,
      },
      rules: {
        value_b: [
          {
            required: this.isBRequired,
            message: "请输入活动名称",
            trigger: "blur",
          },
        ],
        value_c: [
          {
            validator: validatorOfC,
            trigger: "change",
          },
        ],
        value_d: [
          {
            validator: validatorOfD,
            trigger: "change",
          },
        ],
        value_e: [
          {
            required: true,
            message: "请输入活动名称",
            trigger: "blur",
          },
        ],
      },
      dynamicMin: 0,
      dynamicMax: 30,
    };
  },
  beforeMount() {
    const keys = Object.keys(this.data);
    keys.forEach((key) => {
      console.log(key);
      this.form[key] = this.data[key];
    });
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.form.value_b === "i_find_bug") {
            this.$message.error("you find a bug!");
            return false;
          }
          this.$message.success("submit!");
        } else {
          this.$message.error("error submit!!");
          return false;
        }
      });
    },
    onClear() {
      this.form.value_b = "";
      this.form.value_e = "";
      this.$refs.ruleForm.validateField("value_b");
      this.$refs.ruleForm.validateField("value_e");
    },
  },
  watch: {
    "form.value_b": function (newVal) {
      if (newVal === "i_find_bug") {
        this.dynamicMin = -999;
        this.dynamicMax = 999;
      }
    },
  },
  computed: {
    isBRequired() {
      return this.form.value_a === true;
    },
  },
};
</script>
<style lang="less"></style>
