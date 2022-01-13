import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Grafico from '../components/Grafico'

export default function Home() {

  const [teste,setTeste] = useState(1);

  const setContagem = (num) => {
    setTeste(teste+num)
  }

  return (
    <>
      <Grafico />
      <button onClick={()=>setContagem(1)}>{teste}</button>
    </>
  )
}