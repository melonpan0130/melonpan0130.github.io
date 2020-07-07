import { ReplaceComponentRendererArgs } from 'gatsby';

export type ITemplateProps<T> = ReplaceComponentRendererArgs['Args'] & {
    pageContext: {
        isCreatedByStatefulCreatePages: boolean;
    } & T;
};