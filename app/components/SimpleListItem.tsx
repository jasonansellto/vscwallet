import { FC } from "react";

interface SimpleListItemType {
  heading: string;
  details: string[];
}

const SimpleListItem: FC<SimpleListItemType> = ({ heading, details }) => {
  return (
    <>
      <h4 className="font-alt mt-5">{heading}</h4>
      <ul>
        {details.map((detail) => (
          <li>
            <p>{detail}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SimpleListItem;
