import 'bootswatch/dist/flatly/bootstrap.min.css';
import './assets/css/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppRoute } from './routes/AppRoute';

function App() {
	return <AppRoute />;
}

export default App;
