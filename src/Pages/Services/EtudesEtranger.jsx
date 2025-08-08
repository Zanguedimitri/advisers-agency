import Caroussel from "../../components/caroussel";
export function EtudesEtranger() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Caroussel />

      {/* section header */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Études à l'Étranger</h1>
        <p className="text-lg">
          Explorez les opportunités d'études à l'étranger avec nos services
          personnalisés.
        </p>
      </section>

      {/* section content */}
      <section className="max-w-6xl mx-auto p-6 bg-white shadow-md mt-10">
        <h2 className="text-2xl font-semibold mb-4">Nos Services</h2>
        <p>
          Nous offrons une gamme complète de services pour vous aider à réaliser
          votre rêve d'étudier à l'étranger, y compris la sélection des
          universités, l'assistance à la demande de visa, et le soutien
          logistique.
        </p>
      </section>

      {/* section contact */}
      <section className="max-w-6xl mx-auto p-6 bg-white shadow-md mt-10">
        <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
        <p>
          Pour plus d'informations sur nos services, n'hésitez pas à nous
          contacter via notre formulaire en ligne ou par téléphone.
        </p>
      </section>
    </div>
  );
}
export default EtudesEtranger;
