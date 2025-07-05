import './App.css'
import HEI_logo from './assets/HEI_logo.png'
import SliderAuto from "./components/SliderAuto";
import TeamSlide from "./components/TeamSlide";
import {faGraduationCap, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {faMedal} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import bg_2 from './assets/HEI_4.png';
import debouche from './assets/debouche.png'
import Cybersecu from './assets/Cybersecu.png'
import IA from './assets/IA.png'
import Logicielle from './assets/Logicielle.png'
import Programme from './assets/Programme.png'
import Programme_1 from './assets/Programme_1.jpg'
import Programme_2 from './assets/Programme_2.jpg'
import Programme_3 from './assets/Programme_3.jpg'
import Java from './assets/Java.png'
import JS from './assets/JS.png'
import TS from './assets/TS.png'
import C from './assets/C.png'
import Python from './assets/Python.png'
import Docker from './assets/Docker.png'
import Next from './assets/Next.png'
import Aws from './assets/Aws.png'
import Serverless from './assets/Serverless.png'
import React from './assets/React.png'
import Openapi from './assets/Openapi.png'
import Nexta from './assets/Nexta.png'
import PN from './assets/PN.png'
import Yooz from './assets/Yooz.png'
import Etech from './assets/Etech.png'
import Emit from './assets/Emit.png'
import Numer from './assets/Numer.png'
import BP from './assets/BP.png'
import YIF from './assets/YIF.png'
import Kante from './assets/Kante.png'

function App() {


    return (
        <>

            <nav className={"bg-blue-950 text-white font-bold text-lg flex justify-evenly py-4.5"}>
                <img src={HEI_logo} alt="HEI logo" className={"w-22.5 h-auto"}/>
                <ul className={"flex flex-row gap-8 items-center"}>
                    <li><a href="" className={"text-yellow-600"}>ACCUEIL</a></li>
                    <li><a href="" className={"hover:text-yellow-600"}>ACTUALITES</a></li>
                    <li><a href="" className={"hover:text-yellow-600"}>BOURSE D'ETUDES</a></li>
                    <li><a href="" className={"hover:text-yellow-600"}>INSCRIPTION</a></li>
                    <li className={"bg-yellow-500 px-4 py-1.5 rounded-sm font-medium hover:text-blue-950"}><a
                        href="https://admin.hei.school/login">INTRANET</a></li>
                </ul>
            </nav>
            <section>
                <SliderAuto/>
            </section>
            <section className={"flex flex-row max-w-6xl mx-auto gap-20"}>
                <div className={"w-1/2 flex justify-end items-center"}>
                    <img src={bg_2} alt="Student pics" className={"object-cover"}/>
                </div>
                <div className={"w-1/2 flex flex-col justify-center gap-12 text-lg text-blue-950 py-20"}>
                    <h1 className={"text-5xl font-semibold"}>A propos de nous</h1>
                    <div className={"flex flex-col gap-5"}>
                        <header className={"flex flex-row items-center gap-3"}>
                            <FontAwesomeIcon icon={faGraduationCap} className={"text-yellow-600 text-5xl"}/>
                            <h2 className={"text-2xl font-bold"}>+3ans</h2>
                        </header>
                        <p>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous
                            sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de
                            Madagascar et du monde entier.</p>
                    </div>
                    <div className={"flex flex-col gap-5"}>
                        <header className={"flex flex-row items-center gap-3"}>
                            <FontAwesomeIcon icon={faUsers} className={"text-yellow-600 text-5xl"}/>
                            <h2 className={"text-2xl font-bold"}>+250 etutiants</h2>
                        </header>
                        <p>Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre
                            formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler
                            de la “grande famille HEI”.</p>
                    </div>
                    <div className={"flex flex-col gap-5"}>
                        <header className={"flex flex-row items-center gap-3"}>
                            <FontAwesomeIcon icon={faMedal} className={"text-yellow-600 text-5xl"}/>
                            <h2 className={"text-2xl font-bold"}>Notre mission</h2>
                        </header>
                        <p>Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme
                            l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur
                            employabilité et le développement de Madagascar.</p>
                    </div>
                </div>

            </section>
            <section className={"bg-blue-400 flex flex-col items-center text-center text-white text-lg gap-10 py-10"}>
                <div className={" flex flex-col gap-5"}>
                    <h1 className={"text-5xl"}>L'equipe pedagogique</h1>
                    <p>Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de
                        la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont
                        passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que
                        cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été
                        soigneusement sélectionnée.</p>
                </div>
                <TeamSlide/>
            </section>
            <section className={"flex flex-row max-w-6xl mx-auto gap-20 my-15"}>
                <div className={"w-1/2 flex flex-col justify-center text-blue-950 gap-5 text-lg"}>
                    <h2 className={"text-5xl font-bold"}>Quelques débouchés</h2>
                    <p className={"mb-5"}>Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir
                        les fondements de
                        la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs,
                        des métiers
                        du présent, des métiers du futur…</p>
                    <p>Développeur back end, développeur front end, développeurs mobile, chefs de projet,
                        exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur
                        organisationnel SSI,
                        administrateur système et réseau, développeur de sécurité…</p>
                </div>
                <img src={debouche} alt="Student pic" className={"w-[460px]"}/>
            </section>
            <section className={"bg-gray-100 text-blue-950 flex flex-col items-center justify-between gap-10 py-20"}>
                <h2 className={"text-5xl font-bold"}>Domaines</h2>
                <p className={"text-lg"}>Au cours de vos trois ans de formation, naviguez entre les domaines les plus
                    porteurs du numérique du présent et de l’avenir :</p>
                <div className={"flex flex-row gap-10"}>
                    <div
                        className={"bg-white text-yellow-600 text-lg w-90 flex flex-col items-center text-center px-2.5 py-2.5 gap-2.5 rounded-2xl"}>
                        <img src={Cybersecu} alt="Cybersecu" className={"object-cover w-40"}/>
                        <h3>Cloud et cybersecurite</h3>
                        <p className={"text-blue-950 mb-5 px-2.5"}>
                            Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS).
                            Ou encore,
                            devenez maître de la sécurisation des données en ligne ou des programmes et applications
                            contre les cybermenaces.
                            Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.
                        </p>
                    </div>
                    <div
                        className={"bg-white text-yellow-600 text-lg w-90 flex flex-col items-center text-center px-2.5 py-2.5 gap-2.5 rounded-2xl"}>
                        <img src={IA} alt="IA" className={"object-cover w-40"}/>
                        <h3>Intelligence artificielle</h3>
                        <p className={"text-blue-950 mb-5 px-2.5"}>
                            Le monde de la reconnaissance faciale ou la détection
                            d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier,
                            cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez
                            HEI.
                        </p>
                    </div>
                    <div
                        className={"bg-white text-yellow-600 text-lg w-90 flex flex-col items-center text-center px-2.5 py-2.5 gap-2.5 rounded-2xl"}>
                        <img src={Logicielle} alt="Logicielle" className={"object-cover w-40"}/>
                        <h3>Ingénierie logicielle</h3>
                        <p className={"text-blue-950 mb-5 px-2.5"}>
                            Apprenez les principes de la conception ou le développement de programmes et
                            d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre
                            formation,
                            vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des
                            particuliers ou des entreprises
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
                            <p><strong>Depot de dossiers : </strong>pour les bacheliers de toutes series sans limite
                                d'age</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className={"text-white text-5xl self-center"}/>
                    </div>
                    <div className={"flex flex-row bg-yellow-300 w-100 h-60 gap-3 p-4"}>
                        <div className={"flex flex-col gap-3"}>
                            <h3 className={"text-6xl text-white font-bold"}>02</h3>
                            <p><strong>Test de niveau : </strong>composé d’une épreuve de français niveau B2 et d’une
                                épreuve de mathématiques niveau Terminale D</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className={"text-white text-5xl self-center"}/>
                    </div>
                    <div className={"flex flex-row bg-yellow-400 w-100 h-60 p-4"}>
                        <div className={"flex flex-col gap-3"}>
                            <h3 className={"text-6xl text-white font-bold"}>03</h3>
                            <p><strong>Inscription définitive </strong>(si test réussi)</p>
                        </div>
                    </div>
                </div>
                <div className={"flex gap-10 font-semibold text-xl"}>
                    <button
                        className={"border-white border-2 p-2 hover:bg-blue-950 hover:border-blue-950 transition-colors duration-400 cursor-pointer"}>
                        <a href="https://hei.school/inscription/">Inscrivez-vous ici</a></button>
                    <button
                        className={"bg-blue-950 p-2 hover:bg-white hover:text-blue-950 transition-colors duration-400 cursor-pointer"}>
                        <a href="https://drive.google.com/drive/folders/1saqFZ9ZWkQ-QHZheOvY8nAzIBRy0MkA0">Resultat
                            conncours</a></button>
                </div>
            </section>
            <section className={"flex flex-col text-lg text-blue-950 max-w-6xl mx-auto justify-center py-10 gap-5"}>
                <div className={"flex flex-row items-center gap-5 py-10"}>
                    <img src={Programme} alt="Programme" className={"w-[460px] object-cover"}/>
                    <div className={"flex flex-col justify-start gap-10"}>
                        <h2 className={"text-5xl"}>Le programme pedagogique</h2>
                        <p>Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique
                            conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme
                            de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.</p>
                        <button
                            className={"w-fit font-bold p-2.5 border-3 border-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-400"}>
                            <a href="https://drive.google.com/file/d/1FdooEeAKPO5ucNKXMnyEBZ3RTTE80q7e/view">Notre
                                Programme</a></button>
                    </div>
                </div>
                <div className={"flex flex-row gap-5"}>
                    <div className={"flex flex-col font-bold w-1/4 h-[230px] bg-yellow-100 rounded-2xl p-5 gap-5"}>
                        <h3 className={"text-5xl text-yellow-600"}>25%</h3>
                        <p className={"text-xl"}>Apprentissage theorique en presentiel</p>
                    </div>
                    <div className={"flex flex-col font-bold w-1/4 h-[230px] bg-yellow-100 rounded-2xl p-5 gap-5"}>
                        <h3 className={"text-5xl text-yellow-600"}>25%</h3>
                        <p className={"text-xl"}>Apprentissage theorique en presentiel</p>
                    </div>
                    <div className={"flex flex-col font-bold w-1/4 h-[230px] bg-yellow-100 rounded-2xl p-5 gap-5"}>
                        <h3 className={"text-5xl text-yellow-600"}>25%</h3>
                        <p className={"text-xl"}>Apprentissage theorique en presentiel</p>
                    </div>
                    <div className={"flex flex-col font-bold w-1/4 h-[230px] bg-yellow-100 rounded-2xl p-5 gap-5"}>
                        <h3 className={"text-5xl text-yellow-600"}>25%</h3>
                        <p className={"text-xl"}>Apprentissage theorique en presentiel</p>
                    </div>

                </div>
                <div className={"flex flex-row gap-2 w-fit"}>
                    <img src={Programme_1} alt="Programme_1" className={"w-[380PX] object-cover"}/>
                    <img src={Programme_2} alt="Programme_2" className={"w-[380PX] object-cover"}/>
                    <img src={Programme_3} alt="Programme_3" className={"w-[380PX] object-cover"}/>
                </div>
            </section>
            <section
                className={"flex flex-col text-blue-950 bg-gray-100 items-center text-center text-lg gap-10 py-15"}>
                <div className={"flex flex-col max-w-6xl mx-auto gap-10"}>
                    <div className={"flex flex-col gap-2.5 mb-2.5"}>
                        <h2 className={"text-5xl font-bold"}>Les technos et langages utilisées</h2>
                        <p>Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java
                            et JavaScript. Ces deux langages occupent une place de choix dans le domaine du
                            développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par
                            les développeurs à travers le monde.</p>
                    </div>
                    <div className={"flex flex-row justify-between"}>
                        <img src={Java} alt="Java_logo"/>
                        <img src={Python} alt="Python_logo"/>
                        <img src={JS} alt="JS_logo"/>
                        <img src={C} alt="C_logo"/>
                        <img src={TS} alt="TS_logo"/>
                    </div>
                    <div className={"flex flex-row justify-between"}>
                        <img src={Docker} alt="Docker_logo" className={"w-[158] h-10 object-cover"}/>
                        <img src={Next} alt="Next_logo" className={"w-25 h-15 object-cover"}/>
                        <img src={Aws} alt="Axs_logo" className={"w-20.5 h-12 object-cover"}/>
                        <img src={Serverless} alt="Serverless_logo" className={"w-41.5 h-12.5 object-cover"}/>
                        <img src={React} alt="React_logo" className={"w-30 h-10 object-cover"}/>
                        <img src={Openapi} alt="Openapi_logo" className={"w-37.5 h-17.5 object-cover"}/>
                    </div>
                </div>
            </section>
            <section
                className="flex flex-col max-w-6xl mx-auto text-blue-950 items-center text-center text-lg gap-10 py-20">
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl font-bold">Nos partenaires</h2>
                    <p>
                        La réussite de nos étudiants se base sur la pertinence de notre programme pédagogique et de la
                        composition de notre corps enseignant, mais aussi du soutien et la collaboration des entreprises
                        partenaires.
                    </p>
                </div>
                <div className="grid grid-cols-5 gap-6 w-full">
                    <img src={Nexta} alt="Nexta" className="h-24 object-contain mx-auto"/>
                    <img src={PN} alt="PN" className="h-24 object-contain mx-auto"/>
                    <img src={Yooz} alt="Yooz" className="h-24 object-contain mx-auto"/>
                    <img src={Etech} alt="Etech" className="h-24 object-contain mx-auto"/>
                    <img src={Emit} alt="Emit" className="h-24 object-contain mx-auto"/>
                    <img src={Numer} alt="Numer" className="h-24 object-contain mx-auto"/>
                    <img src={BP} alt="BP" className="h-24 object-contain mx-auto"/>
                    <img src={YIF} alt="YIF" className="h-24 object-contain mx-auto"/>
                    <img src={Kante} alt="Kante" className="h-24 object-contain mx-auto"/>
                </div>
            </section>
            <footer className={"bg-blue-950 text-lg pt-10"}>
                <div className={"texte-white flex flex-col max-w-6xl mx-auto my-2 px-3 h-55"}>
                    <div>
                        <img className="w-20 h-15" src="/src/assets/HEI_logo.png" alt="logo hei"/>
                    </div>
                    <div className={"flex flex-row justify-between gap-4 text-lg"}>
                        <div className={"flex flex-col gap-8 text-white w-1/4 mt-5"}>
                            <p className={"text-m font-thin"}>
                                Formation habilitée par l’Etat suivant le système LMD
                            </p>
                            <p className={" text-m font-thin"}>
                                Habilitation MESupRes n°31309/2023
                            </p>
                        </div>
                        <div className={"flex flex-col  text-white w-1/4"}>
                            <h2 className={"font-bold"}> Adresse </h2>
                            <p className={"text-m font-thin"}>
                                II J 161 R Ambodivoanjo Ivandry Antananarivo 101, Madagascar
                            </p>
                        </div>
                        <div className={"flex flex-col  text-white w-1/4"}>
                            <h2 className="font-bold"> Navigation</h2>
                            <ul>
                                <li className={"text-yellow-500"}>Accueil</li>
                                <li className={"hover:text-yellow-500"}>Actualites</li>
                                <li className={"hover:text-yellow-500"}>Bourse D'etudes</li>
                                <li className={"hover:text-yellow-500"}>Inscription</li>
                            </ul>
                        </div>
                        <div className={"flex flex-col text-white w-1/4"}>
                            <h2 className={" font-bold"}>Médias sociaux</h2>
                            <div className={"flex flex-row gap-4 my-4"}>
                                <FontAwesomeIcon icon={faFacebook}
                                                 className={"w-5 border-8 rounded-full border-yellow-500 bg-yellow-500"}/>
                                <FontAwesomeIcon icon={faLinkedin}
                                                 className={"w-5 border-8 rounded-full border-yellow-500 bg-yellow-500"}/>
                                <FontAwesomeIcon icon={faInstagram}
                                                 className={"w-5 border-8 rounded-full border-yellow-500 bg-yellow-500"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className={"bg-white font-bold flex flex-row justify-center items-center mt-10"}>© HEI
                        Madagascar</h1>
                </div>
            </footer>
        </>
    )
}

export default App
