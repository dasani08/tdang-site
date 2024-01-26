import Image from 'next/image';

export default function NetwilaModal({ onClose }: any) {
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
                    Netwila Application
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
                        Nest.js
                      </span>
                      <span className="font-['Roboto_Light'] text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
                        Next.js
                      </span>
                      <span className="font-['Roboto_Light'] text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
                        AWS
                      </span>
                      <span className="font-['Roboto_Light'] text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
                        Docker
                      </span>
                      <span className="font-['Roboto_Light'] text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
                        Microshift
                      </span>
                      <span className="font-['Roboto_Light'] text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
                        MongoDB
                      </span>
                    </p>
                  </div>
                  <div className="mt-9 mb-9">
                    <p className="font-['Roboto_Light'] text-base text-neutral-700">
                      Involved in many aspects of the project from codebase,
                      deployment, guidelines, CI/CD, integration to developing
                      new features for Freight Management across global
                      logistics.
                    </p>
                  </div>
                  <p className="font-['Roboto'] text-lg text-neutral-700">
                    Codebase
                  </p>
                  <hr className="border-neutral-500" />
                  <div className="mt-4 mb-4 ml-4">
                    <Image
                      src="/images/Codebase.png"
                      alt="Codebase"
                      width={500}
                      height={500}
                    />
                  </div>

                  <p className="font-['Roboto'] text-lg text-neutral-700">
                    Deployment
                  </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
