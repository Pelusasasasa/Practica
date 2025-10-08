import { useQuery } from "@tanstack/react-query"
import { getIssue, getIssueComments } from "../actions"


export const useIssue = (issueNumber: number) => {

    const issuesQuery = useQuery({
        queryKey: ['issues', issueNumber],
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60,
    });

    // const commentsQuery = useQuery({
    //     queryKey: ['issues', issueNumber, 'comments'],
    //     queryFn: () => getIssueComments(issueNumber),
    //     staleTime: 1000 * 60,
    // });
    const commentsQuery = useQuery({
        queryKey: ['issues', issuesQuery.data?.number, 'comments'],
        queryFn: () => getIssueComments(issuesQuery.data!.number),
        staleTime: 1000 * 60,
        enabled: issuesQuery.data !== undefined
    });

    return {
        issuesQuery,
        commentsQuery
    }
}