<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom"; //  前端渲染页面
import { Provider } from "react-redux";
import Router from "./router";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import "./index.less";
import '@/utils/reset.css'
import '@/utils/rem'
=======
import React from 'react';
import ReactDOM from 'react-dom'; //  前端渲染页面
import { Provider } from 'react-redux';
import Router from './router';
import { store } from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './utils/rem'
import './styles/index.less';
import './styles/reset.css'
>>>>>>> 13b7d95a36abc78e9d7d1f732742692d338d8ede

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Router />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
