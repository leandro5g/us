import * as Yup from "yup";

export const updateProfileSchema = Yup.object()
  .shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: Yup.string().min(
      6,
      "A senha deve possuir pelo menos 6 caracteres"
    ),
    old_password: Yup.string()
      .min(6, "A senha deve possuir pelo menos 6 caracteres")
      .test("passwords-match", "As senhas devem ser iguais", function (value) {
        return !!this.parent.password && this.parent.password === value;
      })
  })
  .required();
