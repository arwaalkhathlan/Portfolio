import ContactForm from "../common/ContactForm";
import socialbtns from "../common/socialbtns";

const Contact = () => {
  return (
    <div class="bg-dark text-white vh-100 justify-content-center align-items-center ">
      <p class="fs-1 pt-5 d-flex justify-content-center align-items-center ">
        Contact Me
      </p>
      <p class="fs-5 d-flex justify-content-center align-items-center ">
        Feel free to reach out to me!
      </p>
      <div className="container">
        {socialbtns()}

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
