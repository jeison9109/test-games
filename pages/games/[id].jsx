import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import Input from '../../components/ui/Input';
import Image from 'next/image';
import logoEdit from '../../public/LogoEdit.jpg'
import ButtonLoading from '../../components/ui/ButtonLoading';
import useFormData from '../../hooks/useFormData';
import { useQuery, useMutation } from '@apollo/client'
import { GET_MATCH } from '../../graphql/games/queries';
import { EDIT_MATCH } from '../../graphql/games/mutations'

const EditMatch = () => {
    
    const {form,formData,updateFormData} = useFormData(null);
    const router = useRouter();
    const { id } = router.query;
    console.log('router', router);
    const {data:dataQuery, loading, error } = useQuery(GET_MATCH,
        {
            variables:{id},
        });
    
    const [EditMatch,{data:dataMutation, loading:loadingMutation, error: errorMutation}] = useMutation(EDIT_MATCH)

    // console.log('EdiData',dataMutation.matches[0].address);


    const submitForm =(e)=>{
        e.preventDefault();
        console.log('fd',formData);
        const { gameSite, address, dateAndTime, maxPlayers, currentPlayers, price, commentHost } = formData;
        console.log('Valor de dateAndTime:', dateAndTime);

        EditMatch({
            variables: {
              data: {
                gameSite:{ set: gameSite },
                address: { set: address },
                dateAndTime: { set: dateAndTime  },
                maxPlayers: { set: parseInt(maxPlayers) },
                currentPlayers: { set: parseInt(currentPlayers) }, 
                price: { set: price },
                commentHost:{set: commentHost}
              },
              where: {
                id: dataQuery.matches[0].id,
              },
            },
          });
    }


    useEffect(() =>{
        console.log('Mutation Data:',dataMutation)
    },[dataMutation])


    console.log('EdiData',dataQuery)
    return (
        <>
            <div className='flew flex-col w-full h-full items-center justify-center p-10'>
                <div className="flex  justify-center">
                    <Image height={60} width={60} src={logoEdit} alt="Your Company" />
                </div>
                <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Edit Match</h1>
                <form
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                    className='flex flex-col items-center justify-center'
                >
                    <Input
                        label="Game Site"
                        type="text"
                        name="gameSite"
                        defaultValue={dataQuery.matches[0].gameSite}
                        required={true} />

                    <Input
                        label="Address"
                        type="text"
                        name="address"
                        defaultValue={dataQuery.matches[0].address}
                        required={true} />

                    <Input
                        label="Date And Time"
                        type="datetime-local"
                        name="dateAndTime"
                        // value={formattedDateAndTime}
                        defaultValue={dataQuery.matches[0].dateAndTime}
                        required={true} />

                    <Input
                        label="MaxPlayers"
                        type="text"
                        name="maxPlayers"
                        defaultValue={dataQuery.matches[0].maxPlayers}
                        required={true} />

                    <Input
                        label="Current Players"
                        type="text"
                        name="currentPlayers"
                        defaultValue={dataQuery.matches[0].currentPlayers}
                        required={true} />

                    <Input
                        label="Price"
                        type="text"
                        name="price"
                        defaultValue={dataQuery.matches[0].price}
                        required={true} />

                    <Input
                        label="Comment Host"
                        type="text"
                        name="commentHost"
                        defaultValue={dataQuery.matches[0].commentHost}
                        required={true} />
                    <ButtonLoading
                        disabled={false}
                        loading={false}
                        text="Confirm" />
                </form>
            </div>
        </>
    )
}

export default EditMatch;