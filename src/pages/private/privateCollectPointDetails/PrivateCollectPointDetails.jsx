import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Spinner from '../../../components/spinner/Spinner';
import { getCollectPoint } from '../../../features/collectPoint/collectPointSlice';
import CollectItem from '../../../components/CollectItem';
import QRCode from "qrcode.react";

function PrivateCollectPointDetails() {
    const { collectPoint, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.collectPoint
      );
      const params = useParams();
      const dispatch = useDispatch();
    
      useEffect(() => {
        if (isError) {
          toast.error(message);
        }
        dispatch(getCollectPoint(params.id));
        // eslint-disable-next-line
      }, [isError, message, params.id]);
    
    console.log(collectPoint);

  
    
  if (!collectPoint.data || isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h3>Une erreur est survenue merci de réesayer.</h3>;
  }
  return (
 
    <main className='container'>
          <h1>détails du point de collecte</h1>
          <span>
            
            </span>
            <div className="ticket-page">
        <header className="ticket-header">
          <h2>
            Client : {collectPoint.data.partnerName} <br />
            Date de création :{" "}
            {new Date(collectPoint.data.createdAt).toLocaleDateString()}
            <span>
              <div>
                <QRCode
                   value={process.env.REACT_APP_BASE_FRONT_URL + `/demande-collecte/${params.id}`}
                />
              </div>
            </span>
          </h2>
          <h2>Total déchet collecté : <span>{collectPoint.data.totalRecycled} KG</span></h2>
          <hr />

          {/* <h2>
         status :
          <span className={`status collect-${collect.data.status}`}>
            {collect.data.status}
          </span>
        </h2> */}

          <hr />
          <div className="ticket-desc">
            <h3>Remarque: </h3>
            <p>{collectPoint.data.description}</p>
          </div>
          <div className="ticket-desc">
            <h3>Adresse: </h3>
            <p>{collectPoint.data.location.formattedAddress}</p>
          </div>
        </header>
          </div>
          <section>
          <h3 className="title">Historique des collectes</h3>
          <div className="ticket-headings">
            <div>date demande</div>
            <div >Date collecte</div>
            <div>quantité collecté</div>
            <div >Status</div>
        </div>
          {collectPoint.data.collects
            .filter((collect) => collect.status === "done")
            .map((collect) => (
              <CollectItem key={collect.id} collect={collect} />
            ))}
        </section>
    </main>
  )
}

export default PrivateCollectPointDetails