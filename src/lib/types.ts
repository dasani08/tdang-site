export interface ImageProps {
  id: string;
  url: string;
  height: number;
  width: number;
  // public_id: string;
  // format: string;
  // blurDataUrl?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
