import React from 'react';
import { Link } from 'react-router-dom';
import AvatarLink from './AvatarLink';
import HomepageLink from './HomepageLink';

/**
 * SFC (Stateless Functional Component) for "About" page.
 */
const AboutPage = () => {
  return(
    <div className='about-container'>

      <div className='about-header'>
        <h2>About this Application</h2>
        <p className='subheader'>The coziest corner in Novia.</p>
      </div>

      <div className='about-body'>

        <div className='about-text'>
          <p>
            This application exists to facilitate the members of the wider area around Storm's Reach with the means to
            find Avatars in the local marketplace. This site is not meant to facilitate communication between Avatars,
            which is encouraged in-game. If you're asking, "what game?!" then head on over to the <a
              href='https://www.shroudoftheavatar.com/'>Shroud of the Avatar website</a> and dive in.
          </p>
          <p>
            This application is heavily under construction. If youre eager to see new features released, then by all
            means, <Link to='donate' className='highlight-text'>support the site</Link>. 100% of proceeds go to site
            dev, hosting costs, and mitigating wifey aggro.
          </p>
          <h3>Search for Goods and Services</h3>
          <p>
            Use the <Link to='crafting'>Crafting</Link> portal to locate Avatars with the production or refining skills
            you need. Head to the <Link to='housing'>Housing</Link> section to see what rentals are available. See
            where vendors are located, who has apartments or farm plots for rent, and where the most popular local
            taverns are. Let the community know what youre looking for.
          </p>
          <h3>Sell your Wares</h3>
          <p>
            Got a stockpile of resources to sell? A basement for rent? A GM Craft training event in the works? Maybe
            you just want to find a group of adventurers to protect you while you mine the rarest ores? Use this
            application to connect to the Avatars in our area. May our local marketplace thrive!
          </p>
          <h3>Get Involved</h3>
          <p>
            To get involved, contact <AvatarLink id={1} /> on the SotA forums, SotA Discord channel, or in-game! All
            Avatars joining the site must be members of the wider area around Storm's Reach, including Aerie, Elysium,
            Etceter, and South Paladis.
          </p>
        </div>

      </div>

      <HomepageLink />

    </div>
  );
}

export default AboutPage;
