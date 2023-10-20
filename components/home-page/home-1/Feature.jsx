import Image from "next/image";

const Feature = () => {
  const features = [
    {
      background: "#fffee7",
      title: (
        <>
          Describe symptoms online.
        </>
      ),
      description: "Choose a list of symptoms from the app",
      icon: "images/icon/icon_11.svg",
      width: "140",
      height: "165",
      delay: "100",
    },
    {
      background: "#FBF1FF",
      title: (
        <>
          Talk to a doctor <br />and recieve your treatment.
        </>
      ),
      width: "144",
      height: "170",
      description: "Book an appointment and talk to a doctor",
      icon: "images/icon/icon_60.svg",
      delay: "200",
    },
    {
      background: "#EEFBFA",
      title: (
        <>
          Get a prescription <br /> from expert.
        </>
      ),
      width: "175",
      height: "175",
      description: "Receive an online prescription",
      icon: "images/icon/icon_70.svg",
      delay: "300",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <Image
              width={feature.width}
              height={feature.height}
              layout="intrinsic"
              src={feature.icon}
              alt="icon"
              className="position-absolute"
            />
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
