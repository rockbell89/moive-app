import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "./DetailFavorite.scss";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { api } from "../../uils";

interface DetailFavoriteProps {
  movieId: string;
}

const DetailFavorite: React.FC<DetailFavoriteProps> = ({ movieId }) => {
  const [favorited, setFavorited] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const variables = {
    userFrom: localStorage.getItem("userId"),
    movieId,
  };

  const toggleFavorite = () => {
    if (!favorited) {
      fetchAddToFavorite();
    } else {
      fetchRemoveFromFavorite();
    }
  };

  const fetchAddToFavorite = async () => {
    try {
      const { data } = await api.post("/favorite/addToFavorite", variables);
      if (data.success) {
        setFavoriteCount((prevCount) => prevCount + 1);
        setFavorited(true);
      } else {
        throw new Error("정보를 가져오는데 실패하여습니다");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRemoveFromFavorite = async () => {
    try {
      const { data } = await api.post(
        "/favorite/removeFromFavorite",
        variables
      );
      if (data) {
        setFavoriteCount((prevCount) => prevCount - 1);
        setFavorited(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFavorited = async () => {
    try {
      const { data } = await api.post("/favorite/favorited", variables);
      if (data.success) {
        setFavorited(data.isFavorited);
      } else {
        throw new Error("정보를 가져오는데 실패하여습니다");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFavoriteCount = async () => {
    try {
      const { data } = await api.post("/favorite/favoriteCount", variables);
      if (data.success) {
        setFavoriteCount(data.count);
      } else {
        throw new Error("정보를 가져오는데 실패하여습니다");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFavorited();
    fetchFavoriteCount();
  }, [favorited]);

  return (
    <div className="detail-favorfite">
      <Button
        type="primary"
        size="large"
        icon={!favorited ? <HeartOutlined /> : <HeartFilled />}
        ghost={true}
        block
        onClick={toggleFavorite}
      >
        Favorite {favoriteCount}
      </Button>
    </div>
  );
};

export default DetailFavorite;
