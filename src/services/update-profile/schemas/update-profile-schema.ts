import * as Yup from "yup";

export const updateProfileSchema = Yup.object()
  .shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    old_password: Yup.string().when("password", {
      is: (password: string) => !!password,
      then: (schema) =>
        schema.min(6, "As senhas possuem pelo menos 6 caracteres")
    }),
    password: Yup.string().min(
      6,
      "As senha devem possuir pelo menos 6 caracteres"
    )
  })
  .required();
