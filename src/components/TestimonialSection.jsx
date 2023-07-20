import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { animated, useSpring, config } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8),
    backgroundColor: '#F2F2F2',
  },
  testimonial: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 15,
    minWidth: 400,
    maxWidth: 400,
    margin: '10px auto',
    backgroundColor: '#e8e8e8',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3],
  },
  userImg: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    width: 100,
    height: 100,
    borderRadius: '50%',
    backgroundSize: 'cover',
  },
  quote: {
    fontSize: '2rem',
    color: '#2a9235',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    color: '#333333',
  },
  position: {
    color: '#5c5c5c',
  },
}));

const TestimonialSection = () => {
  const classes = useStyles();

  const fadeInAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
  });

  const testimonials = [
    {
      id: 1,
      userImg: 'https://img.freepik.com/premium-photo/woman-lab-coat-looks-through-microscope_890746-456.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated',
      quote: "VeganFoods opened my eyes to a world of delicious plant-based options.",
      name: 'Sophia Williams',
      position: 'Biomedical Scientist',
    },
    {
      id: 2,
      userImg: 'https://img.freepik.com/premium-photo/cropped-shot-handsome-young-scientist-working-his-lab-created-with-generative-ai_762026-1798.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated',
      quote: 'Thanks to VeganFoods, I feel energized and fueled for my workouts.',
      name: 'Gabriel Johnson',
      position: 'Biomedical Scientist',
    },
    {
      id: 3,
      userImg: 'https://img.freepik.com/free-photo/young-adult-businesswoman-smiling-camera-indoors-generated-by-ai_188544-32954.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated',
      quote: "VeganFoods is a dream come true for vegans like me.",
      name: 'Isabella Anderson',
      position: 'Geriatric Occupational Therapist',
    },
    {
      id: 4,
      userImg: 'https://img.freepik.com/premium-photo/woman-green-blazer-stands-store_160117-472.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated',
      quote: "Who knew vegan food could be this tasty? Thanks, VeganFoods!",
      name: 'Lauren Smith',
      position: 'Hospital Pharmacist',
    },
    {
      id: 5,
      userImg: 'https://img.freepik.com/free-photo/woman-wearing-glasses-stands-busy-office-with-blurred-background_188544-33150.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated',
      quote: "With VeganFoods, I can enjoy guilt-free and environmentally-friendly meals.",
      position: 'Clinical Psychologist',
    },
    {
      id: 6,
      userImg: 'https://img.freepik.com/free-photo/confident-young-surgeon-examining-medical-x-ray-scan-generated-by-ai_188544-16354.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated',
      quote: "VeganFoods proves that vegan cuisine can be both flavorful and satisfying.",
      name: 'Peter Witter',
      position: 'Respiratory Therapist',
    },
    {
      id: 7,
      userImg: 'https://img.freepik.com/free-photo/woman-running-with-glasses-shirt-that-says-i-m-girl_188544-34623.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated',
      quote: "VeganFoods makes it easy to eat healthy, even with a busy lifestyle.",
      name: 'Laura Martinez',
      position: 'Sports Nutritionist',
    },
    {
      id: 8,
      userImg: 'https://img.freepik.com/free-photo/professional-surgeons-ppe-perform-medical-procedure-generated-by-ai_188544-29148.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated',
      quote: "No more missing out on delicious food – VeganFoods has it all.",
      name: 'Bruno Robinson',
      position: 'Obstetric Nurse',
    },
    {
      id: 9,
      userImg: 'https://img.freepik.com/premium-photo/man-scrubs-scrubs-smiles-camera_909109-97.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated',
      quote: "VeganFoods has become my go-to choice for convenient and wholesome meals.",
      name: ' Jhon Turner',
      position: 'Surgeon',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={classes.container}>
      <animated.div style={fadeInAnimation}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className={classes.testimonial}>
                    <div className={classes.userImg} style={{ backgroundImage: `url(${testimonial.userImg})` }} />
                    <Typography className={classes.quote}>{testimonial.quote}</Typography>
                    <Typography className={classes.name}>{testimonial.name}</Typography>
                    <Typography className={classes.position}>{testimonial.position}</Typography>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default TestimonialSection;
