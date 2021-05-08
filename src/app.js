import * as React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
    onToken = (token) => {
      fetch('/save-stripe-token', {
        method: 'POST',
        body: JSON.stringify(token),
      }).then(response => {
        response.json().then(data => {
          alert(`We are in business, ${data.email}`);
        });
      });
    }
}

const App  = () => {
    return(
        <StripeCheckout 
            token={this.onToken}
            stripeKey='pk_test_51IexqXEi1Zp5FPtuuyn808cPjyqahIaTxoidZLaIKkTDyagZKdhRQq0WYJkPUUzfibiLsVNwnqcGpOzo4IcLb74u0062FlK49x'>
        </StripeCheckout>
    );
};

export default App;