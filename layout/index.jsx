import { Navbar } from "@/components/ui/Navbar";


const Layout = ({children}) => {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export {Layout};