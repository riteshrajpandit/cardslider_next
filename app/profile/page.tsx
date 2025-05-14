export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-6 pb-20 text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">User Information</h2>
        <p className="text-gray-400">Name: John Doe</p>
        <p className="text-gray-400">Email: someone@example.com</p>
        </div>
    </div>
  );
}