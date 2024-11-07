import { FC } from "react";

interface FeatureItemType {
  icon: string;
  title: string;
  subTitle: string;
}

const FeatureItem: FC<FeatureItemType> = ({ title, subTitle, icon }) => {
  return (
    <div className="col-md-6 mb-5">
      <div className="text-center">
        <i className={`${icon} icon-feature text-gradient d-block mb-3`}></i>
        <h3 className="font-alt">{title}</h3>
        <p className="text-muted mb-0">{subTitle}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
