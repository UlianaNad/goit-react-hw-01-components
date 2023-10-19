import { StyledLi, StyledName } from "./FriendsListItem.styled";

export const FriendsListItem = ({ avatar, name, isOnline, id }) => (
  
  <StyledLi key={id}>
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <StyledName>{name}</StyledName>
  </StyledLi>
);
