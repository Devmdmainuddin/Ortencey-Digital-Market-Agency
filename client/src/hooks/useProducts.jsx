
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
  const { data: products = [], isPending: loading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get(`FakeData.json`)
      return data  
    },
  })
    return [products,loading,refetch]
};

export default useProducts;
