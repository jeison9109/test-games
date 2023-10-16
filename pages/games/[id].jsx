import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Input from '../../components/ui/Input';
import Image from 'next/image';
import logoEdit from '../../public/LogoEdit.jpg'
import ButtonLoading from '../../components/ui/ButtonLoading';
import useFormData from '../../hooks/useFormData';
import { useQuery, useMutation } from '@apollo/client'
import { GET_MATCH } from '../../graphql/games/queries';
import { EDIT_MATCH } from '../../graphql/games/mutations'
import { toast } from 'react-toastify';
import Dropdown from '../../components/ui/Dropdown'
import { Enum_TypeGames, Enum_StatePlay } from '../../utils/enum';
import Link from 'next/link';
import dataColombia from '../../utils/dataColombia.json';
import Head from 'next/head';


// Ruta dinamic por Id
const EditMatch = () => {
    /// Utilizacion de formData para obtener los datos del form
    const { form, formData, updateFormData } = useFormData(null);
    const [departamentos, setDepartamentos] = useState([]);

    useEffect(() => {
        // Extraer la lista de departamentos del JSON
        setDepartamentos(dataColombia.map(item => item.departamento));
    }, []);

    const router = useRouter();
    const { id } = router.query;
    // console.log('id', id)
    // console.log('router', router);
    const { data: dataQuery, loading, error: errorQuery } = useQuery(GET_MATCH,
        {
            variables: { id },
        });

    // Mutacion para realizar el update del partido
    const [EditMatch, { data: dataMutation, loading: loadingMutation, error: errorMutation }] = useMutation(EDIT_MATCH)

    // console.log('EdiData', dataQuery.matches.address);

    //Obtener el objecto por el id
    const matchWithId = dataQuery?.matches ? dataQuery.matches.find(match => match.id === id) : null;


    const submitForm = (e) => {
        e.preventDefault();
        // console.log('fd', formData);
        const { gameSite, address, dateAndTime, maxPlayers, currentPlayers, price, commentHost, typeGames, statePlay, phone } = formData;
        // console.log('Valor de dateAndTime:', dateAndTime);

        EditMatch({
            variables: {
                data: {
                    gameSite: { set: gameSite },
                    address: { set: address },
                    dateAndTime: { set: dateAndTime },
                    maxPlayers: { set: parseInt(maxPlayers) },
                    currentPlayers: { set: parseInt(currentPlayers) },
                    price: { set: price },
                    commentHost: { set: commentHost },
                    typeGames: { set: typeGames },
                    statePlay: { set: statePlay },
                    phone: { set: phone },
                },
                where: {
                    id: matchWithId.id,
                },
            },
        });
    }

    const updateFormDataDepartamento = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado con el valor directo
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    // Toast de update exitoso
    useEffect(() => {
        console.log('Mutation Data:', dataMutation)
        if (dataMutation) {
            toast.success("Successfully modified match")
        }
    }, [dataMutation])

    // Toast de error en el Update
    useEffect(() => {
        if (errorMutation) {
            toast.error("Error modifying the match")
        }
    }, [errorMutation])


    // console.log('EdiData', dataQuery)

    return (
        <>
            <div>
                <Head>
                    <title>Edit Games | JustPlay</title>
                </Head>
            </div>

            <div className='flew flex-col w-full h-full items-center justify-center p-10'>
                <Link href="/games">
                    <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
                </Link>
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
                    <Dropdown
                        label="Ubicación"
                        name="gameSite"
                        required={true}
                        defaultValue={matchWithId?.gameSite}
                        options={departamentos}
                        onChange={updateFormDataDepartamento}
                    />

                    <Input
                        label="Address"
                        type="text"
                        name="address"
                        defaultValue={matchWithId?.address}
                        required={true} />

                    <Input
                        label="Phone"
                        type="text"
                        name="phone"
                        defaultValue={matchWithId?.phone}
                        required={true} />

                    <Input
                        label="Date And Time"
                        type="datetime"
                        name="dateAndTime"
                        // value={formattedDateAndTime}
                        defaultValue={matchWithId?.dateAndTime}
                        required={true} />

                    <Input
                        label="MaxPlayers"
                        type="text"
                        name="maxPlayers"
                        defaultValue={matchWithId?.maxPlayers}
                        required={true} />

                    <Input
                        label="Current Players"
                        type="text"
                        name="currentPlayers"
                        defaultValue={matchWithId?.currentPlayers}
                        required={true} />

                    <Input
                        label="Price"
                        type="text"
                        name="price"
                        defaultValue={matchWithId?.price}
                        required={true} />

                    <Dropdown
                        label="Tipo de juego"
                        name="typeGames"
                        defaultValue={matchWithId?.typeGames}
                        required={true}
                        options={Enum_TypeGames}
                    />
                    <Dropdown
                        label="Tipo de juego"
                        name="statePlay"
                        defaultValue={matchWithId?.statePlay}
                        required={true}
                        options={Enum_StatePlay}
                    />

                    <Input
                        label="Comment Host"
                        type="text"
                        name="commentHost"
                        defaultValue={matchWithId?.commentHost}
                        required={true} />

                    <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={loadingMutation}
                        text="Confirm" />
                </form>
            </div>
        </>
    )
}

export default EditMatch;