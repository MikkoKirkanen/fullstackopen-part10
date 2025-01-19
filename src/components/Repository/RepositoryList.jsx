import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useState } from 'react';

const RepositoryList = () => {
  const [queryOptions, setQueryOptions] = useState({
    first: 4,
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
    searchKeyword: '',
  });
  const { repositories, fetchMore } = useRepositories(queryOptions);

  const onSort = (value) => {
    let orderBy = 'RATING_AVERAGE',
      orderDirection = 'DESC';
    switch (value) {
      case 'latest':
        orderBy = 'CREATED_AT';
        break;
      case 'lowest':
        orderDirection = 'ASC';
        break;
    }
    setQueryOptions((state) => ({ ...state, orderBy, orderDirection }));
  };

  const onFilterChange = (searchKeyword) => {
    setQueryOptions((state) => ({ ...state, searchKeyword }));
  };

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onSort={onSort}
      onFilterChange={onFilterChange}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
