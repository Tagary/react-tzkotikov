import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const FavoritePages = () => {
  const { cat } = useTypedSelector((state) => state.favorite);
  const { unsetFavorite } = useActions();

  const handlerDeleteFavor = (dataid: string) => {
    let favorCat = cat.filter((onecat) => {
      return onecat.id !== dataid;
    });
    unsetFavorite(favorCat);
  };

  return (
    <div className="box__image">
      {cat.map((favorcat) => (
        <div className="container__image">
          <img src={favorcat.url} className="image__cat" alt="" />
          <div className="favorite__cat favorite__catclick">
            <svg
              onClick={() => handlerDeleteFavor(favorcat.id)}
              width="40"
              height="37"
              viewBox="0 0 40 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
                fill="#FF3A00"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritePages;
