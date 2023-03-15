
import "tailwindcss/tailwind.css";

export default function AshCard({
  name,
  image2,
}) {


  return (
    <div className="w-full">
      <div className="bg-gray-800 rounded-lg overflow-hidden ">
        <div className='flex'>
          <img className="w-32 mx-auto" src={image2} />
          <h2 className="text-center font-bold text-2xl mt-11">{name}</h2>
          <img className="w-32 mx-auto" src={image2}  />
        </div>
      </div>
    </div>
  );
}