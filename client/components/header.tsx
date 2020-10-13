import React from 'react';

interface HeaderProps {
  average: number
}

export default function Header (props: HeaderProps): React.ReactElement{
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h1>Student Grade Table</h1>
      <h3 className="mr-3">Average <span className="badge badge-secondary">{props.average}</span></h3>
    </div>
  );
}
