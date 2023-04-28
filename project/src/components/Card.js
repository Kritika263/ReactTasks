
import React from 'react';
import { getBooks } from '../features/cards/cardSlice';
import '../Card.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Card() {
  const data = useSelector((state) => state.card.booksData);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await fetch('http://localhost:3000/books');
      const jsonData = await data.json();
      dispatch(getBooks(jsonData));
    })();

  }, [dispatch]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id);
    console.log(data);
    navigate(`/books/${id}`, {
      state: {
        ...data.find(obj => obj.id === id)
      },
    });
  };
  return (
    <>

      <div className="outer-div">
        {data.map((item) => {
          return (
            <div key={item.id} className="main-container">
              <h1>{item.volumeInfo.title}</h1>
              <img src={item.volumeInfo.imageLinks.thumbnail} alt="hello"></img>
              <button onClick={() => handleClick(item.id)}>Details</button>
            </div>
          );
        })}
      </div>
    </>
  )

}
export default Card
