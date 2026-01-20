import { useAuth } from '../context/AuthContext';

export function MemberDirectory() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Member Directory</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700">Logged in as</h3>
            <p className="text-2xl font-bold text-orange-500 mt-2">{user?.fullName}</p>
            <p className="text-gray-600 text-sm mt-2">{user?.email}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-700">Member directory content coming soon...</p>
        </div>
      </div>
    </div>
  );
}
