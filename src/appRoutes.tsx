import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { Cartas } from "./pages/cartas";
import { Mazos } from "./pages/mazos";
import { Mapa } from "./pages/mapa";
import { Quiz } from "./pages/quiz";

// This must be a separate component since useNavigate has to be under a BrowserRouter component
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="" Component={HomePage} />
            <Route path="cartas" Component={Cartas} />
            <Route path="mazos" Component={Mazos} />
            <Route path="mapa" Component={Mapa} />
            <Route path="quiz" Component={Quiz} />
        </Routes>
    );
};
