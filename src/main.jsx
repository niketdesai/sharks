import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./theme/responsive.css";
import App from "./App.jsx";
import PasswordGate from "./components/PasswordGate.jsx";

function Root() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("p071_auth") === "1");
  const [arriving, setArriving] = useState(false);

  const handleAuth = () => {
    sessionStorage.setItem("p071_auth", "1");
    setArriving(true);
    setTimeout(() => setAuthed(true), 200);
  };

  if (!authed) {
    return <PasswordGate onAuth={handleAuth} />;
  }

  return <App arriving={arriving} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
