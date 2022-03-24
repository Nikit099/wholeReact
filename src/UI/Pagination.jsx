import React from 'react';

const Pagination = ({isLoading, pagesArray, setPage, page}) => {
    return (
        <div>
            {isLoading ?  null : pagesArray.map(i => <span key={i} onClick = { () => setPage(i)} className={page === i ? 'page page_active' : 'page'} >{i}</span>)}
            
        </div>
    );
};

export default Pagination;