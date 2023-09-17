import Link from 'next/link';
import React from 'react';
function ButtonLink(props) {
  return (
    <div>
      <Link href={props.href}>{props.name}</Link>
    </div>
  )
}

export default ButtonLink;