import React from 'react'
import { withRoute } from 'react-router5'

import Pets from './Pets'
import {LegsMain} from './legs'
import {NoLegMain} from './noleg'
import {NotFound} from '../notFound'


function PetsMain(props){
  const { route } = props
    console.log('route.name', route.name)
  if(route){
    const routeName = route.name.split('.')[1]
    if(route.name === 'pets'){
      return <Pets />
    }
    if(routeName === 'legs'){
      return <LegsMain />
    }else if(routeName === 'noleg'){
      return <NoLegMain />
    }
  }else {
    return <NotFound />
  }
}

export default withRoute(PetsMain);
