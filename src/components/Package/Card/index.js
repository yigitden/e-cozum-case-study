import ImageCard from "../ImageCard";
import Content from "../Content";
import { useAppDispatch, useAppSelector } from "../../../store";
import { addPackagetoBasket } from "../../../features/BasketSlice";
import { useState } from "react";

const PackageCard = ({ card }) => {
  const dispatch = useAppDispatch();

  const [isSelected, setIsSelected] = useState(false);

  const addPackage = (id, name, amount) => {
    dispatch(addPackagetoBasket({ id, name, amount }));
    setIsSelected(!isSelected);
  };

  return (
    <>
      <div
        className={` ${isSelected ? "packageCardSelected" : "packageCard"}`}
        id="packageCard"
        onClick={() => addPackage(card.id, card.name, card.amount)}
      >
        <ImageCard card={card} />
        <Content card={card} />
      </div>
    </>
  );
};

export default PackageCard;
