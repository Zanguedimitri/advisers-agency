import Caroussel from "../../components/caroussel";
import image1 from "../../assets/apprendre-langue-etrangerewebp.webp";
import image2 from "../../assets/portrait-personnes-arc-ciel-avif.avif";
import image3 from "../../assets/img_services2.avif";
import image4 from "../../assets/img_service.avif";
import image5 from "../../assets/culture.jpg";

const imagesList = [image1, image2, image3, image4, image5];
export function EtudesEtranger() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Caroussel images={imagesList} />

      {/* section header */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Études à l'Étranger</h1>
        <p className="text-lg">
          Explorez les opportunités d'études à l'étranger avec nos services
          personnalisés.
        </p>
      </section>

      {/* section content */}
      <section className="mt-10  ">
        <h2 className="text-5xl text-center font-semibold mb-4 ">
          Sélectionnez votre destination
        </h2>
        <div className="flex flex-row gap-x-16 p-20">
          <ul className=" pl-6 space-y-2 grid grid-cols-3 gap-4 grid-rows-4">
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
            <li className="w-40 h-28 cursor-pointer bg-white rounded-lg shadow-md p-4 border-amber-500 border-4">
              <strong>Asie :</strong> Plongez dans la culture asiatique tou
            </li>
          </ul>
          <div className="flex flex-col gap-y-14">
            <button className="w-80 h-14 bg-blue-900 rounded hover:bg-blue-700 cursor-pointer text-xl p-2 ">
<<<<<<< HEAD
              <i className="fa-solid fa-briefcase fa-xl"></i> Téléchargez toutes
              nos offres
=======
              <i className="fa-solid fa-briefcase fa-xl"></i> Téléchargez toutes nos
              offres
>>>>>>> 5a0ab0569d5813b87048290d1204677f46c6ad2f
            </button>
            <div className="bg-amber-400 h-100 w-80"></div>
          </div>
        </div>
      </section>

      {/* section contact */}
      <section className="max-w-6xl mx-auto p-6 bg-white shadow-md mt-10 flex flex-row justify-between items-center">
        <h2 className="text-2xl font-semibold mb-4">
          Vous voulez en savoir plus ?
        </h2>
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ">
          Prenez un rendez-vous !
        </button>
      </section>
    </div>
  );
}
export default EtudesEtranger;
