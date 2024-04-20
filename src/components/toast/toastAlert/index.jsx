import toast from "react-hot-toast";
import { Stack } from "@mui/material";

const toastSuccess = ({ message, options }) => {
  toast.success(<Stack>
    <span style={{ fontSize: '16px' }}>{message}</span>
    <span style={{ fontSize: '10px' }}>Ação feita corretamente</span>
  </Stack>, options);
}

const toastError = ({ message, options }) => {
  toast.error(<Stack>
    <span style={{ fontSize: '16px' }}>{message}</span>
    <span style={{ fontSize: '10px' }}>Erro na ação</span>
  </Stack>, options);
}

const toastWarning = ({ message, options }) => {
  toast(<Stack>
    <span style={{ fontSize: '16px' }}>{message}</span>
    <span style={{ fontSize: '10px' }}>Ops, algo deu errado</span>
  </Stack>, options);
}

export {
  toastSuccess,
  toastError,
  toastWarning
}
