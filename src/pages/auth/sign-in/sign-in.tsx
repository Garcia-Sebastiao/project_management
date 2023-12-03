import { Logo } from "../../../assets/Logo";
import { DefaultInput } from "../../../components/common/Input/DefaultInput";
import { Button } from "../../../components/common/Button/Button";
import { GoogleIcon } from "../../../assets/icons/Google";
import { SocialMidiaButton } from "../../../components/common/Button/SocialMidiaButton";
import { useForm } from "react-hook-form";
import { SignInFormData, SignInSchema } from "./utils/helpers";
import { yupResolver } from "@hookform/resolvers/yup";

export function SignInPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>({
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="w-full flex flex-col h-screen px-20">
      <header className="w-full py-8">{Logo}</header>

      <main className="flex-1 w-full flex pt-24 justify-center">
        <div className="flex w-full flex-col gap-y-6 items-center max-w-sm">
          <h2 className="text-2xl font-bold text-primary">Faça Login</h2>

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-y-4 w-full"
            action=""
          >
            <DefaultInput
              register={register("email")}
              error={errors?.email?.message}
              label="Email"
              placeholder="Digite seu email"
              type="email"
            />

            <DefaultInput
              label="Senha"
              register={register("password")}
              error={errors?.password?.message}
              placeholder="Digite sua senha"
              type="password"
            />

            <p className="text-primaryText py-2">
              Não possui uma conta?{" "}
              <a className="font-medium text-primary" href="/signup">
                Registre-se.
              </a>
            </p>

            <Button type="submit" label="Entrar" />
          </form>

          <div className="flex items-center w-full gap-x-4">
            <div className="flex-1 h-[1px] bg-primaryText" />
            <span className="text-primaryText">Ou</span>
            <div className="flex-1 h-[1px] bg-primaryText" />
          </div>

          <div className="w-full flex flex-col gap-y-4">
            <SocialMidiaButton label="Entrar com Google" icon={GoogleIcon} />
          </div>
        </div>
      </main>
    </div>
  );
}
