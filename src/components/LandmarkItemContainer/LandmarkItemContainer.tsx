import React, { useEffect, useState } from "react";
import useContract from "../../api/swr/useContract";
import { useUser } from "../../api/swr/useUser";
import Loader from "../Loader/Loader";
import LandmarkItem from "../LandmarkItem/LandmarkItem";
import { MOCKEDLANDMARKITEM } from "../../constants/constants";
import useSWR from "swr";

const LandmarkItemContainer = ({ id }: { id: number }) => {
  const { myContracts } = useContract();
  const { User } = useUser();
  const [landmarkId, setLandmarkId] = useState();
  const [landInfo, setLandInfo] = useState<any>();
  const [landmark, setLandmark] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const response = await myContracts.landmarksContract
        .tokenOfOwnerByIndex(User, id)
        .call({ from: User });
      setLandmarkId(response);
    };

    getData();
  }, [id]);

  useEffect(() => {
    const getData = async () => {
      const response = await myContracts.landmarksContract
        .landInfos(landmarkId)
        .call({ from: User });
      setLandInfo(response);
    };

    if (landmarkId) {
      getData();
    }
  }, [landmarkId]);

  useEffect(() => {
    if (landInfo) {
      const getData = async () => {
        fetch(
          `https://api.planetix.com/api/v1/landmarks/details/${landInfo?.landmarkType}`
        )
          .then((r) => r.json())
          .then((r) => setLandmark(r.data));
      };

      getData();
    }
  }, [landInfo]);

  if (!landmark) {
    return <LandmarkItem {...MOCKEDLANDMARKITEM} isLoading={true} />;
  }

  return (
    <LandmarkItem
      {...MOCKEDLANDMARKITEM}
      title={landmark.name}
      image={landmark.image}
    />
  );
};

export default LandmarkItemContainer;
