// const BASE_URL = "https://api.movies-olga.nomoredomains.icu/";
// const BASE_URL = "http://localhost:3002";

// function getJsonOrError(res) {
//   if (res.ok) {
//     return res.json();
//   }

//   return Promise.reject(`Ошибка: ${res.status}`);
// }

// export const register = (name, email, password) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name,
//       email,
//       password
//     })
//   })
//     .then(getJsonOrError)
// }

// export const login = (email, password) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email,
//       password
//     })
//   })
//     .then(getJsonOrError)
// }

// export const updateUser = (name, email) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'PATCH',
//     headers: {
//       authorization: `Bearer ${localStorage.getItem('jwt')}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name,
//       email
//     })
//   })
//     .then(getJsonOrError)
// }

// export const checkToken = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     }
//   })
//     .then(getJsonOrError)
// }

  // function handleRegistration(email, password) {
  //   auth.register(email, password)
  //     .then((data) => {
  //       if (data) {
  //         setStatus(true)
  //         setInfoTooltipOpen(true)
  //         history.push('/sign-in');
  //       }
  //     })
  //     .catch((err) => {
  //       setStatus(false)
  //       setInfoTooltipOpen(true)
  //       console.log(err);
  //     })
  // }

  // function handleLogin(email, password) {
  //   auth.login(email, password)
  //     .then((data) => {
  //       console.log(data);
  //       if (data.token) {
  //         localStorage.setItem('jwt', data.token);
  //         setEmail(email)
  //         setLoggedIn(true);
  //         history.push('/');
  //       }
  //     })
  //     .catch((err) => {
  //       setInfoTooltipOpen(true)//открываем попап InfoTooltip
  //       console.log(err);
  //     })
  // }