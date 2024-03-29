import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReactGA from 'react-ga';
ReactGA.initialize({ trackingId: process.env.REACT_APP_TRACKING_ID });

const Page = ({ title, ...rest }) => {
  useEffect(() => {
    document.title = (title ? title + ' | ' : '') + process.env.REACT_APP_TITLE;
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return <Route {...rest} />;
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
};

export { Page };
