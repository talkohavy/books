const resultsPerPageObj = {
  10: { value: 10, label: 'Show 10' },
  20: { value: 20, label: 'Show 20' },
  50: { value: 50, label: 'Show 50' },
  null: { value: 0, label: 'Show all' },
};
const resultsPerPageOptions = Object.keys(resultsPerPageObj).map((key) => resultsPerPageObj[key]);

const GUTTER_SIZE = 20;
const ITEMS_PER_PAGE = 24;
const BOTTOM_GAP_TO_LOAD_MORE = 800;
const RIGHT_GAP_TO_SCROLLBAR = 20;

const VIEW_TYPES = {
  PaginationView: { value: 'PaginationView', label: 'Pagination' },
  InfiniteScrollView: { value: 'InfiniteScrollView', label: 'Infinite Scroll' },
};

const viewTypeOptions = Object.values(VIEW_TYPES);

function getGridPropsFromContainerWidth(width) {
  if (width > 1280) return { cardsPerRow: 4, columnWidth: 300, rowHeight: 300 };
  if (width > 930) return { cardsPerRow: 3, columnWidth: 300, rowHeight: 300 };
  if (width > 640) return { cardsPerRow: 2, columnWidth: 300, rowHeight: 300 };
  // if (width > 480) return { cardsPerRow: 1, columnWidth: 500 };
  return { cardsPerRow: 1, columnWidth: 420, rowHeight: 420 };
}

export {
  BOTTOM_GAP_TO_LOAD_MORE,
  GUTTER_SIZE,
  ITEMS_PER_PAGE,
  RIGHT_GAP_TO_SCROLLBAR,
  VIEW_TYPES,
  getGridPropsFromContainerWidth,
  resultsPerPageObj,
  resultsPerPageOptions,
  viewTypeOptions,
};
