
import React from 'react';
import { Outlet} from 'react-router-dom';

const Sales: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Sales;
