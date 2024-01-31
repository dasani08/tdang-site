import Image from 'next/image';

import Header from '@/components/header';

export default function DuongtangPage() {
  return (
    <div className={`relative bg-slate-50 h-full`}>
      <Header title="DUONG TANG - Streaming Service" />
      <div className="relative rounded-xl overflow-auto p-8 max-w-screen-lg">
        <div className="mt-2">
          <p className="text-lg text-neutral-700">Role: Full Stack Developer</p>
          <p className="text-lg text-neutral-700">
            Technologies:{' '}
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              React
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Flask (Python)
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Node.js
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Docker
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              AMQP
            </span>
          </p>
        </div>
        <div className="mt-9 mb-9">
          <p className="font-light text-base text-neutral-700">
            It was one of my favourite side projects. There was a team of three
            including 2 full-stack developers, and one ux designer. It took 3
            months to launch the first version and to get onboard very first
            customers. We ran it for almost 6 months later on til we shut it off
            due to personal work.
          </p>
        </div>
        <p className="text-lg text-neutral-700">Codebase</p>
        <hr className="border-neutral-500 mb-4" />
        <div className="mt-4 mb-4 ml-4">
          <Image
            src="/images/dt_codebase.png"
            alt="Codebase"
            width={500}
            height={500}
          />
        </div>

        <p className="text-lg text-neutral-700">Deployment</p>
        <hr className="border-neutral-500 mb-4" />
        <p className="mb-2 font-light">
          <span className="font-bold">Frontend: </span>
          The React app was setup to build & deploy to Netlify automatically
        </p>
        <p className="mb-2 font-light">
          <span className="font-bold">Backend: </span>
          The entire application was backed by several python apps included{' '}
          <a
            className="text-sky-600"
            href="https://flask.palletsprojects.com/en/3.0.x/"
          >
            Flask
          </a>{' '}
          as APIs, Python apps as workers and cron jobs. All pythons app were
          built using Docker and deployed to a dedicated server. Regarding{' '}
          <a
            className="text-sky-600"
            href="https://flask.palletsprojects.com/en/3.0.x/"
          >
            Flask
          </a>{' '}
          app as a front API, it might received a lot of requests from users,
          then it was run by{' '}
          <a className="text-sky-600" href="https://gunicorn.org/">
            gunicorn
          </a>{' '}
          to archive the best performance.
        </p>
        <p className="mb-2 font-light">
          <span className="font-bold">Workers: </span>
          All communication between backend services were done through
          AMQP(Advanced Message Queuing Protocol).
        </p>
        <p className="mb-2 font-light">
          <span className="font-bold">Redis: </span>
          was used for statistic and tracking the API usage from users.
        </p>
        <p className="mb-2 font-light">
          <span className="font-bold">Memcached: </span>
          for caching API response to reduce the work load to database
        </p>
      </div>
    </div>
  );
}
