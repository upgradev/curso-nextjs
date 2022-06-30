import Link from "next/link";
import React from "react";
import useAuth from "../../data/hook/useAuth";

interface AvatarusuarioProps {
  className?: string;
}

export default function Avatarusuario(props: AvatarusuarioProps) {
  const { usuario } = useAuth();
  console.log(usuario?.imagemUrl);
  
  return (
    <div>
      <Link href={"/perfil"}>
        <img
          src={'https://lh3.googleusercontent.com/a-/AOh14GiCez6kJ5t7XvWlYHb1Rgk0AliM99HU7KPXhbw63A=s96-c'}
          alt="avatar do usuário"
          className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
        />
      </Link>
    </div>
  );
}
