import React from 'react'
import { Button } from '@radix-ui/themes'
import { ClipboardPenLine } from 'lucide-react'

function MainBody() {
  return (
    <div>
      {/* hero e cadastro */}
      <div className='h-screen grid grid-cols-3 bg-slate-800 items-center'>
        <div className='h-[60%] col-span-2 flex flex-col items-start justify-start px-8 gap-y-2 mt-10'>
          <p className='text-start text-5xl text-white font-serif font-thin'>Tem dificuldade de 
          <span className='ml-2 text-orange-500'>organizar seus dias</span>?
          </p>
          <p className='text-white font-serif text-3xl'>
            Venha e se organize com nossa 
            <span className='ml-2 text-orange-500 justify-start'>
              AGENDA.
            </span>
          </p>
          <p className='font-serif text-white mr-2 mb-2'>
            Aqui você pode recebe lembretes de seus <strong>hábitos, tarefas diárias e periódicas</strong>, de acordo com seus horários. Vamos começar a organizar as suas programações do dia? 
          </p>
          <Button color='orange' variant='solid' radius='medium' size={'3'}>
            Register
            <ClipboardPenLine size={20}/>
          </Button>
        </div>
      </div>
      {/* Sobre a aplicação */}
      <div className="h-screen grid grid-cols-3 bg-slate-700">
        Sobre
      </div>
      {/* Funcionalidades */}
      <div className="h-screen grid grid-cols-3 bg-slate-600">
        Funcionalidades
      </div>

    </div>
  )
}

export default MainBody