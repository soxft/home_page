/**
 * @author xcsoft<contact@xcsoft.top>
 */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { Helmet } from "react-helmet";

import i18n from './i18n/i18n'; //国际化
import { useTranslation } from "react-i18next"

import './css/main.css';

// pages
import Index from './pages/index';
import Home from './pages/home';
import NotFound from './pages/NotFound'
// pages END

import { Fab, Menu, MenuItem } from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';

const Main = () => {
  const { t } = useTranslation('desc');

  const [lang, setLang] = useState(null);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang])

  // 处理语言切换
  const [anchorEl, setAnchorEl] = useState(null);
  const LangMenuOpen = Boolean(anchorEl);
  const handleLangMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleLangMenuClose = () => {
    setAnchorEl(null);
  };

  return <>
    <Helmet>
      <title>{t('title')} - {t('subtitle')}</title>
      <meta name="description" content={t('description')} />
    </Helmet>
    <Router>
      {/* 路由 */}
      <Routes>
        <Route path='/' element={<Index />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    {/* 切换语言 */}
    <Fab aria-controls="lang_menu" onClick={handleLangMenuOpen} size="small" aria-label="change language" style={{ position: 'fixed', bottom: '50px', right: '50px', opacity: '0.75' }}>
      <GTranslateIcon />
    </Fab>
    <Menu
      id="lang_menu"
      open={LangMenuOpen}
      onClose={handleLangMenuClose}
      onClick={handleLangMenuClose}
      anchorEl={anchorEl}
    >
      <MenuItem onClick={() => setLang('zh-CN')}>简体中文</MenuItem>
      <MenuItem onClick={() => setLang('en')}>English</MenuItem>
    </Menu>
  </>;
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
