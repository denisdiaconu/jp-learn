import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game/:id" exact component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
