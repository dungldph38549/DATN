import{ Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { routers } from './router/index.js'
import HomePages from "./pages/HomePages/HomePages.tsx";


function App() {


  return (
    <div>
        <Router>
          <Routes>
            {routers.map((route) => {
              const Page = route.page;
              return (
                
              <Route path={route.path} element={<Page/>}/>
              )
            })}
              <Route path='/' element={<HomePages/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
