import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useState } from 'react';

const RepositoryList = () => {
  const [queryOptions, setQueryOptions] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
    searchKeyword: '',
  });
  const { data } = useRepositories(queryOptions);

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

  return (
    <RepositoryListContainer
      repositories={data?.repositories}
      onSort={onSort}
      onFilterChange={onFilterChange}
    />
  );
};

export default RepositoryList;
