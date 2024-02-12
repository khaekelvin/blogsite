import React from "react";

const cardData = [
  {
    title: "FREELANCING 101 • Christina Morillo",
    description: "Enhance UX: Designing Better UX/UI",
    date: "2023-05-24",
    imageSrc: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "FREELANCING 101 • Smith Jack",
    description: "Designing Impression: The Power of First Impressions",
    date: "2023-05-24",
    imageSrc: "https://images.unsplash.com/photo-1563387852576-964bc31b73af?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "FREELANCING 101 • Brian Smith",
    description: "Case Study: FlipX, an Investment Attraction Startup",
    date: "2023-05-24",
    imageSrc: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "FREELANCING 101 • Lilly Bella",
    description: "Mastering Startup Branding: Expanding Digital Presence",
    date: "2023-05-24",
    imageSrc: "https://images.unsplash.com/photo-1576225410873-a28b2a79fd93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "FREELANCING 101 • Gigi Hadid",
    description: "Designing for Productivity: Efficiency Rules",
    date: "2023-05-24",
    imageSrc: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "FREELANCING 101 • William George",
    description: "Kickstart your UI/UX design career?",
    date: "2023-05-23",
    imageSrc: "https://images.unsplash.com/photo-1578245314285-e55ab9ee31c0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Card() {
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cardData.map((card, index) => (
        <div className="bg-white p-3 w-auto rounded-xl mt-8 text-center font-helvetica sm:mx-0 mx-2">
          <a
            href="#"
            className="flex flex-col card h-auto bg-white rounded-lg "
          >
            <img
              className=" h-[294px] object-cover rounded"
              src={card.imageSrc}
              alt="social"
            />
            <div className="flex flex-col leading-normal sm:text-center">
              <div className="pl-5 mt-auto mb-auto text-left">
                <p className="free text-base mt-10 mb-5">
                {card.title}
                  
                </p>
                <h1 className="text-2xl font-medium sm:break-words mb-10">
                {card.description}
                </h1>
                <p className="min font-medium text-base mb-10">
                  15 Min Read • {card.date}
                </p>
              </div>
            </div>
          </a>
        </div>
        ))}
      </div>
    </>
  );
}
export default Card;
