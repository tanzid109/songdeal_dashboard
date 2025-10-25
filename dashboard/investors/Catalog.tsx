import React from 'react';
import CatalogStatus from './CatalogStatus';
import CatalogTable from './InvestorsTable';

const Catalog = () => {
    return (
        <div>
            <CatalogStatus/>
            <CatalogTable/>
        </div>
    );
};

export default Catalog;