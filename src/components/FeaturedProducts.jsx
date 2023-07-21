import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const products = [
  {
    id: 1,
    name: 'Bell Pepper',
    image: 'https://o.remove.bg/downloads/9485cb4a-8db4-42ab-a296-4f3bf78637f1/three-peppers-are-laying-white-surface_871710-1799-removebg-preview.png',
    price: 1.99,
    discount: 30,
  },
  {
    id: 2,
    name: 'Strawberry',
    image: 'https://img.freepik.com/premium-photo/three-strawberries-with-green-leaves-top-them_873925-23709.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated',
    price: 2.49,
    discount: 30,
  },
  {
    id: 3,
    name: 'Green Beans',
    image: 'https://img.freepik.com/premium-photo/pea-beans-isolated-white-background-generative-ai_846485-22403.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated',
    price: 0.99,
    discount: 30,
  },
  {
    id: 4,
    name: 'Purple Cabbage',
    image: 'https://img.freepik.com/premium-photo/fresh-organic-red-cabbage-vegetables-white-background-ai-generated-image_210643-816.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated',
    price: 1.79,
    discount: 30,
  },
  {
    id: 5,
    name: 'Tomatoes',
    image: 'https://img.freepik.com/premium-photo/tomato-with-water-drops-it_590796-238.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated',
    price: 1.49,
    discount: 50,
  },
  {
    id: 6,
    name: 'Broccoli',
    image: 'https://img.freepik.com/premium-photo/fresh-broccolis-isolated-white-background_861799-1628.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated',
    price: 1.89,
    discount: 50,
  },
  {
    id: 7,
    name: 'Carrots',
    image: 'https://img.freepik.com/premium-photo/fresh-carrots-isolated-white-background_629685-2750.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated',
    price: 0.79,
    discount: 50,
  },
  {
    id: 8,
    name: 'Fruit Juice',
    image: 'https://img.freepik.com/premium-photo/fruit-juices-assortment-isolated-white-background-generative-ai_123447-16924.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated',
    price: 3.99,
    discount: 50,
  },
];
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#F3F4F6',
    padding: '24px 0',
  },
  discountTitle: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '16px',
    marginBottom: '16px',
  },
  flagDiscount: {
    backgroundColor: 'red',
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 'auto',
    marginTop: '12px',
    marginBottom: '12px',
    padding: '0',
    width: '30%',
    clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 10% 50%, 0% 0%)',
    transform: 'skewY(-0deg)',
    [theme.breakpoints.up('md')]: {
      width: '15%', // Adjust the flag's width for larger screens
    },
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)', // Set one column for smaller screens
    gap: '24px',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)', // Set two columns for small screens and above
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)', // Set four columns for medium screens and above
    },
  },
  card: {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  cardMedia: {
    height: '200px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)', // Adjust the scaling factor as needed
    },
  },
  cardContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  productName: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: '18px',
    marginBottom: '16px',
    textAlign: 'center',
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionButton: {
    borderRadius: '4px',
    padding: '8px 16px',
    fontWeight: 'bold',
  },
  addToCartButton: {
    margin: '8px',
    backgroundColor: '#4CAF50',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#2563EB',
    },
  },
  wishlistButton: {
    margin: '8px',
    backgroundColor: '#F59E0B',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#D97706',
    },
  },
  viewMoreButton: {
    margin: '8px',
    backgroundColor: '#4B5563',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#374151',
    },
  },
}));

const FeaturedProducts = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className="container mx-auto">
        {/* 30% Discount Section */}
        <div className="mb-12">
          <div className={classes.flagDiscount}>
            <h2 className={classes.discountTitle}>30% Discount</h2>
          </div>
          <div className={classes.gridContainer}>
            {products
              .filter((product) => product.discount === 30)
              .map((product) => (
                <Card key={product.id} className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.productName}>{product.name}</Typography>
                    <Typography className={classes.productPrice}>€{product.price.toFixed(2)}</Typography>
                    <div className={classes.actionButtons}>
                      <Button
                        variant="contained"
                        className={`${classes.actionButton} ${classes.addToCartButton}`}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="contained"
                        className={`${classes.actionButton} ${classes.wishlistButton}`}
                      >
                        Wishlist
                      </Button>
                      <Button
                        variant="contained"
                        className={`${classes.actionButton} ${classes.viewMoreButton}`}
                      >
                        View More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* 50% Discount Section */}
        <div>
          <div className={classes.flagDiscount}>
            <h2 className={classes.discountTitle}>50% Discount</h2>
          </div>
          <div className={classes.gridContainer}>
            {products
              .filter((product) => product.discount === 50)
              .map((product) => (
                <Card key={product.id} className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.productName}>{product.name}</Typography>
                    <Typography className={classes.productPrice}>€{product.price.toFixed(2)}</Typography>
                    <div className={classes.actionButtons}>
                      <Button
                        variant="contained"
                        className={`${classes.actionButton} ${classes.addToCartButton}`}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="contained"
                        className={`${classes.actionButton} ${classes.wishlistButton}`}
                      >
                        Wishlist
                      </Button>
                      <Button
                        variant="contained"
                        className={`${classes.actionButton} ${classes.viewMoreButton}`}
                      >
                        View More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;