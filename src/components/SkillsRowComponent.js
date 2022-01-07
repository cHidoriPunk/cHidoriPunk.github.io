import PropTypes from 'prop-types';

const SkillsRowComponent = ({skillsRow}) => (
  <article className="timeline-item" key={skillsRow.key}>
    <div className="timeline-content">
      <p>{skillsRow.name}</p>
    </div>
  </article>
);

SkillsRowComponent.propTypes = {
  skillsRow: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string
  })
}

export default SkillsRowComponent;