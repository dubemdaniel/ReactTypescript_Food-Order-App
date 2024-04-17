import React from "react";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

type T = {
  onClick: () => void;
};

const Success = ({ onClick }: T) => {
  return (
    
      <div className="text-[#46443c] text-center">
        <h1 className="font-bold text-xl">Success!</h1>
        <p>Your Order has been processed successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
        <p className="mt-4">
          <Button onClick={onClick}>Okay</Button>
        </p>
      </div>
  
  );
};

export default Success;
