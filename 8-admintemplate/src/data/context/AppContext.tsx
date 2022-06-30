import { createContext, useEffect, useState } from "react";

// type Tema = "dark" | "";

interface AppContextProps {
  tema?: string;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [tema, setTema] = useState("dark");

  function alterarTema() {
    const novoTema = tema === "" ? "dark" : "";
    setTema(novoTema);
    localStorage.setItem("tema", novoTema);
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    setTema(temaSalvo);
  }, []);

  return (
    <div>
      <AppContext.Provider
        value={{
          tema: tema,
          alternarTema: alterarTema,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

// export const AppConsumer = AppContext.Consumer

export default AppContext;
// export const AppConsumer = AppContext.Consumer;
