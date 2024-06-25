import useSWRImmutable from "swr/immutable";

export const useUser = () => {
  const { data, error, mutate } = useSWRImmutable("authUser");
  return { User: data, error, mutate };
};
