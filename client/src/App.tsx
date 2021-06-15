import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/Home"

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
        <Switch>
          {/* <Route path="/example" component={ExampleComponent} /> */}
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
