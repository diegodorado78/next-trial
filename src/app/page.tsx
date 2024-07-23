import UserList from "./components/userList";
function Home() {
  return (
    <main className="flex  flex-col items-center justify-between border">
      <div className='flex flex-col justify-center items-center '>
        <p className="text-white">This are the currrent users</p>
        <UserList />
      </div>
    </main>

  );
}
export default Home