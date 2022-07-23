import React from "react";
import User from "./components/User";
import Admin from "./components/Admin";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<User />} />
        <Route exact path='/admin' element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
