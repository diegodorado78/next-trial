import { fetchUsers } from "@/lib/data"
import { UserData } from "@/types"

async function UserList() {
    const usersList: UserData[] = await fetchUsers()
    return (
        <div>
            {usersList?.map((user) => (
                <div className="flex flex-col p-2" key={user.id} >
                    <p>  Nombre:{user.userName}</p>
                    <p>  Correo:{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UserList