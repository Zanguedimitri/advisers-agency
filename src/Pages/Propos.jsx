import apropos from "../assets/img_apropos.avif";
import patrick from "../assets/patrick-advisers-bureau-douala.avif";
import Amira from "../assets/Amira-bureau-advisers-lome.avif";

export function Apropos() {
  return (
    <div className="">
      <div className="h-24 bg-white z-0"></div>
      <section>
        <img src={`${apropos}`} className="w-full z-0 relative" alt="" />
      </section>
      <section className="px-30 py-5 z-10">
        Advisers Agency ​​ Spécialiste des études à l’étranger depuis décembre
        2006, Advisers Agency vous propose une expertise unique et éprouvée qui
        vous accompagne tout au long de votre projet d’étude secondaire et
        supérieure en Afrique, Amérique, Europe et Asie. Advisers Agency est
        fier d’avoir accompagné en 2023 plus de 1000 Jeunes dans la réalisation
        de leurs projets d’études à l’étranger (USA, CANADA, France, Angleterre,
        Lettonie, Belgique, Allemagne, Dubai, Chine ...) dans la convivialité,
        la confidentialité et avec un accent particulier dans la recherche de
        l'équilibre qualité et coût. Depuis peu, à la demande de nos clients,
        nous avons ouvert une branche spécialisée dans la recherche des stages
        en entreprises aux USA en Asie et à Dubaï. Nos conseils accompagnent
        aussi ceux qui désirent s’installer au CANADA en qualité d’immigrants
        qualifiés. Advisers Agency à conscience qu’une vie professionnelle
        réussie est très souvent la conséquence d’une enfance riche et épanouie.
        Pour les plus jeunes et les adolescents, nous proposons des colonies de
        vacances dans plusieurs pays tels que Canada, Etats-Unis, Angleterre,
        Espagne, Afrique du Sud, Kenya, Rwanda et bien d’autres pays sur
        demande. En outre, tout au long de l’année académique, nous organisons
        des compétitions entre établissements scolaire du secondaire et du
        supérieur afin de développer le leadership, le Team spirit et la
        sociabilité de chaque participant. NOS VALEURS ​ Célérité :​ En général,
        le temps de traitement des dossiers n’excède pas 04 mois, de
        l'inscription à la demande de visa. ​Efficacité : L’expérience acquise
        depuis 2006, nous permet de vous conseiller efficacement sur les chances
        de réussite de votre projet. Empathie : Chaque membre de notre équipe
        fait preuve d’une écoute attentive. Les conseils que nous vous
        prodiguerons, prendrons toujours en considération votre particularité
        afin de vous procurer un service à votre mesure.
      </section>
      {/* section equipe */}
      {/* <section> */}
      <section class="bg-blue-900  text-black py-10 px-6">
        <div class="max-w-6xl mx-auto bg-white p-6 relative -mt-6">
          <h2 class="text-3xl font-bold mb-1">Rencontrez l'équipe</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center items-center">
            {/* <!-- CARD 1 --> */}
            <div class="text-center">
              <img src={`${patrick}`} alt="Marie Brun" class="mx-auto mb-4" />
              <h3 class="font-bold uppercase">Marie Brun</h3>
              <p class="text-blue-900  font-medium mb-2">chef créatif</p>
              <p class="text-sm text-gray-600 mb-4">
                Glavi amet ritnsi libero molestie ante ut fringilla purus eros
                quis glavid from dolor amet iquam lorem bibendum
              </p>
              <div class="flex justify-center space-x-4 text-black">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
              </div>
            </div>

            {/* <!-- CARD 2 --> */}
            <div class="text-center">
              <img src={`${Amira}`} alt="Anne Richmond" class="mx-auto mb-4" />
              <h3 class="font-bold uppercase">Anne Richmond</h3>
              <p class="text-blue-900 font-medium mb-2">chef créatif</p>
              <p class="text-sm text-gray-600 mb-4">
                Glavi amet ritnsi libero molestie ante ut fringilla purus eros
                quis glavid from dolor amet iquam lorem bibendum
              </p>
              <div class="flex justify-center space-x-4 text-black">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </section> */}
      {/* section contact */}
      <section></section>
    </div>
  );
}

export default Apropos;
