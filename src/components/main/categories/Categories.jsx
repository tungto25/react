import React from 'react';
import TableCategory from './TableCategory';
import ModalCategory from "./ModalCategory";
function Categories(props) {
    return (
        <div className='h-screen'>
            <ModalCategory />
            <TableCategory />
        </div>
    );
}

export default Categories;