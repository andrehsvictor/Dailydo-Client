import { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";
import UsernameInput from "./components/UsernameInput";
import LocalStorageKeys from "../../utils/LocalStorageKeys";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [doingLogin, setDoingLogin] = useState(false);
  let token = {
    expiresAt: new Date(),
    accessToken: "",
    refreshToken: "",
  };
  const navigate = useNavigate();

  const getUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<any>) => {
    event.preventDefault();
    setDoingLogin(true);
    const request = await fetch("https://dailydo-api.onrender.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    setDoingLogin(false);
    if (request.status == 200) {
      const response = await request.json();
      token = response;
      localStorage.clear();
      localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, token.accessToken);
      localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN, token.refreshToken);
      localStorage.setItem(
        LocalStorageKeys.EXPIRATION,
        token.expiresAt.toString()
      );
      navigate("/home");
    } else {
      const response = await request.json();
      let errorMessage = {
        message: "",
      };
      errorMessage = response;
      alert("Error: " + errorMessage.message.toLowerCase());
    }
  };

  const logingScreen = () => {
    while (doingLogin) {
      return (
        <div className="fixed w-screen h-screen bg-white bg-opacity-60 flex items-center justify-center">
          <h1 className="m-auto">Loging</h1>
        </div>
      );
    }
  };

  return (
    <>
      {logingScreen()}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Dailydo
          </h1>
          <form>
            <UsernameInput onChange={getUsername} value={username} />
            <PasswordInput onChange={getPassword} value={password} />
            <SubmitButton onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
