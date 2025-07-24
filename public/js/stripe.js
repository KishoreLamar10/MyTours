/* eslint-disable */
import { showAlert } from './alerts.js';

export const bookTour = async (tourId) => {
  try {
    const bookBtn = document.getElementById('book-tour');
    // 1) Get the publishable key from the button's data attribute
    const publishableKey = bookBtn.dataset.key;
    const stripe = Stripe(publishableKey);

    // 2) Get checkout session from the API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 3) Create checkout form + redirect to checkout
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err.response.data.message);
  }
};
