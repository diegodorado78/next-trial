"use client"
import { Avatar } from '@nextui-org/avatar'
import { usePathname } from 'next/navigation';
import Link from "next/link";
import React, { Suspense } from 'react';
import LoadingSpinner from './loadingSpinner';

function Navbar() {
    const pathName = usePathname();
    return (
        <nav>

            <ul className="flex justify-between gap-4 border bg-slate-500 rounded-lg p-2 ">
                <Link className={`${pathName === '/' ? 'text-white' : 'text-black'}`} href='/'>Home</Link>
                <Link className={`${pathName === '/dashboard' ? 'text-white' : 'text-black'}`} href='/dashboard'>Dashboard</Link>
                <Link className={`${pathName === '/challenges' ? 'text-white' : 'text-black'}`} href='/challenges'>Challenges</Link>

                <Suspense fallback={<LoadingSpinner />}>
                    <Avatar size='sm' src='https://thispersondoesnotexist.com/' />
                </Suspense>
            </ul>

        </nav>
    )
}


export default Navbar