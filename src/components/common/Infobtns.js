
import Resume from '../../assets/files/Resume.pdf';


const Infobtn = () => {

  const handleResumeClick = () => {
    window.open(Resume, '_blank');
  };


  return (
    <div class="p-3">

      
      <button type="button" class="btn btn-dark btn-lg m-2" onClick={handleResumeClick}>
        Resume
      </button>


    </div>
  );
};

export default Infobtn;