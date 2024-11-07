import "./globals.css";
import HeroSection from "./components/HeroSection";
import FeatureItem from "./components/FeatureItem";
import FeatureContainer from "./components/FeatureContainer";
import MobileMockup from "./components/MobileMockup";
import HorizontalSection from "./components/HorizontalSection";
import DownloadSection from "./components/DownloadSection";
import TokenSection from "./components/TokenSection";
import { contents } from "./contents/contents";

const features = [
  {
    icon: "bi-phone",
    title: "User-Friendly Interface",
    subTitle: "Navigate easily with a simple and intuitive design!",
  },
  {
    icon: "bi-shield-check",
    title: "Robust Security",
    subTitle: "Advanced protection for your digital assets.",
  },
  {
    icon: "bi-shield-check",
    title: "Fast Transactions",
    subTitle: "Quick and low-cost transactions.",
  },
  {
    icon: "bi-currency-exchange",
    title: "Dapp Enabled",
    subTitle: "Seamlessly connect and interact with decentralized apps.",
  },
];
export default function Home() {
  return (
    <>
      <HeroSection
        header={contents.homepage.heading}
        subHeader={contents.homepage.subHeading}
        appStoreLink={contents.common.appStoreLink}
        playStoreLink={contents.common.playStoreLink}
      />
      <HorizontalSection>
        <FeatureContainer>
          {features.map(({ icon, title, subTitle }) => (
            <FeatureItem icon={icon} title={title} subTitle={subTitle} />
          ))}
        </FeatureContainer>
        <MobileMockup imgSrc="./browser-screen.webp" mobileAlign="right" />
      </HorizontalSection>
      <TokenSection
        sectionHeader={contents.homepage.sectionHeading}
        tokens={contents.homepage.tokens}
      />
      <DownloadSection
        header={contents.homepage.ctaText}
        appStoreLink={contents.common.appStoreLink}
        playStoreLink={contents.common.playStoreLink}
      />
    </>
  );
}
