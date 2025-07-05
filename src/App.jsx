
import './App.css'
import HEI_logo from './assets/HEI_logo.png'
import SliderAuto from "./components/SliderAuto";
import TeamSlide from "./components/TeamSlide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import bg_2 from './assets/HEI_4.png';
import debouche from './assets/debouche.png'
import Cybersecu from './assets/Cybersecu.png'
import IA from './assets/IA.png'
import Logicielle from './assets/Logicielle.png'
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
          <li className={"bg-yellow-500 px-4 py-1.5 rounded-sm font-medium hover:text-blue-950"}><a href="https://admin.hei.school/login">INTRANET</a></li>
        </ul>
      </nav>
      <section>
        <SliderAuto />
      </section>
        <section className={"flex flex-row max-w-6xl mx-auto gap-20"}>
            <div className={"w-1/2 flex justify-end items-center"}>
                <img src={bg_2} alt="" className={"object-cover"} />
            </div>
            <div className={"w-1/2 flex flex-col justify-center gap-12 text-lg text-blue-950 py-20"}>
                <h1 className={"text-5xl font-semibold"}>A propos de nous</h1>
                <div className={"flex flex-col gap-5"}>
                    <header className={"flex flex-row items-center gap-3"}>
                        <FontAwesomeIcon icon={faGraduationCap} className={"text-yellow-600 text-5xl"} />
                        <h2 className={"text-2xl font-bold"}>+3ans</h2>
                    </header>
                    <p>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de
                        Madagascar et du monde entier.</p>
                </div>
                <div className={"flex flex-col gap-5"}>
                    <header className={"flex flex-row items-center gap-3"}>
                        <FontAwesomeIcon icon={faUsers} className={"text-yellow-600 text-5xl"}/>
                        <h2 className={"text-2xl font-bold"}>+250 etutiants</h2>
                    </header>
                    <p>Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.</p>
                </div>
                <div className={"flex flex-col gap-5"}>
                    <header className={"flex flex-row items-center gap-3"}>
                        <FontAwesomeIcon icon={faMedal} className={"text-yellow-600 text-5xl"}/>
                        <h2 className={"text-2xl font-bold"}>Notre mission</h2>
                    </header>
                    <p>Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.</p>
                </div>
            </div>

        </section>
        <section className={"bg-blue-400 flex flex-col items-center text-center text-white text-lg gap-10 py-10"}>
            <div className={"max-w-6xl flex flex-col gap-5"}>
                <h1 className={"text-5xl"}>L'equipe pedagogique</h1>
                <p>Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.</p>
            </div>
            <TeamSlide />
        </section>
        <section className={"flex flex-row max-w-6xl mx-auto gap-20 my-15"}>
            <div className={"w-1/2 flex flex-col justify-center text-blue-950 gap-5 text-lg"}>
                <h2 className={"text-5xl font-bold"}>Quelques débouchés</h2>
                <p className={"mb-5"}>Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de
                    la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers
                    du présent, des métiers du futur…</p>
                <p>Développeur back end, développeur front end, développeurs mobile, chefs de projet,
                    exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI,
                    administrateur système et réseau, développeur de sécurité…</p>
            </div>
            <img src={debouche} alt="" className={"w-[460px]"} />
        </section>
        <section className={"bg-gray-100 text-blue-950 flex flex-col items-center justify-between gap-10 py-20"}>
            <h2 className={"text-5xl font-bold"}>Domaines</h2>
            <p className={"text-lg"}>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
            <div className={"flex flex-row gap-10"}>
                <div className={"bg-white text-yellow-600 text-lg w-90 flex flex-col items-center text-center px-2.5 py-2.5 gap-2.5 rounded-2xl"}>
                    <img src={Cybersecu} alt="" className={"object-cover w-40"} />
                    <h3>Cloud et cybersecurite</h3>
                    <p className={"text-blue-950 mb-5 px-2.5"}>
                        Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore,
                        devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces.
                        Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.
                    </p>
                </div>
                <div className={"bg-white text-yellow-600 text-lg w-90 flex flex-col items-center text-center px-2.5 py-2.5 gap-2.5 rounded-2xl"}>
                    <img src={IA} alt="" className={"object-cover w-40"} />
                    <h3>Intelligence artificielle</h3>
                    <p className={"text-blue-950 mb-5 px-2.5"}>
                        Le monde de la reconnaissance faciale ou la détection
                        d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier,
                        cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.
                    </p>
                </div>
                <div className={"bg-white text-yellow-600 text-lg w-90 flex flex-col items-center text-center px-2.5 py-2.5 gap-2.5 rounded-2xl"}>
                    <img src={Logicielle} alt="" className={"object-cover w-40"} />
                    <h3>Ingénierie logicielle</h3>
                    <p className={"text-blue-950 mb-5 px-2.5"}>
                        Apprenez les principes de la conception ou le développement de programmes et
                        d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation,
                        vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises
                        pour leurs besoins numériques.
                    </p>
                </div>
            </div>
        </section>
        <section className={"bg-blue-400 flex flex-col justify-center items-center gap-5 text-white py-10 text-lg"}>
            <h2 className={"text-5xl font-bold mb-5"}>Admission</h2>
            <p>Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :</p>
            <p>une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.</p>
            <div className={"flex flex-row text-blue-950 my-5"}>
                <div className={"flex flex-row bg-yellow-200 w-100 h-60 gap-3 p-4"}>
                    <div className={"flex flex-col gap-3"}>
                        <h3 className={"text-6xl text-white font-bold"}>01</h3>
                        <p><strong>Depot de dossiers : </strong>pour les bacheliers de toutes series sans limite d'age</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className={"text-white text-5xl self-center"} />
                </div>
                <div className={"flex flex-row bg-yellow-300 w-100 h-60 gap-3 p-4"}>
                    <div className={"flex flex-col gap-3"}>
                        <h3 className={"text-6xl text-white font-bold"}>02</h3>
                        <p><strong>Test de niveau : </strong>composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className={"text-white text-5xl self-center"} />
                </div>
                <div className={"flex flex-row bg-yellow-400 w-100 h-60 p-4"}>
                    <div className={"flex flex-col gap-3"}>
                        <h3 className={"text-6xl text-white font-bold"}>03</h3>
                        <p><strong>Inscription définitive </strong>(si test réussi)</p>
                    </div>
                </div>
            </div>
            <div className={"flex gap-10 font-semibold text-xl"}>
                <button className={"border-white border-2 p-2 hover:bg-blue-950 hover:border-none transition-colors duration-400 cursor-pointer"}><a href="https://hei.school/inscription/">Inscrivez-vous ici</a></button>
                <button className={"bg-blue-950 p-2 hover:bg-white hover:text-blue-950 transition-colors duration-400 cursor-pointer"}><a href="https://drive.google.com/drive/folders/1saqFZ9ZWkQ-QHZheOvY8nAzIBRy0MkA0">Resultat conncours</a></button>
            </div>
        </section>

      
      
      
    </>
  )
}

export default App
