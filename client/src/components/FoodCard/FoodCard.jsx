const FoodCard = ({item}) => {
  const {name, image, price, recipe} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-5 mt-5 bg-[#111827] text-white px-6 py-3 font-semibold">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <button className="btn btn-outline uppercase text-[#BB8506] border-0 border-b-4 border-b-[#BB8506] bg-[#E8E8E8] mt-4">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
