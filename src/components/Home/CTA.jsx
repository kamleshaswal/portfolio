import React from 'react';
import Resume from '../../../src/assets/images/KAMLESH_RESUME.pdf'
import './index.scss';

const CTA = () => {
  return (
    <>
        <a href={Resume} download className='flat-button'>DOWNLOAD</a>
    </>
  )
}

export default CTA;