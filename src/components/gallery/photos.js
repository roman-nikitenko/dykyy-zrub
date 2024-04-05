import { galleryImages } from '@/data/galleryImages';

const breakpoints = [800, 1620, 720, 721, 607, 608, 1549, 1440, 810];

const photos = galleryImages.map((photo, index) => {
  const randomHeight = breakpoints[Math.floor(Math.random() * breakpoints.length)];

  return {
    id: `${photo.src}${index}`,
    src: photo.imageLink,
    width: 1080,
    height: randomHeight,
  };
});

export default photos;
