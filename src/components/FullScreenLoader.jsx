import { ClipLoader } from 'react-spinners';
import './FullScreenLoader.css';

function FullScreenLoader() {
  return (
    <div className="fullscreen-loader">
      <ClipLoader color="#f97316" size={70} />
      <p>Loading Soto's Store...</p>
    </div>
  );
}

export default FullScreenLoader;
