/**
 * @author xcsoft<contact@xcsoft.top>
 */
import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from "react-helmet";

import i18n from './i18n/i18n'; //国际化
import { useTranslation } from "react-i18next"


import {
  Fab,
  Menu,
  MenuItem,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import GTranslateIcon from '@mui/icons-material/GTranslate';

// pages
import Index from './pages/index';
import Home from './pages/home';
import Project from './pages/project';
import About from './pages/about';

import NotFound from './component/404';
// pages END

const Main = () => {
  const { t } = useTranslation('desc');

  const [lang, setLang] = useState(null);

  // 处理语言切换
  const [anchorEl, setAnchorEl] = useState(null);
  const LangMenuOpen = Boolean(anchorEl);

  useEffect(() => i18n.changeLanguage(lang), [lang])

  // prevent select or copy
  window.document.onselectstart = () => {
    return false;
  }
  window.document.oncontextmenu = () => {
    return false;
  }

  // dark mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          background: {
            default: prefersDarkMode ? '#303030' : '#fafafa',
            paper: prefersDarkMode ? '#424242' : '#fff',
          },
          text: {
            primary: !prefersDarkMode ? 'rgba(0, 0, 0, 0.7)' : '#fff',
            secondary: !prefersDarkMode ? 'rgba(0, 0, 0, 0.55)' : 'rgba(255, 255, 255, 0.7)',
            disabled: !prefersDarkMode ? 'rgba(0, 0, 0, 0.38)' : 'rgba(255, 255, 255, 0.5)',
          },
        },
      }),
    [prefersDarkMode],
  );

  useEffect(() => {
    window.document.body.style.backgroundColor = prefersDarkMode ? '#303030' : '#fafafa';
  }, [prefersDarkMode]);

  return <>
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{t('title')} - {t('subtitle')}</title>
      </Helmet>
      <Router>
        {/* 路由 */}
        <Routes>
          {/* 基础路由 */}
          <Route path='/' element={<Index />}>
            <Route index element={<Home />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Route>
          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
      {/* 切换语言 */}
      <Fab
        aria-controls="lang_menu"
        onClick={(event) => setAnchorEl(event.currentTarget)}
        size="small"
        aria-label="change language"
        sx={{
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          opacity: '0.5'
        }}
      >
        <GTranslateIcon />
      </Fab>
      <Menu
        open={LangMenuOpen}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
        anchorEl={anchorEl}
      >
        <MenuItem onClick={() => setLang('zh-CN')}>简体中文</MenuItem>
        <MenuItem onClick={() => setLang('en')}>English</MenuItem>
      </Menu>
    </ThemeProvider>
  </>;
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
