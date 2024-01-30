/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import Header from '@/components/header';

export default function AdkitPage() {
  return (
    <div className={`relative bg-slate-50 h-full`}>
      <Header title="Adkit - Nextjs Admin Template | Next.JS, React, Ant Design, Firebase" />
      <div className="relative rounded-xl overflow-auto p-8">
        <div className="mt-2">
          <p className="text-lg text-neutral-700">
            Technologies:{' '}
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Next.js
            </span>
            <span className="font-light text-sm inline-block mx-1 px-4 bg-sky-400 text-neutral-50 rounded">
              Ant Design
            </span>
          </p>
          <p className="text-lg text-neutral-700">
            Github:{' '}
            <a
              className="text-base text-sky-700"
              href="https://github.com/dasani08/adkit-next-admin-panel"
            >
              adkit-next-admin-panel
            </a>
          </p>
          <p className="text-lg text-neutral-700">
            Review:{' '}
            <a
              className="text-base text-sky-700"
              href="https://old-star-2515.fly.dev"
            >
              https://old-star-2515.fly.dev
            </a>
          </p>
        </div>
        <div className="mt-9 mb-9">
          <h4>Introduction</h4>
          <p className="font-light text-base text-neutral-700 mb-2">
            Adkit is admin panel which was built on top of Next.js Framework and
            inspired by Zoho. All the UI/UX are supported by Ant Design and
            fully customized to satisfy UI diversity from business or brand
            requirements.
          </p>
          <p className="font-light text-base text-neutral-700 mb-2">
            It covers most of common features such as dashboard with statistics,
            item management, report, chat, email, calendar, email. chat and
            more. By prodiving ready to use UI/UX templates, it will help you to
            speed up your application development.
          </p>
          <h4 className="text-lg mt-4">Core Features</h4>
          <ul className="list-disc list-inside font-light">
            <li className="pl-2">Five admin dashboards</li>
            <li className="pl-2">Dark & light versions</li>
            <li className="pl-2">Responsive layout - Mobile friendly</li>
            <li className="pl-2">
              Pre-built app template with list view & data entry form for new
              item
            </li>
            <li className="pl-2">
              Authentication (Integrated firebase authentication)
            </li>
            <li className="pl-2">Ready to use components from Ant.Design</li>
            <li className="pl-2">
              Theme customization for the entire application or any specific
              component
            </li>
            <li className="pl-2">Well Documented</li>
          </ul>
          <h4 className="text-lg mt-4">Pre-built Applications</h4>
          <ul className="list-disc list-inside font-light">
            <li className="pl-2">Item Management</li>
            <li className="pl-2">Customer Management</li>
            <li className="pl-2">Sales Order Management</li>
            <li className="pl-2">Invoice Management</li>
            <li className="pl-2">
              Email (tinymce.js is being used to rich text editor)
            </li>
            <li className="pl-2">Chat</li>
            <li className="pl-2">Location</li>
            <li className="pl-2">Calendar</li>
            <li className="pl-2">Settings</li>
            <li className="pl-2">Pricing</li>
          </ul>
        </div>
        <div className="mt-8 columns-2 gap-6 space-y-6">
          <img
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
            src="https://adkit-admin-panel.netlify.app/photos/D&L.png"
            alt="Adkit"
          />
          <img
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
            src="https://adkit-admin-panel.netlify.app/photos/Dashboard.png"
            alt="Adkit"
          />
          <img
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
            src="https://adkit-admin-panel.netlify.app/photos/Item.png"
            alt="Adkit"
          />
          <img
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
            src="https://adkit-admin-panel.netlify.app/photos/Customer.png"
            alt="Adkit"
          />
          <img
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
            src="https://adkit-admin-panel.netlify.app/photos/Sale Order.png"
            alt="Adkit"
          />
          <img
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
            src="https://adkit-admin-panel.netlify.app/photos/Invoice.png"
            alt="Adkit"
          />
          <img
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
            src="https://adkit-admin-panel.netlify.app/photos/Location.png"
            alt="Adkit"
          />
          <img
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
            src="https://adkit-admin-panel.netlify.app/photos/Mail.png"
            alt="Adkit"
          />
          <img
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
            src="https://adkit-admin-panel.netlify.app/photos/Pricing.png"
            alt="Adkit"
          />
          <img
            className="w-full shadow-lg object-cover rounded-lg transform transition hover:scale-[1.01]"
            src="https://adkit-admin-panel.netlify.app/photos/More.png"
            alt="Adkit"
          />
        </div>
      </div>
    </div>
  );
}
