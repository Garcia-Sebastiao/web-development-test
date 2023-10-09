import React from 'react';

export default function Container({ children, className, id }) {
  return (
    <section id={id} className={`w-full flex relative xs:px-8 lg:px-28 justify-center flex-col gap-4 items-center ${className}`}>
      {children}
    </section>
  );
}
