import Image from 'next/image';

import Header from '@/components/header';

export default function NetwilaPage() {
  return (
    <div className={`relative bg-slate-50 h-full`}>
      <Header title="NETWILA APPLICATION" />
      <div className="relative rounded-xl overflow-auto p-8 max-w-screen-lg">
        <div className="mt-2">
          <p className="text-lg text-neutral-700">Role: Full Stack Developer</p>
          <p className="text-lg text-neutral-700">
            Technologies:{' '}
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              React
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Nest.js
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Next.js
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              AWS
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Docker
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Microshift
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              MongoDB
            </span>
          </p>
        </div>
        <div className="mt-9 mb-9">
          <p className="font-light text-base text-neutral-700">
            Involved in many aspects of the project from codebase, deployment,
            guidelines, CI/CD, integration to developing new features for
            Freight Management across global logistics.
          </p>
        </div>
        <p className="text-lg text-neutral-700">Codebase</p>
        <hr className="border-neutral-500" />
        <div className="mt-4 mb-4 ml-4">
          <Image
            src="/images/Codebase.png"
            alt="Codebase"
            width={500}
            height={500}
          />
        </div>

        <p className="text-lg text-neutral-700">Deployment</p>
        <hr className="border-neutral-500" />
        <div className="mt-4 mb-4 ml-4">
          <Image
            src="/images/Deployment.png"
            alt="Codebase"
            width={700}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
