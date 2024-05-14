import HeaderLand from "../components/HeaderLand";
import InputIcon from '../components/InputIcon.jsx'
import ErrorMessage from "../components/ErrorMessage.jsx";
import { ScrollArea, Checkbox, Flex } from "@radix-ui/themes";
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { ArrowRightToLine, UserRound, Lock, CircleAlert } from 'lucide-react'

function LoginPage() {
    const { register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit = (data)=>{
        console.log(data);
    }
    return ( 
        <div className="bg-slate-800 w-screen h-screen">
            <ScrollArea>
                <header className="bg-slate-800 w-full h-[9%] px-8 z-10 mt-1">
                    <HeaderLand showTabs={false}/>
                </header>
                <main className="w-screen px-8 h-[90%] flex flex-col items-center justify-center" 
                style={{backgroundImage: `url('https://i0.wp.com/humannia.com.br/wp-content/uploads/2023/07/lista-de-tarefas.jpg?fit=1980%2C990&ssl=1')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right bottom'
                }}
                >
                    <motion.form onSubmit={handleSubmit(onSubmit)} className="h-[70%] w-[30%] flex flex-col gap-3 py-4 justify-around items-center bg-slate-900 bg-opacity-80 rounded-lg border border-orange-300 shadow-xl shadow-slate-900"
                        initial={{
                            opacity:0,
                            scale:0,
                            rotate:45,
                            x:-580,
                            y:180
                        }}
                        animate={{
                            opacity: [0.8, 1],
                            scale: [0.1, 0.3, 0.5, 1, 1.1, 1],
                            rotate: 360,
                            x:0,
                            y:0
                        }}
                        transition={{
                            ease: 'linear',
                            type: 'spring',
                            bounce: 0.7,
                            duration: 2,
                            delay: 0.5
                        }}
                    >
                        <h2 className="text-white text-3xl font-serif font-semibold">Login</h2>
                        <div className="h-[80%] flex flex-col gap-y-2 w-full px-2 items-center justify-center">
                            <Flex className="w-full h-[20%]" justify={"start"} gap={"2"} direction={"column"}>
                                <InputIcon type={'text'} register={register} required label={'username'} placeholder={'Username'} width={'w-[85%]'} icon={UserRound}/>
                                {errors.username && <ErrorMessage message={errors.username.message} icon={<CircleAlert size={17}/>}/>}
                            </Flex>
                            <Flex className="w-full h-[20%]" justify={"start"} gap={"2"} direction={'column'}>
                                <InputIcon type={'password'} register={register} required label={'password'} placeholder={'Password'} width={'w-[85%]'} icon={Lock}/>
                                {/* Error message */}
                                {errors.password && <ErrorMessage message={errors.password.message} icon={<CircleAlert size={17}/>}/>}
                            </Flex>
                            <div className="flex flex-row gap-x-14">
                                <Flex gapX='1' align={"center"}>
                                    <Checkbox color="orange" name="check" id="check" className="hover:cursor-pointer"/>
                                    <label htmlFor="check" className="text-white text-sm">Remember me</label>
                                </Flex>
                                <Flex>
                                    <Link to={'#'} className="text-orange-400 text-sm">
                                        Forgot my password
                                    </Link>
                                </Flex>
                            </div>
                        </div>
                        <button className="flex flex-row items-center justify-center gap-1 w-44 h-9 bg-orange-500 tracking-widest text-white font-semibold outline-none rounded-lg ">
                            Login
                            <ArrowRightToLine size={18}/>
                        </button>
                    </motion.form>
                </main>
            </ScrollArea>
        </div>
     );
}

export default LoginPage;