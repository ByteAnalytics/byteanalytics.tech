export interface textPropType {
    style: string;
    children: React.ReactNode;
    as?: 'h2' | 'h1' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    clickFunc?: () => void;
}