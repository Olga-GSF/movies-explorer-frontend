import { useEffect } from "react";


function InfoTooltipError({ isOpen, onClose, errorMessage }) {

  useEffect(() => {
    const closeByEscape = (evt) => {
      if (evt.key === 'Escape') {
        onClose(false);
      }
    }
    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape)
  }, [])

  return (
    <section onClick={() => onClose(false)} className={`infotool-error__popup ${isOpen && 'infotool-error__popup_is-open'}`}>
      <div className='infotool-error__content'>
        <button className='infotool-error__button-close' type='button' onClick={() => onClose(false)}></button>
        <p className='infotool-error__message'>
          {errorMessage}
        </p>
      </div>
    </section>
  )
}

export default InfoTooltipError;