import { FC, ReactNode } from "react";

interface HorizontalSectionType {
  children: ReactNode;
}

const HorizontalSection: FC<HorizontalSectionType> = ({ children }) => {
  return (
    <section id="features" style={{ width: "100%" }}>
      <div className="container px-5">
        <div className="row gx-5 align-items-center">{children}</div>
      </div>
    </section>
  );
};

export default HorizontalSection;
