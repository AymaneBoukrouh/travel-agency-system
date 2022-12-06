import { useState } from 'react';

import { NavLink } from 'react-router-dom'

import { useTheme } from '@mui/material';

const DashboardNavLink = ({ to, Icon, bg }) => {
  const [isActiveNavLink, setIsActiveNavLink] = useState(false);

  const theme = useTheme();

  return (
  <div className="position-relative">
    <NavLink
      end
      to = {to}
      className={({ isActive }) => isActive  ? setIsActiveNavLink(true) : setIsActiveNavLink(false) }
    >
      <div className={`${isActiveNavLink ? 'bg-light' : ''} rounded-circle p-2 mx-4`}>
        <div className={`${isActiveNavLink ? '' : 'd-none'} position-absolute top-0 start-50 w-50 h-100 bg-light`}></div>
        <Icon className={`${isActiveNavLink ? 'text-dark' : 'text-white'} position-relative`} />
      </div>
    </NavLink>
    <div className={`${isActiveNavLink ? '' : 'd-none'} position-absolute top-0 start-0 w-100 ratio ratio-1x1 overflow-hidden`} style={{ transform: 'translate(75%, -25%)' }}>
      <div className="position-absolute ratio ratio-1x1 bg-light" style={{ transform: 'translate(-75%, -75%)' }}>
        <div className="ratio ratio-1x1" style={{ borderRadius: '20px', backgroundColor: bg }}></div>
      </div>
    </div>
    <div className={`${isActiveNavLink ? '' : 'd-none'} position-absolute top-100 start-0 w-100 ratio ratio-1x1 overflow-hidden`} style={{ transform: 'translate(75%, -75%)' }}>
      <div className="position-absolute ratio ratio-1x1 bg-light" style={{ transform: 'translate(-75%, 75%)' }}>
        <div className="ratio ratio-1x1" style={{ borderRadius: '20px', backgroundColor: bg }}></div>
      </div>
    </div>
  </div>
  )
}

export default DashboardNavLink;
