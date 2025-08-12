import image1 from "../../assets/logo_big.avif";
import image2 from "../../assets/studentdebater.avif";
import image3 from "../../assets/image_JPG.avif";
import logo_mini from "../../assets/logo_mini.avif";
import image_help from "../../assets/image_help.jpg";

function StudentCompetitions() {
  return (
    <div>
      <section>
        <div className="flex justify-center items-center p-28">
          <img src={`${image1}`} alt="" className="w-80 h-40" />
        </div>

        <img src={`${image2}`} alt="" />
        <img src={`${image3}`} alt="" className="w-72 h-60" />
      </section>
      {/*  */}
      <section>
        <h1 className="text-2xl font-bold">contexte</h1>
        <p>
          Nous pensons que l'éducation implique l’apprentissage, l’évaluation,
          l'interaction avec ses pairs, le partage, la victoire, la défaite et
          l'apprentissage de nos erreurs. C'est pourquoi nous proposons ce
          concept qui concerne les universités et grandes écoles privées et les
          établissements d'enseignement secondaire basés au Cameroun et dont le
          cursus d’enseignement respecte un curriculum international.
        </p>

        <p className="border-2 border-red-800"></p>
        <h1 className="text-2xl font-bold">Promoteur</h1>
        <p>
          Créé depuis 2006, l'objectif principal de l’Association pour
          l’Orientation des Elèves et Etudiants du Cameroun (AOREEC) est de
          permettre à ceux-ci d'embrasser la carrière de leur rêve. Advisers
          Agency, est l'organe spécial de l'association qui s'occupe du
          département des études à l'étranger. Nous avons plus de 200
          universités partenaires aux États-Unis, au Canada, au Royaume-Uni, en
          France, en Belgique, au Portugal, en Chine, en Lettonie et en Espagne.
          Nous avons envoyé aujourd'hui plus de 550 élèves, et étudiants
          camerounais à l'étranger, nous avons donc un réseau de camerounais
          fiable qui peut aider à l'étranger.
        </p>
        <button>Price de contact</button>
        <p className="border-2 border-red-800"></p>
        <h1 className="text-2xl font-bold">Mission</h1>
        <p>
          Équiper et aider les jeunes à découvrir et développer leur potentiel
          afin d’embrasser la carrière de leur rêve.
        </p>
        <h1 className="text-2xl font-bold">Objectifs</h1>
        <p>
          Identifier et développer les aptitudes essentielles au leadership des
          jeunes écoliers par des activités intellectuelles et sportives au
          cours de chaque année scolaire. Le monde d'aujourd'hui est connecté et
          les réseaux semblent gagner beaucoup plus d'importance. Nous créons
          une plate-forme, où des personnes de même niveau et ayant une même
          vision, vont se défier, se familiariser et créerons un réseau de
          contact important qu'ils pourraient utiliser demain. Avec ce projet,
          Advisers Agency souhaite équiper les jeunes écoliers d’un esprit de
          leadership, Fair-Play et de travail d’équipe.
        </p>
        <p className="border-2 border-red-800"></p>
        <div className="flex flex-row">
          <div>
            <h1 className="text-2xl font-bold">Les activités</h1>
            <ul className="list-decimal ml-5">
              <li> Séminaires de leadership MAP4LIFE</li>
              <li>Concours de débatteurs</li>
              <li>Concours d’épellation bilingue</li>
              <li>Mini-Jeux olympiques</li>
              <li>Concours du meilleur projet</li>
              <li>Concours en développement international</li>
            </ul>
            <button>En savoir plus</button>
          </div>

          <div>
            <h1 className="text-2xl font-bold"></h1>
            <ul className="list-disc ml-5">
              <li>Les établissements secondaire Internationaux</li>
              <li>Les établissements secondaires nationaux</li>
              <li>Les instituts privés d'enseignement supérieur</li>
              <li>
                Les entreprises qui encouragent le leadership et l'éducation
              </li>
            </ul>
            <button>Soutenez l'éducation</button>
          </div>
        </div>
        <p className="border-2 border-red-800"></p>
        <div className="flex flex-row">
          <div>
            <h1 className="text-2xl font-bold">Pourquoi participer ?</h1>
            <ul className="list-disc ml-5">
              <li>
                Pour gagner plus de la visibilité, car certaines activités
                seront médiatisées ;
              </li>
              <li>
                Pour donner l'opportunités à vos élèves de compétir avec leurs
                pairs ;
              </li>
              <li>
                Pour créer un réseau, apprendre de vos concurrents et accroître
                vos standards
              </li>
              <li>
                Pour permettre aux élèves et étudiants de montrer leur talent et
                de tester leurs QI.
              </li>
              <li>
                Pour donner l'opportunité aux élèves et étudiants d'obtenir de
                l'aide pour la réalisation de leurs rêves.
              </li>
            </ul>
            <button>Nous contacter</button>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Potentiels Participants</h1>
            <ul>
              <li> African American Academy</li>
              <li>American School of Douala</li>

              <li> Amity International College</li>

              <li>British Isles International School</li>

              <li>Dewey International School of Applied Sciences</li>

              <li> Dominique Savio Douala</li>

              <li> Enko Education International</li>

              <li>The Bridge International School</li>

              <li>Russian International School</li>

              <li> Tous les instituts privés d'enseignement supérieur</li>
            </ul>
            <button>Patriciper à la compétition </button>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="flex flex-row justify-center items-baseline p-20 bg-[#B3BFE7]">
        <img src={`${logo_mini}`} alt="" className="w-60 h-40" />
        <div className="p-10">
          <p>
            Toutes les institutions désireuses de participer à l'édition 2023 du
            Student Competitions peuvent contacter notre secrétariat permanent à
            l'adresse studentcompetitions@advisers-agency.com afin de recevoir:
          </p>
          <ul className="list-disc ml-5">
            <li>Le calendrier des activités </li>
            <li>Le déroulement des activités</li>
            <li>Les modalités pratiques des différentes compétitions</li>
          </ul>
        </div>
        <img src={`${image_help}`} alt="" className="w-60 h-40" />
      </section>
    </div>
  );
}

export default StudentCompetitions;
