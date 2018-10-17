import React from 'react';
import PortalModal from './PortalModal';

export default (props) => (
  <PortalModal className="chore-modal" onClick={ props.closeModal }>
    <div className="row chore-modal-body">
      {
        (props.msg && props.msg != '') && <div class="alert alert-danger" role="alert">
        {props.msg}
      </div>
      }
      
      <div className="col-12"><button className="modal-close" onClick={props.closeModal}>&#10006;</button></div>
      <div className="col-12">
        <center>
          <h3>Digite su nueva tarea</h3>
        </center>
      </div>
      <div className="col-12 flex justify-center">
        <input type="text" placeholder="tarea por hacer" className="col-6" ref={props.inputChore} onKeyDown={props.onKeyDown}/>
      </div>
      <div className="col-12 flex justify-center">
        <button className="btn btn-success" ref={props.addChoreBtn} onClick={props.addChore}>Agregar nueva tarea</button>
      </div>
    </div>
  </PortalModal>
);