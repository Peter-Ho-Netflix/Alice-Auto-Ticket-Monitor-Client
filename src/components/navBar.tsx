'use client';

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import { 页面类型 as 页面类型枚举 } from '@/types/页面类型';

interface NavBarProps {
  切换页面: (页面类型: 页面类型枚举) => void;
  当前页面: 页面类型枚举;
}

export function NavBar({ 切换页面, 当前页面 }: NavBarProps) {
  const [打开抽屉, set打开抽屉] = useState(false);

  const 导航项目 = [
    {
      类型: 页面类型枚举.抢票任务表单,
      文本: '新建抢票任务',
      图标: <AddIcon />,
    },
    {
      类型: 页面类型枚举.抢票任务列表,
      文本: '抢票任务列表',
      图标: <ListIcon />,
    },
    {
      类型: 页面类型枚举.抢票任务配置,
      文本: '抢票任务配置',
      图标: <SettingsIcon />,
    },
    {
      类型: 页面类型枚举.抢票任务日志,
      文本: '抢票任务日志',
      图标: <HistoryIcon />,
    },
  ];

  const 处理导航点击 = (页面类型: 页面类型枚举) => {
    切换页面(页面类型);
    set打开抽屉(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => set打开抽屉(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            爱丽丝自动票务监控系统
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={打开抽屉}
        onClose={() => set打开抽屉(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" color="primary">
              导航菜单
            </Typography>
          </Box>
          <Divider />
          <List>
            {导航项目.map((项目) => (
              <ListItem key={项目.类型} disablePadding>
                <ListItemButton
                  selected={当前页面 === 项目.类型}
                  onClick={() => 处理导航点击(项目.类型)}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: 'primary.light',
                      color: 'primary.contrastText',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'primary.contrastText',
                      },
                    },
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  <ListItemIcon>{项目.图标}</ListItemIcon>
                  <ListItemText primary={项目.文本} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
