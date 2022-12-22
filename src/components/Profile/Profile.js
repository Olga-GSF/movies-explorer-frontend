import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import * as auth from '../../utils/auth';

function Profile() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const history = useHistory();
  const [initialName, setInitialName] = useState();
  const [initialEmail, setInitialEmail] = useState();

  useEffect(() => {
    auth.checkToken(localStorage.getItem('jwt'))
      .then(data => {
        console.log(data)
        if (data) {
          console.log(data);
          setName(data.data.name);
          setInitialName(data.data.name)
          setEmail(data.data.email)
          setInitialEmail(data.data.email)
        }
      })
  }, []);

  const logOut = (evt) => {
    evt.preventDefault();
    localStorage.removeItem('jwt');
    history.push('/');
  }

  const handleEdit = (evt) => {
    evt.preventDefault();
    auth.updateUser(name, email)
      .then(data => console.log(data))
  }
  console.log(initialName !== name);
  return (
    <>
      <Header />
      <section className="profile">
        <div className='profile__title-container'>
          <h2 className="profile__title">Привет, {name}!</h2>
        </div>
        <form className="profile__form" onSubmit={handleEdit}>
          <label className="profile__input-label">Имя
            <input className='profile__input' type="text" defaultValue={name} onChange={(evt) => setName(evt.target.value)} id="name"
              minLength="2" maxLength="20" />
          </label>
          <label className="profile__input-label">Email
            <input className='profile__input' type="email" defaultValue={email} onChange={(evt) => setEmail(evt.target.value)} name="email" id="email" />
          </label>
          <div className='profile__link-container'>
            <button type='submit' className={initialName !== name || initialEmail !== email ? "profile__head-link" : "profile__head-link profile__head-link_disabled"} disabled={initialName !== name || initialEmail !== email ? false : true}>Редактировать</button>

            <button type='button' onClick={logOut} className="profile__head-link profile__head-link_red">Выйти из аккаунта</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Profile;
