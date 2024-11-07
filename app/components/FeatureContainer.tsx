import { FC, ReactNode } from "react";

interface ContainerType {
  children: ReactNode;
}

const FeatureContainer: FC<ContainerType> = ({ children }) => (
  <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0" id="features">
    <div className="container-fluid px-5">
      <div className="row gx-5">{children}</div>
    </div>
  </div>
);

export default FeatureContainer;
