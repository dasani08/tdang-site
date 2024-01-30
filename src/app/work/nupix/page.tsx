import Image from 'next/image';

import Header from '@/components/header';

export default function NupixPage() {
  return (
    <div className={`relative bg-slate-50 h-full`}>
      <Header title="NUPIX - Live Countdown" />
      <div className="relative rounded-xl overflow-auto p-8">
        <div className="mt-2">
          <p className="text-lg text-neutral-700">Role: Full Stack Developer</p>
          <p className="text-lg text-neutral-700">
            Technologies:{' '}
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Laravel
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Javascript
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              MySQL
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Linux
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              NGINX
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Git
            </span>
          </p>
        </div>
        <div className="mt-9 mb-9">
          <p className="font-light text-base text-neutral-700">
            Nupix was built using Laravel framework which backed by Nginx server
            and MySQL database
          </p>
        </div>
        <div className="columns-2 gap-6 space-y-6">
          <Image
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.05]"
            src="/images/Nupix.png"
            alt="Nupix"
            width={500}
            height={500}
          />
          <Image
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.05]"
            src="/images/Nupix-2.png"
            alt="Nupix"
            width={500}
            height={500}
          />
          <Image
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.05]"
            src="/images/Nupix-3.png"
            alt="Nupix"
            width={500}
            height={500}
          />
          <Image
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.05]"
            src="/images/Nupix-4.png"
            alt="Nupix"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
