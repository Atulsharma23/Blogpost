

import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div>
          <nav className={"mainnav"}>
       <ul>
         <li><Link href="/">Home</Link></li>
          <li>
         <Link href="about">
            
            About Us
          </Link>
             </li>
            <li>
        <Link href="contact">
              Contact
           </Link>
              </li>
             <li>
           <Link href="blog">
              Blogs
           </Link>
              </li>
         </ul>
     </nav>
    </div>
  )
}

export default Navbar