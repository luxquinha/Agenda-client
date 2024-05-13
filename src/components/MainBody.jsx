import React from 'react'
import { Button } from '@radix-ui/themes'
import { motion } from 'framer-motion'
import { ClipboardPenLine } from 'lucide-react'
import { Link } from 'react-router-dom'

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
          <Button color='orange' variant='solid' radius='medium' size={'3'} className='hover:cursor-pointer' asChild>
            <Link to={'/register'}>
              Register
              <ClipboardPenLine size={20}/>
            </Link>
          </Button>
        </div>
        <motion.div className="col-span-1 h-[60%] justify-start"
        initial={{
          y:-200,
          opacity: 0
        }}
        animate={{
          y: -50,
          opacity: 1
        }}
        transition={{
          type:'spring',
          duration: 10,
          bounce: 0.7, 
        }}
        >
          <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-job-desk-work-job-png-image_13358566.png" alt="gerenciador de tarefas"/>
        </motion.div>
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