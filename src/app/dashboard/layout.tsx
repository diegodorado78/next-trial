import { ReactNode } from "react"
import SearchBar from "../components/searchBar"

function layout({ children }: { children: ReactNode }) {
    return (
        <div className=" w-full bg-gradient-to-r from-cyan-500 to-blue-500  p-6 border ">
            <h1>this is the dashboard layout</h1>
            <SearchBar />
            {children}
        </div >
    )
}

export default layout