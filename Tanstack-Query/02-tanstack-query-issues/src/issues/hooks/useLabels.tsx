
import { getLabels } from '../actions';
import { useQuery } from '@tanstack/react-query';

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, //1 Hora de stale time

    // placeholderData: [
    //   {"id":196858374,"node_id":"MDU6TGFiZWwxOTY4NTgzNzQ=","url":"https://api.github.com/repos/facebook/react/labels/CLA%20Signed","name":"CLA Signed","color":"e7e7e7","default":false},
    //   {"id":760751171,"node_id":"MDU6TGFiZWw3NjA3NTExNzE=","url":"https://api.github.com/repos/facebook/react/labels/Difficulty:%20challenging","name":"Difficulty: challenging","color":"f2687c","default":false}
    // ]

    // initialData: [
    //   {"id":196858374,"node_id":"MDU6TGFiZWwxOTY4NTgzNzQ=","url":"https://api.github.com/repos/facebook/react/labels/CLA%20Signed","name":"CLA Signed","color":"e7e7e7","default":false},
    //   {"id":760751171,"node_id":"MDU6TGFiZWw3NjA3NTExNzE=","url":"https://api.github.com/repos/facebook/react/labels/Difficulty:%20challenging","name":"Difficulty: challenging","color":"f2687c","default":false}
    // ]
  });

  return {
    labelsQuery
  };
};