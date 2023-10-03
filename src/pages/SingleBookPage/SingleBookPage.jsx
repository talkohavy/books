import { useParams } from 'react-router-dom';
import { checkIsFavored } from '../../database';
import BookCard from '../BooksPage/BookCard';
import useFetchBookData from './useFetchBookData';

export default function SingleBookPage() {
  const queryParams = useParams();

  const { data, isLoading, isFetching } = useFetchBookData({ queryParams });

  const { volumeInfo, id } = data ?? {};
  const { title, pageCount, language, publishedDate, imageLinks, categories } = volumeInfo ?? {};

  return (
    <div className='flex flex-col items-center justify-start gap-10 p-10'>
      <h1 className='text-5xl font-bold'>Single Book Page</h1>

      {isLoading || isFetching ? (
        <div>Loading...</div>
      ) : (
        <>
          <BookCard
            title={title}
            pageCount={pageCount}
            imageLinks={imageLinks}
            publishedDate={publishedDate}
            id={id}
            isFavored={checkIsFavored(id)}
          />

          <div className='flex flex-col items-center justify-start gap-3'>
            <div className='text-4xl font-bold'>Extra Details</div>
            <div>Book Language: {language}</div>
            <div>Categories: {categories?.join(', ')}</div>
          </div>
        </>
      )}
    </div>
  );
}
