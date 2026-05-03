// import React, { useState, useEffect } from 'react';
// import { ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
// import './Project.css';
// import lost_found from '../image/lost_found.png';
// import inventory from '../image/inventory.png';
// import kpgrandsons from '../image/kpandgrandsons.png';
// import lic from '../image/lic.png';
// import poweroutage from '../image/power_outage.png';

// export default function Projects() {
//   const [currentIndex, setCurrentIndex] = useState(2);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const destinations = [
//     {
//       image: lic,
//       title: "LIC Agent's Portfolio",
//       location: "Developed a responsive portfolio (React.js, External CSS) showcasing LIC and accounting services withwell-structured sections, smooth navigation, and interactive UI elements."
//     },
//     {
//       image: poweroutage,
//       title: "Power Outage Notification",
//       location: "Built a full-stack Power Outage Notification System with real-time tracking and role-based dashboards.Integrated Leaflet.js for interactive maps and location-based outage visualization."
//     },
//     {
//       image: kpgrandsons,
//       title: "KP & Grandsons",
//       location: "Developed ERP frontend with dynamic forms and role-based access.Ensured seamless backend integration for efficient data flow."
//     },
//     {
//       image: inventory,
//       title: "Inventory Management System",
//       location: "Built an Inventory/ERP system for stock management and billing.Implemented real-time tracking with secure role-based access."
//     },
//     {
//       image: lost_found,
//       title: "Lost & Found",
//       location: "Built a lost & found web app with automated item matching and user notifications.Integrated Razorpay for secure item recovery and payments."
//     }
//   ];

//   const getCardStyle = (index) => {
//     const absIndex = ((index - currentIndex + destinations.length) % destinations.length);

//     let position = {
//       transform: '',
//       zIndex: 0,
//       filter: 'blur(8px)',
//       opacity: 0.4
//     };

//     if (absIndex === 0) {
//       // Center card - Clear and focused
//       position = {
//         transform: 'translateX(0%) scale(1.15)',
//         zIndex: 50,
//         filter: 'blur(0px)',
//         opacity: 1
//       };
//     } else if (absIndex === 1) {
//       // Right 1 - Slightly blurred
//       position = {
//         transform: 'translateX(75%) scale(0.9)',
//         zIndex: 40,
//         filter: 'blur(6px)',
//         opacity: 0.5
//       };
//     } else if (absIndex === 2) {
//       // Right 2 - More blurred
//       position = {
//         transform: 'translateX(140%) scale(0.8)',
//         zIndex: 30,
//         filter: 'blur(10px)',
//         opacity: 0.35
//       };
//     } else if (absIndex === destinations.length - 1) {
//       // Left 1 - Slightly blurred
//       position = {
//         transform: 'translateX(-75%) scale(0.9)',
//         zIndex: 40,
//         filter: 'blur(6px)',
//         opacity: 0.5
//       };
//     } else if (absIndex === destinations.length - 2) {
//       // Left 2 - More blurred
//       position = {
//         transform: 'translateX(-140%) scale(0.8)',
//         zIndex: 30,
//         filter: 'blur(10px)',
//         opacity: 0.35
//       };
//     } else {
//       position = {
//         transform: 'translateX(0%) scale(0.6)',
//         zIndex: 0,
//         filter: 'blur(15px)',
//         opacity: 0
//       };
//     }

//     return position;
//   };

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prev) => (prev + 1) % destinations.length);
//       setTimeout(() => setIsAnimating(false), 600);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
//       setTimeout(() => setIsAnimating(false), 600);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, [isAnimating]);

//   return (
//     <div className="relative w-full overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
//       {/* Header */}
//       <div className="relative text-center mb-20">
//         <h2 className="font-bold" style={{
//           fontSize: '48px',
//           lineHeight: '1.2',
//           color: '#ffffff',
//           letterSpacing: '-0.5px'
//         }}>
//           Project Experiences
//         </h2>
//       </div>

//       {/* Slider Container */}
//       <div className="relative flex items-center justify-center" style={{
//         height: '580px',
//         perspective: '2000px'
//       }}>
//         <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
//           {destinations.map((destination, index) => {
//             const style = getCardStyle(index);
//             const isCenter = ((index - currentIndex + destinations.length) % destinations.length) === 0;

//             return (
//               <div
//                 key={index}
//                 className="absolute cursor-pointer transition-all duration-700 ease-out"
//                 style={{
//                   ...style,
//                   width: '450px',
//                   height: '550px'
//                 }}
//                 onClick={() => {
//                   if (!isAnimating && !isCenter) {
//                     setIsAnimating(true);
//                     setCurrentIndex(index);
//                     setTimeout(() => setIsAnimating(false), 600);
//                   }
//                 }}
//               >
//                 <div className="w-full h-full bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl" style={{
//                   borderRadius: '28px',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   display: 'flex',
//                   flexDirection: 'column'
//                 }}>
//                   {/* Image Section - Top (70% of card) */}
//                   <div className="relative" style={{ height: '70%', flexShrink: 0 }}>
//                     <img
//                       src={destination.image}
//                       alt={destination.title}
//                       className="w-full h-full object-cover"
//                       style={{ objectFit: 'cover' }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                   </div>

//                   {/* Content Section - Bottom (30% of card) */}
//                   <div className="relative flex flex-col justify-between px-6 py-5" style={{
//                     height: '30%',
//                     background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.95))'
//                   }}>
//                     {/* Title - Single line with ellipsis if too long */}
//                     <h3 className="text-white font-bold text-center" style={{
//                       fontSize: '24px',
//                       fontWeight: '700',
//                       letterSpacing: '0.3px',
//                       textShadow: '0 2px 8px rgba(0,0,0,0.3)',
//                       marginBottom: '8px',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis'
//                     }}>
//                       {destination.title}
//                     </h3>

//                     {/* Description - 2 lines with ellipsis */}
//                     <p className="text-gray-300 text-center" style={{
//                       fontSize: '13px',
//                       fontWeight: '400',
//                       letterSpacing: '0.2px',
//                       lineHeight: '1.5',
//                       marginBottom: '12px',
//                       display: '-webkit-box',
//                       WebkitLineClamp: '2',
//                       WebkitBoxOrient: 'vertical',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis'
//                     }}>
//                       {destination.location}
//                     </p>

//                     {/* Button - Only show on center card */}
//                     {isCenter && (
//                       <div className="text-center">
//                         <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 font-semibold transition-all duration-300 transform hover:scale-105" style={{
//                           paddingLeft: '28px',
//                           paddingRight: '28px',
//                           paddingTop: '10px',
//                           paddingBottom: '10px',
//                           borderRadius: '25px',
//                           fontSize: '14px',
//                           boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
//                         }}>
//                           Explore Now
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-8 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 z-50 shadow-xl"
//           style={{
//             width: '52px',
//             height: '52px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}
//           aria-label="Previous"
//         >
//           <ChevronLeft style={{
//             width: '28px',
//             height: '28px',
//             color: '#ffffff',
//             strokeWidth: 2.5
//           }} />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-8 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 z-50 shadow-xl"
//           style={{
//             width: '52px',
//             height: '52px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}
//           aria-label="Next"
//         >
//           <ChevronRight style={{
//             width: '28px',
//             height: '28px',
//             color: '#ffffff',
//             strokeWidth: 2.5
//           }} />
//         </button>
//       </div>

//       {/* Dot Indicators */}
//       <div className="relative flex justify-center mt-16" style={{ gap: '10px' }}>
//         {destinations.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               if (!isAnimating) {
//                 setIsAnimating(true);
//                 setCurrentIndex(index);
//                 setTimeout(() => setIsAnimating(false), 600);
//               }
//             }}
//             className="transition-all duration-300 rounded-full"
//             style={{
//               width: index === currentIndex ? '32px' : '10px',
//               height: '10px',
//               backgroundColor: index === currentIndex ? '#06b6d4' : 'rgba(255, 255, 255, 0.3)'
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Project.css';
import lost_found from '../image/lost_found.png';
import inventory from '../image/inventory.png';
import kpgrandsons from '../image/kpandgrandsons.png';
import lic from '../image/lic.png';
import poweroutage from '../image/power_outage.png';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);

  const destinations = [
    {
      image: lic,
      subtitle: "Frontend (React.js)",
      title: "LIC Agent's Portfolio",
      location: "Developed a responsive portfolio (React.js, External CSS) showcasing LIC and accounting services with well-structured sections, smooth navigation, and interactive UI elements.",
      link: "https://kamni-sahu369.github.io/LIC_Aggent-s_portfolio/"
    },
    {
      image: poweroutage,
      subtitle: "Full Stack App",
      title: "Power Outage Notification",
      location: "Built a full-stack Power Outage Notification System with real-time tracking and role-based dashboards. Integrated Leaflet.js for interactive maps and location-based outage visualization.",
      link: "https://power-outage-notification-jxg7.vercel.app/"
    },
    {
      image: kpgrandsons,
      subtitle: "ERP Frontend",
      title: "KP & Grandsons",
      location: "Developed ERP frontend with dynamic forms and role-based access. Ensured seamless backend integration for efficient data flow.",
      link: "https://erp.kpgrandsons.in/"
    },
    {
      image: inventory,
      subtitle: "Full Stack App",
      title: "Inventory Management System",
      location: "Built an Inventory/ERP system for stock management and billing. Implemented real-time tracking with secure role-based access.",
      link: "#"
    },
    {
      image: lost_found,
      subtitle: "Full Stack App (React + Django)",
      title: "Lost & Found",
      location: "Built a lost & found web app with automated item matching and user notifications. Integrated Razorpay for secure item recovery and payments.",
      link: "https://lost-and-found-cgmz.vercel.app/"
    }
  ];

  const getCardStyle = (index) => {
    const absIndex = ((index - currentIndex + destinations.length) % destinations.length);

    let position = { transform: '', zIndex: 0, filter: 'blur(8px)', opacity: 0.4 };

    if (absIndex === 0) {
      position = { transform: 'translateX(0%) scale(1.15)', zIndex: 50, filter: 'blur(0px)', opacity: 1 };
    } else if (absIndex === 1) {
      position = { transform: 'translateX(75%) scale(0.9)', zIndex: 40, filter: 'blur(6px)', opacity: 0.5 };
    } else if (absIndex === 2) {
      position = { transform: 'translateX(140%) scale(0.8)', zIndex: 30, filter: 'blur(10px)', opacity: 0.35 };
    } else if (absIndex === destinations.length - 1) {
      position = { transform: 'translateX(-75%) scale(0.9)', zIndex: 40, filter: 'blur(6px)', opacity: 0.5 };
    } else if (absIndex === destinations.length - 2) {
      position = { transform: 'translateX(-140%) scale(0.8)', zIndex: 30, filter: 'blur(10px)', opacity: 0.35 };
    } else {
      position = { transform: 'translateX(0%) scale(0.6)', zIndex: 0, filter: 'blur(15px)', opacity: 0 };
    }

    return position;
  };

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div id="projects" className="relative w-full overflow-hidden reveal-up" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      {/* Background Half Circle Glow */}
      <div className="bg-glow"></div>

      {/* Header */}
      <div className="relative text-center mb-20">
        <h2 className="font-bold" style={{
          fontSize: '48px',
          lineHeight: '1.2',
          color: '#ffffff',
          letterSpacing: '-0.5px'
        }}>
          Project Experiences
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative flex items-center justify-center" style={{ height: '580px', perspective: '2000px' }}>
        <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
          {destinations.map((destination, index) => {
            const style = getCardStyle(index);
            const isCenter = ((index - currentIndex + destinations.length) % destinations.length) === 0;

            return (
              <div
                key={index}
                className="absolute cursor-pointer transition-all duration-700 ease-out"
                style={{ ...style, width: '390px', height: '450px' }}
                onClick={() => {
                  if (!isAnimating && !isCenter) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 600);
                  }
                }}
              >
                <div
                  className="w-full h-full bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl glow-card"
                  style={{
                    // borderRadius: '28px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '12px',          // ADD
                    boxSizing: 'border-box'
                  }}
                >
                  {/* Image - Top 70% */}
                  <div style={{ height: '45%', flexShrink: 0, position: 'relative' }}>
                    <img
                      src={destination.image}
                      alt={destination.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)'
                    }} />
                  </div>

                  {/* Content - Bottom 30% */}
                  <div style={{
                    height: '55%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.82), rgba(0,0,0,0.96))',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '14px 20px',
                    boxSizing: 'border-box',
                    gap: '5px'
                  }}>

                    {/* Subtitle */}
                    <p style={{
                      margin: 0,
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontWeight: '400',
                      textAlign: 'center',
                      width: '100%',
                      letterSpacing: '0.3px'
                    }}>
                      {destination.subtitle}
                    </p>

                    {/* Title */}
                    <h3 style={{
                      margin: 0,
                      color: '#ffffff',
                      fontSize: '19px',
                      fontWeight: '700',
                      textAlign: 'center',
                      width: '100%',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      letterSpacing: '0.3px'
                    }}>
                      {destination.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      margin: 0,
                      color: '#d1d5db',
                      fontSize: '14px',
                      fontWeight: '400',
                      textAlign: 'center',
                      width: '100%',
                      lineHeight: '1.5',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {destination.location}
                    </p>

                    {/* Button - only center card */}
                    {isCenter && (
                      <a href={destination.link} target="_blank" rel="noopener noreferrer" style={{
                        marginTop: '16px',
                        padding: '10px 28px',
                        fontSize: '14px',
                        background: 'rgb(41, 52, 255)',
                        color: '#ffffff',
                        fontWeight: '600',
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}>
                        Explore Now
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-8 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 z-50 shadow-xl"
          style={{ width: '52px', height: '52px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Previous"
        >
          <ChevronLeft style={{ width: '28px', height: '28px', color: '#ffffff', strokeWidth: 2.5 }} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-8 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 z-50 shadow-xl"
          style={{ width: '52px', height: '52px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Next"
        >
          <ChevronRight style={{ width: '28px', height: '28px', color: '#ffffff', strokeWidth: 2.5 }} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="relative flex justify-center mt-16" style={{ gap: '10px' }}>
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 600);
              }
            }}
            className="transition-all duration-300 rounded-full"
            style={{
              width: index === currentIndex ? '32px' : '10px',
              height: '10px',
              backgroundColor: index === currentIndex ? 'rgb(41, 52, 255)' : 'rgba(255,255,255,0.3)',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}