import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ITEMS_PER_PAGE } from './constants';

const QID_BOOKS_DATA_INFINITE = 'QID_BOOKS_DATA_INFINITE';

/**
 * @param {{
 *    queryKey: any;
 *    pageParam: any;
 *    signal?: any;
 *    meta: any;
 * }} props
 */
async function fetchBooks({ queryKey }) {
  const pageParam = Math.max(queryKey[3] - 1, 0);
  const axiosOptions = {
    params: { startIndex: pageParam * queryKey[2], q: queryKey[1] || 'search+terms', maxResults: queryKey[2] },
  };
  return axios.get('https://www.googleapis.com/books/v1/volumes', axiosOptions);
}

/**
 * @param {{
 *    itemsPerPage?: number,
 *    searchText?: string,
 *    curViewType?: string,
 *    curPage?: number,
 * }} props
 */
export function useInfiniteBooksData({ itemsPerPage, searchText, curPage, curViewType } = {}) {
  !itemsPerPage && (itemsPerPage = ITEMS_PER_PAGE); // <--- NOTE! in pagination mode, this should always be defined. In infinite scroll mode, this should NOT be defined! (either undefined, null, or 0).

  return useInfiniteQuery({
    queryKey: [QID_BOOKS_DATA_INFINITE, searchText, itemsPerPage, curPage, curViewType],
    queryFn: fetchBooks,
    cacheTime: 300000, // <--- default value is 5 minutes = 5 * 60 * 1000 = 300000!
    // staleTime: 30000, // <--- default value is 0. Every re-visit would trigger a background refetch.
    refetchOnWindowFocus: false,
    keepPreviousData: true, // <--- Useful for both pagination & infinite scroll! Defaults to false. Set this to true to keep the previous data when fetching based on a new query key.
    select: ({ pageParams, pages }) => ({ pageParams, pages: pages.map((item) => item.data) }), // <--- do data-transformation on the response!
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });
}
