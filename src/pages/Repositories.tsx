import React from "react";
import {useQuery} from "@apollo/client";
import {searchRepositories} from "../Queries/Repositories";
import {default as RepositoryTable, Repository} from "../Components/RepositoryTable";


type GithubRepo = {
    stargazerCount: number,
    forkCount: number,
    nameWithOwner: string,
    name: string,
    createdAt: string,
    diskUsage: number,
    updatedAt: string
}

type gqlSearchRespData = {
    search: {
        nodes: GithubRepo[],
    }
}
function transformGQLToRepo(gqlSearchRespData: gqlSearchRespData): Repository[] {
    return gqlSearchRespData.search.nodes.map(githubRepo => ({
        name: githubRepo.name,
        forks: githubRepo.forkCount,
        stars: githubRepo.stargazerCount,
        url: `https://github.com/${githubRepo.nameWithOwner}`
    }))
}

const Repositories = () => {
    const {loading, data, error} = useQuery<gqlSearchRespData>(searchRepositories('react'))
    const repositories = data? transformGQLToRepo(data) : []
    if (error) {
        return <span>An error happened. Please try later.</span>
    }
    return (
        <RepositoryTable repositories={repositories} loading={loading}/>
    )
}

export default Repositories
