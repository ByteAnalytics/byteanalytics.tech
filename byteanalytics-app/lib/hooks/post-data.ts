// import { toast } from "sonner";
// import { ICallServerActionOptions } from "../types/server";
// import { useAppContext } from "../context/app";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export const UsePostRequestData = <T>({
//     method,
//     modalCloseTrigger = false,
//     tag,
//     formDataBody = false,
//     showToast = true,
//     auth = false,
//   }: ICallServerActionOptions<T>) => {
//     const modalAction = useAppContext();
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [dataResponse, setdataResponse] = useState<any>();
//     const [responseCode, setResponseCode] = useState<number | null>();
//     const ResetResponseState = () => {
//       setdataResponse(() => null);
//       setResponseCode(() => null);
//     };
//     const handlePostdata = async ({
//       body,
//       url,
//     }: {
//       body?: T;
//       url: string;
//     }): Promise<void> => {
//       try {
//         setIsLoading(true);
//         const response = await postRequestData<T>({
//           url,
//           method,
//           tag,
//           body,
//           formDataBody,
//           auth,
//         });
  
//         const { code, message, data } = response;
//         setResponseCode(code);
//         if (code === 200 || code === 201) {
//           if (showToast) {
//             toast.success(message);
//           }
//         //   if (auth) {
//         //     router.push('/dashboard/home');
//         //   }
//           if (data) {
//             setdataResponse(data);
//           }
//           if (modalCloseTrigger && modalAction.modalCloseTrigger) {
//             modalAction.modalCloseTrigger.current?.click();
//           }
//         } else {
//           toast.error(message);
//         }
//       } catch (error) {
//         if (error instanceof Error) {
//           toast.error(error.message || 'An error occurred');
//         } else {
//           toast.error('An unknown error occurred');
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     return {
//       isLoading,
//       ResetResponseState,
//       handlePostdata,
//       dataResponse,
//       responseCode,
//     };
//   };