interface ICard {
  name: string;
  backgroundColor: string;
  image: string;
  description: string;
  width: string;
}

export default function Card({
  name,
  backgroundColor,
  image,
  description,
  width,
}: ICard) {
  return (
    <div
      className="aspect-2/3 overflow-hidden rounded-sm p-2 
      shadow-xl/40
      bg-linear-[130deg,transparent_10%,#ffffff68_15%,transparent_20%,transparent_80%,#ffffff68_90%,transparent]
      hover:scale-115 duration-100
      "
      style={{
        backgroundColor: backgroundColor,
        width: width,
        minWidth: "150px",
      }}
    >
      <p className="text-right">{name}</p>
      <img
        className="mx-auto h-1/2"
        style={{
          imageRendering: "pixelated",
        }}
        src={image}
      />
      <p className="text-center">{description}</p>
    </div>
  );
}
