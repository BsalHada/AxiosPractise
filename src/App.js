import LoginForm from "./components/form/LoginForm";
import NavBar from "./components/navBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from "./ui/formInput/FormInput";
import Card from "./components/card/Card";
import PractiseForm from "./components/practiseForm/PractiseForm";


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <LoginForm/>
    
      <div className="sample-container container d-flex justify-content-center align-items-center mt-5 mb-5 shadow p-5">
      <PractiseForm/>
      </div>
    </div>
  );
}

export default App;
