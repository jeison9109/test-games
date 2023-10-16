import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import logoEdit from '../../public/LogoEdit.jpg'
import Dropdown from '../../components/ui/Dropdown'
import Input from '../../components/ui/Input';
import { Enum_TypeGames, Enum_StatePlay } from '../../utils/enum';
import Image from 'next/image';
import ButtonLoading from '../../components/ui/ButtonLoading';
import useFormData from '../../hooks/useFormData';
import { useMutation } from '@apollo/client'
import { CREATE_MATCH } from '../../graphql/games/mutations'
import { toast } from 'react-toastify';
import dataColombia from '../../utils/dataColombia.json';
import Head from 'next/head';

const CreateMatch = () => {

  const { form, formData, updateFormData } = useFormData(null);
  const [createMatch, { data, loading, error }] = useMutation(CREATE_MATCH);
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    // Extraer la lista de departamentos del JSON
    setDepartamentos(dataColombia.map(item => item.departamento));
  }, []);

  console.log("Ubicacion", departamentos);

  const submitForm = (e) => {
    e.preventDefault();
    console.log('fd', formData);

    // Data del formData para pasarla en la mutacion
    const { gameSite, address, dateAndTime, maxPlayers, currentPlayers, price, commentHost, typeGames, statePlay,phone } = formData;

    createMatch({
      variables: {
        data: {
          gameSite: gameSite,
          address: address,
          dateAndTime: dateAndTime,
          maxPlayers: parseInt(maxPlayers),
          currentPlayers: parseInt(currentPlayers),
          price: price,
          commentHost: commentHost,
          typeGames: typeGames,
          statePlay: statePlay,
          phone: phone,
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

  // Toast de create exitoso
  useEffect(() => {
    console.log('Mutation Data:', data)
    if (data) {
      toast.success("Match creado con exito")
    }
  }, [data])

  // Toast de error en el create de la mutacion
  useEffect(() => {
    if (error) {
      toast.error("Error creando el partido")
    }

  }, [error])

  return (
    <>
      <div>
      <Head>
        <title>Create Games | JustPlay</title>
      </Head>
    </div>
      <div className='flew flex-col w-full h-full items-center justify-center p-10'>
        <Link href="/games">
          <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
        </Link>
        <div className="flex  justify-center">
          <Image height={60} width={60} src={logoEdit} alt="Your Company" />
        </div>
        <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Create Match</h1>
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
            options={departamentos}
            onChange={updateFormDataDepartamento}
          />

          <Input
            label="Date And Time"
            type="datetime-local"
            name="dateAndTime"
            required={true} />

          <Input
            label="Address"
            type="text"
            name="address"
            required={true} />
          <Input
            label="Phone"
            type="text"
            name="phone"
            required={true} />

          <Input
            label="MaxPlayers"
            type="text"
            name="maxPlayers"
            required={true} />

          <Input
            label="Current Players"
            type="text"
            name="currentPlayers"
            required={true} />

          <Input
            label="Price"
            type="text"
            name="price"
            required={true} />

          <Dropdown
            label="Tipo de juego"
            name="typeGames"
            required={true}
            options={Enum_TypeGames}
          />
          <Dropdown
            label="Estado del juego"
            name="statePlay"
            required={true}
            options={Enum_StatePlay}
          />


          <Input
            label="Comment Host"
            type="text"
            name="commentHost"
            required={true} />

          <ButtonLoading
            disabled={Object.keys(formData).length === 0}
            loading={loading}
            text="Confirm" />
        </form>
      </div>
    </>
  )
}

export default CreateMatch;