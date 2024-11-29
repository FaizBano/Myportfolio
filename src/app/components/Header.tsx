import React from 'react'
import Link from 'next/link'

interface HeaderProps{
  font:{
    className:string;
  };
}

const Header = ({font}: HeaderProps) => {
  return (
    <>
    
    <div className=  {`${font.className} links-parant `}>

      
        <ul className='links'>

        <Link href={"/"}> Home<li className='menu'></li> </Link>
        <Link href={"/hero"}> Hero <li className='menu'></li> </Link>
            <Link href={"/about"}> About <li className='menu'></li> </Link>
            <Link href={"/education"}> Education<li className='menu'></li></Link>
            <Link href={"/skills"}><li className='menu'> Skills </li></Link>
            <Link href={"/experience"}><li className='menu'> Experience </li></Link>

        </ul>
    
    </div>
    </>
  )
}

export default Header