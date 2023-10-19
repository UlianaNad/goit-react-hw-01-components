import { FriendsListItem } from './FriendsListItem';
export const FriendsList = ({ friends }) => {

    return (
    <ul className="friend-list">
      {friends.map(({ id, name, isOnline, avatar }) => (
        
        <FriendsListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
)
}
