'use client';

import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';

export function 抢票任务表单() {
  enum 抢票平台类型 {
    大麦 = '大麦',
    猫眼 = '猫眼',
    淘票票 = '淘票票',
    纷玩岛 = '纷玩岛',
    票星球 = '票星球',
  }
  const [任务名称, set任务名称] = useState('');
  const [任务描述, set任务描述] = useState('');
  const [任务状态, set任务状态] = useState('');
  const [任务创建时间, set任务创建时间] = useState('');
  const [任务更新时间, set任务更新时间] = useState('');
  const [任务创建者, set任务创建者] = useState('');
  const [抢票平台, set抢票平台] = useState(抢票平台类型.大麦);

  function 保存() {
    console.log(
      任务名称,
      任务描述,
      任务状态,
      任务创建时间,
      任务更新时间,
      任务创建者,
      抢票平台
    );
  }

  return (
    <Box className="抢票任务表单" sx={{ padding: 2 }}>
      <Typography variant="h6">抢票任务表单</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="任务名称"
          value={任务名称}
          onChange={(e) => set任务名称(e.target.value)}
        />
        <TextField
          label="任务描述"
          value={任务描述}
          onChange={(e) => set任务描述(e.target.value)}
        />
        <TextField
          label="任务状态"
          value={任务状态}
          onChange={(e) => set任务状态(e.target.value)}
        />
        <TextField
          label="任务创建时间"
          value={任务创建时间}
          onChange={(e) => set任务创建时间(e.target.value)}
        />
        <TextField
          label="任务更新时间"
          value={任务更新时间}
          onChange={(e) => set任务更新时间(e.target.value)}
        />
        <TextField
          label="任务创建者"
          value={任务创建者}
          onChange={(e) => set任务创建者(e.target.value)}
        />
        <Select
          label="抢票平台"
          value={抢票平台}
          onChange={(e) => set抢票平台(e.target.value)}
        >
          <MenuItem value={抢票平台类型.大麦}>大麦</MenuItem>
          <MenuItem value={抢票平台类型.猫眼}>猫眼</MenuItem>
          <MenuItem value={抢票平台类型.淘票票}>淘票票</MenuItem>
          <MenuItem value={抢票平台类型.纷玩岛}>纷玩岛</MenuItem>
          <MenuItem value={抢票平台类型.票星球}>票星球</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={保存}>
          保存
        </Button>
      </Box>
    </Box>
  );
}
