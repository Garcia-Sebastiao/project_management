import { Logo } from "../../../assets/Logo";
import { DefaultInput } from "../../../components/common/Input/DefaultInput";
import { Button } from "../../../components/common/Button/Button";
import { GoogleIcon } from "../../../assets/icons/Google";
import { SocialMidiaButton } from "../../../components/common/Button/SocialMidiaButton";
import { useForm } from "react-hook-form";
import { SignUpFormData, SignUpSchema } from "./utils/helpers";
import { yupResolver } from "@hookform/resolvers/yup";

export function SignUpPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormData>({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="w-full flex flex-col h-screen">
      <header className="w-full py-8 px-20">{Logo}</header>

      <main className="flex-1 w-full flex py-24 justify-center overflow-y-auto">
        <div className="flex w-full flex-col gap-y-6 items-center max-w-sm pb-24 bg-re">
          <h2 className="text-2xl font-bold text-primary">Registre-se</h2>

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-y-4 w-full"
            action=""
          >
            <DefaultInput
              label="Nome"
              register={register("name")}
              error={errors.name?.message}
              placeholder="Digite seu nome"
            />
            <DefaultInput
              register={register("email")}
              error={errors?.email?.message}
              label="Email"
              placeholder="Digite seu email"
              type="email"
            />

            <DefaultInput
              placeholder="Digite sua senha"
              label="Senha"
              register={register("password")}
              error={errors?.password?.message}
              type="password"
            />

            <DefaultInput
              label="Confirmar Senha"
              register={register("confirmPassword")}
              error={errors?.confirmPassword?.message}
              placeholder="Confirme sua senha"
              type="password"
            />

            <p className="text-primaryText py-2">
              Já possui uma conta?{" "}
              <a className="font-medium text-primary" href="/">
                Faça Login.
              </a>
            </p>

            <Button type="submit" label="Registrar" />
          </form>

          <div className="flex items-center w-full gap-x-4">
            <div className="flex-1 h-[1px] bg-primaryText" />
            <span className="text-primaryText">Ou</span>
            <div className="flex-1 h-[1px] bg-primaryText" />
          </div>

          <div className="w-full">
            <SocialMidiaButton label="Entrar com Google" icon={GoogleIcon} />
          </div>
        </div>
      </main>
    </div>
  );
}
