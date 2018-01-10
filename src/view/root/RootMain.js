import React from 'react'
import { withRoute } from 'react-router5'
import {NotFound} from '../notFound'
import {Home} from '../home'
import {PetsMain} from '../pets'

function RootMain(props){
  const { route } = props
  if(route){
    const routeName = route.name.split('.')[0]
    if(routeName === ''){
      return ''
    }else if(routeName === 'home'){
      return <Home />
    }else if(routeName === 'pets'){
      return <PetsMain />
    }
  }else {
    return <NotFound />
  }
}

export default withRoute(RootMain);
