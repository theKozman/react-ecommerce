import { Paper } from '@mui/material';
import { styled } from '@mui/system';
import Filters from './Filters';

const StyledPaper = styled(Paper)({
  width: '15%',
  padding: '40px 10px',
});

const Sidebar = (props) => {
  return (
    <StyledPaper >
      <Filters 
        {...props}
      />
    </StyledPaper>
  );
}

export default Sidebar;