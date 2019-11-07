import Wordmark from '../components/Wordmark'
import SnowflakeApp from '../components/SnowflakeApp'
import "../styles/index.css"

const data = { 
  LASTNAME: '',
  FIRSTNAME: 'Engineering Project Owner',
  MOBILE: 3,
  FRONTEND: 3,
  SYSTEME: 3,
  BACKEND: 3,
  PROJECT_MANAGEMENT: 3,
  COMMUNICATION: 2,
  CRAFT: 0,
  INITIATIVE: 3,
  CAREER_DEVELOPMENT: 0,
  ORG_DESIGN: 0,
  WELLBEING: 0,
  ACCOMPLISHMENT: 0,
  MENTORSHIP: 0,
  EVANGELISME: 0,
  RECRUTEMENT: 0,
  CULTURE: 0
}

const Index = props => (
  <main>
      <div style={{margin: '19px auto 0', width: 142}}>
        <Wordmark />
      </div>
      <h1>{data.FIRSTNAME} {data.LASTNAME}</h1>
      <h2>Missions</h2>
      <p className="description">
      Le engineering project owner est responsable du suivi d’un projet au sein d’une swarm, 
      il lead les processus techniques et est le référent technique interne et externe des projets qui lui sont confiés. 
      Il assure le lien entre la gestion fonctionnelle et technique en collaborant avec toutes les parties prenantes d’un projet. 
      Enfin il est le référent externe des sujets dont il a la charge.
      </p>

      <ul>
        <li>S’assurer que le backlog d’un projet est maintenu et estimé</li>
        <li>Participer et organiser les specs techniques</li>
        <li>Suivre le projet dans toutes les phases du build</li>
        <li>S’assurer que les recettes soient bien décrites et réalisées</li>
        <li>Mener à bien le delivery du projet</li>
      </ul>
    <hr />
    <div>
      <h2>Niveaux Attendus</h2>
      <SnowflakeApp data={data} />
    </div>
  </main>
);

export default Index;
