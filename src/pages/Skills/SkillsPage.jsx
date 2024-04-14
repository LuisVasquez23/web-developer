const SkillsPage = () => {
  return (
    <div className="section container skill-section animate__animated animate__fadeIn">
      <h3 className="section-title text-end">SKILLS</h3>
      <div className="container skill-container">
        <div className="skill">
          <div className="skill-title">🌐 Web Development</div>
          <div className="skill-img">
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5"
            />
            <img
              src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS"
            />
            <img
              src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
              alt="JavaScript"
            />
            <img
              src="https://img.shields.io/badge/AJAX-1572B6?style=for-the-badge&logo=ajax&logoColor=white"
              alt="AJAX"
            />
          </div>

          <div className="skill-img">
            <img
              src="https://img.shields.io/badge/ASP.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white"
              alt="ASP.NET"
            />
            <img
              src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
              alt="jQuery"
            />
          </div>

          <div className="skill-img">
            <img
              src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
              alt="PHP"
            />
            <img
              src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"
              alt="Laravel"
            />
            <img
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="Bootstrap"
            />
          </div>

          <div className="skill-img">
            <img
              src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white"
              alt="Spring Boot"
            />
          </div>

          <div className="skill-title">🗄️ Databases</div>
          <div className="skill-img">
            <img
              src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
            />
            <img
              src="https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white"
              alt="SQL Server"
            />
          </div>
          <div className="skill-title">⚙️ Version Control & Tools</div>
          <div className="skill-img">
            <img
              src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
              alt="Git"
            />
            <img
              src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
            />
            <img
              src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"
              alt="Markdown"
            />
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">👤 Soft Skills</div>
          <div className="skill-description row">
            <p className="bg-yellow p-1 rounded text-dark">
              🗣️ Communication skills
            </p>
            <p className="bg-green p-1 rounded text-dark">🤝 Teamwork</p>
            <p className="bg-primary text-white p-1 rounded text-dark">
              🧩 Problem-solving
            </p>
            <p className="border p-1 rounded">❤️ Empathy</p>
            <p className="p-1 rounded bg-warning text-dark">
              ⚔️ Conflict resolution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
