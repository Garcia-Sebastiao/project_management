import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Senhas diferentes"),
});

export type SignUpFormData = yup.InferType<typeof SignUpSchema>;
