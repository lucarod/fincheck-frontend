import { Modal } from '@components/modals/Modal';
import { Button } from '@components/Button';
import { TrashIcon } from '@components/icons/TrashIcon';

interface ConfirmDeleteModalProps {
  title: string;
  description?: string;
  isPending?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ConfirmDeleteModal({
  title,
  description,
  isPending,
  onClose,
  onConfirm,
}: ConfirmDeleteModalProps) {
  return (
    <Modal open onClose={onClose} title="Excluir">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-[52px] h-[52px] rounded-full bg-red-50 flex items-center justify-center">
          <TrashIcon className="w-6 h-6 text-red-900" />
        </div>
        <p className="w-[180px] text-gray-800 font-bold tracking-[-0.5px]">
          {title}
        </p>
        {description && (
          <p className="tracking-[-0.5px]">
            {description}
          </p>
        )}

      </div>
      <div className="mt-10 space-y-4">
        <Button
          className="w-full"
          variant="danger"
          onClick={onConfirm}
        >
          Sim, desejo excluir
        </Button>
        <Button
          className="w-full"
          variant="ghost"
          onClick={onClose}
          isPending={isPending}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}
