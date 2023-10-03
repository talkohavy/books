/// <reference types="vite-plugin-svgr/client" />
import { useState } from 'react';
import clsx from 'clsx';
import MyLink from '../../../components/Link';
import StarIcon from '../../../components/svgs/Star.svg?react';
import { addToDB, removeFromDB } from '../../../database';
import BookCardImage from './BookCardImage';
import BookCardTextDetails from './BookCardTextDetails';

export default function BookCard({ id, title, pageCount, publishedDate, imageLinks, isFavored }) {
  const [wasFavored, setIsFavored] = useState(() => isFavored);

  return (
    <MyLink
      to={`/books/${id}`}
      className='relative flex h-full flex-col items-center justify-between rounded-xl border bg-gray-100 p-3'
    >
      <StarIcon
        fill={wasFavored ? '#ED8A19' : 'gray'}
        className={clsx('absolute right-2 top-2 w-8 ', !wasFavored && 'hover:fill-slate-400')}
        onClick={(e) => {
          console.log('first');
          e.preventDefault();
          e.stopPropagation();
          wasFavored ? removeFromDB(id) : addToDB(id);
          setIsFavored(!wasFavored);
        }}
      />

      <BookCardImage imgSources={imageLinks} className='h-44 w-44' />

      <BookCardTextDetails title={title} publishedDate={publishedDate} pageCount={pageCount} />
    </MyLink>
  );
}
