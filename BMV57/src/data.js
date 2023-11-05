const model1 = {
  value_a: {
    value: false,
    required: false,
    isValid: true,
    errMsg: "A的错误信息",
  },
  value_b: {
    value: "Herz und Mund und Tat und Leben",
    get required() {
      return model1.value_a.value === true;
    },
    isValid: true,
    errMsg: "B的错误信息",
  },
  value_c: {
    value: 10,
    required: false,
    get isValid() {
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
    errMsg: "C的错误信息",
  },
  value_d: {
    required: false,
    get isValid() {
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
    errMsg: "D的错误信息",
    value: [10, 20],
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
