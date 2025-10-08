import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { FiSkipBack } from 'react-icons/fi';
import { useIssue } from '../hooks';
import LoadingSpinner from '../../shared/components/LoadingSpinner';

export const IssueView = () => {
  const navigate = useNavigate();
  const params = useParams();
  
  const issueNumber = Number(params.issueNumber ?? 0);

  const {issuesQuery, commentsQuery } = useIssue(issueNumber);

  if(issuesQuery.isLoading) {
    return <div> Cargando Issue</div>
  }

  if(!issuesQuery.data) {
    return <Navigate to='/404'/>
  }

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>

    {/* Todo */}
      {/* Primer comentario */}
      <IssueComment issue={issuesQuery.data} />


      {
        commentsQuery.isLoading 
        ? <LoadingSpinner/>
        : (
          commentsQuery?.data?.map((comment) => (
            <IssueComment key={comment.id} issue={comment}/>
          ))
        )
      }

      {/* Comentario de otros */}
      {/* <IssueComment body={comment2} />
      <IssueComment body={comment3} /> */}
    </div>
  );
};
