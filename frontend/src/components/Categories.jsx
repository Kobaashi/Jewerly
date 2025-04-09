import React from 'react';

const Categories = ({ chooseCategory }) => {
  const categories = [
    { key: 'all', name: 'Все' },
    { key: 'rings', name: 'Каблучки' },
    { key: 'earrings', name: 'Сережки' },
    { key: 'bracletes', name: 'Браслети' },
    { key: 'watchs', name: 'Годиники' },
    { key: 'necklace', name: 'Підвіски' },
  ];

  return (
    <div className='categories'>
      {categories.map(el => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
