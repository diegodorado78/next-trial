"use client"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export default function SearchBar({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    //console.log(searchParams.get('query'));//it must specify the parameter name to get the value; in this case 'query
    const pathname = usePathname();//the current path of the url
    const { replace } = useRouter();// destructuring the replace method from the useRouter hook

    function handleSearch(term: string) {//generate the part to add  to the url
        const params = new URLSearchParams(searchParams);//API provides read and write access to the query of a URL. connect the searchparams api to the URLSearchParams object
        if (term) {
            params.set('query', term);//set the query parameter adding it to the current url
            replace(`${pathname}?${params.toString()}`);//replace the current url with the new url
        } else {
            params.delete('query');
        }
    }


    return (
        <div className=" flex flex-1  my-2">
            <label htmlFor="search" className="flex w-full gap-2 mt-2 p-1 border  border-gray-200 rounded-lg ">
                <CiSearch size={24} />
                <input
                    className=" w-full rounded-md pl-10 text-sm outline-2 placeholder:text-gray-500  my-2 bg-transparent"
                    placeholder={placeholder}
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('query')?.toString() || ''}
                />
            </label>

        </div>
    );
}