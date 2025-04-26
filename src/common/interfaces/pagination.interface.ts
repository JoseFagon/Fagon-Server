export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
export interface PaginationResult<T> {
  items: T[];
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
