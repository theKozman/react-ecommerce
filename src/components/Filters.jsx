import { Divider, FormControl, FormControlLabel, FormLabel, InputBase, InputLabel, List, ListItem, MenuItem, Radio, RadioGroup, Rating, Select, Stack, styled } from '@mui/material';
import { Box } from '@mui/system';

const Search = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'stretch',
  backgroundColor: theme.palette.grey[800],
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '100%'
}));

const StyledStack = styled(Stack)({
  alignItems: 'flex-start'
});

const ModeSelect = styled(Box)({
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'stretch',
  marginTop: '30px'
});

const Filters = ({ categories, selectedCategory, handleChangeSelectedCategory, searchQuery, handleChangeSearchQuery, handleChangeSelectedRating, ratingMode, handleChangeRatingMode }) => {

  const CategoryRadios = [ ...categories, 'all' ].map(category => (
    <FormControlLabel
      key={category}
      value={category}
      control={<Radio />}
      label={category}
      checked={category === selectedCategory}
      onChange={e => handleChangeSelectedCategory(e.target.value)}
    />
  ));

  return (
      <Stack
        spacing={2}
      >
        <Search>
          <InputBase
            placeholder='Search by name...'
            value={searchQuery}
            onInput={e => handleChangeSearchQuery(e.target.value)}
          />
        </Search>
        <Divider/>
        <FormControl>
          <StyledStack>
            <FormLabel
              id='filters-category-label'  
            >
                CATEGORY
            </FormLabel>
            <RadioGroup
              aria-labelledby='filters-category-label'
              name='filters-category'
            > 
              {CategoryRadios}    
            </RadioGroup>
          </StyledStack>
        </FormControl>
        <FormControl>
          <StyledStack>
              <FormLabel id='filters-rating-label'>RATING</FormLabel>
              <Rating
                name='filters-rating-label'
                aria-labelledby='filters-rating-label'
                onChange={(e, newValue) => handleChangeSelectedRating(newValue)}
              />
              <ModeSelect>
                <InputLabel id="select-mode-label">Filter rating</InputLabel>
                <Select
                  labelId="select-mode-label"
                  id="select-mode"
                  value={ratingMode}
                  label="Rating Mode"
                  onChange={e => handleChangeRatingMode(e.target.value)}
                >
                  <MenuItem value={'min'}>Less</MenuItem>
                  <MenuItem value={'max'}>More</MenuItem>
                </Select>
              </ModeSelect>
          </StyledStack>
        </FormControl>
        
      </Stack>
  );
};

export default Filters;