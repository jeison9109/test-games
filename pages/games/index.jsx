import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_MATCH } from '../../graphql/games/queries';
import Card from '../../components/ui/Card';
import { toast } from 'react-toastify';
import Loading from '../../components/ui/Loading';
import Head from 'next/head';



const GamesCurrent = () => {

  // Query para obtener los Matches de la db
  const { loading, error, data } = useQuery(GET_MATCH);

  useEffect(() => {
    if (error) {
      toast.error("Error consulting the matches", error)
    }
  }, [error])

  if (loading) return (
    <div><Loading /></div>
  )

  console.log("Games", data)
  return (
    <>
    <div>
      <Head>
        <title>List Games | JustPlay</title>
      </Head>
    </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-18 lg:px-18 xs:px-18">
        <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
          <Card data={data} loading={loading} error={error} />
        </div>
      </div>
    </>

  )
}

export default GamesCurrent