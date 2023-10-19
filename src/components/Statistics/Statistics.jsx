import { StyledSection } from "./Statistics.styled";

export const Statistics = data => {
  const {title, stats } = data;
  return (
    <StyledSection>
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </StyledSection>
  );
};
