import React, { useEffect } from 'react'
import Image from "next/image";
import logo from '../../public/logoJustPlay.png';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import { useMutation } from '@apollo/client'
import { DELETE_MATCH } from '../../graphql/games/mutations'
import { toast } from 'react-toastify';

const Card = ({ data, loading, error }) => {
  const [deleteMatch, { data: dataMutation, loading: loadingMutation, error: errorMutation }] = useMutation(DELETE_MATCH)

  const handleDelete = (matchId) => {

    deleteMatch({
      variables: {
        where: {
          id: matchId,
        },
      },

    });
  }

  useEffect(() => {
    if (dataMutation) {
      toast.success("Match successfully eliminated")
    }
  }, [dataMutation])

  useEffect(() => {
    if (errorMutation) {
      toast.error("Error eliminating match")
    }
  }, [errorMutation])

  if (loading) return <div>...Cargando</div>
  return (
    <>
      {data &&
        data.matches.map((m) => (
          <div key={m.id} className="flex items-center h-full w-full justify-center">
            {console.log(m.id)}
            <div className="max-w-xs">
              <div className="bg-white shadow-xl rounded-lg py-3">
                <div className="photo-wrapper p-2">
                  <Image className="w-32 h-32 rounded-full mx-auto" src={logo} alt="John Doe" />
                </div>
                <div className="p-2">
                  <h3 className="text-center text-xl text-gray-900 font-medium leading-8">John Doe</h3>
                  <div className="text-center text-gray-400 text-xs font-semibold">
                    <p>{m.gameSite}</p>
                  </div>
                  <table className="text-xs my-3">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                        <td className="px-2 py-2">{m.address}</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">StatePlay</td>
                        <td className="px-2 py-2">{m.statePlay}</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Date</td>
                        <td className="px-2 py-2">{m.dateAndTime}</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Max Players</td>
                        <td className="px-2 py-2">{m.maxPlayers}</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Current Players</td>
                        <td className="px-2 py-2">{m.currentPlayers}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex justify-center my-3">
                    <div className="text-center mx-2">
                      {console.log('data', m.id)}
                      <Link href="/games/[id]" as={`/games/${m.id}`} passHref className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">
                        <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer ' data-tooltip-id='edit' data-tooltip-content="Edit Match">
                          <Tooltip id="edit" />
                        </i>
                      </Link>
                    </div>

                    <div className="text-center mx-2">
                      {console.log('data', m.id)}
                      <Link href="/games/create" className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">
                        <i className='fa-solid fa-plus text-green-600 hover:text-green-400 cursor-pointer ' data-tooltip-id='create' data-tooltip-content="Create Match">
                          <Tooltip id="create" />
                        </i>
                      </Link>
                    </div>

                    <div className="text-center mx-2">
                      <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                        onClick={() => handleDelete(m.id)}>
                        <i className='fa-solid fa-trash text-red-700 hover:text-red-400 cursor-pointer ' data-tooltip-id='delete' data-tooltip-content="Create Match">
                          <Tooltip id="delete" />
                        </i>
                      </a>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Card;