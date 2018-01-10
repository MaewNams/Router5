import React from 'react'
import { withRoute } from 'react-router5'
import {NotFound} from '../../../notFound'
import Cat from './Cat'
import {Samsee} from './samsee'
import {Praco} from './pracoco'


function CatMain(props){
  const { route } = props
  console.log('route.name', route.name)
  if(route){
    if(route.name === 'pets.legs.cat'){
      return <Cat />
    }
    const routeName = route.name.split('.')[3]
    if(routeName === 'samsee'){
      return <Samsee />
    }
    if(routeName === 'praco'){
      return <Praco />
    }
  else {
    return <NotFound />
  }
}
}

export default withRoute(CatMain);
