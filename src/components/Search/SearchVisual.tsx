import { Movie } from "../../core";
import "./SearchVisual.scss";

interface SearchVisualProps {
  item: Movie | null;
  totalCount: number;
}

const SearchVisual: React.FC<SearchVisualProps> = ({ item, totalCount }) => {
  return (
    <section className="search-visual">
      <figure className="search-visual-poster">
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}/w1280${
            item?.backdrop_path
          }`}
        />
      </figure>
      <div className="search-visual-desc">
        <h2>SEARCH</h2>
        <p>
          TOTAL <span>{totalCount}</span>
        </p>
      </div>
    </section>
  );
};

export default SearchVisual;
