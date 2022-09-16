import React from 'react'
import Modal from './Modal';

const modalImage = ({url,root}) => {
  return (
    <Modal url={url} root={root} >
     <div style={{display: 'flex',justifyContent: 'center', aligItems: 'center'}}>
       <img style={{width: '40%', height:'170px', objectFit: 'cover'}} src={url} alt="" />
     </div>
    </Modal>
  );
}

export default modalImage