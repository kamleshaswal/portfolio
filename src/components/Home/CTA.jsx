// import React from 'react';
// import Resume from '../../../src/assets/images/KAMLESH_RESUME.pdf'
// import './index.scss';

// const CTA = () => {
//   return (
//     <>
//         <a href={Resume} download className='download-button'>DOWNLOAD CV</a>
//     </>
//   )
// }

// export default CTA;

import React, { useState } from 'react';
import Modal from 'react-modal';
import ResumePDF from '../../../src/assets/images/KAMLESH_RESUME.pdf';
// import './index.scss';
import './style.scss';

Modal.setAppElement('#root'); // Set the root element for accessibility

const CTA = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    const newWindow = window.open(ResumePDF, "_blank", "fullscreen=yes")
    if(newWindow){
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
    
  };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  // const handleDownload = () => {
  //   window.open(ResumePDF, '_blank');
  // };

  return (
    <>
      <button onClick={openModal} className="preview-button">
        PREVIEW RESUME
      </button>
{/* 
    {modalIsOpen && (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Resume Preview"
        className="modal"
        overlayClassName="overlay"
        >

        <div className="modal-content">
          <div className="modal-header">
            <h2>Resume Preview</h2>
            <button onClick={closeModal} className="close-button">
              Close
            </button>
          </div>
          <div className="modal-body">
            <iframe src={ResumePDF} title="Resume Preview" className="pdf-preview" />
          </div>
        </div>
      </Modal>)} */}
    </>
  );
};

export default CTA;
