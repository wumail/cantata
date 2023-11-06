<template>
  <div id="main">
    <MyFormItem label="A">
      <el-radio-group
        v-model="form.value_a"
        :isValid="validateStatus.value_a.isValid"
        :errMsg="validateStatus.value_a.errMsg"
      >
        <el-radio :label="true">true</el-radio>
        <el-radio :label="false">false</el-radio>
      </el-radio-group>
    </MyFormItem>
    <MyFormItem
      label="B"
      :required="isBRequired"
      :isValid="validateStatus.value_b.isValid"
      :errMsg="validateStatus.value_b.errMsg"
    >
      <el-input
        size="small"
        v-model:value="form.value_b"
        type="text"
        clearable
        @clear="on_value_b_clear"
        @change="executeValidator('value_b')"
      />
    </MyFormItem>
    <MyFormItem
      label="C"
      :isValid="validateStatus.value_c.isValid"
      :errMsg="validateStatus.value_c.errMsg"
    >
      <el-input-number
        size="small"
        v-model:value="form.value_c"
        @change="executeValidator('value_c')"
      />
    </MyFormItem>
    <MyFormItem
      label="D"
      :isValid="validateStatus.value_d.isValid"
      :errMsg="validateStatus.value_d.errMsg"
    >
      <el-input-number
        size="small"
        v-model:value="form.value_d[0]"
        @change="executeValidator('value_d')"
      />
      <span style="margin: 0 10px">~</span>
      <el-input-number
        size="small"
        v-model:value="form.value_d[1]"
        @change="executeValidator('value_d')"
      />
    </MyFormItem>
    <MyFormItem
      label="E"
      v-if="form.value_c >= 0"
      :required="true"
      :isValid="validateStatus.value_e.isValid"
      :errMsg="validateStatus.value_e.errMsg"
    >
      <el-input
        size="small"
        v-model:value="form.value_e"
        type="text"
        @change="executeValidator('value_e')"
      />
    </MyFormItem>
    <el-button @click="onSubmit">Submit</el-button>
  </div>
</template>
<script>
import MyFormItem from "../components/MyFormItem.vue";
export default {
  name: "Demo3",
  components: {
    MyFormItem,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    const validatorOfC = (field) => {
      if (this.form.value_d[1] - this.form.value_d[0] >= this.form.value_c) {
        return [true, ""];
      } else {
        const errMsg =
          field === "value_c"
            ? "C的值必须小于D两项差值的绝对值"
            : "D两项差值的绝对值必须大于C";
        // this.$message.error(errMsg);
        return [false, errMsg];
      }
    };

    const validatorOfD = (field) => {
      if (
        !(
          this.form.value_d[0] >= this.dynamicMin &&
          this.form.value_d[1] <= this.dynamicMax
        )
      ) {
        return [false, `D值的区间为[${this.dynamicMin},${this.dynamicMax}`];
      } else {
        return validatorOfC(field);
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
      validateStatus: {
        value_a: {
          isValid: true,
          errMsg: "",
        },
        value_b: {
          isValid: true,
          errMsg: "",
        },
        value_c: {
          isValid: true,
          errMsg: "",
        },
        value_d: {
          isValid: true,
          errMsg: "",
        },
        value_e: {
          isValid: true,
          errMsg: "",
        },
      },
      dynamicMin: 0,
      dynamicMax: 30,
      validatorOfC,
      validatorOfD,
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
      const keys = Object.keys(this.validateStatus);
      keys.forEach((key) => {
        this.executeValidator(key);
      });
      this.$nextTick(() => {
        const valid = keys.every((key) => {
          return this.validateStatus[key].isValid;
        });
        if (valid) {
          this.$message.success("valid");
        } else {
          this.$message.error("invalid");
        }
      });
    },
    on_value_b_clear() {
      this.form.value_b = "";
      this.form.value_e = "";
    },

    executeValidator(field) {
      const rules = this.rules[field] || [];
      rules.forEach((rule) => {
        let isValid = true,
          errMsg = "";
        const { required, validator, message } = rule;
        if (required && !this.form[field]) {
          errMsg = message;
          isValid = false;
        }
        if (validator) {
          [isValid, errMsg] = validator(field);
        }
        this.validateStatus[field] = {
          isValid: isValid,
          errMsg: errMsg,
        };
      });
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
    rules() {
      return {
        value_b: [
          {
            required: this.isBRequired,
            message: "请输入B",
          },
        ],
        value_c: [
          {
            validator: this.validatorOfC,
          },
        ],
        value_d: [
          {
            validator: this.validatorOfD,
          },
        ],
        value_e: [
          {
            required: true,
            message: "请输入E",
          },
        ],
      };
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
