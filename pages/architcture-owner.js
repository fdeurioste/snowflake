import Wordmark from '../components/Wordmark'
import SnowflakeApp from '../components/SnowflakeApp'
import "../styles/index.css"

const data = { 
  LASTNAME: '',
  FIRSTNAME: 'Architecture Owner',
  MOBILE: 4,
  FRONTEND: 4,
  SYSTEME: 2,
  BACKEND: 4,
  PROJECT_MANAGEMENT: 2,
  COMMUNICATION: 4,
  CRAFT: 4,
  INITIATIVE: 3,
  CAREER_DEVELOPMENT: 0,
  ORG_DESIGN: 0,
  WELLBEING: 0,
  ACCOMPLISHMENT: 0,
  MENTORSHIP: 2,
  EVANGELISME: 0,
  RECRUTEMENT: 0,
  CULTURE: 1
}

const Index = props => (
  <main>
      <div style={{margin: '19px auto 0', width: 142}}>
        <Wordmark />
      </div>
      <h1>{data.FIRSTNAME} {data.LASTNAME}</h1>
      <h2>Missions</h2>
      <p className="description">
      L’ architecture owner est responsable des décisions architecturales de son domaine
       et facilite la création et l'évolution de la conception de la solution.
      </p>
      <ul>
        <li>Guider la création et l'évolution de l'architecture du domaine ou de l’application dont il a la charge</li>
        <li>Travailler en étroite collaboration avec les autres architecture owners, pour comprendre et faire évoluer l'orientation 
          et les normes architecturales globales</li>
        <li>S'assurer que l'équipe respecte la direction architecturale et les normes d'iAdvize</li>
        <li>Travailler à rendre la solution facile à maintenir en encourageant une bonne conception et un refactoring pour minimiser la dette technique.</li>
        <li>S'assurer que la solution est intégrée et testée sur une base régulière</li>
        <li>Envisager et accompagner l'architecture au début des projets et mettre en évidence les exigences 
  initiales en l’alignant sur des visions long terme</li>
      </ul>
    <hr />
    <div>
      <h2>Minimum Requis</h2>
      <SnowflakeApp data={data} />
    </div>
  </main>
);

export default Index;
