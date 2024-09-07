export interface ICallServerActionOptions<T> {
  method: 'PUT' | 'POST' | 'DELETE' | 'PATCH';
  modalCloseTrigger?: boolean;
  tag?: string;
  showToast?: boolean;
  auth?: boolean;
  formDataBody?: boolean;
}
