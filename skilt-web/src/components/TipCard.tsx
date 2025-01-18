import React from "react"
import './TipCard.scss'
const TipCard = (props: React.PropsWithChildren) => {
    const bool: boolean = true
    return(
            <div className="TipCardContainer">
                {props.children}
            </div>
    )   
}
export default TipCard