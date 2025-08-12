import image1 from "../../assets/Toronto.avif";
function ImmigrationCanadienne() {
  return (
    <div>
      <img src={`${image1}`} alt="" />
      {/*  */}
      <section className="bg-white p-16 border-2 border-gray-300">
        <button>Nous contacter</button>
      </section>
    </div>
  );
}

export default ImmigrationCanadienne;
