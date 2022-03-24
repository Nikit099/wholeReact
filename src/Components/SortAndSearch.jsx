import React, { useMemo, useState } from 'react';
import Select from '../UI/select/Select';

const SortAndSearch = ({filter, setFilter}) => {
  
    return (
        <div style={{margin: '20px 0'}}> 
                <input type="text" placeholder='поиск' value={filter.query} onChange = { (e) => setFilter({...filter, query: e.target.value})} />
                <Select defaulValue={'Сортировка'} options={[
               {value: 'title', name: 'По названию'},
               {value: 'body', name: 'По описанию'}, 
               {value: 'id', name:'По номеру'}
           ]} setValue = {sort => setFilter({...filter, sort: sort})} value = {filter.sort} /></div>
    );
};

export default SortAndSearch;