import { useParams } from "react-router-dom";
import Caroussel from "../components/caroussel";
import first from "../assets/first_home.avif";
import second from "../assets/second_home.avif";
import book from "../assets/book_home.avif";
import chimi from "../assets/chimi_home.avif";
import team from "../assets/Team work.png";
import exams from "../assets/Exams-rafiki.png";
import { useEffect, useRef } from "react";

const imagesList = [first, second, book, chimi];

export function Home() {
  const { id } = useParams();
  return (
    <div className="z-10">
      <Caroussel images={imagesList} />
      {/* section services */}
      <section className="flex flex-col md:flex-row  gap-x-4 py-20 px-20   bg-gray-300  ">
        <div className="lg:w-4/12 md:w-10/12 flex flex-col  justify-start items-start md:items-center gap-y-8 pb-20">
          <h1 className="text-3xl font-bold">NOS SERVICES</h1>
          <p>
            Depuis 2006, Advisers Agency offre aux Africains une gamme de
            services variés Visant l'amélioration de l'élite du continent.
          </p>
          <p>
            Après le Cameroun, nous sommes présent au <span>Togo</span> et en{" "}
            <span>Côte d'Ivoire</span>.{" "}
          </p>
          <div className="flex flex-row  gap-x-4 ">
            <button className="bg-blue-900 hover:bg-blue-700 cursor-pointer rounded-md px-2 h-8 w-20">
              Plus
            </button>
            <button className="bg-blue-900  hover:bg-blue-700 cursor-pointer rounded-md px-2 h-8">
              <i className="fa-brands fa-facebook-f text-white"></i>
            </button>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 items-center sm:grid-cols-3 md:grid-cols-2 md:gap-x-12 lg:grid-cols-3 xl:grid-cols-4  grid-rows-4 md:grid-rows-2 gap-x-12 gap-y-4 w-full  lg:w-8/12">
          <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-center"> Les Plus Sollicités</p>
          </div>
          <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-center">Zork & Study</p>
          </div>
          <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-center">Etudier à L'étranger</p>
          </div>
          <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-center">Immigration Canadienne</p>
          </div>
          <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-center">Les Juniors 08-18 ans</p>
          </div>
          <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-center">Stages à L'international</p>
          </div>
          <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-center">Voyages Découvertes</p>
          </div>
          <div className="h-42.5 w-42.5 bg-red-700 cursor-pointer  rounded-xl flex flex-col justify-center items-center p-4 text-2xl font-semibold text-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-center">Concours Étudiants</p>
          </div>
        </div>
      </section>
      {/* section equipes */}
      <section className="flex flex-col justify-center items-center gap-y-4 py-10 px-12 border-b-2 border-t-2 border-blue-900 my-10 ">
        <h1 className="text-3xl font-bold">Notre équipe</h1>
        {/* <p>
          Une équipe cosmopolite constituée de professionnels dotés d'une
          expertise avérée.
        </p> */}
        <div className="flex flex-col sm:flex-row justify-start sm:gap-x-38  gap-x-8  gap-y-4">
          <div className=" w-100 flex flex-col gap-y-10 p-5">
            <p className="text-xl text-center">
              Une équipe cosmopolite constituée de professionnels dotés d'une
              expertise avérée.{" "}
            </p>
            <button className="bg-blue-900 rounded-md px-2 h-8 w-20  hover:bg-blue-700 cursor-pointer">
              Plus
            </button>
          </div>
          {/* <div className="h-140 w-100"> */}
          <img
            src={`${team}`}
            className="md:h-90 h-full md:w-90  bg-top "
            alt=""
          />
          {/* </div> */}
        </div>
      </section>
      {/* section NOS PARTENAIRES */}
      <section className="flex flex-col justify-center items-center gap-y-16 sm:gap-y-4  py-10 px-20 sm:px-28 border-b-2 border-blue-900 ">
        <h1 className="text-3xl ">Nos Partenaires</h1>
        <p className="text-justify">
          Nous collaborons avec des partenaires de confiance pour vous offrir
          les meilleurs services.
        </p>
        <div className="flex flex-col md:flex-row px-20 items-center  justify-center gap-x-15 gap-y-4">
          <div className="h-90 w-80 md:w-96 lg:w-100 bg-amber-800"></div>
          <div className="h-90 w-90 bg-amber-100 lg:w-100 rounded-md flex flex-col justify-center items-center">
            <div className="flex flex-col rounded-xl gap-7 justify-center bg-white  border-blue-500 hover:border-blue-700 border-4 items-center h-70 w-80 shadow-2xl hover:shadow-2xl/30">
              {/* <img src={`${exams}`} alt="" className="w-20 h-20" /> */}
              <p className="text-center text-lg p-10 ">
                {" "}
                Quelles sont mes chances d'obtenir un visa étudiant ? Faites
                votre
              </p>
              <button className="hover:bg-blue-600 h-10 rounded px-2 cursor-pointer bg-[url()]  bg-blue-800">
                <a href="#">Évaluation Gratuite</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* /* section TÉMOIGNAGES */}
      <section className="flex flex-col justify-center items-center gap-y-8 p-16 border-b-2 bg-gradient-to-r from-blue-300 via-blue-800 to-blue-300 border-blue-900 ">
        <h1 className="text-3xl font-bold">Témoignages</h1>
        <div className="flex  gap-x-10  gap-y-4 w-full flex-col items-center">
          <div className="h-[400px] w-full  ">
            <HorizontalList />
          </div>
          <div className="h-96 w-full md:w-7/12  bg-blue-800 rounded-2xl flex flex-col justify-center">
            <form className="flex flex-col justify-center items-center gap-y-6 py-8 px-4 w-full border-2 border-gray-950 rounded-md bg-white shadow-lg">
              <h1 className="text-xl text-white bg-blue-800 font-bold text-center rounded-md py-2 px-4 mb-2">
                Recevez nos offres de bourses et stage{" "}
                <span className="text-base">
                  Afrique, Europe, Amérique, Asie
                </span>
              </h1>
              <div className="flex flex-col w-full gap-y-3">
                <input
                  type="text"
                  placeholder="Nom"
                  className="bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-row w-full gap-x-2">
                <select className="w-20 border border-gray-300 h-10 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="+237">+237</option>
                  <option value="+228">+228</option>
                  <option value="+225">+225</option>
                  <option value="+33">+33</option>
                </select>
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="bg-white rounded-md px-3 py-2 border w-32 sm:w-full border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-600 rounded-md px-4 py-2 w-full mt-4 cursor-pointer text-white font-semibold transition-colors duration-200"
              >
                S'abonner maintenant
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* section DERNIERS ARTICLES DU BLOG */}
      <section className="flex flex-col justify-center items-center bg-[#808CB2] gap-y-8 p-20 border-b-2 border-blue-900 my-10">
        <h1 className="text-5xl">Derniers Articles du Blog</h1>
        {/* <p>
          Restez informé avec nos derniers articles et actualités sur nos
          services et l'actualité.
        </p> */}
        <div className="lg:flex  lg:justify-between  lg:flex-row  gap-x-8 gap-y-4">
          <div className="h-[370px] w-[270px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-start items-center">
            <img
              src="https://via.placeholder.com/270x370"
              alt="Article 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="text-4xl py-8 font-semibold">Titre</p>
            <div className="flex flex-row justify-between items-between gap-x-8 border-t-2 w-[95%] border-t-gray-200 p-4">
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-eye"></i>
                <p>2</p>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-comment"></i>
                <p>5</p>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-thumbs-up"></i>
                <p>58</p>
              </div>
            </div>
          </div>
          <div className="h-[370px] w-[270px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-start items-center">
            <img
              src="https://via.placeholder.com/270x370"
              alt="Article 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="text-4xl py-8 font-semibold">Titre</p>
            <div className="flex flex-row justify-between items-between gap-x-8 border-t-2 w-[95%] border-t-gray-200 p-4">
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-eye"></i>
                <p>2</p>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-comment"></i>
                <p>5</p>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-thumbs-up"></i>
                <p>58</p>
              </div>
            </div>
          </div>
          <div className="h-[370px] w-[270px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-start items-center">
            <img
              src="https://via.placeholder.com/270x370"
              alt="Article 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="text-4xl py-8 font-semibold">Titre</p>
            <div className="flex flex-row justify-between items-between gap-x-8 border-t-2 w-[95%] border-t-gray-200 p-4">
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-eye"></i>
                <p>2</p>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-comment"></i>
                <p>5</p>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-thumbs-up"></i>
                <p>58</p>
              </div>
            </div>
          </div>
          <div className="h-[370px] w-[270px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-start items-center">
            <img
              src="https://via.placeholder.com/270x370"
              alt="Article 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="text-4xl py-8 font-semibold">Titre</p>
            <div className="flex flex-row justify-between items-between gap-x-8 border-t-2 w-[95%] border-t-gray-200 p-4">
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-eye"></i>
                <p>2</p>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-comment"></i>
                <p>5</p>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <i class="fa-solid fa-thumbs-up"></i>
                <p>58</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

// import { useRef, useEffect } from "react";

export function HorizontalList() {
  const items = [
    {
      id: 1,
      post: "Advisers Agency has  a game-changer for my academic journey. Their support in finding the right university was invaluable.",
      author: "John Doe",
      date: "15-Feb-2023",
    },
    {
      id: 2,
      post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
      author: "John Doe",
      date: "15-Feb-2023",
    },
    {
      id: 3,
      post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
      author: "John Doe",
      date: "15-Feb-2023",
    },
    {
      id: 4,
      post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
      author: "John Doe",
      date: "15-Feb-2023",
    },
    {
      id: 5,
      post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
      author: "John Doe",
      date: "15-Feb-2023",
    },
    {
      id: 6,
      post: "Advisers Agency has been a game-changer for my academic journey. Their support in finding the right university was invaluable.",
      author: "John Doe",
      date: "15-Feb-2023",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20); // vitesse
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-hidden flex space-x-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="min-w-[250px] max-w-[300px] h-[300px] bg-white rounded-2xl p-4 shadow-xl/30 m-4 flex-shrink-0"
        >
          <p className="font-bold">{item.author}</p>
          <p className="text-gray-500 text-sm">{item.date}</p>
          <p className="mt-2 text-gray-700">{item.post}</p>
        </div>
      ))}
    </div>
  );
}
