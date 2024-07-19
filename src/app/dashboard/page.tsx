"use client"
import { useSearchParams } from "next/navigation";
import CustomerDetail from "./customerDetail/page"
import SearchBar from "@/ui/searchBar";


function Dashboard() {
    const userSearchParams = useSearchParams();
    return (
        <div >
            <SearchBar placeholder="Buscar..." />
            <CustomerDetail searchParams={{ query: userSearchParams.get('query') }} />
        </div>
    )
}

export default Dashboard