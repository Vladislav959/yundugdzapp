import './animated.css'
import styles from './index.module.css'
import logo from './gdzlogo.svg'
import Books from './Books'
import Book from './Book'
import Task from './Task'
import Training from './Training'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './Home'
function App() {
  return (
    <>
    {window.localStorage.getItem("class") ? 
  <Router>
    <div className={styles.header}>
      <Link to="/"><img src={logo}/></Link>
    </div>
    <main>
      <Routes>

        <Route exact element={<Home/>} path="/"/>
      <Route element={<Books/>} path="/books/:url/*"/>
        
      <Route element={<Book/>} path="/book/:url/*"/>
      
      <Route element={<Task/>} path="/task/:url/*"/>
      </Routes>
      <footer style={{padding:20}}>
        <p style={{textAlign:'center'}}>Владислав Губарев, {new Date().getFullYear()}.</p>
      </footer>
      </main>
    </Router>

    : <main style={{marginTop:60}}><Training/></main>}
  
    </>
  );
}

export default App;
