/*
Created by: kathe
On: 28-Jul-21 : 28-Jul-21
Project: meals-order-section11
*/
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop/Backdrop';
import Overlay from './Overlay/Overlay';
import cssStyle from './ModalComponent.module.css';

const ModalComponent = (props) => {
  const portalElement = document.getElementById('overlays');

  return (
    <Fragment>
      { ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement) }
      { ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement) }
    </Fragment>
  );
};

export default ModalComponent;
