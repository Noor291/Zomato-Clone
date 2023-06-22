import React from "react";

const DeliverySmCard = ({ image, title, time }) => {
  return (
    <>
      <div className="lg:hidden  rounded-md w-full">
        <div className="w-full h-26">
          <img
            className="w-full h-full object-center shadow-lg  rounded-full"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-sm my-1 text-center font-medium">{title}</h3>
        </div>
        <div>
          <h4 className="text-s font-light my-1 text-center">{time}</h4>
        </div>
      </div>
    </>
  );
};

const DeliveryLgCard = ({ image, title,time }) => {
  return (
    <>
      <div className="hidden lg:block rounded-full w-full">
        <div className="w-full h-26 rounded-full border-slate-700">
          <img
            className=" w-full h-full object-center rounded-full drop-shadow-lg "
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-l font-medium my-1 text-center">{title}</h3>
        </div>
        <div>
          <h4 className="text-s font-light my-1 text-center">{time}</h4>
        </div>
      </div>
    </>
  );
};

const DeliveryCategoryCard = (props) => {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
};

export default DeliveryCategoryCard;