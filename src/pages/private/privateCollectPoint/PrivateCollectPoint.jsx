import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Ticket from "../../../components/shared/ticket/Ticket";
import Spinner from "../../../components/spinner/Spinner";
import { getCollectPoints } from "../../../features/collectPoint/collectPointSlice";
import { getProfil } from "../../../features/user/userSlice";
import QRCode from "qrcode.react";
import { getWastes } from "../../../features/waste/wasteSlice";

function PrivateCollectPoint() {
  const { profil } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProfil());
  }, []);

  console.log(profil.data);
  const { collectPoints, isLoading, isSuccess, isError } = useSelector(
    (state) => state.collectPoint
  );
  const { wastes } = useSelector(
    (state) => state.waste
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectPoints());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getWastes());
  }, [dispatch]);
console.log(wastes);
  console.log(collectPoints);

  if (isLoading || !collectPoints.data || !profil.data || !wastes.data) {
    return <Spinner />;
  }

  return (
    <main className="container">
      <section className="headings">
        <h1>Mes points de collecte</h1>
        <p>Liste de vos points de collectes si vous souhaiter ajouter un nouveau point de collecte. Merci de nous contacter</p>
      </section>
      <div className="ticket-headings">
        <div>QR code</div>
        <div>Déchets</div>
        <div>Total recyclée</div>
      </div>
      <div>
        {collectPoints.data
          .filter((collectPoint) => collectPoint.user.id === profil.data.id)
          .map((collectPoint) => (
            <Ticket key={collectPoint._id}>
               <div>
                <QRCode
                   value={process.env.REACT_APP_BASE_FRONT_URL + `/demande-collecte/${collectPoint._id}`}
                />
              </div>
              {wastes.data.filter((wast) => wast._id ===  collectPoint.waste)
          .map((wast) => (
            
            <div>{wast.wasteCategory}</div>
          ))}
               <div>{collectPoint.totalRecycled}</div>
                  
          
                <Link className="btn btn-back btn-sm btn-danger" to={`/private/details-point-de-collecte/${collectPoint._id}`}> Détails</Link>
            </Ticket>
            
          ))}
      </div>
    </main>
  );
}

export default PrivateCollectPoint;
