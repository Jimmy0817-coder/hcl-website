import { Route, Switch } from "wouter";
import Home from "./Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/website/new-web-mobile/career.htm"} component={Home} />
      {/* 因為 NotFound 頁面都唔見咗，暫時全部錯誤網址都指返去首頁先 */}
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
