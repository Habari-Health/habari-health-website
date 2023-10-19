const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_106.svg",
    title: "Convenience and Cost-Efficient.",
    content:
      "No need to travel or wait in a doctor's office. Consult with medical professionals from the comfort of home or wherever you are.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_107.svg",
    title: "Access to Specialists",
    content:
      "Even if you're in a rural or underserved area, you can consult with specialists you might not otherwise have easy access to.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_44.svg",
    title: "Ease of Prescription",
    content:
      "Receive e-prescriptions directly through the app.",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
