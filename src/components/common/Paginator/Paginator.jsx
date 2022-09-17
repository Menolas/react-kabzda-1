import React, {useState} from 'react';
import classes from './Paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  let FilteredPages = pages
    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    .map((p) => {
      return (
        <span
          key={p}
          className={currentPage === p ? classes.selected : ''}
          onClick={(e) => { onPageChanged(p) }}>
          {p}
        </span>
      )
    });

  return (
    <div className={classes.pagination}>
      { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
      
      {FilteredPages}

      { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
    </div>
  )
};

export default Paginator;
