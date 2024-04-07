import Image from 'next/image';

const NextJsImage = ({ photo, imageProps, wrapperStyle }) => {
  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image alt={imageProps.alt} fill src={photo} {...imageProps} />
    </div>
  );
};

export default NextJsImage;
