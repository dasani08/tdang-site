import Modal from '@/components/modal';
import { getPhotos } from '@/lib/contentful';

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const images = await getPhotos();

  return <Modal images={images} id={params.id} />;
}
