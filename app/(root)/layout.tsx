import React from 'react'
import Sidebar from './../../components/Sidebar';
import MobileNavigations from '@/components/MobileNavigations';
import Header from '@/components/Header';

function layout({children}:{children:React.ReactNode}) {
  return (
    <main className='flex h-screen'>

        <Sidebar />

        <section className='flex h-full flex-1 flex-col'>
            <MobileNavigations /> 
            <Header />
            <div className='main-content'>{children}</div>
        </section>
    </main>
  )
}

export default layout