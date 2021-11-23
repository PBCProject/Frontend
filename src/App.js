import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';

import 'bootswatch/dist/darkly/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
