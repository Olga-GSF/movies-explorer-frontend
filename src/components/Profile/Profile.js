import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import MainApi from '../../utils/MainApi';
import InfoTooltip from "../InfoToolTip/InfoToolTip";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile() {
  const { setUserData, userData } = useContext(CurrentUserContext);
  const [name, setName] = useState(userData && userData.data.name);
  const [email, setEmail] = useState(userData && userData.data.email);
  const history = useHistory();
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (userData === undefined) {
      MainApi.checkToken(localStorage.getItem('jwt'))
        .then(data => {
          console.log('request');
          console.log(data)
          if (data) {
            console.log(data);
            setIsLoad(true);
            setName(data.data.name);
            setEmail(data.data.email)
            setUserData(data);
          }
        })
    }
  }, []);


  const logOut = (evt) => {
    evt.preventDefault();
    localStorage.removeItem('jwt');
    localStorage.removeItem('search-movies');
    localStorage.setItem('auth-status', false)
    localStorage.setItem("search-text", '');

    history.push('/');
  }

  const handleEdit = (evt) => {
    setButtonDisabled(true)
    evt.preventDefault();
    MainApi.updateUser(name, email)
      .then(data => {
        setUserData(data)
        setStatus(true)
        setInfoTooltipOpen(true)
      })
      .catch((err) => {
        setStatus(false)
        setInfoTooltipOpen(true) //открываем попап InfoTooltip
        console.log(err);
      })
  }


  return (
    <>
      <Header />
      <section className="profile">
        <div className='profile__title-container'>
          <h2 className="profile__title">Привет, {userData && userData.data.name}!</h2>
        </div>
        <form className="profile__form" onSubmit={handleEdit}>
          <label className="profile__input-label">Имя
            <input className='profile__input' type="text" defaultValue={userData && userData.data.name} onChange={(evt) => setName(evt.target.value)} id="name"
              minLength="2" maxLength="20" />
          </label>
          <label className="profile__input-label">Email
            <input className='profile__input' type="email" defaultValue={userData && userData.data.email} onChange={(evt) => setEmail(evt.target.value)} name="email" id="email" />
          </label>
          <div className='profile__link-container'>

            <button type='submit' className={userData && userData.data.name !== name || userData && userData.data.email !== email ? "profile__head-link" : "profile__head-link profile__head-link_disabled"} disabled={userData && userData.data.name !== name || userData && userData.data.email !== email ? false : true}>Редактировать</button>

            <button type='button' onClick={logOut} className="profile__head-link profile__head-link_red">Выйти из аккаунта</button>
          </div>
        </form>
        <InfoTooltip isOpen={isInfoTooltipOpen} status={status} onClose={setInfoTooltipOpen} />
      </section>
    </>
  )
}

export default Profile;

// onClick={(evt) => savedBut(evt)}
// disabled={initialName !== name || initialEmail !== email ? false : true}

// onClick={(evt) => savedBut(evt)}
// disabled={initialName !== name || initialEmail !== email ? false : true}