import { StyledUlWrapper } from './FriendsList.styled';
import { FriendsListItem } from './FriendsListItem/FriendsListItem';


export const FriendsList = ({ friends }) => {

    return (
    <StyledUlWrapper>
      {friends.map(({ id, name, isOnline, avatar }) => (
        
        <FriendsListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </StyledUlWrapper>
)
}


