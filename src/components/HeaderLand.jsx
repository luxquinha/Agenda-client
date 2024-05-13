import React from 'react'
import { TabNav, Button } from '@radix-ui/themes'
import { ClipboardList, ArrowRightToLine } from 'lucide-react'

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
      <Button size={'2'} variant='outline' radius='large' color='orange' className='hover:bg-orange-600 hover:text-white'>
        Login <ArrowRightToLine size={18}/>
      </Button>
    </div>
  </div>
  )
}

export default HeaderLand