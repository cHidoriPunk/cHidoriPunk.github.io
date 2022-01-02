import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAward, faBeer, faBirthdayCake, faBriefcase, faEnvelope, faMapMarkerAlt, faMobileAlt, faPrint } from '@fortawesome/free-solid-svg-icons';
import infoRowsData from './data/info-rows.json';
import experienceRowsData from './data/experience-rows.json';
import educationRowsData from './data/education-rows.json';
import skillsRowsData from './data/skills-rows.json';

// TODO:
// add accessibility menu
// add darkmode switcher
// add hobbies

const printCVPage = () => { window.print(); }
const contactInfoIcons = [faFacebook, faGithub, faLinkedinIn, faTwitter, faAward, faBeer, faBirthdayCake, faBriefcase, faEnvelope, faMapMarkerAlt, faMobileAlt, faPrint]
const fontIcon = (infoRow) => {
  return contactInfoIcons.find(icon => infoRow.icon === icon.iconName);
}

function App() {
  return (
    <div className="page-wrapper">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <header className="main-header">
            <h1>Daniel Kalaora</h1>
            <h2>Front End Web Developer</h2>
          </header>
          <main className="main-section">
            <section className="info">
              {infoRowsData.map((infoRow) => (
                <div className="info-row" key={infoRow.key}>
                  <span className="icon">
                    <FontAwesomeIcon icon={fontIcon(infoRow)} className="fa-lg" />
                  </span>
                  <div dangerouslySetInnerHTML={{ __html: infoRow.content }} />
                </div>
              ))}
              <p className="lead"><strong>TLDR;</strong> An experienced Web developer with motivation &amp; drive, a curious autodidact &amp; a team player.
              </p>
            </section>
            <section className="timeline">
              <section className="timeline-segment experience">
                <header className="timeline-title">
                  <div className="timeline-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <h2>Experience</h2>
                </header>
                {experienceRowsData.map((experienceRow) => (
                  <article className="timeline-item" key={experienceRow.key}>
                    <div className="timeline-content">
                      <span className="timeline-dot"></span>
                      <h4 dangerouslySetInnerHTML={{ __html: experienceRow.jobTitle }} />
                      <h5 dangerouslySetInnerHTML={{ __html: experienceRow.jobDates }} />
                      <div dangerouslySetInnerHTML={{ __html: experienceRow.jobDescription }} />
                    </div>
                  </article>
                ))}
              </section>
              <section className="timeline-segment education">
                <header className="timeline-title">
                  <div className="timeline-icon">
                    <FontAwesomeIcon icon={faAward} className="fa-award" />
                  </div>
                  <h2>Education</h2>
                </header>
                {educationRowsData.map((education) => (
                  <article className="timeline-item" key={education.key}>
                    <div className="timeline-content">
                      <span className="timeline-dot"></span>
                      <h6 dangerouslySetInnerHTML={{ __html: education.courseTitle }} />
                      <div dangerouslySetInnerHTML={{ __html: education.courseDescription }} />
                    </div>
                  </article>
                ))}
              </section>
              <section className="timeline-segment skills">
                <header className="timeline-title">
                  <div className="timeline-icon">
                    <FontAwesomeIcon icon={faBeer} className="fa-beer" />
                  </div>
                  <h2>Skills</h2>
                </header>
                {skillsRowsData.map((skill) => (
                  <article className="timeline-item" key={skill.key}>
                    <div className="timeline-content">
                      <p>{skill.name}</p>
                    </div>
                  </article>
                ))}
              </section>
            </section>
          </main>
        </div>
      </div>
      <button className="printBtn hide-for-print" onClick={printCVPage}>
        <FontAwesomeIcon icon={faPrint} className="fa-print" />
      </button>
    </div>
  );
}

export default App;