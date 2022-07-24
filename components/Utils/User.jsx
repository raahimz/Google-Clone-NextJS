import { useSession, signOut } from "next-auth/react";

export default function User({ signIn }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <img
          onClick={signOut}
          src={session.user.image}
          alt="profile-img"
          referrerPolicy="no-referrer"
          className="cursor-pointer h-8 rounded-full outline outline-0 hover:outline-4 outline-gray-100 whitespace-nowrap min-h-[32px] min-w-[32px]"
        />
      </div>
    );
  }

  return (
    <button
      onClick={signIn}
      className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md shadow-sm hover:shadow-md hover:brightness-105 focus:brightness-125 whitespace-nowrap"
    >
      Sign in
    </button>
  );
}
