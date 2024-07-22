"use client"
import { useSearchParams } from "next/navigation";
import CustomerDetail from "./customerDetail/page"
import SearchBar from "@/ui/searchBar";
import { Suspense } from "react";
import LoadingSpinner from "../components/loadingSpinner";


function Dashboard() {
    const userSearchParams = useSearchParams();
    return (
        <div >
            <SearchBar placeholder="Buscar..." />
            <Suspense fallback={<LoadingSpinner />}>
                <CustomerDetail searchParams={{ query: userSearchParams.get('query') }} />
            </Suspense>
        </div>
    )
}

export default Dashboard