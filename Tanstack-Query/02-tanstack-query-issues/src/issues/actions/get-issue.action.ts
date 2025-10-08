import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers";
import { GithubIssues } from "../interaces";


export const getIssue = async(issueNumber: number): Promise<GithubIssues> => {

    await sleep(1500);
    const { data } = await githubApi.get<GithubIssues>(`/issues/${ issueNumber }`);
    
    return data;
};