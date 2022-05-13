import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  
  return (
    <div>
      <div className='w-full flex items-center h-12 md:h-16 px-4 z-50 md:px-32 fixed top-0 left-0 bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#212121" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <line x1="3" y1="6" x2="3" y2="19" />
          <line x1="12" y1="6" x2="12" y2="19" />
          <line x1="21" y1="6" x2="21" y2="19" />
        </svg>
        <div className='flex-1'></div>
        <div className='h-full px-4 cursor-pointer flex justify-center items-center' onClick={() => {
          window.scrollTo({
            top: document.getElementById('help').offsetTop,
            behavior: 'smooth'
          })
        }}>
          <p>Kako mogu pomoći?</p>
        </div>
      </div>
      <div className='h-screen flex flex-col justify-center items-center'>
        <motion.h1 initial={{opacity: 0, y:40}} whileInView={{opacity: 1, y:0, transition: {delay: 0}}} className='text-2xl md:text-5xl font-medium py-2'>Audio-knjige za <span className='text-bebi'>djecu</span> 😀</motion.h1>
        <motion.p initial={{opacity: 0, y:40}} whileInView={{opacity: 1, y:0, transition: {delay: 0.3}}} className='text-gray-500 md:text-lg'>Naučimo djecu čitati od malih nogu</motion.p>
        <video controls autoPlay className='w-full max-w-xl py-4 px-2'>
            <source src="Audio knjige- Čitaj mi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <div className='my-2'>
          <motion.div initial={{opacity: 0, y:40}} whileInView={{opacity: 1, y:0, transition: {delay: 0.6}}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='px-4 py-2 rounded bg-bebi text-white font-medium cursor-pointer flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 3.71v16.58a0.7 .7 0 0 0 1.05 .606l14.622 -8.42a0.55 .55 0 0 0 0 -.953l-14.622 -8.419a0.7 .7 0 0 0 -1.05 .607z" />
            <line x1="15" y1="9" x2="4.5" y2="20.5" />
            <line x1="4.5" y1="3.5" x2="15" y2="15" />
          </svg>
            Uskoro na trg Play-u
          </motion.div>
        </div>
      </div>
      <div className='w-full bg-gray-50'>
        <div className='md:h-[50vh] flex justify-center items-center max-w-xl mx-auto flex-col p-4 py-12'>
          <motion.p initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.3}}} className='text-xl md:text-3xl font-medium'>Zašto?</motion.p>
          <motion.p initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.6}}} className='md:text-lg text-center'>
          Mala djeca čitaju jer je to jedan od načina na koji se mogu razvijati. Čitanje poboljšava gramatičke sposobnosti, povećava riječnik i doprinosi boljem razumijevanju svijeta oko sebe. Također, čitanje je zabavno i može se činiti kao izazov, što je važno za razvoj malih djece.
          </motion.p>
        </div>
      </div>
      <div className='min-h-screen flex flex-col md:flex-row'>
        <div className='flex-1 p-12 object-contain h-screen relative'>
          <motion.img initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.3}}} src='/images/home.png' className='h-full w-auto rounded shadow-xl mx-auto'/>
        </div>
        <div className='flex-1 flex justify-center items-center p-4 md:p-12'>
          <motion.p initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.6}}} className='md:text-lg text-center'>Mala djeca mogu naučiti mnogo toga iz knjiga koje čitaju. Knjige mogu pružiti priliku da se razviju nove vještine i znanja. Također mogu poboljšati sposobnost djeteta da razmišlja kritički i izražava svoje misli.</motion.p>
        </div>
      </div>

      <div className='min-h-screen flex flex-col-reverse bg-gray-50 md:flex-row'>
        <div className='flex-1 flex justify-center items-center p-4 md:p-12'>
          <motion.p initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.3}}} className='md:text-lg text-center'>Pozitivni rezultati čitanja može se vidjeti kod male djece. Mala djeca koja čitaju imaju bolje sposobnosti govora, bolje razumijevanje gramatike i veće riječnike. Također, oni koji često čitaju imaju bolje sposobnosti razmišljanja i kritičkog razmišljanja.</motion.p>
        </div>
        <div className='flex-1 p-12 object-contain h-screen relative'>
          <motion.img initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.6}}} src='/images/book.png' className='h-full w-auto rounded shadow-xl mx-auto'/>
        </div>
      </div>

      <div className='min-h-screen flex flex-col md:flex-row'>
        <div className='flex-1 p-12 object-contain h-screen relative'>
          <motion.img initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.3}}} src='/images/bookmark.png' className='h-full w-auto rounded shadow-xl mx-auto'/>
        </div>
        <div className='flex-1 flex justify-center items-center p-4 md:p-12'>
          <motion.p initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.6}}} className='md:text-lg text-center'>Prema istraživanju, vrijednosti čitanja kod male djece su ogromne. Čitanje pomaže maloj djeci da se bolje razviju u svim područjima, od jezika do matematike. Također pomaže u razvoju socijalnih vještina i povećava samopouzdanje.</motion.p>
        </div>
      </div>


      <p className='text-xl text-center font-medium md:text-3xl mt-6' id='help'>Pomozi nam</p>
      <div className='flex items-center flex-col md:flex-row justify-center space-x-5 p-4 mb-12'>
        <motion.div initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.2}}} className='rounded-md w-full md:w-44 shadow-xl p-4 flex flex-col text-center py-4'>
          <p className='font-bold text-5xl py-4'>5$</p>
          <p className='text-gray-500 pb-2'>Zahvalu od srca dobivaš</p>
          <button className='rounded bg-bebi text-white font-medium px-4 py-2'>Doniraj</button>
        </motion.div>
        <motion.div initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.4}}} className='rounded-md w-full md:w-44 shadow-xl p-4 flex flex-col text-center py-4'>
          <p className='font-bold text-5xl py-4'>25$</p>
          <p className='text-gray-500 pb-2'>Šaljemo vam fizičku kopiju knjige</p>
          <button className='rounded bg-bebi text-white font-medium px-4 py-2'>Doniraj</button>
        </motion.div>
        <motion.div initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0, transition: {delay: 0.6}}} className='rounded-md w-full md:w-44 shadow-xl p-4 flex flex-col text-center py-4'>
          <input className='font-bold text-5xl py-2 text-center' placeholder='2,01$' />
          <p className='text-gray-500 pb-2'>Unesite količinu po izboru</p>
          <button className='rounded bg-bebi text-white font-medium px-4 py-2'>Doniraj</button>
        </motion.div>
      </div>



      <div className='w-full py-6 md:py-12 items-center flex flex-col bg-bebi text-white'>
        <p>Klara <span className='line-through opacity-75'>Pekas</span>Rodeš - Knjige za djecu</p>
        <p className='text-white opacity-40'>Bebi Products™</p>

      </div>
    </div>
  )
}
