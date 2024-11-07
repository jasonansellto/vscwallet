import { FC } from "react";
import MobileMockup from "./MobileMockup";
import Link from "next/link";

interface HeroSectionType {
  header: string;
  subHeader: string;
  playStoreLink: string;
  appStoreLink: string;
}

const HeroSection: FC<HeroSectionType> = ({
  header,
  subHeader,
  appStoreLink,
  playStoreLink,
}) => {
  return (
    <header className="masthead" id="page-top">
      <div className="container px-5">
        <div className="row gx-5 align-items-center" style={{ width: "100%" }}>
          <div className="col-lg-6">
            <div className="mb-5 mb-lg-0 text-center text-lg-start">
              <h1 id="heading" className="display-1 lh-1 mb-3">
                {header}
              </h1>
              <p id="subHeading" className="lead fw-normal text-muted mb-5">
                {subHeader}
              </p>
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <Link
                  className="me-lg-3 mb-4 mb-lg-0"
                  href={playStoreLink}
                  id="play-store-link"
                  target="_blank"
                >
                  <img
                    className="app-badge"
                    src="./google-play-badge.svg"
                    alt="..."
                  />
                </Link>
                <Link href={appStoreLink} id="app-store-link" target="_blank">
                  <img
                    className="app-badge"
                    src="./app-store-badge.svg"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
          </div>
          <MobileMockup imgSrc="./main-screen.webp" mobileAlign="center" />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
