import React from 'react'
import Sidebar from './../../components/Sidebar';
import MobileNavigations from '@/components/MobileNavigations';
import Header from '@/components/Header';
import { getCurrentUser } from '@/lib/actions/user.actions';
import { redirect } from "next/navigation";

async function layout({children}:{children:React.ReactNode}) {
    const currentUser = await getCurrentUser()

    if(!currentUser) return redirect('/sign-in')




  return (
    <main className='flex h-screen'>

        <Sidebar {...currentUser} />

        <section className='flex h-full flex-1 flex-col'>
            <MobileNavigations {...currentUser} /> 
            <Header {...currentUser} />
            <div className='main-content'>{children}</div>
        </section>
    </main>
  )
}

export default layout