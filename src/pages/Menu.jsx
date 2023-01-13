import React from 'react';
import * as R from 'ramda';
import MockMenu from '../mocks/menu';
import PropTypes from 'prop-types';

import { Menu } from 'antd';

const formMenu = (arr = []) =>
  R.map((k) => R.find(R.propEq('id', k))(MockMenu))(arr).filter((o) => o);

const ItemMenu = (arr = []) =>
  R.map((op) => {
    const { key, label } = op;
    return { key, label };
  })(arr);

const MenuBy = (props) => {
  const { events, permission } = props;

  return (
    <Menu
      {...{
        onClick: events.onClickSelectMenu,
        mode: 'horizontal',
        items: R.compose(ItemMenu, formMenu)(permission),
      }}
    />
  );
};

MenuBy.propTypes = {
  events: PropTypes.object.isRequired,
  permission: PropTypes.array.isRequired,
};

export default MenuBy;
