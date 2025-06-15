import graphqlRequest from "./graphqlRequest";
export const getShayaries = async () => {
    const query = {
        query: `{
  shayaries {
    edges {
      node {
        title
        id
        content
        date
        slug
      }
    }
  }
}`,
    };
    try {
        const resJson = await graphqlRequest(query);
        return resJson?.data?.shayaries?.edges || [];
    } catch {
        return [];
    }
};
