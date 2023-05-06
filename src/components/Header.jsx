import { Link, useNavigate } from 'react-router-dom';
// contexti kulllanmamıza sağlaya nfonksiyon
import { useContext } from 'react';
// kullanmak istediğimiz  context
import CartContext from '../CartContext';

const Header = () => {
  const navigate = useNavigate();
  // kullanmak istediğim contexte abone oldum
  const { items } = useContext(CartContext);

  return (
    <header className="navbar bg-dark text-light">
      <div className="container-fluid">
        <Link to="/">
          <h1 className="text-light">Giyim</h1>
        </Link>
        <a href="udemig.com">deneme</a>
        <div
          className="d-flex gap-3 fs-4"
          onClick={() => navigate('/checkout')}
        >
          <i class="bi bi-cart"></i>
          <span className="badge bg-danger">{items.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
