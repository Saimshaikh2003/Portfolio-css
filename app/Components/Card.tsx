import React from 'react'
import Image from 'next/image';
import '../styles/card.css'
interface propsType {
    title : string;
    desc :string;
    img : string;
    tags: string[];
}

const Card:React.FC<propsType> = ({title , desc , img , tags}) => {
  return (
    <div className={`Card ${window.innerWidth >= 640 ? 'card-sm' : ''}`} data-aos="zoom-in-down">
        <div>
        <Image className = {`card-image ${window.innerWidth >=640 ? 'card-img-sm' : ''}`} 
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

export default Card;
