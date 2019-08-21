export interface AppState<T> {
    data: T;
    errorMessage: string;
    isLoading: boolean;
}
