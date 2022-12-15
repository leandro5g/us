import * as Yup from "yup";

export const updateProfileSchema = Yup.object()
  .shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    old_password: Yup.string().when("password", (password: string, schema) => {
      return schema.test({
        test: (old_password: string) =>
          !password || !old_password || old_password?.length >= 6,
        message: "As senhas possuem pelo menos 6 caracteres"
      });
    }),
    password: Yup.string().test(
      "is-lenght-password",
      "As senhas precisam ter pelo menos 6 caracteres",
      (password: string) => {
        return !password || password?.length >= 6;
      }
    )
  })
  .required();
