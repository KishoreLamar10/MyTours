/* eslint-disable */
import { showAlert } from './alerts.js';
const stripe = Stripe(
  'pk_test_51RlltFP6Ffw347BpnIwdkuandpbVmyLqmnbA9gGffelADKAfh86sjzUokfrC5yybWdsQ4YI1QNQURtwa2t4wdZyA00yDJMQtqQ',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log('SESSION RESPONSE FROM SERVER:', session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
