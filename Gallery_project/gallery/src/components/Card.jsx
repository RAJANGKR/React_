

const Card = ({ title, description, image }) => {
  return (
    <div className="gap-4 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md border border-gray-200  ">      
      <div className="h-500px w-400px p-4 border-r-8 border-amber-950 border-2 rounded-lg overflow-hidden shadow-lg border-amber-200 border-5">
        <img className="w-full h-full border-r-10 border-amber-950 border-2 object-cover" src={image} alt={title} />
        <h3 className="text-xl font-bold mt-2 justify-between p-4">{title}</h3>
        <p className="text-gray-600 bg-amber-300 ">{description}</p>
      </div>    
    </div>
  
  );
};

export default Card;