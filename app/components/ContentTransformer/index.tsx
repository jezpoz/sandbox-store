import { ContentTransformer, NodeContent, Overrides, NodeProps } from '@crystallize/react-content-transformer';

const overrides: Overrides = {
  link: (props: NodeProps) => (
    <a href={props.metadata?.href}>
      <NodeContent {...props} />
    </a>
  ),
};

export interface ContentTransformer {
  json: NodeProps;
}

export default function ({json}: ContentTransformer) {
  return (
    <ContentTransformer json={json} overrides={overrides} />
  );
}

