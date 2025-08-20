import Caroussel from "../../components/caroussel";
import image1 from "../../assets/colonie1.avif";
import image2 from "../../assets/colonie2.avif";
import image3 from "../../assets/colonie3.avif";
import grid1 from "../../assets/grid1.avif";
import grid2 from "../../assets/grid2.avif";
import grid3 from "../../assets/grid3.avif";
import grid4 from "../../assets/grid4.avif";
import { Link } from "react-router-dom";

const images = [image1, image2, image3];
export function ColoniesVacances() {
  return (
    <div>
      <Caroussel images={images} />
      {/*  */}
      <section className="flex flex-col items-center p-20 gap-y-5">
        <p className="text-justify text-lg pl-20 pr-20">
          Les échanges interculturels et les expériences internationales sont
          atouts inestimables pour l’éducation de nos enfants. Nous le savons,
          par conséquent, nous proposons plusieurs camps d’été aux parents pour
          le développement harmonieux de leurs enfants.
        </p>
        <p className="text-justify text-lg  pl-20 pr-20">
          <span className="font-bold">Advisers Agency</span> et ses partenaires
          vous proposent des camps d’été thématiques et non thématiques avec à
          la clé la création d'un réseau d'amis venant du monde entier, qu'ils
          sauront valoriser dans le futur proche. De plus, les participants
          interagissent avec d'autres pairs de différents pays et apprennent les
          bases d'une langue seconde de leur choix pendant les camp. Le
          leadership, le réseautage, le divertissement, l’athlétisme et
          l'apprentissage sont les piliers qui sous tendent les camps de
          vacances que nous vous proposons.
        </p>
      </section>
      {/*  */}
      <section>
        <div className="grid grid-cols-2 grid-rows-2 pl-30 pr-30 gap-0 justify-items-center text-white">
          {/* grid1 */}
          <div className="flex flex-row items-center justify-center ">
            <div className="w-64 h-94  bg-red-700 flex flex-col gap-y-20 p-4 justify-center items-center">
              {" "}
              <h1 className="text-2xl font-bold">Colonies à Thèmes</h1>
              <p className="text-center">
                Se plonger dans l'univers d'un métier et découvrir les aptitudes
                requises pour l'effectuer
              </p>
              <button className="border-2 border-amber-500 hover:bg-amber-500 text-white rounded-lg p-2">
                <Link to="/colonies-de-vacances-1"> En savoir plus</Link>
              </button>
            </div>

            <div className="w-64 h-94 transform-3d">
              <img src={`${grid1}`} alt="" />
            </div>
          </div>
          {/* grid2 */}
          <div className="flex flex-row items-center justify-center">
            <div className="w-64 h-94 bg-blue-700 flex flex-col gap-y-20 p-4 justify-center items-center">
              {" "}
              <h1 className="text-2xl font-bold ">Colonies Sportives</h1>
              <p className="text-center">
                Apprenez les bases de votre sport préféré avec des coachs
                qualifiés, le tout dans le FUN
              </p>
              <button className="border-2 border-green-500 hover:bg-green-500 text-white rounded-lg p-2">
                <Link to="/colonies-de-vacances-1"> En savoir plus</Link>
              </button>
            </div>
            <div className="w-64 h-94  transform-3d">
              <img src={`${grid2}`} alt="" />
            </div>
          </div>
          {/* grid3 */}
          <div className="flex flex-row items-center justify-center">
            <div className="w-64 h-94">
              <img src={`${grid3}`} alt="" />
            </div>
            <div className="w-64 h-94 bg-amber-400 flex flex-col gap-y-20 p-4 justify-center items-center">
              {" "}
              <h1 className="text-2xl font-bold">Destinations & Prix</h1>
              <p className="text-center">
                choisissez le moment idéal pour vous amuser, nous vous assistons
                avec nos conseils{" "}
              </p>
              <button className="border-2 border-blue-500 hover:bg-blue-500 text-white rounded-lg p-2">
                <Link to="/colonies-de-vacances-1"> En savoir plus</Link>
              </button>
            </div>
          </div>
          {/* grid4 */}
          <div className="flex flex-row items-center justify-center">
            <div className="w-64 h-94 ">
              <img src={`${grid4}`} alt="" />
            </div>
            <div className="w-64 h-94 bg-green-700 flex flex-col gap-y-20 p-4 justify-center items-center">
              {" "}
              <h1 className="text-2xl font-bold">Âges et délais</h1>
              <p className="text-center">
                Suis-je éligible au colonies de vacances? Que faut il savoir au
                sujet des{" "}
              </p>
              <button className="border-2 border-red-500 hover:bg-red-500 text-white rounded-lg p-2">
                <Link to="/colonies-de-vacances-1"> En savoir plus</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-white p-16 border-2 border-gray-300 flex  justify-end gap-x-10">
        <button className="p-4 cursor-pointer  bg-blue-700 hover:bg-blue-600 text-white rounded-lg">
          <Link to="/contact"> Nous contacter</Link>
        </button>
      </section>
    </div>
  );
}

export default ColoniesVacances;
