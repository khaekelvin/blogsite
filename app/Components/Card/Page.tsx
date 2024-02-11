import React from 'react'


const cardData = [
  
  {
    title: "FREELANCING 101 • Christina Morillo",
    description: "Enhance UX: Designing Better UX/UI",
    date: "2023-05-24",
    imageSrc: "https://i.ibb.co/0sMDLNX/Group-1000004815.png",
  },
  {
    title: "FREELANCING 101 • Smith Jack",
    description: "Designing Impression: The Power of First Impressions",
    date: "2023-05-24",
    imageSrc: "https://i.ibb.co/d4Y23FL/3dicons.png",
  },
  {
    title: "FREELANCING 101 • Brian Smith",
    description: "Case Study: FlipX, an Investment Attraction Startup",
    date: "2023-05-24",
    imageSrc: "image4.jpg",
  },
  {
    title: "FREELANCING 101 • Lilly Bella",
    description: "Mastering Startup Branding: Expanding Digital Presence",
    date: "2023-05-24",
    imageSrc: "image5.jpg",
  },
  {
    title: "FREELANCING 101 • Gigi Hadid",
    description: "Designing for Productivity: Efficiency Rules",
    date: "2023-05-24",
    imageSrc: "image6.jpg",
  },
  {
    title: "FREELANCING 101 • William George",
    description: "Kickstart your UI/UX design career?",
    date: "2023-05-23",
    imageSrc: "image1.jpg",
  },
];


function Card() {
  return (
    <>
      <div className="max-w-7xl mx-auto mb-10">
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-xl mt-8 text-center font-helvetica"
            >
              <a
                href="#"
                className="flex flex-col card md:w-full md:h-96 bg-white rounded-lg md:flex-row "
              >
                <div className="flex flex-col leading-normal lg:mx-5">
                  <img
                    className=" w-48 object-cover rounded"
                    src={data.imageSrc}
                    alt="social"
                  />
                  <div className="mt-auto mb-auto text-left">
                    <p className="free text-lg mt-10 mb-5">{data.title}</p>
                    <h1 className="text-3xl font-medium sm:break-words mb-10 sm:mb-16 lg:w-96">
                      {data.description}
                    </h1>
                    <p className="min font-medium text-lg mb-10">{`15 Min Read • ${data.date}`}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;


// {
//   "tags": ["FREELANCING 101", "William George"],
//   "title": "07 Ways to get Consistent Clients from Social Media",
//   "readTime": "15 min read",
//   "date": "23-05-2023",
//   "image": "https://i.ibb.co/VLHTNH8/Frame-2-1.png"
// },
// {
//   "tags": ["FREELANCING 101", "Christina Morillo"],
//   "title": "Enhance UX: Designing Better UX/UI",
//   "readTime": "15 min read",
//   "date": "23-05-2023",
//   "image": "https://i.ibb.co/0sMDLNX/Group-1000004815.png"
// },
// {
//   "tags": ["FREELANCING 101", "Smith Jack"],
//   "title": "Designing Impression: The Power of First Impressions",
//   "readTime": "15 min read",
//   "date": "23-05-2023",
//   "image": "https://i.ibb.co/d4Y23FL/3dicons.png"
// },
// {
//   "tags": ["FREELANCING 101", "Brian Smith"],
//   "title": "Case Study: FlipX, an Investment Attraction Startup",
//   "readTime": "15 min read",
//   "date": "23-05-2023",
//   "image": "https://i.ibb.co/0sMDLNX/Group-1000004815.png"
// },
// {
//   "tags": ["FREELANCING 101", "Lilly Bella"],
//   "title": "Mastering Startup Branding: Expanding Digital Presence",
//   "readTime": "15 min read",
//   "date": "23-05-2023",
//   "image": "https://i.ibb.co/d4Y23FL/3dicons.png"
// },
// {
//   "tags": ["FREELANCING 101", "Gigi Hadid"],
//   "title": "Designing for Productivity: Efficiency Rules",
//   "readTime": "15 min read",
//   "date": "23-05-2023",
//   "image": "https://i.ibb.co/0sMDLNX/Group-1000004815.png"
// },
// {
//   "tags": ["FREELANCING 101", "David Travis"],
//   "title": "Kickstart your UI/UX design career?",
//   "readTime": "15 min read",
//   "date": "23-05-2023",
//   "image": "https://i.ibb.co/d4Y23FL/3dicons.png"
// }