import "./ExperiencePage.css";

const ExperiencePage = () => {
  return (
    <>
      <div className="section container skill-section animate__animated animate__fadeIn">
        <h3 className="section-title">WORK EXPERIENCE</h3>
        <div className="container skill-container">
          <div className="skill">
            <div className="skill-title">.NET Back-end developer</div>
            <div className="skill-company">
              <i className="bold">Integra International Services</i> -
              <span className="bold">May 2024 - Present</span>
            </div>
            <div className="skill-description pt-3">
              <p>
                ✅ Development and maintenance of functionalities for a web
                system using ASP .NET C# WebApi.
              </p>
              <p>✅ Bug fixing and integration of new functionalities.</p>
              <p>
                ✅ Adapting functionalities for new modules according to client
                requirements.
              </p>
              <p>✅ Integration of SOAP web services with .NET.</p>
              <p>
                ✅ Creating and managing background jobs using Hangfire for
                efficient task processing.
              </p>
              <p>
                ✅ Implementing message-based communication and task queuing
                with RabbitMQ to enhance system scalability and reliability.
              </p>
              <p>
                ✅ Efficient code management and versioning using Git under
                Scrum methodology.
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-title">.NET Developer</div>
            <div className="skill-company">
              <i className="bold">Creativa Consultores S.A.</i> -
              <span className="bold">Aug 2022 - Feb 2024</span>
            </div>
            <div className="skill-description pt-3">
              <p>
                ✅ Development and maintenance of functionalities for a web
                system using ASP .NET C# MVC.
              </p>
              <p>✅ Bug fixing and integration of new functionalities.</p>
              <p>
                ✅ Adapting functionalities for new modules according to client
                requirements.
              </p>
              <p>
                ✅ Designing and developing user interfaces using HTML, CSS, and
                JavaScript.
              </p>
              <p>
                ✅ Implementing dynamic interfaces using jQuery to display
                information interactively.
              </p>
              <p>✅ Creating and optimizing stored procedures in SQL Server.</p>
              <p>
                ✅ Efficient code management and versioning using GitLab under
                Scrum methodology.
              </p>
              <p>
                ✅ Experience in reporting using ClosedXML and RDLC for
                generating reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
