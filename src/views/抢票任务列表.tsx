import { Box, Table, TableBody, TableCell, TablePagination, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';

export function 抢票任务列表() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return (
    <Box className="抢票任务列表" sx={{ padding: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>任务名称</TableCell>
            <TableCell>任务描述</TableCell>
            <TableCell>任务状态</TableCell>
            <TableCell>抢票平台</TableCell>
            <TableCell>创建时间</TableCell>
            <TableCell>更新时间</TableCell>
            <TableCell>创建者</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>任务名称</TableCell>
            <TableCell>任务描述</TableCell>
            <TableCell>任务状态</TableCell>
            <TableCell>抢票平台</TableCell>
            <TableCell>创建时间</TableCell>
            <TableCell>更新时间</TableCell>
            <TableCell>创建者</TableCell>
          </TableRow>
        </TableBody>
        <TablePagination
            count={1}
            page={page}
            onPageChange={(event, value) => setPage(value)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value))}
        />
      </Table>
    </Box>
  );
}