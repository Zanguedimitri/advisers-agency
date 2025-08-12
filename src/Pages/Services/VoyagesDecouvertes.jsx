import image1 from "../../assets/Station balnéaire.avif";
function VoyagesDecouvertes() {
  return (
    <div>
      <section>
        <img src={`${image1}`} alt="" />
      </section>

      <section>
        <p>
          <span>Vous avez des envies...</span>{" "}
          <span> Nous avons de bons plans</span>
          Vous souhaitez visiter Dubaï en couple, découvrir un pays d'Afrique ou
          le Chili, les caraïbes, apprendre le Chinois, l'espagnol le temps de
          vos Vacances... essayez nos groupes de voyages pour adultes et faites
          des rencontres enrichissantes
        </p>
        <button>Confiez-nous vos projets</button>
      </section>
      {/*  */}
    </div>
  );
}

export default VoyagesDecouvertes;
