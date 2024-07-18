import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className=" w-full bg-gradient-to-r from-cyan-500 to-blue-500  p-6 border ">
            <h1>this is the dashboard layout</h1>
            {children}
        </div >
    )
}

export default layout