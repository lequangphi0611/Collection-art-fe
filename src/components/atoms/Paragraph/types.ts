export type ParagraphTag = 'span' | 'p';

export type ParagraphProps = {
    children: string | number;
    as?: ParagraphTag;
}
