import { fetchUsers } from "@/lib/data"
import { UserData } from "@/types"

async function UserList() {
    const usersList: UserData[] = await fetchUsers()
    return (
        <div>
            {usersList?.map((user) => (
                <ul className="flex flex-col p-2" key={user.id} >
                    <li>  Nombre: {user.userName}</li>
                    <li>  Correo: {user.email}</li>
                </ul>
            ))}
        </div>
    )
}

export default UserList