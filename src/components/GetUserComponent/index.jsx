import "./style.css";
import { useState } from "react";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const handleLogin = (userInput) => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <form>
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          autofocus={true}
          placeholder="Insira seu nome"
        />
      </div>
      <div>
        <button onClick={() => handleLogin(userInput)}>
          Acessar com o nome
        </button>
      </div>
    </form>
  );
};

export default GetUserComponent;
