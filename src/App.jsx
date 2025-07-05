
import './App.css'
import HEI_logo from './assets/HEI_logo.png'
import SliderAuto from "./components/SliderAuto";
function App() {
 

  return (
    <>

      <nav className={"bg-blue-950 text-white font-bold text-lg flex justify-evenly py-4.5"}>
        <img src={HEI_logo} alt="HEI logo" className={"w-22.5 h-auto"} />
        <ul className={"flex flex-row gap-8 items-center"}>
          <li><a href="" className={"text-yellow-600"}>ACCUEIL</a></li>
          <li><a href="" className={"hover:text-yellow-600"}>ACTUALITES</a></li>
          <li><a href="" className={"hover:text-yellow-600"}>BOURSE D'ETUDES</a></li>
          <li><a href="" className={"hover:text-yellow-600"}>INSCRIPTION</a></li>
          <li className={"bg-yellow-500 px-4 py-1.5 rounded-sm font-medium hover:text-blue-950"}><a href="">INTRANET</a></li>
        </ul>
      </nav>
      <section>
        <SliderAuto />
      </section>
      <section>
        <h2> A propos de nous </h2>
        <i> +3ans </i>
        <p>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de
        Madagascar et du monde entier.</p>
        <i>+250 etudiants</i>
        <p>Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler 
        de la “grande famille HEI”.</p>
        <i>Notre mission</i>
        <p>Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et 
        le développement de Madagascar.</p>
      </section>
      <section>
        <h5> L'équipe pédagogique</h5>
        <p>Notre équipe pédagogique se compose d’experts nationaux et internationaux de 
        l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, 
        elle a été soigneusement sélectionnée.</p>
        <div>
          <img src="" alt="" />
          <h3>MIrado RAFENOMAHENINTSOA</h3>
          <p>Data and Business Intelligence Specialist 5+ </p>
        </div>
        <div>
          <img src="" alt="" />          
            <h4> Dr Lou Maurica</h4>
            <p>  Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI
            </p>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Julien RAJERISON</h4>
          <p>Lead Développeur | Fondateur de l’association Techzara Madagascar </p>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Ryan ANDRIAMAHERY</h4>
          <p>Développeur back end | Cofondateur et Directeur des opérations de HEI </p>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Jean Aimé Maxa</h4>
          <p>Responsable technique cybersécurité chez CES France Continental (Toulouse – France) </p>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Parison Ravalomanda</h4>
          <p>Ingénieur en informatique |  Ingénieur logiciel chez Google (Londres – UK) </p>
        </div>
        <div>
          <img src="" alt="" />
          <h5> Yannick Raharijaona</h5>
          <p>Responsable technique ML chez Rocket Science (Ottawa – Canada) </p>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Dre Tahina Ralitera</h4>
          <p>Docteure-Ingénieure, CNRS France | Prix L’Oréal-UNESCO pour les Femmes en Science (2017) </p>
        </div>   
        <h5>Quelques débouchés</h5>
        <p>Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de 
          la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers 
          du présent, des métiers du futur…</p>
        <p>Développeur back end, développeur front end, développeurs mobile, chefs de projet, 
          exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, 
          administrateur système et réseau, développeur de sécurité…</p>
          <i>icone</i>
          <i>icone</i>
          <i>icone</i>
          <i>icone</i>
          <i>icone</i>
          <i>icone</i>
          <i>icone</i>
          <img src="" alt="" />
      </section>
      <section>
        <h5>Domaines</h5>
        <p>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
        <div>
          <i>icone</i>
          <h4>Cloud et cybersécurité</h4>
          <p>Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, 
            devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. 
            Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.</p>
        </div>
        <div>
          <i>icone</i>
          <h4>Intelligence artificielle</h4>
          <p>Le monde de la reconnaissance faciale ou la détection 
            d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, 
            cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.</p>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Ingénierie logicielle</h4>
          <p>Apprenez les principes de la conception ou le développement de programmes et 
            d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, 
            vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises 
            pour leurs besoins numériques.</p>
        </div>
      </section>

      
      
      
    </>
  )
}

export default App
