import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom';
import FetchItems from '../Components/FetchItems';
import { useSelector } from 'react-redux';
import LoadSpinner from '../Components/LoadSpinner';
function App() {
  const fetchStatus = useSelector(store => store.fetchStatus);

  return (
    <>
      < Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadSpinner /> : < Outlet />}
      < Footer />
    </>
  )
}

export default App
