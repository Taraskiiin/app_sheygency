import React from "react";

export default function Layout({ children }: { children: any }) {
  return (
    <div>
      <div className='content'>{children}</div>
      <div className='footer'>
        <h1>Footer</h1>
      </div>
    </div>
  );
}
