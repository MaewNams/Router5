import React from 'react'
import { withRoute } from 'react-router5'
import {NotFound} from '../../../notFound'
import Hamster from './Hamster'
import {Nok} from './nok'
import {Nu} from './nu'


function HamsterMain(props){
  const { route } = props
  if(route.name === 'pets.legs.hamster'){
    return <Hamster />
  }
    const routeName = route.name.split('.')[3]
    if(routeName === 'nok'){
      return <Nok />
    }
    if(routeName === 'nu'){
      return <Nu />
    }
  else {
    return <NotFound />
  }
}

export default withRoute(HamsterMain);
