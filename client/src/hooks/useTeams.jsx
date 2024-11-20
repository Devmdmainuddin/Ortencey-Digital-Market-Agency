import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useTeams = () => {
    const { data: team = [], isPending: loading, refetch } = useQuery({
        queryKey: ['team'],
        queryFn: async () => {
          const { data } = await axios.get(`TeamData.json`)
          return data  
        },
      })
        return [team,loading,refetch]
};

export default useTeams;