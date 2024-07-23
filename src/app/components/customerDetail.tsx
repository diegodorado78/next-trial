import { fetchUserById } from "@/lib/data";


export default async function CustomerDetail({ query }: { query: string | undefined }) {
    const userData = await fetchUserById({ query });
    return (
        <div className='bg-slate-200 p-6 w-[390px] h-[300px] my-2 rounded-lg'>
            <p className='text-black'> {userData?.userName}</p>
        </div>
    )
}
