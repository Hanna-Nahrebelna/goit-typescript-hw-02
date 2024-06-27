import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";


interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const query = form.querySelector('input[name="query"]') as HTMLInputElement;
    const queryValue = query.value.trim();

    if (queryValue === "") {
      toast("Please fill in search form", {
        style: { color: 'blue' },
      });
      return;
    }

    onSearch(queryValue);    
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
           autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}

export default SearchBar;