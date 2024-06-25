import useSWRImmutable from "swr/immutable";

const useContract = () => {
  const { data, error, mutate } = useSWRImmutable("web3Contract");
  return { myContracts: data, error, mutate };
};

export default useContract;
