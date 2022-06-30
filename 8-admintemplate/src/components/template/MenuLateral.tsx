import React from "react";
import useAuth from "../../data/hook/useAuth";
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  const { logout } = useAuth();

  return (
    <aside className="flex flex-col bg-gray-200 dark:text-gray-200 dark:bg-gray-900 ">
      <div
        className={`
        
        flex flex-col items-center justify-center
        bg-gradient-to-t from-indigo-500 to-purple-800 w-20 h-20
      `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          className={`text-red-600 dark:text-red-400 hover:bg-red-400 
          hover:text-white dark:hover:text-white`}
          onClick={logout}
          texto="Sair"
          icone={IconeSair}
        />
      </ul>
    </aside>
  );
}
