import React from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
}

function Layout({ children, title }: Props) {
  return (
    <div>
      <h1>Auth - {title}</h1>
      {children}
    </div>
  );
}

export default Layout;
