import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="background-login">
//         <div id="card-title">
//           <h1>LOGIN</h1>
//           <p>Silahkan Login Terlebih Dahulu</p>
//         </div>
//       </div>
//       <div className="box-login">
//         <div className="box">
//           <form method="post" className="form">
//             <label>              <h2>Username</h2>
//               <input
//                 id="user-email"
//                 className="form-content"
//                 type="Email"
//                 name="Email"
//                 placeholder="M a s u k k a n  U s e r n a m e"
//                 autoComplete="on"
//                 required
//               />
//             </label>

//             <label>
//               <h2>Password</h2>
//               <input
//                 id="user-password"
//                 className="form-content"
//                 type="Password"
//                 name="Password"
//                 placeholder="M a s u k k a n  P a s s w o r d"
//                 autoComplete="on"
//                 required
//               />
//             </label>

//             <div id="button-login">
//               <button type="submit" id="submit">
//                 <a href="beranda.html">LOGIN</a>
//               </button>
//             </div>

//             <div id="button-login2">
//               <button type="submit" id="submit2">
//                 <a href="signup.html">Belum Punya Akun ?</a>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="background-login2"></div>
//     </div>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// pages 
import Home from './pages/Beranda';
import About from './pages/About';
import Contact from './pages/Contact';

// pages detail
import DetailContact from './detail-pages/DetailContact';
import "./css/style.css";

// import HelloWorld from "./HelloWorld";
function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Beranda">Beranda</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/contact/detail-contact">
          <DetailContact />
        </Route>
      </Switch>


    </Router>
  );
}

export default App;