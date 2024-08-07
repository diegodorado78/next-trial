"use client"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();//the current path of the url
    const { replace } = useRouter();// destructuring the replace method from the useRouter hook

    const handleSearch = useDebouncedCallback((term: string) => {//helps to avoid making the call to the api every time the user types a letter
        const params = new URLSearchParams(searchParams);//API provides read and write access to the query of a URL. connect the searchparams api to the URLSearchParams object
        if (term) {
            params.set('query', term);//set the query parameter adding it to the current url
            replace(`${pathname}?${params.toString()}`);//replace the current url with the new url
        } else {
            params.delete('query');
        }
    }, 1000)

    return (
        <div className=" flex flex-1  my-2">
            <label htmlFor="search" className="flex w-full gap-2 mt-2 p-1 border items-center border-gray-200 rounded-lg ">
                <CiSearch size={24} />
                <input
                    className=" w-full rounded-md text-sm outline-2 placeholder:text-gray-500  my-2 bg-transparent"
                    placeholder={'Buscar...'}
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('query')?.toString() || ''}
                />
            </label>

        </div>
    );
}