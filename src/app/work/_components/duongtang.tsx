import Image from 'next/image';

export default function DuongtangModal({ onClose }: any) {
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-top p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-5xl">
            <div className="bg-white px-4 pb-4 pt-5 p-6 pb-4">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button onClick={onClose}>
                  <Image src="/icons/x.svg" alt="" width={24} height={24} />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="font-['Roboto'] text-xl font-bold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    DUONG TANG - Streaming Service
                  </h3>
                  <div className="mt-2">
                    <p className="font-['Roboto'] text-lg text-neutral-700">
                      Role: Full Stack Developer
                    </p>
                    <p className="font-['Roboto'] text-lg text-neutral-700">
                      Technologies:{' '}
                      <span className="font-['Roboto_Light'] text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
                        React
                      </span>
                      <span className="font-['Roboto_Light'] text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
                        Flask (Python)
                      </span>
                      <span className="font-['Roboto_Light'] text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
                        Node.js
                      </span>
                      <span className="font-['Roboto_Light'] text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
                        Docker
                      </span>
                      <span className="font-['Roboto_Light'] text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
                        AMQP
                      </span>
                    </p>
                  </div>
                  <div className="mt-9 mb-9">
                    <p className="font-['Roboto_Light'] text-base text-neutral-700">
                      It was one of my favourite side projects. There was a team
                      of three including 2 full-stack developers, and one ux
                      designer. It took 3 months to launch the first version and
                      to get onboard very first customers. We ran it for almost
                      6 months later on til we shut it off due to personal work.
                    </p>
                  </div>
                  <p className="font-['Roboto'] text-lg text-neutral-700">
                    Codebase
                  </p>
                  <hr className="border-neutral-500 mb-4" />
                  <div className="mt-4 mb-4 ml-4">
                    <Image
                      src="/images/dt_codebase.png"
                      alt="Codebase"
                      width={500}
                      height={500}
                    />
                  </div>

                  <p className="font-['Roboto'] text-lg text-neutral-700">
                    Deployment
                  </p>
                  <hr className="border-neutral-500 mb-4" />
                  <p className="mb-2 font-['Roboto_Light']">
                    <span className="font-['Roboto'] font-bold">
                      Frontend:{' '}
                    </span>
                    The React app was setup to build & deploy to Netlify
                    automatically
                  </p>
                  <p className="mb-2 font-['Roboto_Light']">
                    <span className="font-['Roboto'] font-bold">Backend: </span>
                    The entire application was backed by several python apps
                    included{' '}
                    <a
                      className="text-sky-600"
                      href="https://flask.palletsprojects.com/en/3.0.x/"
                    >
                      Flask
                    </a>{' '}
                    as APIs, Python apps as workers and cron jobs. All pythons
                    app were built using Docker and deployed to a dedicated
                    server. Regarding{' '}
                    <a
                      className="text-sky-600"
                      href="https://flask.palletsprojects.com/en/3.0.x/"
                    >
                      Flask
                    </a>{' '}
                    app as a front API, it might received a lot of requests from
                    users, then it was run by{' '}
                    <a className="text-sky-600" href="https://gunicorn.org/">
                      gunicorn
                    </a>{' '}
                    to archive the best performance.
                  </p>
                  <p className="mb-2 font-['Roboto_Light']">
                    <span className="font-['Roboto'] font-bold">Workers: </span>
                    All communication between backend services were done through
                    AMQP(Advanced Message Queuing Protocol).
                  </p>
                  <p className="mb-2 font-['Roboto_Light']">
                    <span className="font-['Roboto'] font-bold">Redis: </span>
                    was used for statistic and tracking the API usage from
                    users.
                  </p>
                  <p className="mb-2 font-['Roboto_Light']">
                    <span className="font-['Roboto'] font-bold">
                      Memcached:{' '}
                    </span>
                    for caching API response to reduce the work load to database
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
