import { SignIn } from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { CardTeams } from "./pages/CardTeams";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/card" element={<CardTeams />} />
      </Routes>
    </div>
  );
};
