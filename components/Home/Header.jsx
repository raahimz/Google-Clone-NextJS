import User from "../Utils/User";

export default function Header({ signIn }) {
  return (
    <header className="flex justify-between p-4 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <User signIn={signIn} />
      </div>
    </header>
  );
}
