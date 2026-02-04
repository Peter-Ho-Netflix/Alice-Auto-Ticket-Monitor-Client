'use client';

import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Grid,
} from '@mui/material';
import { useState } from 'react';

export function 抢票任务配置() {
  const [配置数据, set配置数据] = useState({
    自动重试: true,
    重试次数: 3,
    超时时间: 30,
    并发数: 5,
    通知邮箱: '',
    通知手机: '',
  });

  const 保存配置 = () => {
    console.log('保存配置:', 配置数据);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        抢票任务配置
      </Typography>

      <Paper sx={{ padding: 3, marginTop: 2 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={配置数据.自动重试}
                  onChange={(e) =>
                    set配置数据({
                      ...配置数据,
                      自动重试: e.target.checked,
                    })
                  }
                />
              }
              label="自动重试"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="重试次数"
              type="number"
              value={配置数据.重试次数}
              onChange={(e) =>
                set配置数据({
                  ...配置数据,
                  重试次数: parseInt(e.target.value) || 0,
                })
              }
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="超时时间(秒)"
              type="number"
              value={配置数据.超时时间}
              onChange={(e) =>
                set配置数据({
                  ...配置数据,
                  超时时间: parseInt(e.target.value) || 0,
                })
              }
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="并发数"
              type="number"
              value={配置数据.并发数}
              onChange={(e) =>
                set配置数据({
                  ...配置数据,
                  并发数: parseInt(e.target.value) || 0,
                })
              }
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="通知邮箱"
              type="email"
              value={配置数据.通知邮箱}
              onChange={(e) =>
                set配置数据({ ...配置数据, 通知邮箱: e.target.value })
              }
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="通知手机"
              value={配置数据.通知手机}
              onChange={(e) =>
                set配置数据({ ...配置数据, 通知手机: e.target.value })
              }
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button variant="contained" color="primary" onClick={保存配置}>
              保存配置
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
