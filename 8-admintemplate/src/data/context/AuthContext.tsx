import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";
import router from "next/router";
import Cookies from "js-cookie";

interface AuthContextProps {
  usuario?: Usuario;
  carregando?: boolean;
  loginGoogle?: () => Promise<void>;
  login?: (email: string, senha: string) => Promise<void>;
  cadastrar?: (email: string, senha: string) => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(
  usuarioFirebase: firebase.User
): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken();
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token: token,
    provedor: usuarioFirebase.providerData[0]?.providerId,
    imagemUrl: usuarioFirebase.photoURL,
  };
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookies.set("admin-template-casa-auth", logado, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-casa-auth");
  }
}

export function AuthProvider(props: any) {
  const [usuario, setUsuario] = useState<Usuario>(null);
  const [carregando, setCarregando] = useState(true);

  async function configurarSessao(usuarioFirebase: any) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configurarSessao(resp.user);
      router.push("/");

      // if (resp.user?.email) {
      //   const usuario = await usuarioNormalizado(resp.user);
      //   setUsuario(usuario);
      //   router.push("/");
      // }
    } finally {
      setCarregando(false);
    }
  }

  async function login(email, senha) {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha);

      await configurarSessao(resp.user);
      router.push("/");
    } finally {
      setCarregando(false);
    }
  }

  async function cadastrar(email, senha) {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);

      await configurarSessao(resp.user);
      router.push("/");
    } finally {
      setCarregando(false);
    }
  }

  async function logout() {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      await configurarSessao(null);
      Cookies.remove("admin-template-casa-auth");
      setUsuario(null);
      gerenciarCookie(false);

    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-casa-auth")) {
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
      return () => cancelar();
    } else {
      setCarregando(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ usuario, cadastrar, login, loginGoogle, logout, carregando }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
