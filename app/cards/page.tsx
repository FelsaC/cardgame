import Card from "@/common/card";

export default function cards() {
  const cards = [
    {
      name: "Bomb",
      backgroundColor: "#ee7733",
      image: "/bombCard2.png", 
      description: "It Explodes",
    },
    {
      name: "jorge",
      backgroundColor: "#678dc7",
      image: "#",
      description: "placeholder",
    },
    {
      name: "jorge",
      backgroundColor: "#678dc7",
      image: "#",
      description: "placeholder",
    },
    {
      name: "jorge",
      backgroundColor: "#678dc7",
      image: "#",
      description: "placeholder",
    },
    {
      name: "jorge",
      backgroundColor: "#678dc7",
      image: "#",
      description: "placeholder",
    },
    {
      name: "jorge",
      backgroundColor: "#678dc7",
      image: "#",
      description: "placeholder",
    },
    {
      name: "jorge",
      backgroundColor: "#678dc7",
      image: "#",
      description: "placeholder",
    },
    {
      name: "jorge",
      backgroundColor: "#678dc7",
      image: "#",
      description: "placeholder",
    },
    {
      name: "jorge",
      backgroundColor: "#678dc7",
      image: "#",
      description: "placeholder",
    },
    {
      name: "jorge",
      backgroundColor: "#678dc7",
      image: "#",
      description: "placeholder",
    },
    {
      name: "jorge",
      backgroundColor: "#678dc7",
      image: "#",
      description: "placeholder",
    },
  ];
  return (
    <div className="flex gap-2 flex-wrap justify-center m-10">
      {cards.map((card, index) => (
        <Card
          key={index}
          width="200px"
          name={card.name}
          backgroundColor={card.backgroundColor}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
}
