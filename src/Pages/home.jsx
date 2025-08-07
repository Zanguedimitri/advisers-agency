import { useParams } from "react-router-dom";
import Caroussel from "../components/caroussel";

export function Home() {
  const { id } = useParams();
  return (
    <div className="z-10">
      <Caroussel />

      <div className="h-900"></div>
    </div>
  );
}

export default Home;
