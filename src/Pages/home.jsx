import { useParams } from "react-router-dom";
import Caroussel from "../components/caroussel";

export function Home() {
  const { id } = useParams();
  return (
    <div className="z-10">
      <Caroussel />
      {/* section services */}
      <section className="flex flex-row gap-x-8 p-20">
        <div className="flex flex-wrap  justify-between gap-w-4 gap-y-25 w-[70%] ">
          <div className="h-[170px] w-[170px] bg-red-700"></div>
          <div className="h-[170px] w-[170px] bg-red-700"></div>
          <div className="h-[170px] w-[170px] bg-red-700"></div>
          <div className="h-[170px] w-[170px] bg-red-700"></div>
          <div className="h-[170px] w-[170px] bg-red-700"></div>
          <div className="h-[170px] w-[170px] bg-red-700"></div>
          <div className="h-[170px] w-[170px] bg-red-700"></div>
          <div className="h-[170px] w-[170px] bg-red-700"></div>
        </div>
        <div className="w-[30%] flex flex-col justify-start items-start gap-y-4">
          <h1>NOS SERVICES</h1>
          <p>
            Depuis 2006, Advisers Agency offre aux Africains une gamme de
            services variés Visant l'amélioration de l'élite du continent.
          </p>
          <p>
            Après le Cameroun, nous sommes présent au <span>Togo</span> et en{" "}
            <span>Côte d'Ivoire</span>.{" "}
          </p>
          <div className="flex flex-row  gap-x-4 ">
            <button className="bg-blue-900 rounded-md px-2 h-8 w-20">
              Plus
            </button>
            <button className="bg-blue-900 rounded-md px-2 h-8 w-50">
              icon facebook link
            </button>
          </div>
        </div>
      </section>
      {/* section equipes */}
      <section className="flex flex-col justify-center items-center gap-y-4 p-20 border-b-2 border-blue-900 my-10 ">
        <h1 className="text-3xl">Notre équipe</h1>
        <p>
          Notre équipe est composée de professionnels passionnés et dévoués,
          prêts à vous accompagner dans votre parcours.
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <div className="h-[170px] w-[170px] bg-green-700"></div>
          <div className="h-[170px] w-[170px] bg-green-700"></div>
          <div className="h-[170px] w-[170px] bg-green-700"></div>
          <div className="h-[170px] w-[170px] bg-green-700"></div>
        </div>

        <button className="bg-blue-900 rounded-md px-2 h-8 w-20">Plus</button>
      </section>
      {/* section NOS PARTENAIRES */}
      <section className="flex flex-col justify-center items-center gap-y-4 p-20 border-b-2 border-blue-900 my-10">
        <h1 className="text-3xl">Nos Partenaires</h1>
        <p>
          Nous collaborons avec des partenaires de confiance pour vous offrir
          les meilleurs services.
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <div className="h-[170px] w-[170px] bg-yellow-700"></div>
          <div className="h-[170px] w-[170px] bg-yellow-700"></div>
          <div className="h-[170px] w-[170px] bg-yellow-700"></div>
          <div className="h-[170px] w-[170px] bg-yellow-700"></div>
        </div>
      </section>

      {/* section TÉMOIGNAGES */}
      <section className="flex flex-col justify-center items-center gap-y-4 p-20 border-b-2 border-blue-900 my-10">
        <h1 className="text-3xl">Témoignages</h1>
        <p>
          Découvrez les témoignages de nos clients satisfaits qui ont bénéficié
          de nos services.
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <div className="h-[170px] w-[170px] bg-purple-700"></div>
          <div className="h-[170px] w-[170px] bg-purple-700"></div>
          <div className="h-[170px] w-[170px] bg-purple-700"></div>
          <div className="h-[170px] w-[170px] bg-purple-700"></div>
        </div>
      </section>
      {/* section DERNIERS ARTICLES DU BLOG */}
      <section className="flex flex-col justify-center items-center gap-y-4 p-20 border-b-2 border-blue-900 my-10">
        <h1 className="text-3xl">Derniers Articles du Blog</h1>
        <p>
          Restez informé avec nos derniers articles et actualités sur nos
          services et l'actualité.
        </p>
        <div className="flex  justify-center gap-x-8 gap-y-4">
          <div className="h-[370px] w-[270px] bg-orange-700"></div>
          <div className="h-[370px] w-[270px] bg-orange-700"></div>
          <div className="h-[370px] w-[270px] bg-orange-700"></div>
          <div className="h-[370px] w-[270px] bg-orange-700"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
