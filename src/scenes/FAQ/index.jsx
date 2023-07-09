import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import { Header } from '../../components/Header';
import { tokens } from '../../theme';

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis,
            corporis, maxime animi veritatis eligendi saepe libero est iusto
            aspernatur vero illum sequi error assumenda. Animi totam debitis
            sit. Earum!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another important question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis,
            corporis, maxime animi veritatis eligendi saepe libero est iusto
            aspernatur vero illum sequi error assumenda. Animi totam debitis
            sit. Earum!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your favorite question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis,
            corporis, maxime animi veritatis eligendi saepe libero est iusto
            aspernatur vero illum sequi error assumenda. Animi totam debitis
            sit. Earum!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some random question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis,
            corporis, maxime animi veritatis eligendi saepe libero est iusto
            aspernatur vero illum sequi error assumenda. Animi totam debitis
            sit. Earum!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The final question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis,
            corporis, maxime animi veritatis eligendi saepe libero est iusto
            aspernatur vero illum sequi error assumenda. Animi totam debitis
            sit. Earum!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
