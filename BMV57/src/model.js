const model1 = {
  value_a: {
    value: false,
    get display() {
      return true;
    },
    get required() {
      return false;
    },
    rules: [],
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "A的错误信息",
  },
  value_b: {
    value: "Herz und Mund und Tat und Leben",
    get display() {
      return true;
    },
    get required() {
      return model1.value_a.value === true;
    },
    rules: [
      () => {
        if (model1.value_b.required) {
          return !!model1.value_b.value;
        }
        return true;
      },
    ],
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "B的错误信息",
  },
  value_c: {
    value: 10,
    get display() {
      return true;
    },
    get required() {
      return false;
    },
    rules: [
      () => {
        if (
          !Number.isNaN(model1.value_d.value[0]) &&
          !Number.isNaN(model1.value_d.value[1])
        ) {
          return (
            model1.value_d.value[1] - model1.value_d.value[0] >=
            model1.value_c.value
          );
        }
        return true;
      },
    ],
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "C的错误信息",
  },
  value_d: {
    get display() {
      return true;
    },
    get required() {
      return false;
    },
    rules: [
      () => {
        if (
          !Number.isNaN(model1.value_d.value[0]) &&
          !Number.isNaN(model1.value_d.value[1]) &&
          !Number.isNaN(model1.value_c.value)
        ) {
          return (
            model1.value_d.value[1] - model1.value_d.value[0] >=
            model1.value_c.value
          );
        }
        return true;
      },
      () => {
        let dynamicMin = 0,
          dynamicMax = 30;
        if (model1.value_b.value === "i_find_bug") {
          dynamicMin = -999;
          dynamicMax = 999;
        }
        if (model1.value_d.value[0] < dynamicMin) {
          return false;
        }
        if (model1.value_d.value[1] > dynamicMax) {
          return false;
        }
        return true;
      },
    ],
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "D的错误信息",
    value: [10, 20],
  },
  value_e: {
    value: "我是一段描述",
    get display() {
      return model1.value_c.value > 0;
    },
    get required() {
      return true;
    },
    rules: [
      () => {
        if (model1.value_e.required) {
          return !!model1.value_e.value;
        }
        return true;
      },
    ],
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "E的错误信息",
  },
};

const model2 = {
  value_a: {
    value: null,
    get display() {
      return true;
    },
    get required() {
      return false;
    },
    rules: [],
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "A的错误信息",
  },
  value_b: {
    value: "",
    get display() {
      return true;
    },
    get required() {
      return model2.value_a.value === true;
    },
    rules: [
      () => {
        if (model2.value_b.required) {
          return !!model2.value_b.value;
        }
        return true;
      },
    ],
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "B的错误信息",
  },
  value_c: {
    value: null,
    get display() {
      return true;
    },
    get required() {
      return false;
    },
    rules: [
      () => {
        if (
          !Number.isNaN(model2.value_d.value[0]) &&
          !Number.isNaN(model2.value_d.value[1])
        ) {
          return (
            model2.value_d.value[1] - model2.value_d.value[0] >=
            model2.value_c.value
          );
        }
        return true;
      },
    ],
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "C的错误信息",
  },
  value_d: {
    get display() {
      return true;
    },
    get required() {
      return false;
    },
    rules: [
      () => {
        if (
          !Number.isNaN(model2.value_d.value[0]) &&
          !Number.isNaN(model2.value_d.value[1]) &&
          !Number.isNaN(model2.value_c.value)
        ) {
          return (
            model2.value_d.value[1] - model2.value_d.value[0] >=
            model2.value_c.value
          );
        }
        return true;
      },
      () => {
        let dynamicMin = 0,
          dynamicMax = 30;
        if (model1.value_b.value === "i_find_bug") {
          dynamicMin = -999;
          dynamicMax = 999;
        }
        if (model1.value_d.value[0] < dynamicMin) {
          return false;
        }
        if (model1.value_d.value[1] > dynamicMax) {
          return false;
        }
        return true;
      },
    ],
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "D的错误信息",
    value: [null, null],
  },
  value_e: {
    value: "",
    get display() {
      return model2.value_c.value > 0;
    },
    get required() {
      return true;
    },
    rules: [
      () => {
        if (model2.value_e.required) {
          return !!model2.value_e.value;
        }
        return true;
      },
    ],
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "E的错误信息",
  },
};

const data = {
  value_a: true,
  value_b: "Herz und Mund und Tat und Leben",
  value_c: 10,
  value_d: [10, 20],
  value_e: "我是一段描述",
};

export {
  model1,
  model2,
  data,
  //  model3
};
