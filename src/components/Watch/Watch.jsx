import "./Watch.css";

const Watch = ({ watch }) => {
  const { name, price } = watch;
  return (
    <div>
      <h3>Watches: {name}</h3>
      <p>Price: {price}</p>
    </div>
  );
};

export default Watch;
