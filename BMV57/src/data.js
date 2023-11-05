const model1 = {
  value_a: {
    label: "A",
    value: false,
    display: true,
    required: false,
    isValid: true,
    rules: [],
    errMsg: "A的错误信息",
  },
  value_b: {
    label: "B",
    value: "Herz und Mund und Tat und Leben",
    display: true,
    rules: [
      () => {
        if (model1.value_b.required) {
          return !!model1.value_b.value;
        }
        return true;
      },
    ],
    get required() {
      return model1.value_a.value === true;
    },
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "B的错误信息",
  },
  value_c: {
    label: "C",
    value: 10,
    display: true,
    required: false,
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
    label: "D",
    display: true,
    required: false,
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
        if (model1.value_d.value[0] < 0) {
          return false;
        }
        if (model1.value_d.value[1] > 30) {
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
    label: "E",
    value: "我是一段描述",
    rules: [],
    get display() {
      return model1.value_c.value > 0;
    },
    required: false,
    get isValid() {
      return this.rules.every((rule) => rule?.());
    },
    errMsg: "E的错误信息",
  },
};

// const model2 = {
//   value_a: {
//     value: true,
//     required: false,
//     isValid: true,
//     errMsg: "A的错误信息",
//   },
//   value_b: {
//     value: "Herz und Mund und Tat und Leben",
//     get required() {
//       return model2.value_a.value === true;
//     },
//     isValid: true,
//     errMsg: "B错误信息",
//   },
//   value_c: {
//     value: 10,
//     required: false,
//     isValid: true,
//     errMsg: "C的错误信息",
//   },
//   value_d: {
//     required: false,
//     isValid: true,
//     errMsg: "D的错误信息",

//     value: [10, 20],
//   },
// };

// const model3 = {
//   value_a: {
//     value: false,
//     required: false,
//     isValid: true,
//     errMsg: "A的错误信息",
//   },
//   value_b: {
//     value: "Herz und Mund und Tat und Leben",
//     get required() {
//       return model3.value_a.value === true;
//     },
//     isValid: true,
//     errMsg: "B的错误信息",
//   },
//   value_c: {
//     value: 5,
//     required: false,
//     isValid: true,
//     errMsg: "C的错误信息",
//   },
//   value_d: {
//     required: false,
//     isValid: true,
//     errMsg: "D的错误信息",
//     value: [10, 12],
//   },
// };

export {
  model1,
  // model2, model3
};
