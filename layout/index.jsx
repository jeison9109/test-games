import { Navbar } from "../components/ui/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({children}) => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <main className="w-full h-auto">
        <Navbar/>
        {children}
    </main>
    <ToastContainer/>
    </div>
    </>


  )
}

export {Layout};