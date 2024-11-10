import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../Styles/card.css";
interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  const [isClient, setIsClient] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Run only on the client side
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Initial check and event listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (!isClient) return null;
  // Initial check and event listener for resi

  return (
    <div
      className={`Card ${window.innerWidth >= 640 ? "card-sm" : ""}`}
      data-aos="zoom-in-down"
    >
      <div>
        <Image
          className={`card-image ${!isSmallScreen ? "card-img-sm" : ""}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
{
  /*
    <div className={`Card ${!isSmallScreen ? "card-sm" : ""}`} data-aos="zoom-in-down">
        <div>
        className={`card-image ${!isSmallScreen ? "card-img-sm" : ""}`}
        src={img}
        width = {350}
        height = {350}
        alt ={title}
        />
        </div>

        <div className="card-content" >
          <div className="card-title">{title}</div>
          <div>{desc}</div>
          <div>
            {tags.map((el) => (
              <div className="card-tags" key={el}>
                {el}
              </div>))}
          </div>
        </div>
    </div>
    
  );
};

export default Card; */
}
