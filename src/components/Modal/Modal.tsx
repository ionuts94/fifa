import { useEffect, useState } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../redux/app';

// Types
import type { modal } from '../../redux/app';
import type { RootState } from '../../redux/store';

import './Modal.scss';

function Modal() {
  const dispatch = useDispatch();

  const modal: modal = useSelector((state: RootState) => state.app.modal);

  const [initialModalMount, setInitialModalMount] = useState(true);

  function handleModalClose() {
    dispatch(setModal({
      isVisible: false,
      content: ''
    }))
  }

  useEffect(function () {
    if (modal.isVisible) {
      console.log('Modal mounted is visble');
      setInitialModalMount(false);
    }
  }, [modal])

  return (
    <div
      className={`modal-container ${modal.isVisible
        ? 'show-modal-overlay'
        : initialModalMount
          ? 'hide-modal-overlay-no-animation'
          : 'hide-modal-overlay'}`
      }
      onClick={handleModalClose}
    >
      <div
        className={`modal-fields ${modal.isVisible
          ? 'show-modal-fields'
          : 'hide-modal-fields'}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        {modal?.content}
      </div>
    </div>
  )
}

export default Modal