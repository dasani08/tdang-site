'use client';

import React from 'react';
import Image from 'next/image';

import Header from '@/components/header';

export default function Mywork() {
  return (
    <div className={`relative bg-slate-50 h-full`}>
      <Header title="Hi!, my name is Thanh, and I am a full-stack developer" />
      <div className={`relative rounded-xl overflow-auto p-8`}>
        <h3 className="text-2xl">More about me</h3>
        <p className="text-lg mt-2">
          I love learning new web technologies and then making products more
          useful, usable which help people do a better job.
        </p>
        <p className="text-lg mt-1">
          Currently working remotely as Full Stack Developer at Netwila
          Application Corps, focused on designing, developing & maintaining a
          logistics system.
        </p>
        <div className="rounded-2xl overflow-hidden w-full p-5 mt-8 bg-white">
          <h3 className="text-xl">Interests</h3>
          <ul className="flex flex-wrap mt-4">
            <li className="inline-flex shadow-chip p-1 text-sm inline-block mx-1 px-4 mt-1 bg-neutral-200 text-neutral-800 rounded-2xl">
              <Image
                src={'/icons/coffee.svg'}
                width={16}
                height={16}
                alt="Picture of the author"
                className="mr-2"
              />
              <span>Coffee</span>
            </li>
            <li className="inline-flex shadow-chip p-1 text-sm inline-block mx-1 px-4 mt-1 bg-neutral-200 text-neutral-800 rounded-2xl">
              <Image
                src={'/icons/react.svg'}
                width={16}
                height={16}
                alt="Picture of the author"
                className="mr-2"
              />
              <span>React</span>
            </li>
            <li className="inline-flex shadow-chip p-1 text-sm inline-block mx-1 px-4 mt-1 bg-neutral-200 text-neutral-800 rounded-2xl">
              <Image
                src={'/icons/next.svg'}
                width={16}
                height={16}
                alt="Picture of the author"
                className="mr-2"
              />
              <span>Next.js</span>
            </li>
            <li className="inline-flex shadow-chip p-1 text-sm inline-block mx-1 px-4 mt-1 bg-neutral-200 text-neutral-800 rounded-2xl">
              <Image
                src={'/icons/nest.svg'}
                width={16}
                height={16}
                alt="Picture of the author"
                className="mr-2"
              />
              <span>Nest.js</span>
            </li>
            <li className="inline-flex shadow-chip p-1 text-sm inline-block mx-1 px-4 mt-1 bg-neutral-200 text-neutral-800 rounded-2xl">
              <Image
                src={'/icons/Typescript.svg'}
                width={16}
                height={16}
                alt="Picture of the author"
                className="mr-2"
              />
              <span>Typescript</span>
            </li>
            <li className="inline-flex shadow-chip p-1 text-sm inline-block mx-1 px-4 mt-1 bg-neutral-200 text-neutral-800 rounded-2xl">
              <Image
                src={'/icons/php.svg'}
                width={16}
                height={16}
                alt="Picture of the author"
                className="mr-2"
              />
              <span>PHP</span>
            </li>
            <li className="inline-flex shadow-chip p-1 text-sm inline-block mx-1 px-4 mt-1 bg-neutral-200 text-neutral-800 rounded-2xl">
              <Image
                src={'/icons/aws.svg'}
                width={16}
                height={16}
                alt="Picture of the author"
                className="mr-2"
              />
              <span>AWS</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden w-full p-5 mt-8 bg-white">
          <h3 className="text-xl text-neutral-700">My recent certifications</h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between rounded-2xl shadow-chip p-4 w-full">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex size-9 shadow-chip bg-neutral-200 rounded-full items-center justify-center">
                    <Image
                      src="/icons/reshot-icon-star.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className="w-full text-sm leading-6">
                  <a href="#" className="underline text-base font-bold">
                    Google UX Design Professional Certificate
                  </a>
                  <span className="ml-4">Jan 2024</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-2xl shadow-chip p-4 w-full">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex size-9 shadow-chip bg-neutral-200 rounded-full items-center justify-center">
                    <Image
                      src="/icons/reshot-icon-star.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className="w-full text-sm leading-6">
                  <a href="#" className="underline text-base font-bold">
                    AWS Certified Solutions Architect - Associate
                  </a>
                  <span className="ml-4">Dec 2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden w-full p-5 mt-8 bg-white">
          <h3 className="text-xl text-neutral-700">Soft skills</h3>
          <ul className="flex mt-4 space-x-4 flex-wrap">
            <li>
              <div className="shadow-chip flex items-center justify-center size-12 rounded-full bg-neutral-200 mx-auto">
                <Image
                  src={'/icons/diversity.svg'}
                  width={24}
                  height={24}
                  alt="Picture of the author"
                />
              </div>
              <div className="mt-1 text-center">Teamwork</div>
            </li>
            <li>
              <div className="shadow-chip flex items-center justify-center size-12 rounded-full bg-neutral-200 mx-auto">
                <Image
                  src={'/icons/family_star.svg'}
                  width={24}
                  height={24}
                  alt="Picture of the author"
                />
              </div>
              <div className="mt-1 text-center">Optimistic</div>
            </li>
            <li>
              <div className="shadow-chip flex items-center justify-center size-12 rounded-full bg-neutral-200 mx-auto">
                <Image
                  src={'/icons/menu_book.svg'}
                  width={24}
                  height={24}
                  alt="Picture of the author"
                />
              </div>
              <div className="mt-1 text-center">Self Learner</div>
            </li>
            <li>
              <div className="shadow-chip flex items-center justify-center size-12 rounded-full bg-neutral-200 mx-auto">
                <Image
                  src={'/icons/sort_by_alpha.svg'}
                  width={24}
                  height={24}
                  alt="Picture of the author"
                />
              </div>
              <div className="mt-1 text-center">Organization</div>
            </li>
            <li>
              <div className="shadow-chip flex items-center justify-center size-12 rounded-full bg-neutral-200 mx-auto">
                <Image
                  src={'/icons/mountain_flag.svg'}
                  width={24}
                  height={24}
                  alt="Picture of the author"
                />
              </div>
              <div className="mt-1 text-center">Results-Driven</div>
            </li>
            <li>
              <div className="shadow-chip flex items-center justify-center size-12 rounded-full bg-neutral-200 mx-auto">
                <Image
                  src={'/icons/3p.svg'}
                  width={24}
                  height={24}
                  alt="Picture of the author"
                />
              </div>
              <div className="mt-1 text-center w-28">Openness to Feedback</div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden w-full p-5 mt-8 bg-white">
          <h3 className="text-xl text-neutral-700">Contact Me</h3>
          <div className="flex mt-8 flex-wrap gap-8">
            <div className="inline-flex">
              <a href="https://github.com/dasani08">
                <Image
                  src="/icons/github.svg"
                  alt="Picture of the author"
                  width={48}
                  height={48}
                />
              </a>
            </div>
            <div className="inline-flex">
              <a href="https://www.linkedin.com/in/thanh-dc/">
                <Image
                  src="/images/LinkedIn_icon.svg"
                  alt="Picture of the author"
                  width={48}
                  height={48}
                />
              </a>
            </div>
            <div className="inline-flex rounded-full size-12 items-center justify-center bg-slate-100">
              <a href="mailto:thanh@clgt.vn">
                <Image
                  src="/icons/mail.svg"
                  alt="Picture of the author"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
