import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Checkout from "./pages/checkout";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/checkout' component={Checkout} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
