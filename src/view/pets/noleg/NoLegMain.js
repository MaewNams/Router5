import React from 'react'
import { withRoute } from 'react-router5'

import NoLeg from './NoLeg'
import {FishMain} from './fish'
import {NotFound} from '../../notFound'

function NoLegMain(props){
  const { route } = props
  if(route){
    if(route.name === 'pets.noleg'){
      return <NoLeg />
    }
    const routeName = route.name.split('.')[2]
    if(routeName === 'fish'){
      return <FishMain />
    }
  }else {
    return <NotFound />
  }

}


export default withRoute(NoLegMain);
