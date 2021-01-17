import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/projects">
					{/* <Projects /> */}
				</Route>
				<Route path="/users">
					{/* <Users /> */}
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
