import PropTypes from 'prop-types';

const EducationRowComponent = ({educationRow}) => (
  <article className="timeline-item" key={educationRow.key}>
    <div className="timeline-content">
      <span className="timeline-dot"></span>
      <h3 dangerouslySetInnerHTML={{ __html: educationRow.courseTitle }} />
      <div dangerouslySetInnerHTML={{ __html: educationRow.courseDescription }} />
    </div>
  </article>
);

EducationRowComponent.propTypes = {
  educationRow: PropTypes.shape({
    key: PropTypes.string,
    courseTitle: PropTypes.string,
    courseDescription: PropTypes.string
  })
}

export default EducationRowComponent;