import { useParams } from "react-router-dom";
import Caroussel from "../components/caroussel";

export function Home() {
  const { id } = useParams();
  return (
    <div className="z-10">
      <Caroussel />

      <div className="flex flex-row gap-x-8 p-20">
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
        <div className="w-[30%]">
          <h1>NOS SERVICES</h1>
          <p>
            Depuis 2006, Advisers Agency offre aux Africains une gamme de
            services variés Visant l'amélioration de l'élite du continent.
          </p>
          <p>
            Après le Cameroun, nous sommes présent au <span>Togo</span> et en{" "}
            <span>Côte d'Ivoire</span>.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
