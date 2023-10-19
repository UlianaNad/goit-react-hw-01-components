import { StyledSection, StyledUl } from "./Statistics.styled";
import PropTypes from 'prop-types'; 

export const Statistics = data => {
  const {title, stats } = data;
  return (
    <StyledSection>
      <h2 className="title">{title}</h2>

      <StyledUl>
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}-</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </StyledUl>
    </StyledSection>
  );
};


Statistics.protoTypes = {
  data: PropTypes.shape({
    title:PropTypes.string,
  })
}