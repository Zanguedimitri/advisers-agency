// import Caroussel from "../../components/caroussel";
import image1 from "../../assets/work-img1.jpg";
import image2 from "../../assets/work-study1.avif";
import DivNavBar from "../../components/DivNavBar";
import WorkAccordionMenu from "../../components/AccordionMenu";
// const imagesList = [image1, image2, image3, image4, image5];
export function WorkStudy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <DivNavBar />
      <div>
        <img src={`${image1}`} alt="" className="h-70 w-full" />
      </div>
      {/*  */}
      <div
        className="h-170 w-full relative flex pl-30 items-start"
        style={{ backgroundImage: `url(${image2})`, backgroundSize: "cover" }}
      >
        {/* <img src={`${image2}`} alt="" className="h-full w-full opacity-75" /> */}
        <WorkAccordionMenu />
      </div>

      {/* section header */}
      <section className="bg-blue-900 text-white  py-20 px-10 md:px-20">
        <div className=" md:w-6/10">
          <h1 className="text-3xl font-bold mb-4">
            Pour ce projet, notre TEAM vous garantie
          </h1>
          <ul className="list-disc font-semibold mt-6 text-justify">
            <li>Une écoute attentive de vos besoins. </li>
            <li>
              Une Orientation gratuite en ce qui concerne vos choix académiques,
              ainsi qu’un accompagnement facilitant d’éventuel besoin de
              reconversion ou de réorientation vers de nouveaux horizons.
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
              ressortir ses forces et lui donner confiance en lui pour affronter
              l’officier consulaire au jour de l’entretiens de visa.
            </li>
            <li>
              Un réseau de contacts qui facilitent la procédure de l’inscription
              à l’hébergement en passant par la certification et la traduction
              documents, le visa, le billet d’avion…
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
            <span>NB</span>:
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mt-6">
            Pourquoi choisir le travail-études ?
          </h3>
          <ul className="list-decimal pl-5 mt-2">
            <li>Expérience professionnelle précieuse</li>
            <li>Flexibilité pour concilier études et travail</li>
            <li>Opportunités de réseautage</li>
            <li>Amélioration des compétences pratiques</li>
            <li>Flexibilité pour concilier études et travail</li>
            <li>Opportunités de réseautage</li>
            <li>Amélioration des compétences pratiques</li>
          </ul>
          <p>
            <span>NB</span>:Pour avoir d’ample information sur la légalité du
            programme de Work & Study,{" "}
            <a href="https://www.ice.gov/sevis/practical-training">
              cliquez ICI{" "}
            </a>{" "}
            pour être redirigé vers le site du gouvernement Américain traitant
            d’immigration et de douane.
          </p>
        </div>
      </section>

      {/* section 1 */}
      <section className="max-w-6xl mx-auto p-6 bg-white shadow-md mt-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nos Services</h2>
          <p>
            Nous offrons des conseils et un accompagnement pour trouver des
            programmes de travail-études adaptés à vos besoins académiques et
            professionnels.
          </p>
        </div>
      </section>

      {/* section 2 */}
      <section className="max-w-6xl mx-auto p-6 bg-white shadow-md mt-10">
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1></h1>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default WorkStudy;
