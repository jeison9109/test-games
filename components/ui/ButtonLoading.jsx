import React from 'react';
import ReactLoading from 'react-loading';
import classnames from 'classnames';

const ButtonLoading = ({disabled, loading,text}) => {
    const buttonClasses = classnames(
        'bg-indigo-700 text-white font-bold text-lg py-3 px-6 rounded-xl hover:bg-indigo-500 shadow-md my-2',
        {
          'disabled:opacity-50 disabled:bg-gray-500': disabled,
        }
      );
    
    return (
        <button
            disabled={disabled}
            type="submit"
            className={buttonClasses}
            // className='bg-indigo-700 text-white font-bold text-lg py-3 px-6 rounded-xl hover:bg-indigo-500 shadow-md my-2 disabled:opacity-50 disabled:bg-gray-500'
        >
            {loading ? <ReactLoading type="spin" height={30} width={30} /> : text}

        </button>
    )
}

export default ButtonLoading;