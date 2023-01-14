import UnionNo from '../../images/UnionNo.svg';
import UnionOk from '../../images/UnionOk.svg';
import { useEffect } from 'react';

function InfoTooltip({ isOpen, onClose, status }) {

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
    <section onClick={() => onClose(false)} className={`infotool__popup ${isOpen && 'infotool__popup_is-open'}`}>
      <div className='infotool__content'>
        <button className='infotool__button-close' type='button' onClick={() => onClose(false)} aria-label="close" />
        {status ? (<>
          <img src={`${UnionOk}`} alt="Успешная регистрация" className='infotool__image' />
          <p className='infotool__message'>
            Данные успешно сохранены!
          </p>
        </>)
          :
          (<>
            <img src={`${UnionNo}`} alt="Что-то пошло не так" className='infotool__image' />
            <p className='infotool__message'>
              Что-то пошло не так! Попробуйте ещё раз.
            </p>
          </>
          )
        }
      </div>
    </section>
  )
}

export default InfoTooltip;