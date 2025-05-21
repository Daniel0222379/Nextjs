import Link from 'next/link';
import React from 'react'
interface Props {
  path: string;
  text: string;
}
export const Linkscomponent = ({ path, text }: Props) => {
  return (
    <>
      <Link className='mr-5 mt-3 text-3xl hover:text-purple-600 ' href={path}>{text}</Link>
      
    </>


  )
}
