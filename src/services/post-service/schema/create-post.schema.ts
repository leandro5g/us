import * as Yup from "yup";

export const signUpSchema = Yup.object()
  .shape({
    content: Yup.string().required("Campo obrigatório")
  })
  .required();
