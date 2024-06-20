import { Route, Routes } from "react-router-dom";
import { Cards } from "./pages/cards";
import { Quiz } from "./pages/quiz";
import { Decks } from "./pages/decks";
import { Maps } from "./pages/maps";
import { CardPage } from "./pages/cardPage";

// This must be a separate component since useNavigate has to be under a BrowserRouter component
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="" Component={Cards} />
            <Route path="card/:cardId" Component={CardPage} />
            <Route path="decks" Component={Decks} />
            <Route path="maps" Component={Maps} />
            <Route path="quiz" Component={Quiz} />
        </Routes>
    );
};
