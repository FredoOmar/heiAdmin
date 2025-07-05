import {useEffect, useState} from "react";
import Mirado from "../assets/Mirado.jpg";
import Julien from "../assets/Julien.jpg";
import Ryan from "../assets/Ryan.jpg";
import Jean from "../assets/Jean.jpg";
import Parison from "../assets/Parison.jpg";
import Yannick from "../assets/Yannick.jpg";
import Tahina from "../assets/Tahina.jpg";
import Lou from "../assets/Lou.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

export default function TeamSlide() {
    const slides = [
        {
            pic: Mirado,
            title: "Mirado RAFENOMAHENINTSOA",
            text: "Data and Business Intelligence Specialist 5+",
        },
        {
            pic: Lou,
            title: "Dr Lou Maurica",
            text: "Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI"
        },
        {
            pic: Julien,
            title: "Julien RAJERISON",
            text: "Lead Développeur | Fondateur de l'association Techzara Madagascar",
        },
        {
            pic: Ryan,
            title: "Ryan ANDRIAMAHERY",
            text: "Développeur back end | Cofondateur et Directeur des opérations de HEI",
        },
        {
            pic: Jean,
            title: "Jean Aimé Maxa",
            text: "Responsable technique cybersécurité chez CES France Continental (Toulouse – France)",
        },
        {
            pic: Parison,
            title: "Parison Ravalomanda",
            text: "Ingénieur en informatique |  Ingénieur logiciel chez Google (Londres – UK)",
        },
        {
            pic: Yannick,
            title: "Yannick Raharijaona",
            text: "Responsable technique ML chez Rocket Science (Ottawa – Canada)",
        },
        {
            pic: Tahina,
            title: "Dre Tahina Ralitera",
            text: "Docteure-Ingénieure, CNRS France | Prix L’Oréal-UNESCO pour les Femmes en Science (2017)",
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;

    const nextSlide = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setStartIndex((prevIndex) =>
            (prevIndex - 1 + slides.length) % slides.length
        );
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 10000);
        return () => clearInterval(timer);
    }, []);

    const getVisibleSlides = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
            visible.push(slides[(startIndex + i) % slides.length]);
        }
        return visible;
    };

    return (
        <div className="relative overflow-hidden h-110 flex justify-center items-center px-10">
            <div className="flex flex-row justify-center gap-6 h-full">
                {getVisibleSlides().map((member, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl text-center w-100 flex flex-col pt-10">
                        <img src={member.pic} alt={member.title}
                             className="w-50 h-50 mx-auto rounded-full object-cover mb-4 border-8 border-gray-200"/>
                        <h3 className="text-xl font-bold text-blue-950">{member.title}</h3>
                        <p className="text-blue-950 text-lg">{member.text}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-0 text-2xl text-white p-2 rounded-full hover:bg-white hover:text-blue-700 transition-colors duration-400"
            >
                <FontAwesomeIcon icon={faAngleLeft}/>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 text-2xl text-white p-2 rounded-full hover:bg-white hover:text-blue-700 transition-colors duration-400"
            >
                <FontAwesomeIcon icon={faAngleRight}/>
            </button>
        </div>
    );

}