import { fetchUsers } from "@/lib/data";
import { Image } from "@nextui-org/react";
type UserData = {
  id: number
  userName: string
  email: string
}

const Home = async () => {
  const usersList: UserData[] = await fetchUsers() // fetch users from the API -- while this load, the skeleton will be shown
  return (
    <main className="flex  w-full flex-col items-center justify-between border">
      <div className='flex flex-col justify-center items-center '>
        <p>this is home</p>
        <Image src="/land.png" alt="logo" width={200} height={200} />
        {usersList.map((user) => (
          <div key={user.id} >
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </main>

  );
}
export default Home