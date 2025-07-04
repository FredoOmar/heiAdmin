
import './App.css'
import HEI_logo from './assets/HEI_logo.png'
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
      <section className={"flex flex-col justify-center text-center"}>
        <h1 className={"text-5xl"}>Haute Ecoles d'Informatique </h1>
        <p>"L'education est l'armes le plus puissant pour changer le monde"
          selon NELSON MANDELA. " L'EDUCATION DANS L'informatique est une arme tres puissante pour lutter contre la povrette a Madagascar "
          selon HEI. C'est notre mission.
        </p>
        <p>Une infrastructure de qualiter et un programme pedagosique qualiter
          repond au besoin du marcher pour ll'emploiyabilite de nos etudiants.
        </p>
        <p>
          Des entreprise partenaire et une equipes pedagogique et administrative qui travaille sans relache pour la montee en competences de nos etudiants.
        </p>
        <div className={"flex flex-row justify-around "}>
          <button className={"bg-white py-2 px-10"}>Inscrivez-vous ici </button>
          <button className={"bg-yellow-500 py-2 px-10"}> Emploi du temps</button>
          <button className={"bg-blue-950 py-2 px-5"}>Programme pedagogique</button>
        </div>
        <p>Habilitation MESupRES,suivant l'arret nn°31309/2023</p>
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

      
      
      
    </>
  )
}

export default App
