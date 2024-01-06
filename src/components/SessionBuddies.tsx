import { FaUsers } from "react-icons/fa";
import SessionBuddyCard from "./SessionBuddyCard";



function SessionBuddies() {
  return (
    <section className='flex flex-col gap-2 w-full justify-center'>
      <div className="flex gap-4 text-xl items-center">
        <FaUsers className="text-orange-600" size={40}/>
        <h2 className="text-2xl"> Bite Buddies</h2>
      </div>
      <div className='flex gap-6 overflow-x-auto'>
        
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
        <SessionBuddyCard />
      </div>
    </section>
  )
}

export default SessionBuddies;