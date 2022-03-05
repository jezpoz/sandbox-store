import { GraphQLClient } from 'graphql-request';

const catalogueApi: string = 'https://api.crystallize.com/jespers-crystallize-sandbox/catalogue';
const searchApi: string = 'https://api.crystallize.com/jespers-crystallize-sandbox/search';

const catalogueClient = new GraphQLClient(catalogueApi);
const searchClient = new GraphQLClient(searchApi);

export interface CatalogueApiResponse<T> {
  catalogue: T;
}

export const CatalogueRequest: <T>(request: string, variables: any) => Promise<T | null> = async <T>(request: string, variables: any): Promise<T | null> => {
  try {
    const data = await catalogueClient.request<CatalogueApiResponse<T>>(request, variables);
    if (data.catalogue) {
      return data.catalogue;
    }
    return null;
  } catch (err) {
    console.error('Error when fetching from Catalogue API:', err)
    throw err;
  }
}

export const SearchRequest: <T>(request: string, variables: any) => Promise<T> = async <T>(request: string, variables: any): Promise<T> => {
  try {
    const data = await searchClient.request<T>(request, variables) as T;
    return data;
  } catch (err) {
    console.error('Error when fetching from Catalogue API:', err)
    throw err;
  }
}