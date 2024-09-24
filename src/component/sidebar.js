import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Import your CSS file

const Sidebar = () => {
  return (
<div
  style={{
    display: 'flex',
    height: '100vh', // Full viewport height
     // Adjust the width as needed
    overflowY: 'scroll', // Enable vertical scrolling if needed
    position: 'fixed', // Fix the position relative to the viewport
    top: '0', // Align it to the top of the viewport
    left: '0', // Align it to the left of the viewport
    backgroundColor: '#fff', // Optional: Set a background color
    zIndex: '1000' // Optional: Ensure it sits above other content
  }}
>      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" className="sidebar-menu-item">Dashboard</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" className="sidebar-menu-item">Learn</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" className="sidebar-menu-item">Profile page</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" className="sidebar-menu-item">Analytics</CDBSidebarMenuItem>
            </Link>

            <Link exact to="/404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle" className="sidebar-menu-item">404 page</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
