

import './App.css';
import Bavbar from './components/Bavbar';
import Productlist from './components/Productlist';
import ProductContextProvider from './context/Productcontext';

function App() {
  return (<>
  
    <Bavbar/>
    <div className="">
      <div className="table-responsive">
        <div className="table-wrapper">
          <ProductContextProvider>

            <Productlist />
          </ProductContextProvider>
        </div>
      </div >
    </div>
    </>


  );
}

export default App;
