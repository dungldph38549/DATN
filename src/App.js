import{ Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { routers } from './router/index.js'
import Hearder from './components/Headers/Hearder.tsx';


function App() {


  return (
    <div>
          
      <h1 className="text-5xl font-bold text-red-500 underline">
        Nếu thấy chữ đỏ nền vàng → Tailwind đã hoạt động!
      </h1>
      <Hearder />
        <Router>
          <Routes>
            {routers.map((route) => {
              const Page = route.page;
              return (
              <Route path={route.path} element={<Page/>}/>
              )
            })}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
