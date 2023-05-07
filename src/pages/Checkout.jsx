// contexti kulllanmamıza sağlayan fonksiyon
import { useContext } from 'react';

// kullanmak (verilerine erişmek) istediğimiz conttext
import CartContext from '../CartContext';

const Checkout = () => {
  // contexten sağlanan verilere abone olma
  const { items } = useContext(CartContext);

  // toplam bulma
  const total = items.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  return (
    <div className="d-grid gap-5 p-4">
      <h1>
        Toplam <span className="badge bg-danger">{total}</span> tl
      </h1>
      {items.map((item) => (
        <div className="d-flex border shadow p-4 justify-content-between align-items-center">
          <img
            src={item.image}
            className="rounded"
            style={{ width: '100px' }}
            alt={item.name}
          />
          <h1>{item.name}</h1>
          <h1 className="text-success">{item.price} tl</h1>
          <p>Miktar: {item.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
