import Sidebar from '@/components/sidebar';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen text-base font-sans">
      <div className="mx-auto w-full">
        <div className="flex h-full">
          <Sidebar />
          <div className="h-screen w-full md:ml-64 bg-slate-50 overflow-x-hidden">
            <div className="w-full mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
