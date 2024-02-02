import Carousel from '@/components/carousel';
import { getPhotos } from '@/lib/contentful';
import { ImageProps } from '@/lib/types';

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const images = (await getPhotos()) as ImageProps[];
  let index = images.findIndex((image) => image.id === params.id);

  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={images[index]} index={index} />
      </main>
    </>
  );
}
