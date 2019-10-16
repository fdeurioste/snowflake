import Wordmark from '../components/Wordmark'
import SnowflakeApp from '../components/SnowflakeApp'
import "../styles/index.css"

const data = { 
  LASTNAME: '',
  FIRSTNAME: 'External Referent',
  MOBILE: 0,
  FRONTEND: 0,
  SYSTEME: 0,
  BACKEND: 0,
  PROJECT_MANAGEMENT: 2,
  COMMUNICATION: 3,
  CRAFT: 0,
  INITIATIVE: 2,
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
      <p className="description">L’ External Referent est l’interlocuteur direct de la swarm pour 
      les questions techniques simples qui arrivent de l’extérieur de swarm.
       Pour toutes questions relatives à des projets en cours il redirigera vers le technical project owner le cas échéant.</p>
    <ul>
      <li>Etre actif sur la room publique de la swarm afin de lire les questions qui peuvent y être posées</li>
      <li>Répondre aux questions simples rapidement</li>
      <li>Rediriger les interlocuteurs vers la bonne personne le cas échéant</li>
      <li>Etre l’interlocuteur privilégié du support</li>
      <li>Informer les External Referents des autres swarms des éléments importants et/ou impactants</li>
    </ul>
    <hr />
    <div>
      <h2>Minimum Requis</h2>
      <SnowflakeApp data={data} />
    </div>
  </main>
);

export default Index;
