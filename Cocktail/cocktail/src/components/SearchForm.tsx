import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../Context';

const SearchForm: React.FC = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchValue.current) {
      searchValue.current.focus();
    }
  }, []);

  const searchCocktail = () => {
    if (searchValue.current) {
      setSearchTerm(searchValue.current.value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
