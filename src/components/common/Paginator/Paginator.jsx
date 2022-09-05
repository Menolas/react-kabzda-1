import React from 'react';
import classes from './Paginator.module.css';

let Paginator = (props) => {
  
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let slicedPages = pages.slice(pagesCount - 6, pagesCount - 1);

  return (
    <div className={classes.pagination}>
      {
        slicedPages.map(
          p => {
            return (
              <span
                key={p}
                className={props.currentPage === p ? classes.selected : ''}
                onClick={(e) => {props.onPageChanged(p)}}>
                {p}
              </span>
            )
          })
      }
    </div>
  )
};

export default Paginator;
