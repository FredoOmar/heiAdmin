import { useEffect, useState } from "react";
import hei1 from "../assets/HEI_1.jpg";
import hei2 from "../assets/HEI_2.jpg";
import hei3 from "../assets/HEI_3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function SliderAuto() {
    const slides = [
        {
            bg: hei1,
            title: "Haute Ecole d'Informatique",
            text: "Une infrastructure de qualité et un programme pédagogique adapté aux besoins du marché.",
        },
        {
            bg: hei2,
            title: "Haute Ecole d'Informatique",
            text: "\"L'education est l'armes le plus puissant pour changer le monde\" selon NELSON MANDELA. \"L'EDUCATION DANS L'informatique est une arme tres puissante pour lutter contre la povrette a Madagascarselon\" selon HEI. C'est notre mission..",
        },
        {
            bg: hei3,
            title: "Haute Ecole d'Informatique",
            text: "Des entreprise partenaire et une equipes pedagogique et administrative qui travaille sans relache pour la montee en competences de nos etudiants.",
        },
    ];

    const [index, setIndex] = useState(0);

    const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
    const goPrev = () =>
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 10000); // ← toutes les 5 secondes

        return () => clearInterval(timer); // nettoyage
    }, [slides.length]);

    const current = slides[index];

    return (
        <div
            className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white text-center bg-black/2"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${current.bg}")`,
            }}
        >
            {/* Contenu principal */}
            <div className="px-4 flex flex-col gap-10">
                <h1 className="text-5xl font-bold">{current.title}</h1>
                <p className=" max-w-4xl mx-auto text-xl">{current.text}</p>

                <div className="flex gap-20 mt-6 justify-center font-semibold text-xl">
                    <button className="bg-white text-blue-950 px-5 py-2 rounded-sm">
                        Inscrivez-vous ici
                    </button>
                    <button className="bg-yellow-600 px-5 py-2 rounded-sm">
                        Emploi du temps
                    </button>
                    <button className="bg-blue-950 px-5 py-2 rounded-sm">
                        Programme pédagogique
                    </button>
                </div>

                <p className="mt-4">
                    Habilitation MESupRES, suivant l'arrêté n°31309/2023
                </p>
            </div>

            {/* Flèches navigation */}
            <button
                onClick={goPrev}
                className="absolute left-4 text-3xl text-white hover:bg-white hover:text-blue-950 transition-colors duration-400 px-3 py-2 rounded-full flex"
            >
                <FontAwesomeIcon icon={faLeftLong} />
            </button>

            <button
                onClick={goNext}
                className="absolute right-4 text-3xl text-white hover:bg-white hover:text-blue-950 transition-colors duration-400 px-3 py-2 rounded-full flex"
            >
                <FontAwesomeIcon icon={faRightLong} />
            </button>
        </div>
    );
}
