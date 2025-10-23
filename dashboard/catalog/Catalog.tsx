import React from 'react';
import CatalogStatus from './CatalogStatus';
import CatalogTable from './CatalogTable';

const Catalog = () => {
    return (
        <div>
            <CatalogStatus/>
            <CatalogTable/>
        </div>
    );
};

export default Catalog;