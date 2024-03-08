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
            <div className="w-full mx-auto">
              <div className={`relative bg-slate-50 h-full`}>
                <div className="relative rounded-xl p-8 max-w-screen-lg">
                  <div className="prose max-w-none">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
