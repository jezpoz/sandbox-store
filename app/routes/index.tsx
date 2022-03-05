import { useLoaderData } from 'remix';

import ContentTransformer from '../components/ContentTransformer';
import Images from '../components/Images';
import { fetchPageRequest } from '../crystallize/queries';
import { CatalogueRequest } from '../crystallize/client';

export const loader = async () => {
  const {query, variables} = fetchPageRequest('en', '/homepage');
  const page = await CatalogueRequest(query, variables);
  return page;
}

export default function Index() {
  const page = useLoaderData();
  return (
    <main>
      {page.components.map((component: any, i: number) => {
        if (component.type === 'singleLine') {
          if (component.id === 'title') {
            return (
              <h1 key={i}>{component.content.text}</h1>
            );
          }
          return (
            <p key={i}>{component.content.text}</p>
          );
        }
        if (component.type === 'images') {
          return (
            <Images key={i} images={component.content.images} sizes='(max-width: 700px) 90vw, 700px'/>
          )
        }
        if (component.type === 'richText') {
          return (
            <ContentTransformer key={i} json={component.content.json} />
          );
        }
        if (component.type === 'paragraphCollection') {
          return (
            <ContentTransformer key={i} json={component.content} />
          );
        }
        return null;
      })}
    </main>
  );
}
