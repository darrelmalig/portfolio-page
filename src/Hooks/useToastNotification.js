import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Hook for success notifications
export const useSuccessToast = () => {
    const notifySuccess = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };

    return notifySuccess;
};

// Hook for warning notifications
export const useWarningToast = () => {
    const notifyWarning = (message) => {
        toast.warning(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };

    return notifyWarning;
};

// Hook for error notifications
export const useErrorToast = () => {
    const notifyError = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };

    return notifyError;
};

// Hook for info notifications
export const useInfoToast = () => {
    const notifyInfo = (message) => {
        toast.info(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };

    return notifyInfo;
};