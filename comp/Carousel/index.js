import { useState } from "react";


const imgData = [
    {id: 0, value: "Achieve Excellence", img: "../carousel-images/0.jpg"},
    {id: 1, value: "Embrace Innovation", img: "../carousel-images/1.jpg"},
    {id: 2, value: "Champion Diversity", img: "../carousel-images/2.jpg"},
    {id: 3, value: "Pursue Collaboration", img: "../carousel-images/3.jpg"},
    {id: 4, value: "Engage With Respect", img: "../carousel-images/4.jpg"}

];


export default function Carousel() {

    const [current, setCurrent] = useState(0);
    const length = imgData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return(
      <>
            <div className="slider">
                {imgData.map((data, index) => (
                    <div className="slide">
                      <img key={index} src={data.img}></img>
                      <p>{data.value}</p>
                    </div>
                ))}

              <button className="btn btn-prev" onClick={prevSlide}>left</button>
              <button className="btn btn-next" onClick={nextSlide}>right</button>
            </div>
      </>
    )
}


