import * as Yup from "yup";

export const signInSchema = Yup.object()
  .shape({
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: Yup.string()
      .min(6, "A senha deve possuir pelo menos 6 caracteres")
      .required("Campo obrigatório")
  })
  .required();
