import { Image } from "@nextui-org/react";
import UserList from "./components/userList";
function Home() {
  return (
    <main className="flex  w-full flex-col items-center justify-between border">
      <div className='flex flex-col justify-center items-center '>
        <p>This are the currrent users</p>
        <UserList />
      </div>
    </main>

  );
}
export default Home