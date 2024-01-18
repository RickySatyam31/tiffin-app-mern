import React from 'react';
import { Container, Grid, Typography, Button, Paper } from '@mui/material';
import '../Styles/MealPlanCard.css';
import TrialRequestModal from './TrialRequestModal';

export default function MealPlanCard(props) {
  const pricingPlans = [
    {
      title: 'Junior Plan',
      description: (
        <ul>
         <li> Enjoy 4 Butter Roti or Rice 8 oz.</li>
         <li>   Choose 1 Sabji or Daal 8 oz.  </li> 
         <li> Plus, get free delivery! </li>
        </ul>
      ),
      price: '159.99',
      buttonText: <TrialRequestModal />,
    },
    {
      title: 'Mid Plan (Popular)',
      description:  (
        <ul>
        <li>Enjoy 4 Butter Roti.</li>
        <li>1 Sabji 8 oz.</li>
        <li>Rice 8 oz.</li>
        <li>Dal 8 oz.</li>
        <li>Special Item Once A Week</li>
        <li>Plus, get free delivery!</li>
      </ul>
      ),
      price: '199.99',
      buttonText: <TrialRequestModal />,
      isMostPopular: true,
    },
    {
      title: 'Senior Plan',
      description:
      (
        <ul>
        <li>Enjoy 6 Butter Roti.</li>
        <li>1 Sabji 12 oz.</li>
        <li>Rice 8 oz.</li>
        <li>Dal 8 oz.</li>
        <li>Special Item Once A Week</li>
        <li>Plus, get free delivery!</li>
      </ul>
      ),
      price: '239.99',
      buttonText: <TrialRequestModal />,
    },
  ];

  return (
    <div className="pricing">
      <Container maxWidth="md">
        <Typography variant="h3" align="center" className="pricingHeader">
          Pricing Plan
        </Typography>
        <Grid container spacing={4}>
          {pricingPlans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.title}>
              <Paper elevation={3} className={`pricingCard ${plan.isMostPopular ? 'mostPopular' : ''}`}>
                <Typography variant="h5" align="center" className="pricingTitle">
                  {plan.title}
                </Typography>
                <Typography variant="subtitle1" align="center" className="pricingDescription">
                  {plan.description}
                </Typography>
                <Typography variant="h4" align="center" className="pricingPrice">
                  ${plan.price}/month
                </Typography>
                <Typography variant="contained" color="primary" className="pricingButton">
                  {plan.buttonText}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
