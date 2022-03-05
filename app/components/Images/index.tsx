import {Image as CrystallizeImage, CrystallizeImageVariant } from '@crystallize/react-image';

export interface CrystallizeImage {
  url: string;
  variants: CrystallizeImageVariant[];
}

export interface ImageProps {
  images: CrystallizeImage[];
  sizes?: string;
}

export default function Images({images, sizes}: ImageProps) {
  return (
    <div>
      {images.map((image: CrystallizeImage, i: number) => (
        <CrystallizeImage {...image} sizes={sizes} />
      ))}
    </div>
  );
}