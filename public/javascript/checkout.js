const stripe = Stripe(process.env.VUE_APP_STRIPE_PK);
const elements = stripe.elements();
