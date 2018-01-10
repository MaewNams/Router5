import React from 'react'
import { withRoute } from 'react-router5'

import Fish from './Fish'
import {NotFound} from '../../../notFound'
import {Antonio} from './antonio'

function FishMain(props){
  const { route } = props
  if(route){
    if(route.name === 'pets.noleg.fish'){
      return <Fish />
    }
    const routeName = route.name.split('.')[3]
    if(routeName === 'antonio'){
      return <Antonio />
    }
  }else {
    return <NotFound />
  }
}

export default withRoute(FishMain);
