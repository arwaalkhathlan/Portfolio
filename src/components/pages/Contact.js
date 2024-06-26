
import ContactForm from "../common/ContactForm";
import socialbtns from "../common/socialbtns";  

const Contact = () => {
  

  return (
    <div className="container mt-5">
      <h2 class="d-flex justify-content-center align-items-center">
        Contact Me
      </h2>
      <div class="d-flex justify-content-center align-items-center">
        {socialbtns()}
      </div>
     <ContactForm />
    </div>
  );
};

export default Contact;
