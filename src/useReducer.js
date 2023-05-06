import './App.css';
import { useState, useReducer } from 'react';

//  action > bir olayı temsil eden objedir
//  type özelliği > action türünü belirtir ve stringdir
//  actionlar uygulamanın durumunu güncellemek için kullanlılr
//  dispatch fonksiyonu aracılığıyla çalıştırılır
function reducer(state, action) {
  switch (action.type) {
    case 'SET_BOOK':
      return {
        ...state,
        book: action.value,
      };

    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.value],
      };
    default:
      return state;
  }
}
// reducer > görevi statei güncellemek

function App() {
  // useReducer(): React hooklarından biri, state yönetiminde kullanılır
  const [state, dispatch] = useReducer(reducer, {
    books: [],
    book: '',
  });

  const handleSubmit = (e) => {
    dispatch({
      type: 'ADD_BOOK',
      value: state.book,
    });
    e.preventDefault();
  };

  const handleChange = (e) => {
    dispatch({
      type: 'SET_BOOK',
      value: e.target.value,
    });
  };

  return (
    <div className="App">
      <h1>Kitaplar</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={state.book}
          type="text"
          onChange={handleChange} // (e) => setBook(e.target.value)
        />
        <button disabled={!state.book} type="submit">
          Gönder
        </button>
      </form>
      <ol>
        {state.books.map((kitap) => (
          <li>{kitap} </li>
        ))}
      </ol>
    </div>
  );
}
