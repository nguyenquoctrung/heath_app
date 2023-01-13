import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Colors } from '../styles/theme';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color={Colors.Light}
          sx={{ fontSize: 18, padding: "1rem" }}
        >05/21</Typography>
        <Typography
          variant="caption"
          component="div"
          color={Colors.Light}
          sx={{ fontSize: 25 }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic() {
  const progress = 75;
  return <CircularProgressWithLabel value={progress} size={150} color="inherit" style={{ color: Colors.Light }} />;
}