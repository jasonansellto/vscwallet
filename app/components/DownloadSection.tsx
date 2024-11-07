import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface DownloadSectionType {
  header: string;
  playStoreLink: string;
  appStoreLink: string;
}

const DownloadSection: FC<DownloadSectionType> = ({
  header,
  appStoreLink,
  playStoreLink,
}) => (
  <section className="bg-gradient-primary-to-secondary" id="download">
    <div className="container px-5">
      <h2 className="text-center text-white font-alt mb-4" id="cta-text">
        {header}
      </h2>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
        <Link
          className="me-lg-3 mb-4 mb-lg-0"
          href={playStoreLink}
          id="play-store-link"
          target="_blank"
        >
          <Image
            height={50}
            width={300}
            className="app-badge"
            src="./google-play-badge.svg"
            alt="..."
          />
        </Link>
        <Link href={appStoreLink} id="app-store-link" target="_blank">
          <Image
            height={50}
            width={300}
            className="app-badge"
            src="./app-store-badge.svg"
            alt="..."
          />
        </Link>
      </div>
    </div>
  </section>
);

export default DownloadSection;
