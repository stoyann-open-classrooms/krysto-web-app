import React from 'react'
import { Link } from 'react-router-dom'
import {IoEyeSharp} from 'react-icons/io5'
import Ticket from './shared/ticket/Ticket'
import Status from './shared/status/Status'

function CollectItem({collect}) {

  return (
    <Ticket>
        <div>{new Date(collect.collectDemandeDate).toLocaleDateString()}</div>
        <div>{new Date(collect.collectDate).toLocaleDateString()}</div>
         {collect.collectPoint.partnerName ? (<div>{collect.collectPoint.partnerName}</div>) : ("")}
         {collect.quantityCollected ? (<div>{collect.quantityCollected} KG</div>) : ("")}
         <Status text={collect.status} statusType={collect.status}/>
    </Ticket>
  )
}

export default CollectItem