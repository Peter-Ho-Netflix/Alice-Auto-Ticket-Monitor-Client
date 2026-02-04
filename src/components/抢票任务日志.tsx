'use client';

import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';

export function 抢票任务日志() {
  const 日志数据 = [
    {
      id: 1,
      时间: '2024-01-15 10:30:25',
      任务名称: '演唱会门票',
      状态: '成功',
      详情: '成功抢到2张门票',
    },
    {
      id: 2,
      时间: '2024-01-15 10:25:18',
      任务名称: '火车票',
      状态: '失败',
      详情: '网络超时，重试中',
    },
    {
      id: 3,
      时间: '2024-01-15 10:20:12',
      任务名称: '电影票',
      状态: '成功',
      详情: '成功抢到4张电影票',
    },
    {
      id: 4,
      时间: '2024-01-15 10:15:05',
      任务名称: '演出票',
      状态: '进行中',
      详情: '正在尝试抢票...',
    },
  ];

  const 获取状态颜色 = (状态: string) => {
    switch (状态) {
      case '成功':
        return 'success';
      case '失败':
        return 'error';
      case '进行中':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        抢票任务日志
      </Typography>

      <Paper sx={{ marginTop: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>时间</TableCell>
                <TableCell>任务名称</TableCell>
                <TableCell>状态</TableCell>
                <TableCell>详情</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {日志数据.map((日志) => (
                <TableRow key={日志.id}>
                  <TableCell>{日志.时间}</TableCell>
                  <TableCell>{日志.任务名称}</TableCell>
                  <TableCell>
                    <Chip
                      label={日志.状态}
                      color={获取状态颜色(日志.状态) as 'success' | 'error' | 'warning' | 'default'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{日志.详情}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
