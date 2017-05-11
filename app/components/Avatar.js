import React from 'react';

/**
 * Component for displaying a member of the site.
 */
export class Avatar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      image: props.image,
      home: props.home,
      shop: props.shop,
      abilities: props.abilities
    };
  }

  render() {
    let imageAttr    = `${this.state.name} Image`;
    let abilityItems = '';
    if(this.state.abilities.length > 0) {
      abilityItems = this.state.abilities.map((ability, idx) =>
        <li key={idx} className='avatar-ability'><strong>{ability}</strong></li>
      );
    }

    return(
      <div className='avatar'>
        <div className='avatar-info'>
          <ul className='avatar-info-list'>
            <li>Name: <strong>{this.state.name}</strong></li>
            <li>Home Town: <strong>{this.state.home}</strong></li>
            <li>Shop: <strong>{this.state.shop}</strong></li>
            <li>
              <span>Services:</span>
              <ul className='avatar-services-list'>
                {abilityItems}
              </ul>
            </li>
          </ul>
        </div>
        <div className='avatar-image'>
          <img
            src={this.state.image}
            alt={imageAttr}
            title={imageAttr}
          />
        </div>
      </div>
    );
  }

}

export default Avatar;
