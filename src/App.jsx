import { Login } from "./components/Login/Login";
import { Footer } from "./components/Footer";
export default function App() {
    return (
        <div className="h-screen bg-yellow-100 flex flex-col justify-between">
            <Login />
            <Footer />
        </div>
    );
}
