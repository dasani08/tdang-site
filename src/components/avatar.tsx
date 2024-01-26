'use client';
import { useRouter } from 'next/navigation';

export default function Avatar() {
  const router = useRouter();

  return (
    <div className="font-['Roboto_Thin'] relative flex text-5xl items-center justify-center size-32 shrink-0">
      <span className="z-50 cursor-pointer" onClick={() => router.push('/')}>
        TD
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 146 146"
        fill="none"
        className="absolute left-0 top-0 cursor-pointer"
        onClick={() => router.push('/')}
      >
        <g filter="url(#filter0_dddd_7_15)">
          <circle cx="73" cy="73" r="64" fill="#D9D9D9" />
        </g>
        <defs>
          <filter
            id="filter0_dddd_7_15"
            x="0"
            y="0"
            width="146"
            height="146"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-3" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.885124 0 0 0 0 0.576065 0 0 0 0 0.213257 0 0 0 0.5 0"
            />
            <feBlend
              mode="hard-light"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_7_15"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.376684 0 0 0 0 0.654183 0 0 0 0 0.246096 0 0 0 0.5 0"
            />
            <feBlend
              mode="hard-light"
              in2="effect1_dropShadow_7_15"
              result="effect2_dropShadow_7_15"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="3" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.233466 0 0 0 0 0.654996 0 0 0 0 0.892106 0 0 0 0.5 0"
            />
            <feBlend
              mode="hard-light"
              in2="effect2_dropShadow_7_15"
              result="effect3_dropShadow_7_15"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-3" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.959359 0 0 0 0 0.278251 0 0 0 0 0.278251 0 0 0 0.5 0"
            />
            <feBlend
              mode="hard-light"
              in2="effect3_dropShadow_7_15"
              result="effect4_dropShadow_7_15"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect4_dropShadow_7_15"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
