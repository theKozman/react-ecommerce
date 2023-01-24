import { Card, CardMedia, Grid, Paper, styled, Typography, Tooltip } from '@mui/material';
import { Box, Stack } from '@mui/system';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const DeleteIcon = styled(Box)({
  position: 'absolute',
  top: 'auto',
  right: '5px',
  bottom: '5px',
  left: 'auto',
  cursor: 'pointer'
});

const ProductCartItem = ({ title, price, category, image, id, handleDeleteCartProduct }) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <CardMedia
            image={image}
            sx={{
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <Stack p={1}>
            <Typography variant='caption' color='gray'>{category}</Typography>
            <Tooltip title={title}>
              <Typography
                sx={{
                  maxWidth: '500px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {title}
              </Typography>
            </Tooltip>
            <Typography variant='h5' component='p'>${price}</Typography>
          </Stack>
          <DeleteIcon onClick={handleDeleteCartProduct.bind(null, id)}>
            <DeleteForeverIcon/>
          </DeleteIcon>
        </Grid>

      </Grid>
    </Card>
  );
}

export default ProductCartItem;