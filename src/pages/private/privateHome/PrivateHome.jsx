import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/spinner/Spinner';
import { getProfil, reset } from '../../../features/user/userSlice';


function PrivateHome() {

    const { profil, isLoading, isError, isSuccess } = useSelector(
        (state) => state.user
      );
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getProfil());
      }, []);
    
      console.log(profil.data);
      useEffect(() => {
        return () => {
          if (isSuccess) {
            dispatch(reset());
          }
        };
      }, [dispatch, isSuccess, isError]);
    
     
    
      if (!profil.data || isLoading) {
        return <Spinner />;
      }
  return (

    <main className="container">
    <section className='heading'>
        
        <h1>Bienvenue sur votre profil {profil.data.username}</h1>
    </section>
    <Link className='btn btn-block' to={'/private/mes-points-de-collectes'}>Mes points de collectes</Link>
    <Link className='btn btn-block' to={'/private/rapport'}>Rapport</Link>
    <Link className='btn btn-block' to={'/private/parametre'}>Parametrer mon profil</Link>
    </main>
  )
}

export default PrivateHome