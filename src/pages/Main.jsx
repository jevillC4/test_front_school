import React from 'react';
import * as R from 'ramda';
import * as _ from 'lodash';
import Events from './handlers/events';

import { Row, Col, Button, Typography } from 'antd';

const { Title } = Typography;

const Main = (props) => {
  const events = R.call(Events, {});

  return (
    <div>
      <Row {...{ justify: 'center' }}>
        <Col {...{ span: 12 }}>
          <Row {...{ justify: 'center' }}>
            <Col {...{ span: 24 }}>
              <Title {...{ children: 'Test Menu App' }} />
            </Col>
            <Col {...{ span: 12 }}>
              <Row>
                <Col {...{ span: 24 }}>
                  <Title
                    {...{
                      level: 2,
                      children: 'Profesores',
                    }}
                  />
                </Col>
                <Col {...{ span: 24 }}>
                  <Row {...{ justify: 'center' }}>
                    <Col>
                      <Button
                        {...{
                          size: 'large',
                          type: 'primary',
                          shape: 'round',
                          onClick: events.onClickProfessor,
                          children: 'Profesor',
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col {...{ span: 12 }}>
              <Row>
                <Col {...{ span: 24 }}>
                  <Title {...{ level: 2, children: 'almunos' }} />
                </Col>
                <Col {...{ span: 24 }}>
                  <Row {...{ justify: 'center' }}>
                    <Col>
                      <Button
                        {...{
                          size: 'large',
                          type: 'primary',
                          shape: 'round',
                          onClick: events.onClickStudent,
                          children: 'Alumno',
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
