import ReactFlipCard from "reactjs-flip-card"
import EditCardAppo from "./EditCardAppo"
import ViewCardAppo from "./ViewCardAppo"
import { useState } from "react";

const CardFlipp = ({appoiment}:any) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    const flipCardStyle = {
        height: '13%'
      };
    return (
        <ReactFlipCard
            flipByProp={isFlipped}
            flipTrigger="disabled"
            containerStyle={flipCardStyle}
            containerCss="w-full"
            frontComponent={<ViewCardAppo appoiment={appoiment} onFlip={handleFlip} />}
            backComponent={<EditCardAppo appoiment={appoiment} onFlip={handleFlip} />}
        />
    )
}

export default CardFlipp

