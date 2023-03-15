import "tailwindcss/tailwind.css";

export default function AshCard({
  image2,
}) {


  return (
    <div className="w-full">
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className='flex justify-center'>
          <img className="w-32 mx-auto" src={"/Pikachu.png"}/>
          <h2 className="text-white text-3xl font-bold ml-4 mt">Ash's Pokemons</h2>
          <img className="w-32 mx-auto" src={"/Charizard.png"}  />
        </div>
      </div>
    </div>
  );
}
