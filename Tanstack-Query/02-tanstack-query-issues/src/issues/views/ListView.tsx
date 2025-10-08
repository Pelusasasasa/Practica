import { useState } from 'react';
import LoadingSpinner from '../../shared/components/LoadingSpinner';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks/useIssues';
import { State } from '../interaces';

export const ListView = () => {
  const [ state, setState] = useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  
  const { issuesQuery, page, nextaPage, prevPage } = useIssues({
    state,
    selectedLabels
  });

  const onLabelSelected = (label: string ) => {
    if(selectedLabels.includes(label)){
      setSelectedLabels(selectedLabels.filter(l => l !== label))
    }else{
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  const issues = issuesQuery.data || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {
          issuesQuery.isLoading ? <LoadingSpinner/> 
          : (
            <>
              <IssueList state={ state } onStateChange={setState} issues={issues}/>

              <div className='flex justify-between items-center'>
                <button onClick={prevPage} className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all'>Anteriores</button>
                <span>{page}</span>
                <button onClick={nextaPage} className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all'>Siguientes</button>
              </div>
            </>
          )
        }
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker onLabelSelected={onLabelSelected} selectedLabels={selectedLabels} />
      </div>
    </div>
  );
};
