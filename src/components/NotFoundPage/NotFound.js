import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <section className="not-found">
        <p className="not-found__title">404</p>
        <p className="not-found__subtitle">Страница не найдена</p>
        <Link to="/" className="not-found__button">Назад</Link>
      </section>
    </>
  )
}

export default NotFound;