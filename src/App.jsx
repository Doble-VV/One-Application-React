import "./App.css";
import Login from "./view/Login";

function App() {
  return (
    <>
      <div
        className="w-full h-screen bg-center"
        style={{ backgroundImage: "url('/src/images/fondo_login.jpg')" }}
      >
        <div className="flex items-center justify-center h-full">
          <Login></Login>
        </div>
      </div>
    </>
  );
}

export default App;
