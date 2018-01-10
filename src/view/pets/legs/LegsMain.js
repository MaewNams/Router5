import React from 'react'
import { withRoute } from 'react-router5'
import {NotFound} from '../../notFound'
import Legs from './Legs'
import {CatMain} from './cat'
import {HamsterMain} from './hamster'
import {RabbitMain} from './rabbit'

function LegsMain(props){
  const { route } = props
  //console.log('route.name', route.name)
  if(route){
    if(route.name === 'pets.legs'){
      return <Legs />
    }
    const routeName = route.name.split('.')[2]
    if(routeName === 'cat'){
      return <CatMain />
    }
    if(routeName === 'hamster'){
      return <HamsterMain />
    }
    if(routeName === 'rabbit'){
      return <RabbitMain />
    }
  else {
    return <NotFound />
  }
}
}

export default withRoute(LegsMain);
