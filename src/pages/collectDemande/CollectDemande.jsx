import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner/Spinner";
import {
  createNewCollect,
  getCollectPoint,
} from "../../features/collectPoint/collectPointSlice";

function CollectDemande() {
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
  const newCollect = () => {
    const verifyIfCollect = collectPoint.data.collects.filter(
      (collect) => collect.status === "todo"
    );
    console.log(verifyIfCollect);
    if (verifyIfCollect.length > 0) {
      toast.error("une collecte à déja ete demander");
    } else {
      dispatch(createNewCollect(params.id));
      toast.success("La demande de collecte a bien ete effectuer");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  if (!collectPoint.data || isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h3>Une erreur est survenue merci de réesayer.</h3>;
  }
  return (
    <main className="container">
      <section className="headings">
           <h1>identifiant du point de collecte :{collectPoint.data.id}</h1>
        <p>Demander une collecte pour le point de collecte n° {collectPoint.data.id}</p>
      </section>
      {collectPoint.data.collects
        .filter((collect) => collect.status === "todo")
        .map((collect) => (
          <>
            <h2>Une collecte est déja en cours...</h2>
          </>
        ))}

        <section>
            <h2> partnaire : <span>{collectPoint.data.partnerName}</span></h2>
            <h2> description du point de collecte : <span>{collectPoint.data.description}</span></h2>
        </section>

      <button onClick={newCollect} className="btn btn-block btn-danger">
        Demander une collecte
      </button>
    </main>
  );
}

export default CollectDemande;
