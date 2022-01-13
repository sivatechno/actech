import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #242424;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
//   list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 16px;
  font-weight:bold;
  background:white;

  &:hover {
    background:#F3F3F3;
    border-left: 4px solid #11549A;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  color:#242424;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #242424;
  font-size: 16px;
  font-weight:bold;
  background:white;

  &:hover{
    background:#F3F3F3;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;