import React from 'react';

const Bookmarks = () => {
  [1, 2, 3, 4, 5, 6, 7, 8].map(bookmark => {
    return <div style={{ width: '60px', height: '40px' }}>...loading</div>;
  });
}

export default Bookmarks;

// return (
  //   <div className={styles.container}>
  //     <div>...loading</div>
  //   </div>
  // );