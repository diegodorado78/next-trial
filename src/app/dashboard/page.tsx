import { Suspense } from "react"
import CustomerDetail from "../components/customerDetail"
import SearchBar from "../components/searchBar"


function Dashboard({ searchParams }: { searchParams?: { query?: string } }) { //desde el server llegan los searchparams
    const userId = searchParams?.query || '' //lo recibe automaticamente desde el server
    return (
        <div >
            <SearchBar />
            <Suspense fallback={<div className="bg-red-500">Loading...</div>}>
                <CustomerDetail query={userId} />
            </Suspense>
        </div>
    )
}

export default Dashboard