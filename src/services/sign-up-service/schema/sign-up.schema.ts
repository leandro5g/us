import * as Yup from "yup";

export const signUpSchema = Yup.object()
  .shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: Yup.string()
      .min(6, "A senha deve possuir pelo menos 6 caracteres")
      .required("Campo obrigatório"),
    confirm_password: Yup.string()
      .min(6, "A senha deve possuir pelo menos 6 caracteres")
      .required()
      .test("passwords-match", "As senhas devem ser iguais", function (value) {
        return this.parent.password === value;
      })
  })
  .required();
