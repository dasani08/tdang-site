/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import Header from '@/components/header';

export default function DuongtangPage() {
  return (
    <div className={`relative bg-slate-50 h-full`}>
      <Header title="MAMA - Marketplace for Mamas" />
      <div className="relative rounded-xl overflow-auto p-8 max-w-screen-lg">
        <div className="mt-2">
          <p className="text-lg">Role: UI/UX Designer</p>
          <p className="text-lg">
            Technologies:{' '}
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-slate-50 rounded">
              Figma
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-slate-50 rounded">
              Google Material Design
            </span>
          </p>
        </div>
        <div className="mt-9 mb-9">
          <p className="font-light">
            An app for parents to purchase and resell children&apos;s clothing.
            This is one of my assigment to complete the{' '}
            <b>Google UX Design Professional Certificate</b>. The app works
            similarly to the marketplace on Facebook but it will only focus on
            selling & buying kid&apos;s clothes. Because it is an open market,
            and following <b>C2C (customer to customer)</b> model, there will be
            no payment mechanism at all. Customer will interact with each other,
            and manage their own ads.
          </p>
          <p className="font-light mt-2">
            Regarding the customer&apos;s communication, a customer can connect
            with others via the app or via email if he/she found an interesting
            item. To make posting ads easier, account registration is not
            required, but providing an email is necessary so the app can connect
            buyers and sellers.
          </p>

          <p className="font-light mt-2">
            <b>Some differences compared to Facebook Marketplace:</b>
            <ul className="list-disc list-inside">
              <li>The target audience is only parents</li>
              <li>
                Searching is easier with categories designed specifically for
                children
              </li>
            </ul>
          </p>
        </div>
        <div className="mt-9 mb-9">
          <p className="text-lg">User stories</p>
          <hr className="border-slate-500 mb-4" />
          <div className="rounded-2xl shadow-md overflow-hidden w-full p-5 mt-4 mb-4 bg-white">
            <p>
              As a mother of 2, I want to sell my kid&apos;s unused clothing, so
              that I can get some money back and shop new clothes for them
            </p>
          </div>
          <div className="rounded-2xl shadow-md overflow-hidden w-full p-5 mt-4 mb-4 bg-white">
            <p>
              As a new mom, I realized my son grew very quickly in the first few
              months. Many clothes I bought, he only wore once or twice and of
              course they were still very new. I want to sell them to others in
              need, so I can have more space and buy new things for him.
            </p>
          </div>
          <div className="rounded-2xl shadow-md overflow-hidden w-full p-5 mt-4 mb-4 bg-white">
            <p>
              As a mother having financal difficulties, I need to buy old
              children&apos;s clothes, so I can save money for my family.
            </p>
          </div>
        </div>
        <div className="mt-9 mb-9">
          <p className="text-lg">Wireframe</p>
          <hr className="border-slate-500 mb-4" />
          <div className="columns-2 gap-6 space-y-6">
            <img
              className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
              src="/images/mama/wf1.png"
              alt="Mama"
            />
            <img
              className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
              src="/images/mama/wf2.png"
              alt="Mama"
            />
          </div>
        </div>
        <div className="mt-9 mb-9">
          <p className="text-lg">Mockup</p>
          <hr className="border-slate-500 mb-4" />
          <div className="columns-2 gap-6 space-y-6">
            <img
              className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
              src="/images/mama/Login.png"
              alt="Mama"
            />
            <img
              className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
              src="/images/mama/Listing.png"
              alt="Mama"
            />
            <img
              className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
              src="/images/mama/Listing Detail.png"
              alt="Mama"
            />
            <img
              className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
              src="/images/mama/Category.png"
              alt="Mama"
            />
            <img
              className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
              src="/images/mama/Inbox.png"
              alt="Mama"
            />
            <img
              className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
              src="/images/mama/Listing - First visit.png"
              alt="Mama"
            />
            <img
              className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
              src="/images/mama/New Listing.png"
              alt="Mama"
            />
            <img
              className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
              src="/images/mama/Refine Location.png"
              alt="Mama"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
