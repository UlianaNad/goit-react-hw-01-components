import { Statistics } from 'components/Statistics/Statistics';
import user from './assets/user.json'
import data from './assets/data.json'
import friends from './assets/friends.json';
import {Profile} from './components/Profile/Profile';
import { FriendsList } from 'components/FriendsList/FriendsList';

import 'modern-normalize';


function App() {
  return (
    <div>
      <Profile user={user}/>
      <Statistics title="Upload stats" stats={data}/>
      <FriendsList friends={friends} />
    </div>
  );
};

export default App;