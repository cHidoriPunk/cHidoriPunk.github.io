import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAward, faBeer, faBirthdayCake, faBriefcase, faEnvelope, faMapMarkerAlt, faMobileAlt, faPrint, faTrophy } from '@fortawesome/free-solid-svg-icons';

// TODO:
// add accessibility menu
// add darkmode switcher
// add hobbies

function App() {
  const printCVPage = () => {
    window.print();
  }
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
              <div className="info-row address">
                <span className="icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-lg" />
                </span> Hertzel 49, Tirat Carmel
              </div>
              <div className="info-row phone">
                <span className="icon">
                  <FontAwesomeIcon icon={faMobileAlt} className="fa-lg" />
                </span>
                <a href="tel:+972544697419" target="_blank" rel="noopener noreferrer">+972544697419</a>
              </div>
              <div className="info-row email">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
                </span> <a href="mailto:dkalaora@gmail.com" target="_blank" rel="noopener noreferrer">dkalaora@gmail.com</a>
              </div>
              <div className="info-row date-of-birth">
                <span className="icon">
                  <FontAwesomeIcon icon={faBirthdayCake} className="fa-lg" />
                </span> 02/01/1983
              </div>
              <div className="info-row social-link social-twitter">
                <span className="icon">
                  <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
                </span> <a href="https://twitter.com/DanielKalaora" target="_blank"
                  rel="noreferrer">twitter.com/DanielKalaora</a>
              </div>
              <div className="info-row social-link social-facebook">
                <span className="icon">
                  <FontAwesomeIcon icon={faFacebook} className="fa-lg" />
                </span> <a href="https://facebook.com/daniel.kalaora" target="_blank"
                  rel="noreferrer">facebook.com/daniel.kalaora</a>
              </div>
              <div className="info-row social-link social-linkedin">
                <span className="icon">
                  <FontAwesomeIcon icon={faLinkedinIn} className="fa-lg" />
                </span> <a href="https://linkedin.com/in/KalaoraDaniel" target="_blank"
                  rel="noreferrer">linkedin.com/in/KalaoraDaniel</a>
              </div>
              <div className="info-row social-link social-github">
                <span className="icon">
                  <FontAwesomeIcon icon={faGithub} className="fa-lg" />
                </span> <a href="https://github.com/cHidoriPunk" target="_blank"
                  rel="noreferrer">github.com/cHidoriPunk</a>
              </div>
              <p className="lead"><strong>TLDR;</strong> An experienced Web developer with motivation &amp; drive, a curious autodidact &amp; a team player.
              </p>
            </section>
            <section className="timeline">
              <div className="page-break"></div>
              <section className="timeline-segment experience">
                <article className="timeline-item">
                  <div className="timeline-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <h2>Experience</h2>
                  <div className="timeline-content">
                    <span className="timeline-dot"></span>
                    <h4>Front End Web Developer, R&amp;D design team.</h4>
                    <h5><em>Plus500 <small>(2018 - present day)</small></em></h5>
                    <p>Working with a team of designer/developers that are responsible for Plus500's products such as: main
                      website, affiliates website, web trader, Native applications (iOS, Android), email design implmentation (email
                      client
                      compatability) &amp; inner applications that are used by other teams</p>
                    <p>I've helped maintaing an email builder interface that a content team used to build emails &amp; export their markup
                      into localization.
                      I was also in charge of <a href="https://www.plus500.co.uk" target="_blank" rel="noreferrer">Plus500
                        website</a> addded
                      regulatory changes, product managers requests, covered front to back code (CSHTML, SCSS, .NET C#) in a MVC environment &amp; by doing so I've managed to save another team time &amp; resources </p>
                    <p>Learned how to handle NPM packages &amp; NodeJS, implemented Gulp script which took care of SASS compliation, JS
                      minification &amp; bundling,
                      perfected website load time using Google's lighthouse auditing tool: font load delivery, images lazy load
                      optimization of styles (with component driven design). worked with Bootstrap 3-5 &amp; Zurb's Foundation CSS frameworks.
                    </p>
                    <p>Built chrome extentions that helped me complete tedious tasks like:</p>
                    <ul>
                      <li>A full Email design from top to bottom with partials, helped be visualize all email aspects</li>
                      <li>A "Search &amp; Replace" tool that helped me replace strings in 32 languages &amp; save the output to CSV file which later I could import to localization</li>
                    </ul>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <span className="timeline-dot"></span>
                    <h4>Full-Stack Web Developer</h4>
                    <h5><em>Marvilix, development team. <small>(2016 - 2017)</small></em></h5>
                    <p>I've been in charge of WordPress websites (installations, maintenance, optimization, customization to
                      both
                      frontend &amp; backend),
                      Lead the development of an interactive accessibility tool for people with disabilities.
                      Helped with building of web applications &amp; worked with various API's, took part in creating ERP
                      interfaces.
                      Optimized websites with the recommendations of google PAGE INSIGHTS (such as: caching, minification,
                      content delivery).</p>
                    <p>Learned AngularJS, gained more PHP &amp; MYSQL experience. Started working with GIT &amp; Amazon's AWS.</p>
                  </div>
                </article>

                <div className="page-break"></div>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <span className="timeline-dot"></span>
                    <h4>Front End Developer</h4>
                    <h5><em>Microline systems, web developers team. <small>(11/2014 - 11/2016)</small></em></h5>
                    <p>Created a unique accessibility tool for the company which covered 65% of WCGA AA requirements.
                      I was in charge of website innovation, required research on my part in UX/UI.
                      Helped implementing methods for Google Analytics Events, later on with Google's Tag Manager.
                      Implemented several jQuery galleries &amp; plugins, also wrote some of my own.
                      Customized the "Bsmart" application backend system for the client needs.</p>
                    <p>Learned working with Bootstrap, perfected JavaScript &amp; jQuery Skills.
                      Mainly worked with XSLT, HTML5, ASP, CSS, JavaScript &amp; jQuery.</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <span className="timeline-dot"></span>
                    <h4>Webmaster</h4>
                    <h5><em>Studio-Sparkle, Web design. <small>(2008 - 2014)</small></em></h5>
                    <p>Installation, maintenance &amp; customization of Drupal, Joomla &amp; WordPress sites.
                      Worked with Cpanel, Control Web Panel (opensource web panel), Plesk &amp; DirectAdmin.</p>
                    <p>Creation of landing pages.</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <span className="timeline-dot"></span>
                    <h4>Web designer</h4>
                    <h5><em>Freelance. <small>(2010 - 2013)</small></em></h5>
                    <p>Worked as a freelance web developer, mainly created static HTML/CSS sites &amp; landing pages.</p>
                  </div>
                </article>

              </section>
              <div className="page-break"></div>
              <section className="timeline-segment education">

                <article className="timeline-item">
                  <div className="timeline-icon">
                    <FontAwesomeIcon icon={faAward} className="fa-award" />
                  </div>
                  <h2>Education</h2>
                  <div className="timeline-content">
                    <span className="timeline-dot"></span>
                    <h6>IT-Window, Java / Android development, Course Diploma</h6>
                    <p>Learned the basic of JAVA (OOP, Threading), Basics of Android Development.
                      Created an App for course completion.</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <span className="timeline-dot"></span>
                    <h6>Appleseeds Academy, web developer, Course Diploma.</h6>
                    <p>Learned HTML5, CSS3 &amp; the basics of JavaScript, jQuery, PHP, MySQL.</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <span className="timeline-dot"></span>
                    <h6>Tiltan College, web design, Participance Diploma.</h6>
                    <p>Learned the basics of web development, HTML, CSS, Photoshop, Illustrator, Flash &amp; Indesign.</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <span className="timeline-dot"></span>
                    <h6>Shifman High School, Geography, Biology, English, Graduated.</h6>
                    <p>Theoretical studies.</p>
                  </div>
                </article>

              </section>
              <div className="page-break"></div>
              <section className="timeline-segment skills">
                <header className="skills-title">
                  <div className="timeline-icon">
                    <FontAwesomeIcon icon={faBeer} className="fa-beer" />
                  </div>
                  <h2>Skills</h2>
                </header>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <p>HTML5</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <p>CSS3</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <p>Vanilla JavaScript (ES2015, ES6), jQuery, jQueryUI</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <p>PHP, .NET, C#</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <p>NPM, NodeJS</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <p>GIT, SVN</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <p>MYSQL</p>
                  </div>
                </article>

                <article className="timeline-item">
                  <div className="timeline-content">
                    <p>Java, Android Development</p>
                  </div>
                </article>

              </section>
            </section>

          </main>
        </div>
      </div>
      <button className="printBtn hide-for-print" onClick={ printCVPage }>
        <FontAwesomeIcon icon={faPrint} className="fa-print" />
      </button>
    </div>
  );
}

export default App;