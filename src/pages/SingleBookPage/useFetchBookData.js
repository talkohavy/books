import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const QID_FETCH_BOOK = 'QID_FETCH_BOOK';

function fetchBook({ queryKey }) {
  const bookId = queryKey[1];
  return axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
}

export default function useFetchBookData({ queryParams }) {
  return useQuery({
    queryKey: [QID_FETCH_BOOK, queryParams.bookId],
    queryFn: fetchBook,
    cacheTime: 300000,
    refetchOnWindowFocus: false,
    select: ({ data }) => data,
  });
}
