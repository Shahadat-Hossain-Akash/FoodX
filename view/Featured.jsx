import Image from "next/image"
import { useState } from "react"
import style from "../styles/Featured.module.css"


const Featured = () => {

        const [index,setIndex] = useState(0)

    const images = ["/image/foodbanner2.png",
    "/image/foodbanner3.png","/image/foodbanner2.png",];

    const manageArrow =(direction)=>{
        if (direction==="l"){
            setIndex(index !== 0 ? index-1: 2)
        }
        if (direction==="r"){
            setIndex(index !== 2 ? index+1: 0)
        }
    }

    console.log(index)

    return (
    <div className= {style.container}>
        <div className= {style.arrowContainer} style={{right:30}} onClick={()=> manageArrow("r")}>
        <Image src="/image/Chevron Right.png" alt="" layout="fill"/>
        </div>
        
        <div className= {style.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            
                {images.map( (img, i) => (
                <div className= {style.imageContainer } key={i}>
                <Image src={img}  alt="" layout="fill" objectFit="contain"/>
                </div>
                ))}
                
            
        </div>
        <div className= {style.arrowContainer} style={{left:30}} onClick={()=> manageArrow("l")}>
        <Image src="/image/Chevron Left.png" alt="" layout="fill"/>
        </div>
    </div>
    )
}

export default Featured
