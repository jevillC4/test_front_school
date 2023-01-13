import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Switchs = (props) => {
  const { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route {...{ path: `${path}/students`, exact: true }}>
        <h3>listado de alumnos</h3>
      </Route>
      <Route {...{ path: `${path}/professor` }}>
        <h3>listado de profesores</h3>
      </Route>
      <Route {...{ path: `${path}/careers` }}>
        <h3>listado de carreras</h3>
      </Route>
      <Route {...{ path: `${path}/course` }}>
        <h3>listado de cursos</h3>
      </Route>
    </Switch>
  );
};

Switchs.propTypes = {};

export default Switchs;
