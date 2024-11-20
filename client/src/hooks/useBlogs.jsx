import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBlogs = () => {
    const { data: blogs = [], isPending: loading, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
          const { data } = await axios.get(`BlogData.json`)
          return data  
        },
      })

    return [blogs,loading,refetch]
};

export default useBlogs;