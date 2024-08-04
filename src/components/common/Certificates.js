import Certificatesofcompletion from "./Certificatesofcompletion";
import "../../css/Certificate.css";

const Certifications = () => {
  return (
    <div class=" container p-4">
      <h1>Certifications</h1>
      <p>Here are some certifications I have received.</p>
      <p>Swipe tp see all my Certificates of Completion</p>

      <div class=" container-sm">
        <Certificatesofcompletion />
      </div>
    </div>
  );
};

export default Certifications;
