import TextEditor from './TextEditor'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
           <Redirect to={`/document/${uuidV4()}`}></Redirect>
        </Route>
        <Route path="/document/:id">
        <TextEditor/>
          </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
