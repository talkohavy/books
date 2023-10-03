import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import Pagination from '../../components/Pagination';
import { checkIsFavored } from '../../database';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useWidthHeightResize } from '../../hooks/useWidthHeightResize';
import { LSKEY_VIEW_TYPE } from '../../utils/appConstants';
import BookCard from './BookCard';
import BooksTableTopPanel from './BooksListTopPanel';
import {
  BOTTOM_GAP_TO_LOAD_MORE,
  GUTTER_SIZE,
  ITEMS_PER_PAGE,
  RIGHT_GAP_TO_SCROLLBAR,
  VIEW_TYPES,
  getGridPropsFromContainerWidth,
  viewTypeOptions,
} from './constants';
import { useInfiniteBooksData } from './useInfiniteBooksData';

export default function BooksList() {
  // all useRefs:
  const wrapperRef = useRef(null);

  // all useLocalStorages:
  const [viewType, setViewType] = useLocalStorage(LSKEY_VIEW_TYPE);

  // all useStates:
  const [curPage, setCurPage] = useState(1);
  const [gridProps, setGridProps] = useState(() => getGridPropsFromContainerWidth(window.innerWidth));
  const [searchTextLocally, setSearchTextLocally] = useState('');
  const [searchTextFetch, setSearchTextFetch] = useState('');

  const { data, isLoading, isFetching, fetchNextPage } = useInfiniteBooksData({
    itemsPerPage: ITEMS_PER_PAGE,
    searchText: searchTextFetch,
    curViewType: viewType,
    curPage,
  });

  const flatData = useMemo(() => data?.pages?.flatMap((page) => page.items).filter(Boolean) ?? [], [data]);
  const totalItemsOverallCount = !data ? 0 : data.pages[0].totalItems;
  const totalItemsLoadedCount = flatData.length;
  const ROWS_PER_PAGE = ITEMS_PER_PAGE / gridProps.cardsPerRow;
  const rowsCount = Math.ceil(totalItemsLoadedCount / gridProps.cardsPerRow);

  // all useCallbacks:
  const onSearchClick = useCallback(() => {
    setCurPage(1);
    setSearchTextFetch(searchTextLocally);
  }, [searchTextLocally]);
  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement) => {
      if (containerRefElement) {
        const veryLongContainer = containerRefElement.firstElementChild.firstElementChild;
        const containerHeight = veryLongContainer.style.height;
        const gapOfLastChildFromTop = veryLongContainer.lastElementChild?.style?.top;
        if (!gapOfLastChildFromTop) return;
        const gapFromBottom = parseFloat(containerHeight) - parseFloat(gapOfLastChildFromTop);
        if (gapFromBottom < BOTTOM_GAP_TO_LOAD_MORE && !isFetching && totalItemsLoadedCount < totalItemsOverallCount) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalItemsLoadedCount, totalItemsOverallCount]
  );

  const { height } = useWidthHeightResize({
    wrapperRef,
    shouldNotRender: !data,
    fnToRun: ({ width: containerWidth }) => {
      setGridProps(getGridPropsFromContainerWidth(containerWidth));
    },
    ms: 0,
  });

  // all useEffects:
  useEffect(() => {
    if (isLoading) return;

    /// wrapperRef.current.firstElementChild.className = 'no-scrollbar'; // <--- attach to the gridRealRef the 'no-scrollbar' class name
  }, [isLoading]);

  useEffect(() => {
    fetchMoreOnBottomReached(wrapperRef.current);
  }, [fetchMoreOnBottomReached]);

  if (isLoading) return <div>loading...</div>;

  return (
    <div className='flex h-full w-full flex-col items-center justify-start gap-6 p-10'>
      <BooksTableTopPanel
        searchText={searchTextLocally}
        setSearchText={setSearchTextLocally}
        onSearchClick={onSearchClick}
        viewType={viewType}
        setViewType={(e) => setViewType(e.target.value)}
        viewTypeOptions={viewTypeOptions}
      />

      <div className='flex h-[calc(100%-12rem)] w-full flex-1 flex-col items-center justify-center' ref={wrapperRef}>
        <Grid
          width={gridProps.columnWidth * gridProps.cardsPerRow + RIGHT_GAP_TO_SCROLLBAR}
          height={height}
          columnWidth={gridProps.columnWidth}
          columnCount={gridProps.cardsPerRow}
          rowCount={rowsCount}
          rowHeight={gridProps.rowHeight}
          onScroll={() =>
            viewType === VIEW_TYPES.InfiniteScrollView.value && fetchMoreOnBottomReached(wrapperRef.current)
          }
        >
          {({ columnIndex, rowIndex, style }) => {
            const pageIndex = Math.floor(rowIndex / ROWS_PER_PAGE);
            const itemIndex = (rowIndex * gridProps.cardsPerRow + columnIndex) % ITEMS_PER_PAGE;
            const bookData = data?.pages[pageIndex].items[itemIndex];
            const { volumeInfo, id } = bookData ?? {};
            const { title, pageCount, publishedDate, imageLinks } = volumeInfo ?? {};

            return (
              bookData && (
                <div
                  style={{
                    ...style,
                    // @ts-ignore
                    left: style.left,
                    // @ts-ignore
                    top: style.top,
                    // @ts-ignore
                    width: style.width - GUTTER_SIZE,
                    // @ts-ignore
                    height: style.height - GUTTER_SIZE,
                  }}
                >
                  <BookCard
                    id={id}
                    key={itemIndex}
                    title={title}
                    pageCount={pageCount}
                    publishedDate={publishedDate}
                    imageLinks={imageLinks}
                    isFavored={checkIsFavored(id)}
                  />
                </div>
              )
            );
          }}
        </Grid>
      </div>

      {viewType === VIEW_TYPES.PaginationView.value && (
        <Pagination
          perPage={ITEMS_PER_PAGE}
          curPage={curPage}
          setCurPage={setCurPage}
          totalNumOfItems={totalItemsOverallCount}
        />
      )}
    </div>
  );
}
