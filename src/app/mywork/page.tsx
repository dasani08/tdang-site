'use client';

import React from 'react';

import Header from '@/components/header';
import DuongtangModal from './_components/duongtang';
import NetwilaModal from './_components/netwila';
import NupixModal from './_components/nupix';

export default function Mywork() {
  const [project, setSelectedProject] = React.useState('');
  const closeModalHandle = () => {
    setSelectedProject('');
  };
  const renderProjectModal = React.useCallback(() => {
    if (project === '') return '';
    if (project === 'duongtang') {
      return <DuongtangModal onClose={closeModalHandle} />;
    }
    if (project === 'netwila') {
      return <NetwilaModal onClose={closeModalHandle} />;
    }
    if (project === 'nupix') {
      return <NupixModal onClose={closeModalHandle} />;
    }
  }, [project]);

  const selectProjectHandle = (name: string) => {
    setSelectedProject(name);
  };

  return (
    <main
      className={`flex bg-neutral-200 min-h-screen flex-col justify-center items-center pt-24`}
    >
      <div
        className={`relative flex flex-col items-center container mx-auto max-w-5xl`}
      >
        <Header currentPage="mywork" />
        <div className={`mt-4 -mb-3 container mx-auto max-w-5xl`}>
          <div className="relative rounded-xl overflow-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div
                className="relative group/item flex rounded-lg bg-white shadow-xs px-28 py-28 items-center justify-center bg-[url('/images/Freight.png')] bg-no-repeat bg-auto bg-center transform transition hover:scale-[1.01]"
                onClick={() => selectProjectHandle('netwila')}
              >
                <div className="flex rounded-b-lg bg-neutral-500/70 pl-4 font-['Roboto_Light'] text-xl font-bold text-neutral-50 absolute left-0 bottom-0 w-full h-16 items-center invisible group-hover/item:visible">
                  NETWILA - Freight Management
                </div>
              </div>
              <div
                className="relative group/item flex rounded-lg bg-white shadow-xs px-28 py-28 items-center justify-center bg-[url('/images/Duongtang.png')] bg-no-repeat bg-contain bg-center transform transition hover:scale-[1.01]"
                onClick={() => selectProjectHandle('duongtang')}
              >
                <div className="flex rounded-b-lg bg-neutral-500/70 pl-4 font-['Roboto_Light'] text-xl font-bold text-neutral-50 absolute left-0 bottom-0 w-full h-16 items-center invisible group-hover/item:visible">
                  DUONG TANG - Streaming Service
                </div>
              </div>
              <div
                className="relative group/item flex rounded-lg bg-white shadow-xs px-28 py-28 items-center justify-center bg-[url('/images/Nupix.png')] bg-no-repeat bg-cover transform transition hover:scale-[1.01]"
                onClick={() => selectProjectHandle('nupix')}
              >
                <div className="flex rounded-b-lg bg-neutral-500/70 pl-4 font-['Roboto_Light'] text-xl font-bold text-neutral-50 absolute left-0 bottom-0 w-full h-16 items-center invisible group-hover/item:visible">
                  NUPIX - Live Countdown
                </div>
              </div>
            </div>
          </div>
        </div>
        {renderProjectModal()}
      </div>
    </main>
  );
}
