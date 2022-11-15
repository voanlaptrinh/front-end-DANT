import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
         <ToastContainer />
      </BrowserRouter>
   </Provider>
)
