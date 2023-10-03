import { img_noImageFallback } from '../../../paths/images';

export default function BookCardImage({ imgSources, className }) {
  return (
    <picture className={className}>
      {imgSources && (
        <>
          <source srcSet={imgSources.thumbnail} media='(min-width: 1250px)' />
          <source srcSet={imgSources.smallThumbnail} />
        </>
      )}
      <img loading='lazy' className='h-full w-full rounded object-cover' src={img_noImageFallback} alt='book image' />
    </picture>
  );
}
