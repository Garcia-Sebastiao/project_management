import * as yup from "yup";

export const SignInSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export type SignInFormData = yup.InferType<typeof SignInSchema>;
