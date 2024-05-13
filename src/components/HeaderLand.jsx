import React from 'react'
import { TabNav, Button } from '@radix-ui/themes'
import { ClipboardList, ArrowRightToLine } from 'lucide-react'

function HeaderLand() {
  return (
  <div className='flex flex-row justify-between items-center px-8'>
    <span className=' flex flex-row gap-x-1 text-md uppercase font-semibold mt-3'><ClipboardList/> Agenda</span>
    <div className='flex flex-row gap-x-16 items-center'>
      <TabNav.Root color='amber' className='gap-3'>
        <TabNav.Link href='#' active>
          Home
        </TabNav.Link>
        <TabNav.Link href='#'>
          About
        </TabNav.Link>
        <TabNav.Link href='#'>
          Funcionalidades
        </TabNav.Link>
      </TabNav.Root>
      <Button size={'2'} variant='surface' radius='large' color='bronze'>
        Login <ArrowRightToLine size={18}/>
      </Button>
    </div>
  </div>
  )
}

export default HeaderLand