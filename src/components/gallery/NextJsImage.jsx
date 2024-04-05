import Image from 'next/image';

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}) {
  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image fill src={photo} {...{ alt, title, sizes, className, onClick }} />
    </div>
  );
}
