import './App.css';
import { Provider } from "react-redux"
import CakeContainer from './components/CakeContainer'
import CakeContainer2 from './components/CakeContainer2';
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import PostContainer from './components/PostContainer';
import UsersContainers from "./components/UsersContainers"
import ImagesContainer from './components/ImagesContainer';
import { store } from './redux/store'

function App() {
  return (
    <div className="App" style={{ border: "4px solid green" }}>
      <Provider store={store}>
        <CakeContainer></CakeContainer>
        <CakeContainer2></CakeContainer2>
        <HooksCakeContainer></HooksCakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <HooksIceCreamContainer></HooksIceCreamContainer>
        <PostContainer></PostContainer>
        <ImagesContainer></ImagesContainer>
        <UsersContainers></UsersContainers>
      </Provider>
    </div>
  );
}

export default App;
