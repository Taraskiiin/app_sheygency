import React from "react";
import { Link } from "react-router-dom";

const menu = [
  { id: "1", path: "/", title: "Home", icon: "" },
  { id: "2", path: "/about", title: "About", icon: "" },
  { id: "3", path: "/clients", title: "Clients", icon: "" },
  { id: "4", path: "/contact", title: "Contact", icon: "" },
];

export default function Layout({ children }: { children: any }) {
  return (
    <div>
      <div className='content'>{children}</div>
      <nav className='fixed bottom-10 left-0 right-0 t-center w-full'>
        <div className='flex'>
          {menu.map((menuItem) => (
            <div key={menuItem.id}>
              <Link to={`${menuItem.path}`}>{menuItem.title}</Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
