import Header from '@/components/header';
import { getPhotos } from '@/lib/contentful';
import AllPhotos from './_components/all-photo';

export default async function PhotoPage() {
  const images = await getPhotos();

  return (
    <div className={`relative bg-slate-50 h-full`}>
      <Header title="PHOTOGRAPHY" />
      <div className="p-8">
        <AllPhotos images={images} />
        <div className="columns-3xs gap-8 space-y-8">
          {/* <div className="relative aspect-w-1 aspect-h-1">
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="https://live.staticflickr.com/65535/53499905715_1e53cbf692_b.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="https://live.staticflickr.com/65535/53499639703_e31517060d_b.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="https://live.staticflickr.com/65535/53499792314_1d1a68aae6_b.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="https://live.staticflickr.com/65535/53499905720_f1c2d96984_b.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-9 aspect-h-16">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="https://live.staticflickr.com/3715/10226213593_2b53a3c1a0_b.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-9 aspect-h-16">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="https://live.staticflickr.com/5464/10226143195_c79e95cea1_b.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="https://live.staticflickr.com/2862/11489228193_458d4c1612_b.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="https://live.staticflickr.com/7298/10226089873_03c8f06bf3_b.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="/photos/9866877354_763114de08_o.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-9 aspect-h-16">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="/photos/8701374316_3c9762e13c_o.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="/photos/8577739738_20c50da7fd_o.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-9 aspect-h-16">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="/photos/9484848253_b0738ed398_o.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-9 aspect-h-16">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="/photos/19203491645_035b054979_o.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="/photos/19047821658_2baac2aca7_o.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="/photos/19441311801_b0bc6debdc_o.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="/photos/19554258041_75013548c7_o.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              className="w-full object-cover rounded-lg grayscale hover:grayscale-0"
              src="/photos/23789206350_d404fc0b44_o.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
