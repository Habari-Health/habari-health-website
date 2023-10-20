import { useState } from "react";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    const url = "https://forms.gle/cAqrWbd3WTTQaRhr9";
    event.preventDefault();
    console.log(formData);
    window.open(url, "_blank")
    // You can add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />

        {/* End .col-12 */}

        <div className="col-12">
          <button
            type="submit"
            className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase"
          >
            Fill in form
          </button>
        </div>
        {/* End .col-12 */}
      {/* End .row */}
    </form>
  );
};

export default ContactForm;
