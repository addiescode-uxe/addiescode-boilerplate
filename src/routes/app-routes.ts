import { PathItem } from '../models/route.model';
import MainContainer from '~containers/Main/Main';
import TodosListContainer from '~containers/TodosListContainer/TodosListContainer';
import NumberTemplate from '~containers/ProcessCounter/NumberTemplate';

export const appRoutes: PathItem[] = [
  {
    path: '/home',
    component: MainContainer,
    exact: true,
  },
  {
    path: '/processCounter',
    component: NumberTemplate,
    exact: true,
  },
  {
    path: '/todos',
    component: TodosListContainer,
    exact: true,
  },
];

export default appRoutes;
