import * as R from 'ramda';
import * as _ from 'lodash';

import { useHistory, useRouteMatch } from 'react-router-dom';

export default (props) => {
  const { url } = useRouteMatch();

  const history = useHistory();

  const E = {
    onClickProfessor() {
      history.push({ pathname: `/professor` });
    },
    onClickStudent() {
      history.push({ pathname: `/student` });
    },
    onClickCancel() {
      history.push({ pathname: '/' });
    },
    onClickSelectMenu({ key }) {
      history.push({ pathname: `${url}/${key}` });
    },
  };

  return E;
};
