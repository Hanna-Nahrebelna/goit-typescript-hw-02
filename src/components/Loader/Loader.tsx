import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css'


export default function Loader() {
return(
    <div className={css.loader}>        
    <Circles height = "80" width = "100" color = "#4fa94d" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" 
    visible={true}
/>
<p>Loading photo, please wait...</p>
        </div>

    )
}
