import useFavoritesData from './useFavoritesData';

export default function FavoritesPage() {
  const { data } = useFavoritesData();

  return (
    <div className='p-10 dark:text-white'>
      <div className='mb-5 text-5xl font-bold'>Favorites List</div>
      {data.length ? (
        data.map((id) => <div key={id}>ID: {id}</div>)
      ) : (
        <div className='text-lg'>You have 0 books on your favorites list</div>
      )}
    </div>
  );
}
