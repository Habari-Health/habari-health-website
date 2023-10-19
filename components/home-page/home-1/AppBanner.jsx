const AppBanner = () => {
  const features = [
    "Virtual Consultations",
    "Scheduling and Appointment Management",
    "Prescriptions",
  ];

  const buttons = [
    {
      platform: "Google play",
      icon: "images/icon/playstore.svg",
      className: "windows-button",
    },
    {
      platform: "App store",
      icon: "images/icon/apple-black.svg",
      className: "ios-button",
    },
  ];

  return (
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one">
            <div className="sc-title text-uppercase">MOBILE APP</div>
            <h2 className="main-title fw-500 tx-dark m0">
              Download our Application.
            </h2>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
            Virtual Visits, Real Results
          </p>
          <ul className="style-none list-item">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {/* End list */}

          <div className="d-sm-flex align-items-center platform-button-group-three mt-55 lg-mt-30">
            {buttons.map((button, index) => (
              <a
                href="#"
                className={`d-flex align-items-center ${button.className}`}
                key={index}
              >
                <img src={button.icon} alt="" className="lazy-img icon" />
                <div>
                  <span>Get it on</span>
                  <strong>{button.platform}</strong>
                </div>
              </a>
            ))}
          </div>
          {/* /.platform-button-group-three */}
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}
    </div>
  );
};

export default AppBanner;
