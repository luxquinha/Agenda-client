import React from 'react'
import { TabNav, Button } from '@radix-ui/themes'
import { ClipboardList, ArrowRightToLine } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeaderLand() {
  return (
  <div className='flex flex-row justify-between items-center px-8'>
    <span className=' flex flex-row gap-x-1 text-md uppercase font-semibold mt-3 text-orange-600'><ClipboardList/> Agenda</span>
    <div className='flex flex-row gap-x-16 items-center'>
      <TabNav.Root color='orange' className='gap-3'>
        <TabNav.Link href='#' active>
          <span className='text-orange-500'>
            Home
          </span>
        </TabNav.Link>
        <TabNav.Link href='#'>
          <span className='text-orange-500'>
            About
          </span>
        </TabNav.Link>
        <TabNav.Link href='#'>
          <span className='text-orange-500'>
            Funcionalidades
          </span>
        </TabNav.Link>
      </TabNav.Root>
      <Button size={'2'} variant='outline' radius='large' color='orange' asChild className='hover:bg-orange-600 hover:text-white hover:cursor-pointer'>
        <Link to={'/login'}>
          Login <ArrowRightToLine size={18}/>
        </Link>
      </Button>
    </div>
  </div>
  )
}

export default HeaderLand