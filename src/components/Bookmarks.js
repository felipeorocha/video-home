import React from 'react';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Bookmarks = () => {
return (
    <div style={{ display: 'flex', flexFlow:'wrap', justifyContent: 'center' }} className="bookmarks-container">
      {array.map(item =>
        { return <div style={{ width: '200px', height: '150px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>...loading</div> })
      }
    </div>
  );
}

export default Bookmarks;
