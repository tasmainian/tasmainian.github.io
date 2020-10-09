exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
        name
        repositories(last: 20, orderBy: {field: UPDATED_AT, direction: ASC}) {
          nodes {
            id
            name
            description
            url
            updatedAt
            forkCount
            openGraphImageUrl
            stargazers {
              totalCount
            }
            readme: object(expression: "master:README.md") {
              ... on Blob {
                text
              }
            }
            licenseInfo {
              id
            }
            primaryLanguage {
              name
            }
            languages(first: 10) {
              nodes {
                name
              }
            }
          }
        }
    }
  }
`