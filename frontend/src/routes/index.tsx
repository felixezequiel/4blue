import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navigation } from '../global/navigation'
import { Home } from '../pages/home'
import { Manage } from '../pages/manage'

export const Routes = () => {
  return (
    <Router>
      <Navigation>
        <Switch>
          <Route exact path="/" render={ props => <Home { ...props }/> } />
          <Route exact path="/manage" render={ props => <Manage { ...props }/> } />
        </Switch>
      </Navigation>
    </Router>
  )
}