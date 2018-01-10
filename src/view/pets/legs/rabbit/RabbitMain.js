import React from 'react'
import { withRoute } from 'react-router5'
import {NotFound} from '../../../notFound'
import Rabbit from './Rabbit'
import {Yenrudee} from './yenrudee'
import {Luangsug} from './luangsug'


function RabbitMain(props){
  const { route } = props
  if(route.name === 'pets.legs.rabbit'){
    return <Rabbit />
  }
    const routeName = route.name.split('.')[3]
    if(routeName === 'luangsug'){
      return <Luangsug />
    }
    if(routeName === 'yenrudee'){
      return <Yenrudee />
    }
  else {
    return <NotFound />
  }
}

export default withRoute(RabbitMain);
