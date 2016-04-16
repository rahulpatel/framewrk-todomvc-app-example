'use strict';

import framework from 'framewrk';

import Header from 'containers/Header'
import Main from 'containers/Main';
import Footer from 'containers/Footer';

const headerContainer = document.querySelector('.header');
const mainContainer = document.querySelector('.main');
const footerContainer = document.querySelector('.footer');

framework.route({
  path: '/completed',

  views: [
    {
      container: headerContainer,
      props() {
        return { filter: 'SHOW_COMPLETED' };
      },
      component: Header
    },
    {
      container: mainContainer,
      props() {
        return { filter: 'SHOW_COMPLETED' };
      },
      component: Main
    },
    {
      container: footerContainer,
      props() {
        return { filter: 'SHOW_COMPLETED' };
      },
      component: Footer
    }
  ]
});
