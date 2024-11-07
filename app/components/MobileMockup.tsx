import { FC } from "react";

interface MobileContainerType {
  mobileAlign?: "left" | "right" | "center";
  imgSrc: string;
}

const MobileMockup: FC<MobileContainerType> = ({
  mobileAlign = "center",
  imgSrc,
}) => {
  if (mobileAlign == "right") {
    return (
      <div className="col-lg-4 order-lg-0">
        <div className="features-device-mockup">
          <svg
            className="circle"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="circleGradient"
                gradientTransform="rotate(45)"
              >
                <stop className="gradient-start-color" offset="0%"></stop>
                <stop className="gradient-end-color" offset="100%"></stop>
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            className="shape-1 d-none d-sm-block"
            viewBox="0 0 240.83 240.83"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-32.54"
              y="78.39"
              width="305.92"
              height="84.05"
              rx="42.03"
              transform="translate(120.42 -49.88) rotate(45)"
            ></rect>
            <rect
              x="-32.54"
              y="78.39"
              width="305.92"
              height="84.05"
              rx="42.03"
              transform="translate(-49.88 120.42) rotate(-45)"
            ></rect>
          </svg>
          <svg
            className="shape-2 d-none d-sm-block"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <div className="device-wrapper">
            <div
              className="device"
              data-device="iPhoneX"
              data-orientation="portrait"
              data-color="black"
            >
              <div className="screen bg-black">
                <img
                  src={imgSrc}
                  style={{ maxWidth: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (mobileAlign == "left") {
    return (
      <div className="col-lg-4 order-lg-0">
        <div className="features-device-mockup">
          <svg
            className="circle"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="circleGradient"
                gradientTransform="rotate(45)"
              >
                <stop className="gradient-start-color" offset="0%"></stop>
                <stop className="gradient-end-color" offset="100%"></stop>
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            className="shape-1 d-none d-sm-block"
            viewBox="0 0 240.83 240.83"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-32.54"
              y="78.39"
              width="305.92"
              height="84.05"
              rx="42.03"
              transform="translate(120.42 -49.88) rotate(45)"
            ></rect>
            <rect
              x="-32.54"
              y="78.39"
              width="305.92"
              height="84.05"
              rx="42.03"
              transform="translate(-49.88 120.42) rotate(-45)"
            ></rect>
          </svg>
          <svg
            className="shape-2 d-none d-sm-block"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <div className="device-wrapper">
            <div
              className="device"
              data-device="iPhoneX"
              data-orientation="portrait"
              data-color="black"
            >
              <div className="screen bg-black">
                <img
                  src={imgSrc}
                  style={{ maxWidth: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-lg-6">
      <div className="masthead-device-mockup">
        <svg
          className="circle"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="circleGradient" gradientTransform="rotate(45)">
              <stop className="gradient-start-color" offset="0%"></stop>
              <stop className="gradient-end-color" offset="100%"></stop>
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg
          className="shape-1 d-none d-sm-block"
          viewBox="0 0 240.83 240.83"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-32.54"
            y="78.39"
            width="305.92"
            height="84.05"
            rx="42.03"
            transform="translate(120.42 -49.88) rotate(45)"
          ></rect>
          <rect
            x="-32.54"
            y="78.39"
            width="305.92"
            height="84.05"
            rx="42.03"
            transform="translate(-49.88 120.42) rotate(-45)"
          ></rect>
        </svg>
        <svg
          className="shape-2 d-none d-sm-block"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <div className="device-wrapper">
          <div
            className="device"
            data-device="iPhoneX"
            data-orientation="portrait"
            data-color="black"
          >
            <div className="screen bg-black">
              <img src={imgSrc} style={{ maxWidth: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMockup;
