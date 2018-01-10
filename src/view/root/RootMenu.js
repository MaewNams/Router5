import React from 'react'
import { Link } from 'react-router5'

class RootMenu extends React.Component {
  render() {
    return (
      <ul>
            <li><Link routeName='home'>Home</Link><br /></li>
            <li><Link routeName='pets'>Pets</Link><br />
              <ul>
              <li><Link routeName='pets.legs'>4 Legs</Link><br /></li>
              <ul>
              <li><Link routeName='pets.legs.cat'>Cat</Link><br /></li>
                  <ul>
                    <li><Link routeName='pets.legs.cat.samsee'>Samsee</Link><br /></li>
                    <li><Link routeName='pets.legs.cat.praco'>Praco</Link><br /></li>
                  </ul>
              <li><Link routeName='pets.legs.rabbit'>Rabbit</Link><br /></li>
                  <ul>
                    <li><Link routeName='pets.legs.rabbit.luangsug'>Luangsug</Link><br /></li>
                    <li><Link routeName='pets.legs.rabbit.yenrudee'>Yenrudee</Link><br /></li>
                    </ul>
              <li><Link routeName='pets.legs.hamster'>Hamster</Link><br /></li>
                  <ul>
                    <li><Link routeName='pets.legs.hamster.nu'>Nu</Link><br /></li>
                    <li><Link routeName='pets.legs.hamster.nok'>Nok</Link><br /></li>
                  </ul>
              </ul>
              <li><Link routeName='pets.noleg'>No Leg</Link>
                <ul>
                <li><Link routeName='pets.noleg.fish'>Fish</Link><br /></li>
                  <ul>
                    <li><Link routeName='pets.noleg.fish.antonio'>Antonio</Link><br /></li>
                  </ul>
                </ul>
              </li>
              </ul>
            </li>
          </ul>
    );
}
}

export default RootMenu;
