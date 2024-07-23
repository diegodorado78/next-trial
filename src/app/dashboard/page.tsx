import { Suspense } from "react"
import CustomerDetail from "../components/customerDetail"
import LoadingSpinner from "../components/loadingSpinner"


function Dashboard({ searchParams }: { searchParams?: { query?: string } }) { //desde el server llegan los searchparams
    const userId = searchParams?.query || '' //lo recibe automaticamente desde el server
    return (
        <>
            <Suspense key={userId} fallback={<LoadingSpinner />}>
                <CustomerDetail query={userId} />
            </Suspense>
        </>
    )
}

export default Dashboard