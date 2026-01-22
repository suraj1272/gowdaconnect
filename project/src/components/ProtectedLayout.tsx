import Sidebar from './Sidebar';

export default function ProtectedLayout({ children }: { children: JSX.Element }) {
  return (
      <div className="flex">      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main           className="ml-64 mt-[104px] p-6 min-h-[calc(100vh-104px)] bg-gray-100 w-full">
        {children}
      </main>
    </div>
  );
}
