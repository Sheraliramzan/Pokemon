import "tailwindcss/tailwind.css";

export default function AshCard({
  image2,
}) {
  return (
    <div className="w-full">
      <div className="bg-gray-800 rounded-lg overflow-hidden p-6">
        <div className="flex items-center">
          <img className="w-32 rounded-full border-2 border-yellow-500" src={image2} />
          <h2 className="text-white text-3xl font-bold ml-4 text">Ash's Pokemons</h2>
          <img className="w-32 rounded-full border-2 border-yellow-500 ml-auto" src={image2} />
        </div>
      </div>
    </div>
  );
}