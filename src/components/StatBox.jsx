import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import { ProgressCircle } from './ProgressCircle';

export const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 30px"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      alignItems="center"
      gap="5px"
    >
      <Box display="flex" justifyContent="space-between" gridColumn="span 6">
        {icon}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>
      </Box>

      <Box gridColumn="span 6" justifySelf="end">
        <ProgressCircle progress={progress} />
      </Box>

      <Box display="flex" justifyContent="space-between" gridColumn="span 12">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};
