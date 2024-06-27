import { useEffect, useState } from "react";
import { getPhoto } from "../images-api";

import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";

import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import { Photo } from "../App/App.types";


interface ItemsPhoto {
  results: Photo[];
  total: number;
}

const App = () => {
const [photo, setPhoto] = useState<Photo[]>([]);
const [error, setError] = useState<boolean>(false);
const [isLoad, setIsLoad] = useState<boolean>(false);
const [page, setPage] = useState<number>(1);
const [submitQuery, setSubmitQuery] = useState<string>("");
const [isLastPhoto, setIsLastPhoto] = useState<boolean>(false);
const [modalOpen, setModalOpen] = useState<boolean>(false);
const [photoUrl, setPhotoUrl] = useState<string>("");

  
  useEffect(() => {
    if (submitQuery.trim() === "") {
      return;
    }
  
    async function fetchPhotos(): Promise<void> {
      try {
        setIsLoad(true);
        setError(false); 
        
        const items = await getPhoto<ItemsPhoto>(submitQuery, page);

        if (!items || !items.results || typeof items.total !== 'number') {
          throw new Error('Invalid data format');
        }

        const { results, total } = items;
        setPhoto((prevState) => [...prevState, ...results]);
        setIsLastPhoto(page < Math.ceil(total / 12)); 
        
      } catch (error) {          
          setError(true);
      } finally {
          setIsLoad(false);
      }             
      
    }

    fetchPhotos();
  }, [submitQuery, page]);

  const userSearch: (data: string) => Promise<void> = async (data)  => {
    setSubmitQuery(data);
    setPage(1);
    setPhoto([]);
  };

  const loadMoreClick: () => Promise<void> = async () => { setPage(page + 1) };
  const openModal: (url: string) => void = (url) => {setPhotoUrl(url); setModalOpen(true)};
  const closeModal: () => void = () => { setPhotoUrl(""); setModalOpen(false) };
  

  return (
    <div>
      <SearchBar onSearch={userSearch} />
      {error && <ErrorMessage />}
      {photo.length > 0 && (<ImageGallery items={photo} onPhotoClick={openModal} />)}
      {isLastPhoto && <LoadMoreBtn onClick={loadMoreClick} />}
      {isLoad && <Loader />}
      <ImageModal open={modalOpen} close={closeModal} photoUrl={photoUrl} />      
    </div>
  );
}

export default App;
