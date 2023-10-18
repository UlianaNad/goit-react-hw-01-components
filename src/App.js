import user from './assets/user.json'
import {Profile} from './components/Profile'


function App() {
  return (
    <div>
      <Profile user={user}/>
    </div>
  );
};

export default App;