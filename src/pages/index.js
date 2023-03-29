import Link from 'next/link'

export default function Home () {
  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center justify-center text-white font-montserrat font-extrabold text-2xl bg-slate-950'>
        <Link href='/auth/login'>Ir a login</Link>
        <Link href='/auth/register'>Ir a register</Link>
        <h1 className='font-montserrat'>Hola mundo</h1>
      </div>
    </>

  )
}
