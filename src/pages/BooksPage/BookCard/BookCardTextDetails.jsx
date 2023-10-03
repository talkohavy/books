import React from 'react';

export default function BookCardTextDetails({ title, pageCount, publishedDate }) {
  return (
    <div className='w-full text-lg'>
      <div title={title} className='truncate'>
        <strong>Title:&nbsp;</strong>
        <span>{title}</span>
      </div>

      <div>
        <strong>Pages:&nbsp;</strong>
        <span>{pageCount}</span>
      </div>

      <div>
        <strong>Published On:&nbsp;</strong>
        <span>{publishedDate}</span>
      </div>
    </div>
  );
}
