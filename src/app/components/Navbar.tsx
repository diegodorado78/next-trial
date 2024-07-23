"use client"
import { Avatar } from '@nextui-org/avatar'
import { usePathname } from 'next/navigation';
import Link from "next/link";

function Navbar() {
    //function Navbar({ children }: { children: ReactNode }) {
    const pathName = usePathname();
    return (
        <nav className='sticky top-0 container mx-auto'>
            <ul className="flex justify-around items-center gap-4 border bg-slate-500 rounded-lg p-2 ">
                <li><Link className={`${pathName === '/' ? 'text-white' : 'text-black'}`} href='/'>Home</Link></li>
                <li><Link className={`${pathName === '/dashboard' ? 'text-white' : 'text-black'}`} href='/dashboard'>Dashboard</Link></li>
                <li><Link className={`${pathName === '/challenges' ? 'text-white' : 'text-black'}`} href='/challenges'>Challenges</Link></li>
                <li><Avatar size='sm' showFallback name='User' src="" /></li>
                {/*<li>{children} </li>*/}
            </ul>
        </nav>
    )
}


export default Navbar