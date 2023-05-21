import { Movie } from "../../core";
import { IMAGE_SIZE, imageApi } from "../../uils";
import "./SearchVisual.scss";

interface SearchVisualProps {
  item: Movie | null;
  totalCount: number;
}

const SearchVisual: React.FC<SearchVisualProps> = ({ item, totalCount }) => {
  return (
    <section className="search-visual">
      <figure className="search-visual-poster">
        <img src={imageApi(item?.backdrop_path, IMAGE_SIZE.LG)} />
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
