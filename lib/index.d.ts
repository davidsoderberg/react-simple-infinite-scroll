import * as React from 'react';
export interface InfiniteScrollProps {
    /**
     * Does the resource have more entities
     */
    hasMore: boolean;
    /**
     * Should show loading
     */
    isLoading: boolean;
    /**
     * Callback to load more entities
     */
    onLoadMore: () => void;
    /**
     * Scroll threshold
     */
    threshold?: number;
    /**
     * Throttle rate
     */
    throttle?: number;
    /** Children */
    children?: any;
    /**
     * Callback for convenient inline rendering and wrapping
     */
    render?: (a: object) => any;
    /**
     * A React component to act as wrapper
     */
    component?: any;
}
export declare class InfiniteScroll extends React.Component<InfiniteScrollProps, {}> {
    static defaultProps: Pick<InfiniteScrollProps, 'threshold' | 'throttle'>;
    private sentinel;
    private scrollHandler;
    private resizeHandler;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    checkWindowScroll: () => void;
    render(): any;
}
declare const _default: React.ComponentFactory<InfiniteScrollProps, InfiniteScroll>;
export default _default;
