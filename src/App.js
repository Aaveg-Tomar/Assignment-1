import Home  from "./component/Home";
import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Summary from "./component/Summary";

export const UserContext = createContext();

function App() {

  const [shows, setShows] = useState([]);

  return (
     <UserContext.Provider value={[shows , setShows]}>
       <Router>
        <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/summary/:showId" Component={Summary}/>
        </Routes>
      </Router>

     </UserContext.Provider>

   
  );
}

export default App;
