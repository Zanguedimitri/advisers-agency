// import Caroussel from "../../components/caroussel";
import image1 from "../../assets/work-img1.jpg";
import image2 from "../../assets/work-study1.avif";
import DivNavBar from "../../components/DivNavBar";
import WorkAccordionMenu from "../../components/AccordionMenu";
// const imagesList = [image1, image2, image3, image4, image5];
import { Link } from "react-router-dom";
export function WorkStudy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <DivNavBar />
      <div>
        <img src={`${image1}`} alt="" className="h-70 w-full" />
      </div>
      {/*  */}
      <div
        className="h-170  w-full relative flex pl-30 items-start"
        style={{ backgroundImage: `url(${image2})`, backgroundSize: "cover" }}
      >
        {/* <img src={`${image2}`} alt="" className="h-full w-full opacity-75" /> */}
        <WorkAccordionMenu />
      </div>

      {/* section 1 */}
      <section className="bg-[#D5DCF5]  py-20 px-10 md:px-20 flex flex-col justify-center  md:flex-row gap-10">
        <div className="flex flex-col sm:px-20 ">
          <div className=" ">
            <h1 className="text-3xl font-bold text-center md:text-justify mb-4 text-blue-950">
              Pour ce projet, notre TEAM vous garantie
            </h1>
            <p className="border-b-2 border-b-blue-900 md:w-140 h-2 "></p>
            <ul className="list-disc font-semibold mt-6 text-justify flex flex-col gap-4">
              <li>Une écoute attentive de vos besoins. </li>
              <li>
                Une Orientation gratuite en ce qui concerne vos choix
                académiques, ainsi qu’un accompagnement facilitant d’éventuel
                besoin de reconversion ou de réorientation vers de nouveaux
                horizons.
              </li>
              <li>
                Le conseil quant au choix de votre ville de destination le cas
                échéant (coût de la vie, aspect cosmopolite de la ville,
                opportunités offertes dans la ville etc...)
              </li>
              <li>
                Une ou plusieurs séances de Coaching en fonction du besoin du
                candidat. Nous travaillons avec des Coachs Camerounais certifiés
                par des Associations de Coaching reconnues mondialement. Nous
                apportons au candidat un accompagnement exclusif afin de faire
                ressortir ses forces et lui donner confiance en lui pour
                affronter l’officier consulaire au jour de l’entretiens de visa.
              </li>
              <li>
                Un réseau de contacts qui facilitent la procédure de
                l’inscription à l’hébergement en passant par la certification et
                la traduction documents, le visa, le billet d’avion…
              </li>
              <li>
                Un réseau d’anciens étudiants ayant bénéficié de nos services et
                avec qui nous travaillons, qui vous accueillent à l’aéroport de
                votre pays de destination, vous logent, vous aide à vous
                socialiser (ouverture de compte bancaire, choix d’un abonnement
                téléphonique, premier shopping, la culture du milieu…) vous
                accompagnent à l’école le premier jour, vous conseillent et
                facilitent votre intégration dans votre nouvel environnement.
              </li>
              <li>
                La mise en relation avec le service des Etudiants Internationaux
                de l’université choisie à toutes fins utiles.
              </li>
            </ul>
            <p>
              <span className="font-bold">NB</span>: Pour avoir d’ample
              information sur la légalité du programme de Work & Study,{" "}
              <a
                href="https://www.ice.gov/sevis/practical-training"
                className="text-blue-600 underline hover:text-blue-900"
              >
                cliquez ICI
              </a>{" "}
              pour être redirigé vers le site du gouvernement Américain traitant
              d’immigration et de douane.
            </p>
          </div>
          <div className="bg-blue-900  p-6 mt-10 rounded-lg w-80 sm:w-100 shadow-2xl text-white flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mt-6 text-center">
              Pourquoi choisir le travail-études ?
            </h3>
            <ul className="list-decimal pl-5 mt-2 border-l-2 border-white">
              <li>Expérience professionnelle précieuse</li>
              <li>Flexibilité pour concilier études et travail</li>
              <li>Opportunités de réseautage</li>
              <li>Amélioration des compétences pratiques</li>
              <li>Flexibilité pour concilier études et travail</li>
              <li>Opportunités de réseautage</li>
              <li>Amélioration des compétences pratiques</li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div className=" flex flex-col gap-50 justify-center items-center">
          <div className="bg-blue-700 shadow-md mt-10 w-72 h-90 flex rounded-2xl  justify-center items-center group">
            <div className="border-b-2 border-t-2 border-red-800 mx-8  px-12 group-hover:hidden">
              <h1 className="text-3xl font-black text-center">
                03 AVANTAGES DU WORK STUDY MBA
              </h1>
            </div>
            <div className="border-b-2 border-t-2 border-red-800 p-8  hidden group-hover:flex flex-col justify-center items-center bg-white rounded-2xl ">
              <h1 className="text-xl font-black text-center"> 03 AVANTAGES</h1>

              <ul className="list-disc    py-4">
                <li>
                  15 Mois de stages en alternance, 08H de cours par semaine{" "}
                </li>
                <li>
                  Scolarité payable mensuellement grâce au salaire de stagiaire
                </li>
                <li>
                  Voyagez avec votre famille et installez vous légalement aux
                  USA après votre diplôme
                </li>
              </ul>
            </div>
          </div>

          {/*  */}
          <div className=" bg-red-700 shadow-md mt-10 w-72 p-4 h-90  rounded">
            <h1 className="text-amber-400 to-yellow-600 text-2xl font-bold mb-4 text-center">
              Cédric Nguidjol Program Analyst - Wachovia Bank
            </h1>
            <p className="text-center ">
              J'étais septique au sujet des informations données par mon
              conseillé client ; Aujourd'hui non seulement je vis à Salt Lake
              City, mais j'y travaille à temps plein pour l'entreprise dans
              laquelle j'ai effectué mon stage en alternance. Thank you so much,
              Advisers{" "}
            </p>
          </div>
        </div>
        <div>
          <ul></ul>
        </div>
      </section>
      {/* section contact */}
      <section className="w-full mx-auto p-6  shadow-md mt-10 flex flex-row justify-between items-center">
        <h2 className="text-2xl font-semibold mb-4">
          Vous voulez en savoir plus ?
        </h2>
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ">
          <Link to="/contact">Contactez Nous !</Link>
        </button>
      </section>

      {/* section 2 */}
      {/* <section className=" p-6 bg-white shadow-md mt-10 w-2/10">
          <div className=" p-6 bg-white shadow-md mt-10 w-2/10">
            <h2 className="text-2xl font-bold mb-4 text-blue-950">
              Comment ça marche ?
            </h2>
            <p className="text-gray-700 mb-6">
              Le programme de travail-études est conçu pour permettre aux
              étudiants internationaux de travailler à temps partiel tout en
              poursuivant leurs études. Voici comment cela fonctionne :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Inscription :</strong> Les étudiants intéressés doivent
                s'inscrire au programme de travail-études auprès de leur
                établissement d'enseignement.
              </li>
              <li>
                <strong>Recherche d'emploi :</strong> Les étudiants peuvent
                rechercher des emplois sur le campus ou dans la communauté
                locale qui sont compatibles avec leurs horaires d'études.
              </li>
              <li>
                <strong>Heures de travail :</strong> Les étudiants peuvent
                travailler jusqu'à 20 heures par semaine pendant les sessions
                académiques et à temps plein pendant les vacances scolaires.
              </li>
              <li>
                <strong>Rémunération :</strong> Les étudiants sont rémunérés
                pour leur travail, ce qui peut les aider à couvrir une partie de
                leurs frais de subsistance.
              </li>
            </ul>
          </div>
          <div></div>
        </section> */}
    </div>
    // </div>
  );
}

export default WorkStudy;
