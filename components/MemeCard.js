'use client'
import React, { useRef } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const MemeCardContainer = ({ children }) => {
  const isMobile = useIsMobile();
  const scrollRef = useRef(null);

  if (!isMobile) {
    return children;
  }

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {React.Children.map(children, (child) => (
        <div className="min-w-[280px] snap-start">
          {child}
        </div>
      ))}
    </div>
  );
};

const MemeCard = ({ name, price, marketCap, change, verified, imageUrl, backgroundColor = 'bg-[#C25353]' }) => {
  return (
    <div
      className="rounded-xl overflow-hidden border border-gray-200"
      style={{ boxShadow: "0px 4px 16px 0px #00000014" }}
    >
      <div className="aspect-square bg-gray-100">
        {imageUrl ? (
        <img
          src={imageUrl}
          alt="image"
          className="w-full h-full object-cover object-center"
        />) : (
            <div className={`w-full h-full ${backgroundColor}`}>

            </div>)}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">{name}</span>
            {verified && (
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.98266 -0.702642C9.51526 -1.33122 10.4847 -1.33122 11.0173 -0.702642L11.6591 0.0548377C11.9857 0.440291 12.502 0.608071 12.9928 0.488191L13.9572 0.252598C14.7575 0.0570978 15.5419 0.626951 15.6033 1.4485L15.6772 2.43854C15.7149 2.94233 16.034 3.38158 16.5015 3.57306L17.4202 3.94934C18.1826 4.26157 18.4822 5.18364 18.0489 5.88437L17.5269 6.72877C17.2612 7.1585 17.2612 7.70144 17.5269 8.13117L18.0489 8.97557C18.4822 9.6763 18.1826 10.5984 17.4202 10.9106L16.5015 11.2869C16.034 11.4784 15.7149 11.9176 15.6772 12.4214L15.6033 13.4114C15.5419 14.233 14.7575 14.8028 13.9572 14.6074L12.9928 14.3718C12.502 14.2518 11.9857 14.4196 11.6591 14.8051L11.0173 15.5626C10.4847 16.1912 9.51526 16.1912 8.98266 15.5626L8.34092 14.8051C8.01432 14.4196 7.49799 14.2518 7.00719 14.3718L6.04278 14.6074C5.24246 14.8028 4.45812 14.233 4.39674 13.4114L4.32278 12.4214C4.28514 11.9176 3.96601 11.4784 3.4985 11.2869L2.57978 10.9106C1.8174 10.5984 1.51781 9.6763 1.95106 8.97557L2.47314 8.13117C2.73882 7.70144 2.73882 7.1585 2.47314 6.72877L1.95106 5.88437C1.51781 5.18364 1.8174 4.26157 2.57978 3.94934L3.4985 3.57306C3.96601 3.38158 4.28514 2.94233 4.32278 2.43854L4.39674 1.4485C4.45812 0.626951 5.24246 0.0570978 6.04278 0.252598L7.00719 0.488191C7.49799 0.608071 8.01432 0.440291 8.34092 0.0548377L8.98266 -0.702642Z"
                  fill="#2081E2"
                />
                <path
                  d="M9.00002 9.17997L7.25002 7.42997L6.66669 8.01331L9.00002 10.3466L14 5.34664L13.4167 4.76331L9.00002 9.17997Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.666667"
                />
              </svg>
            )}
          </div>
          {change !== undefined && (
            <span
              className={`flex items-center ${
                change >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {change >= 0 ? "▲" : "▼"} {Math.abs(change)}%
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div>
            <div>Price</div>
            <div className="font-medium text-black">${price}</div>
          </div>
          <div>
            <div>Market Cap</div>
            <div className="font-medium text-black">${marketCap}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MemeCard, MemeCardContainer };
