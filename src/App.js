import "./App.css";
import { MyProvider } from "./Context/Provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";

function App() {
  return (
    <div className='App'>
      <MyProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={HomeView} />
          </Switch>
        </Router>
      </MyProvider>
    </div>
  );
}

export default App;
