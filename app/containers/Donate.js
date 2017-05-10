import React from 'react';
import { BITCOIN_ADDRESS } from '../constants/services.js';

/**
 * SFC for displaying PayPal button.
 */
const PayPalButton = () => {
  return(
    <form action={'https://www.paypal.com/cgi-bin/webscr'} method={'post'} target={'_top'}>
      <input type={'hidden'} name={'cmd'} value={'_s-xclick'} />
      <input type={'hidden'} name={'hosted_button_id'} value={'XZGMVB3PVU5YU'} />
      <table>
        <tr>
          <td>
            <input type={'hidden'} name={'on0'} value={'Donation Suggestions'} />
            Donation Suggestions
          </td>
        </tr>
        <tr>
          <td>
            <select name={'os0'}>
    	        <option value={'You Rock!'}>You Rock! $25.00 USD</option>
    	        <option value={'Large'}>Large $10.00 USD</option>
    	        <option value={'Medium'}>Medium $5.00 USD</option>
    	        <option value={'Small'}>Small $1.00 USD</option>
            </select>
          </td>
        </tr>
      </table>
      <input type={'hidden'} name={'currency_code'} value={'USD'} />
      <input
        type={'image'}
        src={'https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif'}
        border={'0'}
        name={'submit'}
        alt={'PayPal - The safer, easier way to pay online!'}
      />
      <img alt={''} border={'0'} src={'https://www.paypalobjects.com/en_US/i/scr/pixel.gif'} width={'1'} height={'1'} />
    </form>
  );
};

/**
 * SFC for displaying Bitcoin wallet QR code and ID.
 */
const BitcoinQRAddress = () => {
  return(
    <div className='bitcoin-qr-address'>
      <p>
        <img
          src={'http://res.cloudinary.com/stormsreach/image/upload/c_scale,w_385/v1494097644/bitcoinQR_tb3pmj.jpg'}
          title={'Bitcoin QR Code Image'}
          alt={BITCOIN_ADDRESS}
        />
      </p>
      <div className='donate-wallet-info'>
        <span>
          Alternatively, send Bitcoin to the following <a href={'https://mycelium.com/'} target={'_blank'}>Mycelium</a> wallet:
        </span>
        <span>
          <strong>{BITCOIN_ADDRESS}</strong>
        </span>
      </div>
    </div>
  );
};

/**
 * Higher Order Container Component for the 'crafting' page.
 */
export class Donate extends React.Component {

  render() {
    return(
      <div className='donate-container'>

        <div className='donate-header'>
          <h2>Support Storm's Reach!</h2>
          <p>
            Donations help fund hosting, feature development, bug fixing, and data entry for stormsreach.com.
          </p>
        </div>

        <div className='donate-types'>

          <div className='donate-type-bitcoin'>
            <h3>Bitcoin</h3>
            <p>
              Use the following QR code to donate Bitcoin:
            </p>
            <BitcoinQRAddress />
          </div>

          <div className='donate-type-paypal'>
            <h3>Paypal</h3>
            <div>
              <PayPalButton />
            </div>
          </div>

        </div>

      </div>
    );
  }

}

export default Donate;
