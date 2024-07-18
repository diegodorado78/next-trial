'use client'
import { Avatar } from '@nextui-org/avatar'
import { usePathname } from 'next/navigation';
import Link from "next/link";

const Navbar = () => {
    const pathName = usePathname();
    return (
        <nav>
            <ul className="flex justify-between gap-4 border bg-slate-500 rounded-lg p-2 ">
                <Link className={`${pathName === '/' ? 'text-white' : 'text-black'}`} href='/'>Home</Link>
                <Link className={`${pathName === '/dashboard' ? 'text-white' : 'text-black'}`} href='/dashboard'>Dashboard</Link>
                <Link className={`${pathName === '/challenges' ? 'text-white' : 'text-black'}`} href='/challenges'>Challenges</Link>
                <Avatar showFallback={true} size='sm' src='https://thispersondoesnotexist.com/' />
            </ul>
        </nav>
    )
}


export default Navbar