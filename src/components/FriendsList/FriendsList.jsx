import { StyledUlWrapper } from './FriendsList.styled';
import { FriendsListItem } from './FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types'; 

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


FriendsList.propTypes = {
  friends: PropTypes.array,
  avatar:PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
  
};