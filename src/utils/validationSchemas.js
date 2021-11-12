import * as yup from "yup";
export const LOGIN_IN_SHEMA = yup.object({
  email: yup.string().email("Некорректный email").required("Введите email"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
      "Пароль должен содержать 8-32 символов, заглавную, строчную буквы, число и специальные символы"
    )
    .required("Введите пароль"),
  remember: yup.string(),
});

export const SIGN_IN_SHEMA = yup.object({
  firstName: yup.string().required("Введите имя"),
  lastName: yup.string().required("Введите фамилию"),
  displayName: yup.string().required("Введите имя"),
  email: yup.string().email("Некорректный email").required("Введите email"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
      "Пароль должен содержать 8-32 символов, заглавную, строчную буквы, число и специальные символы"
    )
    .required("Введите пароль"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Введите пароль"),
  remember: yup.string(),
  picked: yup.string("Выберите вариант").required("Выберите вариант")
});
