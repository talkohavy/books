import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function BooksListTopPanel({
  searchText,
  setSearchText,
  onSearchClick,
  viewType,
  setViewType,
  viewTypeOptions,
}) {
  return (
    <div className='flex items-center justify-start gap-3'>
      <Select value={viewType} setValue={setViewType} options={viewTypeOptions} className='!h-10 w-36 border-black' />

      <Input value={searchText} setValue={setSearchText} className='!w-60 max-w-full' />

      <Button
        isDisabled={!searchText}
        onClick={onSearchClick}
        className='h-10 w-20 rounded-xl border border-black bg-blue-600 p-1 text-white hover:rounded-2xl hover:bg-blue-500 focus:bg-blue-700'
      >
        Search
      </Button>
    </div>
  );
}
