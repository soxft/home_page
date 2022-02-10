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

import NotFound from './pages/not_found';
// pages END

import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Fab,
  Menu,
  MenuItem,
  Container,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import GTranslateIcon from '@mui/icons-material/GTranslate';

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
