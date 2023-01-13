import Menu from './Menu';
import React from 'react';
import * as R from 'ramda';
import * as _ from 'lodash';
import Switch from './Switch';
import Events from './handlers/events';

import { CloseOutlined } from '@ant-design/icons';
import { Row, Col, Button, Typography } from 'antd';

const { Title } = Typography;

const permission = [1, 2, 3, 4, 5];

const Professor = (props) => {
  const events = R.call(Events, {});

  return (
    <div>
      <Row {...{ justify: 'center' }}>
        <Col {...{ span: 12 }}>
          <Row>
            <Col {...{ span: 24 }}>
              <Row {...{ justify: 'space-between' }}>
                <Col>
                  <Title {...{ children: 'Bienvenido Profesor' }} />
                </Col>
                <Col>
                  <Button
                    {...{
                      icon: <CloseOutlined />,
                      shape: 'round',
                      danger: true,
                      onClick: events.onClickCancel,
                      children: 'Cancelar',
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col {...{ span: 24 }}>
              <Menu {...{ events, permission }} />
            </Col>
          </Row>
        </Col>
        <Col {...{ span: 24 }}>
          <Switch />
        </Col>
      </Row>
    </div>
  );
};

export default Professor;
