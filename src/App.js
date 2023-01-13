import './App.css';
import Main from './pages/Main';
import Student from './pages/Student';
import Professor from './pages/Professor';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route {...{ path: '/', exact: true, render: () => <Main /> }} />
          <Route {...{ path: '/student', render: () => <Student /> }} />
          <Route
            {...{
              path: '/professor',
              render: () => <Professor />,
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
