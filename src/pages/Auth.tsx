import { useState } from "react";
import ReactFlipCard from "reactjs-flip-card";
import Login from "../components/AuthComponent/Login";
import Register from "../components/AuthComponent/Register";

const Auth = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    const flipCardStyle = {
        width: '100%',
        heith: '100%'
      };
  return (
    <>
        <ReactFlipCard
            flipByProp={isFlipped}
            flipTrigger="disabled"
            containerStyle={flipCardStyle}
            frontComponent={<Login onFlip={handleFlip} />}
            backComponent={<Register onFlip={handleFlip} />}
        />
    </>
  )
}

export default Auth
