import { useAuth0 } from "@auth0/auth0-react";

type TSocialMidiaButton = {
  label: string;
  icon: any;
};
export function SocialMidiaButton({ icon, label }: TSocialMidiaButton) {
  const { loginWithPopup, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithPopup()}
        className="flex items-center justify-center w-full gap-x-2 font-medium p-4 rounded-md border-primaryText border-2 text-primaryText hover:brightness-75 transition duration-150 cursor-pointer"
      >
        {icon}
        {label}
      </button>
    )
  );
}
