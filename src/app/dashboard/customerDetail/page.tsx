import { fetchUserById } from '@/lib/data'
import { UserDatatype } from '@/types';

export default async function CustomerDetail({ searchParams }: { searchParams: { query?: string | number | undefined | null } }) {
    const userData: UserDatatype = await fetchUserById({ id: searchParams.query })

    return (

        <div className='bg-slate-200 p-6 w-[390px] h-[300px] my-2 rounded-lg'><p className='text-black'> {userData?.userName}</p>  </div>
    )
}

