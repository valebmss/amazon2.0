import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './components/Banner'
import Header from './components/Header'
import ProductFeed from './components/ProductFeed'
import Product from './components/Product'

export default function Home({products}) {
  return (
    <div className='bg-gray-100'>
      <head>
        <title>Amazon 2.0</title>
      </head> 
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
        <Banner/>
        <ProductFeed/>
      </main>
    </div>
  )
}