import { useState } from "react";
import ReactFlipCard from "reactjs-flip-card";
import Login from "../components/AuthComponent/Login";
import Register from "../components/AuthComponent/Register";

const Auth = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
  return (
    <>
        <div className="w-full h-full bg-white dark:bg-black">
        <ReactFlipCard
            flipByProp={isFlipped}
            flipTrigger="disabled"
            containerCss="h-full w-full"
            frontComponent={<Login onFlip={handleFlip} />}
            backComponent={<Register onFlip={handleFlip} />}
            />
        </div>
    </>
  )
}

export default Auth
