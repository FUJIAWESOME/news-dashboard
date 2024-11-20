import { create } from 'zustand';
import { TABLE_COLUMNS } from '../constants';
import { INewsItem, SortBy } from '../types';

interface NewsState {
  news: INewsItem[];
  isLoading: boolean;
  isError: boolean,
  visibleColumns: string[];
  searchQuery: string;
  sortOption: SortBy;
  setNews: (news: INewsItem[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
  setVisibleColumns: (columns: string[]) => void;
  setSearchQuery: (query: string) => void;
  setSortOption: (option: SortBy) => void;
};

export const useNewsStore = create<NewsState>((set) => ({
  news: [],
  isLoading: false,
  isError: false,
  visibleColumns: TABLE_COLUMNS,
  searchQuery: '',
  sortOption: SortBy.WithoutSort,
  setNews: (news) => set({ news }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsError: (isError) => set({ isError }),
  setVisibleColumns: (columns) => set({ visibleColumns: columns }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSortOption: (option) => set({ sortOption: option }),
}));
